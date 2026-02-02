import { Metadata } from "next";
import Link from "next/link";
import { Mail, Linkedin, Github, Twitter, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/sections/ContactForm";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Contact | Rajeev Kavala",
  description:
    "Get in touch with me for opportunities, collaborations, or just to say hello.",
  openGraph: {
    title: "Contact | Rajeev Kavala",
    description: "Get in touch with me for opportunities or collaborations.",
  },
};

const socialLinks = [
  {
    name: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    description: "Send me an email",
    isExternal: false,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/rajeevkavala",
    icon: Linkedin,
    description: "Connect with me professionally",
    isExternal: true,
  },
  {
    name: "GitHub",
    href: "https://github.com/rajeevkavala",
    icon: Github,
    description: "Check out my code",
    isExternal: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/rajeevkavala",
    icon: Twitter,
    description: "Follow me for updates",
    isExternal: true,
  },
];

export default function ContactPage() {
  return (
    <main id="main-content" className="container-custom section-padding pt-32">
      {/* Page Header */}
      <AnimatedSection direction="up" delay={0}>
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg text-muted-foreground">
            I&apos;m always open to discussing new opportunities, interesting
            projects, or just having a chat about technology. Feel free to reach
            out!
          </p>
        </div>
      </AnimatedSection>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left Column - Contact Info */}
        <AnimatedSection direction="up" delay={0.1}>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Let&apos;s Connect</h2>
              <p className="text-muted-foreground">
                Whether you have a project idea, job opportunity, or just want
                to say hello, I&apos;d love to hear from you. I typically respond
                within 24-48 hours.
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Find me on</h3>
              <div className="grid gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  const LinkComponent = link.isExternal ? "a" : Link;
                  const linkProps = link.isExternal
                    ? {
                        href: link.href,
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                    : { href: link.href };

                  return (
                    <LinkComponent
                      key={link.name}
                      {...linkProps}
                      className="group flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/40 hover:bg-primary/5 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium group-hover:text-primary transition-colors">
                          {link.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {link.description}
                        </p>
                      </div>
                      {link.isExternal && (
                        <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      )}
                    </LinkComponent>
                  );
                })}
              </div>
            </div>

            {/* Direct Email */}
            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Prefer email directly?{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-primary hover:underline font-medium"
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Right Column - Contact Form */}
        <AnimatedSection direction="up" delay={0.2}>
          <Card className="border-primary/20">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <ContactForm />
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </main>
  );
}
