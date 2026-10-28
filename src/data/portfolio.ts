// ─────────────────────────────────────────────────────────────
// Single source of truth for all site content.
// Edit anything here — components read from this file only.
// ─────────────────────────────────────────────────────────────

export const brand = {
  name: "Tejas Creatives",
  shortName: "TJCR",
  founder: "Tejas Bansal",
  legalName: "Tejas Creatives (TJCR)",
  tagline: "Freelance Software Developer • Vibe Coder • Creative Technologist",
};

export const profile = {
  name: "Tejas Bansal",
  brandName: "Tejas Creatives",
  shortBrand: "TJCR",
  title: "Freelance Software Developer • Vibe Coder • Full-Stack Builder",
  tagline: "Turning bold ideas & aesthetics into high-converting, lightning-fast web experiences.",
  heroSubtitle:
    "Full-stack developer specializing in vibe coding — shipping modern, aesthetic web applications, high-converting e-commerce stores, and smart AI utilities with 3–7 day turnaround.",
  availability: "Available for freelance projects worldwide",
  location: "Haryana, India",
  email: "creative@tjcr.in",
  professionalEmail: "creative@tjcr.in",
  personalEmail: "tejasbansal6065@gmail.com",
  about: [
    "I'm Tejas Bansal, founder of Tejas Creatives (TJCR) and an active freelance software developer specializing in vibe coding, modern full-stack web engineering, and AI tools.",
    "I craft ultra-responsive, visually refined web applications that feel effortless to browse, load in under a second, convert visitors into clients, and rank at the top of search engines.",
    "From corporate static websites (AKPS Associates, RRA) to high-volume e-commerce storefronts (Amritsaar Gold) and intelligent browser extensions/AI tools (MailGenie, Epoch Time Converter), I bring ideas to life with high aesthetic standards and clean code.",
    "Available for custom freelance contracts directly and via platforms like Fiverr, backed by fast 3–7 day delivery, daily communication, and a 100% satisfaction guarantee.",
  ],
};

export const links = {
  github: "https://github.com/Tejas-2408",
  linkedin: "https://www.linkedin.com/in/tejas24bansal/",
  leetcode: "https://leetcode.com/u/tejas_2408/",
  fiverr: "https://www.fiverr.com/", // Add your Fiverr profile or gig URL here
  siteUrl: "https://tjcr.in",
  reviewFormUrl: "https://forms.gle/tejas-creatives-review", // Google Form URL for reviews
  personalEmail: "mailto:tejasbansal6065@gmail.com",
  professionalEmail: "mailto:creative@tjcr.in",
};

export const navItems = [
  { label: "Client Work", href: "#client-work" },
  { label: "My Builds", href: "#my-builds" },
  { label: "Services", href: "#services" },
  { label: "Vibe Flow", href: "#vibe" },
  { label: "Reviews", href: "#showcase" },
  { label: "Contact", href: "#contact" },
];

export const freelanceGuarantees = [
  { title: "3–7 Day Delivery", desc: "Fast sprint turnaround from idea to deployed product" },
  { title: "Aesthetic Vibe & Polish", desc: "Clean typography, fluid motion & 100% mobile perfection" },
  { title: "95+ Speed & SEO Ready", desc: "Lightning-fast Core Web Vitals & top search engine markup" },
  { title: "Full Code Ownership", desc: "Clean GitHub repository, zero lock-in & post-launch support" },
];

export const services = [
  {
    icon: "Sparkles",
    title: "Vibe Coding & Rapid MVPs",
    description:
      "Turning concepts, Figma files, or ideas into interactive, aesthetic web prototypes in days using modern React, TypeScript, and AI-accelerated workflows.",
  },
  {
    icon: "Globe",
    title: "Modern Static Websites",
    description:
      "Ultra-fast corporate and portfolio websites built with React, Next.js, and Tailwind CSS. Clean, responsive, and engineered for maximum brand trust.",
  },
  {
    icon: "ShoppingBag",
    title: "High-Converting E-Commerce",
    description:
      "Modern online retail stores featuring fluid catalog navigation, sleek shopping carts, payment gateway integration, and frictionless mobile checkouts.",
  },
  {
    icon: "Bot",
    title: "AI Tools & Chrome Extensions",
    description:
      "Custom browser extensions, Gemini/OpenAI API integrations, email assistants, and smart automation workflows that eliminate tedious manual work.",
  },
  {
    icon: "Plug",
    title: "Full-Stack & API Integrations",
    description:
      "Robust REST APIs, secure payment gateways (Stripe, Razorpay), authentication, and third-party integrations with clean error handling.",
  },
  {
    icon: "Gauge",
    title: "Performance & SEO Polish",
    description:
      "Core Web Vitals auditing, Google Schema.org structured data, metadata tuning, and bundle optimization for top search rankings and sub-second load times.",
  },
] as const;

export const skillGroups = [
  {
    title: "Frontend & Vibe UI",
    skills: ["React 19", "TypeScript", "Tailwind CSS", "Next.js", "TanStack Router", "Modern CSS", "Framer Motion"],
  },
  {
    title: "Backend & Systems",
    skills: ["REST APIs", "Node.js", "Java", "Spring Boot", "Docker", "Vercel", "Serverless"],
  },
  {
    title: "AI & Tools",
    skills: ["Gemini AI API", "Chrome Extensions", "Prompt Engineering", "OpenAI API", "Postman", "Git & GitHub"],
  },
  {
    title: "E-Commerce & Database",
    skills: ["E-Commerce UX", "Stripe", "Razorpay", "PostgreSQL", "MongoDB", "SQL", "Elasticsearch"],
  },
];

// ─────────────────────────────────────────────────────────────
// 1. Client Projects (Delivered Freelance Work)
// Read-only site owner testimonials. General public cannot rate or comment.
// ─────────────────────────────────────────────────────────────
export interface ClientProject {
  id: string;
  name: string;
  client: string;
  type: "static" | "ecommerce";
  categoryLabel: string;
  url: string;
  description: string;
  tech: string[];
  deliverables: string[];
  ownerTestimonial: {
    author: string;
    role: string;
    company: string;
    quote: string;
    rating: number;
    avatarInitials?: string;
  };
  allowPublicReviews: false;
}

export const clientProjects: ClientProject[] = [
  {
    id: "akps-associates",
    name: "AKPS Associates",
    client: "akpsassociates.com",
    type: "static",
    categoryLabel: "Static Corporate Site",
    url: "https://akpsassociates.com/",
    description:
      "Official corporate website for AKPS Associates, a premier legal and tax advisory practice. Engineered for professional brand trust, mobile-first responsiveness, and top search engine discoverability.",
    tech: ["Static Site", "React", "Tailwind CSS", "Corporate SEO", "Responsive UX"],
    deliverables: [
      "Custom branded corporate layout",
      "Sub-second page load speeds & zero lag",
      "Lead generation & inquiry flow",
      "100% mobile & tablet responsive",
      "On-page SEO & Google indexing ready",
    ],
    ownerTestimonial: {
      author: "AKPS Associates",
      role: "Managing Partner",
      company: "AKPS Associates Legal & Advisory",
      quote:
        "Tejas developed our official website with great professionalism and attention to detail. The site looks immaculate on every device and has noticeably elevated our client trust. Revisions were done in hours.",
      rating: 5,
      avatarInitials: "AK",
    },
    allowPublicReviews: false,
  },
  {
    id: "rra-studio",
    name: "RRA (Rahul Rawat Associates)",
    client: "rra-hazel.vercel.app",
    type: "static",
    categoryLabel: "Static Architecture / Portfolio",
    url: "https://rra-hazel.vercel.app/",
    description:
      "Modern, minimalist showcase website for architecture and consulting studio. Focuses on visual hierarchy, smooth transitions, instant asset delivery, and contemporary typography.",
    tech: ["Static Portfolio", "React", "Tailwind CSS", "Vercel", "Modern Grid"],
    deliverables: [
      "Minimalist aesthetic & portfolio gallery",
      "High-resolution image optimization",
      "Instant page transitions",
      "Smooth mobile touch navigation",
      "Automated Vercel CI/CD deployment",
    ],
    ownerTestimonial: {
      author: "RRA Studio Lead",
      role: "Principal Architect & Founder",
      company: "Rahul Rawat Associates",
      quote:
        "Tejas has an eye for contemporary design and clean engineering. He translated our design brief into a blazing-fast, elegant website. Communication was seamless from start to finish.",
      rating: 5,
      avatarInitials: "RR",
    },
    allowPublicReviews: false,
  },
  {
    id: "amritsaar-gold",
    name: "Amritsaar Gold",
    client: "amritsaargold.com",
    type: "ecommerce",
    categoryLabel: "E-Commerce Website",
    url: "https://amritsaargold.com/",
    description:
      "Full-scale e-commerce digital storefront for jewelry and luxury retail. Designed to showcase precious collections with intuitive product filtering, high-trust checkout flows, and mobile commerce optimization.",
    tech: ["E-Commerce Store", "React / Shopify", "Tailwind CSS", "Payment Gateways", "Conversion UX"],
    deliverables: [
      "Dynamic catalog browsing & collections",
      "Frictionless mobile shopping cart",
      "Secure payment checkout integration",
      "Product showcase with high-res zoom",
      "Conversion-optimized CTA placements",
    ],
    ownerTestimonial: {
      author: "Amritsaar Gold Management",
      role: "Founder & Store Director",
      company: "Amritsaar Gold Jewels",
      quote:
        "Our digital catalog sales and inquiries spiked right after Tejas launched our new e-commerce storefront. The mobile shopping experience is silky smooth. Highly recommended for any e-commerce build!",
      rating: 5,
      avatarInitials: "AG",
    },
    allowPublicReviews: false,
  },
];

// ─────────────────────────────────────────────────────────────
// 2. Live Products & Tools (Open-Source & User Reviewable)
// Visitors can explore code, contribute on GitHub, and view live links.
// ─────────────────────────────────────────────────────────────
export interface ProductReview {
  id?: string;
  author: string;
  role?: string;
  quote: string;
  rating: number;
  date?: string;
}

export interface LiveProduct {
  id: string;
  name: string;
  tagline: string;
  category: string;
  featured: boolean;
  description: string;
  tech: string[];
  highlights: string[];
  github: string;
  linkedinPost: string;
  extensionLink: string;
  demo: string;
  allowPublicReviews: true;
  reviews: ProductReview[];
}

export const liveProducts: LiveProduct[] = [
  {
    id: "mailgenie",
    name: "MailGenie",
    tagline: "AI Email Assistant & Chrome Extension",
    category: "AI & Productivity",
    featured: true,
    description:
      "An intelligent AI-powered email assistant and Chrome extension that helps professionals draft context-aware emails, generate intelligent replies, and boost communication speed via Google Gemini AI.",
    tech: ["Chrome Extension", "Spring Boot", "React", "Gemini AI API", "Docker"],
    highlights: [
      "Instant AI Email Generation",
      "One-click Chrome Extension integration",
      "REST API integration with Gemini model",
      "Clean popup UI with custom prompt controls",
      "Dockerized backend deployment",
    ],
    github: "https://github.com/Tejas-2408/MailGenie",
    linkedinPost: "https://www.linkedin.com/in/tejas24bansal/",
    extensionLink: "https://github.com/Tejas-2408/MailGenie#demo",
    demo: "https://github.com/Tejas-2408/MailGenie#demo",
    allowPublicReviews: true,
    reviews: [
      {
        id: "mg-1",
        author: "Devendra Sharma",
        role: "Startup Founder",
        quote:
          "MailGenie has saved me at least 45 minutes every day answering repetitive client emails. The tone matching is uncanny and the extension sits right in my browser without lag.",
        rating: 5,
        date: "Verified User",
      },
      {
        id: "mg-2",
        author: "Sarah K.",
        role: "Customer Success Manager",
        quote:
          "Super smooth Chrome Extension. Generating polite, professional replies with one click has made our team SLA response times faster than ever.",
        rating: 5,
        date: "Verified User",
      },
    ],
  },
  {
    id: "epoch-converter",
    name: "Epoch Time Converter",
    tagline: "Developer Timestamp Utility & Web App",
    category: "Developer Tools",
    featured: false,
    description:
      "A fast, modern web utility that instantly converts Unix timestamps into human-readable dates across multiple international timezones and vice versa. Built for developers and DevOps engineers.",
    tech: ["Web Utility Tool", "React", "Tailwind CSS", "TypeScript", "Date-fns"],
    highlights: [
      "Instant two-way Epoch & human date conversion",
      "Multi-timezone support (UTC, EST, IST, GMT)",
      "One-click copy to clipboard with toast feedback",
      "Mobile-friendly keyboard navigation",
      "Sub-millisecond processing in the browser",
    ],
    github: "https://github.com/Tejas-2408/Epoch-Time-Converter",
    linkedinPost: "https://www.linkedin.com/in/tejas24bansal/",
    extensionLink: "https://epoch.tjcr.in",
    demo: "https://epoch.tjcr.in",
    allowPublicReviews: true,
    reviews: [
      {
        id: "ep-1",
        author: "Karan Verma",
        role: "Senior Backend Engineer",
        quote:
          "This is permanently pinned on my browser tabs. Lightning-fast timestamp conversion without ad clutter or lag. Essential for backend debugging.",
        rating: 5,
        date: "Verified User",
      },
      {
        id: "ep-2",
        author: "Michael Chen",
        role: "Cloud DevOps Specialist",
        quote:
          "Super clean, instant, and handles timezone offsets flawlessly. Huge time-saver when inspecting production logs.",
        rating: 5,
        date: "Verified User",
      },
    ],
  },
];

// Unified projects array for legacy consumers
export const projects = liveProducts.map((p) => ({
  id: p.id,
  name: p.name,
  category: p.category.toLowerCase().includes("ai") ? ("ai" as const) : ("tool" as const),
  featured: p.featured,
  description: p.description,
  tech: p.tech,
  highlights: p.highlights,
  github: p.github,
  demo: p.demo,
  review: p.reviews[0]
    ? {
        quote: p.reviews[0].quote,
        author: p.reviews[0].author,
        role: p.reviews[0].role,
        rating: p.reviews[0].rating,
      }
    : undefined,
}));

// Vibe Coding Workflow
export const vibeWorkflow = [
  {
    step: "01",
    title: "Concept & Vibe Ingestion",
    timeline: "Day 1",
    desc: "We discuss your vision, vibe, audience, and must-have features. I map out a clean architecture and wireframe immediately.",
  },
  {
    step: "02",
    title: "AI-Accelerated Build",
    timeline: "Days 2–3",
    desc: "Rapid full-stack vibe coding using modern React, TypeScript, and Tailwind CSS. You get an interactive staging link within 48 hours.",
  },
  {
    step: "03",
    title: "Aesthetic Polish & SEO",
    timeline: "Days 4–5",
    desc: "Refining micro-interactions, dark mode, responsive mobile testing, Core Web Vitals speed tuning, and Google SEO structured data.",
  },
  {
    step: "04",
    title: "Launch & Code Handover",
    timeline: "Days 6–7",
    desc: "Seamless zero-downtime deployment (Vercel/Custom Domain), complete GitHub repository ownership, and 14+ days of free post-launch support.",
  },
];

// Kept for backward compatibility
export const experience = vibeWorkflow.map((item) => ({
  role: item.title,
  company: `Vibe Phase ${item.step} (${item.timeline})`,
  period: item.timeline,
  points: [item.desc],
}));

export const serviceOptions = [
  "Static Business Website (AKPS style)",
  "E-Commerce Store (Amritsaar Gold style)",
  "Chrome Extension / AI Assistant (MailGenie style)",
  "Web Utility / Developer Tool (Epoch style)",
  "Vibe Coding & Rapid MVP Prototype",
  "API Integration & Automation",
  "Fiverr Project Consultation",
  "Something else",
];

export const freelanceWork = [
  {
    client: "akpsassociates.com",
    title: "AKPS Associates Corporate Site",
    description: "Corporate legal and tax advisory website — high speed, mobile-first, and SEO-ready.",
    url: "https://akpsassociates.com/",
    tags: ["React", "Tailwind CSS", "Corporate", "Static Site"],
  },
  {
    client: "amritsaargold.com",
    title: "Amritsaar Gold E-Commerce Store",
    description: "Jewelry e-commerce platform with dynamic catalog and streamlined mobile checkout.",
    url: "https://amritsaargold.com/",
    tags: ["E-Commerce", "React", "Tailwind CSS", "Payment Gateways"],
  },
  {
    client: "rra-hazel.vercel.app",
    title: "RRA Studio Portfolio",
    description: "Minimalist architecture and design portfolio site deployed on Vercel.",
    url: "https://rra-hazel.vercel.app/",
    tags: ["Static Site", "React", "Portfolio", "Vercel"],
  },
  {
    client: "epoch.tjcr.in",
    title: "Epoch Time Converter Utility",
    description: "Instant Unix timestamp and timezone converter tool built for developers.",
    url: "https://epoch.tjcr.in",
    tags: ["React", "TypeScript", "Developer Tool"],
  },
];

export const testimonialsConfig = {
  testimonialsSheetCsvUrl: "", // paste your published Google Sheets CSV link here
  reviewFormUrl: "https://forms.gle/tejas-creatives-review", // link to Google Form for new submissions
};

export const faqs = [
  {
    question: "What is 'vibe coding' and how does it benefit my project?",
    answer:
      "Vibe coding combines modern intuitive developer workflows with AI acceleration and high aesthetic standards. Instead of weeks of slow corporate back-and-forth, you get a working, gorgeous, and responsive product in days with clean, production-grade code.",
  },
  {
    question: "How can I hire you for a freelance project?",
    answer:
      "You can reach out directly via the contact form on this site, write to creative@tjcr.in or tejasbansal6065@gmail.com, or hire me safely via freelance platforms like Fiverr. I reply within hours with an upfront scope and quote.",
  },
  {
    question: "What is your typical turnaround time?",
    answer:
      "Static business websites (like AKPS Associates or RRA) and landing pages are typically delivered in 3 to 7 business days. E-commerce platforms and custom AI extensions take 1 to 2 weeks. You receive regular staging updates throughout.",
  },
  {
    question: "Can I explore the code or contribute to your personal projects?",
    answer:
      "Yes! All personal builds like MailGenie and Epoch Time Converter link directly to public GitHub repositories. You can refer to the architecture, fork, submit pull requests, or contribute code.",
  },
  {
    question: "How do client reviews work on your portfolio?",
    answer:
      "Under 'Client Work', you'll find verified testimonials directly from the site owners of projects I've delivered (such as AKPS Associates and Amritsaar Gold). Public reviews and community feedback are reserved for open-source tools like MailGenie and Epoch Time Converter.",
  },
  {
    question: "Do you offer revisions and post-launch support?",
    answer:
      "Every freelance contract includes unlimited revisions within the agreed scope, plus 14 to 30 days of free post-launch support to ensure your website or application runs flawlessly in production.",
  },
];
