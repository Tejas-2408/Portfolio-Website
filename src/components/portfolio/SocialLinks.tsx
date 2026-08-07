import { Github, Linkedin, Code2 } from "lucide-react";
import { links } from "@/data/portfolio";

const socials = [
  { label: "GitHub", href: links.github, Icon: Github },
  { label: "LinkedIn", href: links.linkedin, Icon: Linkedin },
  { label: "LeetCode", href: links.leetcode, Icon: Code2 },
];

export function SocialLinks({ variant = "solid" }: { variant?: "solid" | "outline" }) {
  return (
    <ul className="flex flex-wrap items-center gap-3">
      {socials.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label} profile (opens in a new tab)`}
            className={
              variant === "solid"
                ? "inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
                : "inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:border-primary/60 hover:text-primary"
            }
          >
            <Icon size={17} aria-hidden="true" />
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
