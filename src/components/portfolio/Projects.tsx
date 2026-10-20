import { useState } from "react";
import {
  ExternalLink,
  Github,
  Linkedin,
  Puzzle,
  Check,
  Star,
  MessageSquare,
  Quote,
  ShieldCheck,
  ShoppingBag,
  Globe,
  Plus,
  Send,
} from "lucide-react";
import { toast } from "sonner";
import {
  clientProjects,
  liveProducts,
  testimonialsConfig,
  type ClientProject,
  type LiveProduct,
  type ProductReview,
} from "@/data/portfolio";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function Projects() {
  const [activeMainTab, setActiveMainTab] = useState<"client" | "products">("client");
  const [clientFilter, setClientFilter] = useState<"all" | "static" | "ecommerce">("all");

  // Keep state for live products so users can add their own reviews in the session
  const [productsData, setProductsData] = useState<LiveProduct[]>(liveProducts);

  const filteredClientProjects =
    clientFilter === "all"
      ? clientProjects
      : clientProjects.filter((p) => p.type === clientFilter);

  const handleAddReview = (productId: string, newReview: ProductReview) => {
    setProductsData((prev) =>
      prev.map((prod) =>
        prod.id === productId
          ? {
              ...prod,
              reviews: [newReview, ...prod.reviews],
            }
          : prod,
      ),
    );
    toast.success("Thank you for your review!", {
      description: `Your feedback for ${productId === "mailgenie" ? "MailGenie" : "Epoch Time Converter"} has been posted.`,
    });
  };

  return (
    <div className="space-y-8">
      {/* Primary Section Switcher Tabs */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-border/80 pb-4">
        <div className="inline-flex rounded-2xl border border-border bg-card/80 p-1.5 shadow-sm">
          <button
            type="button"
            onClick={() => setActiveMainTab("client")}
            className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
              activeMainTab === "client"
                ? "bg-primary text-primary-foreground shadow-glow"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <ShieldCheck size={16} aria-hidden="true" />
            Client Work (Delivered)
            <span className="ml-1 rounded-full bg-primary-foreground/20 px-2 py-0.5 text-[11px] font-bold">
              {clientProjects.length}
            </span>
          </button>
          <button
            type="button"
            onClick={() => setActiveMainTab("products")}
            className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
              activeMainTab === "products"
                ? "bg-primary text-primary-foreground shadow-glow"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Puzzle size={16} aria-hidden="true" />
            Live Products &amp; Tools
            <span className="ml-1 rounded-full bg-primary/20 px-2 py-0.5 text-[11px] font-bold text-primary">
              Reviewable
            </span>
          </button>
        </div>

        <div className="text-xs text-muted-foreground">
          {activeMainTab === "client" ? (
            <span className="inline-flex items-center gap-1.5 font-medium text-emerald-500">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              Verified Client Deliveries • 100% 5-Star Reviews
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 font-medium text-primary">
              <MessageSquare size={13} />
              Open for Community Feedback &amp; Ratings
            </span>
          )}
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          TAB 1: CLIENT DELIVERIES (STATIC SITES & E-COMMERCE)
          Verified site owner testimonials only. Public rating disabled.
      ───────────────────────────────────────────────────────────── */}
      {activeMainTab === "client" && (
        <div className="space-y-6">
          {/* Sub-filters for Client Work */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-muted-foreground mr-1">Filter by:</span>
            {[
              { id: "all", label: "All Client Work" },
              { id: "static", label: "Static Corporate & Portfolio Sites" },
              { id: "ecommerce", label: "E-Commerce Stores" },
            ].map((sub) => {
              const isActive = clientFilter === sub.id;
              return (
                <button
                  key={sub.id}
                  type="button"
                  onClick={() => setClientFilter(sub.id as any)}
                  className={`rounded-xl px-3.5 py-1.5 text-xs font-medium transition-all ${
                    isActive
                      ? "bg-secondary text-foreground border border-primary/50 shadow-sm"
                      : "border border-border bg-card/60 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {sub.label}
                </button>
              );
            })}
          </div>

          {/* Client Projects Grid */}
          <div className="grid gap-6 lg:grid-cols-3">
            {filteredClientProjects.map((project) => (
              <ClientProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="rounded-2xl border border-dashed border-border bg-card/40 p-5 text-center text-xs text-muted-foreground">
            🔒 Note: Testimonials above are authenticated directly by the respective site owners of{" "}
            <strong className="text-foreground">akpsassociates.com</strong>,{" "}
            <strong className="text-foreground">amritsaargold.com</strong>, and{" "}
            <strong className="text-foreground">rra-hazel.vercel.app</strong>. Public ratings and comments are disabled for private client deliveries.
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 2: LIVE PRODUCTS & TOOLS (OPEN-SOURCE & PUBLICLY REVIEWABLE)
          GitHub link, LinkedIn post link, Chrome Extension link, and Review Dialog.
      ───────────────────────────────────────────────────────────── */}
      {activeMainTab === "products" && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-foreground">
                Live Products &amp; Developer Extensions
              </h4>
              <p className="text-xs text-muted-foreground">
                Test my live web applications, inspect source code on GitHub, check LinkedIn launch updates, and leave your own review.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">
                ★ 5.0 Community Rating
              </span>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {productsData.map((product) => (
              <LiveProductCard
                key={product.id}
                product={product}
                onAddReview={(review) => handleAddReview(product.id, review)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   CLIENT PROJECT CARD
───────────────────────────────────────────────────────────── */
function ClientProjectCard({ project }: { project: ClientProject }) {
  const isEcommerce = project.type === "ecommerce";

  return (
    <article className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/50">
      <div>
        <div className="flex items-start justify-between gap-3">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
              isEcommerce
                ? "bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30"
                : "bg-primary/15 text-primary border border-primary/30"
            }`}
          >
            {isEcommerce ? <ShoppingBag size={12} /> : <Globe size={12} />}
            {project.categoryLabel}
          </span>

          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-500">
            <Check size={11} />
            Delivered &amp; Live
          </span>
        </div>

        <h3 className="mt-4 text-xl font-bold tracking-tight text-foreground">
          {project.name}
        </h3>

        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Deliverables */}
        <div className="mt-4 space-y-1.5 border-t border-border/40 pt-3">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Key Deliverables:
          </p>
          <ul className="space-y-1">
            {project.deliverables.map((item) => (
              <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                <Check size={12} className="text-primary shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Badges */}
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-md border border-border bg-secondary/80 px-2 py-0.5 text-[11px] font-medium text-secondary-foreground"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 space-y-4">
        {/* Verified Owner Testimonial */}
        <div className="rounded-xl border border-border/80 bg-secondary/30 p-4">
          <div className="flex items-center justify-between pb-2 border-b border-border/40">
            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-primary">
              <ShieldCheck size={14} className="text-primary" />
              Verified Site Owner
            </div>
            <div className="flex gap-0.5" aria-label="5 out of 5 stars">
              {Array.from({ length: project.ownerTestimonial.rating }).map((_, i) => (
                <Star key={i} size={11} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>

          <p className="mt-2 text-xs italic leading-relaxed text-muted-foreground">
            "{project.ownerTestimonial.quote}"
          </p>

          <div className="mt-3 flex items-center gap-2.5 pt-2">
            <div className="flex size-7 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
              {project.ownerTestimonial.avatarInitials || "CL"}
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground">
                {project.ownerTestimonial.author}
              </p>
              <p className="text-[10px] text-muted-foreground">
                {project.ownerTestimonial.role}
              </p>
            </div>
          </div>
        </div>

        {/* Action Button: Live Link Only */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
        >
          <span>Visit Live Website</span>
          <ExternalLink size={14} />
        </a>
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────────────────────────
   LIVE PRODUCT CARD (MAILGENIE & EPOCH CONVERTER)
   Mandatory: GitHub Link, LinkedIn Post Link, Extension/App Link.
   Interactive user review modal.
───────────────────────────────────────────────────────────── */
function LiveProductCard({
  product,
  onAddReview,
}: {
  product: LiveProduct;
  onAddReview: (review: ProductReview) => void;
}) {
  return (
    <article className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:border-primary/50">
      <div>
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="rounded-full bg-primary/15 px-2.5 py-1 text-[11px] font-semibold text-primary">
              {product.category}
            </span>
            <h3 className="mt-2.5 text-2xl font-bold tracking-tight text-foreground">
              {product.name}
            </h3>
            <p className="text-xs font-medium text-primary mt-0.5">{product.tagline}</p>
          </div>

          <span className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary/80 px-2.5 py-1 text-xs font-semibold">
            <Star size={12} className="fill-amber-400 text-amber-400" />
            5.0 ({product.reviews.length} reviews)
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>

        {/* Highlights */}
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {product.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2 text-xs text-muted-foreground">
              <Check size={13} className="text-primary shrink-0" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {/* Tech Chips */}
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {product.tech.map((t) => (
            <li
              key={t}
              className="rounded-md border border-border bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground"
            >
              {t}
            </li>
          ))}
        </ul>

        {/* 3 MANDATORY LINKS: GitHub, LinkedIn Post, Extension Link */}
        <div className="mt-6 flex flex-wrap items-center gap-2.5 border-t border-border/50 pt-5">
          {/* 1. GitHub */}
          <a
            href={product.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-secondary px-3.5 py-2 text-xs font-medium transition-colors hover:border-primary/60 hover:text-primary"
          >
            <Github size={14} />
            <span>GitHub</span>
          </a>

          {/* 2. LinkedIn Post */}
          <a
            href={product.linkedinPost}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-secondary px-3.5 py-2 text-xs font-medium text-sky-600 dark:text-sky-400 transition-colors hover:border-sky-500/60"
          >
            <Linkedin size={14} />
            <span>LinkedIn Post</span>
          </a>

          {/* 3. Extension / Web App */}
          <a
            href={product.extensionLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
          >
            <Puzzle size={14} />
            <span>
              {product.id === "mailgenie" ? "Chrome Extension" : "Open Web App"}
            </span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>

      {/* Reviews & Interactive "Leave a Review" Component */}
      <div className="mt-6 border-t border-border/60 pt-5">
        <div className="flex items-center justify-between pb-3">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
            <Quote size={14} className="text-primary" />
            User Reviews &amp; Ratings ({product.reviews.length})
          </div>

          <ReviewSubmissionModal productName={product.name} onSubmitReview={onAddReview} />
        </div>

        {/* Existing reviews */}
        <div className="space-y-2.5">
          {product.reviews.map((rev, index) => (
            <div
              key={rev.id || index}
              className="rounded-xl border border-border/60 bg-secondary/30 p-3.5"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-foreground">
                  {rev.author}{" "}
                  {rev.role && (
                    <span className="font-normal text-muted-foreground">
                      — {rev.role}
                    </span>
                  )}
                </p>
                <div className="flex gap-0.5">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} size={11} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="mt-1 text-xs italic text-muted-foreground">"{rev.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────────────────────────
   INTERACTIVE USER REVIEW MODAL DIALOG
   Allows visitors to submit reviews with instant feedback
───────────────────────────────────────────────────────────── */
function ReviewSubmissionModal({
  productName,
  onSubmitReview,
}: {
  productName: string;
  onSubmitReview: (review: ProductReview) => void;
}) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [rating, setRating] = useState(5);
  const [quote, setQuote] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !quote.trim()) {
      toast.error("Please fill in your name and review message.");
      return;
    }

    onSubmitReview({
      id: `rev-${Date.now()}`,
      author: name.trim(),
      role: role.trim() || "Verified User",
      quote: quote.trim(),
      rating,
      date: "Just now",
    });

    setName("");
    setRole("");
    setQuote("");
    setRating(5);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="inline-flex items-center gap-1.5 rounded-xl border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <Plus size={13} />
          Leave a Review
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-base font-bold">
            Write a Review for {productName}
          </DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground">
            Share your experience using this project. Your review will be published to the page.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          {/* Star Rating Picker */}
          <div>
            <label className="block text-xs font-medium mb-1.5">Rating (1 to 5 Stars)</label>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="p-1 text-muted-foreground hover:scale-110 transition-transform"
                >
                  <Star
                    size={22}
                    className={
                      star <= rating
                        ? "fill-amber-400 text-amber-400"
                        : "text-muted-foreground/30"
                    }
                  />
                </button>
              ))}
              <span className="ml-2 text-xs font-bold text-foreground">{rating}.0 / 5.0</span>
            </div>
          </div>

          <div>
            <label htmlFor="rev-name" className="block text-xs font-medium mb-1">
              Your Name *
            </label>
            <input
              id="rev-name"
              required
              maxLength={60}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Rahul Sharma"
              className="w-full rounded-xl border border-input bg-background px-3 py-2 text-xs outline-none focus:border-primary"
            />
          </div>

          <div>
            <label htmlFor="rev-role" className="block text-xs font-medium mb-1">
              Your Role / Company (Optional)
            </label>
            <input
              id="rev-role"
              maxLength={60}
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="e.g. Frontend Engineer, Product Manager"
              className="w-full rounded-xl border border-input bg-background px-3 py-2 text-xs outline-none focus:border-primary"
            />
          </div>

          <div>
            <label htmlFor="rev-quote" className="block text-xs font-medium mb-1">
              Your Review / Feedback *
            </label>
            <textarea
              id="rev-quote"
              required
              rows={3}
              maxLength={500}
              value={quote}
              onChange={(e) => setQuote(e.target.value)}
              placeholder={`How did ${productName} help your workflow?`}
              className="w-full rounded-xl border border-input bg-background px-3 py-2 text-xs outline-none focus:border-primary"
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            {testimonialsConfig.reviewFormUrl && (
              <a
                href={testimonialsConfig.reviewFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-muted-foreground hover:text-primary transition-colors"
              >
                Or submit via Google Form ↗
              </a>
            )}

            <button
              type="submit"
              className="ml-auto inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              <Send size={12} />
              Submit Review
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
