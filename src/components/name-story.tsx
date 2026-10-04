"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const STEPS = [
  { key: "Host", body: "To open your home to guests and look after their stay." },
  { key: "Tayo", body: "Filipino for “us”, the “let’s” in “let’s do this.”" },
  { key: "Hostayo", body: "An invitation: let’s host. Let’s start that staycation business together." },
] as const;

const clamp = (n: number) => Math.min(1, Math.max(0, n));
const ease = (t: number) => t * t * (3 - 2 * t);

/**
 * Scroll-told name: "Host" and "Tayo" take the stage one at a time, then slide
 * together into "Hostayo", joined at the shared "t".
 */
export function NameStory() {
  const section = useRef<HTMLElement>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = section.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      setP(clamp(-r.top / (r.height - window.innerHeight)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const step = p < 0.33 ? 0 : p < 0.66 ? 1 : 2;
  const join = ease(clamp((p - 0.62) / 0.32));

  return (
    <section ref={section} id="name" aria-label="Host plus Tayo equals Hostayo" className="relative h-[320vh] bg-cream/70">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-4 sm:px-6">
        <div aria-hidden className="grid-fade pointer-events-none absolute inset-0" />
        <div aria-hidden className="pointer-events-none absolute -right-24 -bottom-24 size-96 rounded-full bg-[radial-gradient(closest-side,rgb(243_228_222/0.9),transparent)]" />

        <p className="relative text-sm font-semibold tracking-wide text-clay uppercase">The name</p>

        <p
          aria-hidden
          className="relative mt-8 flex items-baseline font-display text-[clamp(2.75rem,12vw,9rem)] leading-none font-extrabold tracking-tight whitespace-nowrap text-pine"
        >
          <span style={{ opacity: step === 1 ? 0.18 : 1 }} className="flex items-baseline transition-opacity duration-500">
            <span>Hos</span>
            <span style={{ color: join > 0.5 ? "var(--color-clay)" : undefined }} className="transition-colors duration-500">t</span>
          </span>
          <span
            style={{
              marginLeft: `${0.45 * (1 - join)}em`,
              maxWidth: `${0.9 * (1 - join) + 0.001}em`,
              opacity: step === 0 ? 0.18 : 1 - join * 0.0,
            }}
            className="inline-block overflow-hidden transition-opacity duration-500"
          >
            <span style={{ opacity: 1 - join, transform: `translateX(${-0.2 * join}em)` }} className="inline-block">T</span>
          </span>
          <span style={{ opacity: step === 0 ? 0.18 : 1 }} className="transition-opacity duration-500">ayo</span>
        </p>

        <div className="relative mt-12 h-36 w-full max-w-xl text-center sm:h-28">
          {STEPS.map((s, i) => (
            <div
              key={s.key}
              className={cn(
                "absolute inset-0 transition-all duration-500",
                step === i ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
              )}
            >
              <p className={cn("font-display text-2xl font-extrabold", i === 2 ? "text-clay" : "text-pine")}>{s.key}</p>
              <p className="mt-2 text-lg leading-relaxed text-pine/70">{s.body}</p>
            </div>
          ))}
        </div>

        <div aria-hidden className="relative mt-4 flex gap-2">
          {STEPS.map((s, i) => (
            <span key={s.key} className={cn("h-1.5 rounded-full transition-all duration-500", step === i ? "w-8 bg-pine" : "w-1.5 bg-pine/20")} />
          ))}
        </div>

        <div
          aria-hidden
          className={cn(
            "absolute bottom-8 flex flex-col items-center gap-1 text-xs font-semibold tracking-[0.2em] text-pine/50 uppercase transition-opacity duration-500",
            step < 2 ? "opacity-100" : "opacity-0",
          )}
        >
          Keep scrolling
          <ChevronDown className="size-5 animate-bounce motion-reduce:animate-none" />
        </div>
      </div>
    </section>
  );
}
