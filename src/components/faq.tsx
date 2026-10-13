import type { Faq as FaqItem } from "@/content/faqs";
import { Reveal } from "./reveal";

/** Plain <details> so every answer is in the server-rendered HTML and works without JavaScript. */
export function Faq({ faqs }: { faqs: FaqItem[] }) {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 pb-28 sm:px-6">
      <Reveal>
        <p className="text-sm font-semibold tracking-wide text-clay uppercase">FAQ</p>
        <h2 className="mt-3 font-display text-3xl leading-tight font-extrabold tracking-tight text-pine sm:text-5xl">
          Questions hosts ask before they start
        </h2>
      </Reveal>
      <div className="mt-10 divide-y divide-pine/10 border-y border-pine/10">
        {faqs.map((f) => (
          <details key={f.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold text-pine">
              <h3>{f.q}</h3>
              <span aria-hidden className="text-2xl text-clay transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 leading-relaxed text-pine/75">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
