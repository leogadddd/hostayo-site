import Image from "next/image";

/** The 1071×301 wordmark and 361×445 mark; next/image serves them at display size as WebP/AVIF. */
export function Logo({ className = "h-7", mark = false }: { className?: string; mark?: boolean }) {
  return mark ? (
    <Image src="/brand/hostayo-mark.png" alt="Hostayo" width={361} height={445} className={`${className} w-auto`} />
  ) : (
    <Image src="/brand/hostayo-logo.png" alt="Hostayo" width={1071} height={301} priority className={`${className} w-auto`} />
  );
}
