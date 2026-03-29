import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2025-02-24.acacia',
});

async function run() {
    try {
        console.log("Generating products...");

        const product1 = await stripe.products.create({
            name: 'All-Access Vault Pass',
            description: 'Instant, lifetime access to all 400 framework modules, 5 strategic enterprise tools, and continuously updating intelligence.',
        });
        const price1 = await stripe.prices.create({
            product: product1.id,
            unit_amount: 99900,
            currency: 'usd',
            recurring: { interval: 'year' },
        });
        const link1 = await stripe.paymentLinks.create({
            line_items: [{ price: price1.id, quantity: 1 }],
        });

        const product2 = await stripe.products.create({
            name: 'Enterprise Team License (10 Seats)',
            description: 'B2B Corporate access. Instantly provision up to 10 seats of the All-Access Vault Pass for your engineering leadership and PM layer.',
        });
        const price2 = await stripe.prices.create({
            product: product2.id,
            unit_amount: 499900,
            currency: 'usd',
            recurring: { interval: 'year' },
        });
        const link2 = await stripe.paymentLinks.create({
            line_items: [{ price: price2.id, quantity: 1 }],
        });

        console.log(`\nALL_ACCESS_LINK=${link1.url}`);
        console.log(`TEAM_LICENSE_LINK=${link2.url}`);
    } catch (e) {
        console.error("Stripe Error:", e.message);
    }
}

run();
