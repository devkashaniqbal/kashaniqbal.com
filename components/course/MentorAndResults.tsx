"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MENTOR } from "@/lib/content";
import { MENTOR_PILLS, MENTOR_STATS, REVIEWS } from "@/lib/course-content";
import { BadgePill, BLUE, BLUE_TINT, EASE, Icon, INK, NAVY } from "./ui";

export function MentorSection() {
  return (
    <section className="px-5 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: EASE }}
        className="relative mx-auto grid w-full max-w-[1180px] grid-cols-1 items-center gap-12 overflow-hidden rounded-[30px] bg-white px-7 py-14 shadow-[0_30px_70px_-30px_rgba(12,18,25,0.3)] sm:px-12 lg:grid-cols-[0.8fr_1.2fr]"
      >
        {/* corner deco circles */}
        <span
          aria-hidden
          className="absolute -right-16 -top-20 h-56 w-56 rounded-full"
          style={{ background: BLUE_TINT }}
        />
        <span
          aria-hidden
          className="absolute -bottom-16 left-[30%] h-40 w-40 rounded-full"
          style={{ background: "#F2FAFE" }}
        />

        {/* portrait */}
        <div className="relative mx-auto w-full max-w-[330px]">
          <div
            className="relative aspect-square overflow-hidden rounded-2xl border-2"
            style={{ borderColor: BLUE }}
          >
            {MENTOR.portrait ? (
              <Image
                src={MENTOR.portrait}
                alt={`Portrait of ${MENTOR.name}`}
                fill
                sizes="330px"
                className="object-cover"
              />
            ) : (
              <div
                className="flex h-full w-full flex-col items-center justify-center gap-4"
                style={{
                  background:
                    "radial-gradient(90% 90% at 50% 20%, #12467a 0%, #0a2342 60%, #071830 100%)",
                }}
              >
                <span
                  className="flex h-20 w-20 items-center justify-center rounded-2xl text-[34px] font-black text-white"
                  style={{ background: BLUE }}
                >
                  K
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/60">
                  Portrait coming soon
                </span>
              </div>
            )}
          </div>
          <div className="mt-5 flex justify-center">
            <span
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-bold text-white shadow-[0_10px_24px_-10px_rgba(27,169,232,0.7)]"
              style={{ background: BLUE }}
            >
              <Icon name="star" size={15} />
              Shopify &amp; Digital Income Expert
            </span>
          </div>
        </div>

        {/* copy */}
        <div className="relative">
          <BadgePill>Your mentor</BadgePill>
          <h2
            className="mt-4 text-[clamp(1.9rem,3.4vw,2.6rem)] font-extrabold"
            style={{ color: INK }}
          >
            Kashan Iqbal
          </h2>
          <p className="mt-3 max-w-[52ch] text-[16px] leading-relaxed text-[#4b5563]">
            You don&rsquo;t just need the right mentor — you need the right
            community too.{" "}
            <b style={{ color: BLUE }}>Both are included in your purchase today.</b>
          </p>

          <div className="mt-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            {MENTOR_PILLS.map((pill, i) => (
              <motion.span
                key={pill}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.07 }}
                className="flex items-center gap-3 rounded-xl border border-[#E3EEF5] bg-white px-4 py-3.5 text-[14px] font-medium shadow-[0_8px_20px_-14px_rgba(12,18,25,0.3)]"
                style={{ color: INK }}
              >
                <span style={{ color: BLUE }}>
                  <Icon name="check" size={17} />
                </span>
                {pill}
              </motion.span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-x-12 gap-y-5 border-t border-[#E9EEF3] pt-7">
            {MENTOR_STATS.map((s) => (
              <div key={s.label}>
                <p className="text-[24px] font-extrabold" style={{ color: BLUE }}>
                  {s.value}
                </p>
                <p className="mt-0.5 text-[12.5px] text-[#6b7280]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Stars() {
  return (
    <div className="flex gap-1" style={{ color: "#F5B301" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.7l5.9-.8z" />
        </svg>
      ))}
    </div>
  );
}

export function StudentResults() {
  return (
    <section className="px-5 py-10">
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-90px" }}
        transition={{ duration: 0.9, ease: EASE }}
        className="mx-auto w-full max-w-[1320px] rounded-[34px] px-6 py-20 text-center sm:px-12"
        style={{
          background: `linear-gradient(180deg, #0e1c2b 0%, ${NAVY} 100%)`,
        }}
      >
        <BadgePill dark>Real student results</BadgePill>
        <h2 className="mx-auto mt-6 max-w-[20ch] text-[clamp(1.9rem,3.8vw,2.8rem)] font-extrabold leading-tight text-white">
          Hear What Our Students Are Saying
        </h2>
        <p className="mx-auto mt-5 max-w-[52ch] text-[15.5px] leading-relaxed text-[#9db0c0]">
          Real student reviews sharing their experience, support, and results
          after joining the program.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 text-left md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.75, ease: EASE, delay: i * 0.1 }}
              className="flex flex-col rounded-2xl border-t-2 p-7"
              style={{
                background: "#13202e",
                borderTopColor: BLUE,
                boxShadow: "0 20px 44px -26px rgba(0,0,0,0.6)",
              }}
            >
              <Stars />
              {/* video review placeholder — swap for real embeds */}
              <div
                className="mt-5 flex aspect-video items-center justify-center rounded-xl"
                style={{
                  background:
                    "radial-gradient(80% 100% at 50% 0%, #1d3a52 0%, #0c1723 70%)",
                }}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                  <Icon name="play" size={24} color="#ffffff" />
                </span>
              </div>
              <blockquote className="mt-5 text-[14px] leading-relaxed text-[#c3d2df]">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 border-t border-white/10 pt-4">
                <p className="text-[14.5px] font-bold text-white">{r.name}</p>
                <p className="mt-0.5 text-[12.5px] font-semibold" style={{ color: "#5FC8F5" }}>
                  {r.result}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
