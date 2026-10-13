import { VS } from "@/content/comparisons";
import { GUIDES } from "@/content/guides";

/** Crawlable internal links from the home page into the guides and comparison pages. */
export function Explore() {
  const link = "text-pine underline underline-offset-4 hover:text-clay";
  return (
    <section id="learn-more" className="mx-auto max-w-6xl px-4 pb-28 sm:px-6">
      <h2 className="font-display text-3xl leading-tight font-extrabold tracking-tight text-pine sm:text-5xl">
        Where can I learn more?
      </h2>
      <div className="mt-10 grid gap-10 sm:grid-cols-2">
        <div>
          <h3 className="font-display text-xl font-bold text-pine">Guides for hosts</h3>
          <ul className="mt-4 space-y-3">
            {GUIDES.map((g) => (
              <li key={g.slug}><a className={link} href={`/guides/${g.slug}`}>{g.h1}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-pine">How does Hostayo compare?</h3>
          <ul className="mt-4 space-y-3">
            {VS.map((v) => (
              <li key={v.slug}><a className={link} href={`/vs/${v.slug}`}>Hostayo vs {v.name}</a></li>
            ))}
            <li><a className={link} href="/alternatives/hostaway">Hostaway alternatives</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
