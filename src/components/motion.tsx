"use client";

import { useEffect, useRef, useState } from "react";

/** True while the element is on screen; lets animations pause off-screen. */
export function useInView<T extends Element>(threshold = 0.3) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

/** Steps 0..length-1 on a timer while `active`; wraps around. */
export function useCycle(length: number, ms: number, active: boolean) {
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (!active) return;
    const t = setInterval(() => setStep((s) => (s + 1) % length), ms);
    return () => clearInterval(t);
  }, [active, length, ms]);
  return step;
}

/** Number that eases to `value` whenever it changes (and from 0 on first view). Writes to the DOM directly, so it never re-renders React. */
export function CountUp({ value, prefix = "", suffix = "", active = true, duration = 900, className }: {
  value: number; prefix?: string; suffix?: string; active?: boolean; duration?: number; className?: string;
}) {
  const el = useRef<HTMLSpanElement>(null);
  const from = useRef(0);
  const text = (v: number) => `${prefix}${Math.round(v).toLocaleString("en-PH")}${suffix}`;
  useEffect(() => {
    const node = el.current;
    if (!active || !node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      from.current = value;
      node.textContent = text(value);
      return;
    }
    const start = performance.now();
    const origin = from.current;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const v = origin + (value - origin) * (1 - Math.pow(1 - t, 3));
      from.current = v;
      node.textContent = text(v);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, active, duration, prefix, suffix]);
  return <span ref={el} className={className}>{text(0)}</span>;
}
