import { Link } from "@tanstack/react-router";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border/60 px-5 py-9">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 text-center text-xs text-muted-foreground">
        <p>Copyright © 2026 {profile.name}</p>
        <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-4">
          <Link to="/privacy-policy" className="transition-colors hover:text-primary">
            Privacy Policy
          </Link>
          <Link to="/terms" className="transition-colors hover:text-primary">
            Terms &amp; Conditions
          </Link>
        </nav>
        <p>Built with React + Tailwind CSS</p>
      </div>
    </footer>
  );
}
