"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { fadeInUp, fadeInDown, fadeInLeft, fadeInRight, fadeIn } from "@/lib/framer-animations";

type Direction = "up" | "down" | "left" | "right" | "none";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  duration?: number;
  once?: boolean;
  amount?: number | "some" | "all";
}

const directionVariants: Record<Direction, Variants> = {
  up: fadeInUp,
  down: fadeInDown,
  left: fadeInLeft,
  right: fadeInRight,
  none: fadeIn,
};

/**
 * AnimatedSection - Wrapper for scroll-triggered animations
 * Respects user's reduced motion preference
 */
export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.5,
  once = true,
  amount = 0.1,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });
  const prefersReducedMotion = useReducedMotion();

  // If user prefers reduced motion, render without animation
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants = directionVariants[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
