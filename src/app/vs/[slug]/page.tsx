import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Answer, Cta, DocPage, H1, H2 } from "@/components/doc-page";
import { COMPARISON_REVIEWED, VS } from "@/content/comparisons";
import { CONTENT_UPDATED, pageMetadata, SITE_URL } from "@/lib/site";

export const dynamicParams = false;
export const generateStaticParams = () => VS.map((v) => ({ slug: v.slug }));

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const v = VS.find((x) => x.slug === slug);
  if (!v) return {};
  return pageMetadata({ title: v.title, description: v.description, path: `/vs/${v.slug}` });
}

export default async function VsPage({ params }: Props) {
  const { slug } = await params;
  const v = VS.find((x) => x.slug === slug);
  if (!v) notFound();
  const path = `/vs/${v.slug}`;
  const others = VS.filter((x) => x.slug !== v.slug);

  return (
    <DocPage
      crumbs={[{ name: "Compare", path: "/compare" }, { name: `vs ${v.name}`, path }]}
      jsonLd={[
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: v.title,
          url: `${SITE_URL}${path}`,
          description: v.description,
          dateModified: CONTENT_UPDATED,
          about: { "@type": "SoftwareApplication", name: "Hostayo" },
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: v.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
      ]}
    >
      <H1>{v.h1}</H1>
      <Answer>{v.answer}</Answer>
      <p className="mt-4 text-sm text-pine/70">Reviewed {COMPARISON_REVIEWED}. Features and prices change, so check each vendor’s site.</p>

      <H2>What is {v.name}?</H2>
      <p className="mt-4 leading-relaxed text-pine/80">{v.otherSummary}</p>

      <H2>How do Hostayo and {v.name} compare?</H2>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-pine/10 bg-card">
        <table className="w-full min-w-[34rem] text-left text-sm">
          <caption className="sr-only">Hostayo compared with {v.name}</caption>
          <thead className="bg-pine-mist text-pine">
            <tr>
              <th scope="col" className="p-4 font-semibold"><span className="sr-only">Feature</span></th>
              <th scope="col" className="p-4 font-semibold">Hostayo</th>
              <th scope="col" className="p-4 font-semibold">{v.name}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-pine/10 align-top">
            {v.rows.map((r) => (
              <tr key={r.label}>
                <th scope="row" className="p-4 font-semibold text-pine">{r.label}</th>
                <td className="p-4 text-pine/80">{r.hostayo}</td>
                <td className="p-4 text-pine/80">{r.other}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H2>When should I choose {v.name}?</H2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-pine/80">
        {v.chooseOther.map((t) => <li key={t}>{t}</li>)}
      </ul>

      <H2>When should I choose Hostayo?</H2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-pine/80">
        {v.chooseHostayo.map((t) => <li key={t}>{t}</li>)}
      </ul>

      {v.faqs.map((f) => (
        <section key={f.q}>
          <H2>{f.q}</H2>
          <p className="mt-4 leading-relaxed text-pine/80">{f.a}</p>
        </section>
      ))}

      <H2>Want to compare other options?</H2>
      <ul className="mt-4 space-y-2">
        {others.map((o) => (
          <li key={o.slug}>
            <a href={`/vs/${o.slug}`} className="font-medium text-pine underline underline-offset-4 hover:text-clay">
              Hostayo vs {o.name}
            </a>
          </li>
        ))}
        <li>
          <a href="/guides/avoid-double-booking" className="font-medium text-pine underline underline-offset-4 hover:text-clay">
            How to avoid double booking
          </a>
        </li>
      </ul>

      <Cta />
    </DocPage>
  );
}
