"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { COURSES } from "@/lib/content";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * A quiet companion: once the reader has passed the course index it
 * follows along, holding the flagship offer one click away. It bows
 * out before the finale — the ending belongs to the page.
 */
export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const flagship = COURSES[0];

  useEffect(() => {
    let start = Infinity;
    let end = Infinity;

    const measure = () => {
      const from = document.getElementById("bonuses");
      const until = document.getElementById("contact");
      if (from) start = from.getBoundingClientRect().top + window.scrollY - 200;
      if (until)
        end =
          until.getBoundingClientRect().top +
          window.scrollY -
          window.innerHeight;
    };

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const yPos = window.scrollY;
        setVisible(yPos > start && yPos < end);
      });
    };

    measure();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.96 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="fixed bottom-5 right-5 z-[80] sm:bottom-7 sm:right-7"
        >
          <div className="flex items-center gap-1 rounded-full border border-hairline bg-white/85 p-1.5 pl-5 shadow-[0_18px_50px_-18px_rgba(15,15,22,0.28)] backdrop-blur-xl">
            <div className="mr-3 hidden sm:block">
              <p className="text-[13px] font-semibold leading-tight tracking-tight text-ink">
                {flagship.title}
              </p>
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#9a9da6]">
                {flagship.status} · {flagship.price}
              </p>
            </div>
            <a
              href="#courses"
              className="group relative inline-flex h-10 items-center gap-2 overflow-hidden rounded-full px-5 text-[13px] font-medium text-white"
              style={{
                background:
                  "linear-gradient(135deg, #7C6AF0 0%, #4F46E5 100%)",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.25), 0 8px 22px -8px rgba(93,78,232,0.55)",
              }}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -translate-x-[130%] bg-[linear-gradient(105deg,transparent_35%,rgba(255,255,255,0.2)_50%,transparent_65%)] transition-transform duration-700 ease-out group-hover:translate-x-[130%]"
              />
              Enroll
              <span
                aria-hidden
                className="transition-transform duration-300 ease-out group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>
            <button
              type="button"
              aria-label="Dismiss"
              onClick={() => setDismissed(true)}
              className="flex h-10 w-8 items-center justify-center rounded-full text-[#b3b6be] transition-colors hover:text-ink"
            >
              <span className="relative block h-3 w-3">
                <span className="absolute left-0 top-1/2 h-px w-full rotate-45 bg-current" />
                <span className="absolute left-0 top-1/2 h-px w-full -rotate-45 bg-current" />
              </span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
