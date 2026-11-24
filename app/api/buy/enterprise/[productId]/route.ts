import { NextResponse } from 'next/server';
import { PRODUCTS } from '@/lib/products';
import { auth } from '@clerk/nextjs/server';
import {
    buildBuyGateResponse,
    buildBuyStubResponse,
    isBuyPrefetchOrCrawler,
    isHumanBuyClick,
    sanitizeBuySeg,
} from '@/app/lib/buy-shield';

export const dynamic = 'force-dynamic';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ productId: string }> }
) {
    if (isBuyPrefetchOrCrawler(request)) {
        return buildBuyStubResponse('Enterprise Checkout Endpoint');
    }

    const { productId } = await params;
    const product = Object.prototype.hasOwnProperty.call(PRODUCTS, productId)
        ? PRODUCTS[productId]
        : undefined;

    if (!product || !product.paymentLink) {
        const fallbackRes = NextResponse.redirect(new URL('/vault/curriculum/tracks', request.url), 307);
        fallbackRes.headers.set('Cache-Control', 'private, no-store');
        fallbackRes.headers.set('Cloudflare-CDN-Cache-Control', 'no-store');
        fallbackRes.headers.set('CDN-Cache-Control', 'no-store');
        fallbackRes.headers.set('X-Robots-Tag', 'noindex, follow');
        return fallbackRes;
    }

    const reqUrl = new URL(request.url);
    const rawSource = sanitizeBuySeg(reqUrl.searchParams.get('source') || 'direct', 'direct', 40);
    const safeProductId = sanitizeBuySeg(productId, 'item', 60);

    if (!isHumanBuyClick(request, reqUrl)) {
        const continueUrl = `/api/buy/enterprise/${encodeURIComponent(productId)}?source=${encodeURIComponent(rawSource)}&u=1`;
        return buildBuyGateResponse(continueUrl);
    }

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
                const referenceId = `${authResult.userId}--enterprise_${safeProductId}`;
                stripeUrl.searchParams.set('client_reference_id', referenceId.slice(0, 200));
            }
        } catch {
            // Proceed directly to Stripe guest checkout if Clerk lookup errors
        }
    }

    if (isStripeTarget && !stripeUrl.searchParams.has('client_reference_id')) {
        stripeUrl.searchParams.set(
            'client_reference_id',
            `guest--${rawSource}--enterprise_${safeProductId}`.slice(0, 200)
        );
    }

    const redirectRes = NextResponse.redirect(stripeUrl, 307);
    redirectRes.headers.set('Cache-Control', 'private, no-store');
    redirectRes.headers.set('Cloudflare-CDN-Cache-Control', 'no-store');
    redirectRes.headers.set('CDN-Cache-Control', 'no-store');
    redirectRes.headers.set('X-Robots-Tag', 'noindex, follow');
    redirectRes.headers.set('X-RW-Buy-Shield', 'NEXT-307');
    return redirectRes;
}
