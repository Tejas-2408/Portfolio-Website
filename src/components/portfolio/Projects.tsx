import { ExternalLink, Github, Check, Star } from "lucide-react";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {projects.map((project) => (
        <article
          key={project.name}
          className={`flex flex-col rounded-2xl border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/50 ${
            project.featured ? "border-primary/40 lg:col-span-2" : "border-border"
          }`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-lg font-semibold tracking-tight">{project.name}</h3>
            {project.featured && (
              <span className="inline-flex items-center gap-1 rounded-full bg-primary/15 px-2.5 py-1 text-xs font-medium text-primary">
                <Star size={12} aria-hidden="true" />
                Featured project
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

          <ul className="mt-5 grid flex-1 gap-2 sm:grid-cols-2">
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

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-secondary px-3.5 py-2 text-sm font-medium transition-colors hover:border-primary/60 hover:text-primary"
            >
              <Github size={15} aria-hidden="true" />
              GitHub
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Live demo
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
