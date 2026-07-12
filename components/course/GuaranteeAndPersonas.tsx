"use client";

import { motion } from "framer-motion";
import { GUARANTEE_POINTS, PERSONAS } from "@/lib/course-content";
import { BadgePill, BLUE, BlueCTA, EASE, Icon, INK, Rise } from "./ui";

/** Gold money-back seal, drawn in code — scalloped star + rings. */
function GoldSeal() {
  const points = Array.from({ length: 56 }, (_, i) => {
    const r = i % 2 === 0 ? 78 : 71;
    const a = (i / 56) * Math.PI * 2;
    return `${(80 + r * Math.cos(a)).toFixed(1)},${(80 + r * Math.sin(a)).toFixed(1)}`;
  }).join(" ");

  return (
    <motion.svg
      width="176"
      height="176"
      viewBox="0 0 160 160"
      aria-hidden
      initial={{ scale: 0.6, opacity: 0, rotate: -12 }}
      whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", stiffness: 160, damping: 16 }}
      style={{ filter: "drop-shadow(0 14px 24px rgba(180,130,10,0.35))" }}
    >
      <defs>
        <radialGradient id="gold" cx="35%" cy="30%">
          <stop offset="0%" stopColor="#FFE38A" />
          <stop offset="55%" stopColor="#F5B301" />
          <stop offset="100%" stopColor="#C98A00" />
        </radialGradient>
      </defs>
      <polygon points={points} fill="url(#gold)" />
      <circle cx="80" cy="80" r="62" fill="none" stroke="#8a5d00" strokeWidth="1.5" opacity="0.6" />
      <circle cx="80" cy="80" r="44" fill="#241a05" opacity="0.92" />
      <text x="80" y="66" textAnchor="middle" fontSize="12" fontWeight="800" fill="#FFD966" letterSpacing="1.5">
        MONEY BACK
      </text>
      <text x="80" y="92" textAnchor="middle" fontSize="26" fontWeight="900" fill="#FFE38A">
        100%
      </text>
      <text x="80" y="110" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#FFD966" letterSpacing="2">
        GUARANTEE
      </text>
    </motion.svg>
  );
}

export function Guarantee() {
  return (
    <section id="enroll" className="scroll-mt-16 px-5 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: EASE }}
        className="mx-auto grid w-full max-w-[1080px] grid-cols-1 items-center gap-12 rounded-[30px] bg-gradient-to-b from-[#F5FBFE] to-white px-7 py-14 shadow-[0_30px_70px_-30px_rgba(12,18,25,0.28)] sm:px-14 lg:grid-cols-[auto_1fr]"
      >
        <div className="mx-auto">
          <GoldSeal />
        </div>
        <div>
          <BadgePill>Risk-free enrollment</BadgePill>
          <h2
            className="mt-5 text-[clamp(1.7rem,3.2vw,2.4rem)] font-extrabold"
            style={{ color: INK }}
          >
            Still Unsure? You&rsquo;re Fully Protected.
          </h2>
          <p className="mt-4 max-w-[58ch] text-[15.5px] leading-relaxed text-[#4b5563]">
            We stand behind this program 100%. That&rsquo;s why every
            enrollment comes with a <b>14-day money-back guarantee</b>. Try
            it, follow the lessons — and if it&rsquo;s not the right fit,
            we&rsquo;ll refund you. Simple as that.
          </p>
          <ul className="mt-6 flex flex-col gap-3.5">
            {GUARANTEE_POINTS.map((point, i) => (
              <motion.li
                key={point}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
                className="flex items-center gap-3 text-[15px] font-medium"
                style={{ color: INK }}
              >
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white"
                  style={{ background: BLUE }}
                >
                  <Icon name="check" size={13} />
                </span>
                {point}
              </motion.li>
            ))}
          </ul>
          <div className="mt-8">
            <BlueCTA large>Yes! I want to learn this</BlueCTA>
            <p className="mt-3 text-[13px] text-[#6b7280]">
              Please read our{" "}
              <a href="#" className="font-semibold underline" style={{ color: BLUE }}>
                Refund Policy
              </a>{" "}
              before enrolling.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export function Personas() {
  return (
    <section className="px-5 py-16">
      <div className="mx-auto w-full max-w-[1180px] text-center">
        <Rise>
          <BadgePill>Perfect for you if…</BadgePill>
        </Rise>
        <Rise delay={0.08}>
          <h2
            className="mt-6 text-[clamp(1.9rem,3.6vw,2.7rem)] font-extrabold"
            style={{ color: INK }}
          >
            Who Is This For?
          </h2>
        </Rise>
        <Rise delay={0.14}>
          <p className="mt-4 text-[15.5px] text-[#6b7280]">
            No matter where you&rsquo;re starting from, this program meets you
            there.
          </p>
        </Rise>

        <div className="mt-12 grid grid-cols-1 gap-6 text-left md:grid-cols-3">
          {PERSONAS.map((p, i) => (
            <motion.div
              key={p.highlight}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.75, ease: EASE, delay: i * 0.1 }}
              className="rounded-2xl border-t-[3px] bg-white p-8 shadow-[0_18px_44px_-22px_rgba(12,18,25,0.25)]"
              style={{ borderTopColor: BLUE }}
            >
              <span
                className="flex h-13 w-13 items-center justify-center rounded-xl"
                style={{ background: p.tint, color: INK, width: 52, height: 52 }}
              >
                <Icon name={p.icon} size={24} />
              </span>
              <h3 className="mt-6 text-[17.5px] font-bold" style={{ color: INK }}>
                {p.title} <span style={{ color: BLUE }}>{p.highlight}</span>
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-[#4b5563]">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
