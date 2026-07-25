import fs from 'fs';
import path from 'path';

/**
 * AI Economics Commercial Knowledge Platform - Tier Comparison Pages Script
 * Subsystem: /scripts/tier-comparison-pages.ts
 * 
 * Classifies comparison URLs into:
 * Tier A: High Intent Strategic Comparisons (INDEX, FOLLOW)
 * Tier B: Low Intent Generic Tool Comparisons (NOINDEX, FOLLOW)
 * Tier C: Irrelevant Spam Comparisons (301 REDIRECT to /tools)
 */

const COMPARE_MATRIX_PATH = path.join(process.cwd(), 'app', 'lib', 'pseo-matrix.json');
const OUTPUT_CATEGORIZED_PATH = path.join(process.cwd(), 'app', 'lib', 'compare-categorized.json');

// High intent keywords relating to AI costs, governance, unit economics, and architecture
const HIGH_INTENT_KEYWORDS = [
  'claude', 'gpt', 'openai', 'anthropic', 'governance', 'cost', 'unit-economics',
  'pdi', 'aueb', 'ev-se', 'aper', 'shadow-ai', 'hallucination', 'copilot', 'cursor',
  'windsurf', 'retry-loop', 'context-rot', 'insolvency', 'technical-debt'
];

// Completely non-sensical or zero-intent pairs (Tier C - 301 Redirect)
const TIER_C_SPAM_PATTERNS = [
  'chakra-ui-vs-terraform', 'trello-vs-stripe', 'bootstrap-vs-vue',
  'mysql-vs-angular', 'datadog-vs-react', 'ansible-vs-circleci',
  'grafana-vs-nuxt', 'docker-vs-astro', 'docker-vs-material-ui',
  'bootstrap-vs-supabase', 'new-relic-vs-next-js', 'supabase-vs-angular',
  'chakra-ui-vs-mysql', 'ansible-vs-next-js', 'new-relic-vs-angular',
  'bootstrap-vs-jenkins', 'grafana-vs-remix', 'datadog-vs-gitlab-ci',
  'ansible-vs-nuxt', 'supabase-vs-vue', 'new-relic-vs-tailwindcss'
];

export function runTiering() {
  console.log('[Tiering Script] Starting Comparison Page Classification...');

  let matrix: any[] = [];
  if (fs.existsSync(COMPARE_MATRIX_PATH)) {
    const raw = fs.readFileSync(COMPARE_MATRIX_PATH, 'utf-8');
    matrix = JSON.parse(raw);
  }

  const tierA: string[] = [];
  const tierB: string[] = [];
  const tierC: string[] = [...TIER_C_SPAM_PATTERNS];

  matrix.forEach(item => {
    const slug = item.slug || '';
    if (!slug) return;

    if (TIER_C_SPAM_PATTERNS.includes(slug)) {
      if (!tierC.includes(slug)) tierC.push(slug);
      return;
    }

    const isHighIntent = HIGH_INTENT_KEYWORDS.some(kw => slug.toLowerCase().includes(kw));

    if (isHighIntent) {
      tierA.push(slug);
    } else {
      tierB.push(slug);
    }
  });

  const output = {
    tierA_indexed: tierA,
    tierB_noindexed: tierB,
    tierC_redirected: tierC,
    junk: [...tierB, ...tierC], // Backwards compatible with compare-categorized.json format
    updatedAt: new Date().toISOString()
  };

  fs.writeFileSync(OUTPUT_CATEGORIZED_PATH, JSON.stringify(output, null, 2));

  console.log(`[Tiering Script] Completed Classification:`);
  console.log(`- Tier A (Indexed): ${tierA.length} pages`);
  console.log(`- Tier B (Noindexed): ${tierB.length} pages`);
  console.log(`- Tier C (Redirected): ${tierC.length} pages`);
}

// Run if called directly
if (require.main === module) {
  runTiering();
}
