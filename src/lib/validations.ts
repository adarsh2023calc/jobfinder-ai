import { z } from 'zod';

// Basic user profile validation schema
export const userProfileSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits" }),
  skills: z.array(z.string()).min(1, { message: "Add at least 1 skill" }),
  preferredRoles: z.array(z.string()).min(1, { message: "Select at least 1 preferred role" }),
  preferredLocations: z.array(z.string()).optional(),
  industries: z.array(z.string()).min(1, { message: "Select at least 1 industry" }),
  workType: z.enum(["remote", "hybrid", "on-site"]),
  summary: z.string().optional(),
  availability: z.enum(["immediate", "two_weeks", "one_month", "other"]),
  linkedinUrl: z.string().url().optional().or(z.literal("")),
  portfolioUrl: z.string().url().optional().or(z.literal("")),
  githubUrl: z.string().url().optional().or(z.literal("")),
});

// Experience validation schema
export const experienceSchema = z.object({
  role: z.string().min(2, { message: "Role must be at least 2 characters" }),
  company: z.string().min(2, { message: "Company must be at least 2 characters" }),
  years: z.number().min(0, { message: "Years must be a positive number" }),
  description: z.string().optional(),
});

// Education validation schema
export const educationSchema = z.object({
  degree: z.string().min(2, { message: "Degree must be at least 2 characters" }),
  institution: z.string().min(2, { message: "Institution must be at least 2 characters" }),
  year: z.number().min(1900, { message: "Year must be valid" }).max(new Date().getFullYear() + 5),
});

// Salary expectation validation schema
export const salarySchema = z.object({
  min: z.number().min(0, { message: "Minimum salary must be a positive number" }),
  max: z.number().min(0, { message: "Maximum salary must be a positive number" }),
  currency: z.string().default("USD"),
}); 