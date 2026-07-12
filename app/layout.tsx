import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import Intro from "@/components/Intro";
import CursorHalo from "@/components/CursorHalo";
import CommandPalette from "@/components/CommandPalette";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  axes: ["wdth"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kashaniqbal.com"),
  title: {
    default: "Kashan Iqbal — AI Engineer · Full-Stack Developer · Educator",
    template: "%s — Kashan Iqbal",
  },
  description:
    "Helping developers and entrepreneurs build AI products, automate businesses, and create income online. Courses, digital products, and systems from someone still shipping.",
  keywords: [
    "AI engineering course",
    "full-stack development",
    "automation systems",
    "Shopify courses",
    "Kashan Iqbal",
    "digital products for developers",
  ],
  authors: [{ name: "Kashan Iqbal", url: "https://kashaniqbal.com" }],
  creator: "Kashan Iqbal",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://kashaniqbal.com",
    siteName: "Kashan Iqbal",
    title: "Kashan Iqbal — Build. Automate. Scale.",
    description:
      "AI products, automation, and income online — courses and tools from a builder still in the arena.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kashan Iqbal — Build. Automate. Scale.",
    description:
      "AI products, automation, and income online — courses and tools from a builder still in the arena.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} ${geistMono.variable} bg-paper text-ink antialiased`}
      >
        <LenisProvider>
          <Intro />
          {children}
          <CursorHalo />
          <CommandPalette />
        </LenisProvider>
      </body>
    </html>
  );
}
