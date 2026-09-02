import { useState } from "react";
import { ArrowRight, MapPin, Mail, Copy, Check, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { profile } from "@/data/portfolio";
import { SocialLinks } from "./SocialLinks";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      toast.success("Email copied to clipboard!", {
        description: profile.email,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.info(`Contact: ${profile.email}`);
    }
  };

  return (
    <section
      id="top"
      className="grid-backdrop flex min-h-[92svh] items-center border-b border-border/60 px-5 pt-24 pb-16"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <Sparkles size={13} className="text-primary" aria-hidden="true" />
            TJCR • Tejas Creatives
          </span>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
            {profile.availability}
          </p>
        </div>

        <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
          <span className="text-gradient">{profile.name}</span>
          <span className="mt-2 block text-2xl font-normal text-muted-foreground sm:text-3xl">
            Founder &amp; Developer at{" "}
            <span className="font-semibold text-foreground">Tejas Creatives (TJCR)</span>
          </span>
        </h1>

        <p className="mt-4 text-sm font-medium text-primary sm:text-base">{profile.title}</p>

        <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
          {profile.heroSubtitle}
        </p>

        <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground/90">
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={14} aria-hidden="true" />
            {profile.location}
          </span>
          <span>{profile.secondaryTitle}</span>
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
          >
            Hire me
            <ArrowRight size={16} aria-hidden="true" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary/60 hover:text-primary"
          >
            <Mail size={16} aria-hidden="true" />
            Email me
          </a>
          <button
            type="button"
            onClick={handleCopyEmail}
            aria-label="Copy email address"
            className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-3.5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
          >
            {copied ? (
              <Check size={16} className="text-emerald-500" aria-hidden="true" />
            ) : (
              <Copy size={16} aria-hidden="true" />
            )}
            <span>{copied ? "Copied" : "Copy email"}</span>
          </button>
        </div>

        <div className="mt-8">
          <SocialLinks variant="outline" />
        </div>
      </div>
    </section>
  );
}
