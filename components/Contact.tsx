import { portfolioData } from "@/data/portfolio";
import { Mail, ArrowUpRight } from "lucide-react";

export function Contact() {
  const { contact } = portfolioData;

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-10 sm:mb-16">
        <span className="font-mono text-xs text-accent uppercase tracking-widest" aria-hidden="true">
          {"07 //"}
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground uppercase">
          Contact
        </h2>
      </div>

      {/* Main Editorial Block */}
      <div className="border border-border bg-muted/20 p-6 sm:p-12 lg:p-16">
        <div className="max-w-2xl space-y-6">
          <span className="font-mono text-xs text-accent uppercase tracking-widest">
            Direct Inquiries
          </span>
          <h3 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.05]">
            LET&apos;S BUILD SOMETHING.
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-foreground/80 leading-relaxed font-normal">
            Have an idea, opportunity, or project you&apos;d like to discuss? Feel free to reach out.
          </p>

          {/* Direct Email Action */}
          <div className="pt-3">
            <a
              href={`mailto:${contact.email}`}
              aria-label={`Send an email to ${portfolioData.name} at ${contact.email}`}
              className="inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3.5 sm:py-4 bg-foreground text-background font-mono text-xs sm:text-sm uppercase tracking-wider font-semibold hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none transition-colors max-w-full break-words"
            >
              <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span className="break-all sm:break-normal">{contact.email}</span>
              <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
            </a>
          </div>

          {/* Social Links Bar */}
          <div className="pt-6 sm:pt-8 border-t border-border flex flex-wrap items-center gap-4 sm:gap-6 text-sm">
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider font-medium">
              Network:
            </span>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Akash Prabhu on GitHub (opens in a new tab)"
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-foreground hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none transition-colors font-medium"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Akash Prabhu on LinkedIn (opens in a new tab)"
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-foreground hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none transition-colors font-medium"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
