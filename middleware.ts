import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

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

const EDGE_REDIRECTS: Record<string, string> = {
  '/advisory.html': '/advisory',
  '/principal': '/about',
  '/the-operator.html': '/about',
  '/trust': '/security',
  '/studio.html': '/services',
  '/manifesto.html': '/manifesto',
  '/system.html': '/system',
  '/briefings.html': '/briefings',
  '/methodology.html': '/system',
  '/working-papers.html': '/doctrine',
  '/frameworks': '/framework',
  '/research/concepts': '/concepts',
  '/tools/cloud-finops-calculator': '/tools',
  '/tools/copilot-roi-calculator': '/tools/copilot-roi',
};

const POISONED_CACHE_URLS = [
  'https://www.richardewing.io/legal',
  'https://richardewing.io/legal',
  'https://www.richardewing.io/legal?_rsc=Edh1o4O2g_TGZBR9',
  'https://www.richardewing.io/legal?_rsc=FaxdFzspToQPQGgF',
  'https://www.richardewing.io/glossary/pillars/engineering-leadership',
  'https://www.richardewing.io/glossary/pillars/engineering-leadership?_rsc=mgLEKDLYu_HEislZ',
];

function isAuthOrDynamicPath(pathname: string): boolean {
  return (
    pathname.startsWith('/vault') ||
    pathname.startsWith('/admin') ||
    pathname.startsWith('/sign-in') ||
    pathname.startsWith('/sign-up') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/ai-integration/advisor') ||
    pathname.startsWith('/ai-integration/system/download') ||
    pathname.startsWith('/tools/board-room') ||
    pathname.startsWith('/tools/dashboard')
  );
}

function applySecurityAndCacheHeaders(res: NextResponse, req: NextRequest): NextResponse {
  res.headers.set('X-DNS-Prefetch-Control', 'on');
  res.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  res.headers.set('X-Frame-Options', 'SAMEORIGIN');
  res.headers.set('X-Content-Type-Options', 'nosniff');
  res.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  res.headers.set('Permissions-Policy', 'camera=(), microphone=(self), geolocation=()');

  const isRsc =
    req.nextUrl.searchParams.has('_rsc') ||
    req.headers.get('rsc') === '1' ||
    req.headers.has('next-router-prefetch') ||
    req.nextUrl.searchParams.has('__clerk_db_jwt') ||
    req.nextUrl.searchParams.has('__clerk_handshake');

  const isRedirect = res.status >= 300 && res.status < 400 && res.status !== 301 && res.status !== 308;

  if (isRsc || isRedirect || isAuthOrDynamicPath(req.nextUrl.pathname) || req.method !== 'GET') {
    res.headers.set('Cache-Control', 'private, no-cache, no-store, max-age=0, must-revalidate');
    res.headers.set('Cloudflare-CDN-Cache-Control', 'no-store');
    res.headers.set('CDN-Cache-Control', 'no-store');
  } else if (res.status === 200) {
    res.headers.set('Cloudflare-CDN-Cache-Control', 'max-age=86400, stale-while-revalidate=604800');
    res.headers.set('Vary', 'RSC, Next-Router-State-Tree, Next-Router-Prefetch, Accept-Encoding');
  }

  return res;
}

const clerkHandler = clerkMiddleware(async () => {
  return NextResponse.next();
});

export default async function middleware(req: NextRequest, event: NextFetchEvent) {
  const host = req.headers.get('host') || '';
  const pathname = req.nextUrl.pathname;

  // Self-heal any poisoned 307 cache entries in the current Cloudflare POP
  try {
    const cfCaches = (globalThis as unknown as { caches?: { default?: Cache } }).caches;
    if (cfCaches?.default) {
      for (const u of POISONED_CACHE_URLS) {
        event.waitUntil(cfCaches.default.delete(u).catch(() => false));
      }
    }
  } catch {
    // Ignore if caches API is unavailable in local dev
  }

  // 0. Canonical Host & Alias Single-Hop Enforcement: 301 redirect at Cloudflare Edge
  let targetPath = EDGE_REDIRECTS[pathname] || pathname;

  // Intercept non-Tier A compare routes directly to eliminate multi-hop apex/www chains
  if (targetPath.startsWith('/compare/')) {
    const slug = targetPath.replace('/compare/', '').split('/')[0];
    if (slug && !TIER_A_SLUGS.has(slug)) {
      targetPath = '/tools';
    }
  } else if (targetPath.startsWith('/comparisons/')) {
    const slug = targetPath.replace('/comparisons/', '').split('/')[0];
    if (slug && TIER_A_SLUGS.has(slug)) {
      targetPath = `/compare/${slug}`;
    } else {
      targetPath = '/tools';
    }
  }

  const isLocalhost = host.includes('localhost') || host.includes('127.0.0.1');
  if ((!isLocalhost && host !== 'www.richardewing.io') || (targetPath !== pathname && !isLocalhost)) {
    const destination = new URL(targetPath + req.nextUrl.search, 'https://www.richardewing.io');
    return NextResponse.redirect(destination, 301);
  }

  const userAgent = (req.headers.get('user-agent') || '').toLowerCase();

  // 1. Instant Edge Shield against Rogue Scrapers & Vulnerability Probes (0.01ms CPU)
  if (
    userAgent.includes('nginx-ssl early hints') ||
    userAgent.includes('bytespider') ||
    pathname.endsWith('.php') ||
    pathname.endsWith('.env') ||
    pathname.endsWith('.bak') ||
    pathname.endsWith('.config') ||
    pathname.endsWith('.yml') ||
    pathname.endsWith('.yaml') ||
    pathname.endsWith('.sql') ||
    (pathname.endsWith('.zip') && !pathname.startsWith('/downloads/')) ||
    pathname.endsWith('.key') ||
    pathname.includes('/@fs/') ||
    pathname.includes('service_account') ||
    pathname.includes('firebase') ||
    pathname.includes('wp-admin') ||
    pathname.includes('wp-json') ||
    pathname.includes('wp-includes') ||
    pathname.includes('wp-content') ||
    pathname.includes('.env') ||
    pathname.includes('setup-config') ||
    pathname.includes('wlwmanifest') ||
    pathname.includes('xmlrpc') ||
    pathname.includes('/api/aws/bedrock')
  ) {
    return new NextResponse('Not Found', {
      status: 404,
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'public, max-age=86400, s-maxage=86400',
      },
    });
  }

  // Edge-level 308 Permanent Redirect for Tier C and non-indexed compare pages -> /tools
  if (pathname.startsWith('/compare/')) {
    const slug = pathname.replace('/compare/', '').split('/')[0];
    if (slug && !TIER_A_SLUGS.has(slug)) {
      return NextResponse.redirect(new URL('/tools', req.url), 308);
    }
  }

  const clerkRes = await clerkHandler(req, event);

  // Never allow Clerk handshake 307 redirects to hijack public editorial routes
  if (
    clerkRes &&
    (clerkRes.status === 307 || clerkRes.status === 302) &&
    !isAuthOrDynamicPath(pathname)
  ) {
    const cleanNext = NextResponse.next();
    return applySecurityAndCacheHeaders(cleanNext, req);
  }

  const finalRes = (clerkRes instanceof NextResponse) ? clerkRes : NextResponse.next();
  return applySecurityAndCacheHeaders(finalRes, req);
}

export const config = {
  matcher: [
    // Skip Next.js static bundles, static images, and public asset directories
    '/((?!_next/static|_next/image|assets/|favicon.ico|icon.png).*)',
  ],
};

