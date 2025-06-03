import { SignIn } from "@clerk/nextjs";

import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center justify-center text-center">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-8">
            <span className="text-primary">JobFinder</span>
            <span className="bg-primary text-primary-foreground px-1.5 rounded-md text-sm">AI</span>
          </Link>
          <h2 className="text-2xl font-bold tracking-tight">
            Welcome back
          </h2>
          <p className="text-muted-foreground mt-2">
            Sign in to your account to continue
          </p>
        </div>
        
        <div className="mt-10">
          <SignIn 
            appearance={{
              elements: {
                formButtonPrimary: "bg-primary hover:bg-primary/90 text-primary-foreground",
                footerActionLink: "text-primary hover:text-primary/90",
              }
            }}
          />
        </div>
      </div>
    </div>
  );
} 