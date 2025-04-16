import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define public routes that don't require authentication
const publicRoutes = ["/", "/sign-in(.*)", "/sign-up(.*)", "/api/webhook"];
const isPublicRoute = createRouteMatcher(publicRoutes);

export default clerkMiddleware(async (auth, req) => {
  // Check if the route is public or not
  if (isPublicRoute(req)) {
    return;
  }
  
  // If it's not a public route, protect it by requiring authentication
  await auth.protect();
});

export const config = {
  matcher: [
    // Skip Next.js internals
    "/((?!_next/|api/|trpc/).*)",
    // Include API routes
    "/api/:path*",
    "/trpc/:path*"
  ],
}; 