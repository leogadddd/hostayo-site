import { ArrowRight } from "lucide-react";
import { Footer } from "./footer";
import { JsonLd } from "./json-ld";
import { SiteHeader } from "./site-header";
import { SITE_URL } from "@/lib/site";

export interface Crumb {
  name: string;
  path: string;
}

/** Shell for content pages: header, breadcrumb trail (with JSON-LD), narrow reading column, footer. */
export function DocPage({
  crumbs,
  children,
  jsonLd,
}: {
  crumbs: Crumb[];
  children: React.ReactNode;
  jsonLd?: object | object[];
}) {
  const trail = [{ name: "Home", path: "/" }, ...crumbs];
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path === "/" ? "" : c.path}`,
    })),
  };
  return (
    <>
      <span id="top" />
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 pt-36 pb-24 sm:px-6">
        <nav aria-label="Breadcrumb" className="text-sm text-pine/75">
          <ol className="flex flex-wrap items-center gap-2">
            {trail.map((c, i) => (
              <li key={c.path} className="flex items-center gap-2">
                {i > 0 ? <span aria-hidden>/</span> : null}
                {i === trail.length - 1 ? (
                  <span aria-current="page" className="text-pine">{c.name}</span>
                ) : (
                  <a href={c.path} className="underline underline-offset-4 hover:text-clay">{c.name}</a>
                )}
              </li>
            ))}
          </ol>
        </nav>
        {children}
      </main>
      <JsonLd data={jsonLd ? [breadcrumb, ...(Array.isArray(jsonLd) ? jsonLd : [jsonLd])] : breadcrumb} />
      <Footer />
    </>
  );
}

export function H1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="mt-6 font-display text-4xl leading-[1.1] font-extrabold tracking-tight text-pine sm:text-5xl">
      {children}
    </h1>
  );
}

/** The one-paragraph direct answer that sits under the H1. */
export function Answer({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-6 rounded-2xl border-l-4 border-clay bg-linen p-5 text-lg leading-relaxed text-pine/85">
      {children}
    </p>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-14 font-display text-2xl font-bold text-pine sm:text-3xl">{children}</h2>;
}

export function Cta({ text = "Get early access" }: { text?: string }) {
  return (
    <a
      href="/#early-access"
      className="mt-12 inline-flex h-12 items-center gap-2 rounded-full bg-pine px-6 font-semibold text-white transition-colors hover:bg-pine-soft"
    >
      {text} <ArrowRight className="size-4" aria-hidden />
    </a>
  );
}
