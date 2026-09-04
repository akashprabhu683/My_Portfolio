import { portfolioData } from "@/data/portfolio";
import { Download, FileText, Briefcase, GraduationCap, ArrowUpRight } from "lucide-react";

export function Resume() {
  const { experience, education, resumeUrl, cvUrl } = portfolioData;

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-16">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-xs text-accent uppercase tracking-widest" aria-hidden="true">
              {"06 //"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground uppercase">
              Resume &amp; Experience
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Verified professional background, digital agency leadership, and engineering education.
          </p>
        </div>

        {/* Download Actions */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={resumeUrl}
            download="Akash_Prabhu_Resume.pdf"
            aria-label={`Download ${portfolioData.name}'s Resume in PDF format`}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-foreground text-background font-mono text-xs uppercase tracking-wider font-semibold hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none transition-colors"
          >
            <Download className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Download Resume</span>
          </a>

          <a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${portfolioData.name}'s Curriculum Vitae PDF (opens in a new tab)`}
            className="inline-flex items-center gap-2 px-4 py-2.5 border border-border bg-background text-foreground font-mono text-xs uppercase tracking-wider font-semibold hover:border-foreground hover:bg-muted focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none transition-colors"
          >
            <FileText className="w-3.5 h-3.5" aria-hidden="true" />
            <span>View CV (PDF)</span>
            <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* 2-Column Experience & Education Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Left Column: Work Experience */}
        <div className="lg:col-span-7 space-y-8">
          <div className="flex items-center gap-2.5 pb-4 border-b border-border text-foreground font-semibold uppercase font-mono text-xs tracking-wider">
            <Briefcase className="w-4 h-4 text-accent" aria-hidden="true" />
            <span>Work &amp; Project Experience</span>
          </div>

          <div className="space-y-8">
            {experience.map((item, idx) => (
              <div key={idx} className="relative pl-6 border-l border-border space-y-2">
                <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
                
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-foreground">
                    {item.role}
                  </h3>
                  <span className="font-mono text-xs text-accent">
                    {item.period}
                  </span>
                </div>

                <div className="text-xs font-mono text-muted-foreground">
                  <span className="text-foreground/90 font-medium">{item.company}</span> · {item.location}
                </div>

                <ul className="space-y-1.5 pt-1">
                  {item.highlights.map((point, pIdx) => (
                    <li key={pIdx} className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                      • {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Education & Academic Credentials */}
        <div className="lg:col-span-5 space-y-8">
          <div className="flex items-center gap-2.5 pb-4 border-b border-border text-foreground font-semibold uppercase font-mono text-xs tracking-wider">
            <GraduationCap className="w-4 h-4 text-accent" aria-hidden="true" />
            <span>Education</span>
          </div>

          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className="p-5 border border-border bg-muted/20 space-y-2">
                <span className="font-mono text-xs text-accent">
                  {edu.period}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-foreground">
                  {edu.degree}
                </h4>
                <p className="text-xs text-muted-foreground font-mono">
                  {edu.institution}
                </p>
                <p className="text-[11px] text-muted-foreground/80 font-mono">
                  {edu.location}
                </p>
              </div>
            ))}

            {/* Quick Summary Card */}
            <div className="p-5 border border-accent/30 bg-accent/[0.03] space-y-2 font-mono text-xs text-foreground/85">
              <span className="text-accent uppercase tracking-widest font-semibold text-[10px]">
                Core Competencies
              </span>
              <p className="text-[11px] leading-relaxed text-muted-foreground">
                React, TypeScript, Next.js, Node.js, REST APIs, PostgreSQL, UI/UX Engineering, System Architecture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
