"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getSortedPosts } from "@/lib/blog";
import { CONTAINER, EASE, SectionIntro } from "./shared";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function Writing() {
  const posts = getSortedPosts().slice(0, 3);

  return (
    <section id="writing" className="scroll-mt-28 py-28 lg:py-40">
      <div className={CONTAINER}>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionIntro
            number="03"
            eyebrow="Writing"
            title={
              <>
                What I&rsquo;m building,
                <br />
                <span className="text-[#9a9da6]">written down.</span>
              </>
            }
            lede="No content calendar — I write when something ships, breaks, or teaches me something worth keeping."
          />
          <Link
            href="/blog"
            className="group mb-2 inline-flex items-center gap-2 text-[14px] font-medium text-ink-soft transition-colors hover:text-ink"
          >
            All posts
            <span className="transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-0.5">
              ↗
            </span>
          </Link>
        </div>

        <div className="mt-16 lg:mt-20">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.75, ease: EASE, delay: i * 0.08 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group block border-t border-hairline py-7 last:border-b"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="text-[19px] font-semibold tracking-tight text-ink transition-transform duration-400 ease-out group-hover:translate-x-1.5">
                    {post.title}
                  </h3>
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[#9a9da6]">
                    {formatDate(post.date)} · {post.readTime}
                  </span>
                </div>
                <p className="mt-2 max-w-[62ch] text-[14.5px] leading-relaxed text-ink-soft">
                  {post.excerpt}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
