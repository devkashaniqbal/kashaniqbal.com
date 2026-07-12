"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import Icon from "@/components/Icon";

export { Icon };

export const BLUE = "#1BA9E8";
export const BLUE_DARK = "#0E92CE";
export const BLUE_TINT = "#EAF7FE";
export const NAVY = "#0C1219";
export const NAVY_CARD = "#111A23";
export const INK = "#16202A";

export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Rounded badge pill above section headings. */
export function BadgePill({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-[12px] font-semibold uppercase tracking-[0.14em]"
      style={
        dark
          ? {
              background: "rgba(27,169,232,0.12)",
              color: "#7FD4F7",
              border: "1px solid rgba(27,169,232,0.35)",
            }
          : { background: BLUE_TINT, color: "#0d8ecb" }
      }
    >
      {children}
    </span>
  );
}

/** The big blue conversion button used everywhere on the funnel. */
export function BlueCTA({
  children,
  href = "#enroll",
  large = false,
}: {
  children: ReactNode;
  href?: string;
  large?: boolean;
}) {
  return (
    <motion.a
      href={href}
      className="inline-flex items-center justify-center rounded-xl font-bold uppercase tracking-[0.04em] text-white"
      style={{
        background: `linear-gradient(180deg, #2FB9F2 0%, ${BLUE} 55%, ${BLUE_DARK} 100%)`,
        boxShadow:
          "0 10px 24px -8px rgba(27,169,232,0.55), inset 0 1px 0 rgba(255,255,255,0.35)",
        height: large ? 60 : 54,
        paddingInline: large ? 40 : 32,
        fontSize: large ? 15.5 : 14,
      }}
      whileHover={{
        scale: 1.04,
        boxShadow:
          "0 16px 34px -8px rgba(27,169,232,0.7), inset 0 1px 0 rgba(255,255,255,0.4)",
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
    >
      {children}
    </motion.a>
  );
}

/** Section reveal wrapper. */
export function Rise({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}
