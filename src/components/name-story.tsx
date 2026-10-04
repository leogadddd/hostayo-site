"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";
import { useInView } from "./motion";

/** "Host" + "Tayo" slide together; the shared "t" is where they join. */
export function NameStory() {
  const [ref, inView] = useInView<HTMLDivElement>(0.5);
  const [joined, setJoined] = useState(false);
  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setJoined(true), 900);
    return () => clearTimeout(t);
  }, [inView]);

  return (
    <section id="name" className="relative overflow-hidden bg-cream/70 py-28">
      <div aria-hidden className="pointer-events-none absolute -right-24 -bottom-24 size-96 rounded-full bg-[radial-gradient(closest-side,rgb(243_228_222/0.9),transparent)]" />
      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
        <Reveal>
          <p className="text-sm font-semibold tracking-wide text-clay uppercase">The name</p>
        </Reveal>

        <div ref={ref} className="mt-8 flex justify-center" aria-label="Host plus Tayo equals Hostayo">
          <p aria-hidden className="flex items-baseline font-display text-6xl leading-none font-extrabold tracking-tight text-pine sm:text-8xl lg:text-9xl">
            <span>Hos</span>
            <span className={cn("transition-colors duration-700", joined ? "text-clay" : "text-pine")}>t</span>
            <span
              className={cn(
                "flex items-baseline overflow-hidden transition-all duration-1000 ease-in-out",
                joined ? "ml-0 max-w-[0.1em] opacity-100" : "ml-[0.45em] max-w-[1em] opacity-100",
              )}
            >
              <span className={cn("inline-block transition-all duration-1000", joined ? "w-0 -translate-x-2 opacity-0" : "w-auto opacity-100")}>T</span>
            </span>
            <span>ayo</span>
          </p>
        </div>

        <div className="mt-14 grid gap-4 text-left md:grid-cols-3">
          {[
            ["Host", "To open your home to guests and look after their stay."],
            ["Tayo", "Filipino for “us”, the “let’s” in “let’s do this.”"],
            ["Hostayo", "An invitation: let’s host. Let’s start that staycation business together."],
          ].map(([w, d], i) => (
            <Reveal key={w} delay={i * 120} className={cn("rounded-3xl border p-6", i === 2 ? "border-transparent bg-pine text-white" : "border-pine/10 bg-linen")}>
              <p className={cn("font-display text-2xl font-extrabold", i === 2 ? "text-sage" : "text-pine")}>{w}</p>
              <p className={cn("mt-2 leading-relaxed", i === 2 ? "text-white/80" : "text-pine/70")}>{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
