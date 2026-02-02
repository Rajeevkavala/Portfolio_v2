import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github, FileText, Calendar } from "lucide-react";
import { projects, getProjectBySlug } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Rajeev Kavala",
    };
  }

  return {
    title: `${project.title} | Projects | Rajeev Kavala`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | Rajeev Kavala`,
      description: project.shortDescription,
      images: [project.thumbnail],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Find previous and next projects for navigation
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <main id="main-content" className="container-custom section-padding pt-32">
      {/* Back Navigation */}
      <AnimatedSection direction="up" delay={0}>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </AnimatedSection>

      {/* Hero Section */}
      <AnimatedSection direction="up" delay={0.1}>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Project Image */}
          <div className="relative aspect-video lg:aspect-[4/3] rounded-xl overflow-hidden bg-muted">
            <Image
              src={project.thumbnail}
              alt={`${project.title} screenshot`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Project Info */}
          <div className="flex flex-col justify-center">
            {/* Status & Featured Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.featured && (
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  🚀 Featured
                </Badge>
              )}
              <Badge
                variant={
                  project.status === "completed"
                    ? "default"
                    : project.status === "in-progress"
                    ? "secondary"
                    : "outline"
                }
              >
                {project.status === "completed"
                  ? "✓ Completed"
                  : project.status === "in-progress"
                  ? "🔨 In Progress"
                  : "📦 Archived"}
              </Badge>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {project.title}
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-6">
              {project.fullDescription}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {project.startDate}
                {project.endDate && ` - ${project.endDate}`}
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              {project.caseStudySlug && (
                <Button size="lg" asChild>
                  <Link href={`/case-studies/${project.caseStudySlug}`}>
                    <FileText className="w-4 h-4 mr-2" />
                    Read Case Study
                  </Link>
                </Button>
              )}
              {project.liveUrl && (
                <Button size="lg" variant="outline" asChild>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button size="lg" variant="ghost" asChild>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Source
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Tech Stack */}
      <AnimatedSection direction="up" delay={0.2}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="px-4 py-2 text-sm"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Highlights */}
      {project.highlights && project.highlights.length > 0 && (
        <AnimatedSection direction="up" delay={0.3}>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Key Highlights</h2>
            <ul className="space-y-3">
              {project.highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  {highlight}
                </li>
              ))}
            </ul>
          </section>
        </AnimatedSection>
      )}

      {/* Project Navigation */}
      <AnimatedSection direction="up" delay={0.4}>
        <nav className="flex justify-between items-center pt-8 border-t border-border">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span className="text-sm">{prevProject.title}</span>
            </Link>
          ) : (
            <div />
          )}
          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-sm">{nextProject.title}</span>
              <ArrowLeft className="w-4 h-4 rotate-180 transition-transform group-hover:translate-x-1" />
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </AnimatedSection>
    </main>
  );
}
