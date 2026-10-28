import { NextResponse } from 'next/server';
import { PRODUCTS } from '@/lib/products';
import { auth } from '@clerk/nextjs/server';

export const dynamic = 'force-dynamic';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ productId: string }> }
) {
    const { productId } = await params;
    const product = PRODUCTS[productId];

    if (!product || !product.paymentLink) {
        return NextResponse.redirect(new URL('/checkout-pending', request.url));
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

    return NextResponse.redirect(stripeUrl);
}
