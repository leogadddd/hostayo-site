import { Cta, DocPage, H1 } from "@/components/doc-page";
import { GUIDES } from "@/content/guides";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Guides for staycation hosts in the Philippines",
  description:
    "Short, practical guides for staycation hosts: avoid double bookings, track deposits and balances, and run a turnover cleaning checklist.",
  path: "/guides",
});

export default function GuidesIndex() {
  return (
    <DocPage crumbs={[{ name: "Guides", path: "/guides" }]}>
      <H1>Guides for staycation hosts</H1>
      <p className="mt-4 text-lg leading-relaxed text-pine/75">Short answers to the questions hosts ask most.</p>
      <ul className="mt-10 space-y-4">
        {GUIDES.map((g) => (
          <li key={g.slug}>
            <a href={`/guides/${g.slug}`} className="block rounded-2xl border border-pine/10 bg-card p-5 transition-colors hover:border-clay/40">
              <h2 className="font-display text-xl font-bold text-pine">{g.h1}</h2>
              <p className="mt-2 text-pine/70">{g.description}</p>
            </a>
          </li>
        ))}
      </ul>
      <Cta />
    </DocPage>
  );
}
