import { useState } from "react";
import { Mail, Loader2, CheckCircle2, MapPin, Copy, Check, ExternalLink, Globe, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { profile, serviceOptions, links } from "@/data/portfolio";
import { SocialLinks } from "./SocialLinks";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCopy = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(email);
      toast.success("Email copied to clipboard!", { description: email });
      setTimeout(() => setCopiedEmail(null), 2000);
    } catch {
      toast.info(`Email: ${email}`);
    }
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.professionalEmail}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!response.ok) throw new Error("Request failed");
      form.reset();
      setStatus("sent");
      toast.success("Message sent successfully!", {
        description: "Thanks for reaching out! I will respond within 24 hours.",
      });
    } catch {
      setStatus("error");
      toast.error(`Could not send message. Please write to ${profile.professionalEmail} directly.`);
    }
  }

  const fieldClass =
    "w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-xs sm:text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      {/* Contact Form */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-card">
        {status === "sent" ? (
          <div className="flex flex-col items-start gap-3 py-6">
            <CheckCircle2 size={32} className="text-emerald-500" aria-hidden="true" />
            <h3 className="text-base font-semibold">Thanks — your message is on its way!</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              I'll get back to you at your email address, usually within a few hours.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-3 rounded-xl border border-border px-4 py-2 text-xs sm:text-sm font-medium transition-colors hover:border-primary/60 hover:text-primary"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
            <input type="hidden" name="_subject" value="New freelance enquiry from tjcr.in" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" className="hidden" tabIndex={-1} aria-hidden="true" />

            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs font-medium">
                Your Name *
              </label>
              <input id="name" name="name" required maxLength={100} placeholder="Alex Morgan" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="company" className="mb-1.5 block text-xs font-medium">
                Brand / Organization
              </label>
              <input id="company" name="company" maxLength={100} placeholder="Acme Studio" className={fieldClass} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="mb-1.5 block text-xs font-medium">
                Your Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={255}
                placeholder="alex@example.com"
                className={fieldClass}
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="service" className="mb-1.5 block text-xs font-medium">
                Project Type / Requirement *
              </label>
              <select id="service" name="service" required className={fieldClass} defaultValue="">
                <option value="" disabled>
                  Select what you'd like to build
                </option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-1.5 block text-xs font-medium">
                Project Vision &amp; Details *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                maxLength={2000}
                placeholder="Tell me about your vibe, reference sites, target launch date, and budget..."
                className={fieldClass}
              />
            </div>

            {status === "error" && (
              <p role="alert" className="text-xs sm:text-sm text-destructive sm:col-span-2">
                Something went wrong sending your message. Please email me directly at{" "}
                {profile.professionalEmail}.
              </p>
            )}

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5 disabled:opacity-70"
              >
                {status === "sending" && (
                  <Loader2 size={15} className="animate-spin" aria-hidden="true" />
                )}
                {status === "sending" ? "Sending..." : "Send Project Enquiry"}
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Direct Contact & Details */}
      <div className="space-y-5">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-card">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
            <Sparkles size={14} />
            Direct Contact &amp; Inquiries
          </div>
          <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
            Tejas Creatives (TJCR) • Available for freelance contracts &amp; vibe coding projects worldwide.
          </p>

          <div className="mt-5 space-y-3">
            {/* Professional Email */}
            <div className="flex items-center justify-between gap-2 rounded-xl border border-border bg-secondary/40 p-3">
              <div>
                <span className="block text-[10px] font-medium uppercase tracking-wider text-primary">
                  Professional Email
                </span>
                <a
                  href={`mailto:${profile.professionalEmail}`}
                  className="text-xs sm:text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {profile.professionalEmail}
                </a>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(profile.professionalEmail)}
                aria-label="Copy professional email"
                className="rounded-lg border border-border p-1.5 text-muted-foreground hover:border-primary/60 hover:text-primary transition-colors"
              >
                {copiedEmail === profile.professionalEmail ? (
                  <Check size={14} className="text-emerald-500" />
                ) : (
                  <Copy size={14} />
                )}
              </button>
            </div>

            {/* Personal Email */}
            <div className="flex items-center justify-between gap-2 rounded-xl border border-border bg-secondary/40 p-3">
              <div>
                <span className="block text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  Personal Email
                </span>
                <a
                  href={`mailto:${profile.personalEmail}`}
                  className="text-xs sm:text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {profile.personalEmail}
                </a>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(profile.personalEmail)}
                aria-label="Copy personal email"
                className="rounded-lg border border-border p-1.5 text-muted-foreground hover:border-primary/60 hover:text-primary transition-colors"
              >
                {copiedEmail === profile.personalEmail ? (
                  <Check size={14} className="text-emerald-500" />
                ) : (
                  <Copy size={14} />
                )}
              </button>
            </div>

            {/* Location & Remote */}
            <div className="flex items-center gap-2 pt-1 text-xs text-muted-foreground">
              <MapPin size={14} className="text-primary shrink-0" />
              <span>{profile.location} • Available for Remote Contracts Worldwide</span>
            </div>
          </div>

          {links.fiverr && (
            <div className="mt-5 pt-5 border-t border-border/50">
              <a
                href={links.fiverr}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-3.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white transition-colors"
              >
                <span>Prefer Fiverr Escrow &amp; Buyer Protection?</span>
                <ExternalLink size={14} />
              </a>
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-2.5">
            <SocialLinks variant="outline" />
          </div>
        </div>
      </div>
    </div>
  );
}
