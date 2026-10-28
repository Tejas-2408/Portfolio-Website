import { Sparkles, Zap, Palette, Rocket, Check, ArrowRight } from "lucide-react";
import { vibeWorkflow } from "@/data/portfolio";

const stepIcons = [Sparkles, Zap, Palette, Rocket];

export function Experience() {
  return (
    <div className="space-y-6">
      <div className="grid gap-5 md:grid-cols-2">
        {vibeWorkflow.map((step, idx) => {
          const Icon = stepIcons[idx] || Sparkles;
          return (
            <article
              key={step.step}
              className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/50"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-border/50">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon size={20} />
                    </span>
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-primary">
                        Phase {step.step}
                      </span>
                      <h3 className="text-base font-bold tracking-tight text-foreground">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <span className="rounded-full border border-border bg-secondary/80 px-2.5 py-1 text-xs font-semibold text-secondary-foreground">
                    {step.timeline}
                  </span>
                </div>

                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </div>

              <div className="mt-5 flex items-center gap-2 pt-2 text-[11px] font-medium text-primary">
                <Check size={14} className="text-emerald-500" />
                <span>Zero fluff • Transparent commits • Direct ownership</span>
              </div>
            </article>
          );
        })}
      </div>

      <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-semibold text-foreground">
            Have a project, MVP, or idea you want to vibe code?
          </h4>
          <p className="text-xs text-muted-foreground mt-0.5">
            Turn your concept into a live, interactive web app in days.
          </p>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-glow hover:-translate-y-0.5 transition-transform shrink-0"
        >
          <span>Discuss Your Timeline</span>
          <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
}
