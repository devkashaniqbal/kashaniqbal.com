import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import { getSortedPosts } from "@/lib/blog";
import { CONTAINER } from "@/components/sections/shared";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes on what I'm building — AI engineering, automation, and Shopify, written from whatever broke or shipped that week.",
  alternates: { canonical: "/blog" },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndex() {
  const posts = getSortedPosts();

  return (
    <>
      <Navbar />
      <main className="relative z-10 min-h-screen bg-white pb-24 pt-40">
        <div className={CONTAINER}>
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-[#9a9da6]">
            Writing
          </p>
          <h1
            className="mt-5 max-w-[20ch] font-semibold leading-[1.02] tracking-[-0.035em] text-ink"
            style={{ fontSize: "clamp(2.4rem, 5.2vw, 4rem)" }}
          >
            What I&rsquo;m building,
            <br />
            <span className="text-[#9a9da6]">written down.</span>
          </h1>
          <p className="mt-6 max-w-[52ch] text-[16.5px] leading-relaxed text-ink-soft">
            No content calendar — I write when something ships, breaks, or
            teaches me something worth keeping.
          </p>

          <div className="mt-16 lg:mt-20">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block border-t border-hairline py-8 last:border-b"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h2 className="text-[20px] font-semibold tracking-tight text-ink transition-transform duration-400 ease-out group-hover:translate-x-1.5 sm:text-[24px]">
                    {post.title}
                  </h2>
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#9a9da6]">
                    {formatDate(post.date)} · {post.readTime}
                  </span>
                </div>
                <p className="mt-3 max-w-[62ch] text-[15px] leading-relaxed text-ink-soft">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-hairline px-2.5 py-0.5 font-mono text-[9.5px] uppercase tracking-[0.14em] text-[#9a9da6]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
