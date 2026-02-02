// Case Studies data
import type { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "resumebuddy",
    projectSlug: "resumebuddy",
    title: "ResumeBuddy",
    subtitle: "AI-powered resume optimization platform",
    problem:
      "Job seekers often struggle with optimizing their resumes for Applicant Tracking Systems (ATS). Many qualified candidates get rejected simply because their resumes aren't formatted correctly or lack the right keywords. Existing tools are either too expensive or provide generic advice that doesn't help candidates stand out.",
    solution:
      "Built ResumeBuddy, an AI-powered platform that uses GPT-4 to analyze resumes against job descriptions, providing actionable feedback on formatting, keyword optimization, and content improvements. The system scores resumes on ATS compatibility and offers specific suggestions to increase interview chances.",
    approach: [
      "Researched ATS algorithms and recruiter scanning patterns",
      "Designed a scoring system based on industry best practices",
      "Implemented GPT-4 integration with custom prompts for resume analysis",
      "Built a clean, intuitive interface for uploading and viewing feedback",
      "Added real-time streaming for instant feedback delivery",
    ],
    techStack: [
      "Next.js 14",
      "TypeScript",
      "OpenAI GPT-4",
      "Prisma ORM",
      "PostgreSQL",
      "Tailwind CSS",
      "Vercel",
    ],
    architectureDiagram: "/images/diagrams/resumebuddy-architecture.svg",
    keyFeatures: [
      {
        title: "Smart Resume Parsing",
        description:
          "Extracts and structures resume content from PDFs and DOCX files using a combination of PDF parsing libraries and GPT-4 for semantic understanding.",
      },
      {
        title: "ATS Compatibility Score",
        description:
          "Provides a 0-100 score based on formatting, keyword density, section structure, and readability metrics.",
      },
      {
        title: "Job Description Matching",
        description:
          "Compares resume content against job descriptions to identify missing skills and suggest improvements.",
      },
      {
        title: "Real-time Streaming Feedback",
        description:
          "Uses Server-Sent Events for streaming AI responses, providing instant feedback as analysis completes.",
      },
    ],
    designDecisions: [
      {
        title: "Streaming over Batch Processing",
        description:
          "Implemented streaming responses instead of waiting for complete analysis.",
        rationale:
          "Users see feedback in real-time, reducing perceived wait time and improving engagement. Also allows for progressive rendering of suggestions.",
      },
      {
        title: "PostgreSQL over NoSQL",
        description:
          "Chose PostgreSQL with Prisma ORM instead of MongoDB or Firebase.",
        rationale:
          "Structured resume data benefits from relational modeling. Prisma provides type-safe queries and easy migrations. PostgreSQL's JSON columns offer flexibility where needed.",
      },
      {
        title: "Custom Prompts over Fine-tuning",
        description:
          "Used carefully crafted system prompts instead of fine-tuning a custom model.",
        rationale:
          "More cost-effective for a startup product. Easier to iterate and improve prompts. GPT-4's base capabilities are sufficient with good prompt engineering.",
      },
    ],
    challenges: [
      {
        challenge: "Handling diverse resume formats and layouts",
        solution:
          "Implemented a multi-stage parsing pipeline: PDF.js for extraction, GPT-4 for semantic normalization, and custom validation to ensure consistent data structure regardless of input format.",
      },
      {
        challenge: "Managing API costs at scale",
        solution:
          "Implemented token estimation before calls, caching for repeated analyses, and rate limiting per user. Added a tiered pricing model to offset costs.",
      },
      {
        challenge: "Ensuring consistent analysis quality",
        solution:
          "Created a comprehensive test suite with 50+ sample resumes. Implemented prompt versioning and A/B testing to continuously improve analysis quality.",
      },
    ],
    results: [
      {
        metric: "Active Users",
        value: "150+",
      },
      {
        metric: "Resumes Analyzed",
        value: "500+",
      },
      {
        metric: "Average ATS Score Improvement",
        value: "+23 points",
      },
    ],
    learnings: [
      "Prompt engineering is an iterative process - started with simple prompts and refined based on user feedback",
      "User onboarding is crucial - added a tutorial flow that reduced support queries by 60%",
      "Cost management needs early attention - implemented usage tracking from day one",
      "Real-time feedback significantly improves user experience over batch processing",
    ],
    futureImprovements: [
      "Multi-language support for international users",
      "Interview preparation module with AI-generated questions",
      "LinkedIn profile optimization integration",
      "Chrome extension for one-click resume analysis on job sites",
    ],
    publishedAt: "2026-01-15",
  },
];

// Get case study by slug
export const getCaseStudyBySlug = (slug: string) =>
  caseStudies.find((cs) => cs.slug === slug);

// Get case study by project slug
export const getCaseStudyByProjectSlug = (projectSlug: string) =>
  caseStudies.find((cs) => cs.projectSlug === projectSlug);
