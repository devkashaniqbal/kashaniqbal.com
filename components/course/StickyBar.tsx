"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { OFFER, STICKY_CHECKS } from "@/lib/course-content";
import { BLUE, EASE, Icon, INK } from "./ui";

export function WhatsAppFloat() {
  return (
    <motion.a
      href={OFFER.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 right-5 z-[75] flex h-14 w-14 items-center justify-center rounded-full text-white sm:right-7"
      style={{
        background: "linear-gradient(160deg, #34D871, #1FAF54)",
        boxShadow: "0 12px 30px -8px rgba(31,175,84,0.6)",
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 18, delay: 1.2 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
    >
      <Icon name="whatsapp" size={28} />
    </motion.a>
  );
}

export default function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setVisible(window.scrollY > 500));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 90 }}
          animate={{ y: 0 }}
          exit={{ y: 90 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="fixed inset-x-0 bottom-0 z-[80] border-t border-[#E5EAEF] bg-white/95 backdrop-blur-md"
          style={{ boxShadow: "0 -12px 34px -18px rgba(12,18,25,0.3)" }}
        >
          <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-4 px-5 py-3.5">
            <p className="shrink-0 text-[17px] font-extrabold sm:text-[19px]" style={{ color: INK }}>
              <span className="mr-2 text-[14px] font-semibold text-[#9aa4af] line-through">
                {OFFER.priceWas}
              </span>
              {OFFER.priceNow}/- Only
            </p>

            <div className="hidden items-center gap-7 lg:flex">
              {STICKY_CHECKS.map((c) => (
                <span
                  key={c}
                  className="flex items-center gap-2 text-[13.5px] font-bold"
                  style={{ color: INK }}
                >
                  <span
                    className="flex h-5 w-5 items-center justify-center rounded-full text-white"
                    style={{ background: BLUE }}
                  >
                    <Icon name="check" size={11} />
                  </span>
                  {c}
                </span>
              ))}
            </div>

            <motion.a
              href="#enroll"
              className="inline-flex h-12 shrink-0 items-center rounded-lg px-6 text-[13.5px] font-extrabold uppercase tracking-[0.04em] text-white sm:px-8"
              style={{
                background: `linear-gradient(180deg, #2FB9F2, ${BLUE} 60%, #0E92CE)`,
                boxShadow: "0 10px 22px -8px rgba(27,169,232,0.6)",
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
            >
              Get Access Now
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
