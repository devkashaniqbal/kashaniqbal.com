"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ABOUT } from "@/lib/content";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const STATS = [
  { value: "+40K", label: "Users across shipped products" },
  { value: "+12,400", label: "Hours automated" },
];

/* Deterministic mote field (no Math.random → no hydration drift). */
const MOTES = Array.from({ length: 11 }, (_, i) => ({
  left: 8 + ((i * 47) % 40),
  top: 12 + ((i * 31) % 72),
  size: 2 + (i % 3),
  peak: 0.25 + ((i * 13) % 30) / 100,
  delay: (i * 1.9) % 14,
  dur: 15 + ((i * 2.7) % 11),
}));

function GhostButton() {
  return (
    <motion.a
      href="#videos"
      className="group inline-flex h-[52px] items-center gap-3 rounded-full border border-hairline bg-white/60 px-7 text-[15px] font-medium text-ink backdrop-blur-sm"
      whileHover={{
        y: -2,
        boxShadow: "0 10px 30px -10px rgba(20,20,30,0.16)",
        borderColor: "#dcdcdc",
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 26 }}
    >
      <span className="relative flex h-6 w-6 items-center justify-center rounded-full border border-[#d8d8dc] transition-colors duration-300 group-hover:border-ink">
        <span
          aria-hidden
          className="ml-[1.5px] block h-0 w-0 border-y-[3.5px] border-l-[5.5px] border-y-transparent border-l-ink"
        />
      </span>
      Watch Videos
    </motion.a>
  );
}

function PrimaryButton() {
  return (
    <motion.a
      href="#projects"
      className="group relative inline-flex h-[52px] items-center gap-2.5 overflow-hidden rounded-full px-8 text-[15px] font-medium text-white"
      style={{
        background: "linear-gradient(135deg, #7C6AF0 0%, #4F46E5 100%)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.25), 0 10px 28px -10px rgba(93,78,232,0.55)",
      }}
      whileHover={{
        scale: 1.03,
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.3), 0 16px 40px -10px rgba(93,78,232,0.7)",
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 24 }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-[130%] bg-[linear-gradient(105deg,transparent_35%,rgba(255,255,255,0.2)_50%,transparent_65%)] transition-transform duration-700 ease-out group-hover:translate-x-[130%]"
      />
      See My Work
      <span
        aria-hidden
        className="transition-transform duration-300 ease-out group-hover:translate-x-1"
      >
        →
      </span>
    </motion.a>
  );
}

/** The hero portrait — fixed to /portrait.png, independent of the
 *  mentor-section photo (which can change without touching the hero). */
const HERO_PORTRAIT = "/portrait.png";

/** The portrait — real photo when provided, a lit placeholder until. */
function Portrait() {
  return (
    <div className="relative h-full w-full">
      {HERO_PORTRAIT ? (
        <>
          {/* backdrop glow so the cutout sits in light, not in a void */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 55% at 52% 42%, rgba(206,199,250,0.75), rgba(227,240,252,0.4) 60%, transparent 82%)",
            }}
          />
          <Image
            src={HERO_PORTRAIT}
            alt={`Portrait of ${ABOUT.name}`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain object-bottom grayscale"
            style={{
              filter:
                "grayscale(1) drop-shadow(0 24px 36px rgba(20,25,35,0.28))",
            }}
          />
          {/* floor contact shadow */}
          <div
            aria-hidden
            className="absolute inset-x-[18%] bottom-0 h-10"
            style={{
              background:
                "radial-gradient(50% 100% at 50% 100%, rgba(20,25,35,0.18), transparent 70%)",
            }}
          />
        </>
      ) : (
        <div aria-hidden className="absolute inset-0">
          {/* placeholder — swap by dropping /public/portrait.jpg and
              setting ABOUT.portrait in lib/content.ts */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(75% 65% at 60% 38%, rgba(226,230,238,0.9), rgba(240,242,246,0.4) 60%, transparent 85%)",
            }}
          />
          <span
            className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 select-none font-semibold leading-none tracking-[-0.05em]"
            style={{
              fontSize: "clamp(11rem, 24vw, 21rem)",
              WebkitTextStroke: "1.5px #dde2e9",
              color: "transparent",
            }}
          >
            K
          </span>
          <div className="absolute inset-x-0 bottom-10 flex justify-center">
            <span className="rounded-full border border-hairline bg-white/70 px-4 py-2 font-mono text-[9.5px] uppercase tracking-[0.26em] text-[#9a9da6] backdrop-blur-sm">
              Portrait arriving soon
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  // the handoff: the vitrine recedes as the page takes over
  const exitScale = useTransform(scrollY, [0, 700], [1, 0.955]);
  const exitY = useTransform(scrollY, [0, 700], [0, 54]);
  const exitOpacity = useTransform(scrollY, [300, 850], [1, 0.55]);

  return (
    <section className="flex justify-center px-[3%] pt-[104px] sm:pt-[112px]">
      <motion.div
        className="w-full max-w-[1640px]"
        style={
          reduce
            ? undefined
            : { scale: exitScale, y: exitY, opacity: exitOpacity }
        }
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.3, ease: EASE, delay: 0.15 }}
          className="relative w-full overflow-hidden rounded-card border border-hairline bg-white"
          style={{
            boxShadow:
              "0 1px 2px rgba(20,20,30,0.04), 0 24px 80px -32px rgba(20,20,30,0.12)",
          }}
        >
          {/* ————— ambient lighting stack ————— */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.4, ease: "easeOut", delay: 0.35 }}
          >
            <div
              className="aurora-a absolute -top-[30%] -left-[15%] h-[85%] w-[70%] rounded-full"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(196,186,250,0.55), transparent 70%)",
                filter: "blur(60px)",
              }}
            />
            <div
              className="aurora-b absolute -right-[15%] top-[0%] h-[80%] w-[60%] rounded-full"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(143,208,245,0.45), transparent 70%)",
                filter: "blur(65px)",
              }}
            />
            <div
              className="aurora-c absolute -bottom-[35%] left-[20%] h-[80%] w-[65%] rounded-full"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(224,231,255,0.75), transparent 70%)",
                filter: "blur(65px)",
              }}
            />
            <div className="rays absolute inset-[-20%] opacity-45 mix-blend-soft-light" />
            {MOTES.map((m, i) => (
              <span
                key={i}
                className="mote absolute"
                style={
                  {
                    left: `${m.left}%`,
                    top: `${m.top}%`,
                    width: m.size,
                    height: m.size,
                    "--mote-peak": m.peak,
                    "--mote-delay": `${m.delay}s`,
                    "--mote-dur": `${m.dur}s`,
                  } as React.CSSProperties
                }
              />
            ))}
            <div className="grain absolute inset-0 opacity-[0.022] mix-blend-overlay" />
            <div
              className="absolute inset-0 rounded-card"
              style={{
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -40px 80px -50px rgba(226,228,235,0.7)",
              }}
            />
          </motion.div>

          {/* ————— vertical rails ————— */}
          <span
            aria-hidden
            className="absolute left-7 top-16 z-20 hidden origin-top-left rotate-90 font-mono text-[9px] uppercase tracking-[0.34em] text-[#b3b6be] lg:block"
          >
AI Engineer · Full-Stack Developer
          </span>
          <span
            aria-hidden
            className="absolute bottom-8 left-7 z-20 hidden font-mono text-[9px] uppercase tracking-[0.34em] text-[#b3b6be] lg:block"
          >
            2026
          </span>

          {/* ————— content grid ————— */}
          <div className="relative grid min-h-[640px] grid-cols-1 lg:h-[min(820px,calc(100svh-140px))] lg:min-h-[680px] lg:grid-cols-[1.02fr_1fr]">
            {/* left — copy */}
            <div className="relative z-20 flex flex-col justify-center px-7 pb-16 pt-16 sm:px-12 lg:py-0 lg:pl-20 xl:pl-28">
              {/* stats — the receipts come first */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.45 }}
                className="mb-12 flex gap-14"
              >
                {STATS.map((s) => (
                  <div key={s.label}>
                    <p className="text-[30px] font-semibold leading-none tracking-tight text-ink">
                      {s.value}
                    </p>
                    <p className="mt-2 font-mono text-[9.5px] uppercase tracking-[0.22em] text-[#9a9da6]">
                      {s.label}
                    </p>
                  </div>
                ))}
              </motion.div>

              <h1
                className="font-semibold leading-[0.92] tracking-[-0.05em] text-ink"
                style={{ fontSize: "clamp(4.6rem, 11vw, 9.5rem)" }}
              >
                <span className="block overflow-hidden pb-[0.06em]">
                  <motion.span
                    className="block"
                    initial={{ y: "112%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 1.2, ease: EASE, delay: 0.6 }}
                  >
                    Hello<span className="metal-text">.</span>
                  </motion.span>
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: EASE, delay: 0.95 }}
                className="mt-6 max-w-[42ch] text-[17px] leading-relaxed text-ink-soft"
              >
                <span className="text-ink">— It&rsquo;s Kashan Iqbal,</span> an
                AI engineer and full-stack developer building AI products,
                automation systems, and the occasional Shopify store.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: EASE, delay: 1.15 }}
                className="mt-10 flex flex-wrap items-center gap-4"
              >
                <PrimaryButton />
                <GhostButton />
              </motion.div>

              {/* scroll cue */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.9 }}
                className="mt-14 flex items-center gap-2.5 lg:absolute lg:bottom-10 lg:mt-0"
              >
                <span className="font-mono text-[9.5px] uppercase tracking-[0.28em] text-[#9a9da6]">
                  Scroll down
                </span>
                <motion.span
                  aria-hidden
                  className="text-[12px] text-[#9a9da6]"
                  animate={reduce ? undefined : { y: [0, 4, 0] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  ↓
                </motion.span>
              </motion.div>
            </div>

            {/* right — the portrait, bleeding to the card edge */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: EASE, delay: 0.7 }}
              className="relative h-[440px] sm:h-[520px] lg:h-full"
            >
              <Portrait />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
