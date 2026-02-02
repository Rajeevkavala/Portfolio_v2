// Types barrel export
export * from "./project";
export * from "./experience";
export * from "./caseStudy";
export * from "./skill";

// Common types
export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
  ariaLabel: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  email: string;
  socials: SocialLink[];
}
