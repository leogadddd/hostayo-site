/** The early-access request form: its choices and validation, shared by the form and the server action. */

export const UNIT_OPTIONS = [
  { value: "1", label: "1" },
  { value: "2-5", label: "2–5" },
  { value: "6-20", label: "6–20" },
  { value: "20+", label: "More than 20" },
] as const;

export const SOURCE_OPTIONS = [
  { value: "messenger", label: "Messenger / Facebook" },
  { value: "ota", label: "Airbnb / Booking.com" },
  { value: "both", label: "Both" },
  { value: "starting", label: "Just starting out" },
] as const;

export type EarlyAccessField = "name" | "email" | "social" | "units" | "source";

export interface EarlyAccessRequest {
  name: string;
  email: string;
  /** Facebook or Instagram profile link or handle, for a faster reply. */
  social: string;
  units: (typeof UNIT_OPTIONS)[number]["value"];
  source: (typeof SOURCE_OPTIONS)[number]["value"];
}

export interface EarlyAccessState {
  status: "idle" | "success" | "error";
  /** Shown above the form when the request as a whole couldn't be sent. */
  message?: string;
  /** Sending failed on our side: offer another way to reach the team. */
  offerFacebook?: boolean;
  fieldErrors?: Partial<Record<EarlyAccessField, string>>;
  /** What the visitor typed, so a failed attempt doesn't clear the form. */
  values?: Partial<Record<EarlyAccessField, string>>;
}

export const NAME_MAX = 80;
export const EMAIL_MAX = 120;
export const SOCIAL_MAX = 200;

const EMAIL_PATTERN = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;

/** Collapses whitespace, so a value is safe on one line of an email. */
function oneLine(value: FormDataEntryValue | null): string {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim();
}

export function parseEarlyAccess(form: FormData):
  | { ok: true; request: EarlyAccessRequest }
  | {
      ok: false;
      fieldErrors: NonNullable<EarlyAccessState["fieldErrors"]>;
      values: NonNullable<EarlyAccessState["values"]>;
    } {
  const name = oneLine(form.get("name"));
  const email = oneLine(form.get("email"));
  const social = oneLine(form.get("social"));
  const units = oneLine(form.get("units"));
  const source = oneLine(form.get("source"));

  const fieldErrors: NonNullable<EarlyAccessState["fieldErrors"]> = {};
  if (name.length < 2) fieldErrors.name = "Please tell us your name.";
  else if (name.length > NAME_MAX) fieldErrors.name = "That name is too long.";

  if (!EMAIL_PATTERN.test(email) || email.length > EMAIL_MAX)
    fieldErrors.email = "Enter an email address we can reach you on.";

  if (social.length < 3)
    fieldErrors.social =
      "Add your Facebook or Instagram link or username so we can message you.";
  else if (social.length > SOCIAL_MAX)
    fieldErrors.social = "That's too long. A link or a username is enough.";

  const unitOption = UNIT_OPTIONS.find((option) => option.value === units);
  if (!unitOption) fieldErrors.units = "Choose how many units you host.";

  const sourceOption = SOURCE_OPTIONS.find((option) => option.value === source);
  if (!sourceOption)
    fieldErrors.source = "Choose where your bookings come from.";

  if (!unitOption || !sourceOption || Object.keys(fieldErrors).length > 0) {
    return {
      ok: false,
      fieldErrors,
      values: { name, email, social, units, source },
    };
  }
  return {
    ok: true,
    request: {
      name,
      email,
      social,
      units: unitOption.value,
      source: sourceOption.value,
    },
  };
}

export function unitsLabel(value: EarlyAccessRequest["units"]): string {
  return UNIT_OPTIONS.find((option) => option.value === value)?.label ?? value;
}

export function sourceLabel(value: EarlyAccessRequest["source"]): string {
  return (
    SOURCE_OPTIONS.find((option) => option.value === value)?.label ?? value
  );
}
