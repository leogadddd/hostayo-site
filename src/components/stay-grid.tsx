/* eslint-disable @next/next/no-img-element */
const CELL = 48;

// Filled grid cells, like stays on a calendar: [column, row, span, color].
const BLOCKS: [number, number, number, string][] = [
  [7, 1, 3, "bg-sage/80"],
  [9, 2, 2, "bg-sand-deep/80"],
  [6, 3, 2, "bg-paper/10"],
  [8, 3, 3, "bg-moss/70"],
  [10, 4, 2, "bg-clay/70"],
];

/**
 * The calendar-grid backdrop from the Hostayo sign-in panel: a faint grid,
 * a few filled "stay" blocks and the door mark as a watermark.
 * Place inside a `relative overflow-hidden` pine container.
 */
export function StayGrid({ blocks = true }: { blocks?: boolean }) {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-paper) 1px, transparent 1px), linear-gradient(90deg, var(--color-paper) 1px, transparent 1px)",
          backgroundSize: `${CELL}px ${CELL}px`,
        }}
      />
      {blocks &&
        BLOCKS.map(([col, row, span, color]) => (
          <span
            key={`${col}-${row}`}
            aria-hidden
            className={`pointer-events-none absolute hidden lg:block ${color}`}
            style={{ left: col * CELL + 1, top: row * CELL + 1, width: span * CELL - 1, height: CELL - 1 }}
          />
        ))}
      <img
        src="/brand/hostayo-mark.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-16 -bottom-16 h-96 w-96 opacity-5 brightness-0 invert"
      />
    </>
  );
}
