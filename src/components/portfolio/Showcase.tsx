import { useEffect, useState } from "react";
import { ExternalLink, Quote, Star, Loader2 } from "lucide-react";
import { freelanceWork, testimonialsConfig } from "@/data/portfolio";
import { fetchTestimonials, type Testimonial } from "@/lib/testimonials";

export function Showcase() {
  return (
    <div className="space-y-14">
      <FreelanceWork />
      <Testimonials />
    </div>
  );
}

function FreelanceWork() {
  return (
    <div>
      <h3 className="text-lg font-semibold tracking-tight">Live client work</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Websites and tools shipped for clients — click through to see them live.
      </p>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        {freelanceWork.map((item) => (
          <a
            key={item.url}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/50"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-primary">
                  {item.client}
                </p>
                <h4 className="mt-1 text-base font-semibold tracking-tight">{item.title}</h4>
              </div>
              <ExternalLink
                size={16}
                className="mt-1 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                aria-hidden="true"
              />
            </div>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </div>
  );
}

type LoadState = "idle" | "loading" | "loaded" | "empty" | "error";

function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [state, setState] = useState<LoadState>("idle");

  useEffect(() => {
    const csvUrl = testimonialsConfig.testimonialsSheetCsvUrl;
    if (!csvUrl) {
      setState("empty");
      return;
    }

    let cancelled = false;
    setState("loading");

    fetchTestimonials(csvUrl)
      .then((results) => {
        if (cancelled) return;
        setTestimonials(results);
        setState(results.length > 0 ? "loaded" : "empty");
      })
      .catch(() => {
        if (!cancelled) setState("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div>
      <h3 className="text-lg font-semibold tracking-tight">Client testimonials</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Synced live from a Google Sheet — every new review shows up here automatically.
      </p>

      <div className="mt-5">
        {state === "loading" && (
          <div className="flex items-center gap-2 rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
            <Loader2 size={16} className="animate-spin" aria-hidden="true" />
            Loading testimonials…
          </div>
        )}

        {state === "error" && (
          <div className="rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
            Couldn't load testimonials right now — please check back soon.
          </div>
        )}

        {state === "empty" && (
          <div className="rounded-2xl border border-dashed border-border bg-card p-6 text-sm text-muted-foreground">
            No testimonials yet. Connect a Google Sheet in{" "}
            <code className="rounded bg-secondary px-1.5 py-0.5 text-xs">
              src/data/portfolio.ts
            </code>{" "}
            to display client reviews here — see README.md for setup steps.
          </div>
        )}

        {state === "loaded" && (
          <div className="grid gap-5 sm:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <figure
                key={`${testimonial.name}-${index}`}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card"
              >
                <Quote size={20} className="text-primary/60" aria-hidden="true" />

                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {testimonial.quote}
                </blockquote>

                {testimonial.rating && (
                  <div
                    className="mt-4 flex gap-0.5"
                    aria-label={`${testimonial.rating} out of 5 stars`}
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={
                          i < testimonial.rating!
                            ? "fill-primary text-primary"
                            : "text-muted-foreground/30"
                        }
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                )}

                <figcaption className="mt-4 flex items-center gap-3">
                  {testimonial.avatarUrl ? (
                    <img
                      src={testimonial.avatarUrl}
                      alt=""
                      className="h-9 w-9 rounded-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary">
                      {testimonial.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-medium">{testimonial.name}</p>
                    {(testimonial.role || testimonial.company) && (
                      <p className="text-xs text-muted-foreground">
                        {[testimonial.role, testimonial.company].filter(Boolean).join(" · ")}
                      </p>
                    )}
                  </div>
                  {testimonial.projectUrl && (
                    <a
                      href={testimonial.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto text-muted-foreground transition-colors hover:text-primary"
                      aria-label={`View project for ${testimonial.name}`}
                    >
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
