import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { CookieConsent } from "@/components/cookie-consent";
import { JsonLd } from "@/components/json-ld";
import { SUPPORT_FACEBOOK_URL, SUPPORT_INSTAGRAM_URL } from "@/lib/support";
import { DEFAULT_DESCRIPTION, HOME_TITLE, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-montserrat", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: { default: HOME_TITLE, template: "%s | Hostayo" },
  description: DEFAULT_DESCRIPTION,
  // Optional Google Search Console meta-tag verification (DNS verification needs no code).
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
    : undefined,
  robots: { index: true, follow: true, googleBot: { "max-image-preview": "large", "max-snippet": -1 } },
};

const SITE_SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/brand/hostayo-logo.png`,
    description: DEFAULT_DESCRIPTION,
    areaServed: { "@type": "Country", name: "Philippines" },
    sameAs: [SUPPORT_FACEBOOK_URL, SUPPORT_INSTAGRAM_URL],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: "en-PH",
    publisher: { "@id": `${SITE_URL}/#organization` },
  },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body>
        {children}
        <JsonLd data={SITE_SCHEMA} />
        <CookieConsent />
      </body>
    </html>
  );
}
