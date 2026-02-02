"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ScrollProgressProps {
  className?: string;
}

/**
 * ScrollProgress - Thin blue progress bar at top of viewport
 * Shows reading progress through the page
 */
export function ScrollProgress({ className = "" }: ScrollProgressProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Smooth spring animation for the progress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // Only show after scrolling past the hero section
    const unsubscribe = scrollYProgress.on("change", (value) => {
      setIsVisible(value > 0.05);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  // Don't render if user prefers reduced motion
  if (prefersReducedMotion) {
    return null;
  }

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-500 origin-left z-50 ${className}`}
      style={{ scaleX }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    />
  );
}
