"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <main id="main-content" className="min-h-screen flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 text-destructive" />
          </div>
          <CardTitle className="text-2xl">Something went wrong</CardTitle>
          <CardDescription>
            An unexpected error occurred. Don&apos;t worry, we&apos;ve been notified and are working on a fix.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Error details (only in development) */}
          {process.env.NODE_ENV === "development" && (
            <div className="p-3 rounded-md bg-muted text-sm font-mono text-muted-foreground overflow-auto max-h-32">
              {error.message}
            </div>
          )}
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={reset}
              className="flex-1"
              variant="default"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Try again
            </Button>
            <Button
              asChild
              variant="outline"
              className="flex-1"
            >
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                Go home
              </Link>
            </Button>
          </div>

          {/* Error digest for support */}
          {error.digest && (
            <p className="text-xs text-center text-muted-foreground">
              Error ID: {error.digest}
            </p>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
