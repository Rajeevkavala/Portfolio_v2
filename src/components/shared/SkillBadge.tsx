"use client";

import { Badge } from "@/components/ui/badge";
import { TechIcon } from "./TechIcon";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  icon?: string;
  className?: string;
}

export function SkillBadge({
  name,
  icon,
  className,
}: SkillBadgeProps) {
  return (
    <Badge
      variant="secondary"
      className={cn(
        "px-4 py-2 text-sm font-medium",
        "bg-background border border-border",
        "hover:border-primary/40 hover:bg-primary/5",
        "transition-colors duration-200",
        "cursor-default",
        className
      )}
    >
      <span className="flex items-center gap-2">
        {icon && <TechIcon name={icon} size="sm" />}
        {name}
      </span>
    </Badge>
  );
}

export default SkillBadge;
