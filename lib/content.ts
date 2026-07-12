/**
 * All homepage content lives here — swap mock entries for real data
 * before launch without touching any component.
 */

export type Course = {
  index: string;
  title: string;
  tagline: string;
  description: string;
  duration: string;
  lessons: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: string;
  status: "Enrolling" | "Waitlist";
  /** Where the enroll CTA leads; defaults to #contact. */
  href?: string;
};

export const COURSES: Course[] = [
  {
    index: "01",
    title: "AI Engineering",
    tagline: "From zero to shipped AI product.",
    description:
      "Design, build, and deploy production AI systems — RAG pipelines, agents, evals, and the engineering judgment nobody teaches. You leave with a live product, not a certificate.",
    duration: "12 weeks",
    lessons: 86,
    level: "Intermediate",
    price: "$499",
    status: "Enrolling",
  },
  {
    index: "02",
    title: "Full-Stack Foundations",
    tagline: "The stack behind every product I ship.",
    description:
      "Next.js, TypeScript, databases, auth, payments, deployment. One real SaaS built end-to-end, the way it's actually done — no toy apps, no tutorial hell.",
    duration: "10 weeks",
    lessons: 72,
    level: "Beginner",
    price: "$349",
    status: "Enrolling",
  },
  {
    index: "03",
    title: "Automation Empire",
    tagline: "Systems that earn while you sleep.",
    description:
      "Turn repetitive business operations into automated pipelines — lead gen, fulfilment, reporting, outreach. Built on tools your clients already pay for.",
    duration: "8 weeks",
    lessons: 54,
    level: "Intermediate",
    price: "$399",
    status: "Waitlist",
  },
  {
    index: "04",
    title: "Shopify Store Mastery",
    tagline: "Build stores that sell themselves.",
    description:
      "Store architecture, conversion design, and the automation layer that runs it hands-off. For freelancers who want $3k+ client projects and founders who want margin.",
    duration: "6 weeks",
    lessons: 48,
    level: "Beginner",
    price: "$299",
    status: "Enrolling",
    href: "/course",
  },
];

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
    title: "The AI stack I'd learn in 2026",
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
  { value: 2400, suffix: "+", label: "students enrolled" },
  { value: 38, label: "countries reached" },
  { value: 4.9, decimals: 1, label: "average course rating" },
  { value: 12400, suffix: "+", label: "hours automated for clients" },
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
      "I'd done three bootcamps and still couldn't ship. Twelve weeks with Kashan and my AI product has paying users. The difference is he teaches judgment, not just syntax.",
    name: "Sarah Mitchell",
    role: "Founder, ParseLabs",
    featured: true,
  },
  {
    quote:
      "The automation course paid for itself before I finished it. One client retainer from module four covers my year.",
    name: "Daniel Okafor",
    role: "Freelance Automation Consultant",
  },
  {
    quote:
      "Every lesson feels like watching a senior engineer think out loud. I stopped copying code and started understanding it.",
    name: "Priya Raghavan",
    role: "Full-Stack Developer",
  },
  {
    quote:
      "Storefront OS plus the Shopify course took my store from hobby to hands-off. I check dashboards now, not orders.",
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
    question: "I'm a complete beginner. Where do I start?",
    answer:
      "Full-Stack Foundations assumes nothing but curiosity. It takes you from your first component to a deployed SaaS. Once you're comfortable shipping, AI Engineering or Automation Empire is the natural next step.",
  },
  {
    question: "How are these different from YouTube tutorials?",
    answer:
      "Tutorials show you what to type. These courses show you how to decide — architecture trade-offs, debugging under pressure, what to build and what to skip. Every course ends with a real product in production, reviewed with the cohort.",
  },
  {
    question: "Do I get lifetime access?",
    answer:
      "Yes. Every course and product includes lifetime access, all future updates, and any new lessons added to that course — no subscriptions, no expiry.",
  },
  {
    question: "What if a course isn't right for me?",
    answer:
      "Every course carries a 14-day, no-questions refund. Finish two modules, and if it isn't worth multiples of what you paid, email me and you get it back.",
  },
  {
    question: "Is there a community?",
    answer:
      "Every enrollment includes access to the private community — weekly build sessions, code reviews, job and client leads, and direct access to me and the alumni network.",
  },
  {
    question: "Do you offer consulting or custom work?",
    answer:
      "Selectively. I take a small number of AI and automation engagements each quarter. Book a call through the contact section and tell me what you're building.",
  },
];

export const MENTOR = {
  name: "Kashan Iqbal",
  title: "AI Engineer · Full-Stack Developer · Educator",
  /** Drop your portrait into /public (e.g. /portrait.jpg) and set the
   *  path here — the placeholder plate swaps out automatically. */
  portrait: "/portrait.png" as string | null,
  line: "You don't just get lessons. You get a mentor who is still in the arena — and a community building beside you.",
  inclusions: [
    "Direct access — questions answered within a day",
    "Private builders' community, lifetime",
    "Weekly live build sessions",
    "Code reviews on your real projects",
  ],
  stats: [
    { value: "2,400+", label: "students mentored" },
    { value: "6+ yrs", label: "shipping in production" },
    { value: "Lifetime", label: "access & support" },
  ],
};

export type Bonus = {
  name: string;
  detail: string;
  value: string;
};

export const BONUSES: Bonus[] = [
  {
    name: "Weekly live build sessions",
    detail: "Two hours, every week — build along, ask anything",
    value: "$499",
  },
  {
    name: "Project & code reviews",
    detail: "Your real work, reviewed line by line",
    value: "$299",
  },
  {
    name: "The Prompt Vault",
    detail: "All 1,200 engineered prompts, full library",
    value: "$49",
  },
  {
    name: "Velocity SaaS template",
    detail: "The production starter behind my own products",
    value: "$129",
  },
  {
    name: "Shopify launch kit",
    detail: "Store audit checklist and automation presets",
    value: "$99",
  },
  {
    name: "Builders' community, lifetime",
    detail: "Leads, hiring calls, and accountability that lasts",
    value: "$199",
  },
];

export const BONUS_TOTAL = "$1,274";

export const FORK = {
  alone: {
    label: "Keep going alone",
    points: [
      "Collect another folder of tutorials",
      "Guess what to build — and what to skip",
      "Debug at 2 a.m. with nobody to ask",
      "Watch others ship while you research",
    ],
  },
  together: {
    label: "Build with Kashan",
    points: [
      "A proven path from skill to income",
      "Direct answers the moment you're stuck",
      "A community shipping right beside you",
      "Lifetime updates as the stack evolves",
    ],
  },
};

export const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/whynot.kashan" },
  { label: "X / Twitter", href: "https://x.com/mkashaniqbaldev" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kashan-zafar-2b4909397" },
  { label: "GitHub", href: "https://github.com/devkashaniqbal" },
];
