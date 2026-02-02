// Animation easing presets
// Based on Design Philosophy: Professional > Flashy

// CSS easing functions
export const cssEasings = {
  // Professional feel (use 90% of the time)
  smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
  // Standard ease out
  easeOut: "cubic-bezier(0, 0, 0.2, 1)",
  // Standard ease in-out
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Linear
  linear: "linear",
} as const;

// Framer Motion easing arrays
export const framerEasings = {
  // Professional feel (use 90% of the time)
  smooth: [0.22, 1, 0.36, 1] as const,
  // Slight overshoot (use sparingly)
  bouncy: [0.68, -0.55, 0.265, 1.55] as const,
  // Standard ease out
  easeOut: [0, 0, 0.2, 1] as const,
  // Standard ease in-out
  easeInOut: [0.4, 0, 0.2, 1] as const,
} as const;

// GSAP easing strings
export const gsapEasingStrings = {
  // Professional feel (use 90% of the time)
  smooth: "power2.out",
  smoothInOut: "power2.inOut",
  // Slight overshoot (use sparingly)
  back: "back.out(1.7)",
  // Linear
  linear: "none",
} as const;

// Duration presets (in milliseconds for CSS, seconds for JS libraries)
export const durations = {
  // CSS (milliseconds)
  css: {
    hover: 150,
    fast: 200,
    normal: 300,
    slow: 500,
    entrance: 600,
  },
  // Framer Motion / GSAP (seconds)
  js: {
    hover: 0.15,
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
    entrance: 0.6,
  },
} as const;

// Stagger presets (in seconds)
export const staggerPresets = {
  fast: 0.05,
  normal: 0.1,
  slow: 0.15,
} as const;
