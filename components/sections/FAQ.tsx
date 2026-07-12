"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FAQS } from "@/lib/content";
import { CONTAINER, EASE, SectionIntro } from "./shared";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-28 bg-[#F7F5FE] py-28 lg:py-40">
      <div className={CONTAINER}>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <SectionIntro
            number="10"
            eyebrow="Questions"
            title={
              <>
                Asked,
                <br />
                <span className="text-[#9a9da6]">answered.</span>
              </>
            }
          />

          <div>
            {FAQS.map((faq, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.75, ease: EASE, delay: i * 0.06 }}
                  className="border-t border-hairline last:border-b"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full items-center gap-6 py-6 text-left"
                  >
                    <span className="font-mono text-[11px] text-[#b3b6be]">
                      0{i + 1}
                    </span>
                    <span
                      className={`flex-1 text-[16.5px] font-medium tracking-tight transition-colors duration-400 ${
                        isOpen ? "text-ink" : "text-ink-soft group-hover:text-ink"
                      }`}
                    >
                      {faq.question}
                    </span>
                    {/* hand-made plus: two hairlines */}
                    <span className="relative h-3 w-3 shrink-0">
                      <span
                        className={`absolute left-0 top-1/2 h-px w-full -translate-y-1/2 transition-colors duration-300 ${isOpen ? "bg-[#4F46E5]" : "bg-ink"}`}
                      />
                      <motion.span
                        className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-ink"
                        animate={{ scaleY: isOpen ? 0 : 1 }}
                        transition={{ duration: 0.4, ease: EASE }}
                      />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-[58ch] pb-7 pl-[42px] text-[15px] leading-[1.75] text-ink-soft">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
