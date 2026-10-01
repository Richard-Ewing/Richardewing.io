import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const TIER_A_SLUGS = new Set([
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
  'vibe-coding-vs-agile',
  'why-anthropic-bills-spike-with-tool-use',
  'why-local-llms-are-more-expensive-than-apis',
  'why-ai-pr-review-time-is-exploding',
  'why-cfos-are-shutting-down-ai-pilots',
  'why-rag-returns-stale-data-after-updates',
  'why-copilot-didnt-reduce-engineering-headcount',
  'why-ai-feature-margins-turn-negative',
  'why-ai-costs-spiral-from-silent-retries',
  'why-ai-prompts-break-after-model-updates',
  'why-ai-prds-and-specs-create-waste',
  'why-ai-teams-become-api-janitors',
  'why-unused-ai-features-drain-cloud-budgets',
  'why-companies-pay-shadow-ai-vendor-tax',
  'why-board-ai-metrics-sound-impressive-but-mean-nothing',
  'why-ai-code-creates-more-bugs-than-it-fixes',
  'exogram-vs-lakera',
  'exogram-vs-langchain',
  'advisory-vs-mckinsey',
  'advisory-vs-bain',
  'advisory-vs-big4',
  'advisory-vs-gartner',
  'advisory-vs-traditional-fractional-cto'
]);

export default clerkMiddleware(async (auth, req) => {
  const pathname = req.nextUrl.pathname;

  // Edge-level 308 Permanent Redirect for Tier C and non-indexed compare pages -> /tools
  if (pathname.startsWith('/compare/')) {
    const slug = pathname.replace('/compare/', '').split('/')[0];
    if (slug && !TIER_A_SLUGS.has(slug)) {
      return NextResponse.redirect(new URL('/tools', req.url), 308);
    }
  }

  // Enterprise Security & Performance Headers
  const response = NextResponse.next();
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(self), geolocation=()');

  return response;
});

export const config = {
  matcher: [
    // Only run for API routes, authenticated areas, and compare redirects
    '/(api|trpc)(.*)',
    '/vault(.*)',
    '/admin(.*)',
    '/sign-in(.*)',
    '/sign-up(.*)',
    '/ai-integration(.*)',
    '/compare(.*)',
  ],
};
