require('dotenv').config({ path: '.env.local' });
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function createPaymentLink() {
  try {
    console.log("1. Creating product...");
    const product = await stripe.products.create({
      name: 'Diagnostic Tools Library Unlock',
      description: 'Unlimited access to all diagnostic tools (PDI, AUEB, APER, EV-SE). Generate unlimited board-ready reports.',
    });
    console.log("Product ID:", product.id);

    console.log("2. Creating price...");
    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: 19900,
      currency: 'usd',
    });
    console.log("Price ID:", price.id);

    console.log("3. Creating payment link...");
    const paymentLink = await stripe.paymentLinks.create({
      line_items: [{ price: price.id, quantity: 1 }],
      after_completion: { type: 'hosted_confirmation' }
    });
    console.log("PAYMENT_LINK_URL=" + paymentLink.url);
  } catch (error) {
    console.error("Stripe Error:", error.message);
  }
}

createPaymentLink();
