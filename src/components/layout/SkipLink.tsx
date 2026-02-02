"use client";

import { cn } from "@/lib/utils";

interface SkipLinkProps {
  href?: string;
  className?: string;
}

/**
 * SkipLink Component
 * 
 * Provides keyboard users a way to skip directly to main content,
 * bypassing the navigation. Essential for accessibility (WCAG 2.4.1).
 * 
 * The link is visually hidden until focused, then appears at the top
 * of the viewport.
 */
export function SkipLink({ href = "#main-content", className }: SkipLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        // Visually hidden by default
        "sr-only",
        // Shown when focused
        "focus:not-sr-only",
        "focus:fixed focus:top-4 focus:left-4 focus:z-[100]",
        // Styling
        "inline-flex items-center justify-center",
        "px-4 py-2 rounded-md",
        "bg-primary text-primary-foreground",
        "font-medium text-sm",
        "shadow-lg",
        // Focus ring
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        // Animation
        "transition-all duration-200",
        className
      )}
    >
      Skip to main content
    </a>
  );
}

export default SkipLink;
