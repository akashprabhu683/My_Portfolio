import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

export function About() {
  const { about, name } = portfolioData;

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-10 sm:mb-16">
        <span className="font-mono text-xs text-accent uppercase tracking-widest" aria-hidden="true">
          {"01 //"}
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground uppercase">
          About
        </h2>
      </div>

      {/* Editorial 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left Column: Portrait & Key Supporting Details */}
        <aside aria-label="Key background information" className="lg:col-span-5 space-y-6">
          {about.photo && (
            <div className="relative w-full aspect-[4/5] max-w-sm mx-auto lg:max-w-none bg-muted border border-border overflow-hidden">
              <Image
                src={about.photo}
                alt={`Professional portrait of ${name}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 440px"
                className="object-cover object-top"
              />
            </div>
          )}

          <div className="space-y-4 pt-2">
            <div className="border-t border-border pt-4">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
                Background
              </p>
              <p className="text-sm sm:text-base font-medium text-foreground">
                Software Engineering &amp; Web Development
              </p>
            </div>

            {about.details.map((detail) => (
              <div key={detail.label} className="border-t border-border pt-4">
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
                  {detail.label}
                </p>
                <p className="text-sm sm:text-base font-medium text-foreground">
                  {detail.value}
                </p>
              </div>
            ))}
          </div>
        </aside>

        {/* Right Column: Development Narrative */}
        <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-foreground/85 leading-relaxed pt-2 lg:pt-0">
          {about.paragraphs.map((paragraph, idx) => (
            <p key={idx} className="font-normal">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
