import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {skillGroups.map((group) => (
        <div
          key={group.title}
          className="rounded-2xl border border-border bg-card p-6 shadow-card"
        >
          <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">
            {group.title}
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-lg border border-border bg-secondary px-2.5 py-1.5 text-xs text-secondary-foreground"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
