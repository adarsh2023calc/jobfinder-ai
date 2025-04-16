import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

export default function PreferencesLoading() {
  return (
    <div className="container py-12">
      <div className="h-8 w-48 bg-muted/60 rounded-md animate-pulse mb-8"></div>
      
      <div className="grid gap-6 mb-12">
        <Card>
          <CardHeader className="pb-4">
            <div className="h-6 w-40 bg-muted/60 rounded-md animate-pulse mb-3"></div>
            <div className="h-4 w-80 bg-muted/60 rounded-md animate-pulse"></div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="h-4 w-full bg-muted/60 rounded-md animate-pulse"></div>
              <div className="h-4 w-full bg-muted/60 rounded-md animate-pulse"></div>
              <div className="h-4 w-3/4 bg-muted/60 rounded-md animate-pulse"></div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="h-10 w-full bg-muted/60 rounded-md animate-pulse"></div>
          </CardFooter>
        </Card>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <Card key={i}>
            <CardHeader className="pb-4">
              <div className="h-6 w-40 bg-muted/60 rounded-md animate-pulse mb-3"></div>
              <div className="h-4 w-48 bg-muted/60 rounded-md animate-pulse"></div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="h-4 w-full bg-muted/60 rounded-md animate-pulse"></div>
                <div className="h-4 w-4/5 bg-muted/60 rounded-md animate-pulse"></div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="h-10 w-full bg-muted/60 rounded-md animate-pulse"></div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
} 