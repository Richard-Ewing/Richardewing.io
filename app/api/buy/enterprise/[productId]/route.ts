import { NextResponse } from 'next/server';
import { PRODUCTS } from '@/lib/products';
import { auth } from '@clerk/nextjs/server';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ productId: string }> }
) {
    const { productId } = await params;
    
    // Server-side Auth Check
    const { userId, redirectToSignIn } = await auth();

    // Force sign-in loop if anonymous
    if (!userId) {
        return redirectToSignIn({ returnBackUrl: request.url });
    }

    const product = PRODUCTS[productId];

    if (!product || !product.paymentLink) {
        return NextResponse.redirect(new URL('/curriculum/tracks', request.url));
    }

    // Construct precise Stripe Payload with guaranteed Clerk Identity Mapping
    const stripeUrl = new URL(product.paymentLink);
    
    // Tag this strongly as an enterprise B2B transaction
    const referenceId = `${userId}::enterprise_${productId}`;
    stripeUrl.searchParams.append('client_reference_id', referenceId);

    return NextResponse.redirect(stripeUrl);
}
