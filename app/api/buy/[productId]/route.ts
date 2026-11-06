import { NextResponse } from 'next/server';
import { PRODUCTS } from '@/lib/products';
import { auth } from '@clerk/nextjs/server';

export const dynamic = 'force-dynamic';

const SEARCH_CRAWLER_RE = /\b(googlebot|googleother|bingbot|applebot|duckduckbot|yandexbot|bravebot|slurp)\b/i;

export async function GET(
    request: Request,
    { params }: { params: Promise<{ productId: string }> }
) {
    const ua = request.headers.get('user-agent') || '';
    if (SEARCH_CRAWLER_RE.test(ua)) {
        return new NextResponse(
            '<!doctype html><html><head><meta name="robots" content="noindex, follow"><title>Checkout Endpoint</title></head><body></body></html>',
            {
                status: 200,
                headers: {
                    'Content-Type': 'text/html; charset=utf-8',
                    'X-Robots-Tag': 'noindex, follow',
                    'Cache-Control': 'private, no-cache, no-store, max-age=0',
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
                const searchParams = new URL(request.url).searchParams;
                const moduleId = searchParams.get('moduleId');
                const referenceId = moduleId
                    ? `${authResult.userId}::module_${moduleId}`
                    : `${authResult.userId}::${productId}`;
                stripeUrl.searchParams.append('client_reference_id', referenceId);
            }
        } catch {
            // Proceed directly to Stripe guest checkout if Clerk lookup errors
        }
    }

    const redirectRes = NextResponse.redirect(stripeUrl);
    redirectRes.headers.set('X-Robots-Tag', 'noindex, follow');
    return redirectRes;
}
