import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { resolveEdgeRedirect, VALID_COMPARE_TIER_A_SLUGS } from "./app/lib/edge-redirects-manifest";

const CITATION_BOT_REGEX =
  /\b(oai-searchbot|chatgpt-user|claude-searchbot|claude-user|perplexitybot|perplexity-user|amzn-searchbot|amzn-user|duckassistbot|youbot|exasearchbot|google-notebooklm|googlebot|bingbot|mediapartners-google|adsbot-google)\b/i;

const TRAINING_SCRAPER_REGEX =
  /\b(gptbot|claudebot|anthropic-ai|google-extended|applebot-extended|google-cloudvertexbot|ccbot|amazonbot|meta-externalagent|facebookbot|cohere-ai|cohere-training-data-crawler|bytespider|tiktokspider|petalbot|sogou|baiduspider|diffbot|imagesiftbot|omgilibot|omgili|timpibot|ai2bot|chatglm-spider|deepseekbot|grokbot|kimibot|moonshotbot|semrushbot|ahrefsbot|mj12bot|dotbot)\b/i;

function isBlockedTrainingOrBulkScraper(userAgent: string, pathname: string): boolean {
  if (
    pathname === '/robots.txt' ||
    pathname === '/ads.txt' ||
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
    (pathname.startsWith('/api') && pathname !== '/api/og' && !pathname.startsWith('/api/og/')) ||
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
  const isPublicOg = req.nextUrl.pathname === '/api/og' || req.nextUrl.pathname.startsWith('/api/og/');

  if (isPublicOg && isCacheableMethod && res.status === 200 && !res.headers.has('set-cookie') && !isRedirect) {
    res.headers.set('Cache-Control', 'public, max-age=86400, s-maxage=2592000, stale-while-revalidate=2592000');
    res.headers.set('Cloudflare-CDN-Cache-Control', 'public, max-age=2592000, stale-while-revalidate=2592000');
    res.headers.delete('CDN-Cache-Control');
    res.headers.delete('Vary');
  } else if (
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
    res.headers.set('Cache-Control', 'public, max-age=0, must-revalidate');
    res.headers.set('Cloudflare-CDN-Cache-Control', 'no-store');
    res.headers.set('CDN-Cache-Control', 'no-store');
    res.headers.set('Vary', 'Host, RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch, Accept-Encoding');
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

  // 0c. Canonical Host & Alias Single-Hop Enforcement: 301 redirect at Cloudflare Edge (ADR-0022)
  const mappedTarget = (!pathname.startsWith('/api/') && !pathname.startsWith('/_next/') && !pathname.startsWith('/assets/'))
    ? resolveEdgeRedirect(pathname)
    : null;

  if (mappedTarget === '__EDGE_410_GONE__') {
    return new NextResponse('410 Gone: Page Retired', {
      status: 410,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'X-Robots-Tag': 'noindex, follow',
        'Cache-Control': 'public, max-age=86400, s-maxage=86400',
      },
    });
  }

  const isLocalhost = /^(localhost|127\.0\.0\.1)(:\d+)?$/i.test(host);
  const isWorkersPreview = host.endsWith('.workers.dev');
  if ((!isLocalhost && !isWorkersPreview && host !== 'www.richardewing.io') || mappedTarget !== null) {
    const baseOrigin = (isLocalhost || isWorkersPreview) ? req.nextUrl.origin : 'https://www.richardewing.io';
    const finalTarget = mappedTarget !== null ? mappedTarget : pathname;
    const hashIdx = finalTarget.indexOf('#');
    const pathPart = hashIdx >= 0 ? finalTarget.slice(0, hashIdx) : finalTarget;
    const hashPart = hashIdx >= 0 ? finalTarget.slice(hashIdx) : '';
    const safePath = '/' + pathPart.replace(/^[/\\]+/, '');
    const destination = new URL(safePath + req.nextUrl.search + hashPart, baseOrigin);
    if (destination.origin !== baseOrigin) {
      return new NextResponse('Bad Request', { status: 400 });
    }
    if (destination.href === req.nextUrl.href) {
      return NextResponse.next();
    }
    const redirectRes = NextResponse.redirect(destination, 301);
    redirectRes.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    redirectRes.headers.set('Cloudflare-CDN-Cache-Control', 'no-store');
    redirectRes.headers.set('CDN-Cache-Control', 'no-store');
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

  // Edge-level 410 Gone for retired Tier C and non-indexed compare pages
  if (pathname.startsWith('/compare/')) {
    const slug = pathname.replace('/compare/', '').split('/')[0];
    if (slug && !VALID_COMPARE_TIER_A_SLUGS.has(slug)) {
      return new NextResponse('410 Gone: Page Retired', {
        status: 410,
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'X-Robots-Tag': 'noindex, follow',
          'Cache-Control': 'public, max-age=86400, s-maxage=86400',
        },
      });
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

