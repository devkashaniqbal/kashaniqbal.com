"use client";

import { motion } from "framer-motion";
import { FORK } from "@/lib/content";
import { CONTAINER, EASE, SectionIntro } from "./shared";

/**
 * The decision, staged as an editorial diptych: the gray path and the
 * lit one — no red crosses, no pressure, just contrast.
 */
export default function Fork() {
  return (
    <section className="py-28 lg:py-40">
      <div className={CONTAINER}>
        <SectionIntro
          number="11"
          eyebrow="The decision"
          title={
            <>
              Two ways
              <br />
              <span className="text-[#9a9da6]">from here.</span>
            </>
          }
        />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:mt-20 lg:grid-cols-2 lg:gap-0">
          {/* the gray path */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="py-4 lg:border-r lg:border-hairline lg:py-10 lg:pr-16"
          >
            <p className="font-mono text-[10.5px] uppercase tracking-[0.26em] text-[#b3b6be]">
              {FORK.alone.label}
            </p>
            <ul className="mt-8 flex flex-col gap-6">
              {FORK.alone.points.map((point, i) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
                  className="flex items-baseline gap-4 text-[16px] leading-relaxed text-[#b3b6be]"
                >
                  <span aria-hidden className="h-px w-4 shrink-0 translate-y-[-4px] bg-[#d8dade]" />
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* the lit path */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.12 }}
            className="relative overflow-hidden rounded-[26px] border border-hairline p-9 sm:p-12 lg:ml-16"
            style={{
              boxShadow:
                "0 1px 2px rgba(20,20,30,0.04), 0 28px 70px -32px rgba(20,20,30,0.14)",
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(70% 90% at 85% -10%, rgba(199,190,248,0.55), transparent 60%), radial-gradient(50% 80% at 8% 105%, rgba(190,227,250,0.5), transparent 65%)",
              }}
            />
            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.26em] text-ink">
                  {FORK.together.label}
                </p>
                <span className="rounded-full border border-[#d9dbe0] px-3 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-ink-soft">
                  Recommended
                </span>
              </div>
              <ul className="mt-8 flex flex-col gap-6">
                {FORK.together.points.map((point, i) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.7,
                      ease: EASE,
                      delay: 0.15 + i * 0.08,
                    }}
                    className="flex items-baseline gap-4 text-[16px] font-medium leading-relaxed text-ink"
                  >
                    <span
                      aria-hidden
                      className="relative h-[16px] w-[16px] shrink-0 translate-y-[2px] rounded-full border border-[#c9ccd2]"
                    >
                      <span className="absolute left-[3.5px] top-[7.5px] h-px w-[4px] rotate-45 bg-ink" />
                      <span className="absolute left-[5.5px] top-[6.5px] h-px w-[6.5px] -rotate-45 bg-ink" />
                    </span>
                    {point}
                  </motion.li>
                ))}
              </ul>
              <motion.a
                href="#courses"
                className="group relative mt-10 inline-flex h-[50px] items-center gap-2.5 overflow-hidden rounded-full px-8 text-[14.5px] font-medium text-white"
                style={{
                  background:
                    "linear-gradient(135deg, #7C6AF0 0%, #4F46E5 100%)",
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.25), 0 10px 28px -10px rgba(93,78,232,0.55)",
                }}
                whileHover={{
                  scale: 1.03,
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.3), 0 16px 40px -10px rgba(93,78,232,0.7)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 24 }}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -translate-x-[130%] bg-[linear-gradient(105deg,transparent_35%,rgba(255,255,255,0.2)_50%,transparent_65%)] transition-transform duration-700 ease-out group-hover:translate-x-[130%]"
                />
                Choose your course
                <span
                  aria-hidden
                  className="transition-transform duration-300 ease-out group-hover:translate-x-1"
                >
                  →
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
