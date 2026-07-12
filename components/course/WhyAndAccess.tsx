"use client";

import { motion } from "framer-motion";
import { ACCESS_CARDS, OFFER, WHY_CARDS } from "@/lib/course-content";
import {
  BadgePill,
  BLUE,
  BLUE_TINT,
  BlueCTA,
  EASE,
  Icon,
  INK,
  NAVY,
  NAVY_CARD,
  Rise,
} from "./ui";

export function WhyNow() {
  return (
    <section className="px-5 py-24">
      <div className="mx-auto w-full max-w-[1180px] text-center">
        <Rise>
          <BadgePill>The best opportunity in 2026</BadgePill>
        </Rise>
        <Rise delay={0.08}>
          <h2
            className="mx-auto mt-6 max-w-[24ch] text-[clamp(1.8rem,3.6vw,2.6rem)] font-extrabold leading-tight"
            style={{ color: INK }}
          >
            Why This Is the <span style={{ color: BLUE }}>Smartest</span> Skill
            Stack Right Now
          </h2>
        </Rise>
        <Rise delay={0.16}>
          <p className="mx-auto mt-5 max-w-[58ch] text-[16.5px] leading-relaxed text-[#4b5563]">
            No big investment, no office, no risk. Start from home, right on
            your phone — and stack <b>three income streams</b> on one skill
            set.
          </p>
        </Rise>

        <div className="mt-14 grid grid-cols-1 gap-6 text-left md:grid-cols-2">
          {WHY_CARDS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.75, ease: EASE, delay: (i % 2) * 0.1 }}
              className="relative flex gap-5 overflow-hidden rounded-2xl bg-white p-7 shadow-[0_18px_44px_-22px_rgba(12,18,25,0.28)]"
            >
              {/* corner deco */}
              <span
                aria-hidden
                className="absolute -right-6 -top-8 h-24 w-24 rounded-full"
                style={{ background: BLUE_TINT }}
              />
              <span
                className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-white shadow-[0_10px_22px_-8px_rgba(27,169,232,0.6)]"
                style={{
                  background: `linear-gradient(160deg, #35BDF4, ${BLUE})`,
                }}
              >
                <Icon name={c.icon} size={24} />
              </span>
              <div className="relative">
                <h3 className="text-[18px] font-bold" style={{ color: INK }}>
                  {c.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-[#4b5563]">
                  {c.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <Rise delay={0.1} className="mt-12 flex flex-col items-center gap-3">
          <BlueCTA large>Yes! I want to learn this</BlueCTA>
          <p className="text-[13.5px] text-[#6b7280]">
            Join {OFFER.students} students already building their income
          </p>
        </Rise>
      </div>
    </section>
  );
}

export function AccessDark() {
  return (
    <section className="px-5 py-10">
      <motion.div
        initial={{ opacity: 0, y: 36, scale: 0.99 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-90px" }}
        transition={{ duration: 0.9, ease: EASE }}
        className="mx-auto w-full max-w-[1320px] rounded-[34px] px-6 py-20 text-center sm:px-12"
        style={{
          background: `linear-gradient(180deg, #101923 0%, ${NAVY} 100%)`,
        }}
      >
        <BadgePill dark>What you get</BadgePill>
        <h2 className="mx-auto mt-6 max-w-[22ch] text-[clamp(1.8rem,3.6vw,2.6rem)] font-extrabold leading-tight text-white">
          Here&rsquo;s What You&rsquo;ll Get Access To
        </h2>
        <p className="mx-auto mt-5 max-w-[52ch] text-[15.5px] leading-relaxed text-[#9db0c0]">
          No prior experience required — learn step by step how to build and
          manage your own store, land clients, and launch products.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 text-left md:grid-cols-2">
          {ACCESS_CARDS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.75, ease: EASE, delay: (i % 2) * 0.1 }}
              className="rounded-2xl border-t-2 p-8"
              style={{
                background: NAVY_CARD,
                borderTopColor: BLUE,
                boxShadow:
                  "0 -14px 34px -26px rgba(27,169,232,0.65), 0 20px 44px -26px rgba(0,0,0,0.6)",
              }}
            >
              <span
                className="flex h-13 w-13 items-center justify-center rounded-xl p-3"
                style={{
                  background: "rgba(27,169,232,0.12)",
                  color: "#5FC8F5",
                  width: 52,
                  height: 52,
                }}
              >
                <Icon name={c.icon} size={24} />
              </span>
              <h3 className="mt-6 text-[18px] font-bold text-white">
                {c.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-[#9db0c0]">
                {c.body}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <BlueCTA large>Yes! I want to learn this</BlueCTA>
        </div>
      </motion.div>
    </section>
  );
}
