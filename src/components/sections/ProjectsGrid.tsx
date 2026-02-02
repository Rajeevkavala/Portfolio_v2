"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ProjectCard } from "@/components/shared/ProjectCard";
import type { Project } from "@/types";

interface ProjectsGridProps {
  projects: Project[];
  showFeatured?: boolean;
}

export function ProjectsGrid({ projects, showFeatured = true }: ProjectsGridProps) {
  // Filter out featured projects if they're shown separately
  const gridProjects = showFeatured
    ? projects.filter((p) => !p.featured)
    : projects;

  if (gridProjects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No projects to display.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {gridProjects.map((project, index) => (
        <AnimatedSection
          key={project.slug}
          direction="up"
          delay={0.1 + index * 0.1}
        >
          <ProjectCard
            slug={project.slug}
            title={project.title}
            description={project.shortDescription}
            image={project.thumbnail}
            tags={project.techStack}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
            caseStudySlug={project.caseStudySlug}
            featured={project.featured}
          />
        </AnimatedSection>
      ))}
    </div>
  );
}

export default ProjectsGrid;
