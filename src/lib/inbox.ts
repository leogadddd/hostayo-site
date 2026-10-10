import type { EarlyAccessRequest } from "./early-access";

/** Thrown when the app's address or shared secret is missing, so the caller can tell it from a failed save. */
export class InboxNotConfiguredError extends Error {
  constructor() {
    super("EARLY_ACCESS_API_SECRET is not set.");
    this.name = "InboxNotConfiguredError";
  }
}

/**
 * Saves one early-access request in the Hostayo app's database, where the L1
 * team reads it. This copy survives a failed notification email. Resolves once
 * the app has stored it.
 */
export async function saveEarlyAccessRequest(
  request: EarlyAccessRequest,
): Promise<void> {
  const secret = process.env.EARLY_ACCESS_API_SECRET?.trim();
  if (!secret) throw new InboxNotConfiguredError();

  const base = (
    process.env.EARLY_ACCESS_API_URL?.trim() ||
    process.env.NEXT_PUBLIC_APP_URL ||
    "https://app.hostayo.casa"
  ).replace(/\/+$/, "");
  const response = await fetch(`${base}/api/early-access`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${secret}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
    signal: AbortSignal.timeout(10_000),
  });
  if (!response.ok) {
    throw new Error(
      `The app responded ${response.status}: ${(await response.text()).slice(0, 200)}`,
    );
  }
}
