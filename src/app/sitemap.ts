import type { MetadataRoute } from "next";
import { CONTENT_UPDATED, SITE_URL } from "@/lib/site";
import { PAGES } from "@/lib/pages";

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((p) => ({
    url: p.path === "/" ? SITE_URL : `${SITE_URL}${p.path}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency: p.path === "/" ? "weekly" : "monthly",
    priority: p.path === "/" ? 1 : p.section === "Main" ? 0.8 : 0.6,
  }));
}
