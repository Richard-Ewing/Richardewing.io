import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { PRODUCTS } from '@/lib/products';

function getStripe() {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
        throw new Error('STRIPE_SECRET_KEY is not set.');
    }
    return new Stripe(key);
}

export async function GET(
    request: Request,
    { params }: { params: Promise<{ productId: string }> }
) {
    try {
        const { productId } = await params;
        const product = PRODUCTS[productId];

        if (!product) {
            return NextResponse.redirect(new URL('/advisory', request.url));
        }

        const stripe = getStripe();
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.richardewing.io';

        const lineItem: Stripe.Checkout.SessionCreateParams.LineItem = {
            price_data: {
                currency: 'usd',
                product_data: {
                    name: product.name,
                    description: product.description,
                },
                unit_amount: product.price,
            },
            quantity: 1,
        };

        if (product.mode === 'subscription' && product.interval) {
            lineItem.price_data!.recurring = { interval: product.interval };
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [lineItem],
            mode: product.mode,
            success_url: `${baseUrl}/?checkout=success&product=${productId}`,
            cancel_url: `${baseUrl}/?checkout=cancelled`,
            metadata: { productId },
            allow_promotion_codes: true,
        });

        if (!session.url) {
            return NextResponse.redirect(new URL('/advisory', request.url));
        }

        return NextResponse.redirect(session.url);
    } catch (error) {
        console.error('Buy route error:', error);
        return NextResponse.redirect(new URL('/advisory', request.url));
    }
}
