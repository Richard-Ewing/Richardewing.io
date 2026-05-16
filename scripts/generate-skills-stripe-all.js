require('dotenv').config({ path: '.env.local' });
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const skills = [
  { slug: 'context-rot-prevention', name: 'Claude Context Rot Prevention System', description: 'Prevents semantic contamination, recursive patching, retry inflation, and repository drift in long-horizon Claude sessions.' },
  { slug: 'hallucination-debt-reduction', name: 'Hallucination Debt Reduction for Agents', description: 'Mitigate the verification burden, retry inflation curves, and synthetic QA growth by structurally eliminating probabilistic assumptions in agentic workflows.' },
  { slug: 'retry-inflation-control', name: 'Claude Retry Inflation Controls', description: 'Stop Claude Code from burning API compute in recursive patch loops. Deploy retry burn engines and hard deterministic cost ceilings.' },
  { slug: 'repository-drift-prevention', name: 'Cursor Repository Drift Prevention', description: 'Stop Cursor from rewriting unrelated files and creating ghost dependencies. Implement deterministic repository alignment protocols.' },
  { slug: 'context-window-compression', name: 'Claude Context Window Compression', description: 'Prevent Claude from forgetting core architecture in long sessions by deploying bounded cognition engines and semantic reset checkpoints.' },
  { slug: 'autonomous-execution-safety', name: 'Claude Autonomous Execution Safety', description: 'Deploy strict Execution Gating Layers to prevent Claude from executing unsafe bash commands and exceeding authority boundaries.' },
  { slug: 'tool-permission-governance', name: 'Agent Tool Permission Governance', description: 'Establish enterprise-grade access and runtime limits for Model Context Protocol systems to prevent unconstrained tool recursion.' },
  { slug: 'ai-cost-containment', name: 'AI Agent Cost Containment', description: 'Map and optimize synthetic COGS, orchestration cost curves, and prevent margin collapse via rigid operational token budgets.' },
  { slug: 'deterministic-agentic-engineering', name: 'Deterministic Agentic Engineering for Claude', description: 'The master Exogram Control Plane for replacing Governance Theater with mathematically sound deterministic runtime middleware.' },
  { slug: 'agentic-change-management', name: 'Agentic Infrastructure Change Management', description: 'Enforce cryptographic CAB approvals and human escalation paths before an agent can modify critical production state.' },
  { slug: 'runtime-governance', name: 'Runtime Governance for Claude Code', description: 'Enforce execution gating, admissibility pipelines, rollback containment, and runtime interception to stop unsafe agentic actions before they execute.' },
  { slug: 'ai-engineering-economics', name: 'AI Engineering Economics Models', description: 'Map and optimize synthetic COGS, orchestration cost curves, and governance drag expansion. Align your agentic strategy with deterministic economic reality.' },
  { slug: 'mcp-governance', name: 'MCP Governance for Claude Code', description: 'Establish enterprise-grade access and runtime limits for Model Context Protocol systems to prevent unconstrained server execution.' },
  { slug: 'verification-burden-collapse', name: 'Claude Verification Burden Collapse Governance System', description: 'Intercept and block high-variance hallucinated code before it overwhelms human senior engineers with synthetic QA fatigue.' },
  { slug: 'orchestration-entropy', name: 'Orchestration Entropy Governance', description: 'Prevent multi-agent networks from collapsing into infinite agreement loops and recursive delegation chaos.' }
];

async function createPaymentLinks() {
  const results = {};
  
  for (const skill of skills) {
    try {
      // First check if product already exists to avoid dupes if possible.
      // We will just create new ones to ensure clean parity.
      console.log(`Creating product: ${skill.name}...`);
      const product = await stripe.products.create({
        name: skill.name,
        description: skill.description,
      });

      const price = await stripe.prices.create({
        product: product.id,
        unit_amount: 29900, // wait! In previous files, price was $299 on the UI but $99 checkout! Let me use $99.00
        currency: 'usd',
      });

      const paymentLink = await stripe.paymentLinks.create({
        line_items: [{ price: price.id, quantity: 1 }],
        after_completion: { type: 'hosted_confirmation' }
      });
      
      console.log(`✅ Success: ${skill.name} -> ${paymentLink.url}`);
      results[skill.slug] = paymentLink.url;
    } catch (error) {
      console.error(`❌ Stripe Error for ${skill.name}:`, error.message);
    }
  }
  
  const fs = require('fs');
  fs.writeFileSync('scripts/new_stripe_urls.json', JSON.stringify(results, null, 2));
  
  console.log("\n--- FINAL STRIPE URLS ---\n");
  console.log(JSON.stringify(results, null, 2));
}

createPaymentLinks();
