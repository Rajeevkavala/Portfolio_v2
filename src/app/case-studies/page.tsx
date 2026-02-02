import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export const metadata: Metadata = {
  title: "Case Studies | Rajeev Kavala",
  description:
    "Deep dives into my project development process, technical decisions, and lessons learned.",
  openGraph: {
    title: "Case Studies | Rajeev Kavala",
    description:
      "Deep dives into my project development process, technical decisions, and lessons learned.",
  },
};

export default function CaseStudiesPage() {
  return (
    <main id="main-content" className="container-custom section-padding pt-32">
      {/* Page Header */}
      <AnimatedSection direction="up" delay={0}>
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
          <p className="text-lg text-muted-foreground">
            Detailed breakdowns of my projects — the problems I solved, technical
            decisions I made, challenges I faced, and lessons I learned along the
            way.
          </p>
        </div>
      </AnimatedSection>

      {/* Case Studies List */}
      <div className="space-y-6">
        {caseStudies.map((caseStudy, index) => {
          return (
            <AnimatedSection
              key={caseStudy.slug}
              direction="up"
              delay={0.1 + index * 0.1}
            >
              <Card className="group overflow-hidden border hover:border-primary/40 transition-colors">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      {/* Title & Subtitle */}
                      <Link
                        href={`/case-studies/${caseStudy.slug}`}
                        className="group/title"
                      >
                        <h2 className="text-2xl font-bold mb-2 group-hover/title:text-primary transition-colors">
                          {caseStudy.title}
                        </h2>
                      </Link>
                      <p className="text-muted-foreground mb-4">
                        {caseStudy.subtitle}
                      </p>

                      {/* Problem Preview */}
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {caseStudy.problem}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {caseStudy.techStack.slice(0, 5).map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {caseStudy.techStack.length > 5 && (
                          <Badge variant="outline" className="text-xs">
                            +{caseStudy.techStack.length - 5}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="shrink-0">
                      <Button asChild>
                        <Link href={`/case-studies/${caseStudy.slug}`}>
                          Read Case Study
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          );
        })}
      </div>

      {/* Empty State */}
      {caseStudies.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            Case studies coming soon. Check back later!
          </p>
        </div>
      )}
    </main>
  );
}
