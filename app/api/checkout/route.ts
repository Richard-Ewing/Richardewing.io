import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Lazy initialization — only creates Stripe client when the route is called
function getStripe() {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
        throw new Error('STRIPE_SECRET_KEY is not set. Add it to .env.local to enable checkout.');
    }
    return new Stripe(key);
}

// Product definitions
const PRODUCTS: Record<string, {
    name: string;
    description: string;
    price: number;
    mode: 'payment' | 'subscription';
    interval?: 'month' | 'year';
}> = {
    single_module: {
        name: 'Single Curriculum Module',
        description: 'Access to one complete curriculum module with all lessons, exercises, and assessments.',
        price: 4900,
        mode: 'payment',
    },
    full_curriculum: {
        name: 'Full Curriculum Access — All 24 Modules',
        description: '24 modules, 80+ lessons, 5 tools, certificate of completion.',
        price: 19900,
        mode: 'subscription',
        interval: 'year',
    },
    premium_guide: {
        name: 'Premium Guide Access',
        description: 'Access to premium guides: PE Due Diligence, SaaS Metrics, AI Economics Deep Dive, VC Assessment, Cloud FinOps.',
        price: 2900,
        mode: 'payment',
    },
    premium_bundle: {
        name: 'All Premium Guides Bundle',
        description: 'All 5 premium guides plus future premium guides at no extra cost.',
        price: 9900,
        mode: 'payment',
    },
    strategy_session: {
        name: '1-on-1 Strategy Session',
        description: '60-minute live strategy session with Richard Ewing, Product Economist.',
        price: 50000,
        mode: 'payment',
    },
    full_audit: {
        name: 'Full R&D Capital Audit',
        description: 'Complete R&D technology audit with written executive report, benchmarks, and remediation roadmap.',
        price: 750000,
        mode: 'payment',
    },
    retainer: {
        name: 'Advisory Retainer — Monthly',
        description: 'Ongoing advisory engagement: 4 hours/month, quarterly board report, continuous PDI monitoring.',
        price: 500000,
        mode: 'subscription',
        interval: 'month',
    },
};

export async function POST(request: Request) {
    try {
        const stripe = getStripe();
        const { productId, moduleId, returnUrl } = await request.json();

        const product = PRODUCTS[productId];
        if (!product) {
            return NextResponse.json({ error: 'Invalid product ID' }, { status: 400 });
        }

        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.richardewing.io';
        const successUrl = returnUrl ? `${baseUrl}${returnUrl}?success=true` : `${baseUrl}/curriculum/tracks?success=true`;
        const cancelUrl = returnUrl ? `${baseUrl}${returnUrl}` : `${baseUrl}/curriculum/tracks`;

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

        // Add recurring for subscriptions
        if (product.mode === 'subscription' && product.interval) {
            lineItem.price_data!.recurring = { interval: product.interval };
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [lineItem],
            mode: product.mode,
            success_url: successUrl,
            cancel_url: cancelUrl,
            metadata: {
                productId,
                ...(moduleId && { moduleId }),
            },
            allow_promotion_codes: true,
        });

        return NextResponse.json({ url: session.url });
    } catch (error: unknown) {
        console.error('Stripe checkout error:', error);
        const message = error instanceof Error ? error.message : 'Failed to create checkout session';
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
