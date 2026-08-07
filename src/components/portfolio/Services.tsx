import { Globe, Plug, Bot, Building2, Gauge, Wrench, type LucideIcon } from "lucide-react";
import { services } from "@/data/portfolio";

const icons: Record<string, LucideIcon> = { Globe, Plug, Bot, Building2, Gauge, Wrench };

export function Services() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => {
        const Icon = icons[service.icon] ?? Globe;
        return (
          <article
            key={service.title}
            className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/50"
          >
            <span className="inline-flex rounded-xl border border-border bg-secondary p-3 text-primary">
              <Icon size={20} aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-base font-semibold tracking-tight">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {service.description}
            </p>
          </article>
        );
      })}
    </div>
  );
}
