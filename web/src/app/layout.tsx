import type { Metadata } from "next";
import { Crimson_Pro, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-serif",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "10x Your Productivity — Cursor × Claude Code Guide",
  description: "Perfect Guide of Cursor × Claude Code",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={`${crimsonPro.variable} ${instrumentSans.variable} font-sans antialiased`}
      >
        <Navigation />
        <main className="lg:pl-64 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
