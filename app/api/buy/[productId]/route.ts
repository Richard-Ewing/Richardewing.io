import { NextResponse } from 'next/server';
import { PRODUCTS } from '@/lib/products';
import { auth } from '@clerk/nextjs/server';

export const dynamic = 'force-dynamic';

const SEARCH_CRAWLER_RE =
    /\b(googlebot|googleother|google-extended|google-cloudvertexbot|google-notebooklm|adsbot-google|mediapartners-google|bingbot|adidxbot|applebot|applebot-extended|duckduckbot|duckassistbot|yandexbot|bravebot|slurp|oai-searchbot|chatgpt-user|gptbot|claude-searchbot|claude-user|claudebot|anthropic-ai|perplexitybot|perplexity-user|amzn-searchbot|amzn-user|amazonbot|youbot|exasearchbot|meta-externalagent|facebookexternalhit|facebookbot|facebot|linkedinbot|twitterbot|slackbot|discordbot|whatsapp|telegrambot|pinterestbot|bytespider|tiktokspider|ccbot|petalbot|semrushbot|ahrefsbot|mj12bot|dotbot|awariobot|barkrowler|dataforseobot|blexbot|serpstatbot|headlesschrome|phantomjs|playwright|puppeteer|curl|python|go-http-client|axios|node-fetch|wget|scrapy|httpclient)\b/i;

export async function GET(
    request: Request,
    { params }: { params: Promise<{ productId: string }> }
) {
    const ua = request.headers.get('user-agent') || '';
    const purpose = (request.headers.get('purpose') || '').toLowerCase();
    const secPurpose = (request.headers.get('sec-purpose') || '').toLowerCase();
    const isPrefetchOrRsc =
        purpose.includes('prefetch') ||
        secPurpose.includes('prefetch') ||
        request.headers.get('rsc') === '1' ||
        request.headers.has('next-router-prefetch') ||
        request.headers.has('next-router-segment-prefetch');
    if (isPrefetchOrRsc || SEARCH_CRAWLER_RE.test(ua)) {
        return new NextResponse(
            '<!doctype html><html><head><meta name="robots" content="noindex, nofollow"><title>Checkout Endpoint</title></head><body></body></html>',
            {
                status: 200,
                headers: {
                    'Content-Type': 'text/html; charset=utf-8',
                    'X-Robots-Tag': 'noindex, nofollow',
                    'Cache-Control': 'private, no-store',
                    'Cloudflare-CDN-Cache-Control': 'no-store',
                },
            }
        );
    }

    const { productId } = await params;
    const product = PRODUCTS[productId];

    if (!product || !product.paymentLink) {
        const pendingRes = NextResponse.redirect(new URL('/checkout-pending', request.url));
        pendingRes.headers.set('X-Robots-Tag', 'noindex, follow');
        return pendingRes;
    }

    const sanitizeSeg = (val: string, fallback: string, maxLen: number) =>
        val
            .replace(/--+/g, '-')
            .replace(/[^a-zA-Z0-9_-]/g, '')
            .replace(/^-+|-+$/g, '')
            .slice(0, maxLen) || fallback;

    const reqUrl = new URL(request.url);
    const rawSource = sanitizeSeg(reqUrl.searchParams.get('source') || 'direct', 'direct', 40);
    const safeProductId = sanitizeSeg(productId, 'item', 60);

    const stripeUrl = new URL(product.paymentLink, request.url);
    const isStripeTarget = stripeUrl.hostname.endsWith('stripe.com');
    const cookieHeader = request.headers.get('cookie') || '';
    const hasClerkCookie =
        cookieHeader.includes('__session') || cookieHeader.includes('__clerk');

    if (isStripeTarget && hasClerkCookie) {
        try {
            const authResult = await Promise.race([
                auth(),
                new Promise<{ userId: null }>((resolve) =>
                    setTimeout(() => resolve({ userId: null }), 1200)
                ),
            ]);
            if (authResult?.userId) {
                const moduleId = reqUrl.searchParams.get('moduleId');
                const safeModuleId = moduleId ? sanitizeSeg(moduleId, 'mod', 40) : '';
                const referenceId = safeModuleId
                    ? `${authResult.userId}--module_${safeModuleId}`
                    : `${authResult.userId}--${safeProductId}`;
                stripeUrl.searchParams.set('client_reference_id', referenceId.slice(0, 200));
            }
        } catch {
            // Proceed directly to Stripe guest checkout if Clerk lookup errors
        }
    }

    if (isStripeTarget && !stripeUrl.searchParams.has('client_reference_id')) {
        stripeUrl.searchParams.set(
            'client_reference_id',
            `guest--${rawSource}--${safeProductId}`.slice(0, 200)
        );
    }

    const redirectRes = NextResponse.redirect(stripeUrl);
    redirectRes.headers.set('X-Robots-Tag', 'noindex, follow');
    return redirectRes;
}
