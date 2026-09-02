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
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight">Client testimonials</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Authentic feedback from founders and engineering teams.
          </p>
        </div>

        {testimonialsConfig.reviewFormUrl && (
          <a
            href={testimonialsConfig.reviewFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-3.5 py-2 text-xs font-medium text-foreground transition-colors hover:border-primary/60 hover:text-primary"
          >
            <Star size={13} className="text-primary" aria-hidden="true" />
            Submit a client review
          </a>
        )}
      </div>

      <div className="mt-6">
        {state === "loading" && (
          <div className="flex items-center gap-2 rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
            <Loader2 size={16} className="animate-spin" aria-hidden="true" />
            Loading testimonials…
          </div>
        )}

        {state === "error" && (
          <div className="rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
            Couldn't load external testimonials right now — please check back soon.
          </div>
        )}

        {state === "empty" && (
          <div className="rounded-2xl border border-dashed border-border bg-card p-6 text-sm text-muted-foreground">
            No testimonials found yet. Share your experience with Tejas Creatives by submitting a review!
          </div>
        )}

        {state === "loaded" && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <figure
                key={`${testimonial.name}-${index}`}
                className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <Quote size={20} className="text-primary/60" aria-hidden="true" />
                    {testimonial.rating && (
                      <div
                        className="flex gap-0.5"
                        aria-label={`${testimonial.rating} out of 5 stars`}
                      >
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            size={13}
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
                  </div>

                  <blockquote className="mt-3.5 text-sm leading-relaxed text-muted-foreground">
                    "{testimonial.quote}"
                  </blockquote>

                  {testimonial.projectName && (
                    <div className="mt-3 inline-block rounded-md bg-secondary/80 px-2 py-0.5 text-[11px] font-medium text-secondary-foreground">
                      {testimonial.projectName}
                    </div>
                  )}
                </div>

                <figcaption className="mt-5 flex items-center gap-3 border-t border-border/40 pt-4">
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
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{testimonial.name}</p>
                    {(testimonial.role || testimonial.company) && (
                      <p className="truncate text-xs text-muted-foreground">
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
