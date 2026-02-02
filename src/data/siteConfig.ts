// Site configuration
import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Rajeev Kavala",
  title: "AI & Full-Stack Developer",
  description:
    "I build and ship AI-powered web applications end-to-end — from LLM pipelines to polished user interfaces.",
  url: "https://rajeevkavala.dev",
  email: "contact@rajeevkavala.dev",
  socials: [
    {
      name: "GitHub",
      href: "https://github.com/rajeevkavala",
      icon: "github",
      ariaLabel: "View my GitHub profile",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/rajeevkavala",
      icon: "linkedin",
      ariaLabel: "Connect with me on LinkedIn",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/rajeevkavala",
      icon: "twitter",
      ariaLabel: "Follow me on Twitter",
    },
    {
      name: "Email",
      href: "mailto:contact@rajeevkavala.dev",
      icon: "mail",
      ariaLabel: "Send me an email",
    },
  ],
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
] as const;

export const ctaButtons = [
  { 
    label: "Resume", 
    href: "/resume.pdf", 
    icon: "download",
    ariaLabel: "Download my resume as PDF"
  },
  {
    label: "GitHub",
    href: "https://github.com/rajeevkavala",
    icon: "github",
    isExternal: true,
    ariaLabel: "View my GitHub profile"
  },
] as const;
