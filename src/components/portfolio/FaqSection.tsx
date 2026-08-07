import { faqs } from "@/data/portfolio";

export function FaqSection() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {faqs.map((faq) => (
        <details
          key={faq.question}
          className="group rounded-2xl border border-border bg-card p-6 shadow-card"
        >
          <summary className="cursor-pointer list-none text-sm font-semibold tracking-tight marker:hidden">
            {faq.question}
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
