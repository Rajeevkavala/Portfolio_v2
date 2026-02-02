"use client";

import { useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/siteConfig";
import { Logo } from "@/components/icons";

interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

interface CtaButton {
  label: string;
  href: string;
  icon: string;
  isExternal?: boolean;
  ariaLabel: string;
}

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: readonly NavItem[];
  ctaButtons: readonly CtaButton[];
  currentPath: string;
}

export function MobileNav({
  isOpen,
  onClose,
  navItems,
  ctaButtons,
  currentPath,
}: MobileNavProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Focus trap
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen || !menuRef.current) return;

      const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }
    },
    [isOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Focus close button when menu opens
  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]);

  const isActiveRoute = (href: string) => {
    if (href === "/") return currentPath === "/";
    return currentPath.startsWith(href);
  };

  // Animation variants
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const menuVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      x: "100%",
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Menu Panel */}
          <motion.div
            ref={menuRef}
            id="mobile-menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-background shadow-2xl md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-semibold text-lg"
                  onClick={onClose}
                >
                  <Logo className="w-8 h-8 text-primary" />
                  <span>{siteConfig.name}</span>
                </Link>
                <Button
                  ref={closeButtonRef}
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 overflow-y-auto p-4" aria-label="Mobile navigation">
                <ul className="space-y-1">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.href}
                      custom={index}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <Link
                        ref={index === 0 ? firstLinkRef : undefined}
                        href={item.href}
                        onClick={onClose}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-lg text-lg font-medium transition-colors",
                          "hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset",
                          isActiveRoute(item.href)
                            ? "bg-primary/10 text-primary"
                            : "text-foreground"
                        )}
                      >
                        {item.label}
                        {isActiveRoute(item.href) && (
                          <span className="ml-auto w-2 h-2 rounded-full bg-primary" />
                        )}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* CTA Buttons */}
              <div className="p-4 border-t border-border space-y-3">
                {ctaButtons.map((cta, index) => (
                  <motion.div
                    key={cta.label}
                    custom={navItems.length + index}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Button
                      variant={cta.label === "Resume" ? "default" : "outline"}
                      className={cn(
                        "w-full justify-center",
                        cta.label === "Resume" &&
                          "bg-primary hover:bg-primary/90 text-primary-foreground"
                      )}
                      asChild
                    >
                      <a
                        href={cta.href}
                        target={cta.isExternal ? "_blank" : undefined}
                        rel={cta.isExternal ? "noopener noreferrer" : undefined}
                        download={cta.label === "Resume" ? true : undefined}
                        aria-label={cta.ariaLabel}
                        onClick={onClose}
                      >
                        {cta.icon === "download" && (
                          <Download className="w-4 h-4 mr-2" />
                        )}
                        {cta.icon === "github" && (
                          <Github className="w-4 h-4 mr-2" />
                        )}
                        {cta.label}
                        {cta.isExternal && (
                          <ExternalLink className="w-3 h-3 ml-2 opacity-70" />
                        )}
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default MobileNav;
