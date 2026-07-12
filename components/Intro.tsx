"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];
const KEY = "ki-intro-played";

/**
 * The opening curtain: monogram and thread on white, then the whole
 * sheet lifts to reveal the hero mid-entrance. Plays once per
 * session; skipped entirely for reduced-motion users.
 */
export default function Intro() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced || window.sessionStorage.getItem(KEY)) return;
    window.sessionStorage.setItem(KEY, "1");
    setShow(true);
  }, []);

  if (!show) return null;

  return (
    <motion.div
      aria-hidden
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
      initial={{ y: "0%" }}
      animate={{ y: "-100%" }}
      transition={{ duration: 0.9, ease: EASE, delay: 1.05 }}
      onAnimationComplete={() => setShow(false)}
      style={{ boxShadow: "0 40px 80px -20px rgba(15,15,22,0.15)" }}
    >
      {/* the thread finds the monogram */}
      <motion.span
        className="w-px origin-top bg-gradient-to-b from-transparent via-[#8FD0F5] to-[#7C6AF0]"
        initial={{ height: 0 }}
        animate={{ height: 64 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.span
        className="mt-5 flex h-14 w-14 items-center justify-center rounded-[16px] text-[24px] font-semibold text-white"
        style={{
          background:
            "linear-gradient(150deg, #8FD0F5 -30%, #7C6AF0 35%, #4F46E5 100%)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.3), 0 16px 40px -16px rgba(93,78,232,0.5)",
        }}
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.35,
        }}
      >
        K
      </motion.span>
      <motion.p
        className="mt-5 font-mono text-[10px] uppercase tracking-[0.34em] text-[#9a9da6]"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.5,
        }}
      >
        Kashan Iqbal
      </motion.p>
    </motion.div>
  );
}
