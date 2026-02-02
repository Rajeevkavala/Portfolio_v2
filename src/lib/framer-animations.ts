// Framer Motion animation variants
import { Variants, Transition } from "framer-motion";

// Common easing functions
export const easings = {
  // Professional feel (use 90% of the time)
  smooth: [0.22, 1, 0.36, 1],
  // Slight overshoot (use sparingly)
  bouncy: [0.68, -0.55, 0.265, 1.55],
  // Standard ease out
  easeOut: [0, 0, 0.2, 1],
  // Standard ease in-out
  easeInOut: [0.4, 0, 0.2, 1],
} as const;

// Default transition
export const defaultTransition: Transition = {
  duration: 0.5,
  ease: easings.smooth,
};

// Fade in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: defaultTransition,
  },
};

// Fade in with slide up
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

// Fade in with slide down
export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

// Fade in with slide left
export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

// Fade in with slide right
export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

// Scale in animation
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: easings.smooth,
    },
  },
};

// Stagger container
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Stagger container with faster timing
export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

// Hero section animation
export const heroContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0,
    },
  },
};

// Card hover animation
export const cardHover: Variants = {
  rest: {
    scale: 1,
    transition: {
      duration: 0.2,
      ease: easings.easeOut,
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: easings.easeOut,
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
      ease: easings.easeOut,
    },
  },
};

// Button press animation
export const buttonPress: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.02 },
  tap: { scale: 0.98 },
};

// Page transition variants
export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: easings.smooth,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2,
      ease: easings.easeInOut,
    },
  },
};

// Mobile menu animation
export const mobileMenuOverlay: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      delay: 0.1,
    },
  },
};

export const mobileMenuContent: Variants = {
  hidden: {
    x: "100%",
  },
  visible: {
    x: 0,
    transition: {
      type: "tween",
      duration: 0.3,
      ease: easings.smooth,
    },
  },
  exit: {
    x: "100%",
    transition: {
      type: "tween",
      duration: 0.2,
      ease: easings.easeInOut,
    },
  },
};
