import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FlyingRobot from "@/components/three/FlyingRobot";
import ThreadCanvas from "@/components/ThreadCanvas";
import StickyCTA from "@/components/StickyCTA";
import Guarantee from "@/components/sections/Guarantee";
import { COURSES } from "@/lib/content";
import WhyKashan from "@/components/sections/WhyKashan";
import ProofBento from "@/components/sections/ProofBento";
import Manifesto from "@/components/sections/Manifesto";
import Courses from "@/components/sections/Courses";
import Bonuses from "@/components/sections/Bonuses";
import Fork from "@/components/sections/Fork";
import Products from "@/components/sections/Products";
import Videos from "@/components/sections/Videos";
import CaseStudies from "@/components/sections/CaseStudies";
import DarkAct from "@/components/sections/DarkAct";
import Community from "@/components/sections/Community";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <FlyingRobot />
      {/* the page is a curtain: it lifts at the end to reveal the footer */}
      <main className="relative z-10 bg-white pb-24">
        <Hero />
        <ThreadCanvas>
          <WhyKashan />
          <ProofBento />
          <Manifesto />
          <Courses />
          <Bonuses />
          <Products />
          <Videos />
          <CaseStudies />
          <DarkAct />
          <Community />
          <FAQ />
          <Fork />
          <Guarantee />
          <FinalCTA />
        </ThreadCanvas>
      </main>
      <div className="sticky bottom-0 z-0">
        <Footer />
      </div>
      <StickyCTA />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://kashaniqbal.com/#person",
      name: "Kashan Iqbal",
      url: "https://kashaniqbal.com",
      jobTitle: "AI Engineer, Full-Stack Developer, Educator",
      description:
        "Helping developers and entrepreneurs build AI products, automate businesses, and create income online.",
      sameAs: [
        "https://youtube.com/@kashaniqbal",
        "https://x.com/kashaniqbal",
        "https://github.com/kashaniqbal",
        "https://linkedin.com/in/kashaniqbal",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://kashaniqbal.com/#website",
      url: "https://kashaniqbal.com",
      name: "Kashan Iqbal",
      publisher: { "@id": "https://kashaniqbal.com/#person" },
    },
    {
      "@type": "ItemList",
      name: "Courses by Kashan Iqbal",
      itemListElement: COURSES.map((course, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Course",
          name: course.title,
          description: course.description,
          provider: { "@id": "https://kashaniqbal.com/#person" },
          offers: {
            "@type": "Offer",
            price: course.price.replace("$", ""),
            priceCurrency: "USD",
            availability:
              course.status === "Enrolling"
                ? "https://schema.org/InStock"
                : "https://schema.org/PreOrder",
          },
        },
      })),
    },
  ],
};
