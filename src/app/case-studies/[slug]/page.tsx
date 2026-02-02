import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Lightbulb,
  Target,
  Wrench,
  AlertTriangle,
  TrendingUp,
  BookOpen,
  Rocket,
} from "lucide-react";
import { caseStudies, getCaseStudyBySlug } from "@/data/caseStudies";
import { getProjectBySlug } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found | Rajeev Kavala",
    };
  }

  return {
    title: `${caseStudy.title} Case Study | Rajeev Kavala`,
    description: caseStudy.subtitle,
    openGraph: {
      title: `${caseStudy.title} Case Study | Rajeev Kavala`,
      description: caseStudy.subtitle,
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const project = getProjectBySlug(caseStudy.projectSlug);

  // Find previous and next case studies
  const currentIndex = caseStudies.findIndex((cs) => cs.slug === slug);
  const prevCaseStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextCaseStudy =
    currentIndex < caseStudies.length - 1
      ? caseStudies[currentIndex + 1]
      : null;

  return (
    <main id="main-content" className="container-custom section-padding pt-32">
      {/* Back Navigation */}
      <AnimatedSection direction="up" delay={0}>
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Case Studies
        </Link>
      </AnimatedSection>

      {/* Header */}
      <AnimatedSection direction="up" delay={0.1}>
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            {caseStudy.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            {caseStudy.subtitle}
          </p>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {project?.liveUrl && (
              <Button variant="outline" asChild>
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
            {project?.githubUrl && (
              <Button variant="ghost" asChild>
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
        </header>
      </AnimatedSection>

      {/* Problem Statement */}
      <AnimatedSection direction="up" delay={0.15}>
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-bold">Problem Statement</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-4xl">
            {caseStudy.problem}
          </p>
        </section>
      </AnimatedSection>

      {/* Solution */}
      <AnimatedSection direction="up" delay={0.2}>
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-bold">Solution & Approach</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-4xl mb-6">
            {caseStudy.solution}
          </p>

          {/* Approach Steps */}
          <ul className="space-y-3 max-w-3xl">
            {caseStudy.approach.map((step, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium shrink-0">
                  {index + 1}
                </span>
                <span className="text-muted-foreground">{step}</span>
              </li>
            ))}
          </ul>
        </section>
      </AnimatedSection>

      {/* Architecture Diagram */}
      {caseStudy.architectureDiagram && (
        <AnimatedSection direction="up" delay={0.25}>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">🏗️ Architecture</h2>
            <div className="relative aspect-video max-w-4xl rounded-xl overflow-hidden bg-muted border">
              <Image
                src={caseStudy.architectureDiagram}
                alt={`${caseStudy.title} architecture diagram`}
                fill
                className="object-contain p-4"
              />
            </div>
          </section>
        </AnimatedSection>
      )}

      {/* Tech Stack */}
      <AnimatedSection direction="up" delay={0.3}>
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Wrench className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-bold">Tech Stack</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {caseStudy.techStack.map((tech) => (
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

      {/* Key Features */}
      <AnimatedSection direction="up" delay={0.35}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {caseStudy.keyFeatures.map((feature, index) => (
              <Card key={index} className="border-primary/10">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Design Decisions */}
      <AnimatedSection direction="up" delay={0.4}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">🎯 Key Design Decisions</h2>
          <div className="space-y-6 max-w-4xl">
            {caseStudy.designDecisions.map((decision, index) => (
              <div
                key={index}
                className="border-l-2 border-primary/40 pl-4 py-2"
              >
                <h3 className="font-semibold mb-1">{decision.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {decision.description}
                </p>
                <p className="text-sm text-muted-foreground/80 italic">
                  <strong>Why:</strong> {decision.rationale}
                </p>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Challenges */}
      <AnimatedSection direction="up" delay={0.45}>
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <AlertTriangle className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-bold">Challenges & Solutions</h2>
          </div>
          <div className="space-y-6 max-w-4xl">
            {caseStudy.challenges.map((item, index) => (
              <div key={index} className="bg-muted/50 rounded-lg p-5">
                <p className="font-medium text-red-500 dark:text-red-400 mb-2">
                  Challenge: {item.challenge}
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-green-600 dark:text-green-400">
                    Solution:
                  </strong>{" "}
                  {item.solution}
                </p>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Results */}
      {caseStudy.results && caseStudy.results.length > 0 && (
        <AnimatedSection direction="up" delay={0.5}>
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold">Results</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {caseStudy.results.map((result, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <p className="text-3xl font-bold text-primary mb-1">
                      {result.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {result.metric}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </AnimatedSection>
      )}

      {/* Learnings */}
      <AnimatedSection direction="up" delay={0.55}>
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-bold">What I Learned</h2>
          </div>
          <ul className="space-y-3 max-w-3xl">
            {caseStudy.learnings.map((learning, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-muted-foreground"
              >
                <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                {learning}
              </li>
            ))}
          </ul>
        </section>
      </AnimatedSection>

      {/* Future Improvements */}
      <AnimatedSection direction="up" delay={0.6}>
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Rocket className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-bold">Future Improvements</h2>
          </div>
          <ul className="space-y-2 max-w-3xl">
            {caseStudy.futureImprovements.map((improvement, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-muted-foreground"
              >
                <span className="text-primary">•</span>
                {improvement}
              </li>
            ))}
          </ul>
        </section>
      </AnimatedSection>

      {/* Navigation */}
      <AnimatedSection direction="up" delay={0.65}>
        <nav className="flex justify-between items-center pt-8 border-t border-border">
          {prevCaseStudy ? (
            <Link
              href={`/case-studies/${prevCaseStudy.slug}`}
              className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span className="text-sm">{prevCaseStudy.title}</span>
            </Link>
          ) : (
            <div />
          )}
          {nextCaseStudy ? (
            <Link
              href={`/case-studies/${nextCaseStudy.slug}`}
              className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-sm">{nextCaseStudy.title}</span>
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
