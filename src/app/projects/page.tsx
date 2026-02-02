import { Metadata } from "next";
import { projects, featuredProjects } from "@/data/projects";
import { FeaturedProject } from "@/components/shared/FeaturedProject";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export const metadata: Metadata = {
  title: "Projects | Rajeev Kavala",
  description:
    "Explore my portfolio of AI-powered applications and full-stack projects. From resume optimization tools to learning management systems.",
  openGraph: {
    title: "Projects | Rajeev Kavala",
    description:
      "Explore my portfolio of AI-powered applications and full-stack projects.",
  },
};

export default function ProjectsPage() {
  const featured = featuredProjects[0];
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <main id="main-content" className="container-custom section-padding pt-32">
      {/* Page Header */}
      <AnimatedSection direction="up" delay={0}>
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground">
            A selection of projects I&apos;ve built, from AI-powered applications
            to full-stack web platforms. Each project represents a unique
            challenge and learning experience.
          </p>
        </div>
      </AnimatedSection>

      {/* Featured Project */}
      {featured && (
        <section className="mb-16">
          <FeaturedProject
            slug={featured.slug}
            title={featured.title}
            description={featured.fullDescription}
            image={featured.thumbnail}
            tags={featured.techStack}
            highlights={featured.highlights}
            liveUrl={featured.liveUrl}
            githubUrl={featured.githubUrl}
            caseStudySlug={featured.caseStudySlug}
          />
        </section>
      )}

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <section>
          <AnimatedSection direction="up" delay={0.2}>
            <h2 className="text-2xl font-bold mb-8">More Projects</h2>
          </AnimatedSection>
          <ProjectsGrid projects={otherProjects} showFeatured={false} />
        </section>
      )}
    </main>
  );
}
