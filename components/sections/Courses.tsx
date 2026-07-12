"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { COURSES } from "@/lib/content";
import Icon from "@/components/Icon";
import { CONTAINER, EASE, SectionIntro } from "./shared";

/** Cover artifacts — one lit plate per course. */
const COVERS = [
  { icon: "spark", glow: "75% 15%", hue: "252deg 32%" },
  { icon: "code", glow: "20% 80%", hue: "228deg 30%" },
  { icon: "bolt", glow: "80% 75%", hue: "258deg 28%" },
  { icon: "home", glow: "25% 20%", hue: "214deg 32%" },
] as const;

function Cover({ index }: { index: number }) {
  const c = COVERS[index % COVERS.length];
  return (
    <span
      aria-hidden
      className="relative hidden h-16 w-24 shrink-0 self-center overflow-hidden rounded-[14px] sm:block lg:h-[72px] lg:w-[110px]"
      style={{
        background: `linear-gradient(155deg, hsl(${c.hue} 16%) 0%, hsl(${c.hue} 9%) 60%, hsl(${c.hue} 6%) 100%)`,
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)",
      }}
    >
      <span
        className="absolute inset-0"
        style={{
          background: `radial-gradient(70% 80% at ${c.glow}, rgba(165,148,250,0.42), transparent 70%)`,
        }}
      />
      <span className="grain absolute inset-0 opacity-[0.06] mix-blend-overlay" />
      <span className="absolute inset-0 flex items-center justify-center text-[#CFC8F5] transition-transform duration-500 ease-out group-hover:scale-110">
        <Icon name={c.icon} size={26} />
      </span>
      {/* hover sheen */}
      <span className="absolute inset-0 -translate-x-[130%] bg-[linear-gradient(105deg,transparent_35%,rgba(255,255,255,0.14)_50%,transparent_65%)] transition-transform duration-700 ease-out group-hover:translate-x-[130%]" />
    </span>
  );
}

export default function Courses() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="courses" className="scroll-mt-28 bg-[#F5F3FE] py-28 lg:py-40">
      <div className={CONTAINER}>
        <SectionIntro
          number="02"
          eyebrow="Featured courses"
          title={
            <>
              A curriculum built from
              <br />
              <span className="text-[#9a9da6]">real invoices.</span>
            </>
          }
          lede="Four tracks, one philosophy: every course ends with something real — a product in production, a system earning, a store selling."
        />

        <div className="mt-16 lg:mt-20">
          {COURSES.map((course, i) => {
            const open = active === i;
            return (
              <motion.article
                key={course.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.85, ease: EASE, delay: i * 0.08 }}
                className="border-t border-hairline last:border-b"
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
              >
                <button
                  type="button"
                  aria-expanded={open}
                  data-cursor="View"
                  onClick={() => setActive(open ? null : i)}
                  onFocus={() => setActive(i)}
                  className="group flex w-full items-baseline gap-5 py-8 text-left sm:gap-7 lg:py-9"
                >
                  <span className="font-mono text-[12px] text-[#b3b6be] transition-colors duration-400 group-hover:text-ink">
                    {course.index}
                  </span>
                  <Cover index={i} />
                  <span
                    className="flex-1 font-semibold tracking-[-0.025em] text-ink transition-transform duration-500 ease-out group-hover:translate-x-2"
                    style={{ fontSize: "clamp(1.5rem, 3.4vw, 2.6rem)" }}
                  >
                    {course.title}
                  </span>
                  <span className="hidden font-mono text-[11px] uppercase tracking-[0.16em] text-[#9a9da6] md:block">
                    {course.duration}
                  </span>
                  <span
                    className={`hidden rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] sm:block ${
                      course.status === "Enrolling"
                        ? "border-[#d9dbe0] text-ink"
                        : "border-hairline text-[#b3b6be]"
                    }`}
                  >
                    {course.status}
                  </span>
                  <motion.span
                    aria-hidden
                    className="text-[18px] text-[#b3b6be]"
                    animate={{ rotate: open ? 45 : 0 }}
                    transition={{ duration: 0.45, ease: EASE }}
                  >
                    ↗
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      key="panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.55, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <div className="relative mb-9 ml-0 overflow-hidden rounded-[22px] border border-[#E4DFFB] bg-white sm:ml-12">
                        {/* soft interior light */}
                        <div
                          aria-hidden
                          className="pointer-events-none absolute inset-0"
                          style={{
                            background:
                              "radial-gradient(60% 120% at 85% 0%, rgba(199,190,248,0.45), transparent 60%), radial-gradient(50% 100% at 10% 100%, rgba(190,227,250,0.4), transparent 65%)",
                          }}
                        />
                        <div className="relative flex flex-col gap-7 p-7 sm:p-9 lg:flex-row lg:items-end lg:justify-between">
                          <div className="max-w-[52ch]">
                            <p className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-[#9a9da6]">
                              {course.tagline}
                            </p>
                            <p className="mt-4 text-[15.5px] leading-[1.7] text-ink-soft">
                              {course.description}
                            </p>
                            <p className="mt-5 font-mono text-[11px] tracking-[0.1em] text-[#9a9da6]">
                              {course.lessons} lessons · {course.level} ·
                              lifetime access
                            </p>
                          </div>
                          <div className="flex items-center gap-5">
                            <span className="text-[26px] font-semibold tracking-tight text-ink">
                              {course.price}
                            </span>
                            <a
                              href={course.href ?? "#contact"}
                              className="group/cta relative inline-flex h-11 items-center overflow-hidden rounded-full px-6 text-[13.5px] font-medium text-white"
                              style={{
                                background:
                                  "linear-gradient(135deg, #7C6AF0 0%, #4F46E5 100%)",
                                boxShadow:
                                  "inset 0 1px 0 rgba(255,255,255,0.25), 0 8px 22px -8px rgba(93,78,232,0.55)",
                              }}
                            >
                              <span
                                aria-hidden
                                className="pointer-events-none absolute inset-0 -translate-x-[130%] bg-[linear-gradient(105deg,transparent_35%,rgba(255,255,255,0.2)_50%,transparent_65%)] transition-transform duration-700 ease-out group-hover/cta:translate-x-[130%]"
                              />
                              {course.status === "Enrolling"
                                ? "Enroll now"
                                : "Join waitlist"}
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
