import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware(async (auth, req) => {
  const url = req.nextUrl;
  const pathname = url.pathname;

  // Edge-level 308 Permanent Redirect for /advisory -> /services
  if (pathname === '/advisory' || pathname.startsWith('/advisory/')) {
    return NextResponse.redirect(new URL('/services', req.url), 308);
  }

  // Edge-level 308 Permanent Redirect for /research/concepts -> /concepts
  if (pathname === '/research/concepts') {
    return NextResponse.redirect(new URL('/concepts', req.url), 308);
  }

  // Edge-level 308 Permanent Redirect for /research/concepts/:slug -> /concepts/:slug
  if (pathname.startsWith('/research/concepts/')) {
    const slug = pathname.replace('/research/concepts/', '');
    return NextResponse.redirect(new URL(`/concepts/${slug}`, req.url), 308);
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
