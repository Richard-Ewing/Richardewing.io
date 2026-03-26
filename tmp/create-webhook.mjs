import Stripe from "stripe";
import fs from "fs";

const envStr = fs.readFileSync(".env.local", "utf-16le");
const match = envStr.match(/STRIPE_SECRET_KEY=(.+)/);
if (!match) throw new Error("No KEY found");
const stripe = new Stripe(match[1].trim());

const url = "https://richardewing.io/api/webhooks/stripe";

async function run() {
    const existing = await stripe.webhookEndpoints.list({ limit: 100 });
    const matchEp = existing.data.find(w => w.url === url);
    if (matchEp) {
        console.log(`Deleting existing webhook ${matchEp.id}...`);
        await stripe.webhookEndpoints.del(matchEp.id);
    }
    
    console.log(`Creating new webhook for ${url}...`);
    const endpoint = await stripe.webhookEndpoints.create({
        url,
        enabled_events: [
            "checkout.session.completed",
            "customer.subscription.deleted"
        ],
    });
    
    console.log("WEBHOOK_SECRET_IS=" + endpoint.secret);
}
run().catch(console.error);
