import Link from "next/link";
import { FileQuestion, Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function NotFound() {
  return (
    <main id="main-content" className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* Large 404 Display */}
        <div className="mb-8">
          <h1 className="text-[10rem] sm:text-[12rem] font-bold leading-none text-gradient-blue opacity-20 select-none">
            404
          </h1>
        </div>

        <Card className="border-none shadow-none bg-transparent">
          <CardHeader>
            <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <FileQuestion className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-2xl sm:text-3xl">Page not found</CardTitle>
            <CardDescription className="text-base max-w-md mx-auto">
              Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
              Let&apos;s get you back on track.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/">
                  <Home className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="/projects">
                  <Search className="w-4 h-4 mr-2" />
                  View Projects
                </Link>
              </Button>
            </div>

            {/* Quick links */}
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Popular destinations:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                <Button asChild variant="ghost" size="sm">
                  <Link href="/projects">Projects</Link>
                </Button>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/case-studies">Case Studies</Link>
                </Button>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/experience">Experience</Link>
                </Button>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/contact">Contact</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
