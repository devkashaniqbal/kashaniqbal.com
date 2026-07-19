export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  readTime: string;
  tags: string[];
  /** Paragraphs — plain strings, rendered one per <p>. */
  content: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "why-i-only-write-about-what-ive-shipped",
    title: "Why I only write about what I've shipped",
    excerpt:
      "Most technical advice online is written once and repeated for years. Mine changes every time production teaches me I was wrong.",
    date: "2026-06-02",
    readTime: "4 min",
    tags: ["AI Engineering", "Notes"],
    content: [
      "A few years ago I read a widely-shared write-up on system design where the advice was clearly frozen in time — architecture patterns from a job the author had left a decade earlier. Nothing wrong, exactly. Just untouched by a production incident since 2016.",
      "That's the thing I keep coming back to when I write here: the gap between knowing something and having recently been wrong about it in front of real users. Production has a way of correcting you that a blog post never will.",
      "So the rule I hold myself to is simple — if I haven't shipped it, I don't write about it as settled. Half of what I believed about RAG pipelines six months ago doesn't hold anymore, because the patterns that worked in early 2025 mostly don't survive contact with real traffic.",
      "This is also why I'd rather post fewer, more specific things than a steady stream of generic advice. If something I wrote a year ago looks different from how I'd write it today, that's not a redesign — that's me admitting the old version was incomplete.",
    ],
  },
  {
    slug: "the-agent-that-went-down-at-2am",
    title: "The agent that went down at 2 a.m.",
    excerpt:
      "A support automation I built for a client failed silently for six hours. Here's exactly what broke, and the guardrail I should have shipped on day one.",
    date: "2026-05-18",
    readTime: "6 min",
    tags: ["Automation", "Postmortem"],
    content: [
      "The automation had been running clean for three weeks: incoming support tickets got triaged, tagged, and routed by an LLM agent, and the client's team only touched the ones flagged as ambiguous. Then, overnight, the model provider changed a default on their end and the agent started returning malformed JSON.",
      "No alert fired. The parsing code caught the error, logged it, and silently fell back to 'unclassified' for every ticket — which meant nothing got routed for six hours straight. Nobody upstream was actually reading the fallback logs, because nothing had ever needed a fallback before.",
      "The fix itself took twenty minutes: pin the response schema, validate before accepting, and page someone the moment the fallback path fires more than twice in a row. The real lesson was earlier than that — a silent fallback is a design decision, and I'd made it without deciding it on purpose.",
      "I've since added the same guardrail to every automation I build: if the 'safe' path ever fires, someone has to know immediately, because a safe path that runs unnoticed for six hours isn't actually safe.",
    ],
  },
  {
    slug: "shopify-store-mistakes",
    title: "Three Shopify stores, three ways I overbuilt them",
    excerpt:
      "Every store I launched early in my Shopify work had more automation than it needed. Here's what I'd cut if I started over.",
    date: "2026-04-27",
    readTime: "5 min",
    tags: ["Shopify", "E-commerce"],
    content: [
      "The first store I built had eleven Flow automations running before it processed its first order. Abandoned cart sequences, inventory alerts, a Slack bot for restocks — all built before we knew what the store actually needed, because building automations is more fun than waiting for sales data.",
      "Two of those eleven ever mattered. The rest were solving problems the store didn't have yet, and a few actively got in the way — one automation kept re-tagging customers in a loop that quietly ate API rate limits for a month before anyone noticed the store was slower than it should've been.",
      "What I do differently now: launch with the absolute minimum — checkout, inventory sync, one abandoned-cart email — and only automate a step once I've watched a human do it manually at least a dozen times. If it's not a real bottleneck yet, it's not worth the surface area.",
      "It's a less exciting way to build, and it's also the version that doesn't break in ways nobody's watching for.",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getSortedPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
