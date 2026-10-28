import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, ExternalLink, Sparkles } from "lucide-react";
import { navItems, profile, links } from "@/data/portfolio";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100)));
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    if (href === "#client-work") {
      window.dispatchEvent(new CustomEvent("tab-select", { detail: "client" }));
    } else if (href === "#my-builds") {
      window.dispatchEvent(new CustomEvent("tab-select", { detail: "products" }));
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      {/* Scroll reading progress bar */}
      <div
        className="h-[2.5px] bg-primary transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-label="Page reading progress"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3"
      >
        <a href="#top" className="group flex items-center gap-2.5 font-semibold tracking-tight">
          <span className="flex size-7 items-center justify-center rounded-lg bg-primary/15 font-mono text-xs font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            TJ
          </span>
          <div className="flex items-center gap-1.5 text-sm font-semibold tracking-tight">
            <span>TJCR</span>
            <span className="hidden text-muted-foreground sm:inline">•</span>
            <span className="hidden text-xs font-medium text-muted-foreground sm:inline">
              Tejas Creatives
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => handleNavClick(item.href)}
              className="rounded-md px-3 py-1.5 text-xs lg:text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2">
          {links.fiverr && (
            <a
              href={links.fiverr}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white transition-colors"
            >
              <span>Fiverr Gig</span>
              <ExternalLink size={12} />
            </a>
          )}

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-primary px-3.5 py-1.5 text-xs font-semibold text-primary-foreground shadow-glow hover:-translate-y-0.5 transition-transform"
          >
            Hire Me
          </a>

          <button
            type="button"
            onClick={() => setLight((v) => !v)}
            aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
            className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
          >
            {light ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary md:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <div className="mx-auto flex max-w-5xl flex-col px-5 py-4 gap-1.5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
              >
                {item.label}
              </a>
            ))}

            <div className="pt-3 mt-2 border-t border-border/60 flex items-center gap-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex-1 text-center rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground"
              >
                Hire Me Directly
              </a>
              {links.fiverr && (
                <a
                  href={links.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400"
                >
                  Order on Fiverr
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
