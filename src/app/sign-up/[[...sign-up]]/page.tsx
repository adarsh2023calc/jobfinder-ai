import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center justify-center text-center">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-8">
            <span className="text-primary">JobFinder</span>
            <span className="bg-primary text-primary-foreground px-1.5 rounded-md text-sm">AI</span>
          </Link>
          <h2 className="text-2xl font-bold tracking-tight">
            Create your account
          </h2>
          <p className="text-muted-foreground mt-2">
            Start your job search journey with JobFinder AI
          </p>
        </div>
        
        <div className="mt-10">
          <SignUp 
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