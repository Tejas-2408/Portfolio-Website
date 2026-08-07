import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

export function Section({
  id,
  title,
  eyebrow,
  children,
}: {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
}) {
  const reveal = useReveal<HTMLElement>();

  return (
    <section
      id={id}
      ref={reveal.ref}
      className={`mx-auto max-w-5xl px-5 py-16 sm:py-20 ${reveal.className}`}
    >
      {eyebrow && (
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}
