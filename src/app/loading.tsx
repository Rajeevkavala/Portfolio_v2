import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main id="main-content" className="min-h-screen">
      {/* Hero Section Skeleton */}
      <section className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {/* Name skeleton */}
            <Skeleton className="h-16 w-80 max-w-full" />
            
            {/* Role skeleton */}
            <Skeleton className="h-8 w-64" />
            
            {/* Description skeleton */}
            <div className="space-y-3">
              <Skeleton className="h-5 w-full max-w-2xl" />
              <Skeleton className="h-5 w-full max-w-xl" />
            </div>
            
            {/* CTA buttons skeleton */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Skeleton className="h-12 w-36" />
              <Skeleton className="h-12 w-44" />
              <Skeleton className="h-12 w-28" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section Skeleton */}
      <section className="container-custom section-padding bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <Skeleton className="h-10 w-48 mb-8" />
          <div className="space-y-3">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-3/4" />
          </div>
          
          {/* Focus cards skeleton */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-24 rounded-lg" />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section Skeleton */}
      <section className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          <Skeleton className="h-10 w-64 mb-8" />
          <div className="flex flex-wrap gap-3">
            {[...Array(12)].map((_, i) => (
              <Skeleton key={i} className="h-10 w-24 rounded-full" />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
