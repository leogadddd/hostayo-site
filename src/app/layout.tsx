import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-montserrat", display: "swap" });

export const metadata: Metadata = {
  title: "Hostayo — a calmer way to run your stays",
  description:
    "Bookings, payments, turnovers and expenses for small short-stay operators in the Philippines. Try the live demo.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
