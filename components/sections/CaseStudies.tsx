"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { CASE_STUDIES, type CaseStudy } from "@/lib/content";
import { CONTAINER, EASE, SectionIntro } from "./shared";

function CaseRow({ cs }: { cs: CaseStudy }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // the metric column drifts slower than the row — quiet depth
  const metricY = useTransform(scrollYProgress, [0, 1], [44, -44]);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.95, ease: EASE, delay: 0.05 }}
      className="group grid grid-cols-1 gap-8 border-t border-hairline py-12 transition-colors duration-500 last:border-b hover:border-[#d5d7dc] lg:grid-cols-[64px_1fr_minmax(240px,0.6fr)] lg:gap-12 lg:py-16"
    >
      <span className="font-mono text-[12px] text-[#b3b6be] lg:pt-2">
        {cs.index}
      </span>

      <div>
        <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
          <h3
            className="font-semibold tracking-[-0.03em] text-ink transition-transform duration-500 ease-out group-hover:translate-x-2"
            style={{ fontSize: "clamp(1.7rem, 3.2vw, 2.5rem)" }}
          >
            {cs.name}
          </h3>
          <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#9a9da6]">
            {cs.category}
          </span>
        </div>
        <p className="mt-4 max-w-[52ch] text-[15.5px] leading-[1.7] text-ink-soft">
          {cs.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {cs.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-hairline px-3 py-1 font-mono text-[10px] tracking-[0.08em] text-[#9a9da6] transition-colors duration-400 group-hover:border-[#dcdee2] group-hover:text-ink-soft"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* the number that matters */}
      <motion.div
        className="lg:border-l lg:border-hairline lg:pl-12"
        style={{ y: reduce ? 0 : metricY }}
      >
        <p
          className="metal-text font-semibold tracking-[-0.04em]"
          style={{ fontSize: "clamp(2.6rem, 4.5vw, 3.8rem)" }}
        >
          {cs.metric}
        </p>
        <p className="mt-2 max-w-[22ch] text-[13.5px] leading-relaxed text-ink-soft">
          {cs.metricLabel}
        </p>
      </motion.div>
    </motion.article>
  );
}

export default function CaseStudies() {
  return (
    <section id="projects" className="scroll-mt-28 bg-[#F1F2FE] py-28 lg:py-40">
      <div className={CONTAINER}>
        <SectionIntro
          number="02"
          eyebrow="Projects & case studies"
          title={
            <>
              Projects
              <br />
              <span className="text-[#9a9da6]">I&rsquo;ve shipped.</span>
            </>
          }
        />

        <div className="mt-16 lg:mt-24">
          {CASE_STUDIES.map((cs) => (
            <CaseRow key={cs.name} cs={cs} />
          ))}
        </div>
      </div>
    </section>
  );
}
