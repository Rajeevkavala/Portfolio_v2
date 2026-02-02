"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/siteConfig";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function Hero() {
  return (
    <section className="container-custom section-padding pt-32 md:pt-40">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-6">
          {/* Name with gradient */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
          >
            <span className="text-gradient-blue">{siteConfig.name}</span>
          </motion.h1>

          {/* Role */}
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground"
          >
            {siteConfig.title}
          </motion.p>

          {/* Value proposition - USP tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl"
          >
            {siteConfig.description}
          </motion.p>

          {/* Human signal */}
          <motion.p
            variants={itemVariants}
            className="text-base text-muted-foreground/80"
          >
            Currently preparing for GATE CSE 2027 while actively seeking SDE-1 / AI roles.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4"
          >
            <Button
              size="lg"
              className="btn-primary w-full sm:w-auto"
              asChild
            >
              <Link href="/projects">
                View Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="btn-secondary w-full sm:w-auto"
              asChild
            >
              <a
                href="/resume.pdf"
                download
                aria-label="Download my resume as PDF"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume (PDF)
              </a>
            </Button>

            <Button
              size="lg"
              variant="ghost"
              className="w-full sm:w-auto"
              asChild
            >
              <a
                href="https://github.com/rajeevkavala"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View my GitHub profile"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
