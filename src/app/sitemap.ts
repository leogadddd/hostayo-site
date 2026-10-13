import type { MetadataRoute } from "next";
import { CONTENT_UPDATED, SITE_URL } from "@/lib/site";
import { APP_PAGES, PAGES } from "@/lib/pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const app = APP_PAGES.map((p) => ({
    url: p.url,
    lastModified: CONTENT_UPDATED,
    changeFrequency: "yearly" as const,
    priority: p.path === "/login" ? 0.5 : 0.3,
  }));
  const site: MetadataRoute.Sitemap = PAGES.map((p) => ({
    url: p.path === "/" ? SITE_URL : `${SITE_URL}${p.path}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency: p.path === "/" ? "weekly" : "monthly",
    priority: p.path === "/" ? 1 : p.section === "Main" ? 0.8 : 0.6,
  }));
  return [...site, ...app];
}
