"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SkillBadge } from "@/components/shared/SkillBadge";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section className="container-custom section-padding">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection direction="up" delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Skills & Technologies
          </h2>
        </AnimatedSection>

        <div className="space-y-10">
          {skillGroups.map((category, categoryIndex) => (
            <AnimatedSection
              key={category.category}
              direction="up"
              delay={0.2 + categoryIndex * 0.1}
            >
              <div>
                <h3 className="text-xl font-semibold mb-4 text-muted-foreground">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <SkillBadge
                      key={skill.name}
                      name={skill.name}
                      icon={skill.icon}
                    />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
