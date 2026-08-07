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
import { profile, links, services, faqs } from "@/data/portfolio";

const title = "Freelance Website Developer & API Integration Specialist | Tejas Bansal";
const description =
  "Tejas Bansal — freelance website developer and API integration specialist in Haryana, India. React websites, AI automation, REST API integration and SEO for startups and local businesses.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "freelance website developer, API integration specialist, React developer, frontend developer, business website developer, website developer India, website developer Haryana, website freelancer, React freelancer, SEO website developer, AI automation developer",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ProfessionalService",
              "@id": `${links.siteUrl}/#business`,
              name: `${profile.name} — Freelance Website Developer`,
              description,
              url: links.siteUrl,
              email: profile.email,
              areaServed: ["India", "Worldwide"],
              sameAs: [links.github, links.linkedin, links.leetcode],
            },
            {
              "@type": "Organization",
              "@id": `${links.siteUrl}/#organization`,
              name: profile.name,
              url: links.siteUrl,
              email: profile.email,
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

        <Section id="about" eyebrow="About" title="A developer who builds for business outcomes">
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

        <Section id="projects" eyebrow="Projects" title="Featured work">
          <Projects />
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
