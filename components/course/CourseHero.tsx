"use client";

import { motion } from "framer-motion";
import { HERO_STATS, OFFER, TICKER_ITEMS } from "@/lib/course-content";
import { BLUE, BLUE_TINT, EASE, Icon, INK, BlueCTA } from "./ui";

export function Ticker() {
  const row = TICKER_ITEMS.map((t, i) => (
    <span
      key={i}
      className="mx-6 inline-flex items-center whitespace-nowrap text-[13px] font-bold text-white"
    >
      {t}
    </span>
  ));
  return (
    <div
      className="fixed inset-x-0 top-0 z-[70] overflow-hidden py-2.5"
      style={{ background: BLUE }}
    >
      <div className="marquee-track flex w-max">
        <div className="flex">{row}</div>
        <div className="flex" aria-hidden>
          {row}
        </div>
      </div>
    </div>
  );
}

const AVATARS = ["HK", "AR", "MS", "ZF", "TB"];

export default function CourseHero() {
  return (
    <section className="px-5 pt-24 sm:pt-28">
      {/* top badge */}
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
        className="flex justify-center"
      >
        <span className="inline-flex items-center gap-2.5 rounded-full border border-[#BFE7FA] bg-white px-5 py-2 text-[12px] font-bold uppercase tracking-[0.06em] shadow-[0_4px_14px_-6px_rgba(27,169,232,0.4)]">
          <span
            className="h-2 w-2 rounded-full"
            style={{ background: BLUE }}
          />
          <span style={{ color: BLUE }}>The #1 Training</span>
          <span style={{ color: INK }}>{OFFER.tagline.toUpperCase()}</span>
        </span>
      </motion.div>

      <div className="mx-auto mt-12 grid w-full max-w-[1280px] grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        {/* left — headline */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            className="font-black italic uppercase leading-[1.06] tracking-tight"
            style={{ fontSize: "clamp(2rem, 4.2vw, 3.5rem)", color: INK }}
          >
            Learn how to build Shopify stores, freelance &amp; sell digital
            products{" "}
            <span style={{ color: BLUE }}>step-by-step training</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
            className="mt-6 text-[18px] text-[#4b5563]"
          >
            Beginner friendly training from basics — three income streams,
            one program.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.55 }}
            className="mt-9 flex flex-wrap items-center gap-6"
          >
            <BlueCTA large>Yes! I want to learn this</BlueCTA>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5">
                {AVATARS.map((a, i) => (
                  <span
                    key={a}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-[10px] font-bold text-white"
                    style={{
                      background: `linear-gradient(135deg, hsl(${198 + i * 14} 75% 55%), hsl(${210 + i * 14} 70% 40%))`,
                    }}
                  >
                    {a}
                  </span>
                ))}
              </div>
              <p className="text-[13.5px] font-medium text-[#4b5563]">
                Trusted by {OFFER.students} students
              </p>
            </div>
          </motion.div>
        </div>

        {/* right — VSL */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.45 }}
          className="relative"
        >
          {/* annotation pill + hand arrow */}
          <div className="mb-3 flex items-center justify-end gap-3 pr-2">
            <svg
              width="52"
              height="40"
              viewBox="0 0 52 40"
              fill="none"
              aria-hidden
              className="mt-4"
            >
              <path
                d="M46 4C28 6 12 14 7 32"
                stroke={INK}
                strokeWidth="2.4"
                strokeLinecap="round"
              />
              <path
                d="M3.5 26.5 7 33.5l7-2.8"
                stroke={INK}
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="rounded-full border border-[#BFE7FA] bg-[#F2FAFE] px-5 py-2.5 text-[14.5px] font-semibold text-[#16202A] shadow-[0_4px_14px_-8px_rgba(27,169,232,0.5)]">
              Store Mastery Program
            </span>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-24px_rgba(12,18,25,0.45)]">
            <div
              className="px-4 py-3 text-center text-[11.5px] font-bold uppercase tracking-[0.08em]"
              style={{ background: BLUE_TINT, color: INK }}
            >
              {OFFER.videoHeadline}
            </div>
            {/* VSL placeholder — swap for the real embed */}
            <div
              className="relative flex aspect-video items-center justify-center"
              style={{
                background:
                  "radial-gradient(80% 100% at 50% 0%, #1d3a52 0%, #0d1b28 60%, #0a141e 100%)",
              }}
            >
              <div className="absolute inset-6 rounded-xl border border-white/25" />
              <div className="relative flex flex-col items-center gap-3 px-6 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                  <Icon name="play" size={26} color="#ffffff" />
                </span>
                <p className="text-[20px] font-bold text-white">
                  Your Video Is Playing
                  <br />
                  Click To Unmute
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* stat cards */}
      <div className="mx-auto mt-16 grid w-full max-w-[1080px] grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
        {HERO_STATS.map((s, i) => (
          <motion.div
            key={s.value}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
            className="flex flex-col items-center rounded-xl border-t-[3px] bg-white px-4 py-7 text-center shadow-[0_14px_34px_-18px_rgba(12,18,25,0.25)]"
            style={{ borderTopColor: BLUE }}
          >
            <span
              className="flex h-12 w-12 items-center justify-center rounded-full"
              style={{ background: BLUE_TINT, color: BLUE }}
            >
              <Icon name={s.icon} />
            </span>
            <p className="mt-4 text-[17px] font-extrabold" style={{ color: INK }}>
              {s.value}
            </p>
            <p className="mt-1 text-[12.5px] text-[#6b7280]">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
