"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.hostayo.casa";
const COOKIE = "hostayo-cookie-consent";

type Consent = "all" | "essential";

function readConsent(): Consent | null {
  const value = document.cookie.match(new RegExp(`(?:^|; )${COOKIE}=([^;]*)`))?.[1];
  return value === "all" || value === "essential" ? value : null;
}

/**
 * Asks once, and loads Google Analytics only after "Accept all". Until then
 * the site sets no cookies at all.
 */
export function CookieConsent() {
  // `undefined` until we've read the cookie, so a returning visitor never sees a flash.
  const [consent, setConsent] = useState<Consent | null | undefined>(undefined);

  useEffect(() => setConsent(readConsent()), []);

  function choose(next: Consent) {
    document.cookie = `${COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
    setConsent(next);
  }

  return (
    <>
      {GA_ID && consent === "all" ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
          </Script>
        </>
      ) : null}

      {GA_ID && consent === null ? (
        <div
          role="region"
          aria-label="Cookie preferences"
          className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl rounded-2xl border border-pine/15 bg-card p-5 shadow-2xl sm:left-6 sm:mx-0 sm:max-w-sm"
        >
          <div className="flex items-start gap-3">
            <Cookie className="mt-0.5 size-5 shrink-0 text-pine" aria-hidden />
            <div>
              <p className="text-sm font-semibold text-pine">We use a few cookies</p>
              <p className="mt-1 text-sm leading-relaxed text-pine/70">
                With your OK, we use Google Analytics to see how this site is used. Without it, we set no cookies.{" "}
                <a href={`${APP_URL}/cookies`} className="font-medium text-pine underline underline-offset-4">
                  Cookie Policy
                </a>
              </p>
            </div>
          </div>
          <div className="mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => choose("essential")}
              className="inline-flex h-9 items-center justify-center rounded-full border border-pine/25 px-4 text-sm font-semibold text-pine transition-colors hover:bg-pine/5"
            >
              Essential only
            </button>
            <button
              type="button"
              onClick={() => choose("all")}
              className="inline-flex h-9 items-center justify-center rounded-full bg-pine px-4 text-sm font-semibold text-white transition-colors hover:bg-pine-soft"
            >
              Accept all
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
