/**
 * All homepage content lives here — swap mock entries for real data
 * before launch without touching any component.
 */

export type Product = {
  name: string;
  kind: "Template" | "Prompt Pack" | "System" | "Starter Kit";
  line: string;
  price: string;
};

export const PRODUCTS: Product[] = [
  {
    name: "Velocity",
    kind: "Template",
    line: "Next.js SaaS starter — auth, billing, and dashboard in a weekend",
    price: "$129",
  },
  {
    name: "The Prompt Vault",
    kind: "Prompt Pack",
    line: "1,200 engineered prompts for developers who ship",
    price: "$49",
  },
  {
    name: "AgentKit",
    kind: "Starter Kit",
    line: "Production AI agent boilerplate with evals and guardrails",
    price: "$179",
  },
  {
    name: "FlowOps",
    kind: "System",
    line: "40 business automation blueprints, ready to deploy",
    price: "$89",
  },
  {
    name: "Storefront OS",
    kind: "Template",
    line: "Shopify theme with a built-in automation suite",
    price: "$149",
  },
  {
    name: "Creator Ledger",
    kind: "System",
    line: "The Notion OS that runs my entire content business",
    price: "$39",
  },
];

export type Video = {
  title: string;
  duration: string;
  views: string;
};

export const VIDEOS: Video[] = [
  {
    title: "I built an AI agent that runs my business",
    duration: "18:24",
    views: "142K",
  },
  {
    title: "Next.js 15, explained in one real project",
    duration: "32:10",
    views: "98K",
  },
  {
    title: "Automating a Shopify store end-to-end",
    duration: "24:47",
    views: "76K",
  },
  {
    title: "The AI stack I'd use in 2026",
    duration: "15:02",
    views: "215K",
  },
  {
    title: "$0 → $10k with digital products",
    duration: "21:38",
    views: "163K",
  },
];

export type CaseStudy = {
  index: string;
  name: string;
  category: string;
  metric: string;
  metricLabel: string;
  description: string;
  stack: string[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    index: "01",
    name: "Flacron",
    category: "SaaS Platform",
    metric: "40K",
    metricLabel: "monthly users in six months",
    description:
      "An AI content platform taken from blank repo to 40,000 monthly users. Architecture, product, and growth loops — designed and shipped solo.",
    stack: ["Next.js", "OpenAI", "Postgres", "Stripe"],
  },
  {
    index: "02",
    name: "Investor Panel",
    category: "Marketplace",
    metric: "$2.1M",
    metricLabel: "in listed deal flow",
    description:
      "A two-sided marketplace connecting founders with investors — verified listings, secure data rooms, and automated matching.",
    stack: ["Next.js", "TypeScript", "Prisma", "AWS"],
  },
  {
    index: "03",
    name: "Meridian Ops",
    category: "Automation",
    metric: "31 hrs",
    metricLabel: "saved weekly for a 7-figure brand",
    description:
      "A full automation layer for an e-commerce operation — order routing, support triage, inventory alerts, and weekly reporting that writes itself.",
    stack: ["n8n", "Shopify", "Claude API", "Sheets"],
  },
];

export type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
};

export const RESULTS: Stat[] = [
  { value: 12400, suffix: "+", label: "hours automated for clients" },
  { value: 40000, suffix: "+", label: "monthly users across shipped products" },
  { value: 6, suffix: "+", label: "years shipping in production" },
  { value: 3, label: "digital products live" },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  featured?: boolean;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Kashan rebuilt our support triage in about two weeks. It's been running unattended for months and it's caught things our old process missed constantly.",
    name: "Sarah Mitchell",
    role: "Founder, ParseLabs",
    featured: true,
  },
  {
    quote:
      "He's the rare engineer who tells you when your idea is wrong before he starts building it. Saved us months.",
    name: "Daniel Okafor",
    role: "Operations Lead, e-commerce brand",
  },
  {
    quote:
      "The AgentKit boilerplate had guardrails and evals I hadn't even thought to ask for. Clearly built from having been burned before.",
    name: "Priya Raghavan",
    role: "Full-Stack Developer",
  },
  {
    quote:
      "Storefront OS took our store from something we babysat daily to something we check once a week.",
    name: "Marcus Webb",
    role: "E-commerce Founder",
    featured: true,
  },
  {
    quote:
      "The Prompt Vault is embarrassing value. Half my workflow is built on it.",
    name: "Elena Sokolova",
    role: "Product Engineer",
  },
];

export type FAQ = {
  question: string;
  answer: string;
};

export const FAQS: FAQ[] = [
  {
    question: "What do you actually work on?",
    answer:
      "AI systems, automation, and full-stack products — mostly for early-stage teams that need something built and shipped, not just prototyped. Everything on this site is something I've built myself or for a client.",
  },
  {
    question: "Are you available for freelance or consulting work?",
    answer:
      "Selectively. I take on a small number of AI and automation engagements at a time. Reach out through the contact section and tell me what you're building.",
  },
  {
    question: "Do the digital products come with support?",
    answer:
      "Yes — every product includes lifetime updates and direct access to me if something breaks or you get stuck integrating it.",
  },
  {
    question: "Can I read about what you're building?",
    answer:
      "That's what the writing section is for — build logs, postmortems, and notes on whatever shipped or broke recently. No content calendar, just what's actually happening.",
  },
  {
    question: "What's the best way to reach you?",
    answer:
      "Email, or any of the socials linked in the footer. I read everything myself.",
  },
];

export const ABOUT = {
  name: "Kashan Iqbal",
  title: "AI Engineer · Full-Stack Developer",
  /** Drop your portrait into /public (e.g. /portrait.jpg) and set the
   *  path here — the placeholder plate swaps out automatically. */
  portrait: "/portrait.png" as string | null,
  line: "I build AI products, automation systems, and full-stack apps — and write about what actually happens when they go into production.",
  inclusions: [
    "Direct access — I answer my own email",
    "Open-source work on GitHub",
    "Build logs and postmortems, written weekly-ish",
    "Selective freelance & consulting availability",
  ],
  stats: [
    { value: "6+ yrs", label: "shipping in production" },
    { value: "3", label: "products live" },
    { value: "40K+", label: "monthly users across projects" },
  ],
};

export const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/whynot.kashan" },
  { label: "X / Twitter", href: "https://x.com/mkashaniqbaldev" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kashan-zafar-2b4909397" },
  { label: "GitHub", href: "https://github.com/devkashaniqbal" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61589595670215" },
  { label: "Medium", href: "https://medium.com/@kashaniqbal" },
  { label: "YouTube", href: "https://www.youtube.com/@devkashaniqbal" },
];
