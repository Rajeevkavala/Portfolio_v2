// Project type definitions
export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  images?: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudySlug?: string;
  featured: boolean;
  status: "completed" | "in-progress" | "archived";
  startDate: string;
  endDate?: string;
  highlights?: string[];
  order: number;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudySlug?: string;
  featured?: boolean;
}
