import { ArrowRight, MapPin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import { SocialLinks } from "./SocialLinks";

export function Hero() {
  return (
    <section
      id="top"
      className="grid-backdrop flex min-h-[92svh] items-center border-b border-border/60 px-5 pt-24 pb-16"
    >
      <div className="mx-auto w-full max-w-5xl">
        <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
          <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
          {profile.availability}
        </p>

        <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          <span className="text-gradient">{profile.name}</span>
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
        </div>

        <div className="mt-8">
          <SocialLinks variant="outline" />
        </div>
      </div>
    </section>
  );
}
