import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PreferencesPage() {
  return (
    <div className="container py-12">
      <h1 className="text-2xl font-bold mb-6">Job Preferences</h1>
      
      <div className="grid gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Job Preferences</CardTitle>
            <CardDescription>
              Manage your job preferences to receive tailored job recommendations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Your job preferences are currently managed through your profile. We are working on a dedicated preferences page to make it even easier to customize your job search.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/dashboard/profile" className="w-full">
              <Button className="w-full">
                Update Preferences in Profile
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Notification Settings</CardTitle>
            <CardDescription>
              Control how and when you receive job alerts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Configure your notification preferences to receive job alerts via WhatsApp, email, or both.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Configure Notifications
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Saved Searches</CardTitle>
            <CardDescription>
              Save your searches to quickly find relevant jobs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              No saved searches yet. Save a search to receive automatic alerts when new matching jobs are available.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Create Saved Search
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Privacy Settings</CardTitle>
            <CardDescription>
              Control who can see your profile and contact you
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Manage your privacy settings to control how your profile information is shared with potential employers.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Manage Privacy
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
} 