"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ChartViz, OverlapViz, PaymentViz, TurnoverViz } from "./visuals";

const MOMENTS = [
  {
    time: "06:40",
    title: "A message comes in, and the dates are safe.",
    body: "Someone asks about the weekend. You put the exact dates on hold for 24 hours. If another guest tries the same nights, Hostayo blocks it, even if two people book at once.",
    visual: <OverlapViz />,
  },
  {
    time: "12:15",
    title: "The deposit lands. You tick it off, not chase it.",
    body: "Record the GCash, Maya or cash payment in seconds. You and your guest see the same balance, so nobody has to ask “did you send it?”",
    visual: <PaymentViz />,
  },
  {
    time: "15:00",
    title: "Checkout happens. The cleaning is already queued.",
    body: "The checklist appears the moment the guest leaves. Your cleaner ticks it off from their phone, and you see Ready before the next arrival.",
    visual: <TurnoverViz />,
  },
  {
    time: "18:30",
    title: "You close the day knowing exactly where you stand.",
    body: "Cash collected, deposits you’re holding and expenses are shown separately and labelled, so the numbers mean what they say.",
    visual: <ChartViz />,
  },
];

/** Scroll-told story: text moments on the left, one sticky visual that swaps on the right. */
export function Story() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="day" className="mx-auto max-w-6xl px-4 py-28 sm:px-6">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold tracking-wide text-clay uppercase">A day with Hostayo</p>
        <h2 className="mt-3 font-display text-4xl leading-[1.08] font-extrabold tracking-tight text-pine sm:text-6xl">
          Same day. A lot less to hold in your head.
        </h2>
      </div>

      <div className="mt-20 grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div className="relative">
          <div aria-hidden className="absolute top-2 bottom-2 left-[5px] hidden w-px bg-pine/15 sm:block" />
          {MOMENTS.map((m, i) => (
            <div
              key={m.time}
              ref={(el) => { refs.current[i] = el; }}
              data-i={i}
              className="relative pb-20 sm:pl-12 lg:flex lg:min-h-[78vh] lg:flex-col lg:justify-center lg:pb-0"
            >
              <span aria-hidden className={cn("absolute top-2 left-0 hidden size-[11px] rounded-full border-2 transition-colors duration-300 sm:block lg:top-1/2 lg:-mt-6", active === i ? "border-clay bg-clay" : "border-pine/30 bg-paper")} />
              <p className={cn("font-display text-5xl font-extrabold tracking-tight tabular-nums transition-colors duration-300 sm:text-6xl", active === i ? "text-clay" : "text-pine/25")}>{m.time}</p>
              <h3 className="mt-3 font-display text-2xl leading-tight font-bold text-pine sm:text-3xl">{m.title}</h3>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-pine/70">{m.body}</p>
              <div className="mt-8 lg:hidden">{m.visual}</div>
            </div>
          ))}
        </div>

        <div className="hidden lg:block">
          <div className="sticky top-0 flex h-screen items-center">
            <div className="relative w-full">
              <div aria-hidden className="absolute -inset-8 -z-10 rounded-[3rem] bg-[radial-gradient(closest-side,rgb(207_221_211/0.6),transparent)]" />
              <div key={active} className="animate-[swap_.6s_ease-out]">{MOMENTS[active].visual}</div>
              <div className="mt-6 flex justify-center gap-2" aria-hidden>
                {MOMENTS.map((m, i) => (
                  <span key={m.time} className={cn("h-1.5 rounded-full transition-all duration-300", active === i ? "w-8 bg-pine" : "w-1.5 bg-pine/20")} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
