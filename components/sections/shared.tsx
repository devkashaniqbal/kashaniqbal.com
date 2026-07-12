"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";

export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ————— the brand color system: violet → indigo → ice ————— */
export const VIOLET = "#7C6AF0";
export const INDIGO = "#4F46E5";
export const ICE_CYAN = "#8FD0F5";

/** Section background tints (bold pass). */
export const TINT_VIOLET = "#F5F3FE";
export const TINT_ICE = "#EFF8FE";
export const TINT_INDIGO = "#F1F2FE";

/** The one CTA gradient used across the site. */
export const CTA_GRADIENT =
  "linear-gradient(135deg, #7C6AF0 0%, #4F46E5 100%)";
export const CTA_SHADOW =
  "inset 0 1px 0 rgba(255,255,255,0.25), 0 10px 28px -10px rgba(93,78,232,0.55)";
export const CTA_SHADOW_HOVER =
  "inset 0 1px 0 rgba(255,255,255,0.3), 0 16px 40px -10px rgba(93,78,232,0.7)";

/**
 * Shared horizontal geometry. The thread rail sits at
 * `max(2rem, calc(50% - 620px))` from the page's left edge — exactly
 * this container's left boundary at ≥1240px — so section nodes and the
 * rail always align.
 */
export const CONTAINER = "mx-auto w-full max-w-[1240px] px-6 sm:px-10 lg:px-20";

export const RAIL_LEFT = "max(2rem, calc(50% - 620px))";

export const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE, delay },
  }),
};

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}

/**
 * Recurring section opener with scroll depth built in: a node on the
 * thread, an eyebrow whose rule draws itself, a masked heading rise,
 * and a giant outlined chapter numeral parallaxing behind the content
 * at its own speed.
 */
export function SectionIntro({
  number,
  eyebrow,
  title,
  lede,
  dark = false,
}: {
  number: string;
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  dark?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const ghostY = useTransform(scrollYProgress, [0, 1], [90, -90]);

  return (
    <div ref={ref} className="relative">
      {/* ghost numeral — outlined, drifting slower than the page */}
      <motion.span
        aria-hidden
        style={{
          y: reduce ? 0 : ghostY,
          WebkitTextStroke: dark
            ? "1px rgba(165,180,252,0.14)"
            : "1px #E4E0FB",
          color: "transparent",
          fontSize: "clamp(9rem, 22vw, 19rem)",
        }}
        className="pointer-events-none absolute -top-[0.42em] right-[-2%] select-none font-semibold leading-none tracking-[-0.05em]"
      >
        {number}
      </motion.span>

      {/* node on the thread (desktop only, white sections only) */}
      {!dark && (
        <motion.span
          aria-hidden
          className="absolute top-[7px] hidden -translate-x-1/2 rounded-full lg:block"
          style={{ left: "-5rem", width: 9, height: 9 }}
          initial={{ scale: 0, backgroundColor: "#E4E0FB" }}
          whileInView={{ scale: 1, backgroundColor: "#4F46E5" }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: EASE }}
        />
      )}

      {/* eyebrow — the rule draws, then the label lands */}
      <div className="relative flex items-center gap-4">
        <motion.span
          aria-hidden
          className={`h-px w-9 origin-left ${dark ? "bg-[#a5b4fc]/40" : "bg-[#B7ACF7]"}`}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: EASE }}
        />
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
          className={`font-mono text-[11px] font-medium uppercase tracking-[0.28em] ${
            dark ? "text-white/40" : "text-[#9a9da6]"
          }`}
        >
          {number} — {eyebrow}
        </motion.p>
      </div>

      {/* masked heading rise — the observer lives on the unclipped
          wrapper: a fully-clipped child never "intersects" */}
      <motion.div
        className="relative mt-5 overflow-hidden pb-[0.08em]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          variants={{
            hidden: { y: "108%" },
            visible: {
              y: "0%",
              transition: { duration: 1.15, ease: EASE, delay: 0.1 },
            },
          }}
          className={`max-w-[24ch] font-semibold leading-[1.02] tracking-[-0.035em] ${
            dark ? "text-white" : "text-ink"
          }`}
          style={{ fontSize: "clamp(2.1rem, 4.6vw, 3.6rem)" }}
        >
          {title}
        </motion.h2>
      </motion.div>

      {lede && (
        <Reveal delay={0.3}>
          <p
            className={`relative mt-6 max-w-[52ch] text-[16.5px] leading-relaxed ${
              dark ? "text-white/55" : "text-ink-soft"
            }`}
          >
            {lede}
          </p>
        </Reveal>
      )}
    </div>
  );
}
