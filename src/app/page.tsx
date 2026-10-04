import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/footer";
import { Logo } from "@/components/logo";
import { NameStory } from "@/components/name-story";
import { CountUp } from "@/components/motion";
import { Reveal } from "@/components/reveal";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Story } from "@/components/story";
import { TimelineViz } from "@/components/visuals";

const DEMO_URL = process.env.NEXT_PUBLIC_DEMO_URL || "https://demo.hostayo.casa";

function Cta({ tone = "pine", children }: { tone?: "pine" | "clay"; children: React.ReactNode }) {
  return (
    <a
      href={DEMO_URL}
      className={`group inline-flex h-12 items-center gap-2 rounded-full px-6 font-semibold text-white transition-all hover:gap-3 ${
        tone === "pine" ? "bg-pine hover:bg-pine-soft" : "bg-clay hover:bg-clay-deep"
      }`}
    >
      {children}
      <ArrowRight className="size-4" />
    </a>
  );
}

const BUILT_FOR = ["1–20 apartments, villas or rooms", "Direct bookings from Messenger & Facebook", "GCash · Maya · cash", "Cleaners & caretakers", "Asia/Manila time"];
const PLATFORMS = ["airbnb", "booking-com", "agoda", "expedia", "facebook", "messenger", "direct"];

const NUMBERS = [
  { value: 24, suffix: "h", label: "holds that release themselves", note: "Dates are never stuck on a maybe." },
  { value: 20, suffix: "", prefix: "1–", label: "units per host", note: "From one apartment to a small portfolio." },
  { value: 4, suffix: "", label: "roles with their own access", note: "Owner, Admin, Operations Manager, Staff." },
  { value: 0, suffix: "", label: "overlapping bookings", note: "Blocked, even when two people book at once." },
];

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <span id="top" />
      <header className="fixed inset-x-0 top-4 z-40 px-4">
        <div className="mx-auto flex h-14 max-w-4xl items-center justify-between rounded-full border border-pine/10 bg-linen/95 pr-2 pl-5 shadow-lg shadow-pine/5">
          <Logo className="h-6" />
          <nav className="flex items-center gap-6 text-sm font-medium text-pine">
            <a href="#day" className="hidden hover:text-clay sm:block">A day with Hostayo</a>
            <a href="#start" className="hidden hover:text-clay sm:block">Getting started</a>
            <a href={DEMO_URL} className="inline-flex h-10 items-center rounded-full bg-pine px-5 text-white transition-colors hover:bg-pine-soft">Try the demo</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero: centered, with one wide animated timeline */}
        <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44">
          <div aria-hidden className="grid-fade pointer-events-none absolute inset-0" />
          <div aria-hidden className="pointer-events-none absolute -top-32 left-1/2 size-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(207_221_211/0.8),transparent)]" />
          <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-pine/10 bg-linen/80 px-3 py-1 text-xs font-semibold text-pine">
              <span className="size-1.5 rounded-full bg-moss" /> Launching soon · live demo open now
            </p>
            <h1 className="mx-auto mt-6 max-w-4xl font-display text-5xl leading-[1.03] font-extrabold tracking-tight text-pine sm:text-7xl">
              Run your stays like a business, not a <span className="text-clay">group chat.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pine/75">
              Hostayo helps small Philippine hosts fill their calendar, get paid on time and keep every unit guest-ready,
              without the spreadsheets and screenshots.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
              <Cta>Try the live demo</Cta>
              <a href="#day" className="font-semibold text-pine underline underline-offset-4">See a day with Hostayo</a>
            </div>
            <div className="mt-14 text-left">
              <TimelineViz />
            </div>
            <ul id="built-for" className="mt-8 flex flex-wrap justify-center gap-2">
              {BUILT_FOR.map((t) => (
                <li key={t} className="rounded-full border border-pine/10 bg-linen/70 px-3.5 py-1.5 text-sm text-pine/80">{t}</li>
              ))}
            </ul>
          </div>
        </section>

        <Story />

        <NameStory />

        {/* Numbers */}
        <section id="numbers" className="bg-pine-deep py-24 text-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
              <h2 className="max-w-2xl font-display text-3xl leading-tight font-extrabold tracking-tight sm:text-5xl">
                Built around how small stays really run.
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {NUMBERS.map((n, i) => (
                <Reveal key={n.label} delay={i * 80} className="bg-pine-deep p-7">
                  <p className="font-display text-6xl font-extrabold tracking-tight text-sage">
                    <CountUp value={n.value} prefix={n.prefix} suffix={n.suffix} duration={1400} />
                  </p>
                  <p className="mt-3 font-semibold">{n.label}</p>
                  <p className="mt-1 text-sm text-white/55">{n.note}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section id="platforms" className="py-20">
          <p className="mx-auto max-w-2xl px-4 text-center font-display text-2xl font-bold text-pine">
            Bookings come from everywhere. Keep them in one place.
          </p>
          <p className="mt-2 text-center text-sm text-pine/60">Record where each stay came from. Hostayo tracks them; it doesn’t sync with these platforms.</p>
          <div className="mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="animate-marquee flex w-max gap-14">
              {[...PLATFORMS, ...PLATFORMS, ...PLATFORMS, ...PLATFORMS].map((p, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={i} src={`/platforms/${p}.svg`} alt={i < PLATFORMS.length ? p.replace("-", ".") : ""} className="h-10 w-auto" />
              ))}
            </div>
          </div>
        </section>

        {/* Getting started */}
        <section id="start" className="mx-auto max-w-6xl px-4 pb-28 sm:px-6">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-pine sm:text-5xl">Getting started takes an afternoon.</h2>
          </Reveal>
          <div className="relative mt-14 grid gap-10 md:grid-cols-3">
            <div aria-hidden className="absolute top-5 right-[16%] left-[16%] hidden h-px bg-pine/15 md:block" />
            {[
              ["Add your property", "Name it, add your units and your nightly rates."],
              ["Take your first booking", "Put the dates on hold, record the deposit, send the guest link."],
              ["Run the stay", "Check in, check out, and let the checklist handle the turnover."],
            ].map(([t, b], i) => (
              <Reveal key={t} delay={i * 120} className="relative md:text-center">
                <span className="relative z-10 grid size-10 place-items-center rounded-full bg-pine font-display text-sm font-bold text-white md:mx-auto">{i + 1}</span>
                <h3 className="mt-5 font-display text-xl font-bold text-pine">{t}</h3>
                <p className="mt-2 leading-relaxed text-pine/70 md:mx-auto md:max-w-xs">{b}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-4 pb-24 sm:px-6">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-pine px-6 py-20 text-center">
            <div aria-hidden className="absolute -top-20 left-1/4 size-80 rounded-full bg-[radial-gradient(closest-side,rgb(111_146_126/0.4),transparent)]" />
            <div aria-hidden className="absolute -right-10 -bottom-24 size-80 rounded-full bg-[radial-gradient(closest-side,rgb(166_78_55/0.4),transparent)]" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-4xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl">
                See your own stays in Hostayo.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-white/75">The demo workspace is open. Explore it for as long as you like.</p>
              <div className="mt-8"><Cta tone="clay">Try the live demo</Cta></div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
