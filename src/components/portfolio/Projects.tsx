import { useState } from "react";
import { ExternalLink, Github, Check, Star, MessageSquare, Quote } from "lucide-react";
import { projects, testimonialsConfig } from "@/data/portfolio";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Websites & Apps" },
  { id: "ai", label: "AI Automation" },
  { id: "api", label: "APIs & Testing" },
  { id: "tool", label: "Developer Tools" },
] as const;

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-8">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-xl px-3.5 py-1.5 text-xs font-medium transition-all ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "border border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {filteredProjects.map((project) => (
          <article
            key={project.id || project.name}
            className={`flex flex-col justify-between rounded-2xl border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/50 ${
              project.featured && activeCategory === "all"
                ? "border-primary/40 lg:col-span-2"
                : "border-border"
            }`}
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <h3 className="text-lg font-semibold tracking-tight">{project.name}</h3>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary/15 px-2.5 py-0.5 text-xs font-medium text-primary">
                      <Star size={12} aria-hidden="true" />
                      Featured
                    </span>
                  )}
                </div>
                {project.review && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/5 px-2 py-0.5 text-xs font-medium text-primary">
                    <Star size={11} className="fill-primary text-primary" aria-hidden="true" />
                    5.0 Client Rating
                  </span>
                )}
              </div>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <Check size={14} className="text-primary" aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Per-Project Review Section */}
            {project.review && (
              <div className="mt-5 rounded-xl border border-border/80 bg-secondary/40 p-4">
                <div className="flex items-start gap-2.5">
                  <Quote size={16} className="shrink-0 text-primary/70" aria-hidden="true" />
                  <div className="space-y-1">
                    <p className="text-xs italic leading-relaxed text-muted-foreground">
                      "{project.review.quote}"
                    </p>
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                      <p className="text-[11px] font-medium text-foreground">
                        {project.review.author}
                        {project.review.role && (
                          <span className="font-normal text-muted-foreground">
                            {" "}
                            — {project.review.role}
                          </span>
                        )}
                      </p>
                      <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                        {Array.from({ length: project.review.rating }).map((_, i) => (
                          <Star
                            key={i}
                            size={11}
                            className="fill-primary text-primary"
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Action CTAs */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border/50 pt-5">
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-secondary px-3.5 py-2 text-xs font-medium transition-colors hover:border-primary/60 hover:text-primary"
                >
                  <Github size={14} aria-hidden="true" />
                  GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-3.5 py-2 text-xs font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
                  >
                    Live demo
                    <ExternalLink size={13} aria-hidden="true" />
                  </a>
                )}
              </div>

              {testimonialsConfig.reviewFormUrl && (
                <a
                  href={testimonialsConfig.reviewFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  <MessageSquare size={13} aria-hidden="true" />
                  Leave a review
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
