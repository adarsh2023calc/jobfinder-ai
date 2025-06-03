import { UserButton } from "@clerk/nextjs";
import Link from "next/link";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Dashboard Navbar */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Link href="/dashboard" className="flex items-center gap-2">
              <span className="text-primary">JobFinder</span>
              <span className="bg-primary text-primary-foreground px-1.5 rounded-md text-sm">AI</span>
            </Link>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">
              Dashboard
            </Link>
            <Link href="/dashboard/profile" className="text-sm font-medium hover:text-primary transition-colors">
              Profile
            </Link>
            <Link href="/dashboard/preferences" className="text-sm font-medium hover:text-primary transition-colors">
              Job Preferences
            </Link>
            <UserButton 
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  userButtonAvatarBox: "w-9 h-9"
                }
              }}
            />
          </nav>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="flex-1 pb-12">
        {children}
      </main>

      {/* Dashboard Footer */}
      <footer className="border-t py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} JobFinder AI
            </span>
          </div>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Help</Link>
          </div>
        </div>
      </footer>
    </div>
  );
} 