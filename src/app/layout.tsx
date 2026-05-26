import type { Metadata } from "next";
import { Instrument_Serif, Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { NoiseOverlay } from "@/components/NoiseOverlay";
import { GridBackground } from "@/components/GridBackground";

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sidekick Solutions — Custom AI Agents for Operators",
  description:
    "We design and deploy custom AI agents that handle the work your team shouldn't have to. Lead qualification, support automation, ops workflows, and internal knowledge — built and owned by you.",
  openGraph: {
    title: "Sidekick Solutions",
    description: "Custom AI agents for teams that have better things to do.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${geist.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-bg text-text antialiased">
        <GridBackground />
        <NoiseOverlay />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
