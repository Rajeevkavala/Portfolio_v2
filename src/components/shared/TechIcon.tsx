"use client";

import { cn } from "@/lib/utils";
import {
  Code2,
  Database,
  Palette,
  Wrench,
  Terminal,
  Boxes,
  Brain,
  Sparkles,
} from "lucide-react";

type IconSize = "sm" | "md" | "lg";

interface TechIconProps {
  name: string;
  size?: IconSize;
  className?: string;
  showLabel?: boolean;
}

const sizeMap: Record<IconSize, string> = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
};

// Icon mapping for common technologies
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  // Frontend
  react: Code2,
  nextjs: Code2,
  typescript: Terminal,
  javascript: Terminal,
  tailwind: Palette,
  css: Palette,
  html: Code2,
  shadcn: Boxes,
  
  // Backend
  nodejs: Terminal,
  express: Database,
  python: Terminal,
  django: Database,
  flask: Database,
  
  // AI/ML
  ai: Brain,
  ml: Brain,
  llm: Sparkles,
  gemini: Sparkles,
  openai: Sparkles,
  langchain: Brain,
  
  // Database
  mongodb: Database,
  postgresql: Database,
  mysql: Database,
  prisma: Database,
  
  // Tools
  git: Wrench,
  docker: Boxes,
  vercel: Wrench,
  linux: Terminal,
  vscode: Code2,
  
  // Default
  default: Code2,
};

export function TechIcon({
  name,
  size = "md",
  className,
  showLabel = false,
}: TechIconProps) {
  const iconKey = name.toLowerCase().replace(/\s+/g, "");
  const Icon = iconMap[iconKey] || iconMap.default;

  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <Icon className={cn(sizeMap[size], "text-primary")} aria-hidden="true" />
      {showLabel && <span className="text-sm">{name}</span>}
    </span>
  );
}

export default TechIcon;
