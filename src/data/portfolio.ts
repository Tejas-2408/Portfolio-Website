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
  title: "Freelance Website Developer • API Integration Specialist • AI Automation Builder",
  secondaryTitle: "Senior Technical Support Engineer @ Sprinklr",
  heroSubtitle:
    "Helping startups, professionals and businesses build fast, responsive websites, automate workflows and integrate powerful APIs with enterprise-grade reliability.",
  availability: "Available for freelance projects",
  location: "Haryana, India",
  email: "creative@tjcr.in",
  about: [
    "I'm Tejas Bansal, founder of Tejas Creatives (TJCR) and a freelance website developer and API integration specialist based in Haryana, India. I build modern, responsive web applications that load fast, rank high on search engines, and convert visitors into clients.",
    "Beyond modern frontend engineering, I specialize in connecting complex REST APIs, Gemini & OpenAI AI APIs, payment gateways, and custom business automation tools that eliminate repetitive manual workflows.",
    "My enterprise foundation as a Senior Technical Support Engineer at Sprinklr brings deep engineering rigor: root cause analysis, production API tracing, Elasticsearch/database debugging, and cross-functional problem solving under high SLA demands.",
    "Whether you need a brand-new website for your business, an AI-powered workflow, or seamless third-party API connectivity, I build digital solutions tailored for measurable business outcomes.",
  ],
};

export const links = {
  github: "https://github.com/Tejas-2408",
  linkedin: "https://www.linkedin.com/in/tejas-bansal-724b571b7",
  leetcode: "https://leetcode.com/u/tejas_2408/",
  siteUrl: "https://tjcr.in",
  reviewFormUrl: "https://forms.gle/tejas-creatives-review", // Google Form URL for client reviews
};

export const navItems = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Reviews", href: "#showcase" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    icon: "Globe",
    title: "Website Development",
    description:
      "Responsive, accessible websites and web apps built with React, Tailwind and modern tooling — mobile-first and fast by default.",
  },
  {
    icon: "Plug",
    title: "API Integration",
    description:
      "REST APIs, AI APIs, payment gateways, CRMs and third-party services wired into your product with clean error handling.",
  },
  {
    icon: "Bot",
    title: "AI Automation",
    description:
      "AI-assisted tools and workflow automation that cut manual work — from email drafting to reporting and data clean-up.",
  },
  {
    icon: "Building2",
    title: "Business Websites",
    description:
      "Landing pages and business sites with contact forms, analytics and conversion tracking ready to go live.",
  },
  {
    icon: "Gauge",
    title: "Performance & SEO",
    description:
      "Core Web Vitals, semantic markup, structured data and on-page SEO so your site is quick to load and easy to find.",
  },
  {
    icon: "Wrench",
    title: "Technical Consulting",
    description:
      "Debugging, root cause analysis and architecture reviews for teams stuck on production issues or flaky integrations.",
  },
] as const;

export const skillGroups = [
  { title: "Development", skills: ["React", "Java", "Python", "Spring Boot", "REST APIs"] },
  {
    title: "Testing & QA",
    skills: ["API Testing", "Rest Assured", "Postman", "Regression Testing", "Newman"],
  },
  { title: "Database", skills: ["SQL", "MongoDB", "Elasticsearch", "MySQL"] },
  { title: "Tools", skills: ["GitHub", "Docker", "JIRA", "Maven", "VS Code", "IntelliJ"] },
];

export interface ProjectReview {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  rating: number;
}

export interface ProjectItem {
  id: string;
  name: string;
  category: "web" | "api" | "ai" | "tool";
  featured: boolean;
  description: string;
  tech: string[];
  highlights: string[];
  github: string;
  demo: string | null;
  review?: ProjectReview;
}

export const projects: ProjectItem[] = [
  {
    id: "mailgenie",
    name: "MailGenie",
    category: "ai",
    featured: true,
    description:
      "An AI-powered email assistant that helps professionals draft emails, generate intelligent replies and improve productivity through Gemini AI.",
    tech: ["Spring Boot", "React", "Gemini API", "Docker", "Chrome Extension"],
    highlights: [
      "AI Email Generation",
      "Chrome Extension",
      "REST API Integration",
      "Docker Deployment",
      "Responsive UI",
    ],
    github: "https://github.com/Tejas-2408/MailGenie",
    demo: "https://github.com/Tejas-2408/MailGenie#demo",
    review: {
      quote:
        "MailGenie drastically cut down our email response time. The Gemini AI integration is fast, natural and the Chrome extension makes it effortless to use daily.",
      author: "Early Beta User",
      role: "Productivity Consultant",
      rating: 5,
    },
  },
  {
    id: "epoch-converter",
    name: "Epoch Time Converter",
    category: "tool",
    featured: false,
    description:
      "A modern web utility that instantly converts Unix timestamps into human-readable dates and vice versa.",
    tech: ["React", "Tailwind CSS", "TypeScript"],
    highlights: [
      "Multiple timezones",
      "Copy to clipboard",
      "Mobile friendly",
      "Fast conversion",
      "Clean UI",
    ],
    github: "https://github.com/Tejas-2408/Epoch-Time-Converter",
    demo: "https://epoch.tjcr.in",
    review: {
      quote:
        "Clean, instant and accurate. We keep this pinned across our backend engineering team for quick timestamp checks.",
      author: "Backend Developer",
      role: "Distributed Systems Team",
      rating: 5,
    },
  },
  {
    id: "spotify-api",
    name: "Spotify API Testing",
    category: "api",
    featured: false,
    description:
      "End-to-end API testing suite for the Spotify Web API, covering OAuth2 flows, collection runs and automated regression checks.",
    tech: ["OAuth2", "Postman", "Newman", "REST APIs", "Automation Scripts"],
    highlights: [
      "OAuth2 token flows",
      "Newman CI runs",
      "Negative test coverage",
      "Reusable environments",
    ],
    github: "https://github.com/Tejas-2408/Spotify-API",
    demo: null,
    review: {
      quote:
        "Exemplary API test coverage with Newman CI integration. Caught tricky OAuth token refresh bugs before production.",
      author: "QA Engineer",
      role: "API Integration Testing",
      rating: 5,
    },
  },
  {
    id: "tjcr-portfolio",
    name: "Portfolio & Business Websites",
    category: "web",
    featured: false,
    description:
      "Responsive business and portfolio websites for professionals and local businesses, built for speed and conversions.",
    tech: ["React", "Tailwind CSS", "Vercel"],
    highlights: [
      "SEO optimized",
      "Contact forms",
      "Analytics",
      "Fast performance",
    ],
    github: "https://github.com/Tejas-2408",
    demo: "https://tjcr.in",
    review: {
      quote:
        "Tejas delivered a modern, lightning-fast website that improved our client enquiries within the first month. Excellent communication throughout.",
      author: "Freelance Client",
      role: "Agency Founder",
      company: "Digital Partner",
      rating: 5,
    },
  },
];

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
  "Website Development",
  "API Integration",
  "AI Automation",
  "Business Website",
  "Performance & SEO",
  "Technical Consulting",
  "Something else",
];

export const freelanceWork = [
  {
    client: "tjcr.in",
    title: "Personal Portfolio & Business Site",
    description: "Official portfolio of Tejas Creatives (TJCR) — fast, responsive, and SEO-ready.",
    url: "https://tjcr.in",
    tags: ["React", "Tailwind CSS", "TanStack Start"],
  },
  {
    client: "epoch.tjcr.in",
    title: "Epoch Time Converter Utility",
    description: "Instant Unix timestamp and timezone converter tool built for developers.",
    url: "https://epoch.tjcr.in",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
];

export const testimonialsConfig = {
  testimonialsSheetCsvUrl: "", // paste your published Google Sheets CSV link here
  reviewFormUrl: "https://forms.gle/tejas-creatives-review", // link to Google Form for new submissions
};

export const faqs = [
  {
    question: "What is TJCR and Tejas Creatives?",
    answer:
      "TJCR (Tejas Creatives) is the digital development and freelance practice founded by Tejas Bansal. We specialize in modern website development, third-party REST/AI API integrations, and business workflow automations for startups, professionals, and growing businesses worldwide.",
  },
  {
    question: "Who is Tejas Bansal?",
    answer:
      "Tejas Bansal (Tejas) is a freelance website developer, API integration specialist, and Senior Technical Support Engineer at Sprinklr based in Haryana, India. With deep expertise across React, Spring Boot, Python, and cloud architectures, he creates high-performance digital products engineered for real business outcomes.",
  },
  {
    question: "What kind of websites do you build?",
    answer:
      "Business websites, landing pages, portfolios and web apps — built with React and Tailwind CSS, responsive on every screen and optimized for SEO, Core Web Vitals, and conversions.",
  },
  {
    question: "Can you integrate APIs into an existing website?",
    answer:
      "Yes. I integrate REST APIs, AI APIs like Gemini and OpenAI, payment gateways (Stripe, Razorpay), CRMs and other third-party services into existing sites and web applications.",
  },
  {
    question: "How do client reviews work and how can I submit one?",
    answer:
      "Clients can easily share feedback on any completed project through our Google Review Form. Verified reviews are synced automatically to this website and displayed under individual projects and in the client showcase.",
  },
  {
    question: "Do you work with clients outside India?",
    answer:
      "Yes. I work remotely with clients worldwide across the US, UK, Europe, and Asia, and coordinate seamlessly over email, Slack, or video calls in your time zone.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A focused business website usually takes one to two weeks. API integrations and automation tools depend on scope — I always provide a clear roadmap and timeline before starting.",
  },
];

