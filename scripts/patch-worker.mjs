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

// Emit pure ESM edge redirect manifest into .open-next/cloudflare/edge-redirects-manifest.js (ADR-0022)
const manifestTsPath = path.resolve(process.cwd(), 'app/lib/edge-redirects-manifest.ts');
const manifestJsDest = path.join(openNextDir, 'cloudflare', 'edge-redirects-manifest.js');
if (!fs.existsSync(manifestTsPath)) {
  console.error(`[patch-worker] Missing ${manifestTsPath}. Run npx tsx scripts/generate-edge-redirects.ts first.`);
  process.exit(1);
}
const manifestJsSource = fs
  .readFileSync(manifestTsPath, 'utf8')
  .replace(/new Set<string>/g, 'new Set')
  .replace(/:\s*Record<string,\s*string>/g, '')
  .replace(/\(rawPathname:\s*string\):\s*string\s*\|\s*null/g, '(rawPathname)');
fs.mkdirSync(path.dirname(manifestJsDest), { recursive: true });
fs.writeFileSync(manifestJsDest, manifestJsSource, 'utf8');

let content = fs.readFileSync(workerPath, 'utf8');

if (content.includes('__RW_ADR_0019_EDGE_SHIELD__')) {
  console.log('[patch-worker] ADR-0019 pre-OpenNext edge shield already present in .open-next/worker.js.');
} else {
  content = `import { resolveEdgeRedirect } from "./cloudflare/edge-redirects-manifest.js";\n` + content;
  // Defer heavy top-level OpenNext middleware and image imports until an actual cache miss occurs
  content = content
    .replace(
      'import { handleCdnCgiImageRequest, handleImageRequest } from "./cloudflare/images.js";\n',
      ''
    )
    .replace(
      'import { handler as middlewareHandler } from "./middleware/handler.mjs";\n',
      ''
    )
    .replace(
      'return handleCdnCgiImageRequest(url, env);',
      'const { handleCdnCgiImageRequest } = await import("./cloudflare/images.js"); return handleCdnCgiImageRequest(url, env);'
    )
    .replace(
      'return await handleImageRequest(url, request.headers, env);',
      'const { handleImageRequest } = await import("./cloudflare/images.js"); return await handleImageRequest(url, request.headers, env);'
    )
    .replace(
      'const reqOrResp = await middlewareHandler(request, env, ctx);',
      'const { handler: middlewareHandler } = await import("./middleware/handler.mjs"); const reqOrResp = await middlewareHandler(request, env, ctx);'
    );

  const targetSignature = `    async fetch(request, env, ctx) {
        return runWithCloudflareRequestContext(request, env, ctx, async () => {`;
  const tailSignature = `            return handler(reqOrResp, env, ctx, request.signal);
        });
    },`;

  const replacement = `    async fetch(request, env, ctx) {
        // __RW_ADR_0019_EDGE_SHIELD__
        if (request.signal && request.signal.aborted) {
            return new Response(null, { status: 499 });
        }
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
        if (__rwLowerPath.startsWith("/__rw_edge_cache/")) {
            return new Response("Not Found", {
                status: 404,
                headers: {
                    "Content-Type": "text/plain; charset=utf-8",
                    "Cache-Control": "private, no-store"
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
        const __rwIsOg = __rwLowerPath === "/api/og" || __rwLowerPath.startsWith("/api/og/");
        const __rwIsDirectiveFile =
            __rwLowerPath === "/robots.txt" ||
            __rwLowerPath === "/ads.txt" ||
            __rwLowerPath === "/llms.txt" ||
            __rwLowerPath === "/llms-full.txt" ||
            __rwLowerPath === "/sitemap.xml" ||
            __rwLowerPath === "/feed.xml" ||
            __rwLowerPath === "/manifest.webmanifest" ||
            __rwLowerPath === "/site.webmanifest";
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
                "applebot",
                "mediapartners-google",
                "adsbot-google"
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
        if (__rwPath === "/git" || __rwPath === "/github") {
            return new Response(null, {
                status: 301,
                headers: {
                    "Location": "https://github.com/Richard-Ewing",
                    "Cache-Control": "no-cache, no-store, must-revalidate",
                    "Cloudflare-CDN-Cache-Control": "no-store",
                    "CDN-Cache-Control": "no-store"
                }
            });
        }
        const __rwIsLocal = /^(localhost|127\\.0\\.0\\.1)(:\\d+)?$/i.test(__rwUrl.host);
        const __rwIsWorkersPreview = __rwUrl.hostname.endsWith(".workers.dev");
        const __rwNeedsHostRedirect =
            !__rwIsLocal &&
            !__rwIsWorkersPreview &&
            (__rwUrl.hostname !== "www.richardewing.io" || __rwUrl.protocol !== "https:");
        const __rwMappedTarget =
            (!__rwLowerPath.startsWith("/_next/") && !__rwLowerPath.startsWith("/assets/") && !__rwLowerPath.startsWith("/api/"))
                ? resolveEdgeRedirect(__rwPath)
                : null;
        if (__rwNeedsHostRedirect || __rwMappedTarget !== null) {
            const __rwFinalTarget = __rwMappedTarget !== null ? __rwMappedTarget : __rwPath;
            const __rwHashIdx = __rwFinalTarget.indexOf("#");
            const __rwDestPath = __rwHashIdx >= 0 ? __rwFinalTarget.slice(0, __rwHashIdx) : __rwFinalTarget;
            const __rwDestHash = __rwHashIdx >= 0 ? __rwFinalTarget.slice(__rwHashIdx) : "";
            const __rwSafeDestPath = "/" + __rwDestPath.replace(/^[/\\\\]+/, "");
            const __rwBaseOrigin = (__rwIsLocal || __rwIsWorkersPreview) ? __rwUrl.origin : "https://www.richardewing.io";
            const __rwFullLocation = __rwBaseOrigin + __rwSafeDestPath + __rwUrl.search + __rwDestHash;
            if (__rwFullLocation !== __rwUrl.href) {
                return new Response(null, {
                    status: 301,
                    headers: {
                        "Location": __rwFullLocation,
                        "Cache-Control": "no-cache, no-store, must-revalidate",
                        "Cloudflare-CDN-Cache-Control": "no-store",
                        "CDN-Cache-Control": "no-store"
                    }
                });
            }
        }
        const __rwMethod = request.method.toUpperCase();
        if (__rwMethod === "POST" && !__rwLowerPath.startsWith("/api/") && !request.headers.has("Next-Action")) {
            return new Response("Method Not Allowed", {
                status: 405,
                headers: {
                    "Allow": "GET, HEAD",
                    "Content-Type": "text/plain; charset=utf-8",
                    "Cache-Control": "private, no-cache, no-store, max-age=0, must-revalidate",
                    "Cloudflare-CDN-Cache-Control": "no-store"
                }
            });
        }
        const __rwCookieLower = (request.headers.get("cookie") || "").toLowerCase();
        const __rwHasClerkSignal =
            __rwCookieLower.includes("__session") ||
            __rwCookieLower.includes("__client_uat") ||
            __rwCookieLower.includes("__clerk") ||
            request.headers.has("Authorization") ||
            __rwUrl.searchParams.has("__clerk_db_jwt") ||
            __rwUrl.searchParams.has("__clerk_handshake") ||
            __rwUrl.searchParams.has("__clerk_synced") ||
            __rwUrl.searchParams.has("__clerk_ticket");
        const __rwReqCc = (request.headers.get("cache-control") || "").toLowerCase();
        const __rwReqBypass = __rwReqCc.includes("no-cache") || __rwReqCc.includes("no-store");
        const __rwExcludedPrefixes = [
            "/api/",
            "/vault/assets",
            "/vault/team",
            "/vault/join",
            "/admin",
            "/scorecard",
            "/sign-in",
            "/sign-up",
            "/sso-callback",
            "/_next/",
            "/cdn-cgi/",
            "/ai-integration/advisor",
            "/ai-integration/system/download",
            "/tools/board-room",
            "/tools/dashboard",
            "/tools/verify",
            "/dashboard",
            "/workspace",
            "/wizard",
            "/toolkit-success"
        ];
        const __rwIsExcluded =
            !__rwIsOg &&
            (__rwLowerPath === "/vault" ||
            __rwExcludedPrefixes.some((p) => p.endsWith("/") ? __rwLowerPath.startsWith(p) : (__rwLowerPath === p || __rwLowerPath.startsWith(p + "/"))));
        const __rwIsRsc =
            !__rwIsOg &&
            (
                request.headers.get("RSC") === "1" ||
                request.headers.has("Next-Router-Prefetch") ||
                request.headers.has("Next-Router-Segment-Prefetch") ||
                request.headers.has("Next-Router-State-Tree") ||
                __rwUrl.searchParams.has("_rsc")
            );
        const __rwCleanParams = new URLSearchParams();
        if (__rwUrl.search !== "") {
            const __rwMarketingExact = new Set(["gclid","dclid","wbraid","gbraid","fbclid","msclkid","twclid","ttclid","li_fat_id","mc_cid","mc_eid","igshid","yclid","_hsenc","_hsmi","mkt_tok","s_kwcid","vero_id","oly_enc_id","oly_anon_id","rb_clickid","wickedid","ref"]);
            for (const [__k, __v] of __rwUrl.searchParams) {
                const __lk = __k.toLowerCase();
                if (__lk === "_rsc" && __rwIsRsc) continue;
                if (!__lk.startsWith("utm_") && !__rwMarketingExact.has(__lk)) {
                    __rwCleanParams.append(__k, __v);
                }
            }
        }
        __rwCleanParams.sort();
        const __rwCleanSearchStr = __rwCleanParams.toString();
        const __rwHasNonMarketingQuery = __rwCleanSearchStr !== "" && !__rwIsOg;
        const __rwCanEdgeCache =
            typeof caches !== "undefined" &&
            Boolean(caches.default) &&
            (__rwMethod === "GET" || __rwMethod === "HEAD") &&
            __rwUrl.hostname === "www.richardewing.io" &&
            (__rwPath === "/" || !__rwPath.endsWith("/")) &&
            !__rwIsExcluded &&
            !__rwHasClerkSignal &&
            !__rwHasNonMarketingQuery &&
            !__rwReqBypass &&
            !request.headers.has("Next-Action");
        let __rwCacheKey = null;
        if (__rwCanEdgeCache) {
            const __rwVer = String((env && env.CF_VERSION_METADATA && env.CF_VERSION_METADATA.id) || "v1").replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 12);
            const __rwNormPath = __rwPath === "/" ? "/index" : __rwPath.replace(/[/]+$/, "");
            if (__rwIsOg) {
                const __rwOgSeed = __rwNormPath + "?" + __rwCleanSearchStr;
                let __h1 = 0x811c9dc5;
                let __h2 = 0x01000193;
                for (let __i = 0; __i < __rwOgSeed.length; __i++) {
                    const __c = __rwOgSeed.charCodeAt(__i);
                    __h1 ^= __c;
                    __h1 = Math.imul(__h1, 0x01000193);
                    __h2 ^= __c;
                    __h2 = Math.imul(__h2, 0x85ebca6b);
                }
                const __rwOgHex = (__h1 >>> 0).toString(16).padStart(8, "0") + (__h2 >>> 0).toString(16).padStart(8, "0");
                __rwCacheKey = new Request("https://www.richardewing.io/__rw_edge_cache/og_v1/" + __rwOgHex + ".woff2", { method: "GET" });
            } else {
                let __rwVariant = "html";
                if (__rwIsRsc) {
                    const __rwRscDisc = [
                        request.headers.get("RSC") || "",
                        request.headers.get("Next-Router-Prefetch") || "",
                        request.headers.get("Next-Router-Segment-Prefetch") || "",
                        request.headers.get("Next-Router-State-Tree") || "",
                        request.headers.get("Next-Url") || ""
                    ].join("|");
                    let __h = 0x811c9dc5;
                    for (let __i = 0; __i < __rwRscDisc.length; __i++) {
                        __h ^= __rwRscDisc.charCodeAt(__i);
                        __h = Math.imul(__h, 0x01000193);
                    }
                    __rwVariant = "rsc_" + (__h >>> 0).toString(16).padStart(8, "0");
                }
                __rwCacheKey = new Request("https://www.richardewing.io/__rw_edge_cache/" + __rwVer + "/" + __rwVariant + __rwNormPath + ".woff2", { method: "GET" });
            }
            const __rwCached = await caches.default.match(__rwCacheKey);
            if (__rwCached) {
                const __rwHitHeaders = new Headers(__rwCached.headers);
                const __rwOrigCt = __rwHitHeaders.get("x-rw-orig-ct") || (__rwIsOg ? "image/png" : (__rwIsRsc ? "text/x-component" : "text/html; charset=utf-8"));
                __rwHitHeaders.delete("x-rw-orig-ct");
                __rwHitHeaders.delete("cf-cache-status");
                __rwHitHeaders.set("Content-Type", __rwOrigCt);
                if (__rwIsOg) {
                    __rwHitHeaders.delete("vary");
                    __rwHitHeaders.delete("cdn-cache-control");
                    __rwHitHeaders.set("Cache-Control", "public, max-age=86400, s-maxage=2592000, stale-while-revalidate=2592000");
                    __rwHitHeaders.set("Cloudflare-CDN-Cache-Control", "public, max-age=2592000, stale-while-revalidate=2592000");
                } else if (__rwIsRsc) {
                    __rwHitHeaders.set("Cache-Control", "private, no-cache, no-store, max-age=0, must-revalidate");
                    __rwHitHeaders.set("Cloudflare-CDN-Cache-Control", "no-store");
                    __rwHitHeaders.set("CDN-Cache-Control", "no-store");
                } else {
                    __rwHitHeaders.set("Cache-Control", "public, max-age=0, must-revalidate");
                    __rwHitHeaders.set("Cloudflare-CDN-Cache-Control", "no-store");
                    __rwHitHeaders.set("CDN-Cache-Control", "no-store");
                    __rwHitHeaders.set("Vary", "Host, RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch, Accept-Encoding");
                }
                __rwHitHeaders.set("X-RW-Edge-Cache", "HIT");
                return new Response(__rwMethod === "HEAD" ? null : __rwCached.body, {
                    status: __rwCached.status,
                    statusText: __rwCached.statusText,
                    headers: __rwHitHeaders
                });
            }
        }
        const __rwOriginRes = await runWithCloudflareRequestContext(request, env, ctx, async () => {`;

  const tailReplacement = `            return handler(reqOrResp, env, ctx, request.signal);
        });
        if (
            __rwCanEdgeCache &&
            __rwCacheKey &&
            __rwMethod === "GET" &&
            __rwOriginRes &&
            __rwOriginRes.status === 200 &&
            !__rwOriginRes.headers.has("set-cookie") &&
            !__rwOriginRes.headers.has("x-nextjs-redirect") &&
            !__rwOriginRes.headers.has("x-action-redirect") &&
            !__rwOriginRes.headers.has("location")
        ) {
            const __rwOriginCc = (__rwOriginRes.headers.get("cache-control") || "").toLowerCase();
            const __rwOriginCt = (__rwOriginRes.headers.get("content-type") || "").toLowerCase();
            const __rwEligibleOrigin = __rwIsOg
                ? __rwOriginCt.includes("image/png")
                : (__rwIsRsc
                    ? __rwOriginCt.includes("text/x-component")
                    : ((__rwOriginCt.includes("text/html") || (__rwIsDirectiveFile && (__rwOriginCt.includes("text/plain") || __rwOriginCt.includes("xml") || __rwOriginCt.includes("json") || __rwOriginCt.includes("manifest")))) && !__rwOriginCc.includes("no-store") && !__rwOriginCc.includes("private")));
            if (__rwEligibleOrigin) {
                const __rwBodyBuf = await __rwOriginRes.arrayBuffer();
                const __rwStoreHeaders = new Headers(__rwOriginRes.headers);
                __rwStoreHeaders.delete("vary");
                __rwStoreHeaders.delete("set-cookie");
                __rwStoreHeaders.delete("cf-cache-status");
                __rwStoreHeaders.delete("pragma");
                __rwStoreHeaders.delete("expires");
                __rwStoreHeaders.delete("x-nextjs-cache");
                __rwStoreHeaders.delete("cloudflare-cdn-cache-control");
                __rwStoreHeaders.delete("cdn-cache-control");
                __rwStoreHeaders.set("X-RW-Orig-CT", __rwOriginRes.headers.get("content-type") || (__rwIsOg ? "image/png" : (__rwIsRsc ? "text/x-component" : "text/html; charset=utf-8")));
                __rwStoreHeaders.set("Content-Type", "font/woff2");
                __rwStoreHeaders.set("Cache-Control", __rwIsOg ? "public, max-age=2592000, s-maxage=2592000, stale-while-revalidate=2592000" : "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800");
                __rwStoreHeaders.set("Content-Length", String(__rwBodyBuf.byteLength));
                const __rwStoreRes = new Response(__rwBodyBuf.slice(0), {
                    status: 200,
                    headers: __rwStoreHeaders
                });
                if (ctx && typeof ctx.waitUntil === "function") {
                    ctx.waitUntil(caches.default.put(__rwCacheKey, __rwStoreRes).catch(() => {}));
                }
                const __rwMissHeaders = new Headers(__rwOriginRes.headers);
                if (__rwIsOg) {
                    __rwMissHeaders.delete("vary");
                    __rwMissHeaders.delete("cdn-cache-control");
                    __rwMissHeaders.set("Cache-Control", "public, max-age=86400, s-maxage=2592000, stale-while-revalidate=2592000");
                    __rwMissHeaders.set("Cloudflare-CDN-Cache-Control", "public, max-age=2592000, stale-while-revalidate=2592000");
                } else if (__rwIsRsc) {
                    __rwMissHeaders.set("Cache-Control", "private, no-cache, no-store, max-age=0, must-revalidate");
                    __rwMissHeaders.set("Cloudflare-CDN-Cache-Control", "no-store");
                    __rwMissHeaders.set("CDN-Cache-Control", "no-store");
                } else {
                    __rwMissHeaders.set("Cache-Control", "public, max-age=0, must-revalidate");
                    __rwMissHeaders.set("Cloudflare-CDN-Cache-Control", "no-store");
                    __rwMissHeaders.set("CDN-Cache-Control", "no-store");
                    __rwMissHeaders.set("Vary", "Host, RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch, Accept-Encoding");
                }
                __rwMissHeaders.set("X-RW-Edge-Cache", "MISS");
                return new Response(__rwBodyBuf, {
                    status: __rwOriginRes.status,
                    statusText: __rwOriginRes.statusText,
                    headers: __rwMissHeaders
                });
            }
        }
        return __rwOriginRes;
    },`;

  if (!content.includes(targetSignature) || !content.includes(tailSignature)) {
    console.error('[patch-worker] ERROR: Target fetch signature not found in .open-next/worker.js!');
    process.exit(1);
  }

  content = content.replace(targetSignature, replacement).replace(tailSignature, tailReplacement);
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

// Minify OpenNext server & middleware handlers via esbuild to cut cold-isolate V8 parse CPU
try {
  const { createRequire } = await import('node:module');
  const require = createRequire(import.meta.url);
  const esbuild = require('esbuild');
  const handlerTargets = [
    path.join(openNextDir, 'server-functions', 'default', 'handler.mjs'),
    path.join(openNextDir, 'middleware', 'handler.mjs'),
  ];
  for (const hFile of handlerTargets) {
    if (fs.existsSync(hFile)) {
      const origSize = fs.statSync(hFile).size;
      const rawCode = fs.readFileSync(hFile, 'utf8');
      const minified = esbuild.transformSync(rawCode, {
        minifyWhitespace: true,
        minifySyntax: true,
        minifyIdentifiers: false,
      });
      fs.writeFileSync(hFile, minified.code, 'utf8');
      const newSize = fs.statSync(hFile).size;
      console.log(
        `[patch-worker] Minified ${path.basename(path.dirname(hFile))}/${path.basename(hFile)}: ${(origSize / 1024 / 1024).toFixed(2)} MB -> ${(newSize / 1024 / 1024).toFixed(2)} MB`
      );
    }
  }
} catch (minErr) {
  console.warn('[patch-worker] Warning minifying OpenNext handlers:', minErr.message);
}

process.exit(0);
