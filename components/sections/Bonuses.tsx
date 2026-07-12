"use client";

import { motion } from "framer-motion";
import { BONUSES, BONUS_TOTAL } from "@/lib/content";
import { CONTAINER, EASE, Reveal, SectionIntro } from "./shared";

/**
 * The vault: everything bundled with enrollment, written as a
 * manifest with struck values — a receipt, not a bonus-card grid.
 */
export default function Bonuses() {
  return (
    <section id="bonuses" className="scroll-mt-28 py-28 lg:py-40">
      <div className={CONTAINER}>
        <SectionIntro
          number="03"
          eyebrow="Included with enrollment"
          title={
            <>
              Enroll once.
              <br />
              <span className="text-[#9a9da6]">Take the vault with you.</span>
            </>
          }
          lede="Every course unlocks the same vault — the live sessions, tools, and templates I use myself. Not upsells. Not trials. Included."
        />

        <div className="mt-16 lg:mt-20">
          {BONUSES.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.75, ease: EASE, delay: i * 0.06 }}
              className="group relative grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1 border-t border-hairline py-6 transition-colors duration-500 hover:border-[#d5d7dc] sm:grid-cols-[28px_1fr_auto_auto] sm:gap-x-8"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#f4f5f8] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-70"
              />
              <span className="relative hidden font-mono text-[11px] text-[#b3b6be] sm:block">
                0{i + 1}
              </span>
              <span className="relative">
                <span className="block text-[16.5px] font-semibold tracking-tight text-ink transition-transform duration-500 ease-out group-hover:translate-x-1.5">
                  {b.name}
                </span>
                <span className="mt-0.5 block text-[13.5px] text-ink-soft transition-transform duration-500 ease-out group-hover:translate-x-1.5">
                  {b.detail}
                </span>
              </span>
              <span className="relative font-mono text-[12.5px] text-[#b3b6be] line-through decoration-[#c9ccd2]">
                {b.value}
              </span>
              <span className="relative hidden rounded-full border border-hairline px-3 py-1 font-mono text-[9.5px] uppercase tracking-[0.16em] text-ink sm:block">
                Included
              </span>
            </motion.div>
          ))}

          {/* the receipt line */}
          <Reveal>
            <div className="flex flex-wrap items-baseline justify-between gap-4 border-t border-ink/80 pt-7">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-[#9a9da6]">
                Total vault value
              </p>
              <p className="text-[17px] tracking-tight">
                <span className="font-mono text-[14px] text-[#b3b6be] line-through decoration-[#c9ccd2]">
                  {BONUS_TOTAL}
                </span>
                <span className="ml-4 font-semibold text-ink">
                  $0 with any course
                </span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
