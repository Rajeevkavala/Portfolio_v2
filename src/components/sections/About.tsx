"use client";

import { Code2, Sparkles, Target, Layers } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";

const focusAreas = [
  {
    icon: Sparkles,
    title: "End-to-end AI Pipelines",
    description: "From data processing to model deployment",
  },
  {
    icon: Layers,
    title: "Full-Stack Applications",
    description: "Scalable systems from frontend to backend",
  },
  {
    icon: Target,
    title: "Product-Focused Development",
    description: "Building solutions users actually need",
  },
  {
    icon: Code2,
    title: "Clean, Maintainable Code",
    description: "Writing code that teams can understand",
  },
];

export function About() {
  return (
    <section className="container-custom section-padding bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection direction="up" delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.2}>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            I&apos;m a developer passionate about building AI-powered applications that solve
            real problems. With expertise spanning machine learning pipelines to polished user
            interfaces, I focus on shipping production-grade systems that deliver value.
          </p>
        </AnimatedSection>

        {/* Focus Area Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <AnimatedSection
                key={area.title}
                direction="up"
                delay={0.3 + index * 0.1}
              >
                <Card className="card-hover h-full border-primary/20 hover:border-primary/40 transition-colors">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-sm">{area.title}</h3>
                    <p className="text-xs text-muted-foreground">
                      {area.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
