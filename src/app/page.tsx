import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { EarlyAccess } from "@/components/early-access";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Faq } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { Explore } from "@/components/explore";
import { SiteHeader } from "@/components/site-header";
import { NameStory } from "@/components/name-story";
import { CountUp } from "@/components/motion";
import { Reveal } from "@/components/reveal";
import { SmoothScroll } from "@/components/smooth-scroll";
import { StayGrid } from "@/components/stay-grid";
import { Story } from "@/components/story";
import { TimelineViz } from "@/components/visuals";
import { HOME_FAQS } from "@/content/faqs";
import { DEFAULT_DESCRIPTION, HOME_TITLE, pageMetadata, SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: HOME_TITLE,
  description: `${DEFAULT_DESCRIPTION} Free for your first property.`,
  path: "/",
});

const HOME_SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Hostayo",
    url: SITE_URL,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: DEFAULT_DESCRIPTION,
    inLanguage: "en-PH",
    offers: { "@type": "Offer", price: "0", priceCurrency: "PHP", description: "Free for your first property" },
    publisher: { "@id": `${SITE_URL}/#organization` },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOME_FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

const DEMO_URL =
  process.env.NEXT_PUBLIC_DEMO_URL || "https://demo.hostayo.casa/login?demo=1";
/** The request form at the foot of the page; every "Get early access" button leads here. */
const EARLY_ACCESS = "#early-access";

const BUILT_FOR = [
  "Homestays, guest houses & bnbs",
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
    label: "calendar for every property",
    note: "Every unit and every stay in the same view.",
  },
  {
    value: 1,
    suffix: "",
    label: "place for your money",
    note: "Cash collected, deposits held and expenses, each labelled.",
  },
  {
    value: 0,
    suffix: "",
    label: "overlaps entered in Hostayo",
    note: "Dates already taken here can’t be booked again. Other channels can lag, so check before you confirm.",
  },
];

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <span id="top" />
      <SiteHeader />

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
            <p className="mb-5 text-sm font-semibold tracking-wide text-clay uppercase">
              Every stay, in one place
            </p>
            <h1 className="mx-auto max-w-4xl font-display text-5xl leading-[1.03] font-extrabold tracking-tight text-pine sm:text-7xl">
              Every booking, guest and peso,{" "}
              <span className="text-clay">in one place.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pine/75">
              Hostayo is booking and front-desk software for homestays, guest
              houses, bnbs, villas and small resorts in the Philippines. Keep your
              calendar, guests, payments and cleaning together, without the
              spreadsheets and screenshots.
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
                Will Hostayo grow with my stays?
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
                  <p className="mt-1 text-sm text-white/70">{n.note}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Features />

        <Faq faqs={HOME_FAQS} />

        <Explore />

        <EarlyAccess />
      </main>
      <JsonLd data={HOME_SCHEMA} />

      <Footer />
    </>
  );
}
