import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rajeev Kavala | AI & Full-Stack Developer",
    template: "%s | Rajeev Kavala",
  },
  description:
    "AI & Full-Stack Developer building end-to-end AI-powered web applications. From LLM pipelines to polished user interfaces.",
  keywords: [
    "Rajeev Kavala",
    "AI Developer",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Machine Learning",
    "LLM",
    "Portfolio",
  ],
  authors: [{ name: "Rajeev Kavala" }],
  creator: "Rajeev Kavala",
  metadataBase: new URL("https://rajeevkavala.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rajeevkavala.dev",
    title: "Rajeev Kavala | AI & Full-Stack Developer",
    description:
      "AI & Full-Stack Developer building end-to-end AI-powered web applications.",
    siteName: "Rajeev Kavala Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajeev Kavala | AI & Full-Stack Developer",
    description:
      "AI & Full-Stack Developer building end-to-end AI-powered web applications.",
    creator: "@rajeevkavala",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
