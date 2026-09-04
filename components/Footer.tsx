import { portfolioData } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" aria-label="Site Footer" className="w-full border-t border-border bg-background py-12">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Identity & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-xs text-muted-foreground text-center sm:text-left">
          <span className="font-semibold text-foreground tracking-tight">
            {portfolioData.name}
          </span>
          <span className="hidden sm:inline text-border" aria-hidden="true">/</span>
          <span>© {currentYear} All rights reserved.</span>
        </div>

        {/* Right: Minimal Social Links */}
        <div className="flex items-center gap-6 text-xs font-mono uppercase tracking-wider">
          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Akash Prabhu on GitHub (opens in a new tab)"
            className="text-muted-foreground hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none transition-colors inline-flex items-center gap-1"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
          </a>
          <a
            href={portfolioData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Akash Prabhu on LinkedIn (opens in a new tab)"
            className="text-muted-foreground hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none transition-colors inline-flex items-center gap-1"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
          </a>
          <a
            href={`mailto:${portfolioData.contact.email}`}
            aria-label={`Send an email to ${portfolioData.name}`}
            className="text-muted-foreground hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none transition-colors inline-flex items-center gap-1"
          >
            <span>Email</span>
            <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
