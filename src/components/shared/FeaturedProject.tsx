"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, FileText, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "./AnimatedSection";

interface FeaturedProjectProps {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  highlights?: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudySlug?: string;
}

export function FeaturedProject({
  slug,
  title,
  description,
  image,
  tags,
  highlights,
  liveUrl,
  githubUrl,
  caseStudySlug,
}: FeaturedProjectProps) {
  return (
    <AnimatedSection direction="up" delay={0.1}>
      <div className="group relative overflow-hidden rounded-xl border-2 border-primary/20 bg-card hover:border-primary/40 transition-colors">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image Section */}
          <div className="relative aspect-video md:aspect-auto md:min-h-[400px] overflow-hidden">
            <Image
              src={image}
              alt={`${title} project screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-background" />
          </div>

          {/* Content Section */}
          <div className="relative p-6 md:p-8 lg:p-10 flex flex-col justify-center">
            {/* Featured Badge */}
            <Badge className="w-fit mb-4 bg-primary/10 text-primary border-primary/20">
              🚀 Featured Project
            </Badge>

            {/* Title */}
            <Link href={`/projects/${slug}`} className="group/title">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 group-hover/title:text-primary transition-colors">
                {title}
              </h2>
            </Link>

            {/* Description */}
            <p className="text-muted-foreground text-base md:text-lg mb-4 line-clamp-3">
              {description}
            </p>

            {/* Highlights */}
            {highlights && highlights.length > 0 && (
              <ul className="space-y-1.5 mb-4">
                {highlights.slice(0, 3).map((highlight, index) => (
                  <li
                    key={index}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {highlight}
                  </li>
                ))}
              </ul>
            )}

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.slice(0, 6).map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="text-xs"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              {caseStudySlug && (
                <Button size="lg" asChild>
                  <Link href={`/case-studies/${caseStudySlug}`}>
                    <FileText className="w-4 h-4 mr-2" />
                    Read Case Study
                  </Link>
                </Button>
              )}
              {liveUrl && (
                <Button size="lg" variant="outline" asChild>
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              )}
              {githubUrl && !caseStudySlug && (
                <Button size="lg" variant="ghost" asChild>
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </a>
                </Button>
              )}
              {!caseStudySlug && !liveUrl && (
                <Button size="lg" variant="outline" asChild>
                  <Link href={`/projects/${slug}`}>
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default FeaturedProject;
