// Case Study type definitions
export interface CaseStudySection {
  title: string;
  content: string | string[];
}

export interface CaseStudy {
  slug: string;
  projectSlug: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  approach: string[];
  techStack: string[];
  architectureDiagram?: string;
  keyFeatures: {
    title: string;
    description: string;
  }[];
  designDecisions: {
    title: string;
    description: string;
    rationale: string;
  }[];
  challenges: {
    challenge: string;
    solution: string;
  }[];
  results?: {
    metric: string;
    value: string;
  }[];
  learnings: string[];
  futureImprovements: string[];
  publishedAt: string;
  updatedAt?: string;
}
