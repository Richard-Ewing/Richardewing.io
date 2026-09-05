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
        return NextResponse.redirect(new URL('/checkout-pending', request.url));
    }

    // Construct precise Stripe Payload with guaranteed Clerk Identity Mapping
    const stripeUrl = new URL(product.paymentLink);
    
    if (userId) {
        const searchParams = new URL(request.url).searchParams;
        const moduleId = searchParams.get('moduleId');
        
        // Support dual-referencing for granular module purchases
        const referenceId = moduleId ? `${userId}::module_${moduleId}` : `${userId}::${productId}`;
        stripeUrl.searchParams.append('client_reference_id', referenceId);
    }

    return NextResponse.redirect(stripeUrl);
}
