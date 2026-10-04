import { ArrowRight, ArrowUp } from "lucide-react";
import { Logo } from "./logo";

const DEMO_URL = process.env.NEXT_PUBLIC_DEMO_URL || "https://demo.hostayo.casa/login?demo=1";

const SUPPORT_EMAIL = process.env.NEXT_PUBLIC_SUPPORT_EMAIL;
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.hostayo.casa";

const COLUMNS = [
  { title: "Explore", links: [["A day with Hostayo", "#day"], ["The name", "#name"], ["By the numbers", "#numbers"], ["Features", "#features"]] },
  { title: "Built for", links: [["Short-stay hosts", "#built-for"], ["Any number of units", "#built-for"], ["Teams with cleaners", "#built-for"]] },
  { title: "Hostayo", links: [["Live demo", DEMO_URL], ["Features", "#features"]] },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-pine-deep text-white">
      <div aria-hidden className="pointer-events-none absolute -top-32 -left-24 size-96 rounded-full bg-[radial-gradient(closest-side,rgb(111_146_126/0.3),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-4 pt-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Logo className="h-8 brightness-0 invert" />
            <p className="mt-5 max-w-xs text-lg leading-snug text-white/75">A calmer way to run your stays.</p>
            <a href={DEMO_URL} className="group mt-7 inline-flex h-12 items-center gap-2 rounded-full bg-clay px-6 font-semibold text-white transition-all hover:gap-3 hover:bg-clay-deep">
              Try the live demo <ArrowRight className="size-4" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {COLUMNS.map((c) => (
              <nav key={c.title} aria-label={c.title}>
                <p className="text-xs font-semibold tracking-wide text-white/45 uppercase">{c.title}</p>
                <ul className="mt-4 space-y-3 text-sm">
                  {c.links.map(([label, href]) => (
                    <li key={label}><a href={href} className="text-white/80 transition-colors hover:text-white">{label}</a></li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 py-6 text-sm text-white/55 sm:flex-row sm:items-center">
          <p>© 2026 Hostayo. Made in the Philippines.</p>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2">
            <a href={`${APP_URL}/terms`} className="transition-colors hover:text-white">Terms and Conditions</a>
            <a href={`${APP_URL}/privacy`} className="transition-colors hover:text-white">Privacy Policy</a>
            <a href={`${APP_URL}/cookies`} className="transition-colors hover:text-white">Cookie Policy</a>
            <a href={`${APP_URL}/refunds`} className="transition-colors hover:text-white">Refund Policy</a>
            {SUPPORT_EMAIL ? <a href={`mailto:${SUPPORT_EMAIL}`} className="transition-colors hover:text-white">Contact</a> : null}
          </nav>
          <a href="#top" className="inline-flex items-center gap-2 transition-colors hover:text-white">
            Back to top <ArrowUp className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
