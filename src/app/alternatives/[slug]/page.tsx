import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Answer, Cta, DocPage, H1, H2 } from "@/components/doc-page";
import { ALTERNATIVES, COMPARISON_REVIEWED } from "@/content/comparisons";
import { CONTENT_UPDATED, pageMetadata, SITE_URL } from "@/lib/site";

export const dynamicParams = false;
export const generateStaticParams = () => ALTERNATIVES.map((a) => ({ slug: a.slug }));

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = ALTERNATIVES.find((x) => x.slug === slug);
  if (!a) return {};
  return pageMetadata({ title: a.title, description: a.description, path: `/alternatives/${a.slug}` });
}

export default async function AlternativesPage({ params }: Props) {
  const { slug } = await params;
  const a = ALTERNATIVES.find((x) => x.slug === slug);
  if (!a) notFound();
  const path = `/alternatives/${a.slug}`;

  return (
    <DocPage
      crumbs={[{ name: "Compare", path: "/compare" }, { name: `${a.name} alternatives`, path }]}
      jsonLd={[
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: a.title,
          url: `${SITE_URL}${path}`,
          dateModified: CONTENT_UPDATED,
          itemListElement: a.options.map((o, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: o.name,
          })),
        },
      ]}
    >
      <H1>{a.h1}</H1>
      <Answer>{a.answer}</Answer>
      <p className="mt-4 text-sm text-pine/70">Reviewed {COMPARISON_REVIEWED}. Check each vendor’s site for current features and prices.</p>

      <H2>Which {a.name} alternative fits which host?</H2>
      <ol className="mt-6 space-y-4">
        {a.options.map((o) => (
          <li key={o.name} className="rounded-2xl border border-pine/10 bg-card p-5">
            <h3 className="font-display text-xl font-bold text-pine">{o.name}</h3>
            <p className="mt-2 text-pine/80"><span className="font-semibold text-pine">Good for:</span> {o.fit}</p>
            <p className="mt-1 text-pine/80"><span className="font-semibold text-pine">Note:</span> {o.note}</p>
            {o.href ? (
              <a href={o.href} className="mt-3 inline-block text-sm font-semibold text-clay underline underline-offset-4">
                Compare with Hostayo
              </a>
            ) : null}
          </li>
        ))}
      </ol>

      <H2>How do I pick one?</H2>
      <ol className="mt-4 list-decimal space-y-2 pl-5 text-pine/80">
        <li>Where do your bookings come from: channels, a website or Messenger?</li>
        <li>Do you need two-way sync today, or only a tidy back office?</li>
        <li>How many units and team members will use it?</li>
      </ol>

      <Cta />
    </DocPage>
  );
}
