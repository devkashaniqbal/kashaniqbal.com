"use client";

import { motion } from "framer-motion";
import { EASE } from "./shared";

/**
 * A signed note, not a badge: the refund promise in first person,
 * placed between the decision and the finale.
 */
export default function Guarantee() {
  return (
    <section className="flex justify-center px-6 py-10 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: EASE }}
        className="relative w-full max-w-[720px] overflow-hidden rounded-[26px] border border-hairline px-8 py-12 text-center sm:px-14"
        style={{
          boxShadow:
            "0 1px 2px rgba(20,20,30,0.04), 0 24px 60px -30px rgba(20,20,30,0.12)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(70% 100% at 50% -20%, rgba(226,221,251,0.75), transparent 65%)",
          }}
        />
        <div className="relative">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#9a9da6]">
            The guarantee
          </p>
          <p className="mx-auto mt-6 max-w-[38ch] text-[19px] font-light italic leading-[1.65] tracking-tight text-ink">
            &ldquo;Finish two modules. If the course isn&rsquo;t worth
            multiples of what you paid, email me within 14 days and every
            cent comes back. No forms. No questions.&rdquo;
          </p>
          <p className="mt-7 font-mono text-[10px] uppercase tracking-[0.26em] text-[#9a9da6]">
            — Kashan Iqbal
          </p>
        </div>
      </motion.div>
    </section>
  );
}
