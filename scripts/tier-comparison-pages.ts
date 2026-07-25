import fs from 'fs';
import path from 'path';

/**
 * AI Economics Commercial Knowledge Platform - Tier Comparison Pages Script
 * Subsystem: /scripts/generate/comparison-tiering.ts
 */

const COMPARE_MATRIX_PATH = path.join(process.cwd(), 'app', 'lib', 'pseo-matrix.json');
const OUTPUT_CATEGORIZED_PATH = path.join(process.cwd(), 'app', 'lib', 'compare-categorized.json');

// High intent keywords relating to AI costs, governance, unit economics, and architecture (Tier A)
const HIGH_INTENT_KEYWORDS = [
  'claude', 'gpt', 'openai', 'anthropic', 'governance', 'cost', 'unit-economics',
  'pdi', 'aueb', 'ev-se', 'aper', 'shadow-ai', 'hallucination', 'copilot', 'cursor',
  'windsurf', 'retry-loop', 'context-rot', 'insolvency', 'technical-debt', 'dora',
  'jellyfish', 'linearb', 'sonarqube', 'codeclimate', 'waydev', 'hackerrank', 'leetcode'
];

// Nonsensical cross-category tool pairings (Tier C - 301 Redirect to /tools)
const SPAM_TOOL_KEYWORDS = [
  'chakra-ui', 'bootstrap', 'material-ui', 'tailwindcss', 'css', 'trello',
  'angular', 'vue', 'svelte', 'react', 'remix', 'nuxt', 'astro', 'gatsby'
];

export function runTiering() {
  console.log('[Tiering Script] Classifying Comparison URLs...');

  let matrix: any[] = [];
  if (fs.existsSync(COMPARE_MATRIX_PATH)) {
    try {
      const raw = fs.readFileSync(COMPARE_MATRIX_PATH, 'utf-8');
      matrix = JSON.parse(raw);
    } catch (e) {
      console.warn('Could not read pseo-matrix.json');
    }
  }

  // Known static Tier A slugs
  const staticTierA = [
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
    'shadow-ai-vs-shadow-it', 'technical-debt-vs-technical-insolvency', 'vibe-coding-vs-agile'
  ];

  // Known Tier C spam slugs (forced 301 redirects)
  const tierC_redirected = [
    'chakra-ui-vs-terraform', 'trello-vs-stripe', 'bootstrap-vs-vue',
    'mysql-vs-angular', 'datadog-vs-react', 'ansible-vs-circleci',
    'grafana-vs-nuxt', 'docker-vs-astro', 'docker-vs-material-ui',
    'bootstrap-vs-supabase', 'new-relic-vs-next-js', 'supabase-vs-angular',
    'chakra-ui-vs-mysql', 'ansible-vs-next-js', 'new-relic-vs-angular',
    'bootstrap-vs-jenkins', 'grafana-vs-remix', 'datadog-vs-gitlab-ci',
    'ansible-vs-nuxt', 'supabase-vs-vue', 'new-relic-vs-tailwindcss',
    'docker-vs-langchain', 'astro-vs-llamaindex'
  ];

  const tierA = [...staticTierA];
  const tierB: string[] = [];

  matrix.forEach(item => {
    const slug = item.slug || '';
    if (!slug || tierA.includes(slug) || tierC_redirected.includes(slug)) return;

    const lowerSlug = slug.toLowerCase();
    const isSpam = SPAM_TOOL_KEYWORDS.some(tool => lowerSlug.includes(tool));
    const isHighIntent = HIGH_INTENT_KEYWORDS.some(kw => lowerSlug.includes(kw));

    if (isSpam) {
      tierC_redirected.push(slug);
    } else if (isHighIntent) {
      tierA.push(slug);
    } else {
      tierB.push(slug);
    }
  });

  const output = {
    tierA_indexed: Array.from(new Set(tierA)),
    tierB_noindexed: Array.from(new Set(tierB)),
    tierC_redirected: Array.from(new Set(tierC_redirected)),
    junk: Array.from(new Set([...tierB, ...tierC_redirected])),
    updatedAt: new Date().toISOString()
  };

  fs.writeFileSync(OUTPUT_CATEGORIZED_PATH, JSON.stringify(output, null, 2));

  console.log(`[Tiering Script] Output Summary:`);
  console.log(`- Tier A (Indexed): ${output.tierA_indexed.length} pages`);
  console.log(`- Tier B (Noindexed): ${output.tierB_noindexed.length} pages`);
  console.log(`- Tier C (Redirected to /tools): ${output.tierC_redirected.length} pages`);
}

if (require.main === module) {
  runTiering();
}
