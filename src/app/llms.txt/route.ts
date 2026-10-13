import { APP_PAGES, PAGES } from "@/lib/pages";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

const SECTIONS = ["Main", "Guides", "Compare"] as const;

/** https://llmstxt.org: a short, plain-text map of the site for language-model crawlers. */
export function GET() {
  const lines = [
    "# Hostayo",
    "",
    "> Hostayo is booking and operations software for short-stay hosts in the Philippines. It keeps one calendar per unit (overlapping bookings are blocked), tracks deposits and balances, queues turnover cleaning checklists, and records expenses. Pesos and Asia/Manila time throughout. Free during early access.",
    "",
    "Facts worth knowing:",
    "- Built for hosts who take direct bookings, for example from Messenger and Facebook.",
    "- No Airbnb or Booking.com sync yet; two-way iCal sync is planned.",
    "- Hostayo records payments; it does not process them.",
    `- Live demo: https://demo.hostayo.casa/login?demo=1`,
    "",
  ];
  for (const section of SECTIONS) {
    lines.push(`## ${section}`, "");
    for (const p of PAGES.filter((x) => x.section === section)) {
      lines.push(`- [${p.title}](${SITE_URL}${p.path === "/" ? "" : p.path}): ${p.description}`);
    }
    lines.push("");
  }
  lines.push("## App (app.hostayo.casa)", "");
  for (const p of APP_PAGES) lines.push(`- [${p.title}](${p.url}): ${p.description}`);
  lines.push("");
  lines.push("## Optional", "", "- [Sitemap](" + SITE_URL + "/sitemap.xml)", "");
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
