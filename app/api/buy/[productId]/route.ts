import { NextResponse } from 'next/server';
import { PRODUCTS } from '@/lib/products';

// Simple redirect to Stripe Payment Link — no API key needed
export async function GET(
    request: Request,
    { params }: { params: Promise<{ productId: string }> }
) {
    const { productId } = await params;
    const product = PRODUCTS[productId];

    if (!product || !product.paymentLink) {
        return NextResponse.redirect(new URL('/advisory', request.url));
    }

    return NextResponse.redirect(product.paymentLink);
}
