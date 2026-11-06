import fs from 'fs';
import path from 'path';
import { glossaryTerms } from '../app/glossary/terms';
import { KEEP_TERMS, CATEGORY_MAP, PILLARS } from '../app/glossary/pillarsMapping';
import { frameworks, articles } from '../app/lib/data';
import { subFrameworks } from '../app/lib/framework-data';
import { CANONICAL_CONCEPTS } from '../app/lib/concept-corpus';
import { allArticles } from '../app/lib/blog-data';
import { ARTICLE_SLUG_REDIRECTS, BLOG_SLUG_REDIRECTS } from '../app/lib/article-redirects';
import { getAllModuleSlugs } from '../app/lib/curriculum-data';
import { FAILURES, SKILLS } from '../lib/content/skills';
import { exogramDocs } from '../app/lib/exogram-docs';

const rootDir = path.resolve(__dirname, '..');

// 1. Collect all valid static route paths in app/ (excluding dynamic segments)
function collectStaticAppRoutes(dir: string, prefix = ''): Set<string> {
  const routes = new Set<string>();
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (entry.name.startsWith('(') && entry.name.endsWith(')')) {
        for (const r of collectStaticAppRoutes(path.join(dir, entry.name), prefix)) routes.add(r);
      } else if (!entry.name.startsWith('[') && !entry.name.startsWith('_') && entry.name !== 'api') {
        for (const r of collectStaticAppRoutes(path.join(dir, entry.name), `${prefix}/${entry.name}`)) routes.add(r);
      }
    } else if (entry.isFile() && (entry.name === 'page.tsx' || entry.name === 'route.ts')) {
      routes.add(prefix || '/');
    }
  }
  return routes;
}

const staticAppRoutes = collectStaticAppRoutes(path.join(rootDir, 'app'));
staticAppRoutes.add('/robots.txt');
staticAppRoutes.add('/sitemap.xml');
staticAppRoutes.add('/llms.txt');
staticAppRoutes.add('/llms-full.txt');
staticAppRoutes.add('/feed.xml');

const keepGlossarySet = new Set(KEEP_TERMS);
const pillarSlugsSet = new Set(PILLARS.map((p) => p.slug));
const articleFwSlugsSet = new Set(frameworks.map((f) => f.slug));
const subFwSlugsSet = new Set(Object.keys(subFrameworks));
const conceptSlugsSet = new Set(CANONICAL_CONCEPTS.map((c) => c.slug));
const blogSlugsSet = new Set(Object.keys(allArticles).filter((s) => !BLOG_SLUG_REDIRECTS[s]));
const articleSlugsSet = new Set(articles.map((a) => a.slug).filter((s) => !ARTICLE_SLUG_REDIRECTS[s]));
const failureSlugsSet = new Set(FAILURES.map((f) => f.slug));
const skillSlugsSet = new Set(SKILLS.map((s) => s.slug));
const exogramDocSlugsSet = new Set(exogramDocs.map((d) => d.slug));
const curriculumModuleSlugsSet = new Set(getAllModuleSlugs());

const TIER_A_COMPARE_SLUGS = new Set([
  'claude-code-vs-cursor-governance', 'claude-code-retry-loop-prevention',
  'claude-context-rot-mitigation', 'cursor-repository-drift-prevention',
  'ai-coding-agents', 'ai-guardrails-platforms', 'github-copilot-problems',
  'cursor-problems', 'windsurf-problems', 'why-claude-loses-context',
  'why-retry-loops-happen', 'why-cursor-rewrites-files', 'why-ai-coding-burns-money',
  'why-mcp-is-dangerous', 'claude-md-is-not-governance', 'pdi-vs-sonarqube',
  'pdi-vs-codeclimate', 'pdi-vs-waydev', 'audit-interview-vs-leetcode',
  'audit-interview-vs-hackerrank', 'audit-interview-vs-traditional',
  'aueb-vs-aws-cost-explorer', 'ev-se-vs-jellyfish', 'aper-vs-jellyfish',
  'aper-vs-linearb', 'copilot-roi-vs-gitclear', 'dora-metrics-vs-aper',
  'shadow-ai-vs-shadow-it', 'technical-debt-vs-technical-insolvency',
  'vibe-coding-vs-agile',
  'why-anthropic-bills-spike-with-tool-use',
  'why-local-llms-are-more-expensive-than-apis',
  'why-ai-pr-review-time-is-exploding',
  'why-cfos-are-shutting-down-ai-pilots',
  'why-rag-returns-stale-data-after-updates',
  'why-copilot-didnt-reduce-engineering-headcount',
  'why-ai-feature-margins-turn-negative',
  'why-ai-costs-spiral-from-silent-retries',
  'why-ai-prompts-break-after-model-updates',
  'why-ai-prds-and-specs-create-waste',
  'why-ai-teams-become-api-janitors',
  'why-unused-ai-features-drain-cloud-budgets',
  'why-companies-pay-shadow-ai-vendor-tax',
  'why-board-ai-metrics-sound-impressive-but-mean-nothing',
  'why-ai-code-creates-more-bugs-than-it-fixes',
  'exogram-vs-lakera',
  'exogram-vs-langchain',
  'advisory-vs-mckinsey',
  'advisory-vs-bain',
  'advisory-vs-big4',
  'advisory-vs-gartner',
  'advisory-vs-traditional-fractional-cto',
]);

function isValid200Route(routeWithOptionalHash: string): boolean {
  const clean = routeWithOptionalHash.split('#')[0];
  if (staticAppRoutes.has(clean)) return true;
  if (clean.startsWith('/glossary/pillars/')) return pillarSlugsSet.has(clean.replace('/glossary/pillars/', ''));
  if (clean.startsWith('/glossary/')) return keepGlossarySet.has(clean.replace('/glossary/', ''));
  if (clean.startsWith('/articles/frameworks/')) return articleFwSlugsSet.has(clean.replace('/articles/frameworks/', ''));
  if (clean.startsWith('/articles/')) return articleSlugsSet.has(clean.replace('/articles/', ''));
  if (clean.startsWith('/framework/')) return subFwSlugsSet.has(clean.replace('/framework/', ''));
  if (clean.startsWith('/concepts/')) return conceptSlugsSet.has(clean.replace('/concepts/', ''));
  if (clean.startsWith('/blog/')) return blogSlugsSet.has(clean.replace('/blog/', ''));
  if (clean.startsWith('/failures/')) return failureSlugsSet.has(clean.replace('/failures/', ''));
  if (clean.startsWith('/skills/')) return skillSlugsSet.has(clean.replace('/skills/', ''));
  if (clean.startsWith('/exogram/docs/')) return exogramDocSlugsSet.has(clean.replace('/exogram/docs/', ''));
  if (clean.startsWith('/compare/')) return TIER_A_COMPARE_SLUGS.has(clean.replace('/compare/', ''));
  if (clean.startsWith('/vault/curriculum/tracks/')) {
    return curriculumModuleSlugsSet.has(clean.replace('/vault/curriculum/tracks/', ''));
  }
  return false;
}

// 2. Build Exact Redirect Map
const exactRedirects: Record<string, string> = {
  // Root & Legacy HTML Aliases
  '/$': '/',
  '/&': '/',
  '/10': '/',
  '/index.html': '/',
  '/advisory.html': '/advisory',
  '/principal': '/about',
  '/the-operator.html': '/about',
  '/trust': '/security',
  '/security-trust': '/security',
  '/studio.html': '/services',
  '/manifesto.html': '/manifesto',
  '/system.html': '/system',
  '/methodology.html': '/system',
  '/q-pep-product-economics-protocol': '/system',
  '/briefings.html': '/briefings',
  '/working-papers.html': '/doctrine',
  '/architecture': '/runtime-architecture',
  '/architectural-doctrine': '/exogram/architecture',

  // Legal & Directive Aliases
  '/terms': '/legal#terms',
  '/terms-of-service': '/legal#terms',
  '/terms-and-conditions': '/legal#terms',
  '/toc': '/legal#terms',
  '/tos': '/legal#terms',
  '/tac': '/legal#terms',
  '/privacy': '/legal#privacy',
  '/privacy-policy': '/legal#privacy',
  '/disclaimer': '/legal#disclaimers',
  '/disclaimers': '/legal#disclaimers',
  '/refunds': '/legal#refunds',
  '/refund-policy': '/legal#refunds',
  '/legal-hub': '/legal',
  '/robots': '/robots.txt',

  // Exogram, Partnerships, Brand, & Commercial Aliases
  '/exogram/proving-ground': '/exogram/demo',
  '/exogram/analyze': '/exogram/architecture',
  '/exogram/security': '/security',
  '/exogram/pricing': '/schedule',
  '/exogram/blueprint': '/exogram',
  '/exogram/docs/architecture-overview': '/exogram/architecture',
  '/exogram/docs/architecture': '/exogram/architecture',
  '/partnerships/integrations': '/partnerships/integration-docs',
  '/partnerships/supabase': '/integrations/supabase',
  '/docs/integrations/supabase': '/integrations/supabase',
  '/docs/integrations': '/partnerships/integration-docs',
  '/integrations': '/partnerships/integration-docs',
  '/media-kit': '/brand',
  '/press': '/brand',
  '/ai-cost-audit': '/services/ai-cost-audit',
  '/rd-capital-audit': '/services/ai-cost-audit',
  '/ai-spend-calculator': '/roi-calculator',
  '/roai-framework': '/articles/frameworks/return-on-ai-investment',
  '/technical-insolvency-date': '/articles/frameworks/technical-insolvency-date',
  '/product-debt-index': '/tools/pdi',
  '/career-pathfinder': '/tools/career-pathing',
  '/vibe-coding-security-scanner': '/tools/vibe-security-scanner',
  '/supabase-rls-checker': '/tools/supabase-rls-checker',
  '/ai-sop-generator': '/tools/department-ai-playbook',

  // Tool Aliases
  '/tools/section-174': '/tools/section-174-calculator',
  '/tools/ai-sop-generator': '/tools/department-ai-playbook',
  '/tools/cloud-finops-calculator': '/tools',
  '/tools/copilot-roi-calculator': '/tools/copilot-roi',
  '/tools/technical-debt-calculator': '/tools/pdi',
  '/tools/code-quality-calculator': '/tools/pdi',
  '/tools/vibe-coding-debt-calculator': '/tools/pdi',
  '/tools/synthetic-debt-calculator': '/tools/pdi',
  '/tools/ai-cost-calculator': '/tools/aueb',
  '/tools/llm-cost-calculator': '/tools/aueb',
  '/tools/ai-unit-economics-calculator': '/tools/aueb',
  '/tools/ai-cogs-calculator': '/tools/aueb',
  '/tools/token-cost-calculator': '/tools/aueb',
  '/tools/ai-credit-pricing-calculator': '/tools/aueb',
  '/tools/unit-economics': '/tools/aueb',
  '/tools/claude-api-cost-calculator': '/tools/ai-feature-margin',
  '/tools/agents-md-validator': '/tools/spec-quality-scorecard',
  '/tools/n8n-vs-zapier-calculator': '/tools/automation-cost-calculator',
  '/tools/revenue-per-engineer': '/tools/aper',
  '/tools/engineering-efficiency-calculator': '/tools/aper',
  '/tools/saas-valuation-calculator': '/tools/ev-se',
  '/tools/enterprise-value-calculator': '/tools/ev-se',
  '/tools/subprime-code-auditor': '/tools/negative-carry-code-auditor',
  '/tools/ai-hallucination-cost': '/tools/hallucination-tax',
  '/tools/ai-job-displacement-calculator': '/tools/fte-displacement',
  '/tools/ai-workforce-impact': '/tools/fte-displacement',
  '/tools/self-host-vs-api': '/tools/slm-vs-api',
  '/tools/shadow-ai-risk-calculator': '/tools/shadow-ai',
  '/tools/mcp-security-scanner': '/tools/mcp-security-auditor',
  '/tools/ai-pilot-roi-calculator': '/tools/ai-roi-timeline',
  '/tools/roai-calculator': '/tools/ai-roi-timeline',
  '/tools/cloud-repatriation-calculator': '/tools/cloud-repatriation',
  '/tools/CloudRepatriationCalculator': '/tools/cloud-repatriation',
  '/tools/PromptInjectionSandbox': '/tools/prompt-injection-sandbox',
  '/tools/RagChunkingVisualizer': '/tools/rag-chunking-visualizer',

  // Concept Aliases
  '/research/concepts': '/concepts',
  '/concepts/rented-intelligence-vs-owned-capital': '/glossary/ai-capital-allocation-ratio',
  '/concepts/engineering-bottleneck-illusion': '/glossary/engineering-bottleneck-illusion',
  '/concepts/ai-cogs': '/glossary/ai-cogs',
  '/concepts/variable-cost-of-intelligence': '/glossary/variable-cost-of-intelligence',
  '/concepts/vibe-coding-debt': '/articles/frameworks/vibe-coding-debt',
  '/concepts/explainability-vs-recoverability': '/glossary/explainability-vs-recoverability',
  '/concepts/zero-trust-type-verification': '/glossary/zero-trust-type-gate',
  '/concepts/probabilistic-product-management': '/glossary/pillars/probabilistic-product-management',
  '/concepts/slm-vs-api-arbitrage': '/concepts/slm-repatriation',
  '/concepts/model-right-sizing': '/glossary/model-right-sizing',
  '/concepts/macro-regression-loops': '/concepts/context-rot',
  '/concepts/subprime-code-crisis': '/concepts/negative-carry-code-crisis',
  '/concepts/adlc': '/concepts/spec-driven-development',
  '/concepts/seat-based-pricing-compression': '/concepts/ai-margin-squeeze',
  '/concepts/operational-drift': '/concepts/agentic-fleet-drift',
  '/concepts/governed-execution': '/concepts/deterministic-execution-control',
  '/concepts/synthetic-cogs': '/concepts/ai-tokenomics-cogs',
  '/concepts/ai-tokenomics': '/concepts/ai-tokenomics-cogs',
  '/concepts/math-of-ruin': '/concepts/ai-margin-squeeze',

  // Hub & Curriculum Root Aliases
  '/frameworks': '/framework',
  '/articles/frameworks': '/framework',
  '/vault/curriculum': '/vault/curriculum/tracks',
  '/curriculum': '/vault/curriculum/tracks',
  '/curriculum/tracks': '/vault/curriculum/tracks',
  '/guides': '/vault/curriculum/tracks',

  // Framework & Legacy Frameworks Slugs
  '/framework/deterministic-control-plane': '/framework/agentic-control-plane',
  '/frameworks/deterministic-control-plane': '/framework/agentic-control-plane',
  '/framework/technical-insolvency': '/articles/frameworks/technical-insolvency-date',
  '/frameworks/technical-insolvency': '/articles/frameworks/technical-insolvency-date',
  '/framework/technical-insolvency-date': '/articles/frameworks/technical-insolvency-date',
  '/frameworks/technical-insolvency-date': '/articles/frameworks/technical-insolvency-date',
  '/framework/kill-switch-protocol': '/articles/frameworks/kill-switch-protocol',
  '/frameworks/kill-switch-protocol': '/articles/frameworks/kill-switch-protocol',
  '/framework/governance': '/framework/runtime-governance',
  '/frameworks/governance': '/framework/runtime-governance',
  '/framework/automated-delegation-boundary': '/framework/agentic-control-plane',
  '/frameworks/automated-delegation-boundary': '/framework/agentic-control-plane',
  '/framework/subprime-code-governance': '/framework/negative-carry-code-governance',
  '/frameworks/subprime-code-governance': '/framework/negative-carry-code-governance',
  '/framework/innovation-tax': '/articles/frameworks/innovation-tax',
  '/frameworks/innovation-tax': '/articles/frameworks/innovation-tax',
  '/framework/product-debt-index': '/glossary/product-debt-index',
  '/frameworks/product-debt-index': '/glossary/product-debt-index',
  '/framework/synthetic-cogs': '/articles/frameworks/synthetic-cogs',
  '/frameworks/synthetic-cogs': '/articles/frameworks/synthetic-cogs',

  // Failures Aliases
  '/failures/orchestration-debt': '/glossary/orchestration-debt',

  // Compare Pain-Forward Aliases
  '/compare/technical-debt-calculator-vs-sonarqube': '/compare/pdi-vs-sonarqube',
  '/compare/revenue-per-engineer-vs-jellyfish': '/compare/aper-vs-jellyfish',
  '/compare/ai-cost-calculator-vs-aws': '/compare/aueb-vs-aws-cost-explorer',
  '/compare/engineering-efficiency-vs-jellyfish': '/compare/ev-se-vs-jellyfish',
  '/compare/engineering-metrics-vs-dora': '/compare/dora-metrics-vs-aper',
};

// AI Security compare slugs -> /compare
for (const slug of [
  'hiddenlayer-vs-robust-intelligence',
  'crewai-vs-tabnine',
  'weaviate-vs-milvus',
  'robust-intelligence-vs-claude-desktop',
  'aws-bedrock-agents-vs-humanloop',
  'crewai-vs-nemo-guardrails',
  'llama-vs-ping-identity',
  'mem0-vs-huggingface-hub',
  'mulesoft-vs-amazon-q',
  'patronus-ai-vs-chatdev',
  'langchain-vs-scale-ai',
  'mem0-vs-humanloop',
  'exogram-vs-cloudflare-ai-gateway',
  'openai-vs-tailwindcss',
  'dora-vs-space',
  'openai-vs-anthropic',
]) {
  exactRedirects[`/compare/${slug}`] = '/compare';
  exactRedirects[`/comparisons/${slug}`] = '/compare';
}

// Blog redirects
const blogAliasCandidates: Record<string, string> = {
  ...Object.fromEntries(Object.entries(BLOG_SLUG_REDIRECTS).map(([s, t]) => [`/blog/${s}`, t])),
  '/blog/hiring-engineers-gross-margin': '/blog/b2b-saas-coordination-tax-saas-engineering-margins',
  '/blog/ai-product-management-guide': '/vault/curriculum/tracks/ai-product-economics/2-1',
  '/blog/the-subprime-code-crisis': blogSlugsSet.has('the-negative-carry-code-crisis')
    ? '/blog/the-negative-carry-code-crisis'
    : '/concepts/negative-carry-code-crisis',
  '/blog/subprime-code-crisis': blogSlugsSet.has('negative-carry-code-crisis')
    ? '/blog/negative-carry-code-crisis'
    : blogSlugsSet.has('the-negative-carry-code-crisis')
      ? '/blog/the-negative-carry-code-crisis'
      : '/concepts/negative-carry-code-crisis',
};
Object.assign(exactRedirects, blogAliasCandidates);

// Article redirects: ARTICLE_SLUG_REDIRECTS + all 29 framework slugs + retired programmatic SEO slugs
for (const [slug, target] of Object.entries(ARTICLE_SLUG_REDIRECTS)) {
  if (!articleSlugsSet.has(slug)) {
    exactRedirects[`/articles/${slug}`] = target;
  }
}
for (const fw of frameworks) {
  if (!articleSlugsSet.has(fw.slug)) {
    exactRedirects[`/articles/${fw.slug}`] = `/articles/frameworks/${fw.slug}`;
  }
}
const retiredProgrammaticArticles: Record<string, string> = {
  '/articles/shadow-agents-roi-models-cfo': '/articles/frameworks/shadow-agents',
  '/articles/enterprise-governance-vacuum-roi-models-cfo': '/glossary/enterprise-governance-vacuum',
  '/articles/enterprise-guide-scaling-cloud-repatriation': '/tools/cloud-repatriation',
  '/articles/cloud-repatriation-roi-models-cfo': '/tools/cloud-repatriation',
  '/articles/overcoming-implementation-friction-cloud-repatriation': '/tools/cloud-repatriation',
  '/articles/burn-multiple-benchmarks-series-b-beyond': '/glossary/pillars/saas-metrics-due-diligence#burn-multiple',
  '/articles/leveraging-burn-multiple-rule-of-40': '/glossary/pillars/saas-metrics-due-diligence#burn-multiple',
  '/articles/boards-guide-interpreting-burn-multiple': '/glossary/pillars/saas-metrics-due-diligence#burn-multiple',
  '/articles/overcoming-implementation-friction-prompt-injection': '/glossary/prompt-injection',
  '/articles/prompt-injection-roi-models-cfo': '/glossary/prompt-injection',
  '/articles/dspm-roi-models-cfo': '/articles/frameworks/dspm',
  '/articles/overcoming-implementation-friction-dspm': '/articles/frameworks/dspm',
  '/articles/enterprise-guide-scaling-dspm': '/articles/frameworks/dspm',
  '/articles/graph-rag-roi-models-cfo': '/articles/frameworks/graph-rag',
  '/articles/overcoming-implementation-friction-graph-rag': '/articles/frameworks/graph-rag',
  '/articles/enterprise-guide-scaling-graph-rag': '/articles/frameworks/graph-rag',
  '/articles/serverless-gpus-roi-models-cfo': '/blog/serverless-vs-containers-cost',
  '/articles/enterprise-guide-scaling-serverless-gpus': '/blog/serverless-vs-containers-cost',
  '/articles/overcoming-implementation-friction-serverless-gpus': '/blog/serverless-vs-containers-cost',
  '/articles/ai-explainability-mandate-roi-models-cfo': '/glossary/explainability-vs-recoverability',
  '/articles/overcoming-implementation-friction-intelligence-problem-solving-continuum': '/vault/curriculum/tracks/leadership-problem-continuum',
  '/articles/cost-of-predictivity-defies-ai-unit-economics': '/articles/frameworks/cost-of-predictivity',
  '/articles/mitigating-ai-unit-economics-risk-enterprise': '/ai-unit-economics',
  '/articles/ai-unit-economics-unit-economics-cto-guide': '/ai-unit-economics',
  '/articles/linkedin-ai-taking-actions': '/articles/frameworks/the-transaction-that-succeeds',
  '/articles/enterprise-guide-scaling-continuous-discovery': '/concepts/product-discovery',
  '/articles/continuous-discovery-roi-models-cfo': '/concepts/product-discovery',
  '/articles/overcoming-implementation-friction-continuous-discovery': '/concepts/product-discovery',
};
Object.assign(exactRedirects, retiredProgrammaticArticles);

// Glossary consolidated terms (443 terms in glossaryTerms not in KEEP_TERMS) -> /glossary/pillars/<pillar>#<slug>
for (const term of glossaryTerms) {
  if (!keepGlossarySet.has(term.slug)) {
    const pillar = CATEGORY_MAP[term.category] || 'ai-unit-economics';
    const dest = `/glossary/pillars/${pillar}#${term.slug}`;
    exactRedirects[`/glossary/${term.slug}`] = dest;
    exactRedirects[`/glossary/terms/${term.slug}`] = dest;
  } else {
    exactRedirects[`/glossary/terms/${term.slug}`] = `/glossary/${term.slug}`;
  }
}

// Retired historical glossary slugs (not in glossaryTerms)
const retiredGlossarySlugs: Record<string, string> = {
  'subprime-code': '/glossary/negative-carry-code',
  'subprime-code-crisis': '/glossary/negative-carry-code-crisis',
  'vibe-coding-debt': '/articles/frameworks/vibe-coding-debt',
  'token-cogs': '/glossary/ai-cogs',
  'technical-insolvency': '/glossary/technical-insolvency-date',
  'operating-leverage': '/glossary/pillars/saas-metrics-due-diligence',
  'email-marketing-automation': '/glossary/pillars/product-economics',
  'maintenance-load': '/glossary/pillars/technical-debt-platform-engineering',
  'mcp-protocol': '/glossary/pillars/mcp-security-zero-trust',
  'saas-cogs': '/glossary/synthetic-cogs',
  'deterministic-control-layer': '/glossary/deterministic-execution-control',
  'span-of-control': '/glossary/pillars/engineering-leadership',
  'guardrails': '/glossary/pillars/agentic-governance-engineering',
  'attrition-rate': '/glossary/pillars/engineering-leadership',
  'capex-vs-opex': '/glossary/pillars/cfo-finance-capital-allocation',
  'compute-reseller-trap': '/articles/frameworks/compute-reseller-trap',
  'cost-of-delay': '/glossary/pillars/product-economics',
  'total-cost-of-ownership': '/glossary/pillars/cloud-infrastructure-finops',
  'ev-se': '/tools/ev-se',
  'aper': '/glossary/aper-metric',
  'cac': '/glossary/pillars/saas-metrics-due-diligence',
  'conways-law': '/glossary/pillars/engineering-leadership',
  'power-user-liability': '/articles/frameworks/power-user-liability',
  'the-turing-tax': '/articles/frameworks/the-turing-tax',
  'probabilistic-tech-debt': '/glossary/ai-technical-debt',
  'monolith-to-microservices': '/glossary/pillars/governance-architecture',
  'north-star-metric': '/glossary/pillars/product-economics',
  'ai-dspm': '/articles/frameworks/dspm',
  'ai-response-drift': '/glossary/agentic-drift-constant',
  'system-2-reasoning-tokens': '/glossary/inference-economics',
  'thermodynamic-compute-cost': '/glossary/variable-compute-cost',
  'execution-layer': '/glossary/deterministic-execution-control',
  'fte-displacement': '/tools/fte-displacement',
};
for (const [slug, dest] of Object.entries(retiredGlossarySlugs)) {
  if (!keepGlossarySet.has(slug) && !exactRedirects[`/glossary/${slug}`]) {
    exactRedirects[`/glossary/${slug}`] = dest;
    exactRedirects[`/glossary/terms/${slug}`] = dest;
  }
}

// /frameworks/<validSubFramework> -> /framework/<validSubFramework>
for (const sf of subFwSlugsSet) {
  if (!exactRedirects[`/frameworks/${sf}`]) {
    exactRedirects[`/frameworks/${sf}`] = `/framework/${sf}`;
  }
}

// Verify 100% of exactRedirects destinations are valid 200 OK routes and never self-redirect or chain!
let errors = 0;
for (const [src, dest] of Object.entries(exactRedirects)) {
  const destClean = dest.split('#')[0];
  if (src === destClean && !dest.includes('#')) {
    console.error(`[MANIFEST ERROR] Self-redirect: ${src} -> ${dest}`);
    errors++;
  }
  if (exactRedirects[destClean]) {
    console.error(`[MANIFEST ERROR] Multi-hop chain: ${src} -> ${dest} -> ${exactRedirects[destClean]}`);
    errors++;
  }
  if (!isValid200Route(dest)) {
    console.error(`[MANIFEST ERROR] Destination does not resolve to 200 OK route: ${src} -> ${dest}`);
    errors++;
  }
}
if (errors > 0) {
  console.error(`Failed with ${errors} manifest validation errors.`);
  process.exit(1);
}

// Emit app/lib/edge-redirects-manifest.ts
const outPath = path.join(rootDir, 'app/lib/edge-redirects-manifest.ts');
const fileContent = `/**
 * AUTO-GENERATED BY scripts/generate-edge-redirects.ts (ADR-0022)
 * DO NOT EDIT MANUALLY. Run \`npx tsx scripts/generate-edge-redirects.ts\` after updating corpora.
 *
 * Guarantees O(1) single-hop HTTP 301 resolution at the Cloudflare Worker edge (0.01ms CPU)
 * without booting OpenNext handler.mjs while keeping dynamicParams = false intact.
 */

export const VALID_KEEP_GLOSSARY_SLUGS = new Set<string>(${JSON.stringify([...keepGlossarySet].sort())});
export const VALID_GLOSSARY_PILLAR_SLUGS = new Set<string>(${JSON.stringify([...pillarSlugsSet].sort())});
export const VALID_ARTICLE_SLUGS = new Set<string>(${JSON.stringify([...articleSlugsSet].sort())});
export const VALID_ARTICLE_FRAMEWORK_SLUGS = new Set<string>(${JSON.stringify([...articleFwSlugsSet].sort())});
export const VALID_SUBFRAMEWORK_SLUGS = new Set<string>(${JSON.stringify([...subFwSlugsSet].sort())});
export const VALID_CONCEPT_SLUGS = new Set<string>(${JSON.stringify([...conceptSlugsSet].sort())});
export const VALID_FAILURE_SLUGS = new Set<string>(${JSON.stringify([...failureSlugsSet].sort())});
export const VALID_CURRICULUM_MODULE_SLUGS = new Set<string>(${JSON.stringify([...curriculumModuleSlugsSet].sort())});
export const VALID_COMPARE_TIER_A_SLUGS = new Set<string>(${JSON.stringify([...TIER_A_COMPARE_SLUGS].sort())});

export const EXACT_EDGE_REDIRECTS: Record<string, string> = ${JSON.stringify(
  Object.fromEntries(Object.entries(exactRedirects).sort(([a], [b]) => a.localeCompare(b))),
  null,
  2
)};

/**
 * Resolves any legacy, consolidated, trailing-slash, or deprecated path to its final
 * single-hop 200 OK canonical path (including optional #anchor), or returns null if
 * pathname should be served directly (or fall through to 404).
 */
export function resolveEdgeRedirect(rawPathname: string): string | null {
  if (!rawPathname) return null;

  // Special trailing-slash directive alias
  if (rawPathname === '/robots/' || rawPathname === '/robots') {
    return '/robots.txt';
  }

  // Normalize trailing slash on non-root paths and resolve in a single hop
  const hasTrailingSlash = rawPathname.length > 1 && rawPathname.endsWith('/');
  const pathname = hasTrailingSlash ? rawPathname.replace(/\\/+$/, '') || '/' : rawPathname;

  // 1. Exact O(1) lookup
  const exact = EXACT_EDGE_REDIRECTS[pathname];
  if (exact) return exact;

  // 2. Legacy /canonical/* and /briefs/* static HTML archives
  if (pathname.startsWith('/canonical/') || pathname.startsWith('/briefs/')) {
    return '/briefings';
  }

  // 3. Legacy /guides/* routes
  if (pathname === '/guides' || pathname.startsWith('/guides/')) {
    return '/vault/curriculum/tracks';
  }

  // 4. Legacy /research/concepts/:slug* -> single-hop to final /concepts/<slug> or mapped target
  if (pathname.startsWith('/research/concepts/')) {
    const rest = pathname.slice('/research/concepts/'.length);
    const slug = rest.split('/')[0];
    if (!slug) return '/concepts';
    const mapped = EXACT_EDGE_REDIRECTS[\`/concepts/\${slug}\`];
    if (mapped) return mapped;
    if (VALID_CONCEPT_SLUGS.has(slug)) return \`/concepts/\${slug}\`;
    return '/concepts';
  }

  // 5. /compare/:slug and /comparisons/:slug
  if (pathname.startsWith('/compare/')) {
    const slug = pathname.slice('/compare/'.length).split('/')[0];
    if (!slug) return '/compare';
    const mapped = EXACT_EDGE_REDIRECTS[\`/compare/\${slug}\`];
    if (mapped) return mapped;
    if (VALID_COMPARE_TIER_A_SLUGS.has(slug) && pathname === \`/compare/\${slug}\`) {
      return hasTrailingSlash ? pathname : null;
    }
    return '/tools';
  }
  if (pathname.startsWith('/comparisons/')) {
    const slug = pathname.slice('/comparisons/'.length).split('/')[0];
    if (!slug) return '/compare';
    const mapped = EXACT_EDGE_REDIRECTS[\`/comparisons/\${slug}\`] || EXACT_EDGE_REDIRECTS[\`/compare/\${slug}\`];
    if (mapped) return mapped;
    if (VALID_COMPARE_TIER_A_SLUGS.has(slug)) return \`/compare/\${slug}\`;
    return '/tools';
  }

  // 6. Curriculum & Legacy /curriculum/* and /vault/curriculum/tracks/*
  if (pathname.startsWith('/curriculum/') || pathname.startsWith('/vault/curriculum/')) {
    if (pathname === '/vault/curriculum/tracks' || pathname === '/vault/curriculum/blueprints') {
      return hasTrailingSlash ? pathname : null;
    }
    let trackRel = '';
    if (pathname.startsWith('/vault/curriculum/tracks/')) {
      trackRel = pathname.slice('/vault/curriculum/tracks/'.length);
    } else if (pathname.startsWith('/curriculum/tracks/')) {
      trackRel = pathname.slice('/curriculum/tracks/'.length);
    } else {
      return '/vault/curriculum/tracks';
    }

    // Strip N-prefix on module IDs (e.g., ma-integration/N16-2 -> ma-integration/16-2)
    const nMatch = trackRel.match(/^([^/]+)\\/N(\\d+-\\d+)$/);
    if (nMatch) {
      trackRel = \`\${nMatch[1]}/\${nMatch[2]}\`;
    }

    // Apply track renumbering migrations before checking validity
    const prodEconMatch = trackRel.match(/^product-economics\\/6-(\\d+)$/);
    if (prodEconMatch) trackRel = \`product-economics/5-\${prodEconMatch[1]}\`;

    const aiOpsMatch = trackRel.match(/^ai-operations\\/11-(\\d+)$/);
    if (aiOpsMatch) trackRel = \`ai-operations/6-\${aiOpsMatch[1]}\`;

    const cloudFinopsMatch = trackRel.match(/^cloud-finops\\/14-(\\d+)$/);
    if (cloudFinopsMatch) trackRel = \`cloud-finops/7-\${cloudFinopsMatch[1]}\`;

    const startupMatch = trackRel.match(/^startup-economics\\/10-(\\d+)$/);
    if (startupMatch) trackRel = \`startup-economics/26-\${startupMatch[1]}\`;

    if (VALID_CURRICULUM_MODULE_SLUGS.has(trackRel)) {
      const canonicalModPath = \`/vault/curriculum/tracks/\${trackRel}\`;
      return rawPathname === canonicalModPath ? null : canonicalModPath;
    }
    return '/vault/curriculum/tracks';
  }

  // 7. Glossary (/glossary/:slug and /glossary/terms/:slug)
  if (pathname.startsWith('/glossary/terms/')) {
    const slug = pathname.slice('/glossary/terms/'.length).split('/')[0];
    if (!slug) return '/glossary';
    const mapped = EXACT_EDGE_REDIRECTS[\`/glossary/\${slug}\`];
    if (mapped) return mapped;
    if (VALID_KEEP_GLOSSARY_SLUGS.has(slug)) return \`/glossary/\${slug}\`;
    return '/glossary';
  }
  if (pathname.startsWith('/glossary/') && !pathname.startsWith('/glossary/pillars/')) {
    const rest = pathname.slice('/glossary/'.length);
    if (!rest.includes('/') && /^[a-z0-9-]+$/i.test(rest)) {
      if (VALID_KEEP_GLOSSARY_SLUGS.has(rest)) {
        return hasTrailingSlash ? pathname : null;
      }
      return '/glossary';
    }
  }

  // 8. Frameworks (/frameworks/:slug* and retired /framework/:slug)
  if (pathname.startsWith('/frameworks/')) {
    const slug = pathname.slice('/frameworks/'.length).split('/')[0];
    if (slug && VALID_SUBFRAMEWORK_SLUGS.has(slug)) return \`/framework/\${slug}\`;
    if (slug && VALID_ARTICLE_FRAMEWORK_SLUGS.has(slug)) return \`/articles/frameworks/\${slug}\`;
    return '/framework';
  }
  if (pathname.startsWith('/framework/')) {
    const rest = pathname.slice('/framework/'.length);
    if (!rest.includes('/') && /^[a-z0-9-]+$/i.test(rest)) {
      if (VALID_SUBFRAMEWORK_SLUGS.has(rest)) {
        return hasTrailingSlash ? pathname : null;
      }
      if (VALID_ARTICLE_FRAMEWORK_SLUGS.has(rest)) {
        return \`/articles/frameworks/\${rest}\`;
      }
      return '/framework';
    }
  }

  // 9. Articles (/articles/:slug retired programmatic & legacy routes)
  if (pathname.startsWith('/articles/') && !pathname.startsWith('/articles/frameworks/')) {
    const rest = pathname.slice('/articles/'.length);
    if (!rest.includes('/') && /^[a-z0-9-]+$/i.test(rest)) {
      if (VALID_ARTICLE_SLUGS.has(rest)) {
        return hasTrailingSlash ? pathname : null;
      }
      if (VALID_ARTICLE_FRAMEWORK_SLUGS.has(rest)) {
        return \`/articles/frameworks/\${rest}\`;
      }
      return '/articles';
    }
  }

  // 10. Failures (/failures/:slug retired failure slugs)
  if (pathname.startsWith('/failures/')) {
    const rest = pathname.slice('/failures/'.length);
    if (!rest.includes('/') && /^[a-z0-9-]+$/i.test(rest)) {
      if (VALID_FAILURE_SLUGS.has(rest)) {
        return hasTrailingSlash ? pathname : null;
      }
      return '/failures';
    }
  }

  // 11. Generic trailing-slash canonicalization for valid non-root routes
  if (hasTrailingSlash && !pathname.startsWith('/api/') && !pathname.startsWith('/_next/')) {
    return pathname;
  }

  return null;
}
`;

fs.writeFileSync(outPath, fileContent, 'utf8');
console.log(
  `[generate-edge-redirects] Wrote ${Object.keys(exactRedirects).length} verified 1-hop 301 entries to app/lib/edge-redirects-manifest.ts.`
);
process.exit(0);
