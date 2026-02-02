// GSAP configuration and initialization
import { gsap } from "gsap";

// Register GSAP plugins if needed
// Note: ScrollTrigger should be imported dynamically on client-side only

// Default GSAP configuration
export const gsapConfig = {
  defaults: {
    duration: 0.5,
    ease: "power2.out",
  },
};

// Apply default configuration
gsap.config({
  nullTargetWarn: false,
});

// Professional easing presets
export const gsapEasings = {
  // Professional feel (use 90% of the time)
  smooth: "power2.out",
  smoothInOut: "power2.inOut",
  // Slight overshoot (use sparingly)
  back: "back.out(1.7)",
  // Linear
  linear: "none",
  // Elastic (use very sparingly)
  elastic: "elastic.out(1, 0.3)",
} as const;

// Animation presets
export const gsapPresets = {
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  slideUp: {
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
  },
  slideDown: {
    from: { opacity: 0, y: -20 },
    to: { opacity: 1, y: 0 },
  },
  slideLeft: {
    from: { opacity: 0, x: 20 },
    to: { opacity: 1, x: 0 },
  },
  slideRight: {
    from: { opacity: 0, x: -20 },
    to: { opacity: 1, x: 0 },
  },
  scaleIn: {
    from: { opacity: 0, scale: 0.95 },
    to: { opacity: 1, scale: 1 },
  },
} as const;

// Duration constants (in seconds)
export const gsapDurations = {
  fast: 0.15,
  normal: 0.3,
  slow: 0.5,
  entrance: 0.6,
  page: 0.4,
} as const;

export default gsap;
