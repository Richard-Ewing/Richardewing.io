require('dotenv').config({ path: '.env.local' });
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const skills = [
  {
    name: 'Context Rot Prevention',
    description: 'Prevents semantic contamination, recursive patching, retry inflation, and repository drift in long-horizon Claude sessions. Includes governance manifests, rollback systems, runtime middleware, checkpoint architecture, and reset workflows.',
  },
  {
    name: 'Runtime Governance',
    description: 'Enforce execution gating, admissibility pipelines, rollback containment, and runtime interception to stop unsafe agentic actions before they execute.',
  },
  {
    name: 'Hallucination Debt Reduction',
    description: 'Mitigate the verification burden, retry inflation curves, and synthetic QA growth by structurally eliminating probabilistic assumptions in agentic workflows.',
  },
  {
    name: 'AI Engineering Economics',
    description: 'Map and optimize synthetic COGS, orchestration cost curves, and governance drag expansion. Align your agentic strategy with deterministic economic reality.',
  },
  {
    name: 'MCP Governance',
    description: 'Establish enterprise-grade access and runtime limits for Model Context Protocol systems to prevent unconstrained server execution.',
  }
];

async function createPaymentLinks() {
  const results = {};
  
  for (const skill of skills) {
    try {
      console.log(`Creating product: ${skill.name}...`);
      const product = await stripe.products.create({
        name: skill.name,
        description: skill.description,
      });

      const price = await stripe.prices.create({
        product: product.id,
        unit_amount: 9900, // $99.00
        currency: 'usd',
      });

      const paymentLink = await stripe.paymentLinks.create({
        line_items: [{ price: price.id, quantity: 1 }],
        after_completion: { type: 'hosted_confirmation' }
      });
      
      console.log(`✅ Success: ${skill.name} -> ${paymentLink.url}`);
      results[skill.name] = paymentLink.url;
    } catch (error) {
      console.error(`❌ Stripe Error for ${skill.name}:`, error.message);
    }
  }
  
  console.log("\n--- FINAL STRIPE URLS ---\n");
  console.log(JSON.stringify(results, null, 2));
}

createPaymentLinks();
