// Projects data - placeholder for now
import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "resumebuddy",
    title: "ResumeBuddy",
    shortDescription: "AI-powered resume optimization platform that analyzes and improves resumes for ATS compatibility.",
    fullDescription: "ResumeBuddy is an AI-powered resume optimization platform that helps job seekers improve their resumes for better ATS (Applicant Tracking System) compatibility. The platform analyzes resume content, provides actionable feedback, and suggests improvements using GPT-4.",
    thumbnail: "/images/projects/resumebuddy-thumbnail.png",
    images: [
      "/images/projects/resumebuddy-1.png",
      "/images/projects/resumebuddy-2.png",
    ],
    techStack: ["Next.js", "TypeScript", "OpenAI", "Prisma", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://resumebuddy.app",
    githubUrl: "https://github.com/rajeevkavala/resumebuddy",
    caseStudySlug: "resumebuddy",
    featured: true,
    status: "completed",
    startDate: "2025-06",
    endDate: "2025-09",
    highlights: [
      "150+ active users",
      "AI-powered analysis using GPT-4",
      "Real-time ATS compatibility scoring",
    ],
    order: 1,
  },
  {
    slug: "noteaura",
    title: "NoteAura",
    shortDescription: "A modern note-taking application with AI-powered organization and search capabilities.",
    fullDescription: "NoteAura is a modern note-taking application that uses AI to help organize, categorize, and search through your notes efficiently. Features include smart tagging, semantic search, and automatic summarization.",
    thumbnail: "/images/projects/noteaura-thumbnail.png",
    techStack: ["React", "Node.js", "MongoDB", "OpenAI", "Express"],
    liveUrl: "https://noteaura.app",
    githubUrl: "https://github.com/rajeevkavala/noteaura",
    featured: false,
    status: "completed",
    startDate: "2025-03",
    endDate: "2025-05",
    order: 2,
  },
  {
    slug: "code-masters-lms",
    title: "Code Masters LMS",
    shortDescription: "A learning management system for coding bootcamps with interactive exercises and progress tracking.",
    fullDescription: "Code Masters LMS is a comprehensive learning management system designed for coding bootcamps. It features interactive coding exercises, progress tracking, and a robust curriculum management system.",
    thumbnail: "/images/projects/codemasters-thumbnail.png",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
    githubUrl: "https://github.com/rajeevkavala/code-masters-lms",
    featured: false,
    status: "completed",
    startDate: "2025-01",
    endDate: "2025-03",
    order: 3,
  },
];

// Get featured projects
export const featuredProjects = projects.filter((p) => p.featured);

// Get projects by status
export const getProjectsByStatus = (status: Project["status"]) =>
  projects.filter((p) => p.status === status);

// Get project by slug
export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
