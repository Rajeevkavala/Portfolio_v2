// Site-wide constants
export const SITE_CONFIG = {
  name: "Rajeev Kavala",
  title: "AI & Full-Stack Developer",
  description:
    "I build and ship AI-powered web applications end-to-end — from LLM pipelines to polished user interfaces.",
  url: "https://rajeevkavala.dev",
  email: "contact@rajeevkavala.dev",
  github: "https://github.com/rajeevkavala",
  linkedin: "https://linkedin.com/in/rajeevkavala",
  twitter: "https://twitter.com/rajeevkavala",
} as const;

// Navigation items
export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
] as const;

// CTA buttons
export const CTA_BUTTONS = [
  { label: "Resume", href: "/resume.pdf", icon: "download" },
  {
    label: "GitHub",
    href: "https://github.com/rajeevkavala",
    icon: "github",
    isExternal: true,
  },
] as const;

// Animation durations (in ms)
export const ANIMATION_DURATION = {
  fast: 150,
  normal: 200,
  slow: 300,
  entrance: 500,
  page: 400,
} as const;

// Breakpoints (in px)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

// Container max width
export const CONTAINER_MAX_WIDTH = 1280;

// Spacing scale (in px, based on 8px)
export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  "2xl": 48,
  "3xl": 64,
  "4xl": 96,
} as const;
