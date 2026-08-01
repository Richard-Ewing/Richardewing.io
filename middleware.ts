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

  // Edge-level 308 Permanent Redirect for Tier C and non-indexed compare pages -> /tools
  if (pathname.startsWith('/compare/')) {
    const slug = pathname.replace('/compare/', '').split('/')[0];
    const tierA = [
      'claude-code-vs-cursor-governance', 'claude-code-retry-loop-prevention',
      'claude-context-rot-mitigation', 'cursor-repository-drift-prevention',
      'ai-coding-agents', 'ai-guardrails-platforms', 'github-copilot-problems',
      'cursor-problems', 'windsurf-problems', 'why-claude-loses-context',
      'why-retry-loops-happen', 'why-cursor-rewrites-files', 'why-ai-coding-burns-money',
      'why-mcp-is-dangerous', 'claude-md-is-not-governance', 'pdi-vs-sonarqube',
      'pdi-vs-codeclimate', 'pdi-vs-waydev', 'audit-interview-vs-leetcode',
      'audit-interview-vs-hackerrank', 'audit-interview-vs-traditional',
      'aueb-vs-aws-cost-explorer', 'ev-se-vs-jellyfish', 'aper-vs-jellyfish',
      'aper-vs-linearb', 'copilot-roi-vs-gitclear', 'dora-metrics-vs-aper',
      'shadow-ai-vs-shadow-it', 'technical-debt-vs-technical-insolvency',
      'vibe-coding-vs-agile'
    ];
    if (slug && !tierA.includes(slug)) {
      return NextResponse.redirect(new URL('/tools', req.url), 308);
    }
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
