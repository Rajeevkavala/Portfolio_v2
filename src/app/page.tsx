import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header placeholder */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container-custom flex h-16 items-center justify-between">
          <span className="text-xl font-bold text-gradient-blue">Rajeev Kavala</span>
          <ThemeToggle />
        </div>
      </header>

      {/* Hero Section - Phase 1 Test */}
      <main className="container-custom section-padding">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient-blue animate-fade-in">
            Phase 1 Complete
          </h1>
          <p className="text-xl text-muted-foreground animate-slide-up animation-delay-100">
            Project infrastructure is set up and ready for development.
          </p>
          
          {/* Test Components */}
          <div className="flex flex-wrap justify-center gap-4 animate-slide-up animation-delay-200">
            <Button className="btn-primary">Primary Button</Button>
            <Button variant="outline" className="btn-secondary">Secondary Button</Button>
            <Button variant="ghost" className="btn-ghost">Ghost Button</Button>
          </div>

          {/* Test Card */}
          <Card className="card-hover mt-8 text-left animate-slide-up animation-delay-300">
            <CardHeader>
              <CardTitle>✅ Infrastructure Ready</CardTitle>
              <CardDescription>
                All Phase 1 components have been set up successfully.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="font-medium mb-2">Completed:</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Next.js 15</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge>Tailwind CSS v4</Badge>
                    <Badge>ShadCN UI</Badge>
                    <Badge>Framer Motion</Badge>
                    <Badge>GSAP</Badge>
                    <Badge>Lenis</Badge>
                    <Badge variant="outline">Dark Mode</Badge>
                    <Badge variant="outline">Blue Theme</Badge>
                  </div>
                </div>
                <div>
                  <p className="font-medium mb-2">Project Structure:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• /components (ui, layout, sections, shared, admin, icons)</li>
                    <li>• /data (siteConfig, skills, projects, experience)</li>
                    <li>• /lib (utils, constants, animations, gsap)</li>
                    <li>• /hooks (useReducedMotion, useScrollAnimation, useMediaQuery)</li>
                    <li>• /types (project, experience, skill, caseStudy)</li>
                    <li>• /providers (ThemeProvider, LenisProvider)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer placeholder */}
      <footer className="border-t border-border py-8">
        <div className="container-custom text-center text-sm text-muted-foreground">
          © 2026 Rajeev Kavala. Built with Next.js
        </div>
      </footer>
    </div>
  );
}
