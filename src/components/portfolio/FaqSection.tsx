import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/portfolio";

export function FaqSection() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {faqs.map((faq) => (
        <details
          key={faq.question}
          className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all open:border-primary/40 open:bg-secondary/20"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold tracking-tight select-none marker:hidden">
            <span>{faq.question}</span>
            <ChevronDown
              size={17}
              className="shrink-0 text-muted-foreground transition-transform duration-200 ease-out group-open:rotate-180 group-hover:text-primary"
              aria-hidden="true"
            />
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
