"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SOCIALS } from "@/lib/content";
import Icon from "@/components/Icon";
import { CONTAINER, EASE, Reveal, SectionIntro } from "./shared";

export default function Community() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <section id="community" className="scroll-mt-28 py-28 lg:py-40">
      <div className={CONTAINER}>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
          <SectionIntro
            number="09"
            eyebrow="Community & newsletter"
            title={
              <>
                Learn in public,
                <br />
                <span className="text-[#9a9da6]">together.</span>
              </>
            }
            lede="One letter every Sunday — what I built, what broke, and the exact playbooks behind it. Plus a private community of builders shipping alongside you."
          />

          <div className="lg:pt-14">
            {/* a peek at the letter itself */}
            <Reveal delay={0.08}>
              <div
                className="mb-9 rounded-[18px] border bg-white p-5 shadow-[0_16px_40px_-24px_rgba(93,78,232,0.25)]"
                style={{ borderColor: "#E2DDFB" }}
              >
                <div className="flex items-start gap-4">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] border"
                    style={{
                      background: "#F1EEFE",
                      borderColor: "#E2DDFB",
                      color: "#6D5BE8",
                    }}
                  >
                    <Icon name="mail" size={18} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="text-[13.5px] font-semibold text-ink">
                        Kashan Iqbal · The Sunday Build
                      </p>
                      <span className="shrink-0 font-mono text-[9.5px] uppercase tracking-[0.14em] text-[#9a9da6]">
                        Sun 9:00 AM
                      </span>
                    </div>
                    <p className="mt-1 truncate text-[13px] font-medium text-ink">
                      What I shipped this week (and what broke)
                    </p>
                    <p className="mt-0.5 truncate text-[12.5px] text-ink-soft">
                      The agent went down at 2 a.m. — here&rsquo;s the fix, the
                      playbook, and the invoice it still earned…
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                    style={{
                      background: "#7C6AF0",
                      boxShadow: "0 0 6px rgba(124,106,240,0.6)",
                    }}
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubscribed(true);
                }}
                className="relative"
              >
                <label
                  htmlFor="newsletter-email"
                  className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-[#9a9da6]"
                >
                  The Sunday Build — free, weekly
                </label>
                <div className="mt-4 flex items-center gap-2 rounded-full border border-hairline bg-white p-1.5 pl-6 shadow-[0_1px_2px_rgba(20,20,30,0.03)] transition-colors duration-400 focus-within:border-[#c9ccd2]">
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    disabled={subscribed}
                    placeholder="you@example.com"
                    className="h-11 min-w-0 flex-1 bg-transparent text-[15px] text-ink outline-none placeholder:text-[#b3b6be] disabled:opacity-50"
                  />
                  <motion.button
                    type="submit"
                    disabled={subscribed}
                    className="relative inline-flex h-11 shrink-0 items-center overflow-hidden rounded-full px-6 text-[13.5px] font-medium text-white disabled:opacity-70"
                    style={{
                      background:
                        "linear-gradient(135deg, #7C6AF0 0%, #4F46E5 100%)",
                      boxShadow:
                        "inset 0 1px 0 rgba(255,255,255,0.25), 0 8px 22px -8px rgba(93,78,232,0.55)",
                    }}
                    whileHover={subscribed ? {} : { scale: 1.03 }}
                    whileTap={subscribed ? {} : { scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 24 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
                <AnimatePresence>
                  {subscribed && (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, ease: EASE }}
                      className="mt-4 text-[13.5px] text-ink-soft"
                      role="status"
                    >
                      You&rsquo;re in — the first letter arrives Sunday.
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-12 border-t border-hairline pt-8">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-[#9a9da6]">
                  Elsewhere
                </p>
                <div className="mt-5 flex flex-wrap gap-x-9 gap-y-3">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-1.5 text-[14.5px] font-medium text-ink-soft transition-colors duration-300 hover:text-ink"
                    >
                      {s.label}
                      <span
                        aria-hidden
                        className="text-[12px] text-[#b3b6be] transition-all duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink"
                      >
                        ↗
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
