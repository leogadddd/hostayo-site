/* eslint-disable @next/next/no-img-element */
export function Logo({ className = "h-7", mark = false }: { className?: string; mark?: boolean }) {
  return (
    <img
      src={mark ? "/brand/hostayo-mark.png" : "/brand/hostayo-logo.png"}
      alt="Hostayo"
      className={className}
    />
  );
}
