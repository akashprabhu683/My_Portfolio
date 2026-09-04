import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { ExternalLink, Code2, Globe } from "lucide-react";

export function OtherProjects() {
  const otherProjects = portfolioData.projects.filter((p) => !p.featured);

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-10 sm:mb-16">
        <span className="font-mono text-xs text-accent uppercase tracking-widest" aria-hidden="true">
          {"04 //"}
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground uppercase">
          Other Projects
        </h2>
      </div>

      {/* Editorial 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {otherProjects.map((project, idx) => (
          <article
            key={project.title}
            aria-labelledby={`project-title-${idx}`}
            className="border border-border bg-muted/20 flex flex-col justify-between overflow-hidden"
          >
            {/* Visual Frame with Real Screenshot */}
            <div className="border-b border-border bg-background/60 p-3 sm:p-6">
              <div className="w-full bg-muted border border-border overflow-hidden">
                {/* Mini Browser Bar */}
                <div className="flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-muted-foreground border-b border-border px-3 py-2 bg-background/90">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-border" aria-hidden="true" />
                    <span className="w-1.5 h-1.5 rounded-full bg-border" aria-hidden="true" />
                    <span className="w-1.5 h-1.5 rounded-full bg-border" aria-hidden="true" />
                    <span className="ml-1.5 truncate max-w-[150px] sm:max-w-[200px] text-foreground/70">
                      {project.liveUrl?.replace("https://", "")}
                    </span>
                  </div>
                  <Globe className="w-3 h-3 text-muted-foreground shrink-0" aria-hidden="true" />
                </div>

                {/* Real Project Screenshot */}
                {project.image && (
                  <div className="relative w-full aspect-[16/10] bg-muted/60">
                    <Image
                      src={project.image}
                      alt={`Real interface screenshot of ${project.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
                      className="object-cover object-top"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Content & Metadata */}
            <div className="p-5 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs text-accent">
                    0{idx + 1} {"//"} {project.category}
                  </span>
                  {project.role && (
                    <span className="font-mono text-[11px] text-muted-foreground">
                      {project.role}
                    </span>
                  )}
                </div>

                <h3 id={`project-title-${idx}`} className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4">
                  {project.title}
                </h3>
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-border mt-5">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} live website (opens in a new tab)`}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-foreground text-background font-mono text-xs uppercase tracking-wider font-semibold hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none transition-colors flex-1 sm:flex-none text-center"
                  >
                    <span>Live Site</span>
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub (opens in a new tab)`}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 border border-border bg-background text-foreground font-mono text-xs uppercase tracking-wider font-semibold hover:border-foreground hover:bg-muted focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none transition-colors flex-1 sm:flex-none text-center"
                  >
                    <Code2 className="w-3 h-3" aria-hidden="true" />
                    <span>Source</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
