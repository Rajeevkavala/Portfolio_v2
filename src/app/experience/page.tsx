import { Metadata } from "next";
import { experiences } from "@/data/experience";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export const metadata: Metadata = {
  title: "Experience & Achievements | Rajeev Kavala",
  description:
    "My professional experience, achievements, and educational background in AI and full-stack development.",
  openGraph: {
    title: "Experience & Achievements | Rajeev Kavala",
    description:
      "My professional experience, achievements, and educational background.",
  },
};

export default function ExperiencePage() {
  return (
    <main id="main-content" className="container-custom section-padding pt-32">
      {/* Page Header */}
      <AnimatedSection direction="up" delay={0}>
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & Achievements
          </h1>
          <p className="text-lg text-muted-foreground">
            A timeline of my professional journey, key achievements, and
            educational background in software development and AI.
          </p>
        </div>
      </AnimatedSection>

      {/* Timeline */}
      <div className="max-w-3xl">
        <ExperienceTimeline experiences={experiences} />
      </div>
    </main>
  );
}
