"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ExperienceCard } from "@/components/shared/ExperienceCard";
import type { Experience } from "@/types";

interface ExperienceTimelineProps {
  experiences: Experience[];
}

// Helper to format date range
function formatDuration(experience: Experience): string {
  const formatDate = (dateStr: string) => {
    const [year, month] = dateStr.split("-");
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  const start = formatDate(experience.startDate);

  if (experience.isCurrent) {
    return `${start} - Present`;
  }

  if (experience.endDate) {
    const end = formatDate(experience.endDate);
    return `${start} - ${end}`;
  }

  return start;
}

// Helper to extract year from date string
function getYear(dateStr: string): number {
  return parseInt(dateStr.split("-")[0]);
}

// Group experiences by year
function groupByYear(experiences: Experience[]): Map<number, Experience[]> {
  const groups = new Map<number, Experience[]>();

  // Sort by date (newest first)
  const sorted = [...experiences].sort((a, b) => {
    const dateA = a.endDate || a.startDate;
    const dateB = b.endDate || b.startDate;
    return dateB.localeCompare(dateA);
  });

  for (const exp of sorted) {
    const year = exp.endDate ? getYear(exp.endDate) : getYear(exp.startDate);
    if (!groups.has(year)) {
      groups.set(year, []);
    }
    groups.get(year)!.push(exp);
  }

  return groups;
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  const groupedExperiences = groupByYear(experiences);
  const years = Array.from(groupedExperiences.keys()).sort((a, b) => b - a);

  if (experiences.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No experiences to display.</p>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border" />

      <div className="space-y-12">
        {years.map((year, yearIndex) => (
          <div key={year} className="relative">
            {/* Year marker */}
            <AnimatedSection direction="up" delay={yearIndex * 0.1}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm z-10">
                  {year.toString().slice(-2)}
                </div>
                <span className="text-xl font-bold">{year}</span>
              </div>
            </AnimatedSection>

            {/* Experiences for this year */}
            <div className="space-y-6 ml-5">
              {groupedExperiences.get(year)!.map((experience, expIndex) => (
                <AnimatedSection
                  key={experience.id}
                  direction="up"
                  delay={yearIndex * 0.1 + (expIndex + 1) * 0.1}
                >
                  <ExperienceCard
                    title={experience.title}
                    organization={experience.organization}
                    location={experience.location}
                    duration={formatDuration(experience)}
                    description={experience.description}
                    type={experience.type}
                    skills={experience.skills}
                    link={experience.certificateUrl || experience.link}
                  />
                </AnimatedSection>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceTimeline;
