import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Section } from "@/components/portfolio/Section";
import { Services } from "@/components/portfolio/Services";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { FaqSection } from "@/components/portfolio/FaqSection";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { brand, profile, links, services, faqs } from "@/data/portfolio";
import { Showcase } from "@/components/portfolio/Showcase";

const title = "Tejas Bansal | Freelance Web Developer, E-Commerce & AI Specialist — TJCR";
const description =
  "Official website of Tejas Bansal (Tejas Creatives / TJCR) — freelance developer for static corporate websites, e-commerce stores, and AI tools. Available on Fiverr & direct hire with 3–7 day delivery.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "tjcr, tejas creatives, tejas bansal, tejas, freelance website developer, fiverr web developer, e-commerce developer, static website developer, React developer India, API integration specialist, Chrome extension developer, AI automation builder, AKPS associates website, Amritsaar Gold developer",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://tjcr.in/" },
      { property: "og:site_name", content: "TJCR — Tejas Creatives" },
      { property: "og:image", content: "https://tjcr.in/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: "https://tjcr.in/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://tjcr.in/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": `${links.siteUrl}/#person`,
              name: "Tejas Bansal",
              alternateName: ["Tejas", "TJCR", "Tejas Creatives"],
              jobTitle: "Freelance Website Developer & API Specialist",
              worksFor: {
                "@type": "Organization",
                name: "Sprinklr",
              },
              email: profile.email,
              url: links.siteUrl,
              sameAs: [links.github, links.linkedin, links.leetcode, links.fiverr].filter(Boolean),
              description:
                "Tejas Bansal is a freelance website developer, e-commerce builder, and founder of Tejas Creatives (TJCR).",
            },
            {
              "@type": "Organization",
              "@id": `${links.siteUrl}/#organization`,
              name: brand.name,
              alternateName: brand.shortName,
              legalName: brand.legalName,
              url: links.siteUrl,
              logo: `${links.siteUrl}/favicon.png`,
              founder: { "@id": `${links.siteUrl}/#person` },
              email: profile.email,
              sameAs: [links.github, links.linkedin, links.leetcode, links.fiverr].filter(Boolean),
            },
            {
              "@type": "WebSite",
              "@id": `${links.siteUrl}/#website`,
              name: `${brand.shortName} — ${brand.name}`,
              alternateName: "Tejas Bansal Portfolio",
              url: links.siteUrl,
              publisher: { "@id": `${links.siteUrl}/#organization` },
            },
            {
              "@type": "ProfessionalService",
              "@id": `${links.siteUrl}/#business`,
              name: `${profile.name} (${brand.name} / ${brand.shortName})`,
              alternateName: [brand.shortName, brand.name, profile.name],
              description,
              url: links.siteUrl,
              email: profile.email,
              founder: { "@id": `${links.siteUrl}/#person` },
              areaServed: ["India", "Worldwide"],
              priceRange: "$$",
              sameAs: [links.github, links.linkedin, links.leetcode, links.fiverr].filter(Boolean),
            },
            ...services.map((service) => ({
              "@type": "Service",
              name: service.title,
              description: service.description,
              serviceType: service.title,
              provider: { "@id": `${links.siteUrl}/#business` },
            })),
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: `${links.siteUrl}/`,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Client Work & Projects",
                  item: `${links.siteUrl}/#projects`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Services",
                  item: `${links.siteUrl}/#services`,
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Reviews & Testimonials",
                  item: `${links.siteUrl}/#showcase`,
                },
                {
                  "@type": "ListItem",
                  position: 5,
                  name: "Contact",
                  item: `${links.siteUrl}/#contact`,
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />

        {/* Featured Projects with Dual Tabs: Client Work & Live Products */}
        <Section
          id="projects"
          eyebrow="Portfolio & Delivery"
          title="Delivered Client Sites & Live Products"
        >
          <Projects />
        </Section>

        {/* Freelance Services Offered */}
        <Section id="services" eyebrow="Freelance Services" title="What I Build for Clients">
          <Services />
        </Section>

        {/* Client Testimonials Showcase */}
        <Section
          id="showcase"
          eyebrow="Social Proof & Feedback"
          title="Verified Client Reviews & Deployments"
        >
          <Showcase />
        </Section>

        {/* Tech Stack & Core Competencies */}
        <Section id="skills" eyebrow="Technical Skills" title="Tech I Work With">
          <Skills />
        </Section>

        {/* About Tejas Bansal & TJCR */}
        <Section id="about" eyebrow="About Tejas" title="A developer who builds for business outcomes">
          <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Section>

        {/* Enterprise Experience */}
        <Section id="experience" eyebrow="Enterprise Background" title="Engineering Experience">
          <Experience />
        </Section>

        {/* FAQ */}
        <Section id="faq" eyebrow="FAQ" title="Freelancing & Process Questions">
          <FaqSection />
        </Section>

        {/* Contact & Hire CTA */}
        <Section id="contact" eyebrow="Hire Me" title="Let's build something extraordinary">
          <Contact />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
