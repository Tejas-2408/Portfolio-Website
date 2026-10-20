// ─────────────────────────────────────────────────────────────
// Single source of truth for all site content.
// Edit anything here — components read from this file only.
// ─────────────────────────────────────────────────────────────

export const brand = {
  name: "Tejas Creatives",
  shortName: "TJCR",
  founder: "Tejas Bansal",
  legalName: "Tejas Creatives (TJCR)",
  tagline: "Freelance Website Development, API Integrations & AI Automation",
};

export const profile = {
  name: "Tejas Bansal",
  brandName: "Tejas Creatives",
  shortBrand: "TJCR",
  title: "Freelance Website Developer • E-Commerce Builder • AI Automation Specialist",
  secondaryTitle: "Senior Technical Support Engineer @ Sprinklr",
  heroSubtitle:
    "Helping startups, business owners, and agency clients build lightning-fast static sites, high-converting e-commerce stores, and AI tools with 3–7 day turnaround.",
  availability: "Available for freelance projects on Fiverr & Direct",
  location: "Haryana, India",
  email: "creative@tjcr.in",
  about: [
    "I'm Tejas Bansal, founder of Tejas Creatives (TJCR) and an active freelance website developer, e-commerce specialist, and AI automation builder. I build modern, responsive web applications that load in under a second, convert visitors into buyers, and rank at the top of search engines.",
    "From corporate static websites (AKPS Associates, RRA) to high-volume e-commerce storefronts (Amritsaar Gold) and intelligent Chrome extensions/AI assistants (MailGenie), I deliver production-ready code with complete ownership.",
    "My day job as a Senior Technical Support Engineer at Sprinklr backs all freelance work with enterprise rigor: code-level root cause analysis, API debugging, and performance optimization.",
    "Available for custom contracts directly and via leading freelance platforms like Fiverr and Upwork with fast 3–7 day delivery and 100% satisfaction guarantee.",
  ],
};

export const links = {
  github: "https://github.com/Tejas-2408",
  linkedin: "https://www.linkedin.com/in/tejas-bansal-724b571b7",
  leetcode: "https://leetcode.com/u/tejas_2408/",
  fiverr: "https://www.fiverr.com/", // Add your Fiverr profile or gig URL here
  siteUrl: "https://tjcr.in",
  reviewFormUrl: "https://forms.gle/tejas-creatives-review", // Google Form URL for reviews
};

export const navItems = [
  { label: "Home", href: "#top" },
  { label: "Client Work", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#showcase" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const freelanceGuarantees = [
  { title: "3–7 Day Turnaround", desc: "Fast, reliable project milestones and prompt delivery" },
  { title: "100% Responsive Design", desc: "Flawless on smartphones, tablets, and 4K displays" },
  { title: "SEO & Core Web Vitals Ready", desc: "Optimized for top search ranking and 95+ PageSpeed" },
  { title: "Post-Launch Support", desc: "Free revisions and bug-fixing support after deployment" },
];

export const services = [
  {
    icon: "Globe",
    title: "Static Business Websites",
    description:
      "Ultra-fast, responsive corporate and portfolio websites built with React, Next.js, and Tailwind CSS. Modern, mobile-first, and SEO-optimized.",
  },
  {
    icon: "ShoppingBag",
    title: "E-Commerce Stores",
    description:
      "High-converting retail online stores with catalog navigation, shopping carts, payment gateway integration, and frictionless mobile checkouts.",
  },
  {
    icon: "Bot",
    title: "AI Tools & Automation",
    description:
      "AI-driven web tools, Gemini/OpenAI API integrations, email assistants, and workflow automations that eliminate manual tasks.",
  },
  {
    icon: "Plug",
    title: "API Integration & Testing",
    description:
      "REST APIs, payment gateways (Stripe, Razorpay), CRMs, and third-party web services connected with bulletproof error handling.",
  },
  {
    icon: "Gauge",
    title: "Performance & SEO Optimization",
    description:
      "Core Web Vitals auditing, Google Schema.org structured markup, metadata tuning, and asset optimization for maximum speed and SERP ranking.",
  },
  {
    icon: "Wrench",
    title: "Code Reviews & Bug Fixing",
    description:
      "Root cause analysis, production troubleshooting, and code clean-up for founders stuck with slow sites or broken integrations.",
  },
] as const;

export const skillGroups = [
  { title: "Development", skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Java", "Spring Boot", "REST APIs"] },
  {
    title: "E-Commerce & Tools",
    skills: ["E-Commerce UX", "Stripe", "Razorpay", "Chrome Extensions", "Vercel", "Docker"],
  },
  {
    title: "Testing & QA",
    skills: ["Postman", "Newman", "API Automation", "Regression Testing", "Rest Assured"],
  },
  { title: "Database & Cloud", skills: ["SQL", "MongoDB", "Elasticsearch", "MySQL", "Git & GitHub"] },
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
      "Official corporate website for AKPS Associates, a premier legal and tax advisory practice. Engineered for professional brand trust, mobile-first responsiveness, and search engine discoverability.",
    tech: ["Static Site", "React", "Tailwind CSS", "Corporate SEO", "Responsive UX"],
    deliverables: [
      "Custom branded corporate layout",
      "Fast loading speeds & zero lag",
      "Lead generation & inquiry forms",
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
// Visitors CAN leave reviews, ratings, and view GitHub, LinkedIn, Extension links.
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
    linkedinPost: "https://www.linkedin.com/in/tejas-bansal-724b571b7/",
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
    linkedinPost: "https://www.linkedin.com/in/tejas-bansal-724b571b7/",
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

export const experience = [
  {
    role: "Senior Technical Support Engineer",
    company: "Sprinklr",
    period: "Present",
    points: [
      "Debug enterprise software issues across large-scale, multi-tenant production systems.",
      "Analyse REST API requests, responses and logs to isolate integration failures.",
      "Investigate production incidents end to end and drive them to resolution.",
      "Perform root cause analysis and document findings for engineering and customers.",
      "Collaborate cross-functionally with product, engineering and success teams.",
      "Read and trace application code to pinpoint defects at the source.",
      "Identify performance bottlenecks and recommend optimizations.",
    ],
  },
];

export const serviceOptions = [
  "Static Business Website (AKPS style)",
  "E-Commerce Store (Amritsaar Gold style)",
  "Chrome Extension / AI Assistant (MailGenie style)",
  "Web Utility / Developer Tool (Epoch style)",
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
    question: "How can I hire you for a freelance project?",
    answer:
      "You can hire me directly through the contact form on this site, write to creative@tjcr.in, or hire me safely via freelance platforms like Fiverr and Upwork. I respond to all inquiries within a few hours with a clear scope and quote.",
  },
  {
    question: "What is your typical turnaround time?",
    answer:
      "Focused static websites (like AKPS Associates or RRA) are typically delivered in 3 to 7 business days. E-commerce platforms and AI tools take 1 to 2 weeks depending on custom feature requirements. I provide daily progress updates.",
  },
  {
    question: "Do you build e-commerce and static business websites from scratch?",
    answer:
      "Yes! I specialize in both high-performance static websites (built with React and modern CSS for lightning-fast loading) and robust e-commerce storefronts (like Amritsaar Gold) featuring mobile cart experiences, catalog search, and secure payment processing.",
  },
  {
    question: "How do client reviews work on your portfolio?",
    answer:
      "Under 'Client Work', you'll find verified testimonials directly from the site owners of projects I've delivered (such as AKPS Associates and Amritsaar Gold). Public reviews and comments are reserved exclusively for open-source tools like MailGenie and Epoch Time Converter.",
  },
  {
    question: "Can I leave a review for MailGenie or Epoch Time Converter?",
    answer:
      "Yes! In the 'Live Products & Tools' tab, any user can click 'Leave a Review' to share their rating and feedback. We appreciate all community input!",
  },
  {
    question: "Do you offer revisions and post-launch support?",
    answer:
      "Every freelance contract includes unlimited revisions within the agreed scope, plus 14 to 30 days of free post-launch support to ensure your website or application runs flawlessly.",
  },
];
