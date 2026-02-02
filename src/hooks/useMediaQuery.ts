"use client";

import { useSyncExternalStore } from "react";
import { BREAKPOINTS } from "@/lib/constants";

type Breakpoint = keyof typeof BREAKPOINTS;

/**
 * Hook to check if the viewport matches a media query
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = (callback: () => void) => {
    if (typeof window === "undefined") return () => {};
    
    const mediaQuery = window.matchMedia(query);
    mediaQuery.addEventListener("change", callback);
    
    return () => {
      mediaQuery.removeEventListener("change", callback);
    };
  };

  const getSnapshot = () => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  };

  const getServerSnapshot = () => false;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/**
 * Hook to check if the viewport is at least a certain breakpoint
 */
export function useBreakpoint(breakpoint: Breakpoint): boolean {
  return useMediaQuery(`(min-width: ${BREAKPOINTS[breakpoint]}px)`);
}

/**
 * Hook to get the current breakpoint
 */
export function useCurrentBreakpoint(): Breakpoint | null {
  const isSm = useBreakpoint("sm");
  const isMd = useBreakpoint("md");
  const isLg = useBreakpoint("lg");
  const isXl = useBreakpoint("xl");
  const is2xl = useBreakpoint("2xl");

  if (is2xl) return "2xl";
  if (isXl) return "xl";
  if (isLg) return "lg";
  if (isMd) return "md";
  if (isSm) return "sm";
  return null;
}

/**
 * Hook to check if the device is mobile
 */
export function useIsMobile(): boolean {
  return !useBreakpoint("md");
}

/**
 * Hook to check if the device is desktop
 */
export function useIsDesktop(): boolean {
  return useBreakpoint("lg");
}
