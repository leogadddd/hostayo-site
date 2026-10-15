import { Cta, DocPage, H1, H2 } from "@/components/doc-page";
import { ALTERNATIVES, VS } from "@/content/comparisons";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Why choose Hostayo over Hostaway, Guesty and Lodgify",
  description:
    "See why staycation hosts choose Hostayo over Hostaway, Guesty, Lodgify and a spreadsheet, a management app made for one host in the Philippines.",
  path: "/compare",
});

const link = "block rounded-2xl border border-pine/10 bg-card p-5 font-semibold text-pine transition-colors hover:border-clay/40";

export default function ComparePage() {
  return (
    <DocPage crumbs={[{ name: "Compare", path: "/compare" }]}>
      <H1>How does Hostayo compare with other tools?</H1>
      <p className="mt-4 text-lg leading-relaxed text-pine/75">
        Hostayo is a management app for your staycation: the calendar, guests, deposits, cleaning and expenses in one place. See what it does better than the tools hosts usually compare it with.
      </p>

      <H2>Hostayo versus…</H2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {VS.map((v) => (
          <li key={v.slug}><a className={link} href={`/vs/${v.slug}`}>Hostayo vs {v.name}</a></li>
        ))}
      </ul>

      <H2>Looking for an alternative to…</H2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {ALTERNATIVES.map((a) => (
          <li key={a.slug}><a className={link} href={`/alternatives/${a.slug}`}>{a.name} alternatives</a></li>
        ))}
      </ul>
      <Cta />
    </DocPage>
  );
}
