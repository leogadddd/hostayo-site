import { ALTERNATIVES, VS } from "@/content/comparisons";
import { GUIDES } from "@/content/guides";

export interface PageEntry {
  path: string;
  title: string;
  description: string;
  section: "Main" | "Guides" | "Compare" | "App";
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

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.hostayo.casa";

/** Public pages on the app host. Absolute URLs; keep in step with PUBLIC_PAGES in hostayo-app. */
export const APP_PAGES = [
  { path: "/login", title: "Sign in to Hostayo", description: "Sign in to your Hostayo workspace." },
  { path: "/register", title: "Create a Hostayo account", description: "Create an account (may be invite-only during early access)." },
  { path: "/terms", title: "Terms and Conditions", description: "Terms for using Hostayo." },
  { path: "/privacy", title: "Privacy Policy", description: "How Hostayo handles personal data." },
  { path: "/refunds", title: "Refund Policy", description: "How refunds work for Hostayo." },
  { path: "/cookies", title: "Cookie Policy", description: "The cookies Hostayo uses and why." },
].map((p) => ({ ...p, url: `${APP_URL}${p.path}` }));
