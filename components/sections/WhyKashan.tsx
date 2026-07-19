"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ABOUT } from "@/lib/content";
import Icon from "@/components/Icon";
import { CONTAINER, EASE, Reveal, SectionIntro } from "./shared";

const DISCIPLINES = [
  {
    field: "AI Engineering",
    proof: "Production LLM systems, agents, and evals — shipped, not demoed.",
    icon: "spark",
  },
  {
    field: "Full-Stack Development",
    proof: "Next.js and TypeScript products, from first schema to deploy.",
    icon: "code",
  },
  {
    field: "Automation",
    proof: "Operations that run themselves for six- and seven-figure businesses.",
    icon: "bolt",
  },
  {
    field: "Writing",
    proof: "Build logs and postmortems on what shipped, and what broke.",
    icon: "book",
  },
];

const INCLUSION_ICONS = ["chat", "people", "live", "chart"];

export default function WhyKashan() {
  return (
    <section id="about" className="scroll-mt-28 py-28 lg:py-40">
      <div className={CONTAINER}>
        <SectionIntro
          number="01"
          eyebrow="About"
          title={
            <>
              I build things,
              <br />
              <span className="text-[#9a9da6]">then write about it.</span>
            </>
          }
        />

        <div className="mt-16 grid grid-cols-1 gap-16 lg:mt-20 lg:grid-cols-[1fr_1.15fr] lg:gap-24">
          {/* the argument */}
          <div className="max-w-[46ch]">
            <Reveal>
              <p className="text-[17px] leading-[1.75] text-ink-soft">
                I&rsquo;m an AI engineer and full-stack developer. Everything
                on this site comes from products that are live right now —
                AI platforms with real users, automations running real
                businesses, stores processing real orders.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-[17px] leading-[1.75] text-ink-soft">
                I take on a small number of freelance and consulting
                engagements, build my own products on the side, and write
                about whatever shipped or broke that week.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.28em] text-[#9a9da6]">
                Builder, not a brand
              </p>
            </Reveal>
          </div>

          {/* the disciplines — ruled rows, not cards */}
          <div>
            {DISCIPLINES.map((d, i) => (
              <motion.div
                key={d.field}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, ease: EASE, delay: i * 0.09 }}
                className="group relative border-t border-hairline py-7 transition-colors duration-500 last:border-b hover:border-[#d5d7dc]"
              >
                {/* silver wash on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#F3F0FE] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-80"
                />
                <div className="relative flex gap-5">
                  <span
                    className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-[13px] border transition-colors duration-500 group-hover:border-[#C9BFF8]"
                    style={{
                      background: "#F1EEFE",
                      borderColor: "#E2DDFB",
                      color: "#6D5BE8",
                    }}
                  >
                    <Icon name={d.icon} size={21} />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-6">
                      <h3 className="text-[19px] font-semibold tracking-tight text-ink transition-transform duration-500 ease-out group-hover:translate-x-1.5">
                        {d.field}
                      </h3>
                      <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#b3b6be]">
                        0{i + 1}
                      </span>
                    </div>
                    <p className="mt-2 max-w-[42ch] text-[14.5px] leading-relaxed text-ink-soft transition-transform duration-500 ease-out group-hover:translate-x-1.5">
                      {d.proof}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ——— the mentor ——— */}
        <div className="mt-24 grid grid-cols-1 items-center gap-14 lg:mt-32 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* portrait plate — an elegant placeholder until the real
              portrait lands in /public and ABOUT.portrait is set */}
          <Reveal>
            <div
              className="relative mx-auto aspect-[4/5] w-full max-w-[400px] overflow-hidden rounded-[28px] border border-hairline"
              style={{
                background:
                  "linear-gradient(165deg, #f7f8fa 0%, #eef0f4 55%, #f4f2ee 100%)",
                boxShadow:
                  "0 1px 2px rgba(20,20,30,0.04), 0 24px 60px -28px rgba(20,20,30,0.14)",
              }}
            >
              {ABOUT.portrait ? (
                <Image
                  src="/gallery/kashan-iqbal-editorial-portrait.jpg"
                  alt={`Portrait of ${ABOUT.name}`}
                  fill
                  sizes="(max-width: 1024px) 90vw, 400px"
                  className="object-cover"
                />
              ) : (
                <div aria-hidden className="absolute inset-0">
                  <div
                    className="aurora-b absolute -top-[20%] left-[10%] h-[70%] w-[80%] rounded-full"
                    style={{
                      background:
                        "radial-gradient(closest-side, rgba(255,255,255,0.9), transparent 70%)",
                      filter: "blur(40px)",
                    }}
                  />
                  <div className="grain absolute inset-0 opacity-[0.03] mix-blend-overlay" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
                    <span
                      className="flex h-20 w-20 items-center justify-center rounded-[22px] text-[34px] font-semibold text-white"
                      style={{
                        background:
                          "linear-gradient(160deg, #3a3b42 0%, #141417 60%, #0a0a0c 100%)",
                        boxShadow:
                          "inset 0 1px 0 rgba(255,255,255,0.2), 0 16px 40px -16px rgba(20,20,30,0.4)",
                      }}
                    >
                      K
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#b3b6be]">
                      {ABOUT.name}
                    </span>
                  </div>
                </div>
              )}
              {/* caption bar */}
              <div className="absolute inset-x-0 bottom-0 border-t border-white/60 bg-white/70 px-6 py-4 backdrop-blur-md">
                <p className="text-[15px] font-semibold tracking-tight text-ink">
                  {ABOUT.name}
                </p>
                <p className="mt-0.5 font-mono text-[9.5px] uppercase tracking-[0.2em] text-[#9a9da6]">
                  {ABOUT.title}
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="max-w-[40ch] text-[19px] font-medium leading-[1.55] tracking-tight text-ink">
                {ABOUT.line}
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-10 font-mono text-[10.5px] uppercase tracking-[0.26em] text-[#9a9da6]">
                How I work
              </p>
            </Reveal>

            <div className="mt-5">
              {ABOUT.inclusions.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
                  className="group flex items-center gap-4 border-t border-hairline py-4 last:border-b"
                >
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] border transition-colors duration-400 group-hover:border-[#C9BFF8]"
                    style={{
                      background: "#F1EEFE",
                      borderColor: "#E2DDFB",
                      color: "#6D5BE8",
                    }}
                  >
                    <Icon name={INCLUSION_ICONS[i % INCLUSION_ICONS.length]} size={17} />
                  </span>
                  <span className="text-[15px] text-ink-soft transition-colors duration-400 group-hover:text-ink">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-x-12 gap-y-6">
              {ABOUT.stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.7, ease: EASE, delay: 0.2 + i * 0.08 }}
                >
                  <p className="text-[24px] font-semibold tracking-tight text-ink">
                    {s.value}
                  </p>
                  <p className="mt-1 font-mono text-[9.5px] uppercase tracking-[0.2em] text-[#9a9da6]">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ——— banner ——— */}
        <Reveal className="mt-14 lg:mt-20">
          <div
            className="relative aspect-[4/1] w-full overflow-hidden rounded-[22px] border border-hairline"
            style={{
              boxShadow:
                "0 1px 2px rgba(20,20,30,0.04), 0 20px 50px -28px rgba(20,20,30,0.14)",
            }}
          >
            <Image
              src="/gallery/kashan-iqbal-banner.png"
              alt={`${ABOUT.name} — turning ideas into reality: AI, Blockchain, SaaS`}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
