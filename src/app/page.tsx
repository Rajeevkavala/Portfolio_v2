import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Github, Download, CheckCircle2, Rocket, Code2, Layers } from "lucide-react";

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen">
      {/* Hero Section */}
      <section className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {/* Name with gradient */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold animate-fade-in">
              <span className="text-gradient-blue">Rajeev Kavala</span>
            </h1>

            {/* Role */}
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground animate-slide-up animation-delay-100">
              AI & Full-Stack Developer
            </p>

            {/* Value proposition */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-slide-up animation-delay-200">
              I build and ship AI-powered web applications end-to-end — from LLM pipelines 
              to polished user interfaces.
            </p>

            {/* Human signal */}
            <p className="text-base text-muted-foreground/80 animate-slide-up animation-delay-300">
              Currently preparing for GATE CSE 2027 while actively seeking SDE-1 / AI roles.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 animate-slide-up animation-delay-300">
              <Button size="lg" className="btn-primary" asChild>
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="btn-secondary" asChild>
                <a href="/resume.pdf" download aria-label="Download my resume as PDF">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume (PDF)
                </a>
              </Button>
              <Button size="lg" variant="ghost" asChild>
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
            </div>
          </div>
        </div>
      </section>

      {/* Phase 2 Status Card */}
      <section className="container-custom pb-24">
        <div className="max-w-4xl mx-auto">
          <Card className="card-hover border-primary/20 bg-primary/5">
            <CardHeader>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                <CardTitle>Phase 2 Complete — Layout & Navigation</CardTitle>
              </div>
              <CardDescription>
                Core layout components have been implemented. The portfolio now has a consistent structure.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                {/* Completed Features */}
                <div>
                  <p className="font-medium mb-3 flex items-center gap-2">
                    <Rocket className="w-4 h-4 text-primary" />
                    Completed Features:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Sticky header with backdrop blur & scroll progress</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Mobile navigation with animations & focus trap</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Footer with social links</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Skip link for accessibility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Error & 404 pages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Loading skeleton states</span>
                    </li>
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <p className="font-medium mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-primary" />
                    Components Built:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Header.tsx</Badge>
                    <Badge>MobileNav.tsx</Badge>
                    <Badge>Footer.tsx</Badge>
                    <Badge>SkipLink.tsx</Badge>
                    <Badge variant="outline">loading.tsx</Badge>
                    <Badge variant="outline">error.tsx</Badge>
                    <Badge variant="outline">not-found.tsx</Badge>
                  </div>

                  <p className="font-medium mt-4 mb-3 flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-primary" />
                    Key Features:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Active Route Highlight</Badge>
                    <Badge variant="secondary">Theme Toggle</Badge>
                    <Badge variant="secondary">Framer Motion</Badge>
                    <Badge variant="secondary">WCAG 2.4.1</Badge>
                  </div>
                </div>
              </div>

              {/* Next Phase Preview */}
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Next up (Phase 3):</strong>{" "}
                  Home Page Sections — Hero, About, and Skills sections with scroll animations.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
