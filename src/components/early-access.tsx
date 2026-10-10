import { Check } from "lucide-react";
import { EarlyAccessForm } from "./early-access-form";
import { StayGrid } from "./stay-grid";

const DEMO_URL =
  process.env.NEXT_PUBLIC_DEMO_URL || "https://demo.hostayo.casa/login?demo=1";
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.hostayo.casa";

const PROMISES = [
  "Free while we’re in early access.",
  "We’ll help you set up your first units.",
  "Your feedback shapes what we build next.",
];

/** The page's main call to action: hosts ask for an invite, the team emails it out. */
export function EarlyAccess() {
  return (
    <section id="early-access" className="scroll-mt-24 px-4 pb-24 sm:px-6">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-pine px-5 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
        <StayGrid blocks={false} />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-x-14 lg:gap-y-7">
          <div className="lg:self-end">
            <p className="text-sm font-semibold tracking-wide text-sage uppercase">
              Early access
            </p>
            <h2 className="mt-3 max-w-md font-display text-4xl leading-[1.08] font-extrabold tracking-tight text-white sm:text-5xl">
              Be one of Hostayo’s first hosts.
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-white/75">
              We’re opening Hostayo to a small group of hosts first. Tell us
              about your stays and we’ll send you a personal invite link.
            </p>
          </div>
          {/* On a phone the form comes straight after the pitch; the rest follows it. */}
          <div className="relative rounded-3xl bg-card p-6 shadow-2xl shadow-pine-deep/40 sm:p-8 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
            <EarlyAccessForm
              demoUrl={DEMO_URL}
              privacyUrl={`${APP_URL}/privacy`}
            />
          </div>
          <div className="lg:col-start-1 lg:row-start-2 lg:self-start">
            <ul className="space-y-3">
              {PROMISES.map((promise) => (
                <li key={promise} className="flex gap-3 text-white/90">
                  <Check
                    className="mt-0.5 size-5 shrink-0 text-sage"
                    aria-hidden
                  />
                  {promise}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-white/65">
              Just looking?{" "}
              <a
                href={DEMO_URL}
                className="font-semibold text-white underline underline-offset-4 hover:text-sage"
              >
                Try the live demo
              </a>
            </p>
            <p className="mt-10 hidden text-xs tracking-[0.2em] text-white/50 uppercase lg:block">
              People · Spaces · Progress
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
