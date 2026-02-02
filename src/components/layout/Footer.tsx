"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/siteConfig";
import { socialLinks } from "@/data/social";
import { Button } from "@/components/ui/button";

// Icon mapping for social links
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container-custom py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => {
              const Icon = iconMap[social.icon];
              return (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="icon"
                  asChild
                  className={cn(
                    "w-10 h-10 rounded-full",
                    "text-muted-foreground hover:text-primary",
                    "hover:bg-primary/10 transition-colors"
                  )}
                >
                  <a
                    href={social.href}
                    target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    aria-label={social.ariaLabel}
                  >
                    {Icon && <Icon className="w-5 h-5" />}
                  </a>
                </Button>
              );
            })}
          </div>

          {/* Navigation Links (Optional) */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/experience"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Experience
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Divider */}
          <div className="w-16 h-px bg-border" />

          {/* Copyright & Built With */}
          <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
            <p>
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <p className="flex items-center gap-1">
              Built with
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              using
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
              >
                Next.js
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar (Optional - for additional links) */}
      <div className="border-t border-border">
        <div className="container-custom py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <p>
              Designed & developed by{" "}
              <span className="text-foreground font-medium">{siteConfig.name}</span>
            </p>
            <div className="flex items-center gap-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-foreground transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
