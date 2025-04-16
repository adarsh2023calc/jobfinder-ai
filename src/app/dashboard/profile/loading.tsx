import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

export default function ProfileLoading() {
  return (
    <div className="container py-12">
      <div className="h-8 w-64 bg-muted/60 rounded-md animate-pulse mb-8"></div>
      
      <div className="h-10 w-full bg-muted/60 rounded-md animate-pulse mb-6"></div>
      
      <Card>
        <CardHeader className="pb-4">
          <div className="h-6 w-40 bg-muted/60 rounded-md animate-pulse mb-3"></div>
          <div className="h-4 w-64 bg-muted/60 rounded-md animate-pulse"></div>
        </CardHeader>
        <CardContent className="space-y-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="h-4 w-24 bg-muted/60 rounded-md animate-pulse"></div>
              <div className="h-10 w-full bg-muted/60 rounded-md animate-pulse"></div>
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <div className="flex w-full justify-between">
            <div className="h-10 w-28 bg-muted/60 rounded-md animate-pulse"></div>
            <div className="h-10 w-28 bg-muted/60 rounded-md animate-pulse"></div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
} 