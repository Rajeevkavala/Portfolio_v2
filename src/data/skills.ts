// Skills data - organized by category
import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    category: "frontend",
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "TypeScript", icon: "typescript" },
      { name: "ShadCN UI", icon: "shadcn" },
      { name: "CSS/SCSS", icon: "css" },
    ],
  },
  {
    title: "Backend",
    category: "backend",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Prisma", icon: "prisma" },
      { name: "REST APIs", icon: "api" },
    ],
  },
  {
    title: "AI / Machine Learning",
    category: "ai",
    skills: [
      { name: "Python", icon: "python" },
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "PyTorch", icon: "pytorch" },
      { name: "OpenAI API", icon: "openai" },
      { name: "LangChain", icon: "langchain" },
      { name: "Hugging Face", icon: "huggingface" },
    ],
  },
  {
    title: "Tools & DevOps",
    category: "tools",
    skills: [
      { name: "Git/GitHub", icon: "github" },
      { name: "Vercel", icon: "vercel" },
      { name: "Docker", icon: "docker" },
      { name: "VS Code", icon: "vscode" },
      { name: "Linux", icon: "linux" },
    ],
  },
];
