import { NextResponse } from 'next/server';

export const SEARCH_CRAWLER_RE =
    /\b(googlebot|googleother|google-extended|google-cloudvertexbot|google-notebooklm|adsbot-google|mediapartners-google|bingbot|adidxbot|applebot|applebot-extended|duckduckbot|duckassistbot|yandexbot|bravebot|slurp|oai-searchbot|chatgpt-user|gptbot|claude-searchbot|claude-user|claudebot|anthropic-ai|perplexitybot|perplexity-user|amzn-searchbot|amzn-user|amazonbot|youbot|exasearchbot|meta-externalagent|facebookexternalhit|facebookbot|facebot|linkedinbot|twitterbot|slackbot|discordbot|whatsapp|telegrambot|pinterestbot|bytespider|tiktokspider|ccbot|petalbot|semrushbot|ahrefsbot|mj12bot|dotbot|awariobot|barkrowler|dataforseobot|blexbot|serpstatbot|headlesschrome|phantomjs|playwright|puppeteer|curl|python|go-http-client|axios|node-fetch|wget|scrapy|httpclient|undici)\b/i;

export function isBuyPrefetchOrCrawler(request: Request): boolean {
    const ua = request.headers.get('user-agent') || '';
    const purpose = (request.headers.get('purpose') || '').toLowerCase();
    const secPurpose = (request.headers.get('sec-purpose') || '').toLowerCase();
    const isPrefetchOrRsc =
        purpose.includes('prefetch') ||
        secPurpose.includes('prefetch') ||
        request.headers.get('rsc') === '1' ||
        request.headers.has('next-router-prefetch') ||
        request.headers.has('next-router-segment-prefetch');
    return isPrefetchOrRsc || SEARCH_CRAWLER_RE.test(ua);
}

export function buildBuyStubResponse(title = 'Checkout Endpoint'): NextResponse {
    const safeTitle = title.replace(/[<>&"']/g, '');
    return new NextResponse(
        `<!doctype html><html><head><meta name="robots" content="noindex, nofollow"><title>${safeTitle}</title></head><body></body></html>`,
        {
            status: 200,
            headers: {
                'Content-Type': 'text/html; charset=utf-8',
                'X-Robots-Tag': 'noindex, nofollow',
                'Cache-Control': 'private, no-store',
                'Cloudflare-CDN-Cache-Control': 'no-store',
                'CDN-Cache-Control': 'no-store',
                'X-RW-Buy-Shield': 'STUB-200',
            },
        }
    );
}

export function sanitizeBuySeg(val: string, fallback: string, maxLen: number): string {
    return (
        val
            .replace(/--+/g, '-')
            .replace(/[^a-zA-Z0-9_-]/g, '')
            .replace(/^-+|-+$/g, '')
            .slice(0, maxLen) || fallback
    );
}

export function isHumanBuyClick(request: Request, reqUrl: URL): boolean {
    return reqUrl.searchParams.get('u') === '1' || request.headers.get('sec-fetch-user') === '?1';
}

export function buildBuyGateResponse(continueUrl: string): NextResponse {
    const escapedHref = continueUrl.replace(/["'<>]/g, '');
    const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex, nofollow"><title>Secure Checkout Verification</title><style>body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#FAF9F6;color:#1a1a1a;font-family:system-ui,-apple-system,sans-serif;padding:24px}.card{max-width:460px;width:100%;background:#ffffff;border:1px solid #d4d0c5;border-radius:16px;padding:32px;box-shadow:0 8px 30px rgba(30,41,36,0.08)}.eyebrow{font-family:ui-monospace,monospace;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#1f3b2c;margin-bottom:10px}h1{font-size:22px;margin:0 0 10px;line-height:1.25}p{font-size:14px;line-height:1.6;color:#526058;margin:0 0 22px}.btn{display:inline-block;width:100%;box-sizing:border-box;text-align:center;padding:14px 20px;border-radius:10px;background:#1f3b2c;color:#ffffff;font-weight:700;font-size:14px;text-decoration:none}.btn:hover{background:#162e26}.back{display:block;text-align:center;margin-top:14px;font-size:12px;color:#526058;text-decoration:underline}</style></head><body><main class="card"><div class="eyebrow">Richard Ewing Advisory Checkout</div><h1>Continue to Secure Stripe Checkout</h1><p>Confirm below to open your secure Stripe checkout session.</p><a class="btn" rel="noopener noreferrer nofollow" href="${escapedHref}">Continue to Secure Stripe Checkout -&gt;</a><a class="back" href="/services">Return to Services</a></main></body></html>`;
    return new NextResponse(html, {
        status: 200,
        headers: {
            'Content-Type': 'text/html; charset=utf-8',
            'X-Robots-Tag': 'noindex, nofollow',
            'Cache-Control': 'private, no-store',
            'Cloudflare-CDN-Cache-Control': 'no-store',
            'CDN-Cache-Control': 'no-store',
            'X-Frame-Options': 'SAMEORIGIN',
            'X-Content-Type-Options': 'nosniff',
            'X-RW-Buy-Shield': 'GATE-200',
        },
    });
}
