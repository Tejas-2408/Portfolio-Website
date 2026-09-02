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

const title = "Tejas Bansal | TJCR (Tejas Creatives) — Freelance Web Developer & API Specialist";
const description =
  "Official website of Tejas Creatives (TJCR) by Tejas Bansal — freelance website developer, API integration specialist, and AI automation builder in Haryana, India. React websites, custom APIs, and scalable automation.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "tjcr, tejas creatives, tejas bansal, tejas, freelance website developer, API integration specialist, React developer, frontend developer, business website developer, website developer India, website developer Haryana, website freelancer, React freelancer, SEO website developer, AI automation developer, TJCR portfolio",
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
              sameAs: [links.github, links.linkedin, links.leetcode],
              description:
                "Tejas Bansal is a freelance website developer and API specialist, and founder of Tejas Creatives (TJCR).",
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
              sameAs: [links.github, links.linkedin, links.leetcode],
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
              sameAs: [links.github, links.linkedin, links.leetcode],
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
                  name: "Services",
                  item: `${links.siteUrl}/#services`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Projects",
                  item: `${links.siteUrl}/#projects`,
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Reviews & Showcase",
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

        <Section id="about" eyebrow="About Tejas Creatives" title="A developer who builds for business outcomes">
          <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Section>

        <Section id="services" eyebrow="What I do" title="Services">
          <Services />
        </Section>

        <Section id="skills" eyebrow="Skills" title="Tech I work with">
          <Skills />
        </Section>

        <Section id="projects" eyebrow="Featured Work" title="Projects & Client Delivery">
          <Projects />
        </Section>

        <Section id="showcase" eyebrow="Client Reviews & Work" title="Live Sites & Client Testimonials">
          <Showcase />
        </Section>

        <Section id="experience" eyebrow="Experience" title="Enterprise background">
          <Experience />
        </Section>

        <Section id="faq" eyebrow="FAQ" title="Common questions">
          <FaqSection />
        </Section>

        <Section id="contact" eyebrow="Contact" title="Let's build something">
          <Contact />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
