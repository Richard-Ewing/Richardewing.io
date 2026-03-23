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

// Product definitions — complete catalog matching all purchasable items on the site
const PRODUCTS: Record<string, {
    name: string;
    description: string;
    price: number;
    mode: 'payment' | 'subscription';
    interval?: 'month' | 'year';
}> = {
    // --- CURRICULUM ---
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

    // --- GUIDES ---
    premium_guide: {
        name: 'Premium Guide Access',
        description: 'Access to one premium guide: AI Economics, PE Due Diligence, SaaS Metrics, VC Assessment, or Cloud FinOps.',
        price: 2900,
        mode: 'payment',
    },
    premium_bundle: {
        name: 'All Premium Guides Bundle',
        description: 'All 5 premium guides plus future premium guides at no extra cost.',
        price: 9900,
        mode: 'payment',
    },

    // --- ADVISORY (CORE TIERS) ---
    gut_check: {
        name: '30-Minute Gut-Check Call',
        description: 'Rapid-fire diagnostic: you describe the situation, I tell you if it\'s on fire. 30-minute call.',
        price: 45000,
        mode: 'payment',
    },
    insolvency_diagnostic: {
        name: 'Insolvency Diagnostic',
        description: '60-minute Capital Exposure Assessment + Written Risk Exposure Report + 15-minute follow-up call.',
        price: 250000,
        mode: 'payment',
    },
    ai_cost_governance: {
        name: 'AI Cost Governance',
        description: 'Dedicated AI economics analysis with unit economics model, collapse point calculation, and margin protection plan.',
        price: 500000,
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
        description: 'Complete 3-week forensic review of R&D capital allocation and AI inference costs. Board-ready deliverable with remediation roadmap.',
        price: 750000,
        mode: 'payment',
    },
    retainer: {
        name: 'Independent Oversight — Monthly',
        description: 'Board-level economic sanity checks: 4 hours/month, quarterly board report, continuous PDI monitoring, async access.',
        price: 500000,
        mode: 'subscription',
        interval: 'month',
    },

    // --- BOARD & FRACTIONAL LEADERSHIP ---
    board_observer: {
        name: 'Board Observer — Monthly',
        description: 'Quarterly board meeting attendance, independent technical oversight, pre-meeting prep, written assessment, async advisory.',
        price: 250000,
        mode: 'subscription',
        interval: 'month',
    },
    due_diligence: {
        name: 'PE/VC Due Diligence Partner',
        description: 'Pre-acquisition technical assessment, hidden liability identification, engineering team evaluation, investment committee deliverable.',
        price: 1500000,
        mode: 'payment',
    },
    fractional_cpo: {
        name: 'Fractional CPO — Monthly',
        description: '2-3 days/week embedded: product strategy, roadmap ownership, engineering economics oversight, board reporting, hiring.',
        price: 1000000,
        mode: 'subscription',
        interval: 'month',
    },

    // --- CERTIFICATION & WORKSHOPS ---
    certification: {
        name: 'Product Economist Certification (CPE)',
        description: 'Professional certification in product economics methodology. Exam + curriculum access + digital certificate.',
        price: 150000,
        mode: 'payment',
    },
    workshop: {
        name: 'Workshop / Speaking Engagement',
        description: 'Half-day or full-day workshop on engineering economics, AI cost governance, or technical debt quantification.',
        price: 500000,
        mode: 'payment',
    },
    white_label: {
        name: 'White-Label Tool Licensing — Monthly',
        description: 'License Richard Ewing diagnostic tools (PDI, AUEB, APER, EV-SE) for your organization under your own brand.',
        price: 150000,
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
