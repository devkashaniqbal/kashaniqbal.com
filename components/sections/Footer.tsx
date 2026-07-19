"use client";

import { motion } from "framer-motion";
import { SOCIALS } from "@/lib/content";
import { CONTAINER, EASE } from "./shared";

const COLUMNS = [
  {
    title: "Explore",
    links: [
      { label: "Writing", href: "/blog" },
      { label: "Video Library", href: "#videos" },
      { label: "Community", href: "#community" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Templates", href: "#products" },
      { label: "Prompt Packs", href: "#products" },
      { label: "Systems", href: "#products" },
    ],
  },
  {
    title: "Studio",
    links: [
      { label: "Case Studies", href: "#projects" },
      { label: "About", href: "#about" },
      { label: "Consulting", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden pt-24">
      <div className={CONTAINER}>
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 border-t border-hairline pt-16 sm:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="col-span-2 sm:col-span-1">
            <a href="#" className="flex items-center gap-2.5">
              <span
                aria-hidden
                className="flex h-8 w-8 items-center justify-center rounded-[10px] text-[15px] font-semibold text-white"
                style={{
                  background:
                    "linear-gradient(150deg, #8FD0F5 -30%, #7C6AF0 35%, #4F46E5 100%)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)",
                }}
              >
                K
              </span>
              <span className="text-[15px] font-semibold tracking-tight text-ink">
                Kashan <span className="font-normal text-ink-soft">Iqbal</span>
              </span>
            </a>
            <p className="mt-5 max-w-[30ch] text-[13.5px] leading-relaxed text-ink-soft">
              AI engineer and full-stack developer — building AI products,
              automation systems, and writing about what happens when they
              ship.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[12.5px] font-medium text-[#9a9da6] transition-colors duration-300 hover:text-ink"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#b3b6be]">
                {col.title}
              </p>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="group inline-flex items-center gap-1 text-[14px] text-ink-soft transition-colors duration-300 hover:text-ink"
                    >
                      <span className="block h-px w-0 bg-ink transition-all duration-400 ease-out group-hover:mr-1.5 group-hover:w-3" />
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-hairline py-8">
          <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[#b3b6be]">
            © 2026 Kashan Iqbal — All rights reserved
          </p>
          <p className="hidden font-mono text-[10.5px] uppercase tracking-[0.18em] text-[#b3b6be] sm:block">
            Press <kbd className="rounded border border-hairline px-1.5 py-0.5">⌘K</kbd> anywhere
          </p>
          <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[#b3b6be]">
            Designed & built by hand · No templates
          </p>
        </div>
      </div>

      {/* the ghost signature — a horizon of type sinking below the page edge */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1.4, ease: EASE }}
        className="pointer-events-none select-none overflow-hidden"
      >
        <p
          className="translate-y-[32%] whitespace-nowrap text-center font-semibold tracking-[-0.05em]"
          style={{
            fontSize: "clamp(5rem, 16.5vw, 17rem)",
            lineHeight: 1,
            background:
              "linear-gradient(180deg, #E7E3FC 0%, #F5F3FE 70%, #ffffff 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          KASHAN IQBAL
        </p>
      </motion.div>
    </footer>
  );
}
