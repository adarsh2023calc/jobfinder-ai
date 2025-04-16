import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserProfile } from "@clerk/nextjs";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="container py-12">
      <section className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          Welcome to your dashboard! 👋
        </h1>
        <p className="text-muted-foreground text-lg">
          Find your perfect job match with AI-powered recommendations
        </p>
      </section>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {/* Profile Completion Card */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Complete Your Profile</CardTitle>
            <CardDescription>
              Add your skills and experience to get better job matches
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-3">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-full bg-muted rounded-full h-2.5">
                <div className="bg-primary h-2.5 rounded-full w-2/5"></div>
              </div>
              <span className="text-sm font-medium">40%</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Complete your profile to increase your chances of finding the perfect job match.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/dashboard/profile" className="w-full">
              <Button className="w-full">Complete Profile</Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Job Preferences Card */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Job Preferences</CardTitle>
            <CardDescription>
              Set your preferred job types, locations, and salary
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-3">
            <p className="text-sm text-muted-foreground">
              Customize your job preferences to receive personalized recommendations that match your career goals.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/dashboard/preferences" className="w-full">
              <Button variant="outline" className="w-full">Update Preferences</Button>
            </Link>
          </CardFooter>
        </Card>

        {/* WhatsApp Connection Card */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Connect WhatsApp</CardTitle>
            <CardDescription>
              Receive job alerts directly on WhatsApp
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-3">
            <p className="text-sm text-muted-foreground">
              Stay updated with the latest job opportunities matching your profile via WhatsApp notifications.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Connect WhatsApp</Button>
          </CardFooter>
        </Card>
      </div>

      {/* Recent Job Matches Section */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold tracking-tight">Recent Job Matches</h2>
          <Button variant="ghost">View all</Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Empty state when no job matches yet */}
          <Card className="col-span-full text-center p-12">
            <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-muted-foreground mb-4"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
              <h3 className="mt-4 text-lg font-semibold">No job matches yet</h3>
              <p className="mb-4 mt-2 text-sm text-muted-foreground px-8">
                Complete your profile and set your job preferences to start receiving personalized job recommendations.
              </p>
              <Link href="/dashboard/profile">
                <Button>Complete Your Profile</Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
} 