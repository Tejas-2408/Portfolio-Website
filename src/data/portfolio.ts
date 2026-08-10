// ─────────────────────────────────────────────────────────────
// Single source of truth for all site content.
// Edit anything here — components read from this file only.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Tejas Bansal",
  title: "Freelance Website Developer • API Integration Specialist • AI Automation Builder",
  secondaryTitle: "Senior Technical Support Engineer @ Sprinklr",
  heroSubtitle:
    "Helping startups, professionals and local businesses build fast, responsive websites, automate workflows and integrate powerful APIs.",
  availability: "Available for freelance projects",
  location: "Haryana, India",
  email: "creative@tjcr.in",
  about: [
    "I'm a freelance website developer and API integration specialist. I build modern, responsive websites and web apps that load fast, rank well and turn visitors into customers.",
    "Beyond the frontend, I integrate REST APIs, AI APIs, payment gateways and third-party services, and build automation tools that remove repetitive work from a business's day.",
    "My day job as a Senior Technical Support Engineer at Sprinklr sharpens all of it: I debug enterprise-scale software, analyse APIs and production systems, run code-level root cause analysis and work directly with engineering teams on complex problems.",
    "What I enjoy most is taking a business idea and turning it into a scalable digital product — with the reliability habits that enterprise support work drills into you.",
  ],
};

export const links = {
  github: "https://github.com/Tejas-2408",
  linkedin: "https://www.linkedin.com/in/tejas-bansal-724b571b7",
  leetcode: "https://leetcode.com/u/tejas_2408/",
  siteUrl: "https://tjcr.in",
};

export const navItems = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Work", href: "#showcase" },
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

export const projects = [
  {
    name: "MailGenie",
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
  },
  {
    name: "Epoch Time Converter",
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
  },
  {
    name: "Spotify API Testing",
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
  },
  {
    name: "Portfolio & Business Websites",
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
    description: "This site — a fast, SEO-ready portfolio for freelance dev work.",
    url: "https://tjcr.in",
    tags: ["React", "Tailwind CSS", "TanStack Start"],
  },
];

export const testimonialsConfig = {
  testimonialsSheetCsvUrl: "",   // ← paste your published Google Sheets CSV link here
};

export const faqs = [
  {
    question: "What kind of websites do you build?",
    answer:
      "Business websites, landing pages, portfolios and web apps — built with React and Tailwind CSS, responsive on every screen and optimized for SEO and performance.",
  },
  {
    question: "Can you integrate APIs into an existing website?",
    answer:
      "Yes. I integrate REST APIs, AI APIs like Gemini and OpenAI, payment gateways, CRMs and other third-party services into existing sites and apps.",
  },
  {
    question: "Do you work with clients outside India?",
    answer:
      "Yes. I work remotely with clients worldwide and coordinate over email or video calls in your time zone.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A focused business website usually takes one to two weeks. API integrations and automation tools depend on scope — I share a timeline before starting.",
  },
];

