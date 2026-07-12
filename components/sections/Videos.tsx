"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { VIDEOS } from "@/lib/content";
import { CONTAINER, EASE, SectionIntro } from "./shared";

/**
 * Cinema plates on a native scroll-snap rail — dark 16:9 slabs that
 * foreshadow the black act further down the page. No thumbnails, no
 * stock imagery: each plate is its own lit object.
 */
export default function Videos() {
  const railRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start end", "end start"],
  });
  // the rail glides sideways as the page moves past — a slow pan,
  // never a hijack; native swipe/scroll still owns the rail itself
  const drift = useTransform(scrollYProgress, [0, 1], [110, -110]);

  return (
    <section id="videos" className="scroll-mt-28 overflow-hidden py-28 lg:py-40">
      <div className={CONTAINER}>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionIntro
            number="05"
            eyebrow="Video library"
            title={
              <>
                Free, in public,
                <br />
                <span className="text-[#9a9da6]">every week.</span>
              </>
            }
          />
          <motion.a
            href="https://youtube.com/@kashaniqbal"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
            className="group mb-2 inline-flex items-center gap-2 text-[14px] font-medium text-ink-soft transition-colors hover:text-ink"
          >
            Entire library on YouTube
            <span className="transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-0.5">
              ↗
            </span>
          </motion.a>
        </div>
      </div>

      {/* the rail bleeds off the right edge — native snap, no hijacking */}
      <div ref={railRef} className="mt-14 lg:mt-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.1, ease: EASE }}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{
            paddingLeft: "max(1.5rem, calc(50% - 620px + 5rem))",
            paddingRight: "1.5rem",
            x: reduce ? 0 : drift,
          }}
        >
          {VIDEOS.map((v, i) => (
            <a
              key={v.title}
              href="https://youtube.com/@kashaniqbal"
              target="_blank"
              rel="noreferrer"
              data-cursor="Play"
              className="group relative aspect-video w-[78vw] max-w-[460px] shrink-0 snap-start overflow-hidden rounded-[20px] sm:w-[420px]"
              style={{
                background:
                  "linear-gradient(155deg, #1d1e22 0%, #101013 55%, #0a0a0c 100%)",
              }}
            >
              {/* plate lighting — each one lit slightly differently */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-80 transition-opacity duration-700 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(70% 90% at ${
                    18 + i * 16
                  }% -10%, ${
                    i % 2 === 0
                      ? "rgba(148,132,240,0.38)"
                      : "rgba(96,165,250,0.32)"
                  }, transparent 60%)`,
                }}
              />
              <span
                aria-hidden
                className="grain pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[20px]"
                style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.09)" }}
              />

              {/* play glyph */}
              <span className="absolute left-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 backdrop-blur-sm transition-all duration-500 group-hover:border-white/35 group-hover:bg-white/5">
                <span
                  aria-hidden
                  className="ml-[2px] block h-0 w-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-white/85"
                />
              </span>

              <span className="absolute right-6 top-7 font-mono text-[10.5px] tracking-[0.12em] text-white/45">
                {v.duration}
              </span>

              <span className="absolute inset-x-6 bottom-6">
                <span className="block text-[17px] font-medium leading-snug tracking-tight text-white/90 transition-transform duration-500 ease-out group-hover:-translate-y-1">
                  {v.title}
                </span>
                <span className="mt-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
                  {v.views} views
                </span>
              </span>
            </a>
          ))}

          {/* terminal plate — quiet invitation */}
          <a
            href="https://youtube.com/@kashaniqbal"
            target="_blank"
            rel="noreferrer"
            className="group relative flex aspect-video w-[60vw] max-w-[320px] shrink-0 snap-start items-center justify-center rounded-[20px] border border-hairline transition-colors duration-500 hover:border-[#d5d7dc]"
          >
            <span className="flex items-center gap-2 text-[14.5px] font-medium text-ink-soft transition-colors group-hover:text-ink">
              View all videos
              <span className="transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-0.5">
                ↗
              </span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
