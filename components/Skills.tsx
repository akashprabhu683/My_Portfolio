import { portfolioData } from "@/data/portfolio";
import { TechIcon } from "@/components/TechIcon";

export function Skills() {
  const { skillGroups } = portfolioData;

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-10 sm:mb-16">
        <span className="font-mono text-xs text-accent uppercase tracking-widest" aria-hidden="true">
          {"02 //"}
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground uppercase">
          Skills &amp; Technical Scope
        </h2>
      </div>

      {/* Structured Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
        {skillGroups.map((group, groupIdx) => (
          <div
            key={group.title}
            className="flex flex-col border-t border-border pt-6 justify-between"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-baseline gap-2 mb-5">
                <span className="font-mono text-xs text-accent font-semibold" aria-hidden="true">
                  0{groupIdx + 1}
                </span>
                <h3 className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-foreground">
                  {group.title}
                </h3>
              </div>

              {/* Skill Items with Vector Icons */}
              <ul className="space-y-3.5" aria-label={`${group.title} skills`}>
                {group.items.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center gap-3 text-sm sm:text-base text-foreground/90 group"
                  >
                    <div className="w-5 h-5 flex items-center justify-center shrink-0 opacity-80 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                      <TechIcon name={skill.iconName} className="w-4 h-4" />
                    </div>
                    <span className="font-medium tracking-tight">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contextual status indicator */}
            <div className="mt-8 pt-4 border-t border-border/50">
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                {groupIdx < 2 ? "Active Stack" : groupIdx === 2 ? "In Progress" : "Roadmap"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
