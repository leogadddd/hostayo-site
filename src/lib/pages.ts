import { ALTERNATIVES, VS } from "@/content/comparisons";
import { GUIDES } from "@/content/guides";

export interface PageEntry {
  path: string;
  title: string;
  description: string;
  section: "Main" | "Guides" | "Compare";
}

/** Every public page, in one list that feeds the sitemap and llms.txt so they cannot drift. */
export const PAGES: PageEntry[] = [
  {
    path: "/",
    title: "Hostayo home",
    description: "What Hostayo does, a day with Hostayo, features, FAQ and early access.",
    section: "Main",
  },
  { path: "/guides", title: "Guides for short-stay hosts", description: "Short, practical guides for hosts.", section: "Guides" },
  ...GUIDES.map((g) => ({ path: `/guides/${g.slug}`, title: g.title, description: g.description, section: "Guides" as const })),
  { path: "/compare", title: "Compare Hostayo with other tools", description: "Index of comparison and alternatives pages.", section: "Compare" },
  ...VS.map((v) => ({ path: `/vs/${v.slug}`, title: v.title, description: v.description, section: "Compare" as const })),
  ...ALTERNATIVES.map((a) => ({ path: `/alternatives/${a.slug}`, title: a.title, description: a.description, section: "Compare" as const })),
];
