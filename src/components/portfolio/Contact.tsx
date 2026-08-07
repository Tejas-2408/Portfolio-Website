import { useState } from "react";
import { Mail, Loader2, CheckCircle2, MapPin } from "lucide-react";
import { profile, serviceOptions } from "@/data/portfolio";
import { SocialLinks } from "./SocialLinks";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!response.ok) throw new Error("Request failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const fieldClass =
    "w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";

  return (
    <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-2xl border border-border bg-card p-7 shadow-card">
        {status === "sent" ? (
          <div className="flex flex-col items-start gap-3 py-6">
            <CheckCircle2 size={30} className="text-primary" aria-hidden="true" />
            <h3 className="text-base font-semibold">Thanks — your message is on its way.</h3>
            <p className="text-sm text-muted-foreground">
              I'll get back to you at the email you provided, usually within a day.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-2 rounded-xl border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary/60 hover:text-primary"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
            <input type="hidden" name="_subject" value="New enquiry from tjcr.in" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" className="hidden" tabIndex={-1} aria-hidden="true" />

            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs font-medium">
                Name
              </label>
              <input id="name" name="name" required maxLength={100} className={fieldClass} />
            </div>
            <div>
              <label htmlFor="company" className="mb-1.5 block text-xs font-medium">
                Company
              </label>
              <input id="company" name="company" maxLength={100} className={fieldClass} />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={255}
                className={fieldClass}
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="service" className="mb-1.5 block text-xs font-medium">
                Service required
              </label>
              <select id="service" name="service" required className={fieldClass} defaultValue="">
                <option value="" disabled>
                  Select a service
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
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                maxLength={2000}
                className={fieldClass}
              />
            </div>

            {status === "error" && (
              <p role="alert" className="text-sm text-destructive sm:col-span-2">
                Something went wrong sending your message. Please email me directly at{" "}
                {profile.email}.
              </p>
            )}

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5 disabled:opacity-70"
              >
                {status === "sending" && (
                  <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                )}
                {status === "sending" ? "Sending..." : "Send message"}
              </button>
            </div>
          </form>
        )}
      </div>

      <div className="space-y-5">
        <div className="rounded-2xl border border-border bg-card p-7 shadow-card">
          <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">
            Reach me directly
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail size={16} aria-hidden="true" />
                {profile.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-2 text-muted-foreground">
              <MapPin size={16} aria-hidden="true" />
              {profile.location}
            </li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-3">
            <SocialLinks variant="outline" />
          </div>
        </div>
      </div>
    </div>
  );
}
