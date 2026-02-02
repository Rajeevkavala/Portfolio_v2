"use client";

import { useState, useTransition } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  message: string;
  honeypot: string; // Spam protection
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_MESSAGE_LENGTH = 10;
const MAX_MESSAGE_LENGTH = 1000;

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    honeypot: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [isPending, startTransition] = useTransition();

  const validateField = (name: keyof FormData, value: string): string | undefined => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 2) return "Name must be at least 2 characters";
        if (value.trim().length > 100) return "Name must be less than 100 characters";
        return undefined;

      case "email":
        if (!value.trim()) return "Email is required";
        if (!EMAIL_REGEX.test(value)) return "Please enter a valid email address";
        return undefined;

      case "message":
        if (!value.trim()) return "Message is required";
        if (value.trim().length < MIN_MESSAGE_LENGTH)
          return `Message must be at least ${MIN_MESSAGE_LENGTH} characters`;
        if (value.trim().length > MAX_MESSAGE_LENGTH)
          return `Message must be less than ${MAX_MESSAGE_LENGTH} characters`;
        return undefined;

      default:
        return undefined;
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      message: validateField("message", formData.message),
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const error = validateField(name as keyof FormData, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check - if filled, it's likely a bot
    if (formData.honeypot) {
      setStatus("success");
      return;
    }

    if (!validateForm()) return;

    startTransition(async () => {
      setStatus("submitting");

      // Simulate submission delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // For v1: Open mailto with prefilled content
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      
      const mailtoLink = `mailto:rajeevkavala@example.com?subject=${subject}&body=${body}`;
      
      // Open mailto
      window.location.href = mailtoLink;
      
      setStatus("success");
      setFormData({ name: "", email: "", message: "", honeypot: "" });
    });
  };

  const characterCount = formData.message.length;
  const isOverLimit = characterCount > MAX_MESSAGE_LENGTH;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Success Message */}
      {status === "success" && (
        <Alert className="border-green-500/50 bg-green-500/10">
          <CheckCircle2 className="h-4 w-4 text-green-500" />
          <AlertDescription className="text-green-700 dark:text-green-400">
            Your email client should open now. If it doesn&apos;t, please email me
            directly at rajeevkavala@example.com
          </AlertDescription>
        </Alert>
      )}

      {/* Error Message */}
      {status === "error" && (
        <Alert className="border-red-500/50 bg-red-500/10">
          <AlertCircle className="h-4 w-4 text-red-500" />
          <AlertDescription className="text-red-700 dark:text-red-400">
            Something went wrong. Please try again or email me directly at
            rajeevkavala@example.com
          </AlertDescription>
        </Alert>
      )}

      {/* Honeypot field - hidden from users, visible to bots */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <Label htmlFor="honeypot">Leave this field empty</Label>
        <Input
          type="text"
          id="honeypot"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Name Field */}
      <div className="space-y-2">
        <Label htmlFor="name">
          Name <span className="text-red-500">*</span>
        </Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Your name"
          disabled={status === "submitting"}
          className={cn(errors.name && "border-red-500 focus-visible:ring-red-500")}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="text-sm text-red-500">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <Label htmlFor="email">
          Email <span className="text-red-500">*</span>
        </Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="your.email@example.com"
          disabled={status === "submitting"}
          className={cn(errors.email && "border-red-500 focus-visible:ring-red-500")}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-sm text-red-500">
            {errors.email}
          </p>
        )}
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Label htmlFor="message">
            Message <span className="text-red-500">*</span>
          </Label>
          <span
            className={cn(
              "text-xs",
              isOverLimit ? "text-red-500" : "text-muted-foreground"
            )}
          >
            {characterCount}/{MAX_MESSAGE_LENGTH}
          </span>
        </div>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Tell me about your project or opportunity..."
          rows={5}
          disabled={status === "submitting"}
          className={cn(
            "resize-none",
            errors.message && "border-red-500 focus-visible:ring-red-500"
          )}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-sm text-red-500">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={status === "submitting" || isPending}
      >
        {status === "submitting" || isPending ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}

export default ContactForm;
