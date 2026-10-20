import { useState } from "react";
import {
  ArrowRight,
  MapPin,
  Mail,
  Copy,
  Check,
  Sparkles,
  Zap,
  ShieldCheck,
  Star,
  ExternalLink,
} from "lucide-react";
import { toast } from "sonner";
import { profile, links, freelanceGuarantees } from "@/data/portfolio";
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
            Freelance Developer for{" "}
            <span className="font-semibold text-foreground">Fast Websites, E-Commerce &amp; AI Tools</span>
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

        {/* CTA Buttons */}
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
          >
            Start a Project
            <ArrowRight size={16} aria-hidden="true" />
          </a>

          {links.fiverr && (
            <a
              href={links.fiverr}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-2.5 text-sm font-semibold text-emerald-600 dark:text-emerald-400 transition-colors hover:bg-emerald-500 hover:text-white"
            >
              <span>Hire on Fiverr</span>
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          )}

          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:border-primary/60 hover:text-primary"
          >
            View Client Work
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

        {/* Freelance Trust Pillars */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 border-t border-border/50 pt-8">
          {freelanceGuarantees.map((item) => (
            <div key={item.title} className="rounded-xl border border-border/60 bg-card/40 p-3.5">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                <Check size={13} className="text-emerald-500 shrink-0" />
                <span>{item.title}</span>
              </div>
              <p className="mt-1 text-[11px] text-muted-foreground leading-normal">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <SocialLinks variant="outline" />
        </div>
      </div>
    </section>
  );
}
