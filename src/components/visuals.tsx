"use client";

import { useEffect, useState } from "react";
import { Check, Clock, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import { CountUp, useCycle, useInView } from "./motion";

const card = "rounded-3xl border border-pine/10 bg-linen p-5 shadow-[0_20px_50px_rgba(22,41,37,0.08)]";

/* ───────── Wide month timeline that fills with bookings ───────── */

const T_DAYS = 21;
const T_UNITS = ["Sea View Studio", "Garden Loft", "Casa Alon 2BR"];
type TBar = { unit: number; from: number; to: number; tone: "booked" | "hold"; label: string };
const T_BARS: TBar[] = [
  { unit: 0, from: 1, to: 5, tone: "booked", label: "Direct" },
  { unit: 1, from: 0, to: 3, tone: "booked", label: "Airbnb" },
  { unit: 2, from: 2, to: 8, tone: "booked", label: "Direct" },
  { unit: 1, from: 4, to: 9, tone: "booked", label: "Booking.com" },
  { unit: 0, from: 7, to: 11, tone: "booked", label: "Airbnb" },
  { unit: 2, from: 9, to: 12, tone: "booked", label: "Direct" },
  { unit: 1, from: 10, to: 14, tone: "booked", label: "Direct" },
  { unit: 0, from: 13, to: 17, tone: "hold", label: "Hold · 24h" },
  { unit: 2, from: 14, to: 21, tone: "booked", label: "Booking.com" },
  { unit: 1, from: 15, to: 19, tone: "booked", label: "Direct" },
  { unit: 0, from: 18, to: 21, tone: "booked", label: "Airbnb" },
];

export function TimelineViz({ className }: { className?: string }) {
  const [ref, inView] = useInView<HTMLDivElement>(0.2);
  const step = useCycle(T_BARS.length + 4, 700, inView);
  const revealed = Math.min(step, T_BARS.length);
  const nights = T_BARS.slice(0, revealed).reduce((n, b) => n + (b.to - b.from), 0);
  const pct = Math.round((nights / (T_UNITS.length * T_DAYS)) * 100);

  return (
    <div ref={ref} className={cn(card, "p-4 sm:p-6", className)}>
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="font-display text-sm font-bold text-pine">October</p>
          <p className="text-xs text-pine/55">3 units · one calendar</p>
        </div>
        <div className="text-right">
          <p className="font-display text-4xl leading-none font-extrabold tracking-tight text-pine">
            <CountUp value={pct} suffix="%" active={inView} duration={600} />
          </p>
          <p className="mt-1 text-xs text-pine/55">of nights booked</p>
        </div>
      </div>
      <div className="space-y-2">
        {T_UNITS.map((unit, u) => (
          <div key={unit} className="grid grid-cols-[4.5rem_1fr] items-center gap-3 sm:grid-cols-[8rem_1fr]">
            <p className="truncate text-[11px] font-medium text-pine sm:text-xs">{unit}</p>
            <div className="relative h-10 rounded-lg bg-pine-mist/50 sm:h-12">
              <div className="absolute inset-0 grid" style={{ gridTemplateColumns: `repeat(${T_DAYS}, 1fr)` }}>
                {Array.from({ length: T_DAYS }, (_, i) => <span key={i} className="border-l border-pine/6 first:border-0" />)}
              </div>
              {T_BARS.map((b, i) =>
                b.unit !== u ? null : (
                  <div
                    key={i}
                    style={{ left: `${(b.from / T_DAYS) * 100}%`, width: `calc(${((b.to - b.from) / T_DAYS) * 100}% - 3px)`, transformOrigin: "left" }}
                    className={cn(
                      "absolute inset-y-1.5 flex items-center overflow-hidden rounded-md border px-1.5 text-[10px] font-medium whitespace-nowrap transition-[transform,opacity] duration-500 will-change-transform sm:px-2 sm:text-[11px]",
                      b.tone === "booked" ? "border-stay-booked-line bg-stay-booked text-pine-deep" : "border-dashed border-stay-hold-line bg-stay-hold text-stay-hold-ink",
                      i < revealed ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0",
                    )}
                  >
                    {b.label}
                  </div>
                ),
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ───────── Overlap rejected, free dates held ───────── */

export function OverlapViz({ className }: { className?: string }) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const step = useCycle(6, 1400, inView);
  const cols = 10;
  const bar = (from: number, to: number) => ({ left: `${(from / cols) * 100}%`, width: `${((to - from) / cols) * 100}%` });
  const clash = step === 1 || step === 2;
  const held = step >= 4;

  return (
    <div ref={ref} className={cn(card, className)}>
      <p className="mb-3 font-display text-sm font-bold text-pine">Sea View Studio</p>
      <div className="relative h-24 rounded-xl bg-pine-mist/50">
        <div className="absolute inset-0 grid grid-cols-10">
          {Array.from({ length: cols }, (_, i) => <span key={i} className="border-l border-pine/8 first:border-0" />)}
        </div>
        <div style={bar(3, 6)} className="absolute top-3 flex h-8 items-center rounded-lg border border-stay-booked-line bg-stay-booked px-2 text-[11px] font-medium text-pine-deep">Booked · J. Tan</div>
        <div
          style={clash ? bar(5, 8) : held ? bar(6, 9) : bar(5, 8)}
          className={cn(
            "absolute top-14 flex h-8 items-center rounded-lg border border-dashed px-2 text-[11px] font-medium transition-all duration-500",
            clash && "border-clay bg-clay-mist text-clay-deep",
            step === 2 && "animate-[shake_.4s_ease-in-out]",
            held && "border-stay-hold-line bg-stay-hold text-stay-hold-ink",
            !clash && !held && "pointer-events-none opacity-0",
          )}
        >
          {clash ? "New guest" : "New guest · hold 24h"}
        </div>
      </div>
      <div className="mt-3 h-8">
        <p className={cn("flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-300", step === 2 ? "bg-clay-mist text-clay-deep opacity-100" : step >= 4 ? "bg-sage text-pine-deep opacity-100" : "opacity-0")}>
          {step === 2 ? <><ShieldAlert className="size-3.5" /> Dates already taken. Booking blocked.</> : <><Check className="size-3.5" /> Free dates held for 24 hours.</>}
        </p>
      </div>
    </div>
  );
}

/* ───────── Payments closing the balance ───────── */

const TOTAL = 7700;
const PAY_STEPS = [
  { paid: 0, status: "On hold", note: "Waiting for deposit" },
  { paid: 2000, status: "Confirmed", note: "₱2,000 GCash received" },
  { paid: 7700, status: "Paid in full", note: "₱5,700 cash on arrival" },
  { paid: 7700, status: "Paid in full", note: "₱5,700 cash on arrival" },
];

export function PaymentViz({ className }: { className?: string }) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const step = useCycle(PAY_STEPS.length, 1800, inView);
  const s = PAY_STEPS[step];
  return (
    <div ref={ref} className={cn(card, className)}>
      <div className="flex items-start justify-between">
        <div>
          <p className="font-display text-sm font-bold text-pine">Maria Santos</p>
          <p className="text-xs text-pine/60">3 nights · Direct</p>
        </div>
        <span className={cn("rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors duration-500", step === 0 ? "bg-stay-hold text-stay-hold-ink" : "bg-sage text-pine-deep")}>{s.status}</span>
      </div>
      <p className="mt-5 text-xs text-pine/60">Balance due</p>
      <p className="font-display text-4xl font-extrabold tracking-tight text-pine">
        <CountUp prefix="₱" value={TOTAL - s.paid} active={inView} />
      </p>
      <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-pine-mist">
        <div className="h-full origin-left rounded-full bg-moss transition-transform duration-1000 ease-out" style={{ transform: `scaleX(${s.paid / TOTAL})` }} />
      </div>
      <div className="mt-2 flex justify-between text-[11px] text-pine/60">
        <span>{s.note}</span>
        <span className="tabular-nums">of ₱7,700</span>
      </div>
    </div>
  );
}

/* ───────── Checklist ticking itself ───────── */

const TASKS = ["Bedsheets", "Towels", "Bathroom", "Kitchen", "Rubbish", "Damage check"];

export function TurnoverViz({ className }: { className?: string }) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const step = useCycle(TASKS.length + 3, 900, inView);
  const done = Math.min(step, TASKS.length);
  const ready = step >= TASKS.length;
  return (
    <div ref={ref} className={cn(card, className)}>
      <div className="mb-3 flex items-center justify-between">
        <p className="font-display text-sm font-bold text-pine">Garden Loft</p>
        <span className={cn("rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors duration-500", ready ? "bg-sage text-pine-deep" : "bg-stay-hold text-stay-hold-ink")}>
          {ready ? "Ready for next guest" : "Needs cleaning"}
        </span>
      </div>
      <ul className="space-y-1.5">
        {TASKS.map((t, i) => (
          <li key={t} className="flex items-center gap-3 text-sm">
            <span className={cn("grid size-5 place-items-center rounded-md border transition-all duration-300", i < done ? "border-pine bg-pine text-white" : "border-pine/25 bg-card")}>
              {i < done && <Check className="size-3.5" />}
            </span>
            <span className={cn("transition-colors duration-300", i < done ? "text-pine/45 line-through" : "text-pine")}>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ───────── Chart that draws, with numbers counting ───────── */

const POINTS = [18, 26, 22, 34, 31, 44, 40, 52, 49, 62, 58, 72];

export function ChartViz({ className }: { className?: string }) {
  const [ref, inView] = useInView<HTMLDivElement>(0.35);
  const [drawn, setDrawn] = useState(false);
  useEffect(() => {
    if (inView) setDrawn(true);
  }, [inView]);
  const w = 300, h = 120;
  const xy = POINTS.map((p, i) => [(i / (POINTS.length - 1)) * w, h - (p / 80) * h] as const);
  const line = xy.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  return (
    <div ref={ref} className={cn(card, className)}>
      <div className="grid grid-cols-3 gap-2">
        <div>
          <p className="text-[11px] text-pine/60">Cash collected</p>
          <p className="font-display text-xl font-extrabold text-pine"><CountUp prefix="₱" value={drawn ? 31200 : 0} duration={1600} /></p>
        </div>
        <div className="rounded-xl bg-sand px-2 py-1">
          <p className="text-[11px] text-pine/60">Deposits held</p>
          <p className="font-display text-xl font-extrabold text-bark"><CountUp prefix="₱" value={drawn ? 3000 : 0} duration={1600} /></p>
        </div>
        <div>
          <p className="text-[11px] text-pine/60">Expenses</p>
          <p className="font-display text-xl font-extrabold text-clay"><CountUp prefix="₱" value={drawn ? 4650 : 0} duration={1600} /></p>
        </div>
      </div>
      <svg viewBox={`0 0 ${w} ${h + 4}`} className="mt-4 w-full" role="img" aria-label="Cash collected rising over the month">
        <defs>
          <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#6f927e" stopOpacity="0.35" />
            <stop offset="1" stopColor="#6f927e" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={`${line} L${w},${h} L0,${h} Z`} fill="url(#area)" className={cn("transition-opacity duration-1000 delay-700", drawn ? "opacity-100" : "opacity-0")} />
        <path d={line} fill="none" stroke="#203a35" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" pathLength={1}
          strokeDasharray={1} strokeDashoffset={drawn ? 0 : 1} style={{ transition: "stroke-dashoffset 1.8s cubic-bezier(.4,0,.2,1)" }} />
        {xy.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i === xy.length - 1 ? 4.5 : 0} fill="#a64e37" className={cn("transition-opacity delay-[1600ms] duration-500", drawn ? "opacity-100" : "opacity-0")} />
        ))}
      </svg>
      <p className="mt-1 flex items-center gap-1.5 text-[11px] text-pine/55"><Clock className="size-3" /> Deposits are held, never counted as income.</p>
    </div>
  );
}
