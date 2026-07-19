"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { RESULTS, TESTIMONIALS, type Stat, type Testimonial } from "@/lib/content";
import Icon from "@/components/Icon";
import { EASE, SectionIntro } from "./shared";

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function Attribution({ t, size = 40 }: { t: Testimonial; size?: number }) {
  return (
    <div className="flex items-center gap-3.5">
      <span
        className="flex items-center justify-center rounded-full font-mono font-medium text-white/85"
        style={{
          width: size,
          height: size,
          fontSize: size * 0.27,
          background:
            "linear-gradient(150deg, rgba(154,157,166,0.45), rgba(90,94,105,0.35))",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18)",
        }}
      >
        {initials(t.name)}
      </span>
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/70">
          {t.name}
        </p>
        <p className="mt-0.5 font-mono text-[9.5px] uppercase tracking-[0.18em] text-white/35">
          {t.role}
        </p>
      </div>
    </div>
  );
}

function Stars({ size = 13 }: { size?: number }) {
  return (
    <div className="flex gap-1" style={{ color: "#C9A961" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} name="star" size={size} />
      ))}
    </div>
  );
}

function CountUp({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, stat.value, {
      duration: 2,
      ease: EASE,
      onUpdate: (v) =>
        setDisplay(
          stat.decimals
            ? v.toFixed(stat.decimals)
            : Math.round(v).toLocaleString("en-US")
        ),
    });
    return () => controls.stop();
  }, [inView, stat.value, stat.decimals]);

  return (
    <span ref={ref}>
      {stat.prefix}
      {display}
      {stat.suffix}
    </span>
  );
}

/**
 * The black act: student results and testimonials staged inside a
 * single ink vitrine — the page's cinematic third act. The silver
 * thread dives beneath this plate and re-emerges below it.
 */
export default function DarkAct() {
  const featured = TESTIMONIALS.filter((t) => t.featured);
  const rest = TESTIMONIALS.filter((t) => !t.featured);

  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 0.25"],
  });
  // scrubbed arrival: the plate rises and swells to full size as it
  // enters — weight, not a fade
  const plateScale = useTransform(scrollYProgress, [0, 1], [0.93, 1]);
  const plateY = useTransform(scrollYProgress, [0, 1], [110, 0]);
  const plateOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative z-[2] flex justify-center px-[3%] py-14 lg:py-20"
    >
      <motion.div
        className="relative w-full max-w-[1640px] overflow-hidden rounded-card"
        style={{
          background:
            "linear-gradient(170deg, #17181c 0%, #0d0d10 45%, #0a0a0c 100%)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.07), 0 40px 100px -40px rgba(10,10,14,0.5)",
          ...(reduce
            ? {}
            : { scale: plateScale, y: plateY, opacity: plateOpacity }),
        }}
      >
        {/* dark-side lighting */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className="aurora-a absolute -top-[25%] left-[10%] h-[70%] w-[60%] rounded-full"
            style={{
              background:
                "radial-gradient(closest-side, rgba(139,124,242,0.24), transparent 70%)",
              filter: "blur(70px)",
            }}
          />
          <div
            className="aurora-b absolute -bottom-[30%] right-[5%] h-[75%] w-[55%] rounded-full"
            style={{
              background:
                "radial-gradient(closest-side, rgba(56,189,248,0.16), transparent 70%)",
              filter: "blur(80px)",
            }}
          />
          <div className="grain absolute inset-0 opacity-[0.04] mix-blend-overlay" />
        </div>

        <div className="relative px-7 py-20 sm:px-14 sm:py-24 lg:px-24 lg:py-32">
          {/* ——— 06 · results ——— */}
          <SectionIntro
            number="08"
            eyebrow="Track record"
            title={
              <>
                Results
                <br />
                <span className="text-white/40">so far.</span>
              </>
            }
            dark
          />

          <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-14 lg:mt-20 lg:grid-cols-4">
            {RESULTS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, ease: EASE, delay: i * 0.1 }}
              >
                <p
                  className="metal-text-dark font-semibold tracking-[-0.04em]"
                  style={{ fontSize: "clamp(2.4rem, 4.8vw, 4.2rem)" }}
                >
                  <CountUp stat={stat} />
                </p>
                <p className="mt-3 border-t border-white/10 pt-3 font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/40">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* ——— 07 · testimonials ——— */}
          <div className="mt-28 lg:mt-40">
            <SectionIntro
              number="09"
              eyebrow="Testimonials"
              title={
                <>
                  In their
                  <br />
                  <span className="text-white/40">own words.</span>
                </>
              }
              dark
            />

            <div className="mt-16 lg:mt-24">
              {/* first featured — a full editorial pull-quote */}
              <motion.blockquote
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1, ease: EASE }}
                className="max-w-[30ch]"
              >
                <Stars size={15} />
                <p
                  className="mt-6 font-light italic leading-[1.35] tracking-[-0.015em] text-white/90"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.3rem)" }}
                >
                  &ldquo;{featured[0].quote}&rdquo;
                </p>
                <footer className="mt-7">
                  <Attribution t={featured[0]} size={46} />
                </footer>
              </motion.blockquote>

              {/* the quiet chorus */}
              <div className="mt-20 grid grid-cols-1 gap-x-12 gap-y-12 border-t border-white/10 pt-14 md:grid-cols-3">
                {rest.map((t, i) => (
                  <motion.blockquote
                    key={t.name}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.85, ease: EASE, delay: i * 0.1 }}
                  >
                    <Stars size={11} />
                    <p className="mt-4 text-[15px] font-light italic leading-[1.7] text-white/70">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <footer className="mt-5">
                      <Attribution t={t} size={34} />
                    </footer>
                  </motion.blockquote>
                ))}
              </div>

              {/* second featured — offset right, closing the act */}
              <motion.blockquote
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1, ease: EASE }}
                className="ml-auto mt-20 max-w-[32ch] border-t border-white/10 pt-14 lg:mt-24"
              >
                <Stars size={13} />
                <p
                  className="mt-5 font-light italic leading-[1.4] tracking-[-0.015em] text-white/85"
                  style={{ fontSize: "clamp(1.25rem, 2.2vw, 1.7rem)" }}
                >
                  &ldquo;{featured[1].quote}&rdquo;
                </p>
                <footer className="mt-6">
                  <Attribution t={featured[1]} size={40} />
                </footer>
              </motion.blockquote>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
