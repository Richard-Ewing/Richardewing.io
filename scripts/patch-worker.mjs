import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

/**
 * Post-OpenNext Worker Patch (`scripts/patch-worker.mjs` - ADR-0019 / ADR-0029)
 *
 * 1. Build-time Static Assets & Manifests:
 *    - Populates `.open-next/assets/cdn-cgi/_next_cache` for OpenNext incremental cache.
 *    - Extracts prerendered public static HTML routes into `.open-next/assets/cdn-cgi/_edge_html/`.
 *    - Extracts prerendered directive `.body` files into `.open-next/assets/cdn-cgi/_edge_directives/`.
 *    - Compiles `app/lib/products.ts` into `.open-next/cloudflare/edge-products-manifest.js`.
 *    - Emits `.open-next/cloudflare/edge-redirects-manifest.js`.
 * 2. Runtime Pre-OpenNext Edge Shield (0.05ms CPU):
 *    - Short-circuits Early Hints and `prefetch;prerender` (`204 No Content`).
 *    - Shields `/api/buy/*` bots/prefetches (`STUB-200`), non-human GETs (`GATE-200`),
 *      and human-confirmed guest checkouts (`EDGE-307`) without booting Next.js.
 *    - Serves directives (`STATIC-DIRECTIVE`) and prerendered HTML (`STATIC-ASSETS-HIT`)
 *      from `env.ASSETS` on `caches.default` miss and backfills POP cache via `ctx.waitUntil`.
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

// Extract prerendered public static HTML & directives into Workers Static Assets (ADR-0029)
const nextServerAppDir = path.resolve(process.cwd(), '.next', 'server', 'app');
if (!fs.existsSync(nextServerAppDir)) {
  console.error(`[patch-worker] Missing ${nextServerAppDir}. Run next build first.`);
  process.exit(1);
}

const edgeHtmlDestDir = path.join(openNextDir, 'assets', 'cdn-cgi', '_edge_html');
fs.rmSync(edgeHtmlDestDir, { recursive: true, force: true });
fs.mkdirSync(edgeHtmlDestDir, { recursive: true });

const EDGE_HTML_EXCLUDED_EXACT = new Set(['/vault']);
const EDGE_HTML_EXCLUDED_PREFIXES = [
  '/vault/assets',
  '/vault/team',
  '/vault/join',
  '/admin',
  '/scorecard',
  '/sign-in',
  '/sign-up',
  '/sso-callback',
  '/ai-integration/advisor',
  '/ai-integration/system/download',
  '/tools/board-room',
  '/tools/dashboard',
  '/tools/verify',
  '/dashboard',
  '/workspace',
  '/wizard',
  '/toolkit-success',
];

let edgeHtmlCount = 0;
function extractStaticHtml(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      extractStaticHtml(fullPath);
      continue;
    }
    if (!entry.isFile() || !entry.name.endsWith('.html')) continue;

    const relFromApp = path.relative(nextServerAppDir, fullPath).replace(/\\/g, '/');
    if (
      relFromApp === '_not-found.html' ||
      relFromApp.startsWith('_') ||
      relFromApp.includes('/_') ||
      relFromApp.startsWith('api/')
    ) {
      continue;
    }

    const strippedSegments = relFromApp.split('/').filter((seg) => !/^\(.*\)$/.test(seg));
    const normalizedRel = strippedSegments.join('/');
    if (
      !normalizedRel ||
      normalizedRel.startsWith('_') ||
      normalizedRel.includes('/_') ||
      normalizedRel.startsWith('api/')
    ) {
      continue;
    }

    const routePath = normalizedRel === 'index.html' ? '/' : '/' + normalizedRel.replace(/\.html$/, '');
    const lowerRoute = routePath.toLowerCase();
    if (
      EDGE_HTML_EXCLUDED_EXACT.has(lowerRoute) ||
      EDGE_HTML_EXCLUDED_PREFIXES.some((p) => lowerRoute === p || lowerRoute.startsWith(p + '/'))
    ) {
      continue;
    }

    const metaPath = fullPath.replace(/\.html$/, '.meta');
    if (fs.existsSync(metaPath)) {
      try {
        const metaJson = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
        if (metaJson && typeof metaJson.status === 'number' && metaJson.status !== 200) {
          continue;
        }
      } catch {}
    }

    const htmlBody = fs.readFileSync(fullPath, 'utf8');
    if (htmlBody.includes('NEXT_REDIRECT')) {
      continue;
    }

    const destHtmlPath = path.join(edgeHtmlDestDir, normalizedRel);
    fs.mkdirSync(path.dirname(destHtmlPath), { recursive: true });
    fs.copyFileSync(fullPath, destHtmlPath);
    edgeHtmlCount++;
  }
}
extractStaticHtml(nextServerAppDir);
console.log(`[patch-worker] Extracted ${edgeHtmlCount} prerendered HTML files into .open-next/assets/cdn-cgi/_edge_html.`);

const edgeDirectivesDestDir = path.join(openNextDir, 'assets', 'cdn-cgi', '_edge_directives');
fs.rmSync(edgeDirectivesDestDir, { recursive: true, force: true });
fs.mkdirSync(edgeDirectivesDestDir, { recursive: true });
const directiveBodies = [
  'robots.txt.body',
  'llms.txt.body',
  'llms-full.txt.body',
  'sitemap.xml.body',
  'feed.xml.body',
  'manifest.webmanifest.body',
  'site.webmanifest.body',
];
let edgeDirectivesCount = 0;
for (const bodyFile of directiveBodies) {
  const srcBody = path.join(nextServerAppDir, bodyFile);
  if (fs.existsSync(srcBody)) {
    const targetName = bodyFile.replace(/\.body$/, '');
    fs.copyFileSync(srcBody, path.join(edgeDirectivesDestDir, targetName));
    edgeDirectivesCount++;
  }
}
console.log(`[patch-worker] Extracted ${edgeDirectivesCount} directive files into .open-next/assets/cdn-cgi/_edge_directives.`);

// Parse app/lib/products.ts PRODUCTS map into .open-next/cloudflare/edge-products-manifest.js (ADR-0029)
const productsTsPath = path.resolve(process.cwd(), 'app/lib/products.ts');
const productsManifestDest = path.join(openNextDir, 'cloudflare', 'edge-products-manifest.js');
if (!fs.existsSync(productsTsPath)) {
  console.error(`[patch-worker] Missing ${productsTsPath}. Cannot emit edge-products-manifest.js.`);
  process.exit(1);
}
const esbuild = require('esbuild');
const productsTsRaw = fs.readFileSync(productsTsPath, 'utf8');
const productsCjs = esbuild.transformSync(productsTsRaw, { loader: 'ts', format: 'cjs' }).code;
const productsSandbox = { module: { exports: {} }, exports: {} };
vm.runInNewContext(productsCjs, productsSandbox);
const parsedProducts = productsSandbox.module.exports?.PRODUCTS || productsSandbox.exports?.PRODUCTS;
if (!parsedProducts || typeof parsedProducts !== 'object') {
  console.error('[patch-worker] ERROR: Failed to extract PRODUCTS map from app/lib/products.ts!');
  process.exit(1);
}
const edgeProductLinks = {};
for (const [prodId, prodObj] of Object.entries(parsedProducts)) {
  if (prodObj && typeof prodObj.paymentLink === 'string' && prodObj.paymentLink.trim()) {
    edgeProductLinks[prodId] = prodObj.paymentLink.trim();
  }
}
const extractedProdCount = Object.keys(edgeProductLinks).length;
const REQUIRED_EDGE_PRODUCTS = [
  'premium_guide_29',
  'premium_guide_79',
  'gut_check',
  'insolvency_diagnostic',
  'full_audit',
  'partner_licensed',
  'enterprise_curriculum_license',
];
const missingRequiredProducts = REQUIRED_EDGE_PRODUCTS.filter((id) => !edgeProductLinks[id]);
if (extractedProdCount < 30 || missingRequiredProducts.length > 0) {
  console.error(
    `[patch-worker] ERROR: Product manifest assertion failed! Count=${extractedProdCount} (min 30), Missing=[${missingRequiredProducts.join(', ')}]`
  );
  process.exit(1);
}
fs.mkdirSync(path.dirname(productsManifestDest), { recursive: true });
fs.writeFileSync(
  productsManifestDest,
  `// Auto-generated by scripts/patch-worker.mjs from app/lib/products.ts (ADR-0029)\nexport const EDGE_PRODUCT_LINKS = ${JSON.stringify(edgeProductLinks, null, 2)};\n`,
  'utf8'
);
console.log(`[patch-worker] Emitted ${extractedProdCount} product links into .open-next/cloudflare/edge-products-manifest.js.`);

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
  content =
    `import { resolveEdgeRedirect } from "./cloudflare/edge-redirects-manifest.js";\n` +
    `import { EDGE_PRODUCT_LINKS } from "./cloudflare/edge-products-manifest.js";\n` +
    content;
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
        const __rwSecPurposeEarly = (request.headers.get("sec-purpose") || "").toLowerCase();
        if (__rwUa.includes("early hints") || __rwSecPurposeEarly.includes("prefetch;prerender")) {
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
        if (__rwLowerPath.startsWith("/__rw_edge_cache/") || __rwLowerPath.startsWith("/cdn-cgi/_edge_")) {
            return new Response("Not Found", {
                status: 404,
                headers: {
                    "Content-Type": "text/plain; charset=utf-8",
                    "Cache-Control": "private, no-store",
                    "Cloudflare-CDN-Cache-Control": "no-store",
                    "CDN-Cache-Control": "no-store"
                }
            });
        }
        if (__rwLowerPath === "/og-default.png" && (request.method === "GET" || request.method === "HEAD") && env && env.ASSETS && typeof env.ASSETS.fetch === "function") {
            try {
                const __rwOgDefaultRes = await env.ASSETS.fetch("https://assets.local/og-default.png");
                if (__rwOgDefaultRes && __rwOgDefaultRes.status === 200) {
                    return new Response(request.method === "HEAD" ? null : __rwOgDefaultRes.body, {
                        status: 200,
                        headers: {
                            "Content-Type": "image/png",
                            "Cache-Control": "public, max-age=86400, s-maxage=2592000, stale-while-revalidate=2592000",
                            "Cloudflare-CDN-Cache-Control": "public, max-age=2592000, stale-while-revalidate=2592000",
                            "Content-Signal": "ai-train=no, search=yes, ai-input=yes",
                            "X-RW-Edge-Cache": "STATIC-OG-DEFAULT"
                        }
                    });
                }
            } catch {}
        }
        const __rwIsLocal = /^(localhost|127\\.0\\.0\\.1)(:\\d+)?$/i.test(__rwUrl.host);
        const __rwIsWorkersPreview = __rwUrl.hostname.endsWith(".workers.dev");
        const __rwCanonicalOrigin = (__rwIsLocal || __rwIsWorkersPreview) ? __rwUrl.origin : "https://www.richardewing.io";
        if (__rwLowerPath === "/api/buy" || __rwLowerPath.startsWith("/api/buy/")) {
            const __rwPurpose = (request.headers.get("purpose") || "").toLowerCase();
            const __rwSecPurpose = __rwSecPurposeEarly;
            const __rwBuyPrefetch =
                __rwPurpose.includes("prefetch") ||
                __rwSecPurpose.includes("prefetch") ||
                request.headers.get("RSC") === "1" ||
                request.headers.has("Next-Router-Prefetch") ||
                request.headers.has("Next-Router-Segment-Prefetch");
            const __rwBuyBotRe = /(curl|python|go-http-client|axios|node-fetch|wget|scrapy|httpclient|undici|headlesschrome|phantomjs|playwright|puppeteer|googlebot|googleother|google-extended|google-cloudvertexbot|google-notebooklm|adsbot-google|mediapartners-google|bingbot|adidxbot|applebot|duckduckbot|duckassistbot|yandexbot|bravebot|slurp|oai-searchbot|chatgpt-user|gptbot|claude-searchbot|claude-user|claudebot|anthropic-ai|perplexitybot|perplexity-user|amzn-searchbot|amzn-user|amazonbot|youbot|exasearchbot|meta-externalagent|facebookexternalhit|facebookbot|facebot|linkedinbot|twitterbot|slackbot|discordbot|whatsapp|telegrambot|pinterestbot|bytespider|tiktokspider|ccbot|petalbot|semrushbot|ahrefsbot|mj12bot|dotbot|awariobot|barkrowler|dataforseobot|blexbot|serpstatbot|sogou|baiduspider|deepseekbot|grokbot|cohere-ai|diffbot|ai2bot|timpibot|omgili)/i;
            if (__rwBuyPrefetch || __rwBuyBotRe.test(__rwUa)) {
                return new Response(
                    '<!doctype html><html><head><meta name="robots" content="noindex, nofollow"><title>Checkout</title></head><body></body></html>',
                    {
                        status: 200,
                        headers: {
                            "Content-Type": "text/html; charset=utf-8",
                            "X-Robots-Tag": "noindex, nofollow",
                            "Cache-Control": "private, no-store",
                            "Cloudflare-CDN-Cache-Control": "no-store",
                            "CDN-Cache-Control": "no-store",
                            "X-RW-Buy-Shield": "STUB-200"
                        }
                    }
                );
            }
            const __rwBuyMethod = request.method.toUpperCase();
            if ((__rwBuyMethod === "GET" || __rwBuyMethod === "HEAD") && (__rwLowerPath === "/api/buy" || __rwLowerPath === "/api/buy/")) {
                return new Response(null, {
                    status: 307,
                    headers: {
                        "Location": new URL("/pricing-sprints", __rwCanonicalOrigin).toString(),
                        "Cache-Control": "private, no-store",
                        "Cloudflare-CDN-Cache-Control": "no-store",
                        "CDN-Cache-Control": "no-store",
                        "X-Robots-Tag": "noindex, follow",
                        "X-RW-Buy-Shield": "ROOT-307"
                    }
                });
            }
            const __rwBuyCookie = (request.headers.get("cookie") || "").toLowerCase();
            const __rwBuyHasClerk = __rwBuyCookie.includes("__session") || __rwBuyCookie.includes("__clerk");
            if ((__rwBuyMethod === "GET" || __rwBuyMethod === "HEAD") && !__rwBuyHasClerk) {
                const __rwIsEnterprise = __rwLowerPath.startsWith("/api/buy/enterprise/");
                const __rwPrefixLen = __rwIsEnterprise ? "/api/buy/enterprise/".length : "/api/buy/".length;
                const __rwTail = __rwPath.slice(__rwPrefixLen).replace(/\\/+$/, "");
                const __rwRawProductId = __rwTail.includes("/") ? "" : __rwTail;
                const __rwPaymentLink =
                    __rwRawProductId && Object.prototype.hasOwnProperty.call(EDGE_PRODUCT_LINKS, __rwRawProductId)
                        ? EDGE_PRODUCT_LINKS[__rwRawProductId]
                        : "";
                if (!__rwPaymentLink) {
                    const __rwMissingDest = new URL(__rwIsEnterprise ? "/vault/curriculum/tracks" : "/checkout-pending", __rwCanonicalOrigin).toString();
                    return new Response(null, {
                        status: 307,
                        headers: {
                            "Location": __rwMissingDest,
                            "Cache-Control": "private, no-store",
                            "Cloudflare-CDN-Cache-Control": "no-store",
                            "CDN-Cache-Control": "no-store",
                            "X-Robots-Tag": "noindex, follow",
                            "X-RW-Buy-Shield": "MISSING-307"
                        }
                    });
                }
                const __rwSanitizeSeg = (val, fallback, maxLen) =>
                    String(val || "")
                        .replace(/--+/g, "-")
                        .replace(/[^a-zA-Z0-9_-]/g, "")
                        .replace(/^-+|-+$/g, "")
                        .slice(0, maxLen) || fallback;
                const __rwSafeSource = __rwSanitizeSeg(__rwUrl.searchParams.get("source") || "direct", "direct", 40);
                const __rwSafeProd = __rwSanitizeSeg(__rwRawProductId, "item", 60);
                const __rwIsHumanClick =
                    __rwUrl.searchParams.get("u") === "1" ||
                    request.headers.get("sec-fetch-user") === "?1";
                if (!__rwIsHumanClick) {
                    const __rwSafePath = (__rwIsEnterprise ? "/api/buy/enterprise/" : "/api/buy/") + encodeURIComponent(__rwRawProductId);
                    const __rwContinueUrl = \`\${__rwSafePath}?source=\${encodeURIComponent(__rwSafeSource)}&u=1\`;
                    const __rwGateHtml = \`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex, nofollow"><title>Secure Checkout Verification</title><style>body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#FAF9F6;color:#1a1a1a;font-family:system-ui,-apple-system,sans-serif;padding:24px}.card{max-width:460px;width:100%;background:#ffffff;border:1px solid #d4d0c5;border-radius:16px;padding:32px;box-shadow:0 8px 30px rgba(30,41,36,0.08)}.eyebrow{font-family:ui-monospace,monospace;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#1f3b2c;margin-bottom:10px}h1{font-size:22px;margin:0 0 10px;line-height:1.25}p{font-size:14px;line-height:1.6;color:#526058;margin:0 0 22px}.btn{display:inline-block;width:100%;box-sizing:border-box;text-align:center;padding:14px 20px;border-radius:10px;background:#1f3b2c;color:#ffffff;font-weight:700;font-size:14px;text-decoration:none}.btn:hover{background:#162e26}.back{display:block;text-align:center;margin-top:14px;font-size:12px;color:#526058;text-decoration:underline}</style></head><body><main class="card"><div class="eyebrow">Richard Ewing Advisory Checkout</div><h1>Continue to Secure Stripe Checkout</h1><p>Confirm below to open your secure Stripe checkout session.</p><a class="btn" rel="noopener noreferrer nofollow" href="\${__rwContinueUrl}">Continue to Secure Stripe Checkout -&gt;</a><a class="back" href="/services">Return to Services</a></main></body></html>\`;
                    return new Response(__rwBuyMethod === "HEAD" ? null : __rwGateHtml, {
                        status: 200,
                        headers: {
                            "Content-Type": "text/html; charset=utf-8",
                            "X-Robots-Tag": "noindex, nofollow",
                            "Cache-Control": "private, no-store",
                            "Cloudflare-CDN-Cache-Control": "no-store",
                            "CDN-Cache-Control": "no-store",
                            "X-Frame-Options": "SAMEORIGIN",
                            "X-Content-Type-Options": "nosniff",
                            "X-RW-Buy-Shield": "GATE-200"
                        }
                    });
                }
                const __rwStripeUrl = new URL(__rwPaymentLink, __rwCanonicalOrigin);
                if (__rwStripeUrl.hostname.endsWith("stripe.com") && !__rwStripeUrl.searchParams.has("client_reference_id")) {
                    const __rwRef = (__rwIsEnterprise
                        ? \`guest--\${__rwSafeSource}--enterprise_\${__rwSafeProd}\`
                        : \`guest--\${__rwSafeSource}--\${__rwSafeProd}\`
                    ).slice(0, 200);
                    __rwStripeUrl.searchParams.set("client_reference_id", __rwRef);
                }
                return new Response(null, {
                    status: 307,
                    headers: {
                        "Location": __rwStripeUrl.toString(),
                        "Cache-Control": "private, no-store",
                        "Cloudflare-CDN-Cache-Control": "no-store",
                        "CDN-Cache-Control": "no-store",
                        "X-Robots-Tag": "noindex, follow",
                        "X-RW-Buy-Shield": "EDGE-307"
                    }
                });
            }
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
                __rwLowerPath.endsWith(".sqlite") ||
                __rwLowerPath.endsWith(".sqlite3") ||
                __rwLowerPath.endsWith(".db") ||
                __rwLowerPath.startsWith("/.git") ||
                __rwLowerPath.startsWith("/.aws") ||
                __rwLowerPath.startsWith("/.ssh") ||
                __rwLowerPath.startsWith("/.config") ||
                __rwLowerPath.startsWith("/.next/") ||
                __rwLowerPath.includes("/@fs/") ||
                __rwLowerPath.includes("service_account") ||
                (!/^\\/compar(?:e|isons)\\/[a-z0-9-]+\\/?$/.test(__rwPath) && __rwLowerPath.includes("firebase")) ||
                __rwLowerPath.includes("wp-admin") ||
                __rwLowerPath.includes("wp-json") ||
                __rwLowerPath.includes("wp-includes") ||
                __rwLowerPath.includes("wp-content") ||
                __rwLowerPath.includes(".env") ||
                __rwLowerPath.includes("setup-config") ||
                __rwLowerPath.includes("wlwmanifest") ||
                __rwLowerPath.includes("xmlrpc") ||
                __rwLowerPath.includes("msmtprc") ||
                __rwLowerPath.includes("credentials.json") ||
                __rwLowerPath.includes("docker-compose") ||
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
                "dotbot",
                "awariobot",
                "barkrowler",
                "dataforseobot",
                "blexbot",
                "serpstatbot"
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
        const __rwNeedsHostRedirect =
            !__rwIsLocal &&
            !__rwIsWorkersPreview &&
            (__rwUrl.hostname !== "www.richardewing.io" || __rwUrl.protocol !== "https:");
        const __rwMappedTarget =
            (!__rwLowerPath.startsWith("/_next/") && !__rwLowerPath.startsWith("/assets/") && !__rwLowerPath.startsWith("/api/"))
                ? resolveEdgeRedirect(__rwPath)
                : null;
        if (__rwMappedTarget === "__EDGE_410_GONE__") {
          return new Response("410 Gone: Page Retired", {
            status: 410,
            headers: {
              "content-type": "text/plain; charset=utf-8",
              "x-robots-tag": "noindex, follow",
              "cache-control": "public, max-age=86400, s-maxage=86400",
            },
          });
        }
        if (__rwNeedsHostRedirect || __rwMappedTarget !== null) {
            const __rwFinalTarget = __rwMappedTarget !== null ? __rwMappedTarget : __rwPath;
            const __rwHashIdx = __rwFinalTarget.indexOf("#");
            const __rwDestPath = __rwHashIdx >= 0 ? __rwFinalTarget.slice(0, __rwHashIdx) : __rwFinalTarget;
            const __rwDestHash = __rwHashIdx >= 0 ? __rwFinalTarget.slice(__rwHashIdx) : "";
            const __rwSafeDestPath = "/" + __rwDestPath.replace(/^[/\\\\]+/, "");
            const __rwFullLocation = __rwCanonicalOrigin + __rwSafeDestPath + __rwUrl.search + __rwDestHash;
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
                        request.headers.get("Next-Router-Segment-Prefetch") || ""
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
            let __rwCached = null;
            try {
                __rwCached = await caches.default.match(__rwCacheKey);
            } catch {}
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
                } else if (__rwIsDirectiveFile) {
                    __rwHitHeaders.delete("vary");
                    __rwHitHeaders.delete("cdn-cache-control");
                    __rwHitHeaders.set("Cache-Control", "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800");
                    __rwHitHeaders.set("Cloudflare-CDN-Cache-Control", "public, max-age=86400, stale-while-revalidate=604800");
                } else {
                    __rwHitHeaders.set("Cache-Control", "public, max-age=0, must-revalidate");
                    __rwHitHeaders.set("Cloudflare-CDN-Cache-Control", "no-store");
                    __rwHitHeaders.set("CDN-Cache-Control", "no-store");
                    __rwHitHeaders.set("Vary", "Host, RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch, Accept-Encoding");
                }
                __rwHitHeaders.set("Content-Signal", "ai-train=no, search=yes, ai-input=yes");
                __rwHitHeaders.set("X-RW-Edge-Cache", "HIT");
                return new Response(__rwMethod === "HEAD" ? null : __rwCached.body, {
                    status: __rwCached.status,
                    statusText: __rwCached.statusText,
                    headers: __rwHitHeaders
                });
            }
            if (__rwIsOg) {
                const __rwOgCrawlerRe = /(amzn-searchbot|amzn-user|amazonbot|bingbot|adidxbot|googlebot|googleother|google-inspectiontool|exasearchbot|applebot|duckduckbot|duckassistbot|yandexbot|baiduspider|sogou|seznambot|petalbot|perplexitybot|perplexity-user|oai-searchbot|chatgpt-user|claude-searchbot|claude-user|meta-webindexer|bytespider|tiktokspider|ccbot|semrushbot|ahrefsbot|mj12bot|dotbot|awariobot|barkrowler|dataforseobot|blexbot|serpstatbot|python-requests|python-urllib|go-http-client|curl|wget|scrapy|axios|undici|node-fetch|headlesschrome|playwright|puppeteer|phantomjs)/i;
                if (__rwOgCrawlerRe.test(__rwUa)) {
                    return new Response(null, {
                        status: 302,
                        headers: {
                            "Location": __rwCanonicalOrigin + "/og-default.png",
                            "Cache-Control": "private, no-cache, no-store, max-age=0, must-revalidate",
                            "Cloudflare-CDN-Cache-Control": "no-store",
                            "CDN-Cache-Control": "no-store",
                            "Content-Signal": "ai-train=no, search=yes, ai-input=yes",
                            "X-RW-Edge-Cache": "OG-CRAWLER-FALLBACK"
                        }
                    });
                }
            }
            if (__rwIsDirectiveFile && !__rwIsRsc && env && env.ASSETS && typeof env.ASSETS.fetch === "function") {
                try {
                    const __rwDirRes = await env.ASSETS.fetch("https://assets.local/cdn-cgi/_edge_directives" + __rwLowerPath);
                    if (__rwDirRes && __rwDirRes.status === 200) {
                        const __rwDirBuf = await __rwDirRes.arrayBuffer();
                        const __rwDirCtMap = {
                            "/robots.txt": "text/plain; charset=utf-8",
                            "/ads.txt": "text/plain; charset=utf-8",
                            "/llms.txt": "text/plain; charset=utf-8",
                            "/llms-full.txt": "text/plain; charset=utf-8",
                            "/sitemap.xml": "application/xml; charset=utf-8",
                            "/feed.xml": "application/xml; charset=utf-8",
                            "/manifest.webmanifest": "application/manifest+json; charset=utf-8",
                            "/site.webmanifest": "application/manifest+json; charset=utf-8"
                        };
                        const __rwDirCt = __rwDirCtMap[__rwLowerPath] || "text/plain; charset=utf-8";
                        const __rwDirStoreHeaders = new Headers({
                            "X-RW-Orig-CT": __rwDirCt,
                            "Content-Type": "font/woff2",
                            "Cache-Control": "public, max-age=2592000, s-maxage=2592000, stale-while-revalidate=2592000",
                            "Content-Signal": "ai-train=no, search=yes, ai-input=yes",
                            "Content-Length": String(__rwDirBuf.byteLength)
                        });
                        if (ctx && typeof ctx.waitUntil === "function") {
                            ctx.waitUntil(
                                caches.default.put(
                                    __rwCacheKey,
                                    new Response(__rwDirBuf.slice(0), { status: 200, headers: __rwDirStoreHeaders })
                                ).catch(() => {})
                            );
                        }
                        return new Response(__rwMethod === "HEAD" ? null : __rwDirBuf, {
                            status: 200,
                            headers: {
                                "Content-Type": __rwDirCt,
                                "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
                                "Cloudflare-CDN-Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
                                "Content-Signal": "ai-train=no, search=yes, ai-input=yes",
                                "X-RW-Edge-Cache": "STATIC-DIRECTIVE"
                            }
                        });
                    }
                } catch {}
            }
            if (!__rwIsOg && !__rwIsRsc && !__rwIsDirectiveFile && env && env.ASSETS && typeof env.ASSETS.fetch === "function") {
                try {
                    const __rwAssetRes = await env.ASSETS.fetch("https://assets.local/cdn-cgi/_edge_html" + __rwNormPath + ".html");
                    if (__rwAssetRes && __rwAssetRes.status === 200) {
                        const __rwAssetBuf = await __rwAssetRes.arrayBuffer();
                        const __rwAssetStoreHeaders = new Headers({
                            "X-RW-Orig-CT": "text/html; charset=utf-8",
                            "Content-Type": "font/woff2",
                            "Cache-Control": "public, max-age=2592000, s-maxage=2592000, stale-while-revalidate=2592000",
                            "Content-Signal": "ai-train=no, search=yes, ai-input=yes",
                            "X-Frame-Options": "SAMEORIGIN",
                            "X-Content-Type-Options": "nosniff",
                            "Referrer-Policy": "strict-origin-when-cross-origin",
                            "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
                            "Content-Length": String(__rwAssetBuf.byteLength)
                        });
                        if (ctx && typeof ctx.waitUntil === "function") {
                            ctx.waitUntil(
                                caches.default.put(
                                    __rwCacheKey,
                                    new Response(__rwAssetBuf.slice(0), { status: 200, headers: __rwAssetStoreHeaders })
                                ).catch(() => {})
                            );
                        }
                        return new Response(__rwMethod === "HEAD" ? null : __rwAssetBuf, {
                            status: 200,
                            headers: {
                                "Content-Type": "text/html; charset=utf-8",
                                "X-RW-Edge-Cache": "STATIC-ASSETS-HIT",
                                "Content-Signal": "ai-train=no, search=yes, ai-input=yes",
                                "Cache-Control": "public, max-age=0, must-revalidate",
                                "Cloudflare-CDN-Cache-Control": "no-store",
                                "CDN-Cache-Control": "no-store",
                                "Vary": "Host, RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch, Accept-Encoding",
                                "X-Frame-Options": "SAMEORIGIN",
                                "X-Content-Type-Options": "nosniff",
                                "Referrer-Policy": "strict-origin-when-cross-origin",
                                "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload"
                            }
                        });
                    }
                } catch {}
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
                __rwStoreHeaders.set("Cache-Control", __rwIsOg ? "public, max-age=2592000, s-maxage=2592000, stale-while-revalidate=2592000" : "public, max-age=2592000, s-maxage=2592000, stale-while-revalidate=2592000");
                __rwStoreHeaders.set("Content-Signal", "ai-train=no, search=yes, ai-input=yes");
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
                __rwMissHeaders.set("Content-Signal", "ai-train=no, search=yes, ai-input=yes");
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

// Verify total Workers Static Assets file count stays safely under Cloudflare 20,000 cap (< 18,000 guard)
const assetsRootDir = path.join(openNextDir, 'assets');
let totalAssetsCount = 0;
function countAssetsFiles(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) countAssetsFiles(full);
    else if (entry.isFile()) totalAssetsCount++;
  }
}
countAssetsFiles(assetsRootDir);
console.log(`[patch-worker] Total .open-next/assets file count: ${totalAssetsCount} (limit < 18,000).`);
if (totalAssetsCount >= 18000) {
  console.error(`[patch-worker] ERROR: Asset count ${totalAssetsCount} reached 18,000 safety ceiling!`);
  process.exit(1);
}

process.exit(0);
