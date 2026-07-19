"use client";

import { motion } from "framer-motion";
import { PRODUCTS } from "@/lib/content";
import Icon from "@/components/Icon";
import { CONTAINER, EASE, SectionIntro } from "./shared";

const KIND_ICONS: Record<string, string> = {
  Template: "theme",
  "Prompt Pack": "spark",
  System: "layers",
  "Starter Kit": "box",
};

function ProductRow({
  name,
  kind,
  line,
  price,
  i,
}: {
  name: string;
  kind: string;
  line: string;
  price: string;
  i: number;
}) {
  return (
    <motion.a
      href="#contact"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.65, ease: EASE, delay: (i % 3) * 0.06 }}
      className="group relative border-t border-hairline py-6 transition-colors duration-500 hover:border-[#d5d7dc] lg:[&:nth-child(2n)]:border-t lg:[&:nth-last-child(-n+2)]:border-b [&:last-child]:border-b max-lg:[&:last-child]:border-b"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#E3F1FC] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-80"
      />
      <div className="relative flex gap-4">
        <span
          className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] border bg-white transition-colors duration-400 group-hover:border-[#B7DCF5]"
          style={{ borderColor: "#D6E9F7", color: "#2E90D1" }}
        >
          <Icon name={KIND_ICONS[kind] ?? "box"} size={18} />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-4">
            <div className="flex items-baseline gap-3.5">
              <h3 className="text-[18px] font-semibold tracking-tight text-ink transition-transform duration-500 ease-out group-hover:translate-x-1">
                {name}
              </h3>
              <span className="rounded-full border border-hairline px-2.5 py-0.5 font-mono text-[9.5px] uppercase tracking-[0.14em] text-[#9a9da6]">
                {kind}
              </span>
            </div>
            <span className="font-mono text-[13px] text-ink-soft transition-colors duration-400 group-hover:text-ink">
              {price}
            </span>
          </div>
          <p className="mt-1.5 max-w-[42ch] text-[13.5px] leading-relaxed text-ink-soft transition-transform duration-500 ease-out group-hover:translate-x-1">
            {line}
          </p>
        </div>
      </div>
    </motion.a>
  );
}

export default function DigitalProducts() {
  return (
    <section id="products" className="scroll-mt-28 bg-[#EFF8FE] py-28 lg:py-40">
      <div className={CONTAINER}>
        <SectionIntro
          number="07"
          eyebrow="Digital products"
          title={
            <>
              Tools I built for myself,
              <br />
              <span className="text-[#9a9da6]">packaged for you.</span>
            </>
          }
          lede="Templates, systems, and prompt libraries pulled straight out of my own workflow. Buy once, own forever, updated as mine evolve."
        />

        <div className="mt-16 grid grid-cols-1 gap-x-20 lg:mt-20 lg:grid-cols-2">
          {PRODUCTS.map((p, i) => (
            <ProductRow
              key={p.name}
              name={p.name}
              kind={p.kind}
              line={p.line}
              price={p.price}
              i={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
