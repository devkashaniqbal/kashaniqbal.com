"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * A halo that trails the native cursor (which stays visible — no
 * usability tax). It grows over interactive elements and becomes a
 * labeled disc over elements carrying `data-cursor="Label"`.
 * mix-blend-difference keeps it legible on white and ink alike.
 * Pointer-fine devices only; skipped for reduced motion.
 */
export default function CursorHalo() {
  const [enabled, setEnabled] = useState(false);
  const [grow, setGrow] = useState(false);
  const [label, setLabel] = useState<string | null>(null);

  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 420, damping: 38, mass: 0.55 });
  const sy = useSpring(y, { stiffness: 420, damping: 38, mass: 0.55 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!fine || reduced) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as Element | null;
      if (!t || !(t instanceof Element)) return;
      const labeled = t.closest("[data-cursor]");
      const interactive = t.closest(
        "a, button, [role='button'], input, textarea, select, label"
      );
      setLabel(labeled?.getAttribute("data-cursor") ?? null);
      setGrow(!!(labeled || interactive));
    };
    const onLeave = () => {
      x.set(-200);
      y.set(-200);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [x, y]);

  if (!enabled) return null;

  const size = label ? 58 : grow ? 40 : 12;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[110] mix-blend-difference"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white"
        animate={{ width: size, height: size, opacity: label ? 1 : grow ? 0.9 : 0.65 }}
        transition={{ type: "spring", stiffness: 380, damping: 28 }}
      >
        {label && (
          <span className="font-mono text-[8.5px] font-medium uppercase tracking-[0.18em] text-black">
            {label}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
