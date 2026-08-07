import { createFileRoute, Link } from "@tanstack/react-router";
import { profile } from "@/data/portfolio";

const title = "Privacy Policy | Tejas Bansal — Freelance Website Developer";
const description =
  "How Tejas Bansal collects, uses and protects the information you submit through the contact form on tjcr.in.";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicy,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy-policy" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
});

function PrivacyPolicy() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-20">
      <Link to="/" className="text-sm text-primary hover:underline">
        ← Back home
      </Link>
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">Privacy Policy</h1>
      <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground">
        <p>
          This website is a personal portfolio. It does not use accounts, tracking profiles or
          advertising networks.
        </p>
        <h2 className="text-lg font-semibold text-foreground">Information I collect</h2>
        <p>
          When you submit the contact form I receive the name, company, email, selected service and
          message you enter. The form is delivered by FormSubmit, which forwards the submission to my
          email inbox.
        </p>
        <h2 className="text-lg font-semibold text-foreground">How I use it</h2>
        <p>
          Only to reply to your enquiry and discuss potential work. I do not sell or share your
          details with third parties.
        </p>
        <h2 className="text-lg font-semibold text-foreground">Your choices</h2>
        <p>
          You can ask me to delete any message you sent by writing to {profile.email}. I keep
          enquiries only as long as needed for the conversation.
        </p>
      </div>
    </main>
  );
}
