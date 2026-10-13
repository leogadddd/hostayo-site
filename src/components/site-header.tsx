import { Logo } from "./logo";

const DEMO_URL = process.env.NEXT_PUBLIC_DEMO_URL || "https://demo.hostayo.casa/login?demo=1";

/** Shared top bar. Links are absolute so the same bar works on the home page and inner pages. */
export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-4 z-40 px-4">
      <div className="mx-auto flex h-14 max-w-4xl items-center justify-between rounded-full border border-pine/10 bg-linen/95 pr-2 pl-5 shadow-lg shadow-pine/5">
        <a href="/" aria-label="Hostayo home">
          <Logo className="h-6" />
        </a>
        <nav aria-label="Main" className="flex items-center gap-6 text-sm font-medium text-pine">
          <a href="/#features" className="hidden hover:text-clay md:block">Features</a>
          <a href="/guides" className="hidden hover:text-clay md:block">Guides</a>
          <a href="/compare" className="hidden hover:text-clay md:block">Compare</a>
          <a href={DEMO_URL} className="hidden hover:text-clay lg:block">Live demo</a>
          <a
            href="/#early-access"
            className="inline-flex h-10 items-center rounded-full bg-pine px-5 text-white transition-colors hover:bg-pine-soft"
          >
            Get early access
          </a>
        </nav>
      </div>
    </header>
  );
}
