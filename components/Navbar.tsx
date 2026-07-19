"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const LINKS = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Writing", href: "/blog" },
  { label: "Digital Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

function NavLink({ label, href }: { label: string; href: string }) {
  return (
    <motion.a
      href={href}
      className="relative whitespace-nowrap px-1 text-[13.5px] font-medium text-ink-soft transition-colors duration-300 hover:text-ink"
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    >
      {label}
    </motion.a>
  );
}

function CTAButton({ compact = false }: { compact?: boolean }) {
  return (
    <motion.a
      href="#contact"
      className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-5 font-medium text-white"
      style={{
        height: compact ? 44 : 40,
        fontSize: 13.5,
        background: "linear-gradient(135deg, #7C6AF0 0%, #4F46E5 100%)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.25), 0 4px 14px -4px rgba(93,78,232,0.5)",
      }}
      whileHover={{
        scale: 1.03,
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.3), 0 10px 30px -6px rgba(93,78,232,0.65)",
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 24 }}
    >
      {/* moving sheen */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-[130%] bg-[linear-gradient(105deg,transparent_35%,rgba(255,255,255,0.22)_50%,transparent_65%)] transition-transform duration-700 ease-out group-hover:translate-x-[130%]"
      />
      Get In Touch
    </motion.a>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // 0 → resting rectangle, 1 → floating pill. The spring is what
  // makes the morph feel elastic rather than mapped 1:1 to scroll.
  const raw = useTransform(scrollY, [0, 160], [0, 1], { clamp: true });
  const p = useSpring(raw, { stiffness: 190, damping: 26, mass: 0.85 });

  const hover = useMotionValue(0);
  const hoverS = useSpring(hover, { stiffness: 260, damping: 30 });

  const maxWidth = useTransform(p, [0, 1], [1480, 968]);
  const height = useTransform(p, [0, 1], [72, 56]);
  const radius = useTransform(p, [0, 1], [18, 28]);
  const top = useTransform(p, [0, 1], [16, 10]);
  const padX = useTransform(p, [0, 1], [26, 16]);
  const gap = useTransform(p, [0, 1], [30, 19]);

  const bgAlpha = useTransform(p, [0, 1], [0.55, 0.78]);
  const background = useMotionTemplate`rgba(255,255,255,${bgAlpha})`;

  const blurPx = useTransform<number, number>(
    [p, hoverS],
    ([v, h]) => 14 + v * 10 + h * 8
  );
  const backdropFilter = useMotionTemplate`blur(${blurPx}px) saturate(1.5)`;

  const shadow = useTransform(
    p,
    (v) =>
      `inset 0 1px 0 rgba(255,255,255,0.7), 0 ${1 + v * 9}px ${
        18 + v * 22
      }px -${6 + v * 6}px rgba(15,15,22,${0.07 + v * 0.09}), 0 0 0 1px rgba(236,236,236,${
        0.9 - v * 0.2
      })`
  );

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center">
      <motion.nav
        aria-label="Primary"
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: EASE, delay: 0.1 }}
        onHoverStart={() => hover.set(1)}
        onHoverEnd={() => hover.set(0)}
        className="pointer-events-auto relative flex w-[93%] items-center justify-between"
        style={{
          maxWidth,
          height,
          borderRadius: radius,
          marginTop: top,
          paddingLeft: padX,
          paddingRight: padX,
          background,
          backdropFilter,
          WebkitBackdropFilter: backdropFilter,
          boxShadow: shadow,
        }}
      >
        {/* — logo — */}
        <a href="#" className="flex shrink-0 items-center gap-2.5">
          <span
            aria-hidden
            className="flex h-8 w-8 items-center justify-center rounded-[10px] text-[15px] font-semibold text-white"
            style={{
              background:
                "linear-gradient(150deg, #8FD0F5 -30%, #7C6AF0 35%, #4F46E5 100%)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)",
            }}
          >
            K
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-ink">
            Kashan{" "}
            <span className="font-normal text-ink-soft">Iqbal</span>
          </span>
        </a>

        {/* — center links (desktop) — */}
        <motion.ul
          className="absolute left-1/2 hidden -translate-x-1/2 items-center xl:flex"
          style={{ gap }}
        >
          {LINKS.map((l) => (
            <li key={l.label}>
              <NavLink {...l} />
            </li>
          ))}
        </motion.ul>

        {/* — right side — */}
        <div className="flex shrink-0 items-center gap-3">
          <div className="hidden sm:block">
            <CTAButton />
          </div>

          {/* hamburger */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="relative flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-black/[0.04] xl:hidden"
          >
            <motion.span
              className="absolute h-[1.5px] w-[18px] rounded-full bg-ink"
              animate={
                menuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -3.5 }
              }
              transition={{ duration: 0.35, ease: EASE }}
            />
            <motion.span
              className="absolute h-[1.5px] w-[18px] rounded-full bg-ink"
              animate={
                menuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 3.5 }
              }
              transition={{ duration: 0.35, ease: EASE }}
            />
          </button>
        </div>

        {/* — mobile sheet — */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.985 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="absolute inset-x-0 top-[calc(100%+10px)] overflow-hidden rounded-[22px] border border-hairline bg-white/85 p-3 shadow-[0_18px_50px_-18px_rgba(15,15,22,0.22)] backdrop-blur-2xl xl:hidden"
            >
              <ul className="flex flex-col">
                {LINKS.map((l, i) => (
                  <motion.li
                    key={l.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: EASE,
                      delay: 0.05 + i * 0.045,
                    }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setMenuOpen(false)}
                      className="block rounded-xl px-4 py-3 text-[15px] font-medium text-ink transition-colors hover:bg-black/[0.04]"
                    >
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: EASE, delay: 0.35 }}
                className="p-2 pt-3 sm:hidden"
              >
                <CTAButton compact />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
