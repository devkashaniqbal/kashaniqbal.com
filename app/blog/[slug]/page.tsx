import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import { BLOG_POSTS, getPostBySlug } from "@/lib/blog";
import { CONTAINER } from "@/components/sections/shared";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `https://kashaniqbal.com/blog/${post.slug}`,
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: "Kashan Iqbal", url: "https://kashaniqbal.com" },
    url: `https://kashaniqbal.com/blog/${post.slug}`,
  };

  return (
    <>
      <Navbar />
      <main className="relative z-10 min-h-screen bg-white pb-24 pt-40">
        <article className={CONTAINER}>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-[#9a9da6] transition-colors hover:text-ink"
          >
            ← Writing
          </Link>

          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-[#9a9da6]">
            {formatDate(post.date)} · {post.readTime}
          </p>
          <h1
            className="mt-4 max-w-[24ch] font-semibold leading-[1.05] tracking-[-0.035em] text-ink"
            style={{ fontSize: "clamp(2.1rem, 4.6vw, 3.4rem)" }}
          >
            {post.title}
          </h1>

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

          <div className="mt-12 max-w-[68ch] border-t border-hairline pt-10">
            {post.content.map((para, i) => (
              <p
                key={i}
                className="mb-6 text-[17px] leading-[1.8] text-ink-soft last:mb-0"
              >
                {para}
              </p>
            ))}
          </div>

          <div className="mt-16 border-t border-hairline pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-[14.5px] font-medium text-ink-soft transition-colors hover:text-ink"
            >
              ← Back to all writing
            </Link>
          </div>
        </article>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
