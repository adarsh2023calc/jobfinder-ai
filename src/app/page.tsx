import { Button } from "@/components/ui/button";
import { Card, CardContent,CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="text-primary">JobFinder</span>
            <span className="bg-primary text-primary-foreground px-1.5 rounded-md text-sm">AI</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/sign-in">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/sign-up">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-24 sm:py-32 md:pb-0">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Find Your Dream Job with AI-Powered Recommendations
            </h1>
            <p className="text-muted-foreground text-xl max-w-[600px]">
              JobFinder AI matches your skills and preferences with the perfect job opportunities and sends them directly to your WhatsApp.
            </p>
            <div className="flex gap-4 mt-4">
              <Link href="/sign-up">
                <Button size="lg" className="px-8">Get Started</Button>
              </Link>
              <Link href="#how-it-works">
                <Button size="lg" variant="outline">How It Works</Button>
              </Link>
            </div>
          </div>
          <div className="hidden md:block relative h-[600px]">
            <Image 
              src="/hero-image.png" 
              alt="JobFinder AI Dashboard"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-24 sm:py-32" id="features">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Why Choose JobFinder AI
          </h2>
          <p className="text-muted-foreground text-xl mt-4 max-w-[800px] mx-auto">
            Our AI-powered platform streamlines your job search and delivers personalized opportunities
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border border-border/40">
              <CardHeader>
                <div className="p-2 w-fit rounded-full bg-primary/10 mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-muted/50 py-24 sm:py-32" id="how-it-works">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              How It Works
            </h2>
            <p className="text-muted-foreground text-xl mt-4 max-w-[800px] mx-auto">
              Get started in just a few simple steps
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-primary text-primary-foreground font-bold rounded-full w-12 h-12 flex items-center justify-center mb-4 text-xl">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-24 sm:py-32">
        <Card className="bg-primary text-primary-foreground border-none">
          <CardContent className="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Ready to find your dream job?</h2>
              <p className="text-xl mt-4 max-w-[600px] text-primary-foreground/90">
                Sign up today and start receiving personalized job recommendations via WhatsApp
              </p>
            </div>
            <Link href="/sign-up">
              <Button size="lg" variant="secondary" className="px-8 whitespace-nowrap">
                Get Started
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 font-bold text-xl">
              <span>JobFinder</span>
              <span className="bg-primary text-primary-foreground px-1.5 rounded-md text-sm">AI</span>
            </div>
            <div className="flex gap-8 text-muted-foreground">
              <a href="#features" className="hover:text-foreground transition-colors">Features</a>
              <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} JobFinder AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Feature data
const features = [
  {
    title: "AI-Powered Matching",
    description: "Our advanced AI engine matches your skills and preferences with the perfect job opportunities.",
    icon: ({ className }: { className?: string }) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" />
      </svg>
    ),
  },
  {
    title: "WhatsApp Notifications",
    description: "Receive job recommendations directly to your phone via WhatsApp, so you never miss an opportunity.",
    icon: ({ className }: { className?: string }) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    title: "Smart Filtering",
    description: "Filter jobs by location, salary, work type, and more to find the perfect match for your needs.",
    icon: ({ className }: { className?: string }) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
      </svg>
    ),
  },
  {
    title: "Personalized Dashboard",
    description: "Track your job search progress and preferences from your personalized dashboard.",
    icon: ({ className }: { className?: string }) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><line x1="3" x2="21" y1="9" y2="9" /><path d="M8 2v4" /><path d="M16 2v4" /><path d="M9 14l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Job Market Insights",
    description: "Get insights about the job market, salary ranges, and in-demand skills for your field.",
    icon: ({ className }: { className?: string }) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
  },
  {
    title: "Easy Profile Setup",
    description: "Quickly set up your profile with your skills, experience, and preferences to start receiving matches.",
    icon: ({ className }: { className?: string }) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

// How it works steps
const steps = [
  {
    title: "Create an Account",
    description: "Sign up using email, phone, Google, or LinkedIn to get started.",
  },
  {
    title: "Complete Your Profile",
    description: "Add your skills, experience, and job preferences.",
  },
  {
    title: "Receive Matches",
    description: "Our AI will match you with relevant job opportunities.",
  },
  {
    title: "Get WhatsApp Alerts",
    description: "Receive notifications about new matches via WhatsApp.",
  },
];
