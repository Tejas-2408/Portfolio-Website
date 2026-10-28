import { useState } from "react";
import {
  ArrowRight,
  MapPin,
  Mail,
  Copy,
  Check,
  Sparkles,
  Zap,
  Globe,
  ExternalLink,
  Code2,
} from "lucide-react";
import { toast } from "sonner";
import { profile, links, freelanceGuarantees } from "@/data/portfolio";
import { SocialLinks } from "./SocialLinks";

export function Hero() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCopy = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(email);
      toast.success("Email copied to clipboard!", { description: email });
      setTimeout(() => setCopiedEmail(null), 2000);
    } catch {
      toast.info(`Contact: ${email}`);
    }
  };

  return (
    <section
      id="top"
      className="grid-backdrop flex min-h-[92svh] items-center border-b border-border/60 px-5 pt-28 pb-20"
    >
      <div className="mx-auto w-full max-w-5xl">
        {/* Vibe Status Badges */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
            <Sparkles size={13} className="text-primary animate-pulse" aria-hidden="true" />
            Vibe Coding &amp; Full-Stack Freelancer
          </span>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3.5 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
            {profile.availability}
          </p>
        </div>

        {/* Hero Title */}
        <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl">
          <span className="text-gradient">{profile.name}</span>
          <span className="mt-3 block text-2xl font-medium text-muted-foreground sm:text-3xl md:text-4xl">
            Building fast, aesthetic web apps for{" "}
            <span className="font-semibold text-foreground">startups &amp; founders</span>.
          </span>
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {profile.heroSubtitle}
        </p>

        {/* Quick Info & Location */}
        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5 font-medium text-foreground">
            <MapPin size={15} className="text-primary" aria-hidden="true" />
            {profile.location}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Zap size={15} className="text-amber-400" aria-hidden="true" />
            3–7 Day Turnaround
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Globe size={15} className="text-sky-400" aria-hidden="true" />
            Remote Worldwide
          </span>
        </div>

        {/* CTA Actions */}
        <div className="mt-9 flex flex-wrap items-center gap-3.5">
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
            href="#client-work"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:border-primary/60 hover:text-primary"
          >
            Delivered Work
          </a>

          <a
            href="#my-builds"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:border-primary/60 hover:text-primary"
          >
            <Code2 size={15} />
            My Builds
          </a>
        </div>

        {/* Dual Email Quick Actions */}
        <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-muted-foreground">Direct Emails:</span>
          <button
            type="button"
            onClick={() => handleCopy(profile.professionalEmail)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card/80 px-2.5 py-1 text-xs font-mono text-foreground hover:border-primary hover:text-primary transition-colors"
          >
            <Mail size={12} className="text-primary" />
            <span>{profile.professionalEmail}</span>
            {copiedEmail === profile.professionalEmail ? (
              <Check size={12} className="text-emerald-500" />
            ) : (
              <Copy size={12} className="text-muted-foreground" />
            )}
          </button>
          <button
            type="button"
            onClick={() => handleCopy(profile.personalEmail)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card/80 px-2.5 py-1 text-xs font-mono text-muted-foreground hover:border-primary hover:text-primary transition-colors"
          >
            <span>{profile.personalEmail}</span>
            {copiedEmail === profile.personalEmail ? (
              <Check size={12} className="text-emerald-500" />
            ) : (
              <Copy size={12} className="text-muted-foreground" />
            )}
          </button>
        </div>

        {/* Vibe Guarantees / Trust Badges */}
        <div className="mt-12 grid grid-cols-2 gap-3.5 sm:grid-cols-4 border-t border-border/50 pt-8">
          {freelanceGuarantees.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border/60 bg-card/50 p-4 transition-all hover:border-primary/40 hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                <span className="flex size-4 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                  <Check size={12} />
                </span>
                <span>{item.title}</span>
              </div>
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Socials */}
        <div className="mt-8">
          <SocialLinks variant="outline" />
        </div>
      </div>
    </section>
  );
}
