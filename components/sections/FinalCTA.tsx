"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { EASE } from "./shared";

/**
 * The finale: the silver thread arrives at a single glowing point,
 * and the page asks for exactly one decision.
 */
export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 0.3"],
  });
  const plateScale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const plateY = useTransform(scrollYProgress, [0, 1], [90, 0]);
  const plateOpacity = useTransform(scrollYProgress, [0, 0.5], [0.35, 1]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative z-[2] flex scroll-mt-28 justify-center px-[3%] pb-16 pt-6 lg:pb-24"
    >
      <motion.div
        className="relative w-full max-w-[1640px] overflow-hidden rounded-card"
        style={{
          background:
            "linear-gradient(180deg, #131317 0%, #0c0c0f 50%, #0a0a0c 100%)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.07), 0 40px 100px -40px rgba(10,10,14,0.5)",
          ...(reduce
            ? {}
            : { scale: plateScale, y: plateY, opacity: plateOpacity }),
        }}
      >
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className="aurora-b absolute left-1/2 top-[-30%] h-[90%] w-[70%] -translate-x-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(closest-side, rgba(139,124,242,0.28), transparent 70%)",
              filter: "blur(70px)",
            }}
          />
          <div
            className="aurora-a absolute -bottom-[35%] right-[8%] h-[70%] w-[50%] rounded-full"
            style={{
              background:
                "radial-gradient(closest-side, rgba(56,189,248,0.14), transparent 70%)",
              filter: "blur(75px)",
            }}
          />
          <div className="grain absolute inset-0 opacity-[0.04] mix-blend-overlay" />
        </div>

        <div className="relative flex flex-col items-center px-7 py-24 text-center sm:py-28 lg:py-36">
          {/* the thread arrives */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease: EASE }}
            className="h-16 w-px origin-top bg-gradient-to-b from-transparent via-[#7C6AF0] to-[#A5B4FC]"
          />
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.55 }}
            className="mb-12 mt-[-1px] h-2 w-2 rounded-full bg-[#C7BFFB]"
            style={{
              boxShadow:
                "0 0 12px rgba(165,148,250,0.95), 0 0 32px rgba(124,106,240,0.55)",
            }}
          />

          <motion.h2
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: EASE, delay: 0.2 }}
            className="max-w-[14ch] font-semibold leading-[1.02] tracking-[-0.04em] text-white"
            style={{ fontSize: "clamp(2.6rem, 6.4vw, 5.4rem)" }}
          >
            Ready when
            <br />
            <span className="metal-text-dark">you are.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.38 }}
            className="mt-8 max-w-[44ch] text-[16.5px] leading-relaxed text-white/55"
          >
            Grab a product, read what I&rsquo;m building, or just get in touch.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.52 }}
            className="mt-11 flex flex-wrap items-center justify-center gap-4"
          >
            <motion.a
              href="#products"
              className="group relative inline-flex h-[52px] items-center overflow-hidden rounded-full px-8 text-[15px] font-medium text-white"
              style={{
                background: "linear-gradient(135deg, #7C6AF0 0%, #4F46E5 100%)",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.3), 0 10px 32px -8px rgba(124,106,240,0.6)",
              }}
              whileHover={{
                scale: 1.03,
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.35), 0 16px 44px -8px rgba(124,106,240,0.8)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 24 }}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -translate-x-[130%] bg-[linear-gradient(105deg,transparent_35%,rgba(255,255,255,0.25)_50%,transparent_65%)] transition-transform duration-700 ease-out group-hover:translate-x-[130%]"
              />
              View Products
            </motion.a>
            <motion.a
              href="mailto:hello@kashaniqbal.com"
              className="inline-flex h-[52px] items-center gap-2 rounded-full border border-white/15 px-7 text-[15px] font-medium text-white/85 backdrop-blur-sm transition-colors duration-400 hover:border-white/35 hover:text-white"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 26 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
