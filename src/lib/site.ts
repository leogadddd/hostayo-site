import type { Metadata } from "next";

export const SITE_URL = "https://hostayo.casa";
export const SITE_NAME = "Hostayo";
export const DEFAULT_DESCRIPTION =
  "Booking and front-desk software for Philippine homestays, guest houses, bnbs and staycations: bookings, guests, payments, turnovers and expenses in one place.";
/** Bump when page content changes in a way search engines should notice. */
export const HOME_TITLE =
  "Hostayo | Every stay, in one place";
const SOCIAL_IMAGE_ALT = "Hostayo | Run your stays like a business. Get early access.";
export const CONTENT_UPDATED = "2026-11-01";

/**
 * Per-page metadata with its own canonical. Every page must call this: a
 * canonical set only in the root layout would be inherited by every page.
 */
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}): Metadata {
  // Titles already naming Hostayo, or too long to take the suffix, are used as written.
  const full = title.includes("Hostayo") || title.length > 48 ? title : `${title} · Hostayo`;
  return {
    title: { absolute: full },
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      siteName: SITE_NAME,
      locale: "en_PH",
      url: path,
      title: full,
      description,
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: SOCIAL_IMAGE_ALT }],
    },
    twitter: {
      card: "summary_large_image",
      title: full,
      description,
      images: [{ url: "/twitter-image.png", alt: SOCIAL_IMAGE_ALT }],
    },
  };
}
