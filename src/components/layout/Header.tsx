"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Download, Github, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig, navItems, ctaButtons } from "@/data/siteConfig";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { MobileNav } from "./MobileNav";
import { Logo } from "@/components/icons";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll for sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
            : "bg-transparent"
        )}
      >
        {/* Scroll Progress Bar */}
        <ScrollProgressBar />

        <div className="container-custom">
          <nav
            className="flex items-center justify-between h-16 md:h-20"
            aria-label="Main navigation"
          >
            {/* Logo / Site Name */}
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold text-lg hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
              aria-label={`${siteConfig.name} - Home`}
            >
              <Logo className="w-8 h-8 text-primary" />
              <span className="hidden sm:inline">{siteConfig.name}</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-md transition-colors",
                    "hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                    isActiveRoute(item.href)
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                  {isActiveRoute(item.href) && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop CTAs & Theme Toggle */}
            <div className="hidden md:flex items-center gap-2">
              <ThemeToggle />
              
              {ctaButtons.map((cta) => (
                <Button
                  key={cta.label}
                  variant={cta.label === "Resume" ? "default" : "ghost"}
                  size="sm"
                  asChild
                  className={cn(
                    cta.label === "Resume" &&
                      "bg-primary hover:bg-primary/90 text-primary-foreground"
                  )}
                >
                  <a
                    href={cta.href}
                    target={cta.isExternal ? "_blank" : undefined}
                    rel={cta.isExternal ? "noopener noreferrer" : undefined}
                    download={cta.label === "Resume" ? true : undefined}
                    aria-label={cta.ariaLabel}
                  >
                    {cta.icon === "download" && <Download className="w-4 h-4 mr-2" />}
                    {cta.icon === "github" && <Github className="w-4 h-4 mr-2" />}
                    {cta.label}
                  </a>
                </Button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Navigation Overlay */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
        ctaButtons={ctaButtons}
        currentPath={pathname}
      />

      {/* Spacer for fixed header */}
      <div className="h-16 md:h-20" aria-hidden="true" />
    </>
  );
}

// Scroll Progress Bar Component
function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-transparent">
      <motion.div
        className="h-full bg-primary"
        style={{ width: `${progress}%` }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}

export default Header;
