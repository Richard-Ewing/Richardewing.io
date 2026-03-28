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
        return NextResponse.redirect(new URL('/curriculum', request.url));
    }

    // Construct precise Stripe Payload with guaranteed Clerk Identity Identity Mapping
    const stripeUrl = new URL(product.paymentLink);
    const searchParams = new URL(request.url).searchParams;
    const moduleId = searchParams.get('moduleId');
    
    // Support dual-referencing for granular module purchases
    const referenceId = moduleId ? `${userId}::module_${moduleId}` : userId;
    stripeUrl.searchParams.append('client_reference_id', referenceId);

    return NextResponse.redirect(stripeUrl);
}
