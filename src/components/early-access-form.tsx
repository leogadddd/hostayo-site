"use client";

import { useActionState, useEffect, useRef } from "react";
import { ArrowRight, CircleAlert, CircleCheck } from "lucide-react";
import { requestEarlyAccess } from "@/app/early-access-action";
import {
  EMAIL_MAX,
  NAME_MAX,
  SOCIAL_MAX,
  SOURCE_OPTIONS,
  UNIT_OPTIONS,
  type EarlyAccessField,
  type EarlyAccessState,
} from "@/lib/early-access";
import { SUPPORT_FACEBOOK_URL } from "@/lib/support";
import { cn } from "@/lib/utils";

const INITIAL: EarlyAccessState = { status: "idle" };

const INPUT =
  "h-12 w-full rounded-xl border border-pine/20 bg-white px-4 text-base text-ink placeholder:text-ink/35 focus:border-pine focus:ring-2 focus:ring-sage focus:outline-none aria-invalid:border-clay";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-sm text-clay-deep">
      {message}
    </p>
  );
}

/** One-of-many choice drawn as pills; plain radio buttons underneath. */
function Choices({
  name,
  legend,
  options,
  selected,
  error,
}: {
  name: EarlyAccessField;
  legend: string;
  options: readonly { value: string; label: string }[];
  selected?: string;
  error?: string;
}) {
  const errorId = `early-access-${name}-error`;
  return (
    <fieldset aria-describedby={error ? errorId : undefined}>
      <legend className="text-sm font-semibold text-pine">{legend}</legend>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((option, index) => (
          <label key={option.value} className="cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option.value}
              defaultChecked={selected === option.value}
              required={index === 0}
              className="peer sr-only"
            />
            <span className="inline-flex h-10 items-center rounded-full border border-pine/20 bg-white px-4 text-sm font-medium text-pine transition-colors peer-checked:border-pine peer-checked:bg-pine peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-sage-deep hover:border-pine/45">
              {option.label}
            </span>
          </label>
        ))}
      </div>
      <FieldError id={errorId} message={error} />
    </fieldset>
  );
}

export function EarlyAccessForm({
  demoUrl,
  privacyUrl,
}: {
  demoUrl: string;
  privacyUrl: string;
}) {
  const [state, action, pending] = useActionState(requestEarlyAccess, INITIAL);
  const done = useRef<HTMLDivElement>(null);
  const sent = state.status === "success";

  // The form is replaced by the confirmation; move focus there so keyboard
  // and screen-reader users land on it instead of on nothing.
  useEffect(() => {
    if (sent) done.current?.focus();
  }, [sent]);

  if (sent) {
    return (
      <div ref={done} tabIndex={-1} role="status" className="outline-none">
        <span className="grid size-12 place-items-center rounded-2xl bg-sage text-pine">
          <CircleCheck className="size-6" aria-hidden />
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold text-pine">
          Request sent.
        </h3>
        <p className="mt-2 leading-relaxed text-pine/75">
          Thank you. A confirmation is on its way to your email, and we’ll message you
          personally with your invite link, usually within a day. Until then,
          the demo is open.
        </p>
        <a
          href={demoUrl}
          className="group mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-pine px-6 font-semibold text-white transition-all hover:gap-3 hover:bg-pine-soft"
        >
          Try the live demo
          <ArrowRight className="size-4" aria-hidden />
        </a>
      </div>
    );
  }

  const errors = state.fieldErrors ?? {};
  const values = state.values ?? {};

  return (
    <form action={action} className="space-y-5">
      <div>
        <h3 className="font-display text-2xl font-bold text-pine">
          Request your invite
        </h3>
        <p className="mt-1 text-sm text-pine/65">
          Five quick questions. No account or payment needed.
        </p>
      </div>

      {state.message ? (
        <p
          role="alert"
          className="flex items-start gap-2 rounded-xl border border-clay/25 bg-clay-mist/70 px-4 py-3 text-sm text-clay-deep"
        >
          <CircleAlert className="mt-0.5 size-4 shrink-0" aria-hidden />
          <span>
            {state.message}
            {state.offerFacebook ? (
              <>
                {" "}
                <a
                  href={SUPPORT_FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline underline-offset-4"
                >
                  Open our Facebook page
                </a>
              </>
            ) : null}
          </span>
        </p>
      ) : null}

      <div>
        <label
          htmlFor="early-access-name"
          className="text-sm font-semibold text-pine"
        >
          Your name
        </label>
        <input
          id="early-access-name"
          name="name"
          autoComplete="name"
          required
          minLength={2}
          maxLength={NAME_MAX}
          defaultValue={values.name}
          placeholder="Juan Dela Cruz"
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? "early-access-name-error" : undefined}
          className={cn(INPUT, "mt-2")}
        />
        <FieldError id="early-access-name-error" message={errors.name} />
      </div>

      <div>
        <label
          htmlFor="early-access-email"
          className="text-sm font-semibold text-pine"
        >
          Email
        </label>
        <input
          id="early-access-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          minLength={5}
          maxLength={EMAIL_MAX}
          defaultValue={values.email}
          placeholder="you@example.com"
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={
            errors.email
              ? "early-access-email-error"
              : "early-access-email-hint"
          }
          className={cn(INPUT, "mt-2")}
        />
        {errors.email ? (
          <FieldError id="early-access-email-error" message={errors.email} />
        ) : (
          <p id="early-access-email-hint" className="mt-1.5 text-sm text-pine/55">
            We’ll send a confirmation here.
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="early-access-social"
          className="text-sm font-semibold text-pine"
        >
          Facebook or Instagram
        </label>
        <input
          id="early-access-social"
          name="social"
          autoComplete="off"
          required
          minLength={3}
          maxLength={SOCIAL_MAX}
          defaultValue={values.social}
          placeholder="facebook.com/yourname or @yourhandle"
          aria-invalid={errors.social ? true : undefined}
          aria-describedby={
            errors.social
              ? "early-access-social-error"
              : "early-access-social-hint"
          }
          className={cn(INPUT, "mt-2")}
        />
        {errors.social ? (
          <FieldError id="early-access-social-error" message={errors.social} />
        ) : (
          <p id="early-access-social-hint" className="mt-1.5 text-sm text-pine/55">
            This is the fastest way for us to reach you.
          </p>
        )}
      </div>

      <Choices
        name="units"
        legend="How many units do you host?"
        options={UNIT_OPTIONS}
        selected={values.units}
        error={errors.units}
      />

      <Choices
        name="source"
        legend="Where do your bookings come from today?"
        options={SOURCE_OPTIONS}
        selected={values.source}
        error={errors.source}
      />

      {/* Bot trap: invisible to people and skipped by the keyboard. */}
      <div
        aria-hidden
        className="absolute -left-[9999px] size-px overflow-hidden"
      >
        <label>
          Leave this empty
          <input name="fax_number" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <button
          type="submit"
          disabled={pending}
          className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-clay px-6 font-semibold text-white transition-all hover:gap-3 hover:bg-clay-deep disabled:cursor-wait disabled:opacity-70"
        >
          {pending ? "Sending…" : "Request early access"}
          {pending ? null : <ArrowRight className="size-4" aria-hidden />}
        </button>
        <p className="mt-3 text-center text-xs leading-relaxed text-pine/55">
          We’ll only use this to contact you about Hostayo.{" "}
          <a
            href={privacyUrl}
            className="font-medium text-pine underline underline-offset-4"
          >
            Privacy Policy
          </a>
        </p>
      </div>
    </form>
  );
}
