import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
        ],
      },
      {
        source: '/.well-known/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: '/frameworks', destination: '/framework', permanent: true },
      { source: '/advisory', destination: '/services', permanent: true },
      { source: '/principal', destination: '/about', permanent: true },
      { source: '/vault/curriculum/tracks/product-economics/6-:id', destination: '/vault/curriculum/tracks/product-economics/5-:id', permanent: true },
      { source: '/vault/curriculum/tracks/ai-operations/11-:id', destination: '/vault/curriculum/tracks/ai-operations/6-:id', permanent: true },
      // ═══════════════════ PAIN-FORWARD URL ALIASES ═══════════════════
      // Research-validated searchable URLs → existing tool pages.
      // VALIDATED: competitors exist for these exact terms (TechDebtCalculator.com, Red Eagle, etc.)
      { source: '/tools/technical-debt-calculator', destination: '/tools/pdi', permanent: true },
      { source: '/tools/code-quality-calculator', destination: '/tools/pdi', permanent: true },
      // VALIDATED: "ai cost calculator" demand at all-time high per industry analysts
      { source: '/tools/ai-cost-calculator', destination: '/tools/aueb', permanent: true },
      { source: '/tools/llm-cost-calculator', destination: '/tools/aueb', permanent: true },
      { source: '/tools/ai-unit-economics-calculator', destination: '/tools/aueb', permanent: true },
      // VALIDATED: "revenue per engineer" used for board-level benchmarking (DX, LinearB)
      { source: '/tools/revenue-per-engineer', destination: '/tools/aper', permanent: true },
      { source: '/tools/engineering-efficiency-calculator', destination: '/tools/aper', permanent: true },
      // VALIDATED: SaaS valuation calculators are a well-established search category
      { source: '/tools/saas-valuation-calculator', destination: '/tools/ev-se', permanent: true },
      { source: '/tools/enterprise-value-calculator', destination: '/tools/ev-se', permanent: true },
      // STRATEGIC: maps to pain language from advisory prospects
      { source: '/tools/ai-hallucination-cost', destination: '/tools/vta', permanent: true },
      { source: '/tools/ai-job-displacement-calculator', destination: '/tools/fte-displacement', permanent: true },
      { source: '/tools/ai-workforce-impact', destination: '/tools/fte-displacement', permanent: true },
      { source: '/tools/self-host-vs-api', destination: '/tools/slm-vs-api', permanent: true },
      { source: '/tools/shadow-ai-risk-calculator', destination: '/tools/shadow-ai', permanent: true },
      { source: '/tools/copilot-roi-calculator', destination: '/tools/copilot-roi', permanent: true },
      { source: '/tools/cloud-repatriation-calculator', destination: '/tools/cloud-repatriation', permanent: true },
      // Compare page aliases — pain-forward versions
      { source: '/compare/technical-debt-calculator-vs-sonarqube', destination: '/compare/pdi-vs-sonarqube', permanent: true },
      { source: '/compare/revenue-per-engineer-vs-jellyfish', destination: '/compare/aper-vs-jellyfish', permanent: true },
      { source: '/compare/ai-cost-calculator-vs-aws', destination: '/compare/aueb-vs-aws-cost-explorer', permanent: true },
      { source: '/compare/engineering-efficiency-vs-jellyfish', destination: '/compare/ev-se-vs-jellyfish', permanent: true },
      { source: '/compare/engineering-metrics-vs-dora', destination: '/compare/dora-metrics-vs-aper', permanent: true },
      { source: '/compare/mysql-vs-astro', destination: '/compare', permanent: true },
      { source: '/vault/curriculum/tracks/strategic-leadership/N22-5', destination: '/vault/curriculum/tracks', permanent: true },
      { source: '/vault/curriculum/tracks/model-routing/25-3', destination: '/vault/curriculum/tracks', permanent: true },
      { source: '/vault/curriculum/tracks/25/25-9', destination: '/vault/curriculum/tracks', permanent: true },
      { source: '/vault/curriculum/tracks/engineering-culture/22-1', destination: '/vault/curriculum/tracks', permanent: true },
      { source: '/vault/curriculum/tracks/fractional-engineering/50-1', destination: '/vault/curriculum/tracks', permanent: true },
      { source: '/vault/curriculum/tracks/govtech-economics/54-2', destination: '/vault/curriculum/tracks', permanent: true },
      { source: '/vault/curriculum/tracks/system-design/20-3', destination: '/vault/curriculum/tracks', permanent: true },
      { source: '/vault/curriculum/tracks/fintech-economics/52-6', destination: '/vault/curriculum/tracks', permanent: true },
      { source: '/canonical/financial-conways-law.html', destination: '/briefings', permanent: true },
      { source: '/canonical/governance-of-subtraction.html', destination: '/briefings', permanent: true },
      { source: '/canonical/kill-switch.html', destination: '/briefings', permanent: true },

      {
        source: '/vault/curriculum/tracks/:trackId(\\d+)/:moduleId',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/cloud-finops/14-:id',
        destination: '/vault/curriculum/tracks/cloud-finops/7-:id',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/advisory.html',
        destination: '/advisory',
        permanent: true,
      },
      {
        source: '/manifesto.html',
        destination: '/manifesto',
        permanent: true,
      },
      {
        source: '/system.html',
        destination: '/system',
        permanent: true,
      },
      {
        source: '/briefings.html',
        destination: '/briefings',
        permanent: true,
      },
      {
        source: '/the-operator.html',
        destination: '/principal',
        permanent: true,
      },

      {
        source: '/q-pep-product-economics-protocol',
        destination: '/system',
        permanent: true,
      },
      {
        source: '/canonical/kill-switch.html',
        destination: '/briefings',
        permanent: true,
      },
      {
        source: '/canonical/capital-allocation-strategy.html',
        destination: '/briefings',
        permanent: true,
      },
      {
        source: '/studio.html',
        destination: '/advisory',
        permanent: true,
      },
      // Legacy 404s reported by GSC
      {
        source: '/10',
        destination: '/',
        permanent: true,
      },
      {
        source: '/canonical/:slug*',
        destination: '/briefings',
        permanent: true,
      },
      {
        source: '/methodology.html',
        destination: '/system',
        permanent: true,
      },
      {
        source: '/working-papers.html',
        destination: '/doctrine',
        permanent: true,
      },
      {
        source: '/briefs/:slug*',
        destination: '/briefings',
        permanent: true,
      },
      {
        source: '/robots/',
        destination: '/robots.txt',
        permanent: true,
      },
      // Git/GitHub redirects pointing to profile
      {
        source: '/git',
        destination: 'https://github.com/Richard-Ewing',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/Richard-Ewing',
        permanent: true,
      },
      // ═══════════════════ GSC 404 REMEDIATION ═══════════════════
      // Redirect all old numeric tracks and modules directly to the vault curriculum in a single hop
      {
        source: '/vault/curriculum/tracks/:category(\\d+)/:slug*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/curriculum/tracks/:category(\\d+)/:slug*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      // Redirect all deprecated named tracks directly to /vault/curriculum/tracks to prevent redirect chains
      {
        source: '/vault/curriculum/tracks/:category(b2b-saas-economics|fintech-economics|logistics-ecommerce|healthtech-economics|traditional-pm|breaking-into-tech|junior-to-senior|agentic-governance|erp-enterprise-integration|outsourcing-economics|corporate-it-cost-centers|mainframe-legacy-systems|career-mobility-technical-economics|classic-qa-quality|monolith-classic-database|executive-alignment-governance|fullstack-career|system-design|devops-economics|security-economics|data-economics|engineering-leadership|guides|comparisons|fractional-engineering)/:slug*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/curriculum/tracks/:category(b2b-saas-economics|fintech-economics|logistics-ecommerce|healthtech-economics|traditional-pm|breaking-into-tech|junior-to-senior|agentic-governance|erp-enterprise-integration|outsourcing-economics|corporate-it-cost-centers|mainframe-legacy-systems|career-mobility-technical-economics|classic-qa-quality|monolith-classic-database|executive-alignment-governance|fullstack-career|system-design|devops-economics|security-economics|data-economics|engineering-leadership|guides|comparisons|fractional-engineering)/:slug*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      // Guides fallback to prevent 404s on legacy guide pages
      {
        source: '/guides/:slug+',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/guides',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },

      // ═══════════════════ LEGACY TRACKING PREFIX REDIRECTS ═══════════════════
      // Handles N-prefixed curriculum IDs reported in GSC "Crawled - currently not indexed"
      {
        source: '/curriculum/tracks/:category/N:id',
        destination: '/vault/curriculum/tracks/:category/:id',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/:category/N:id',
        destination: '/vault/curriculum/tracks/:category/:id',
        permanent: true,
      },
      // ═══════════════════ LMS MIGRATION ═══════════════════
      {
        source: '/curriculum/tracks/cloud-finops/14-:id',
        destination: '/vault/curriculum/tracks/cloud-finops/7-:id',
        permanent: true,
      },
      {
        source: '/curriculum/tracks/:path*',
        destination: '/vault/curriculum/tracks/:path*',
        permanent: true,
      },
      {
        source: '/vault/curriculum',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      // ═══════════════════ DEPRECATED TRACK REDIRECTS ═══════════════════
      // Deprecated Old Numbers & Slugs
      {
        source: '/curriculum/tracks/:trackId(\\d+)/:moduleId',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      // ═══════════════════ 2026 CURRICULUM RESTRUCTURING — KILLED TRACKS ═══════════════════
      // Classic disciplines killed
      // Track 15 Free Playbooks
      {
        source: '/guides/cto-first-90-days',
        destination: '/vault/curriculum/tracks/guides/15-1',
        permanent: true,
      },
      {
        source: '/guides/technical-debt',
        destination: '/vault/curriculum/tracks/guides/15-2',
        permanent: true,
      },
      {
        source: '/guides/build-vs-buy',
        destination: '/vault/curriculum/tracks/guides/15-3',
        permanent: true,
      },
      {
        source: '/guides/engineering-efficiency',
        destination: '/vault/curriculum/tracks/guides/15-4',
        permanent: true,
      },
      {
        source: '/guides/product-economics',
        destination: '/vault/curriculum/tracks/guides/15-5',
        permanent: true,
      },
      // Track 16 Premium Guides
      {
        source: '/guides/how-to-deploy-small-language-models',
        destination: '/vault/curriculum/tracks/guides/16-1',
        permanent: true,
      },
      {
        source: '/guides/ai-governance-compliance',
        destination: '/vault/curriculum/tracks/guides/16-2',
        permanent: true,
      },
      {
        source: '/guides/ai-native-development-teams',
        destination: '/vault/curriculum/tracks/guides/16-3',
        permanent: true,
      },
      // Track 17 Comparisons
      {
        source: '/comparisons/nextjs-remix-astro',
        destination: '/vault/curriculum/tracks/comparisons/17-1',
        permanent: true,
      },
      {
        source: '/comparisons/claude-vs-gpt4',
        destination: '/vault/curriculum/tracks/comparisons/17-2',
        permanent: true,
      },
      {
        source: '/comparisons/pdi-vs-dora',
        destination: '/vault/curriculum/tracks/comparisons/17-3',
        permanent: true,
      },
      {
        source: '/comparisons/agile-vs-kanban',
        destination: '/vault/curriculum/tracks/comparisons/17-4',
        permanent: true,
      },
      {
        source: '/comparisons/monolith-vs-microservices',
        destination: '/vault/curriculum/tracks/comparisons/17-5',
        permanent: true,
      },
      // Wildcard Fallbacks removed due to redirect loops. Handled by [...]catchAll and notFound() replacement.
      // ═══════════════════ AHREFS 404 REMEDIATION (282 URLs) ═══════════════════
      // These wildcard rules eliminate ALL 404 patterns identified in the Ahrefs crawl.
      // Pattern 1: /glossary/terms/:slug → /glossary/:slug (lesson inline links use wrong path)
      {
        source: '/glossary/terms/:slug',
        destination: '/glossary/:slug',
        permanent: true,
      },
      // Pattern 2: /articles/:slug → /articles (auto-generated article links that don't exist)
      // Removed because it catches /articles/frameworks/... and causes valid pages to return 308
      // Pattern 3: /curriculum/digital-transformation/:slug → /vault/curriculum/tracks
      {
        source: '/curriculum/digital-transformation/:slug*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      // Pattern 6: /blog/:slug (REMOVED - Blog is active again)
      // Pattern 7: /tools/cloud-finops-calculator → /tools (deleted tool)
      {
        source: '/tools/cloud-finops-calculator',
        destination: '/tools',
        permanent: true,
      },
      // ═══════════════════ LEGACY TOOLS REDIRECTS ═══════════════════
      {
        source: '/tools/unit-economics',
        destination: '/tools/aueb',
        permanent: true,
      },
      // ═══════════════════ COMPARISONS 404 REMEDIATION ═══════════════════
      ...[
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
        'openai-vs-tailwindcss'
      ].map(slug => ({
        source: `/compare/${slug}`,
        destination: '/compare',
        permanent: true as const,
      })),
    ];
  },
};

export default nextConfig;
