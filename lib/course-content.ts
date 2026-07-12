/**
 * All content for the /course sales page. Mock numbers and copy —
 * replace with real data before launch. The VSL embed and WhatsApp
 * number are placeholders and MUST be swapped.
 */

export const OFFER = {
  name: "Shopify Store Mastery",
  tagline: "Shopify · Freelancing · Digital Products",
  priceNow: "$299",
  priceWas: "$799",
  students: "2,400+",
  whatsapp: "https://wa.me/920000000000", // ← replace with real number
  videoHeadline: "WATCH THIS 96 SECONDS OF VIDEO TO LEARN HOW EASY IT IS",
};

export const TICKER_ITEMS = [
  "🎓 2,400+ Students Trained",
  "🛍️ Shopify · Freelancing · Digital Products",
  "✅ Lifetime Mentorship Included",
  "🔍 Product Hunting Without Paid Tools",
  "⭐ Real Student Video Reviews Available",
  "🔥 Fee Locked at $299",
];

export const HERO_STATS = [
  { value: "14 Hours", label: "Of training", icon: "clock" },
  { value: "62 Lectures", label: "HD video", icon: "play" },
  { value: "Lifetime Access", label: "LMS portal", icon: "lock" },
  { value: "Mentorship", label: "Included", icon: "people" },
] as const;

export const WHY_CARDS = [
  {
    title: "Work From Anywhere",
    body: "Run your store and serve clients from your bedroom, a cafe, or another country — all you need is a laptop.",
    icon: "pin",
  },
  {
    title: "Three Income Streams",
    body: "One skill stack, three ways to earn: your own store, freelance client projects, and digital products that sell while you sleep.",
    icon: "layers",
  },
  {
    title: "No Inventory, No Risk",
    body: "You never buy stock upfront and never touch a warehouse. Start lean, test fast, scale what works.",
    icon: "box",
  },
  {
    title: "Get Paid in Your Local Bank",
    body: "Withdraw store profits, client payments, and product sales straight to your own bank account — simple and direct.",
    icon: "bank",
  },
] as const;

export const ACCESS_CARDS = [
  {
    title: "Start & Manage Your Own Store",
    body: "Using the Store Mastery framework, build and grow your own Shopify business. Student, job holder, or complete beginner — all you need is a mobile or laptop and internet.",
    icon: "home",
  },
  {
    title: "Develop 8 Practical Skills",
    body: "Design stunning Shopify stores, find winning products, land freelance clients, and create digital products. Master marketing — from setup to ad copy, creatives, and scaling.",
    icon: "star",
  },
  {
    title: "Lifetime WhatsApp Support",
    body: "Stuck during the course? Ask your questions directly on WhatsApp from 9AM to 5PM. We make sure your learning journey stays smooth — with lifetime support included.",
    icon: "chat",
  },
  {
    title: "Private Community Access",
    body: "Get into the private community. Network with like-minded people, share wins, and solve problems by learning from other active store owners and freelancers.",
    icon: "people",
  },
] as const;

export const MENTOR_PILLS = [
  "Lifetime WhatsApp support",
  "Private community access",
  "Weekly live classes",
  "Smooth, guided journey",
];

export const MENTOR_STATS = [
  { value: "2,400+", label: "Students mentored" },
  { value: "3 Streams", label: "Store · Clients · Products" },
  { value: "Lifetime", label: "Access & support" },
];

export const REVIEWS = [
  {
    name: "Hamza R.",
    result: "First store sale in 19 days",
    quote:
      "I knew nothing about Shopify. The store modules alone were worth the fee — my first sale came before I even finished the course.",
  },
  {
    name: "Ayesha K.",
    result: "$1,100/month freelancing",
    quote:
      "The freelancing modules got me my first two clients on Fiverr. I now earn more from store setups than my old job.",
  },
  {
    name: "Bilal S.",
    result: "Digital product on autopilot",
    quote:
      "My theme-customization guide sells every week without me touching it. This course showed me exactly how to package what I know.",
  },
];

export const GUARANTEE_POINTS = [
  "Full refund within 14 days — no hard feelings",
  "One-time fee, lifetime access — zero hidden charges",
  "2,400+ students already trust this program",
];

export const PERSONAS = [
  {
    title: "If You're a Complete",
    highlight: "Beginner",
    body: "No idea how to start? I'll guide you step by step. By the end, you'll have a fully working Shopify store and a clear roadmap to your first sale.",
    icon: "sprout",
    tint: "#E9F8EE",
  },
  {
    title: "If You're a Struggling",
    highlight: "Freelancer",
    body: "Tired of racing to the bottom on price? Learn to sell store setups and digital products as premium services clients happily pay for.",
    icon: "megaphone",
    tint: "#EAF3FE",
  },
  {
    title: "If You're a Business",
    highlight: "Owner",
    body: "Want to add a profitable eCommerce stream? Learn to find winning products, build a store that converts, and automate the boring parts.",
    icon: "briefcase",
    tint: "#FBF3E7",
  },
] as const;

export type Module = {
  title: string;
  points: string[];
};

export const MODULES: Module[] = [
  {
    title: "The Right Mindset to Actually Succeed",
    points: [
      "The common mistakes that make most beginners quit early",
      "How to treat your store like a real business, not a side hobby",
      "The simple habit that keeps you going when motivation drops",
      "Staying calm and focused when the first few days feel slow",
    ],
  },
  {
    title: "Set Up Your Shopify Store (Premium Theme Free)",
    points: [
      "Store setup from zero — domain, settings, payments",
      "Installing and customizing your free premium theme",
      "Pages every trustworthy store must have",
    ],
  },
  {
    title: "Finding Winning Products (No Paid Tools)",
    points: [
      "My free product-hunting workflow, step by step",
      "Reading demand signals before you spend a rupee",
      "Products to avoid as a beginner — and why",
    ],
  },
  {
    title: "Store Design That Converts",
    points: [
      "Homepage, product page, and checkout best practices",
      "Building trust with reviews, badges, and policies",
      "Mobile-first design — where most of your buyers are",
    ],
  },
  {
    title: "Freelancing: Your First Client on Fiverr & Upwork",
    points: [
      "Setting up a gig that actually gets ordered",
      "Portfolio tricks when you have zero past clients",
      "Exactly what to say in your first buyer conversations",
    ],
  },
  {
    title: "Pricing & Client Communication Like a Pro",
    points: [
      "Package pricing that gets you out of the $5 race",
      "Scope, revisions, and boundaries — without losing clients",
      "Turning one-time buyers into monthly retainers",
    ],
  },
  {
    title: "Creating Digital Products People Want",
    points: [
      "Finding a product idea inside skills you already have",
      "Building it fast: templates, guides, and toolkits",
      "Packaging and pricing for impulse purchases",
    ],
  },
  {
    title: "Selling Digital Products on Autopilot",
    points: [
      "Setting up your product storefront the easy way",
      "Delivery, receipts, and updates — fully automated",
      "The content loop that sells while you sleep",
    ],
  },
  {
    title: "Marketing & Ads Made Simple (2026)",
    points: [
      "Organic first: content that brings free traffic",
      "Meta and TikTok ads — pixel setup to first campaign",
      "Reading results: kill, keep, or scale",
    ],
  },
  {
    title: "Orders, Fulfilment & Local Payments",
    points: [
      "Handling orders and suppliers without stress",
      "Getting paid into your local bank account",
      "Refunds and customer service that protect your ratings",
    ],
  },
  {
    title: "Scaling: From Side Hustle to Full Income",
    points: [
      "When to double down on store, clients, or products",
      "Systems and simple automation that buy back your time",
      "Your 90-day roadmap after finishing the course",
    ],
  },
];

export type Bonus = {
  title: string;
  body: string;
  icon: string;
};

export const BONUSES_LIST: Bonus[] = [
  {
    title: "Weekly 2-Hour Live Class",
    body: "Join live training sessions every week to learn, ask questions & stay on track.",
    icon: "live",
  },
  {
    title: "Live Store & Gig Review",
    body: "Get your store or freelance gig reviewed live so you know exactly what to fix and scale.",
    icon: "chart",
  },
  {
    title: "Shopify Zero to Hero E-Book",
    body: "A complete guide that takes you from total beginner to confident store owner.",
    icon: "book",
  },
  {
    title: "Profit & Loss Calculator",
    body: "Know your real numbers — calculate profit, cost & margins before you spend.",
    icon: "calc",
  },
  {
    title: "Premium Shopify Themes",
    body: "Ready-to-use premium store themes so your shop looks professional from day one.",
    icon: "theme",
  },
  {
    title: "ChatGPT Prompts Pack",
    body: "30+ ready prompts to instantly write product descriptions, gig copy & emails with AI.",
    icon: "spark",
  },
];

export const BONUS_TOTAL_VALUE = "$1,600";

export const STICKY_CHECKS = [
  "Practical on Mobile",
  "Lifetime Access of Course",
  "Lifetime Support",
];
