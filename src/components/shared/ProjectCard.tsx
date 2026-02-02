"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudySlug?: string;
  featured?: boolean;
  className?: string;
}

export function ProjectCard({
  slug,
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
  caseStudySlug,
  featured = false,
  className,
}: ProjectCardProps) {
  const displayTags = tags.slice(0, 5);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
    >
      <Card
        className={cn(
          "group overflow-hidden h-full",
          "border border-border hover:border-primary/40",
          "transition-colors duration-200",
          featured && "ring-2 ring-primary/20",
          className
        )}
      >
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden bg-muted">
          <Image
            src={image}
            alt={`${title} project thumbnail`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {featured && (
            <Badge
              className="absolute top-3 right-3 bg-primary text-primary-foreground"
            >
              Featured
            </Badge>
          )}
        </div>

        <CardContent className="p-5 space-y-4">
          {/* Title */}
          <Link
            href={`/projects/${slug}`}
            className="block group/title"
          >
            <h3 className="text-xl font-semibold group-hover/title:text-primary transition-colors">
              {title}
            </h3>
          </Link>

          {/* Description */}
          <p className="text-muted-foreground text-sm line-clamp-2">
            {description}
          </p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2">
            {displayTags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs font-normal"
              >
                {tag}
              </Badge>
            ))}
            {tags.length > 5 && (
              <Badge variant="outline" className="text-xs font-normal">
                +{tags.length - 5}
              </Badge>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2 pt-2">
            {caseStudySlug && (
              <Button size="sm" variant="default" asChild>
                <Link href={`/case-studies/${caseStudySlug}`}>
                  <FileText className="w-4 h-4 mr-1.5" />
                  Case Study
                </Link>
              </Button>
            )}
            {liveUrl && (
              <Button size="sm" variant="outline" asChild>
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${title} live demo`}
                >
                  <ExternalLink className="w-4 h-4 mr-1.5" />
                  Live Demo
                </a>
              </Button>
            )}
            {githubUrl && (
              <Button size="sm" variant="ghost" asChild>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${title} source code on GitHub`}
                >
                  <Github className="w-4 h-4 mr-1.5" />
                  Code
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default ProjectCard;
