import fs from 'fs';
import Stripe from 'stripe';

const envFile = fs.readFileSync('.env.production.local', 'utf8');
const match = envFile.match(/STRIPE_SECRET_KEY=([^\r\n]+)/);
if (!match) {
    console.error('No STRIPE_SECRET_KEY found');
    process.exit(1);
}

const key = match[1].trim().replace(/^["']|["']$/g, '');
const stripe = new Stripe(key, { apiVersion: '2024-06-20' });

async function createToolkitProducts() {
    try {
        console.log('Creating Stripe Product 1: Standard Edition ($29)...');
        const prod29 = await stripe.products.create({
            name: 'The Product & AI Economist Operating Kit (Standard Edition)',
            description: 'Instant download of all 5 battle-tested P&L spreadsheets, AI feature pricing stress-testers, Zombie Feature kill-list matrices, 12-slide CFO board decks, and executive career playbooks by Richard Ewing.',
        });

        const price29 = await stripe.prices.create({
            product: prod29.id,
            unit_amount: 2900,
            currency: 'usd',
        });

        const link29 = await stripe.paymentLinks.create({
            line_items: [{ price: price29.id, quantity: 1 }],
            after_completion: {
                type: 'redirect',
                redirect: {
                    url: 'https://www.richardewing.io/toolkit-success?tier=standard',
                },
            },
            allow_promotion_codes: true,
            billing_address_collection: 'auto',
        });

        console.log('Created Standard Edition Link:', link29.url);

        console.log('Creating Stripe Product 2: Complete Executive Bundle ($79)...');
        const prod79 = await stripe.products.create({
            name: 'The Product & AI Economist Operating Kit (Complete Executive Bundle)',
            description: 'Complete Executive Access: All 5 core operating models and playbooks PLUS 13 specialized executive playbooks (PE Due Diligence, Consumption Pricing, FinOps, Agentic AI Economics) by Richard Ewing.',
        });

        const price79 = await stripe.prices.create({
            product: prod79.id,
            unit_amount: 7900,
            currency: 'usd',
        });

        const link79 = await stripe.paymentLinks.create({
            line_items: [{ price: price79.id, quantity: 1 }],
            after_completion: {
                type: 'redirect',
                redirect: {
                    url: 'https://www.richardewing.io/toolkit-success?tier=executive',
                },
            },
            allow_promotion_codes: true,
            billing_address_collection: 'auto',
        });

        console.log('Created Complete Executive Bundle Link:', link79.url);

        const results = {
            standard_29: {
                productId: prod29.id,
                priceId: price29.id,
                url: link29.url,
            },
            executive_79: {
                productId: prod79.id,
                priceId: price79.id,
                url: link79.url,
            }
        };

        fs.writeFileSync('.agents/scripts/new-stripe-links.json', JSON.stringify(results, null, 2));
        console.log('Saved new Stripe links to .agents/scripts/new-stripe-links.json');
    } catch (err) {
        console.error('Error creating Stripe payment links:', err);
        process.exit(1);
    }
}

createToolkitProducts();
