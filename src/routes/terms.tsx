import { createFileRoute, Link } from "@tanstack/react-router";
import { profile } from "@/data/portfolio";

const title = "Terms & Conditions | Tejas Bansal — Freelance Website Developer";
const description =
  "Terms for using tjcr.in and for freelance website development, API integration and automation engagements with Tejas Bansal.";

export const Route = createFileRoute("/terms")({
  component: Terms,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
});

function Terms() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-20">
      <Link to="/" className="text-sm text-primary hover:underline">
        ← Back home
      </Link>
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">Terms &amp; Conditions</h1>
      <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground">
        <h2 className="text-lg font-semibold text-foreground">Use of this website</h2>
        <p>
          The content here is provided for information about my freelance services. Text, code
          samples and design on this site remain my property unless stated otherwise.
        </p>
        <h2 className="text-lg font-semibold text-foreground">Enquiries and quotes</h2>
        <p>
          Submitting the contact form starts a conversation; it does not create a contract. Scope,
          timeline, pricing and payment terms are agreed in writing before any project begins.
        </p>
        <h2 className="text-lg font-semibold text-foreground">Project work</h2>
        <p>
          Deliverables, revisions and ownership of the final code are defined per engagement.
          Third-party services used in a project (hosting, APIs, payment gateways) are governed by
          their own terms and billed by their providers.
        </p>
        <h2 className="text-lg font-semibold text-foreground">Liability</h2>
        <p>
          Information on this site is provided as-is without warranties. I am not liable for any
          loss arising from reliance on it.
        </p>
        <h2 className="text-lg font-semibold text-foreground">Contact</h2>
        <p>Questions about these terms? Email {profile.email}.</p>
      </div>
    </main>
  );
}
