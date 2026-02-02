// Skill type definitions
export type SkillCategory = "frontend" | "backend" | "ai" | "tools";

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillGroup {
  title: string;
  category: SkillCategory;
  skills: Skill[];
}

export interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
  category: SkillCategory;
}
