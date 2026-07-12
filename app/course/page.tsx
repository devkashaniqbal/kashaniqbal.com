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

export const metadata: Metadata = {
  title: "Shopify Store Mastery — Stores, Freelancing & Digital Products",
  description:
    "Step-by-step training to build Shopify stores, land freelance clients, and sell digital products. Lifetime access, mentorship, and a 14-day money-back guarantee.",
  alternates: { canonical: "/course" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: OFFER.name,
  description:
    "Step-by-step training to build Shopify stores, land freelance clients, and sell digital products.",
  provider: {
    "@type": "Person",
    name: "Kashan Iqbal",
    url: "https://kashaniqbal.com",
  },
  offers: {
    "@type": "Offer",
    price: OFFER.priceNow.replace("$", ""),
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
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
