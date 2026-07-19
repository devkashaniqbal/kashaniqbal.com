"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { CONTAINER } from "./shared";

const STATEMENT =
  "Most tutorials teach you to copy. I teach you to ship — one real product at a time.";

const WORDS = STATEMENT.split(" ");

/** "real product" lights up in the brand gradient. */
const HIGHLIGHT = new Set([13, 14]);

function Word({
  word,
  index,
  progress,
  reduce,
}: {
  word: string;
  index: number;
  progress: MotionValue<number>;
  reduce: boolean;
}) {
  const start = (index / WORDS.length) * 0.75;
  const opacity = useTransform(progress, [start, start + 0.14], [0.13, 1]);
  return (
    <motion.span
      className={HIGHLIGHT.has(index) ? "violet-text" : undefined}
      style={{ opacity: reduce ? 1 : opacity }}
    >
      {word}{" "}
    </motion.span>
  );
}

/**
 * A pinned interstitial: the page holds still while the manifesto
 * inks itself in, one word per beat of scroll. The single moment of
 * pure typography between the argument and the catalogue.
 */
export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={ref} className="relative h-[190vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className={CONTAINER}>
          <p className="mb-10 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-[#b3b6be]">
            The philosophy
          </p>
          <p
            className="max-w-[24ch] font-semibold leading-[1.18] tracking-[-0.035em] text-ink"
            style={{ fontSize: "clamp(1.9rem, 4.4vw, 3.9rem)" }}
          >
            {WORDS.map((word, i) => (
              <Word
                key={i}
                word={word}
                index={i}
                progress={scrollYProgress}
                reduce={reduce}
              />
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
