import type { Metadata, Viewport } from "next";
import "./globals.css";
import { NoiseOverlay } from "@/components/NoiseOverlay";
import { GridBackground } from "@/components/GridBackground";

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FBFAF6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/*
          Fonts loaded via direct <link> rather than next/font/google.
          Turbopack's font pipeline in Next 16 emits malformed
          unicode-range values (U+??) that break CSS parsing on
          stricter mobile browsers like Android Chrome — see
          commit notes. This bypasses that pipeline entirely.
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-[100dvh] bg-bg text-text antialiased overflow-x-hidden">
        <GridBackground />
        <NoiseOverlay />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
