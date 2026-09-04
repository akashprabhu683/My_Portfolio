import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { ArrowDownRight, ArrowUpRight, FileDown } from "lucide-react";
import { AnimatedCodePanel } from "@/components/AnimatedCodePanel";

export function Hero() {
  return (
    <div className="flex flex-col justify-center min-h-[calc(100vh-4rem)] py-16 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Intro Copy & Actions */}
        <div className="lg:col-span-7 space-y-8">
          {/* Editorial Eyebrow */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-accent uppercase tracking-widest font-semibold">
            <span className="w-2 h-2 rounded-full bg-accent inline-block" aria-hidden="true" />
            <span>{portfolioData.professionalTitle}</span>
          </div>

          {/* Main Headline (Primary and only H1) */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[0.95]">
              {portfolioData.name}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light tracking-tight">
              Building thoughtful web interfaces &amp; scalable software.
            </p>
          </div>

          {/* Introduction Copy */}
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed max-w-2xl font-normal">
            {portfolioData.heroIntro}
          </p>

          {/* Primary Actions & Social Links */}
          <div className="space-y-6 pt-2">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="#featured-project"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 bg-foreground text-background text-xs uppercase tracking-wider font-semibold hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none transition-all duration-200"
              >
                <span>View My Work</span>
                <ArrowDownRight className="w-4 h-4" aria-hidden="true" />
              </Link>

              <a
                href={portfolioData.resumeUrl}
                download
                aria-label={`Download ${portfolioData.name}'s Resume (PDF)`}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 bg-accent/10 border border-accent/30 text-accent text-xs uppercase tracking-wider font-semibold hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none transition-all duration-200"
              >
                <FileDown className="w-4 h-4" aria-hidden="true" />
                <span>Resume / CV</span>
              </a>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 border border-border text-foreground text-xs uppercase tracking-wider font-semibold hover:border-foreground hover:bg-muted focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none transition-all duration-200"
              >
                <span>Get In Touch</span>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5 text-sm pt-2">
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                Profiles:
              </span>
              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Akash Prabhu on GitHub (opens in a new tab)"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted-foreground hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none transition-colors font-medium"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              <a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Akash Prabhu on LinkedIn (opens in a new tab)"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted-foreground hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none transition-colors font-medium"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Animated Personal-Data Code Panel */}
        <div className="lg:col-span-5 w-full">
          <AnimatedCodePanel />
        </div>
      </div>
    </div>
  );
}
