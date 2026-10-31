import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { ARTICLE_SLUG_REDIRECTS, BLOG_SLUG_REDIRECTS } from "./app/lib/article-redirects";

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
  '/architecture': '/runtime-architecture',
  '/concepts/rented-intelligence-vs-owned-capital': '/glossary/ai-capital-allocation-ratio',
  '/concepts/engineering-bottleneck-illusion': '/glossary/engineering-bottleneck-illusion',
  '/concepts/ai-cogs': '/glossary/ai-cogs',
  '/concepts/variable-cost-of-intelligence': '/glossary/variable-cost-of-intelligence',
  '/concepts/vibe-coding-debt': '/articles/frameworks/vibe-coding-debt',
  '/concepts/explainability-vs-recoverability': '/glossary/explainability-vs-recoverability',
  '/exogram/proving-ground': '/exogram/demo',
  '/exogram/analyze': '/exogram/architecture',
  '/exogram/security': '/security',
  '/exogram/pricing': '/schedule',
  '/exogram/blueprint': '/exogram',
  '/exogram/docs/architecture-overview': '/exogram/docs/architecture',
  '/$': '/',
  '/&': '/',
  '/blog/hiring-engineers-gross-margin': '/blog/b2b-saas-coordination-tax-saas-engineering-margins',
  '/blog/feature-bloat-calculus': '/articles/frameworks/feature-bloat-calculus',
  '/blog/cost-of-predictivity': '/articles/frameworks/cost-of-predictivity',
  '/blog/technical-insolvency-date': '/articles/frameworks/technical-insolvency-date',
  '/articles/feature-bloat-calculus': '/articles/frameworks/feature-bloat-calculus',
  '/articles/cost-of-predictivity': '/articles/frameworks/cost-of-predictivity',
  '/articles/innovation-tax': '/articles/frameworks/innovation-tax',
  '/articles/technical-insolvency-date': '/articles/frameworks/technical-insolvency-date',
  '/blog/ai-product-management-guide': '/vault/curriculum/tracks/ai-product-economics/2-1',
  '/blog/the-subprime-code-crisis': '/blog/the-negative-carry-code-crisis',
  '/blog/subprime-code-crisis': '/blog/negative-carry-code-crisis',
  '/tools/mcp-security-scanner': '/tools/mcp-security-auditor',
  '/tools/ai-hallucination-cost': '/tools/hallucination-tax',
  '/tools/ai-credit-pricing-calculator': '/tools/aueb',
  '/tools/claude-api-cost-calculator': '/tools/ai-feature-margin',
  '/tools/agents-md-validator': '/tools/spec-quality-scorecard',
  '/tools/n8n-vs-zapier-calculator': '/tools/automation-cost-calculator',
  '/concepts/zero-trust-type-verification': '/glossary/zero-trust-type-gate',
  '/concepts/probabilistic-product-management': '/glossary/pillars/probabilistic-product-management',
  '/concepts/slm-vs-api-arbitrage': '/concepts/slm-repatriation',
  '/concepts/model-right-sizing': '/glossary/model-right-sizing',
  '/concepts/macro-regression-loops': '/concepts/context-rot',
  '/concepts/subprime-code-crisis': '/concepts/negative-carry-code-crisis',
  '/concepts/adlc': '/concepts/spec-driven-development',
  '/concepts/seat-based-pricing-compression': '/concepts/ai-margin-squeeze',
  '/concepts/operational-drift': '/concepts/agentic-fleet-drift',
  '/concepts/governed-execution': '/concepts/deterministic-execution-control',
  '/concepts/synthetic-cogs': '/concepts/ai-tokenomics-cogs',
  '/vault/curriculum/tracks/cloud-finops/14-1': '/vault/curriculum/tracks/cloud-finops/7-1',
  '/vault/curriculum/tracks/cloud-finops/14-2': '/vault/curriculum/tracks/cloud-finops/7-2',
  '/vault/curriculum/tracks/cloud-finops/14-3': '/vault/curriculum/tracks/cloud-finops/7-3',
  '/vault/curriculum/tracks/cloud-finops/14-4': '/vault/curriculum/tracks/cloud-finops/7-4',
  '/vault/curriculum/tracks/cloud-finops/14-5': '/vault/curriculum/tracks/cloud-finops/7-5',
  '/vault/curriculum/tracks/cloud-finops/14-6': '/vault/curriculum/tracks/cloud-finops/7-6',
  '/vault/curriculum/tracks/cloud-finops/14-7': '/vault/curriculum/tracks/cloud-finops/7-7',
  '/vault/curriculum/tracks/cloud-finops/14-8': '/vault/curriculum/tracks/cloud-finops/7-8',
  '/vault/curriculum/tracks/cloud-finops/14-9': '/vault/curriculum/tracks/cloud-finops/7-9',
  '/vault/curriculum/tracks/cloud-finops/14-10': '/vault/curriculum/tracks/cloud-finops/7-10',
  '/vault/curriculum/tracks/cloud-finops/14-11': '/vault/curriculum/tracks/cloud-finops/7-11',
  '/vault/curriculum/tracks/cloud-finops/14-12': '/vault/curriculum/tracks/cloud-finops/7-12',
  '/vault/curriculum/tracks/cloud-finops/14-13': '/vault/curriculum/tracks/cloud-finops/7-13',
  '/vault/curriculum/tracks/cloud-finops/14-14': '/vault/curriculum/tracks/cloud-finops/7-14',
  '/vault/curriculum/tracks/cloud-finops/14-15': '/vault/curriculum/tracks/cloud-finops/7-15',
  ...Object.fromEntries(
    Object.entries(BLOG_SLUG_REDIRECTS).map(([slug, target]) => [`/blog/${slug}`, target])
  ),
  ...Object.fromEntries(
    Object.entries(ARTICLE_SLUG_REDIRECTS).map(([slug, target]) => [`/articles/${slug}`, target])
  ),
};

const CITATION_BOT_REGEX =
  /\b(oai-searchbot|chatgpt-user|claude-searchbot|claude-user|perplexitybot|perplexity-user|amzn-searchbot|amzn-user|duckassistbot|youbot|exasearchbot|google-notebooklm|googlebot|bingbot)\b/i;

const TRAINING_SCRAPER_REGEX =
  /\b(gptbot|claudebot|anthropic-ai|google-extended|applebot-extended|google-cloudvertexbot|ccbot|amazonbot|meta-externalagent|facebookbot|cohere-ai|cohere-training-data-crawler|bytespider|tiktokspider|petalbot|sogou|baiduspider|diffbot|imagesiftbot|omgilibot|omgili|timpibot|ai2bot|chatglm-spider|deepseekbot|grokbot|kimibot|moonshotbot|semrushbot|ahrefsbot|mj12bot|dotbot)\b/i;

function isBlockedTrainingOrBulkScraper(userAgent: string, pathname: string): boolean {
  if (
    pathname === '/robots.txt' ||
    pathname === '/llms.txt' ||
    pathname === '/llms-full.txt' ||
    pathname === '/sitemap.xml' ||
    pathname === '/feed.xml'
  ) {
    return false;
  }
  if (!userAgent.includes('applebot-extended') && (CITATION_BOT_REGEX.test(userAgent) || userAgent.includes('applebot'))) {
    return false;
  }
  return TRAINING_SCRAPER_REGEX.test(userAgent);
}

function hasClerkAuthSignal(req: NextRequest): boolean {
  if (req.headers.has('authorization')) return true;
  const search = req.nextUrl.searchParams;
  if (
    search.has('__clerk_db_jwt') ||
    search.has('__clerk_handshake') ||
    search.has('__clerk_synced') ||
    search.has('__clerk_ticket')
  ) {
    return true;
  }
  const cookie = req.headers.get('cookie') || '';
  if (!cookie) return false;
  return (
    cookie.includes('__session') ||
    cookie.includes('__clerk') ||
    /(?:^|;\s*)__client_uat=(?!0(?:;|$))/.test(cookie)
  );
}

function isAuthOrDynamicPath(pathname: string): boolean {
  return (
    pathname === '/vault' ||
    /^\/vault\/(assets|team|join)(\/|$)/.test(pathname) ||
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

function isPrivateUncachedPage(pathname: string): boolean {
  return (
    pathname.startsWith('/dashboard') ||
    pathname.startsWith('/workspace') ||
    pathname.startsWith('/wizard') ||
    pathname.startsWith('/toolkit-success')
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
  const isCacheableMethod = req.method === 'GET' || req.method === 'HEAD';

  if (
    isRsc ||
    isRedirect ||
    res.headers.has('set-cookie') ||
    isAuthOrDynamicPath(req.nextUrl.pathname) ||
    isPrivateUncachedPage(req.nextUrl.pathname) ||
    !isCacheableMethod
  ) {
    res.headers.set('Cache-Control', 'private, no-cache, no-store, max-age=0, must-revalidate');
    res.headers.set('Cloudflare-CDN-Cache-Control', 'no-store');
    res.headers.set('CDN-Cache-Control', 'no-store');
  } else if (res.status === 200) {
    res.headers.set('Cache-Control', 'public, max-age=0, s-maxage=86400, stale-while-revalidate=604800');
    res.headers.set('Cloudflare-CDN-Cache-Control', 'max-age=86400, stale-while-revalidate=604800');
    res.headers.set('Vary', 'Host, RSC, Next-Router-State-Tree, Next-Router-Prefetch, Accept-Encoding');
  }

  return res;
}

const clerkHandler = clerkMiddleware(async () => {
  return NextResponse.next();
});

export default async function middleware(req: NextRequest, event: NextFetchEvent) {
  const userAgent = (req.headers.get('user-agent') || '').toLowerCase();

  // 0a. Short-circuit Cloudflare Early Hints subrequests immediately to prevent 103/504 timeouts
  // CRITICAL: Must NEVER be public/s-maxage cached because Cloudflare's default cache key omits User-Agent!
  if (userAgent.includes('early hints')) {
    return new NextResponse(null, {
      status: 204,
      headers: {
        'Cache-Control': 'private, no-cache, no-store, max-age=0, must-revalidate',
        'Cloudflare-CDN-Cache-Control': 'no-store',
        'CDN-Cache-Control': 'no-store',
      },
    });
  }

  // 0b. Deterministic 403 block on foundation-model training and bulk SEO scrapers while preserving AI search/citation bots
  // CRITICAL: Must NEVER be public/s-maxage cached because Cloudflare's default cache key omits User-Agent!
  if (isBlockedTrainingOrBulkScraper(userAgent, req.nextUrl.pathname)) {
    return new NextResponse('Forbidden: AI training and bulk scraping disallowed. Live AI search and citation bots permitted.', {
      status: 403,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'private, no-cache, no-store, max-age=0, must-revalidate',
        'Cloudflare-CDN-Cache-Control': 'no-store',
        'CDN-Cache-Control': 'no-store',
        'X-Robots-Tag': 'noai, noimageai',
      },
    });
  }

  const host = req.headers.get('host') || '';
  const pathname = req.nextUrl.pathname;

  // 0c. Canonical Host & Alias Single-Hop Enforcement: 301 redirect at Cloudflare Edge
  let targetPath = EDGE_REDIRECTS[pathname] || pathname;

  // Collapse legacy /curriculum/tracks/* and N-prefixed module routes into single-hop 301s
  if (targetPath.startsWith('/curriculum/tracks')) {
    targetPath = `/vault${targetPath}`;
  }
  const nPrefixMatch = targetPath.match(/^\/vault\/curriculum\/tracks\/([^/]+)\/N(\d+-\d+)$/);
  if (nPrefixMatch) {
    targetPath = `/vault/curriculum/tracks/${nPrefixMatch[1]}/${nPrefixMatch[2]}`;
  }
  if (EDGE_REDIRECTS[targetPath]) {
    targetPath = EDGE_REDIRECTS[targetPath];
  }

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

  const isLocalhost = /^(localhost|127\.0\.0\.1)(:\d+)?$/i.test(host);
  if ((!isLocalhost && host !== 'www.richardewing.io') || targetPath !== pathname) {
    const baseOrigin = isLocalhost ? req.nextUrl.origin : 'https://www.richardewing.io';
    const safePath = '/' + targetPath.replace(/^[/\\]+/, '');
    const destination = new URL(safePath + req.nextUrl.search, baseOrigin);
    if (destination.origin !== baseOrigin) {
      return new NextResponse('Bad Request', { status: 400 });
    }
    if (destination.href === req.nextUrl.href) {
      // Physical guard: never redirect to the exact same URL
      return NextResponse.next();
    }
    const redirectRes = NextResponse.redirect(destination, 301);
    redirectRes.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    redirectRes.headers.set('Cloudflare-CDN-Cache-Control', 'no-store');
    return redirectRes;
  }

  // 1. Instant Edge Shield against Vulnerability Probes (0.01ms CPU)
  if (
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

  // Edge-level 301 Permanent Redirect for Tier C and non-indexed compare pages -> /tools
  if (pathname.startsWith('/compare/')) {
    const slug = pathname.replace('/compare/', '').split('/')[0];
    if (slug && !TIER_A_SLUGS.has(slug)) {
      return NextResponse.redirect(new URL('/tools', req.url), 301);
    }
  }

  // Skip Clerk auth execution on anonymous public routes when zero Clerk session/handshake signals exist
  if (
    !isAuthOrDynamicPath(pathname) &&
    !isPrivateUncachedPage(pathname) &&
    !hasClerkAuthSignal(req)
  ) {
    return applySecurityAndCacheHeaders(NextResponse.next(), req);
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

