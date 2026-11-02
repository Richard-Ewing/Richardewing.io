import fs from 'node:fs';
import path from 'node:path';

/**
 * Post-OpenNext Worker Patch (`scripts/patch-worker.mjs` - ADR-0019)
 *
 * Injects a <0.05 ms pre-OpenNext Edge Shield directly at the top of `.open-next/worker.js`
 * before `runWithCloudflareRequestContext`, `middlewareHandler`, or the 44 MB `handler.mjs`
 * server bundle is imported or executed:
 *   1. Short-circuits Cloudflare Early Hints (`204 No Content`, `no-store`).
 *   2. Redirects exact apex root (`https://richardewing.io/`) to `https://www.richardewing.io/` (`301`).
 *   3. Blocks exploit/vulnerability scanner probes (`.php`, `.env`, `wp-*`, `/.git`, etc.) with `404`.
 *   4. Blocks AI training and bulk SEO scrapers (`Sogou`, `GPTBot`, `ClaudeBot`, `Bytespider`,
 *      `SemrushBot`, `AhrefsBot`, etc.) with `403` (`no-store`), while explicitly preserving
 *      search and citation crawlers (`Googlebot`, `Bingbot`, `OAI-SearchBot`, `ChatGPT-User`,
 *      `Claude-SearchBot`, `Claude-User`, `PerplexityBot`, `Perplexity-User`, `Applebot`) and
 *      allowing crawler directive files (`/robots.txt`, `/llms.txt`, `/llms-full.txt`, `/sitemap.xml`).
 */

const openNextDir = path.resolve(process.cwd(), '.open-next');
const workerPath = path.join(openNextDir, 'worker.js');

if (!fs.existsSync(workerPath)) {
  console.error(`[patch-worker] Missing ${workerPath}. Run opennextjs-cloudflare build first.`);
  process.exit(1);
}

// Populate StaticAssetsIncrementalCache into Workers Static Assets (`cdn-cgi/_next_cache`)
const openNextCacheSrc = path.join(openNextDir, 'cache');
const openNextAssetsCacheDest = path.join(openNextDir, 'assets', 'cdn-cgi', '_next_cache');
if (fs.existsSync(openNextCacheSrc)) {
  fs.rmSync(openNextAssetsCacheDest, { recursive: true, force: true });
  fs.cpSync(openNextCacheSrc, openNextAssetsCacheDest, { recursive: true });
  console.log('[patch-worker] Populated StaticAssetsIncrementalCache into .open-next/assets/cdn-cgi/_next_cache.');
}

let content = fs.readFileSync(workerPath, 'utf8');

if (content.includes('__RW_ADR_0019_EDGE_SHIELD__')) {
  console.log('[patch-worker] ADR-0019 pre-OpenNext edge shield already present in .open-next/worker.js.');
} else {
  const targetSignature = `    async fetch(request, env, ctx) {
        return runWithCloudflareRequestContext(request, env, ctx, async () => {`;

  const replacement = `    async fetch(request, env, ctx) {
        // __RW_ADR_0019_EDGE_SHIELD__
        const __rwUa = (request.headers.get("user-agent") || "").toLowerCase();
        if (__rwUa.includes("early hints")) {
            return new Response(null, {
                status: 204,
                headers: {
                    "Cache-Control": "private, no-cache, no-store, max-age=0, must-revalidate",
                    "Cloudflare-CDN-Cache-Control": "no-store",
                    "CDN-Cache-Control": "no-store"
                }
            });
        }
        const __rwUrl = new URL(request.url);
        const __rwPath = __rwUrl.pathname;
        const __rwLowerPath = __rwPath.toLowerCase();
        if (__rwUrl.hostname === "richardewing.io" && __rwPath === "/") {
            return new Response(null, {
                status: 301,
                headers: {
                    "Location": "https://www.richardewing.io/" + __rwUrl.search,
                    "Cache-Control": "no-cache, no-store, must-revalidate",
                    "Cloudflare-CDN-Cache-Control": "no-store"
                }
            });
        }
        if (
            !__rwLowerPath.startsWith("/.well-known/") &&
            (
                __rwLowerPath.endsWith(".php") ||
                __rwLowerPath.endsWith(".asp") ||
                __rwLowerPath.endsWith(".aspx") ||
                __rwLowerPath.endsWith(".jsp") ||
                __rwLowerPath.endsWith(".cgi") ||
                __rwLowerPath.endsWith(".env") ||
                __rwLowerPath.endsWith(".bak") ||
                __rwLowerPath.endsWith(".config") ||
                __rwLowerPath.endsWith(".yml") ||
                __rwLowerPath.endsWith(".yaml") ||
                __rwLowerPath.endsWith(".sql") ||
                (__rwLowerPath.endsWith(".zip") && !__rwLowerPath.startsWith("/downloads/")) ||
                __rwLowerPath.endsWith(".key") ||
                __rwLowerPath.startsWith("/.git") ||
                __rwLowerPath.startsWith("/.aws") ||
                __rwLowerPath.startsWith("/.ssh") ||
                __rwLowerPath.includes("/@fs/") ||
                __rwLowerPath.includes("service_account") ||
                __rwLowerPath.includes("firebase") ||
                __rwLowerPath.includes("wp-admin") ||
                __rwLowerPath.includes("wp-json") ||
                __rwLowerPath.includes("wp-includes") ||
                __rwLowerPath.includes("wp-content") ||
                __rwLowerPath.includes(".env") ||
                __rwLowerPath.includes("setup-config") ||
                __rwLowerPath.includes("wlwmanifest") ||
                __rwLowerPath.includes("xmlrpc") ||
                __rwLowerPath.includes("/api/aws/bedrock")
            )
        ) {
            return new Response("Not Found", {
                status: 404,
                headers: {
                    "Content-Type": "text/plain; charset=utf-8",
                    "Cache-Control": "public, max-age=86400, s-maxage=86400",
                    "X-Robots-Tag": "noindex, nofollow"
                }
            });
        }
        const __rwIsDirectiveFile =
            __rwLowerPath === "/robots.txt" ||
            __rwLowerPath === "/llms.txt" ||
            __rwLowerPath === "/llms-full.txt" ||
            __rwLowerPath === "/sitemap.xml" ||
            __rwLowerPath === "/feed.xml";
        if (!__rwIsDirectiveFile && __rwUa) {
            const __rwCitationBots = [
                "oai-searchbot",
                "chatgpt-user",
                "claude-searchbot",
                "claude-user",
                "perplexitybot",
                "perplexity-user",
                "amzn-searchbot",
                "amzn-user",
                "duckassistbot",
                "youbot",
                "exasearchbot",
                "google-notebooklm",
                "googlebot",
                "bingbot",
                "applebot"
            ];
            const __rwBlockedBots = [
                "gptbot",
                "claudebot",
                "anthropic-ai",
                "google-extended",
                "applebot-extended",
                "google-cloudvertexbot",
                "meta-externalagent",
                "facebookbot",
                "bytespider",
                "tiktokspider",
                "ccbot",
                "amazonbot",
                "petalbot",
                "sogou",
                "baiduspider",
                "cohere-ai",
                "cohere-training-data-crawler",
                "deepseekbot",
                "grokbot",
                "kimibot",
                "moonshotbot",
                "diffbot",
                "omgili",
                "imagesiftbot",
                "timpibot",
                "ai2bot",
                "chatglm-spider",
                "semrushbot",
                "ahrefsbot",
                "mj12bot",
                "dotbot"
            ];
            const __rwIsCitationBot =
                !__rwUa.includes("applebot-extended") &&
                __rwCitationBots.some((b) => __rwUa.includes(b));
            if (!__rwIsCitationBot && __rwBlockedBots.some((b) => __rwUa.includes(b))) {
                return new Response(
                    "Forbidden: Automated AI corpus training and bulk scraping are disallowed on richardewing.io. Live AI search and citation bots are permitted.",
                    {
                        status: 403,
                        headers: {
                            "Content-Type": "text/plain; charset=utf-8",
                            "Cache-Control": "private, no-cache, no-store, max-age=0, must-revalidate",
                            "Cloudflare-CDN-Cache-Control": "no-store",
                            "CDN-Cache-Control": "no-store",
                            "X-Robots-Tag": "noai, noimageai"
                        }
                    }
                );
            }
        }
        return runWithCloudflareRequestContext(request, env, ctx, async () => {`;

  if (!content.includes(targetSignature)) {
    console.error('[patch-worker] ERROR: Target fetch signature not found in .open-next/worker.js!');
    process.exit(1);
  }

  content = content.replace(targetSignature, replacement);
  fs.writeFileSync(workerPath, content, 'utf8');
  console.log('[patch-worker] Injected ADR-0019 pre-OpenNext edge shield into .open-next/worker.js.');
}

// Patch OpenNext middleware cacheInterceptor so unmatched /404 routes serve pre-rendered /_not-found.cache from env.ASSETS without booting handler.mjs
const mwPath = path.join(openNextDir, 'middleware', 'handler.mjs');
if (!fs.existsSync(mwPath)) {
  console.error(`[patch-worker] ERROR: Missing ${mwPath}`);
  process.exit(1);
}
let mw = fs.readFileSync(mwPath, 'utf8');
if (mw.includes('__OPENNEXT_404_CACHE_INTERCEPT__')) {
  console.log('[patch-worker] 404 cache interception already present in .open-next/middleware/handler.mjs.');
} else {
  const nextActionGuard = 'if (Boolean(event.headers["next-action"]) || Boolean(event.headers[PRERENDER_REVALIDATE_HEADER]))\n    return event;';
  const nextActionReplacement = `${nextActionGuard}\n  /* __OPENNEXT_404_CACHE_INTERCEPT__ */\n  if (event.rawPath === "/404" && event.method !== "GET" && event.method !== "HEAD") {\n    return {\n      type: "core",\n      statusCode: 404,\n      body: emptyReadableStream(),\n      headers: {\n        "content-type": "text/plain; charset=utf-8",\n        "cache-control": "private, no-cache, no-store, max-age=0, must-revalidate",\n        "x-opennext-cache": "HIT"\n      },\n      isBase64Encoded: false\n    };\n  }`;

  if (!mw.includes(nextActionGuard)) {
    console.error('[patch-worker] ERROR: nextActionGuard not found in .open-next/middleware/handler.mjs!');
    process.exit(1);
  }
  mw = mw.replace(nextActionGuard, nextActionReplacement);

  const v419Target = 'const cacheKey = getCacheKey(event, localizedPath, resolvedRoutes);';
  const v418TargetA = 'const cacheKey = localizedPath === "/" ? "/index" : localizedPath;';
  const v418TargetB = 'const isISR = Object.keys(PrerenderManifest?.routes ?? {}).includes(localizedPath) ||';

  if (mw.includes(v419Target)) {
    mw = mw.replace(
      v419Target,
      'const cacheKey = localizedPath === "/404" ? "/_not-found" : getCacheKey(event, localizedPath, resolvedRoutes);'
    );
  } else if (mw.includes(v418TargetA) && mw.includes(v418TargetB)) {
    mw = mw
      .replace(
        v418TargetA,
        'const cacheKey = localizedPath === "/" ? "/index" : localizedPath === "/404" ? "/_not-found" : localizedPath;'
      )
      .replace(
        v418TargetB,
        'const isISR = localizedPath === "/404" || Object.keys(PrerenderManifest?.routes ?? {}).includes(localizedPath) ||'
      );
  } else {
    console.error('[patch-worker] ERROR: cacheKey signature not found in .open-next/middleware/handler.mjs!');
    process.exit(1);
  }

  const statusTarget = 'const statusCode = computeStatusCode(event.rewriteStatusCode, cachedValue.meta?.status);';
  if (!mw.includes(statusTarget)) {
    console.error('[patch-worker] ERROR: computeStatusCode signature not found in .open-next/middleware/handler.mjs!');
    process.exit(1);
  }
  mw = mw.replace(
    statusTarget,
    'const statusCode = computeStatusCode(event.rewriteStatusCode, localizedPath === "/404" ? 404 : cachedValue.meta?.status);'
  );

  const postInterceptTarget = 'applyMiddlewareHeaders(eventOrResult, headers);\n        return eventOrResult;';
  if (!mw.includes(postInterceptTarget)) {
    console.error('[patch-worker] ERROR: applyMiddlewareHeaders signature not found in .open-next/middleware/handler.mjs!');
    process.exit(1);
  }
  mw = mw.replace(
    postInterceptTarget,
    'applyMiddlewareHeaders(eventOrResult, headers);\n        if (eventOrResult.statusCode === 404 || eventOrResult.statusCode >= 500) {\n          delete eventOrResult.headers["Cache-Control"];\n          eventOrResult.headers["cache-control"] = NO_STORE_CACHE_CONTROL;\n        }\n        return eventOrResult;'
  );

  fs.writeFileSync(mwPath, mw, 'utf8');
  console.log('[patch-worker] Injected /404 -> /_not-found StaticAssetsIncrementalCache interception into .open-next/middleware/handler.mjs.');
}
process.exit(0);
