"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Icon from "@/components/Icon";
import { CONTAINER, EASE, Reveal } from "./shared";

const ICE = "#EEF4FE";
const ICE_BORDER = "#E0E3FB";
const ICE_INK = "#4F46E5";

/* ----- terminal cell: types a real build, loops forever ----- */

const TERMINAL_LINES = [
  { text: "$ npx create-agent support-bot", tone: "cmd" },
  { text: "✓ RAG pipeline connected", tone: "ok" },
  { text: "✓ evals passing 24/24", tone: "ok" },
  { text: "✓ guardrails armed", tone: "ok" },
  { text: "→ deployed to production in 41s", tone: "out" },
] as const;

function Terminal() {
  const reduce = useReducedMotion();
  // line === TERMINAL_LINES.length means "finished, holding before loop"
  const [pos, setPos] = useState({ line: 0, char: 0 });
  const posRef = useRef(pos);

  useEffect(() => {
    if (reduce) {
      setPos({ line: TERMINAL_LINES.length, char: 0 });
      return;
    }
    let timer: ReturnType<typeof setTimeout>;
    const set = (next: { line: number; char: number }, delay: number) => {
      posRef.current = next;
      setPos(next);
      timer = setTimeout(step, delay);
    };
    const step = () => {
      const p = posRef.current;
      const current = TERMINAL_LINES[p.line];
      if (!current) {
        set({ line: 0, char: 0 }, 500); // loop back
      } else if (p.char < current.text.length) {
        set({ ...p, char: p.char + 1 }, 30 + Math.random() * 45);
      } else if (p.line < TERMINAL_LINES.length - 1) {
        set({ line: p.line + 1, char: 0 }, 280);
      } else {
        set({ line: TERMINAL_LINES.length, char: 0 }, 3600); // hold
      }
    };
    timer = setTimeout(step, 600);
    return () => clearTimeout(timer);
  }, [reduce]);

  return (
    <div className="flex h-full flex-col">
      {/* window chrome */}
      <div className="flex items-center gap-1.5 border-b border-hairline px-5 py-3">
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-2.5 w-2.5 rounded-full bg-[#E4E7EB]" />
        ))}
        <span className="ml-3 font-mono text-[9.5px] uppercase tracking-[0.2em] text-[#9a9da6]">
          kashan@prod ~ live
        </span>
      </div>
      <div className="flex-1 p-5 font-mono text-[12.5px] leading-[1.9]">
        {TERMINAL_LINES.map((l, i) => {
          if (i > pos.line) return null;
          const typing = i === pos.line;
          const text = typing ? l.text.slice(0, pos.char) : l.text;
          return (
            <p
              key={i}
              className={
                l.tone === "ok"
                  ? "text-[#4F46E5]"
                  : l.tone === "out"
                    ? "text-ink"
                    : "text-ink-soft"
              }
            >
              {text}
              {typing && (
                <span className="caret ml-px inline-block h-[13px] w-[7px] translate-y-[2px] bg-ink" />
              )}
            </p>
          );
        })}
      </div>
    </div>
  );
}

/* ----- automation flow cell: light travels the pipeline ----- */

function Flow() {
  const NODES = ["Order", "Triage", "Fulfil", "Report"];
  return (
    <div className="flex h-full flex-col justify-between p-6">
      <div className="relative mt-2 flex items-center justify-between px-1">
        {/* connecting line with traveling dashes */}
        <svg
          className="absolute inset-x-4 top-1/2 h-2 w-[calc(100%-2rem)] -translate-y-3"
          aria-hidden
        >
          <line
            x1="0"
            y1="4"
            x2="100%"
            y2="4"
            stroke="#B7ACF7"
            strokeWidth="1.5"
            className="flow-line"
          />
        </svg>
        {NODES.map((n, i) => (
          <div key={n} className="relative flex flex-col items-center gap-2.5">
            <span
              className="node-pulse flex h-9 w-9 items-center justify-center rounded-full border bg-white"
              style={{ borderColor: "#D5CEFA", animationDelay: `${i * 0.65}s` }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: "#7C6AF0" }}
              />
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#9A8FE8]">
              {n}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-6 text-[13.5px] leading-relaxed text-ink-soft">
        Pipelines like this run{" "}
        <span className="font-medium text-ink">24/7 for real businesses</span>{" "}
        &mdash; orders routed, support triaged, reports written while everyone
        sleeps.
      </p>
    </div>
  );
}

/* ----- storefront cell: a sale lands every few seconds ----- */

function Storefront() {
  return (
    <div className="relative flex h-full flex-col p-6">
      <div
        className="rounded-xl border p-4"
        style={{ borderColor: ICE_BORDER, background: "#FBFDFE" }}
      >
        <div
          className="h-16 rounded-lg"
          style={{
            background:
              "linear-gradient(135deg, #E8EFF4 0%, #F4F8FA 50%, #DFE9EF 100%)",
          }}
        />
        <div className="mt-3 h-2 w-3/4 rounded bg-[#E3EBF0]" />
        <div className="mt-2 h-2 w-1/2 rounded bg-[#EDF2F5]" />
        <div className="mt-3 flex items-center justify-between">
          <span className="text-[13px] font-semibold text-ink">$49.00</span>
          <span
            className="rounded-full px-3 py-1 text-[10px] font-medium text-white"
            style={{
              background: "linear-gradient(135deg,#7C6AF0,#4F46E5)",
              boxShadow: "0 4px 10px -4px rgba(93,78,232,0.5)",
            }}
          >
            Add to cart
          </span>
        </div>
      </div>
      {/* the sale toast */}
      <div
        className="toast-pop absolute right-4 top-4 flex items-center gap-2 rounded-full border bg-white px-3.5 py-2 shadow-[0_10px_26px_-12px_rgba(30,50,65,0.35)]"
        style={{ borderColor: ICE_BORDER }}
      >
        <span
          className="flex h-5 w-5 items-center justify-center rounded-full"
          style={{ background: ICE, color: ICE_INK }}
        >
          <Icon name="check" size={11} />
        </span>
        <span className="text-[11px] font-medium text-ink">
          New sale &middot; <span className="text-ink-soft">while asleep</span>
        </span>
      </div>
      <p className="mt-5 text-[13.5px] leading-relaxed text-ink-soft">
        Digital products{" "}
        <span className="font-medium text-ink">sell without you</span> &mdash;
        build once, wake up to receipts.
      </p>
    </div>
  );
}

/* ----- community cell ----- */

const AVATARS = ["SM", "DO", "PR", "MW", "ES"];

function Community() {
  return (
    <div className="flex h-full flex-col justify-between p-6">
      <div className="flex -space-x-2.5">
        {AVATARS.map((a, i) => (
          <span
            key={a}
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white font-mono text-[10px] font-medium text-[#4F46E5]"
            style={{
              background: `linear-gradient(135deg, hsl(${242 - i * 8} 65% ${94 - i * 2}%), hsl(${222 - i * 8} 60% ${88 - i * 2}%))`,
            }}
          >
            {a}
          </span>
        ))}
        <span
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-[10px] font-semibold text-white"
          style={{ background: "linear-gradient(135deg,#7C6AF0,#4F46E5)" }}
        >
          +2.4k
        </span>
      </div>
      <div>
        <div className="flex gap-1" style={{ color: "#C9A961" }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Icon key={i} name="star" size={13} />
          ))}
        </div>
        <p className="mt-3 text-[13.5px] leading-relaxed text-ink-soft">
          <span className="font-medium text-ink">2,400+ builders</span>{" "}
          learning in public, shipping side by side.
        </p>
      </div>
    </div>
  );
}

/* ----- the grid ----- */

const CELLS = [
  {
    label: "Shipped weekly",
    title: "Real systems, typed live",
    span: "lg:col-span-3",
    body: <Terminal />,
  },
  {
    label: "Sells while you sleep",
    title: "Products on autopilot",
    span: "lg:col-span-2",
    body: <Storefront />,
  },
  {
    label: "Runs 24/7",
    title: "Automation in production",
    span: "lg:col-span-3",
    body: <Flow />,
  },
  {
    label: "Never alone",
    title: "A community that ships",
    span: "lg:col-span-2",
    body: <Community />,
  },
] as const;

export default function ProofBento() {
  return (
    <section className="py-10 lg:py-16">
      <div className={CONTAINER}>
        <Reveal>
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-[#9a9da6]">
            Proof, not promises
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {CELLS.map((cell, i) => (
            <motion.div
              key={cell.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: EASE, delay: (i % 2) * 0.1 }}
              whileHover={{ y: -4 }}
              className={`group flex min-h-[280px] flex-col overflow-hidden rounded-[24px] border bg-white ${cell.span}`}
              style={{
                borderColor: ICE_BORDER,
                boxShadow:
                  "0 1px 2px rgba(20,30,40,0.03), 0 20px 50px -30px rgba(30,50,65,0.18)",
              }}
            >
              <div className="flex items-baseline justify-between px-5 pt-5">
                <p
                  className="font-mono text-[9px] uppercase tracking-[0.22em]"
                  style={{ color: ICE_INK }}
                >
                  {cell.label}
                </p>
                <p className="text-[12.5px] font-medium text-[#9aa8b2]">
                  {cell.title}
                </p>
              </div>
              <div className="mt-2 flex-1">{cell.body}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
