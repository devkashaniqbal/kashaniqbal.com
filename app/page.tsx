import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FlyingRobot from "@/components/three/FlyingRobot";
import ThreadCanvas from "@/components/ThreadCanvas";
import { FAQS, PRODUCTS } from "@/lib/content";
import WhyKashan from "@/components/sections/WhyKashan";
import ProofBento from "@/components/sections/ProofBento";
import Manifesto from "@/components/sections/Manifesto";
import DigitalProducts from "@/components/sections/DigitalProducts";
import Videos from "@/components/sections/Videos";
import Writing from "@/components/sections/Writing";
import CaseStudies from "@/components/sections/CaseStudies";
import DarkAct from "@/components/sections/DarkAct";
import Community from "@/components/sections/Community";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import { getGalleryImages } from "@/lib/gallery";

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
          <CaseStudies />
          <Manifesto />
          <Writing />
          <Videos />
          <Community />
          <DigitalProducts />
          <DarkAct />
          <FAQ />
          <FinalCTA />
        </ThreadCanvas>
      </main>
      <div className="sticky bottom-0 z-0">
        <Footer />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

const galleryImages = getGalleryImages();

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://kashaniqbal.com/#person",
      name: "Kashan Iqbal",
      url: "https://kashaniqbal.com",
      image: [
        "https://kashaniqbal.com/portrait.png",
        ...galleryImages.map((img) => `https://kashaniqbal.com${img.src}`),
      ],
      jobTitle: "AI Engineer, Full-Stack Developer",
      description:
        "AI engineer and full-stack developer building AI products, automation systems, and Shopify stores.",
      knowsAbout: [
        "AI Engineering",
        "Full-Stack Development",
        "Business Automation",
        "Shopify & E-commerce",
        "Digital Products",
      ],
      sameAs: [
        "https://www.instagram.com/whynot.kashan",
        "https://x.com/mkashaniqbaldev",
        "https://www.linkedin.com/in/kashan-zafar-2b4909397",
        "https://github.com/devkashaniqbal",
        "https://www.facebook.com/profile.php?id=61589595670215",
        "https://medium.com/@kashaniqbal",
        "https://www.youtube.com/@devkashaniqbal",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://kashaniqbal.com/#website",
      url: "https://kashaniqbal.com",
      name: "Kashan Iqbal",
      publisher: { "@id": "https://kashaniqbal.com/#person" },
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": "https://kashaniqbal.com/#webpage",
      url: "https://kashaniqbal.com",
      name: "Kashan Iqbal — AI Engineer · Full-Stack Developer",
      isPartOf: { "@id": "https://kashaniqbal.com/#website" },
      about: { "@id": "https://kashaniqbal.com/#person" },
      inLanguage: "en-US",
    },
    {
      "@type": "FAQPage",
      "@id": "https://kashaniqbal.com/#faq",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@type": "ItemList",
      name: "Digital products by Kashan Iqbal",
      itemListElement: PRODUCTS.map((product, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Product",
          name: product.name,
          description: product.line,
          category: product.kind,
          offers: {
            "@type": "Offer",
            price: product.price.replace("$", ""),
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
        },
      })),
    },
    ...(galleryImages.length > 0
      ? [
          {
            "@type": "ImageGallery",
            "@id": "https://kashaniqbal.com/#gallery",
            name: "Kashan Iqbal — behind the build",
            about: { "@id": "https://kashaniqbal.com/#person" },
            image: galleryImages.map((img) => ({
              "@type": "ImageObject",
              contentUrl: `https://kashaniqbal.com${img.src}`,
              url: `https://kashaniqbal.com${img.src}`,
              name: img.alt,
              description: img.alt,
            })),
          },
        ]
      : []),
  ],
};
