"use server";

import { headers } from "next/headers";
import { parseEarlyAccess, type EarlyAccessState } from "@/lib/early-access";
import { InboxNotConfiguredError, saveEarlyAccessRequest } from "@/lib/inbox";
import { MailNotConfiguredError, sendEarlyAccessEmail } from "@/lib/mailer";

// Every request becomes an email in a personal inbox, so cap how fast they
// can arrive. Kept in memory: on serverless hosting each instance counts on
// its own, which slows a flood down rather than stopping it outright.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_VISITOR = 3;
const MAX_OVERALL = 30;
const recent = new Map<string, number[]>();

function allow(key: string, limit: number, now: number): boolean {
  const hits = (recent.get(key) ?? []).filter((at) => now - at < WINDOW_MS);
  if (hits.length >= limit) {
    recent.set(key, hits);
    return false;
  }
  hits.push(now);
  recent.set(key, hits);
  if (recent.size > 5_000) {
    for (const [other, times] of recent) {
      if (times.every((at) => now - at >= WINDOW_MS)) recent.delete(other);
    }
  }
  return true;
}

const SENT: EarlyAccessState = { status: "success" };

/** Validates an early-access request and emails it to the team. */
export async function requestEarlyAccess(
  _previous: EarlyAccessState,
  form: FormData,
): Promise<EarlyAccessState> {
  // Hidden from people; a filled value means a bot. Answer as if it worked.
  if (String(form.get("fax_number") ?? "").trim()) return SENT;

  const parsed = parseEarlyAccess(form);
  if (!parsed.ok) {
    return {
      status: "error",
      fieldErrors: parsed.fieldErrors,
      values: parsed.values,
    };
  }
  const values = { ...parsed.request };

  const forwardedFor = (await headers()).get("x-forwarded-for");
  const visitor = forwardedFor?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  if (
    !allow(`visitor:${visitor}`, MAX_PER_VISITOR, now) ||
    !allow("overall", MAX_OVERALL, now)
  ) {
    return {
      status: "error",
      message:
        "We've received a few requests from you already. Please try again in a few minutes.",
      values,
    };
  }

  // Two copies of every request: the app's database and an email. Either one
  // is enough for the team to find it, so only fail when both are lost.
  const [saved, emailed] = await Promise.allSettled([
    saveEarlyAccessRequest(parsed.request),
    sendEarlyAccessEmail(parsed.request),
  ]);
  if (saved.status === "rejected") {
    console.error(
      "[early-access] could not save the request in the app:",
      saved.reason instanceof Error ? saved.reason.message : saved.reason,
    );
  }
  if (emailed.status === "rejected") {
    console.error(
      "[early-access] could not send the request email:",
      emailed.reason instanceof Error ? emailed.reason.message : emailed.reason,
    );
  }
  if (saved.status === "fulfilled" || emailed.status === "fulfilled") {
    return SENT;
  }

  if (
    process.env.NODE_ENV !== "production" &&
    (saved.reason instanceof InboxNotConfiguredError ||
      emailed.reason instanceof MailNotConfiguredError)
  ) {
    return {
      status: "error",
      message:
        "Nothing is set up to receive requests: add EARLY_ACCESS_API_SECRET, or RESEND_API_KEY and EARLY_ACCESS_TO_EMAIL, to .env, then try again.",
      values,
    };
  }
  return {
    status: "error",
    message:
      "We couldn't send your request just now. Please try again in a moment, or message us instead:",
    offerFacebook: true,
    values,
  };
}
