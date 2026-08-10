import { NextResponse } from 'next/server';

/**
 * Legacy checkout route — kept as a redirect to advisory page.
 * All payments now use direct Stripe Payment Links (buy.stripe.com).
 * See app/lib/products.ts for the active payment link configuration.
 */
export async function POST() {
    return NextResponse.json(
        {
            error: 'This checkout endpoint has been deprecated. All payments now use direct Stripe Payment Links.',
            redirect: 'https://www.richardewing.io/services',
        },
        { status: 410 }
    );
}
