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
            '<!doctype html><html><head><meta name="robots" content="noindex, nofollow"><title>Enterprise Checkout Endpoint</title></head><body></body></html>',
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
        const fallbackRes = NextResponse.redirect(new URL('/vault/curriculum/tracks', request.url));
        fallbackRes.headers.set('X-Robots-Tag', 'noindex, follow');
        return fallbackRes;
    }

    const reqUrl = new URL(request.url);
    const rawSource =
        (reqUrl.searchParams.get('source') || 'direct')
            .replace(/[^a-zA-Z0-9_-]/g, '')
            .slice(0, 40) || 'direct';

    const stripeUrl = new URL(product.paymentLink);
    const cookieHeader = request.headers.get('cookie') || '';
    const hasClerkCookie =
        cookieHeader.includes('__session') || cookieHeader.includes('__clerk');

    if (hasClerkCookie) {
        try {
            const authResult = await Promise.race([
                auth(),
                new Promise<{ userId: null }>((resolve) =>
                    setTimeout(() => resolve({ userId: null }), 1200)
                ),
            ]);
            if (authResult?.userId) {
                const referenceId = `${authResult.userId}::enterprise_${productId}`;
                stripeUrl.searchParams.set('client_reference_id', referenceId);
            }
        } catch {
            // Proceed directly to Stripe guest checkout if Clerk lookup errors
        }
    }

    if (!stripeUrl.searchParams.has('client_reference_id')) {
        stripeUrl.searchParams.set(
            'client_reference_id',
            `guest::${rawSource}::enterprise_${productId}`
        );
    }

    const redirectRes = NextResponse.redirect(stripeUrl);
    redirectRes.headers.set('X-Robots-Tag', 'noindex, follow');
    return redirectRes;
}
