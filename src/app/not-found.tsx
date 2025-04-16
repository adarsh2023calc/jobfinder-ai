import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-primary">JobFinder</span>
              <span className="bg-primary text-primary-foreground px-1.5 rounded-md text-sm">AI</span>
            </Link>
          </div>
        </div>
      </nav>
      
      <main className="flex flex-1 items-center justify-center p-6">
        <div className="text-center space-y-6 max-w-md">
          <h1 className="text-7xl font-bold text-primary">404</h1>
          <h2 className="text-2xl font-semibold">Page Not Found</h2>
          <p className="text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg">Back to Home</Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline" size="lg">Go to Dashboard</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
} 