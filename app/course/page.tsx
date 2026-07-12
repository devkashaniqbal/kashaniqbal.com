import type { Metadata } from "next";
import Link from "next/link";
import { Poppins } from "next/font/google";
import CourseHero, { Ticker } from "@/components/course/CourseHero";
import { WhyNow, AccessDark } from "@/components/course/WhyAndAccess";
import {
  MentorSection,
  StudentResults,
} from "@/components/course/MentorAndResults";
import {
  Guarantee,
  Personas,
} from "@/components/course/GuaranteeAndPersonas";
import { Modules, BonusVault } from "@/components/course/ModulesAndBonuses";
import StickyBar, { WhatsAppFloat } from "@/components/course/StickyBar";
import { OFFER } from "@/lib/course-content";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
});

const COURSE_DESCRIPTION =
  "Step-by-step training to build Shopify stores, land freelance clients, and sell digital products. 14 hours, 62 lectures, lifetime access, mentorship, and a 14-day money-back guarantee.";

export const metadata: Metadata = {
  title: "Shopify Store Mastery — Stores, Freelancing & Digital Products",
  description: COURSE_DESCRIPTION,
  keywords: [
    "Shopify course",
    "Shopify store mastery",
    "learn Shopify",
    "e-commerce course",
    "freelancing course",
    "sell digital products",
    "product hunting",
    "Kashan Iqbal course",
  ],
  alternates: { canonical: "/course" },
  openGraph: {
    type: "website",
    url: "https://kashaniqbal.com/course",
    siteName: "Kashan Iqbal",
    title: "Shopify Store Mastery — Stores, Freelancing & Digital Products",
    description: COURSE_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Store Mastery — Stores, Freelancing & Digital Products",
    description: COURSE_DESCRIPTION,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "@id": "https://kashaniqbal.com/course#course",
      name: OFFER.name,
      description: COURSE_DESCRIPTION,
      url: "https://kashaniqbal.com/course",
      inLanguage: "en",
      provider: {
        "@type": "Person",
        name: "Kashan Iqbal",
        url: "https://kashaniqbal.com",
      },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "Online",
        courseWorkload: "PT14H",
        location: {
          "@type": "VirtualLocation",
          url: "https://kashaniqbal.com/course",
        },
      },
      offers: {
        "@type": "Offer",
        url: "https://kashaniqbal.com/course",
        price: OFFER.priceNow.replace("$", ""),
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        category: "Paid",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://kashaniqbal.com/course#breadcrumbs",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://kashaniqbal.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Shopify Store Mastery",
          item: "https://kashaniqbal.com/course",
        },
      ],
    },
  ],
};

export default function CoursePage() {
  return (
    <div
      className={`${poppins.variable} min-h-screen bg-[#F7FAFC] pb-20`}
      style={{ fontFamily: "var(--font-poppins), sans-serif" }}
    >
      <Ticker />
      <main>
        <CourseHero />
        <WhyNow />
        <AccessDark />
        <MentorSection />
        <StudentResults />
        <Guarantee />
        <Personas />
        <Modules />
        <BonusVault />
      </main>

      <footer className="px-5 pb-8 pt-2 text-center text-[12.5px] text-[#8b95a1]">
        © 2026 Kashan Iqbal ·{" "}
        <Link href="/" className="underline">
          kashaniqbal.com
        </Link>{" "}
        ·{" "}
        <a href="#" className="underline">Refund Policy</a>
      </footer>

      <StickyBar />
      <WhatsAppFloat />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
