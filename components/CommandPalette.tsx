"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SOCIALS } from "@/lib/content";
import { scrollToTarget } from "@/components/LenisProvider";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

type Command = {
  group: string;
  label: string;
  hint?: string;
  keywords?: string;
  run: () => void;
};

function goTo(hash: string) {
  scrollToTarget(hash);
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = useMemo<Command[]>(
    () => [
      { group: "Navigate", label: "Home", run: () => scrollToTarget(0) },
      { group: "Navigate", label: "About", keywords: "who is kashan", run: () => goTo("#about") },
      { group: "Navigate", label: "Digital Products", keywords: "templates prompts", run: () => goTo("#products") },
      { group: "Navigate", label: "Video Library", keywords: "youtube watch", run: () => goTo("#videos") },
      { group: "Navigate", label: "Writing", keywords: "blog posts", run: () => window.location.assign("/blog") },
      { group: "Navigate", label: "Projects & Case Studies", keywords: "work portfolio", run: () => goTo("#projects") },
      { group: "Navigate", label: "Community & Newsletter", keywords: "subscribe sunday", run: () => goTo("#community") },
      { group: "Navigate", label: "FAQ", keywords: "questions", run: () => goTo("#faq") },
      { group: "Navigate", label: "Contact", keywords: "consult book call", run: () => goTo("#contact") },
      ...SOCIALS.map((s) => ({
        group: "Elsewhere",
        label: s.label,
        hint: "↗",
        run: () => window.open(s.href, "_blank", "noreferrer"),
      })),
      {
        group: "Elsewhere",
        label: "Copy email address",
        hint: "hello@kashaniqbal.com",
        keywords: "mail contact",
        run: () => navigator.clipboard?.writeText("hello@kashaniqbal.com"),
      },
    ],
    []
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) =>
      `${c.label} ${c.keywords ?? ""} ${c.group}`.toLowerCase().includes(q)
    );
  }, [commands, query]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
  }, []);

  // ⌘K / Ctrl+K
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
      setActive(0);
    }
  }, [open, query]);

  const onListKeys = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter" && results[active]) {
      e.preventDefault();
      results[active].run();
      close();
    }
  };

  let lastGroup = "";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[95] bg-white/55 backdrop-blur-[6px]"
          onClick={close}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={{ opacity: 0, y: 14, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.985 }}
            transition={{ duration: 0.35, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={onListKeys}
            className="mx-auto mt-[16vh] w-[92%] max-w-[560px] overflow-hidden rounded-[20px] border border-hairline bg-white/95 shadow-[0_30px_90px_-25px_rgba(15,15,22,0.25)] backdrop-blur-2xl"
          >
            <div className="flex items-center gap-3 border-b border-hairline px-5">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#c4c7cf]" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Where to?"
                className="h-[54px] w-full bg-transparent text-[15px] text-ink outline-none placeholder:text-[#b3b6be]"
              />
              <kbd className="rounded-md border border-hairline px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-[#9a9da6]">
                esc
              </kbd>
            </div>

            <div className="max-h-[46vh] overflow-y-auto py-2">
              {results.length === 0 && (
                <p className="px-5 py-6 text-[13.5px] text-ink-soft">
                  Nothing matches &ldquo;{query}&rdquo; — try a section
                  name.
                </p>
              )}
              {results.map((cmd, i) => {
                const showGroup = cmd.group !== lastGroup;
                lastGroup = cmd.group;
                return (
                  <div key={`${cmd.group}-${cmd.label}`}>
                    {showGroup && (
                      <p className="px-5 pb-1 pt-3 font-mono text-[9px] uppercase tracking-[0.24em] text-[#b3b6be]">
                        {cmd.group}
                      </p>
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        cmd.run();
                        close();
                      }}
                      onMouseEnter={() => setActive(i)}
                      className={`flex w-full items-center justify-between px-5 py-2.5 text-left text-[14px] transition-colors duration-150 ${
                        i === active
                          ? "bg-[#f4f5f8] text-ink"
                          : "text-ink-soft"
                      }`}
                    >
                      {cmd.label}
                      {cmd.hint && (
                        <span className="font-mono text-[10.5px] text-[#b3b6be]">
                          {cmd.hint}
                        </span>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-5 border-t border-hairline px-5 py-3 font-mono text-[9px] uppercase tracking-[0.18em] text-[#b3b6be]">
              <span>↑↓ Navigate</span>
              <span>↵ Go</span>
              <span>Esc Close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
