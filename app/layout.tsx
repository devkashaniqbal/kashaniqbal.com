import type { Metadata, Viewport } from "next";
import Script from "next/script";
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
    default: "Kashan Iqbal — AI Engineer · Full-Stack Developer",
    template: "%s — Kashan Iqbal",
  },
  description:
    "AI engineer and full-stack developer building AI products, automation systems, and Shopify stores. Projects, digital products, and writing from someone still shipping.",
  applicationName: "Kashan Iqbal",
  category: "technology",
  keywords: [
    "Kashan Iqbal",
    "AI engineer",
    "full-stack developer",
    "automation systems",
    "n8n automation",
    "Shopify development",
    "digital products for developers",
    "AI engineer Pakistan",
  ],
  authors: [{ name: "Kashan Iqbal", url: "https://kashaniqbal.com" }],
  creator: "Kashan Iqbal",
  publisher: "Kashan Iqbal",
  formatDetection: { telephone: false },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://kashaniqbal.com",
    siteName: "Kashan Iqbal",
    title: "Kashan Iqbal — Build. Automate. Scale.",
    description:
      "AI products, automation systems, and digital tools from an engineer who's still shipping.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kashan Iqbal — Build. Automate. Scale.",
    description:
      "AI products, automation systems, and digital tools from an engineer who's still shipping.",
    creator: "@mkashaniqbaldev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "QbQHej7YKNXjqmMTnwGze-qcLpxLdXepBSOCKNuP3e0",
  },
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

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WNV1CV12ZP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WNV1CV12ZP');
          `}
        </Script>
      </body>
    </html>
  );
}
