import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/logo";
import { StayGrid } from "@/components/stay-grid";

export const metadata: Metadata = { title: "Page not found · Hostayo" };

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-pine px-6 text-center text-white">
      <StayGrid blocks={false} />
      <Link href="/" aria-label="Hostayo home" className="absolute top-8 left-1/2 -translate-x-1/2">
        <Logo className="h-7 brightness-0 invert" />
      </Link>
      <div className="relative">
        <p className="font-display text-[clamp(6rem,24vw,14rem)] leading-none font-extrabold tracking-tighter text-white/10">404</p>
        <h1 className="-mt-6 font-display text-3xl font-extrabold tracking-tight sm:-mt-10 sm:text-5xl">This date isn’t booked.</h1>
        <p className="mx-auto mt-4 max-w-md text-white/70">The page you’re looking for doesn’t exist or has moved. Let’s get you back to somewhere that does.</p>
        <Link href="/" className="group mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-clay px-6 font-semibold text-white transition-all hover:gap-3 hover:bg-clay-deep">
          <ArrowLeft className="size-4" /> Back to Hostayo
        </Link>
      </div>
    </main>
  );
}
