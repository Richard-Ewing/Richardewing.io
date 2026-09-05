import { NextResponse } from 'next/server';
import { PRODUCTS } from '@/lib/products';
import { auth } from '@clerk/nextjs/server';

export const dynamic = 'force-dynamic';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ productId: string }> }
) {
    const { productId } = await params;
    
    // Server-side Auth Check
    const { userId } = await auth();

    const product = PRODUCTS[productId];

    if (!product || !product.paymentLink) {
        return NextResponse.redirect(new URL('/vault/curriculum/tracks', request.url));
    }

    // Construct precise Stripe Payload with guaranteed Clerk Identity Mapping
    const stripeUrl = new URL(product.paymentLink);
    
    if (userId) {
        // Tag this strongly as an enterprise B2B transaction
        const referenceId = `${userId}::enterprise_${productId}`;
        stripeUrl.searchParams.append('client_reference_id', referenceId);
    }

    return NextResponse.redirect(stripeUrl);
}
