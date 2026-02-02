// GSAP animation presets for common use cases
import gsap, { gsapEasings, gsapDurations } from "./gsap";

// Fade in elements
export function animateFadeIn(
  element: gsap.TweenTarget,
  options?: gsap.TweenVars
) {
  return gsap.fromTo(
    element,
    { opacity: 0 },
    {
      opacity: 1,
      duration: gsapDurations.normal,
      ease: gsapEasings.smooth,
      ...options,
    }
  );
}

// Slide up with fade
export function animateSlideUp(
  element: gsap.TweenTarget,
  options?: gsap.TweenVars
) {
  return gsap.fromTo(
    element,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: gsapDurations.slow,
      ease: gsapEasings.smooth,
      ...options,
    }
  );
}

// Slide down with fade
export function animateSlideDown(
  element: gsap.TweenTarget,
  options?: gsap.TweenVars
) {
  return gsap.fromTo(
    element,
    { opacity: 0, y: -20 },
    {
      opacity: 1,
      y: 0,
      duration: gsapDurations.slow,
      ease: gsapEasings.smooth,
      ...options,
    }
  );
}

// Stagger animation for multiple elements
export function animateStagger(
  elements: gsap.TweenTarget,
  options?: gsap.TweenVars & { stagger?: number }
) {
  const { stagger = 0.1, ...rest } = options || {};
  
  return gsap.fromTo(
    elements,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: gsapDurations.slow,
      ease: gsapEasings.smooth,
      stagger,
      ...rest,
    }
  );
}

// Hero section entrance animation
export function animateHeroEntrance(containerSelector: string) {
  const tl = gsap.timeline({ defaults: { ease: gsapEasings.smooth } });

  tl.fromTo(
    `${containerSelector} .hero-name`,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6 }
  )
    .fromTo(
      `${containerSelector} .hero-role`,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.4"
    )
    .fromTo(
      `${containerSelector} .hero-tagline`,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.4"
    )
    .fromTo(
      `${containerSelector} .hero-cta`,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.3"
    );

  return tl;
}

// Card hover animation
export function createCardHoverAnimation(element: HTMLElement) {
  const tl = gsap.timeline({ paused: true });

  tl.to(element, {
    scale: 1.02,
    duration: gsapDurations.fast,
    ease: gsapEasings.smooth,
  });

  return {
    play: () => tl.play(),
    reverse: () => tl.reverse(),
  };
}

// Button press animation
export function createButtonPressAnimation(element: HTMLElement) {
  return {
    onMouseDown: () => {
      gsap.to(element, {
        scale: 0.98,
        duration: 0.1,
        ease: gsapEasings.smooth,
      });
    },
    onMouseUp: () => {
      gsap.to(element, {
        scale: 1,
        duration: 0.1,
        ease: gsapEasings.smooth,
      });
    },
  };
}
