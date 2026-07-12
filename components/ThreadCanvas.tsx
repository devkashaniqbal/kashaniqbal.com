"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { RAIL_LEFT } from "@/components/sections/shared";

/**
 * The Silver Thread: a hairline of light that draws itself down the
 * page as you scroll, with a glowing tip riding the line. It dives
 * under the dark plates and re-emerges in the whitespace between
 * chapters.
 */
export default function ThreadCanvas({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.82", "end 0.55"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 26,
    mass: 0.6,
  });

  const pct = useTransform(progress, (v) => v * 100);
  const tipTop = useMotionTemplate`${pct}%`;
  const tipOpacity = useTransform(progress, [0, 0.015, 0.985, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 z-[1] hidden w-px lg:block"
        style={{ left: RAIL_LEFT }}
      >
        {/* the path ahead — barely there */}
        <div className="absolute inset-y-0 w-px bg-[#E4E0FB]/80" />
        {/* the drawn thread — ice to violet to indigo */}
        <motion.div
          className="absolute inset-y-0 w-px origin-top"
          style={{
            scaleY: progress,
            background:
              "linear-gradient(to bottom, transparent, #8FD0F5 4%, #7C6AF0 45%, #4F46E5 96%, transparent)",
          }}
        />
        {/* the tip — a point of light leading the way */}
        <motion.span
          className="absolute left-1/2 h-[7px] w-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#BFAFFB]"
          style={{
            top: tipTop,
            opacity: tipOpacity,
            boxShadow:
              "0 0 10px rgba(124,106,240,0.95), 0 0 26px rgba(124,106,240,0.5)",
          }}
        />
      </div>
      {children}
    </div>
  );
}
