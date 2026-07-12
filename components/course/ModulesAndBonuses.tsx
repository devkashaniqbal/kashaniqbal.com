"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BONUSES_LIST,
  BONUS_TOTAL_VALUE,
  MODULES,
} from "@/lib/course-content";
import { BadgePill, BLUE, BLUE_TINT, EASE, Icon, INK, NAVY, Rise } from "./ui";

export function Modules() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="px-5 py-20">
      <div className="mx-auto w-full max-w-[920px]">
        <div className="text-center">
          <Rise>
            <BadgePill>{MODULES.length} complete modules</BadgePill>
          </Rise>
          <Rise delay={0.08}>
            <h2
              className="mt-6 text-[clamp(1.9rem,3.6vw,2.7rem)] font-extrabold"
              style={{ color: INK }}
            >
              Everything You Get Inside the Course
            </h2>
          </Rise>
          <Rise delay={0.14}>
            <p className="mt-4 text-[15.5px] text-[#6b7280]">
              Start from zero and build your store, freelance income, and
              digital products — step by step.
            </p>
          </Rise>
        </div>

        <div className="mt-12 flex flex-col gap-4">
          {MODULES.map((mod, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={mod.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.65, ease: EASE, delay: (i % 4) * 0.05 }}
                className="overflow-hidden rounded-xl bg-white shadow-[0_12px_30px_-18px_rgba(12,18,25,0.3)]"
                style={{
                  borderLeft: isOpen ? `4px solid ${BLUE}` : "4px solid transparent",
                }}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-7"
                  style={{ background: isOpen ? "#F2FAFE" : "#ffffff" }}
                >
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[13px] font-extrabold"
                    style={
                      isOpen
                        ? { background: BLUE, color: "#fff" }
                        : { background: BLUE_TINT, color: BLUE }
                    }
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="flex-1 text-[16px] font-bold"
                    style={{ color: INK }}
                  >
                    {mod.title}
                  </span>
                  <motion.span
                    aria-hidden
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.35, ease: EASE }}
                    style={{ color: BLUE }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 16 4 8h16z" />
                    </svg>
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <ul className="flex flex-col gap-3 px-6 pb-6 pt-4 sm:px-8">
                        {mod.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-baseline gap-3 text-[14.5px] text-[#4b5563]"
                          >
                            <span
                              aria-hidden
                              className="h-1.5 w-1.5 shrink-0 translate-y-[-2px] rounded-full"
                              style={{ background: BLUE }}
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function BonusVault() {
  return (
    <section className="px-5 py-10 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-90px" }}
        transition={{ duration: 0.9, ease: EASE }}
        className="mx-auto w-full max-w-[1180px] rounded-[34px] px-6 py-18 text-center sm:px-12"
        style={{
          background: `linear-gradient(180deg, #101923 0%, ${NAVY} 100%)`,
          paddingTop: 72,
          paddingBottom: 72,
        }}
      >
        <BadgePill dark>🎁 Free bonuses</BadgePill>
        <h2 className="mx-auto mt-6 text-[clamp(1.9rem,3.8vw,2.8rem)] font-extrabold text-white">
          Free Bonuses Worth{" "}
          <span
            style={{
              background: "linear-gradient(100deg, #FF9AC4, #C084FC)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {BONUS_TOTAL_VALUE}+
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-[52ch] text-[15.5px] text-[#9db0c0]">
          Get these exclusive tools and resources absolutely FREE with your
          enrollment.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
          {BONUSES_LIST.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: EASE, delay: (i % 3) * 0.08 }}
              className="flex flex-col rounded-2xl p-7"
              style={{
                background: "#131e2a",
                boxShadow: "0 20px 44px -26px rgba(0,0,0,0.6)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <span
                className="flex items-center justify-center rounded-xl"
                style={{
                  background: "rgba(27,169,232,0.1)",
                  color: "#5FC8F5",
                  width: 48,
                  height: 48,
                }}
              >
                <Icon name={b.icon} size={22} />
              </span>
              <h3 className="mt-5 text-[16.5px] font-bold text-white">
                {b.title}
              </h3>
              <p className="mt-2.5 flex-1 text-[13.5px] leading-relaxed text-[#9db0c0]">
                {b.body}
              </p>
              <span
                className="mt-5 w-fit rounded-md px-3 py-1 text-[11px] font-extrabold tracking-wide"
                style={{ background: "#173d2c", color: "#4ADE80" }}
              >
                FREE
              </span>
            </motion.div>
          ))}
        </div>

        {/* total value receipt */}
        <div
          className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-dashed px-7 py-5"
          style={{ borderColor: "rgba(74,222,128,0.45)" }}
        >
          <p className="text-[15.5px] font-bold text-white">
            🎁 Total Bonus Value:
          </p>
          <p className="text-[16px]">
            <span className="mr-3 text-[#7d8b99] line-through">
              {BONUS_TOTAL_VALUE}
            </span>
            <span className="font-extrabold" style={{ color: "#4ADE80" }}>
              Yours FREE Today
            </span>
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <motion.a
            href="#enroll"
            className="inline-flex h-[58px] items-center gap-2 rounded-xl px-10 text-[15px] font-bold text-white"
            style={{
              background: "linear-gradient(100deg, #7C3AED 0%, #4F46E5 100%)",
              boxShadow: "0 14px 34px -10px rgba(124,58,237,0.65)",
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
          >
            🎁 Claim My Free Bonuses
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
