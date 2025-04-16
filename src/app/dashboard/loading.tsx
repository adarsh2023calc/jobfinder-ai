import { Card, CardContent } from "@/components/ui/card";

export default function DashboardLoading() {
  return (
    <div className="container py-12">
      <div className="h-8 w-64 bg-muted/60 rounded-md animate-pulse mb-8"></div>
      <div className="h-4 w-96 max-w-full bg-muted/60 rounded-md animate-pulse mb-12"></div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {Array.from({ length: 3 }).map((_, i) => (
          <LoadingCard key={i} />
        ))}
      </div>
      
      <div className="h-6 w-48 bg-muted/60 rounded-md animate-pulse mb-6"></div>
      
      <div className="w-full h-64 bg-muted/60 rounded-md animate-pulse"></div>
    </div>
  );
}

function LoadingCard() {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="p-6">
          <div className="h-6 w-32 bg-muted/60 rounded-md animate-pulse mb-3"></div>
          <div className="h-4 w-48 bg-muted/60 rounded-md animate-pulse mb-6"></div>
          <div className="space-y-2">
            <div className="h-3 w-full bg-muted/60 rounded-md animate-pulse"></div>
            <div className="h-3 w-full bg-muted/60 rounded-md animate-pulse"></div>
            <div className="h-3 w-2/3 bg-muted/60 rounded-md animate-pulse"></div>
          </div>
        </div>
        <div className="p-4 border-t">
          <div className="h-9 w-full bg-muted/60 rounded-md animate-pulse"></div>
        </div>
      </CardContent>
    </Card>
  );
} 