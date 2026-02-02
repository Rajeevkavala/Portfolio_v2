// Experience type definitions
export type ExperienceType = "work" | "achievement" | "education";

export interface Experience {
  id: string;
  type: ExperienceType;
  title: string;
  organization: string;
  location?: string;
  startDate: string;
  endDate?: string;
  isCurrent?: boolean;
  description: string[];
  skills?: string[];
  link?: string;
  certificateUrl?: string;
  order: number;
}

export interface ExperienceCardProps {
  title: string;
  organization: string;
  duration: string;
  description: string[];
  type: ExperienceType;
  skills?: string[];
  link?: string;
}
