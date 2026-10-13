import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Answer, Cta, DocPage, H1, H2 } from "@/components/doc-page";
import { GUIDES, guideBySlug } from "@/content/guides";
import { CONTENT_UPDATED, pageMetadata, SITE_URL } from "@/lib/site";

export const dynamicParams = false;
export const generateStaticParams = () => GUIDES.map((g) => ({ slug: g.slug }));

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const g = guideBySlug((await params).slug);
  if (!g) return {};
  return pageMetadata({ title: g.title, description: g.description, path: `/guides/${g.slug}`, type: "article" });
}

export default async function GuidePage({ params }: Props) {
  const g = guideBySlug((await params).slug);
  if (!g) notFound();
  const path = `/guides/${g.slug}`;
  const related = g.related.map(guideBySlug).filter((x) => x !== undefined);

  return (
    <DocPage
      crumbs={[{ name: "Guides", path: "/guides" }, { name: g.title, path }]}
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: g.title,
        description: g.description,
        mainEntityOfPage: `${SITE_URL}${path}`,
        datePublished: g.published,
        dateModified: CONTENT_UPDATED,
        inLanguage: "en-PH",
        author: { "@type": "Organization", name: "Hostayo", url: SITE_URL },
        publisher: { "@type": "Organization", name: "Hostayo", url: SITE_URL },
      }}
    >
      <H1>{g.h1}</H1>
      <Answer>{g.answer}</Answer>

      {g.sections.map((s) => (
        <section key={s.h2}>
          <H2>{s.h2}</H2>
          {s.body?.map((p) => (
            <p key={p} className="mt-4 leading-relaxed text-pine/80">{p}</p>
          ))}
          {s.list ? (
            s.ordered ? (
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-pine/80">{s.list.map((i) => <li key={i}>{i}</li>)}</ol>
            ) : (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-pine/80">{s.list.map((i) => <li key={i}>{i}</li>)}</ul>
            )
          ) : null}
        </section>
      ))}

      <H2>Keep reading</H2>
      <ul className="mt-4 space-y-2">
        {related.map((r) => (
          <li key={r.slug}>
            <a href={`/guides/${r.slug}`} className="font-medium text-pine underline underline-offset-4 hover:text-clay">{r.h1}</a>
          </li>
        ))}
        <li>
          <a href="/vs/spreadsheets-and-messenger" className="font-medium text-pine underline underline-offset-4 hover:text-clay">
            Is a spreadsheet enough to run a short-stay?
          </a>
        </li>
      </ul>

      <Cta text="Try Hostayo free in early access" />
    </DocPage>
  );
}
