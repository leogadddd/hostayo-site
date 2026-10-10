import { ArrowRight } from "lucide-react";
import { EarlyAccess } from "@/components/early-access";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Logo } from "@/components/logo";
import { NameStory } from "@/components/name-story";
import { CountUp } from "@/components/motion";
import { Reveal } from "@/components/reveal";
import { SmoothScroll } from "@/components/smooth-scroll";
import { StayGrid } from "@/components/stay-grid";
import { Story } from "@/components/story";
import { TimelineViz } from "@/components/visuals";

const DEMO_URL =
  process.env.NEXT_PUBLIC_DEMO_URL || "https://demo.hostayo.casa/login?demo=1";
/** The request form at the foot of the page; every "Get early access" button leads here. */
const EARLY_ACCESS = "#early-access";

const BUILT_FOR = [
  "One room or a whole portfolio",
  "Direct bookings from Messenger & Facebook",
  "Deposits & balances tracked",
  "Cleaners & caretakers",
  "Asia/Manila time",
];

const NUMBERS = [
  {
    value: 1,
    suffix: "",
    label: "welcome page per booking",
    note: "Guests get their dates, rules and balance in one link.",
  },
  {
    value: 1,
    suffix: "",
    label: "calendar for every unit",
    note: "One room or fifty, they all live in the same view.",
  },
  {
    value: 4,
    suffix: "",
    label: "roles with their own access",
    note: "Owner, Admin, Operations Manager, Staff.",
  },
  {
    value: 0,
    suffix: "",
    label: "overlapping bookings",
    note: "Blocked, even when two people book at once.",
  },
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
            <a href="#day" className="hidden hover:text-clay sm:block">
              A day with Hostayo
            </a>
            <a href="#features" className="hidden hover:text-clay sm:block">
              Features
            </a>
            <a href={DEMO_URL} className="hidden hover:text-clay md:block">
              Live demo
            </a>
            <a
              href={EARLY_ACCESS}
              className="inline-flex h-10 items-center rounded-full bg-pine px-5 text-white transition-colors hover:bg-pine-soft"
            >
              Get early access
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero: centered, with one wide animated timeline */}
        <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44">
          <div
            aria-hidden
            className="grid-fade pointer-events-none absolute inset-0"
          />
          <div aria-hidden className="pointer-events-none absolute inset-0">
            {[
              [
                "left-[4%] top-[5%] w-24 lg:top-[18%] lg:left-[4%] lg:w-40",
                "bg-sage",
                "9s",
                "0s",
              ],
              [
                "left-[22%] top-[5%] mt-8 w-16 lg:top-[18%] lg:left-[10%] lg:mt-12 lg:w-28",
                "bg-sand-deep/60",
                "11s",
                "-3s",
              ],
              [
                "-left-6 top-[34%] w-24 opacity-60 lg:top-[46%] lg:left-[2%] lg:w-32 lg:opacity-100",
                "bg-moss/50",
                "10s",
                "-6s",
              ],
              [
                "right-[4%] top-[5%] w-20 lg:top-[14%] lg:w-36",
                "bg-clay/40",
                "12s",
                "-2s",
              ],
              [
                "right-[24%] top-[5%] mt-8 w-14 lg:top-[14%] lg:right-[9%] lg:mt-12 lg:w-28",
                "bg-stay-hold",
                "9s",
                "-5s",
              ],
              [
                "-right-6 top-[40%] w-24 opacity-60 lg:top-[42%] lg:right-[2%] lg:w-40 lg:opacity-100",
                "bg-sage-deep/60",
                "13s",
                "-8s",
              ],
            ].map(([pos, color, dur, delay]) => (
              <span
                key={pos}
                className={`animate-drift absolute h-8 lg:h-12 ${pos} ${color}`}
                style={{ animationDuration: dur, animationDelay: delay }}
              />
            ))}
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 left-1/2 size-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(207_221_211/0.8),transparent)]"
          />
          <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
            <h1 className="mx-auto max-w-4xl font-display text-5xl leading-[1.03] font-extrabold tracking-tight text-pine sm:text-7xl">
              Run your stays like a business, not a{" "}
              <span className="text-clay">group chat.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pine/75">
              Hostayo helps Philippine hosts fill their calendar, get paid on
              time and keep every unit guest-ready, without the spreadsheets and
              screenshots.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
              <a
                href={EARLY_ACCESS}
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-pine px-6 font-semibold text-white transition-all hover:gap-3 hover:bg-pine-soft"
              >
                Get early access
                <ArrowRight className="size-4" />
              </a>
              <a
                href={DEMO_URL}
                className="font-semibold text-pine underline underline-offset-4"
              >
                Try the live demo
              </a>
            </div>
            <div className="mt-14 text-left">
              <TimelineViz />
            </div>
            <ul
              id="built-for"
              className="mt-8 flex flex-wrap justify-center gap-2"
            >
              {BUILT_FOR.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-pine/10 bg-linen/70 px-3.5 py-1.5 text-sm text-pine/80"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Story />

        <NameStory />

        {/* Numbers */}
        <section
          id="numbers"
          className="relative overflow-hidden bg-pine-deep py-24 text-white"
        >
          <StayGrid blocks={false} />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
              <h2 className="max-w-2xl font-display text-3xl leading-tight font-extrabold tracking-tight sm:text-5xl">
                Built to grow with your stays.
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {NUMBERS.map((n, i) => (
                <Reveal
                  key={n.label}
                  delay={i * 80}
                  className="bg-pine-deep p-7"
                >
                  <p className="font-display text-6xl font-extrabold tracking-tight text-sage">
                    <CountUp
                      value={n.value}
                      suffix={n.suffix}
                      duration={1400}
                    />
                  </p>
                  <p className="mt-3 font-semibold">{n.label}</p>
                  <p className="mt-1 text-sm text-white/55">{n.note}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Features />

        <EarlyAccess />
      </main>

      <Footer />
    </>
  );
}
