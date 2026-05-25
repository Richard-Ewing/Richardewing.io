require('dotenv').config({ path: '.env.local' });
const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

async function run() {
    const productId = 'prod_UaEElc9FDJ2zrH';

    // 1. Deactivate old $149 price
    const oldPrice = await stripe.prices.update('price_1Tb3mK5swlCTzLiT4XldPWsv', { active: false });
    console.log('Old $149 price deactivated:', oldPrice.id);

    // 2. Create $249/month price
    const monthlyPrice = await stripe.prices.create({
        product: productId,
        unit_amount: 24900,
        currency: 'usd',
        recurring: { interval: 'month' },
        metadata: { product_key: 'ai_advisor_monthly' }
    });
    console.log('Monthly price ($249):', monthlyPrice.id);

    // 3. Create $1,997/year price
    const yearlyPrice = await stripe.prices.create({
        product: productId,
        unit_amount: 199700,
        currency: 'usd',
        recurring: { interval: 'year' },
        metadata: { product_key: 'ai_advisor_yearly' }
    });
    console.log('Yearly price ($1,997):', yearlyPrice.id);

    // 4. Create monthly payment link
    const monthlyLink = await stripe.paymentLinks.create({
        line_items: [{ price: monthlyPrice.id, quantity: 1 }],
        after_completion: {
            type: 'redirect',
            redirect: { url: 'https://www.richardewing.io/ai-integration/advisor?success=true' }
        },
        allow_promotion_codes: true,
        metadata: { product_key: 'ai_advisor_monthly' }
    });
    console.log('Monthly payment link:', monthlyLink.url);

    // 5. Create yearly payment link
    const yearlyLink = await stripe.paymentLinks.create({
        line_items: [{ price: yearlyPrice.id, quantity: 1 }],
        after_completion: {
            type: 'redirect',
            redirect: { url: 'https://www.richardewing.io/ai-integration/advisor?success=true' }
        },
        allow_promotion_codes: true,
        metadata: { product_key: 'ai_advisor_yearly' }
    });
    console.log('Yearly payment link:', yearlyLink.url);

    // 6. Deactivate old payment link
    try {
        // Can't delete payment links, but we'll update our code to use new ones
        console.log('Old payment link (to remove from code): https://buy.stripe.com/7sYfZa3UGbPIaFTb8c2B210');
    } catch (e) {
        console.log('Note:', e.message);
    }
}

run().catch(e => console.error('Error:', e.message));
