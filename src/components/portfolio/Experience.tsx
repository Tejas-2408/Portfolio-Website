import { Briefcase, Check } from "lucide-react";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <div className="space-y-5">
      {experience.map((job) => (
        <article
          key={`${job.company}-${job.role}`}
          className="rounded-2xl border border-border bg-card p-7 shadow-card"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <span className="rounded-xl border border-border bg-secondary p-3 text-primary">
                <Briefcase size={20} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-base font-semibold tracking-tight">{job.role}</h3>
                <p className="mt-1 text-sm text-primary">{job.company}</p>
              </div>
            </div>
            <span className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">
              {job.period}
            </span>
          </div>

          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {job.points.map((point) => (
              <li key={point} className="flex gap-2 text-sm text-muted-foreground">
                <Check size={15} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
