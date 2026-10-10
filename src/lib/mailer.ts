import nodemailer from "nodemailer";
import {
  sourceLabel,
  unitsLabel,
  type EarlyAccessRequest,
} from "./early-access";

/** Thrown when no mail provider is configured, so the caller can say so in development. */
export class MailNotConfiguredError extends Error {
  constructor() {
    super(
      "Set RESEND_API_KEY and EARLY_ACCESS_TO_EMAIL, or GMAIL_USER and GMAIL_APP_PASSWORD.",
    );
    this.name = "MailNotConfiguredError";
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

interface Message {
  to: string;
  replyTo?: string;
  subject: string;
  text: string;
  html: string;
}

function buildMessage(request: EarlyAccessRequest, to: string): Message {
  const sentAt = new Intl.DateTimeFormat("en-PH", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Manila",
  }).format(new Date());
  const rows: [string, string][] = [
    ["Name", request.name],
    ["Email", request.email],
    ["Facebook / Instagram", request.social],
    ["Units", unitsLabel(request.units)],
    ["Bookings come from", sourceLabel(request.source)],
    ["Sent", `${sentAt} (Asia/Manila)`],
  ];
  return {
    to,
    replyTo: request.email,
    subject: `Early access request: ${request.name} (${unitsLabel(request.units)} ${request.units === "1" ? "unit" : "units"})`,
    text: [
      "New early-access request from hostayo.casa",
      "",
      ...rows.map(([label, value]) => `${label}: ${value}`),
    ].join("\n"),
    html: `<p>New early-access request from hostayo.casa</p><table cellpadding="6" style="border-collapse:collapse">${rows
      .map(
        ([label, value]) =>
          `<tr><td style="color:#5b6b66">${escapeHtml(label)}</td><td><strong>${escapeHtml(value)}</strong></td></tr>`,
      )
      .join("")}</table>`,
  };
}

/** Resend's HTTP API: one POST, no SMTP login to lock. */
async function sendWithResend(message: Message, apiKey: string): Promise<void> {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from:
        process.env.EARLY_ACCESS_FROM?.trim() ||
        "Hostayo early access <onboarding@resend.dev>",
      to: [message.to],
      reply_to: message.replyTo,
      subject: message.subject,
      text: message.text,
      html: message.html,
    }),
    signal: AbortSignal.timeout(15_000),
  });
  if (!response.ok) {
    throw new Error(
      `Resend responded ${response.status}: ${(await response.text()).slice(0, 300)}`,
    );
  }
}

async function sendWithGmail(
  message: Message,
  user: string,
  pass: string,
): Promise<void> {
  const port = Number(process.env.SMTP_PORT) || 465;
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST?.trim() || "smtp.gmail.com",
    port,
    secure: port === 465,
    auth: { user, pass },
    // Fail the form quickly instead of leaving the visitor on a spinner.
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });
  try {
    await transport.sendMail({
      from: { name: "Hostayo early access", address: user },
      ...message,
    });
  } finally {
    transport.close();
  }
}

function buildConfirmation(
  request: EarlyAccessRequest,
  replyTo: string,
): Message {
  const firstName = request.name.split(" ")[0];
  const lines = [
    `Hi ${firstName},`,
    "",
    "Thank you for asking for early access to Hostayo. We got your request.",
    "",
    "We're opening Hostayo to a small group of hosts first. We'll message you personally with your invite link, usually within a day, on the email or Facebook / Instagram account you gave us.",
    "",
    "Until then you can look around the live demo: https://demo.hostayo.casa/login?demo=1",
    "",
    "Reply to this email if you have any questions.",
    "",
    "Hostayo",
  ];
  return {
    to: request.email,
    replyTo,
    subject: "We got your Hostayo early access request",
    text: lines.join("\n"),
    html: `<div style="font-family:Inter,Arial,sans-serif;max-width:480px;color:#203a35;line-height:1.55"><p>Hi ${escapeHtml(firstName)},</p><p>Thank you for asking for early access to Hostayo. We got your request.</p><p>We're opening Hostayo to a small group of hosts first. We'll message you personally with your invite link, usually within a day, on the email or Facebook / Instagram account you gave us.</p><p>Until then you can look around the <a href="https://demo.hostayo.casa/login?demo=1">live demo</a>.</p><p>Reply to this email if you have any questions.</p><p>Hostayo</p></div>`,
  };
}

/**
 * Emails one early-access request to the team, then a confirmation to the
 * visitor. Uses Resend when RESEND_API_KEY is set, otherwise Gmail SMTP with a
 * Google app password. Read at call time, so changing the environment needs no
 * rebuild. Resolves once the provider has accepted the team's email; the
 * confirmation is best-effort, since the request is already safely received.
 */
export async function sendEarlyAccessEmail(
  request: EarlyAccessRequest,
): Promise<void> {
  const resendKey = process.env.RESEND_API_KEY?.trim();
  const user = process.env.GMAIL_USER?.trim();
  // Google shows app passwords in four spaced groups; SMTP wants them joined.
  const pass = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, "");
  const to = process.env.EARLY_ACCESS_TO_EMAIL?.trim() || user;

  let send: ((message: Message) => Promise<void>) | undefined;
  if (resendKey && to) send = (message) => sendWithResend(message, resendKey);
  else if (user && pass && to)
    send = (message) => sendWithGmail(message, user, pass);
  if (!send || !to) throw new MailNotConfiguredError();

  await send(buildMessage(request, to));

  try {
    await send(buildConfirmation(request, to));
  } catch (error) {
    console.error(
      "[early-access] could not send the confirmation email:",
      error instanceof Error ? error.message : error,
    );
  }
}
