"use client";

import { Briefcase, Trophy, GraduationCap, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ExperienceType } from "@/types";

interface ExperienceCardProps {
  title: string;
  organization: string;
  location?: string;
  duration: string;
  description: string[];
  type: ExperienceType;
  skills?: string[];
  link?: string;
  className?: string;
}

const typeConfig = {
  work: {
    icon: Briefcase,
    borderColor: "border-l-primary",
    bgColor: "bg-primary/5",
    iconColor: "text-primary",
    label: "Work Experience",
  },
  achievement: {
    icon: Trophy,
    borderColor: "border-l-yellow-500",
    bgColor: "bg-yellow-500/5",
    iconColor: "text-yellow-500",
    label: "Achievement",
  },
  education: {
    icon: GraduationCap,
    borderColor: "border-l-green-500",
    bgColor: "bg-green-500/5",
    iconColor: "text-green-500",
    label: "Education",
  },
};

export function ExperienceCard({
  title,
  organization,
  location,
  duration,
  description,
  type,
  skills,
  link,
  className,
}: ExperienceCardProps) {
  const config = typeConfig[type];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "relative pl-6 border-l-4 py-4 transition-colors",
        config.borderColor,
        className
      )}
    >
      {/* Icon */}
      <div
        className={cn(
          "absolute -left-[22px] top-4 w-10 h-10 rounded-full border-4 border-background flex items-center justify-center",
          config.bgColor
        )}
      >
        <Icon className={cn("w-4 h-4", config.iconColor)} />
      </div>

      {/* Content */}
      <div className="space-y-3">
        {/* Header */}
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3 className="text-lg font-semibold">{title}</h3>
            {link && (
              <Button
                variant="ghost"
                size="sm"
                className="h-6 px-2 text-xs"
                asChild
              >
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View certificate for ${title}`}
                >
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Certificate
                </a>
              </Button>
            )}
          </div>
          <p className="text-muted-foreground">
            {organization}
            {location && ` · ${location}`}
          </p>
          <p className="text-sm text-muted-foreground/70">{duration}</p>
        </div>

        {/* Description */}
        <ul className="space-y-1.5">
          {description.map((item, index) => (
            <li
              key={index}
              className="text-sm text-muted-foreground flex items-start gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 mt-1.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        {/* Skills Tags */}
        {skills && skills.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-xs font-normal"
              >
                {skill}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ExperienceCard;
