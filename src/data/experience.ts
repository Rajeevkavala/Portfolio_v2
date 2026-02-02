// Experience data - placeholder for now
import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "ey-aicte-internship",
    type: "work",
    title: "AI/ML Intern",
    organization: "EY + AICTE",
    location: "Remote",
    startDate: "2025-06",
    endDate: "2025-08",
    isCurrent: false,
    description: [
      "Developed machine learning models for data analysis and prediction",
      "Collaborated with senior engineers on production-grade AI systems",
      "Implemented data pipelines for processing large datasets",
    ],
    skills: ["Python", "TensorFlow", "Pandas", "Machine Learning"],
    order: 1,
  },
  {
    id: "hackathon-winner",
    type: "achievement",
    title: "Hackathon Winner",
    organization: "Tech University Hackathon",
    startDate: "2025-03",
    description: [
      "Won first place in the AI/ML track for building an innovative solution",
      "Developed a working prototype in 48 hours",
      "Presented solution to a panel of industry judges",
    ],
    skills: ["Python", "OpenAI", "React", "Node.js"],
    order: 2,
  },
  {
    id: "btech-cse",
    type: "education",
    title: "B.Tech in Computer Science & Engineering",
    organization: "University Name",
    location: "City, Country",
    startDate: "2023-08",
    isCurrent: true,
    description: [
      "Specializing in Artificial Intelligence and Machine Learning",
      "Maintaining strong academic performance",
      "Active member of coding clubs and tech communities",
    ],
    order: 3,
  },
];

// Get experiences by type
export const getExperiencesByType = (type: Experience["type"]) =>
  experiences.filter((e) => e.type === type);

// Get experiences sorted by order
export const sortedExperiences = [...experiences].sort((a, b) => a.order - b.order);
