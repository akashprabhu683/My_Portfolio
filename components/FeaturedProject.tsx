import Image from "next/image";
import { portfolioData, Project } from "@/data/portfolio";
import { ExternalLink, Code2 } from "lucide-react";

export function FeaturedProject() {
  const project = portfolioData.projects.find((p) => p.featured) as Project;

  if (!project) return null;

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-10 sm:mb-16">
        <span className="font-mono text-xs text-accent uppercase tracking-widest" aria-hidden="true">
          {"03 //"}
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground uppercase">
          Featured Project
        </h2>
      </div>

      {/* Featured Project Container */}
      <div className="border border-border bg-muted/30">
        {/* Project Header Bar */}
        <div className="p-5 sm:p-8 md:p-10 border-b border-border flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-3 font-mono text-xs text-accent uppercase tracking-wider">
              <span className="px-2.5 py-1 bg-accent/10 border border-accent/20">
                {project.category}
              </span>
              {project.event && (
                <span className="text-muted-foreground">
                  {"//"} {project.event}
                </span>
              )}
            </div>
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              {project.title}
            </h3>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} live application (opens in a new tab)`}
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 bg-foreground text-background font-mono text-xs uppercase tracking-wider font-semibold hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none transition-colors w-full sm:w-auto text-center"
              >
                <span>Live Application</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code on GitHub (opens in a new tab)`}
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 border border-border bg-background text-foreground font-mono text-xs uppercase tracking-wider font-semibold hover:border-foreground hover:bg-muted focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none transition-colors w-full sm:w-auto text-center"
              >
                <Code2 className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>

        {/* Real Screenshot Visual Frame */}
        <div className="border-b border-border bg-background/50 p-3 sm:p-6 md:p-8">
          <div className="w-full bg-muted border border-border overflow-hidden">
            {/* Top Browser Bar */}
            <div className="flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-muted-foreground border-b border-border px-3.5 py-2.5 bg-background/90">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="w-2 h-2 rounded-full bg-border" aria-hidden="true" />
                <span className="w-2 h-2 rounded-full bg-border" aria-hidden="true" />
                <span className="w-2 h-2 rounded-full bg-border" aria-hidden="true" />
                <span className="ml-1.5 sm:ml-2 truncate max-w-[170px] sm:max-w-none text-foreground/70">
                  privacy-leak-detector.vercel.app
                </span>
              </div>
              <span className="uppercase text-accent text-[10px] tracking-widest font-semibold hidden xs:inline">
                Live Deployment
              </span>
            </div>

            {/* Real Project Image Asset */}
            {project.image && (
              <div className="relative w-full aspect-[16/9] bg-muted/60">
                <Image
                  src={project.image}
                  alt="Real interface screenshot of Privacy Leak Detector showing sensitivity scanner"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1152px"
                  className="object-cover object-top"
                />
              </div>
            )}
          </div>
        </div>

        {/* Project Details & Contribution Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border">
          {/* Left: Project Overview */}
          <div className="lg:col-span-5 p-5 sm:p-8 md:p-10 space-y-4">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Project Overview
            </h4>
            <p className="text-sm sm:text-base md:text-lg text-foreground/90 leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {/* Right: Specific Engineering Contributions */}
          <div className="lg:col-span-7 p-5 sm:p-8 md:p-10 space-y-5">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
              My Engineering Contribution &amp; Role
            </h4>
            <ul className="space-y-4">
              {project.contribution?.map((item, idx) => (
                <li
                  key={idx}
                  className="grid grid-cols-[36px_1fr] items-baseline gap-2 text-sm sm:text-base text-foreground/90 leading-relaxed"
                >
                  <span className="font-mono text-xs sm:text-sm text-accent font-semibold tabular-nums select-none" aria-hidden="true">
                    0{idx + 1}.
                  </span>
                  <span className="text-foreground/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
