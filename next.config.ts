import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  async headers() {
    return [
      {
        source: '/assets/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' },
          { key: 'Cloudflare-CDN-Cache-Control', value: 'max-age=86400, stale-while-revalidate=604800' },
        ],
      },
      {
        source: '/api/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, follow' },
          { key: 'Cache-Control', value: 'no-store, max-age=0' },
          { key: 'Cloudflare-CDN-Cache-Control', value: 'no-store' },
        ],
      },
      {
        source: '/.well-known/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, follow' },
        ],
      },
      {
        source: '/sign-in',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, follow' },
          { key: 'Cache-Control', value: 'no-store, max-age=0' },
          { key: 'Cloudflare-CDN-Cache-Control', value: 'no-store' },
        ],
      },
      {
        source: '/sign-in/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, follow' },
          { key: 'Cache-Control', value: 'no-store, max-age=0' },
          { key: 'Cloudflare-CDN-Cache-Control', value: 'no-store' },
        ],
      },
      {
        source: '/sign-up',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, follow' },
          { key: 'Cache-Control', value: 'no-store, max-age=0' },
          { key: 'Cloudflare-CDN-Cache-Control', value: 'no-store' },
        ],
      },
      {
        source: '/sign-up/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, follow' },
          { key: 'Cache-Control', value: 'no-store, max-age=0' },
          { key: 'Cloudflare-CDN-Cache-Control', value: 'no-store' },
        ],
      },
      {
        source: '/vault',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, follow' },
          { key: 'Cache-Control', value: 'no-store, max-age=0' },
          { key: 'Cloudflare-CDN-Cache-Control', value: 'no-store' },
        ],
      },
      {
        source: '/vault/assets/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, follow' },
          { key: 'Cache-Control', value: 'no-store, max-age=0' },
          { key: 'Cloudflare-CDN-Cache-Control', value: 'no-store' },
        ],
      },
      {
        source: '/vault/team/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, follow' },
          { key: 'Cache-Control', value: 'no-store, max-age=0' },
          { key: 'Cloudflare-CDN-Cache-Control', value: 'no-store' },
        ],
      },
      {
        source: '/vault/join/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, follow' },
          { key: 'Cache-Control', value: 'no-store, max-age=0' },
          { key: 'Cloudflare-CDN-Cache-Control', value: 'no-store' },
        ],
      },
      {
        source: '/feed.xml',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, follow' },
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' },
          { key: 'Cloudflare-CDN-Cache-Control', value: 'max-age=86400, stale-while-revalidate=604800' },
        ],
      },
      {
        source: '/brand/:path*.json',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, follow' },
        ],
      },
      {
        source: '/:path*.json',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, follow' },
        ],
      },
      {
        source: '/ai-integration/advisor',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, follow' },
          { key: 'Cache-Control', value: 'no-store, max-age=0' },
          { key: 'Cloudflare-CDN-Cache-Control', value: 'no-store' },
        ],
      },
      {
        source: '/scorecard/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, follow' },
        ],
      },
      {
        source: '/tools/verify',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, follow' },
          { key: 'Cache-Control', value: 'no-store, max-age=0' },
          { key: 'Cloudflare-CDN-Cache-Control', value: 'no-store' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // ═══════════════════ LEGAL & TOC URL ALIASES ═══════════════════
      { source: '/terms', destination: '/legal#terms', statusCode: 301 },
      { source: '/terms-of-service', destination: '/legal#terms', statusCode: 301 },
      { source: '/terms-and-conditions', destination: '/legal#terms', statusCode: 301 },
      { source: '/toc', destination: '/legal#terms', statusCode: 301 },
      { source: '/tos', destination: '/legal#terms', statusCode: 301 },
      { source: '/tac', destination: '/legal#terms', statusCode: 301 },
      { source: '/privacy', destination: '/legal#privacy', statusCode: 301 },
      { source: '/privacy-policy', destination: '/legal#privacy', statusCode: 301 },
      { source: '/disclaimer', destination: '/legal#disclaimers', statusCode: 301 },
      { source: '/disclaimers', destination: '/legal#disclaimers', statusCode: 301 },
      { source: '/refunds', destination: '/legal#refunds', statusCode: 301 },
      { source: '/refund-policy', destination: '/legal#refunds', statusCode: 301 },
      { source: '/robots', destination: '/robots.txt', statusCode: 301 },
      { source: '/robots/', destination: '/robots.txt', statusCode: 301 },
      { source: '/frameworks', destination: '/framework', statusCode: 301 },
      { source: '/frameworks/innovation-tax', destination: '/articles/frameworks/innovation-tax', statusCode: 301 },
      { source: '/frameworks/product-debt-index', destination: '/glossary/product-debt-index', statusCode: 301 },
      { source: '/frameworks/technical-insolvency-date', destination: '/articles/frameworks/technical-insolvency-date', statusCode: 301 },
      { source: '/frameworks/synthetic-cogs', destination: '/articles/frameworks/synthetic-cogs', statusCode: 301 },
      { source: '/curriculum/ai-economics/:slug*', destination: '/vault/curriculum/tracks', statusCode: 301 },
      { source: '/research/concepts', destination: '/concepts', statusCode: 301 },
      { source: '/principal', destination: '/about', statusCode: 301 },
      { source: '/trust', destination: '/security', statusCode: 301 },
      { source: '/tools/section-174', destination: '/tools/section-174-calculator', statusCode: 301 },
      { source: '/vault/curriculum/tracks/product-economics/6-:id', destination: '/vault/curriculum/tracks/product-economics/5-:id', statusCode: 301 },
      { source: '/curriculum/tracks/product-economics/6-:id', destination: '/vault/curriculum/tracks/product-economics/5-:id', statusCode: 301 },
      { source: '/vault/curriculum/tracks/ai-operations/11-:id', destination: '/vault/curriculum/tracks/ai-operations/6-:id', statusCode: 301 },
      { source: '/curriculum/tracks/ai-operations/11-:id', destination: '/vault/curriculum/tracks/ai-operations/6-:id', statusCode: 301 },
      { source: '/curriculum/tracks/startup-economics/10-:id(1|2|3|4|5)', destination: '/vault/curriculum/tracks/startup-economics/26-:id', statusCode: 301 },
      { source: '/vault/curriculum/tracks/startup-economics/10-:id(1|2|3|4|5)', destination: '/vault/curriculum/tracks/startup-economics/26-:id', statusCode: 301 },
      { source: '/curriculum/tracks/startup-economics/:slug*', destination: '/vault/curriculum/tracks', statusCode: 301 },
      { source: '/vault/curriculum/tracks/startup-economics/26-:id([6-9]|\\d{2,})', destination: '/vault/curriculum/tracks', statusCode: 301 },
      { source: '/curriculum/tracks/enterprise-architecture/:slug*', destination: '/vault/curriculum/tracks', statusCode: 301 },
      { source: '/vault/curriculum/tracks/enterprise-architecture/:slug*', destination: '/vault/curriculum/tracks', statusCode: 301 },
      // ═══════════════════ PAIN-FORWARD URL ALIASES ═══════════════════
      // Topical authority roadmap aliases
      { source: '/ai-cost-audit', destination: '/services/ai-cost-audit', statusCode: 301 },
      { source: '/rd-capital-audit', destination: '/services/ai-cost-audit', statusCode: 301 },
      { source: '/ai-spend-calculator', destination: '/roi-calculator', statusCode: 301 },
      // Note: BLOG_SLUG_REDIRECTS & ARTICLE_SLUG_REDIRECTS execute in middleware.ts EDGE_REDIRECTS for single-hop apex+www 301 resolution.
      // Research-validated searchable URLs -> existing tool pages.
      // VALIDATED: competitors exist for these exact terms (TechDebtCalculator.com, Red Eagle, etc.)
      { source: '/tools/technical-debt-calculator', destination: '/tools/pdi', statusCode: 301 },
      { source: '/tools/code-quality-calculator', destination: '/tools/pdi', statusCode: 301 },
      { source: '/tools/vibe-coding-debt-calculator', destination: '/tools/pdi', statusCode: 301 },
      { source: '/tools/synthetic-debt-calculator', destination: '/tools/pdi', statusCode: 301 },
      // VALIDATED: "ai cost calculator" demand at all-time high per industry analysts
      { source: '/tools/ai-cost-calculator', destination: '/tools/aueb', statusCode: 301 },
      { source: '/tools/llm-cost-calculator', destination: '/tools/aueb', statusCode: 301 },
      { source: '/tools/ai-unit-economics-calculator', destination: '/tools/aueb', statusCode: 301 },
      { source: '/tools/ai-cogs-calculator', destination: '/tools/aueb', statusCode: 301 },
      { source: '/tools/token-cost-calculator', destination: '/tools/aueb', statusCode: 301 },
      { source: '/tools/ai-credit-pricing-calculator', destination: '/tools/aueb', statusCode: 301 },
      { source: '/tools/claude-api-cost-calculator', destination: '/tools/ai-feature-margin', statusCode: 301 },
      { source: '/tools/agents-md-validator', destination: '/tools/spec-quality-scorecard', statusCode: 301 },
      { source: '/tools/n8n-vs-zapier-calculator', destination: '/tools/automation-cost-calculator', statusCode: 301 },
      // VALIDATED: "revenue per engineer" used for board-level benchmarking (DX, LinearB)
      { source: '/tools/revenue-per-engineer', destination: '/tools/aper', statusCode: 301 },
      { source: '/tools/engineering-efficiency-calculator', destination: '/tools/aper', statusCode: 301 },
      // VALIDATED: SaaS valuation calculators are a well-established search category
      { source: '/tools/saas-valuation-calculator', destination: '/tools/ev-se', statusCode: 301 },
      { source: '/tools/enterprise-value-calculator', destination: '/tools/ev-se', statusCode: 301 },
      { source: '/tools/subprime-code-auditor', destination: '/tools/negative-carry-code-auditor', statusCode: 301 },
      { source: '/glossary/subprime-code', destination: '/glossary/negative-carry-code', statusCode: 301 },
      { source: '/glossary/subprime-code-crisis', destination: '/glossary/negative-carry-code-crisis', statusCode: 301 },
      { source: '/framework/subprime-code-governance', destination: '/framework/negative-carry-code-governance', statusCode: 301 },
      // STRATEGIC: maps to pain language from advisory prospects
      { source: '/tools/ai-hallucination-cost', destination: '/tools/hallucination-tax', statusCode: 301 },
      { source: '/tools/ai-job-displacement-calculator', destination: '/tools/fte-displacement', statusCode: 301 },
      { source: '/tools/ai-workforce-impact', destination: '/tools/fte-displacement', statusCode: 301 },
      { source: '/tools/self-host-vs-api', destination: '/tools/slm-vs-api', statusCode: 301 },
      { source: '/tools/shadow-ai-risk-calculator', destination: '/tools/shadow-ai', statusCode: 301 },
      { source: '/tools/mcp-security-scanner', destination: '/tools/mcp-security-auditor', statusCode: 301 },
      { source: '/vibe-coding-security-scanner', destination: '/tools/vibe-security-scanner', statusCode: 301 },
      { source: '/supabase-rls-checker', destination: '/tools/supabase-rls-checker', statusCode: 301 },
      { source: '/ai-sop-generator', destination: '/tools/department-ai-playbook', statusCode: 301 },
      { source: '/tools/ai-sop-generator', destination: '/tools/department-ai-playbook', statusCode: 301 },
      { source: '/tools/copilot-roi-calculator', destination: '/tools/copilot-roi', statusCode: 301 },
      { source: '/tools/ai-pilot-roi-calculator', destination: '/tools/ai-roi-timeline', statusCode: 301 },
      { source: '/tools/roai-calculator', destination: '/tools/ai-roi-timeline', statusCode: 301 },
      { source: '/tools/cloud-repatriation-calculator', destination: '/tools/cloud-repatriation', statusCode: 301 },
      // Compare page aliases - pain-forward versions
      { source: '/compare/technical-debt-calculator-vs-sonarqube', destination: '/compare/pdi-vs-sonarqube', statusCode: 301 },
      { source: '/compare/revenue-per-engineer-vs-jellyfish', destination: '/compare/aper-vs-jellyfish', statusCode: 301 },
      { source: '/compare/ai-cost-calculator-vs-aws', destination: '/compare/aueb-vs-aws-cost-explorer', statusCode: 301 },
      { source: '/compare/engineering-efficiency-vs-jellyfish', destination: '/compare/ev-se-vs-jellyfish', statusCode: 301 },
      { source: '/compare/engineering-metrics-vs-dora', destination: '/compare/dora-metrics-vs-aper', statusCode: 301 },
      { source: '/compare/mysql-vs-astro', destination: '/tools', statusCode: 301 },
      // Tier C Spam Comparison Pages 301 Redirects to /tools
      { source: '/compare/chakra-ui-vs-terraform', destination: '/tools', statusCode: 301 },
      { source: '/compare/trello-vs-stripe', destination: '/tools', statusCode: 301 },
      { source: '/compare/bootstrap-vs-vue', destination: '/tools', statusCode: 301 },
      { source: '/compare/mysql-vs-angular', destination: '/tools', statusCode: 301 },
      { source: '/compare/datadog-vs-react', destination: '/tools', statusCode: 301 },
      { source: '/compare/ansible-vs-circleci', destination: '/tools', statusCode: 301 },
      { source: '/compare/grafana-vs-nuxt', destination: '/tools', statusCode: 301 },
      { source: '/compare/docker-vs-astro', destination: '/tools', statusCode: 301 },
      { source: '/compare/docker-vs-material-ui', destination: '/tools', statusCode: 301 },
      { source: '/compare/bootstrap-vs-supabase', destination: '/tools', statusCode: 301 },
      { source: '/compare/new-relic-vs-next-js', destination: '/tools', statusCode: 301 },
      { source: '/compare/supabase-vs-angular', destination: '/tools', statusCode: 301 },
      { source: '/compare/chakra-ui-vs-mysql', destination: '/tools', statusCode: 301 },
      { source: '/compare/ansible-vs-next-js', destination: '/tools', statusCode: 301 },
      { source: '/compare/new-relic-vs-angular', destination: '/tools', statusCode: 301 },
      { source: '/compare/bootstrap-vs-jenkins', destination: '/tools', statusCode: 301 },
      { source: '/compare/grafana-vs-remix', destination: '/tools', statusCode: 301 },
      { source: '/compare/datadog-vs-gitlab-ci', destination: '/tools', statusCode: 301 },
      { source: '/compare/ansible-vs-nuxt', destination: '/tools', statusCode: 301 },
      { source: '/compare/supabase-vs-vue', destination: '/tools', statusCode: 301 },
      { source: '/compare/new-relic-vs-tailwindcss', destination: '/tools', statusCode: 301 },
      { source: '/compare/docker-vs-langchain', destination: '/tools', statusCode: 301 },
      { source: '/compare/astro-vs-llamaindex', destination: '/tools', statusCode: 301 },
      // NOTE: Tier C compare redirects are handled by middleware.ts with Tier A allowlist.
      // Do NOT add a blanket /compare/:slug* redirect here - it overrides Tier A page rendering.
      { source: '/vault/curriculum/tracks/strategic-leadership/N22-5', destination: '/vault/curriculum/tracks', statusCode: 301 },
      { source: '/vault/curriculum/tracks/model-routing/25-3', destination: '/vault/curriculum/tracks', statusCode: 301 },
      { source: '/vault/curriculum/tracks/25/25-9', destination: '/vault/curriculum/tracks', statusCode: 301 },
      { source: '/vault/curriculum/tracks/engineering-culture/22-1', destination: '/vault/curriculum/tracks', statusCode: 301 },
      { source: '/vault/curriculum/tracks/fractional-engineering/50-1', destination: '/vault/curriculum/tracks', statusCode: 301 },
      { source: '/vault/curriculum/tracks/govtech-economics/54-2', destination: '/vault/curriculum/tracks', statusCode: 301 },
      { source: '/vault/curriculum/tracks/system-design/20-3', destination: '/vault/curriculum/tracks', statusCode: 301 },
      { source: '/vault/curriculum/tracks/fintech-economics/52-6', destination: '/vault/curriculum/tracks', statusCode: 301 },
      { source: '/canonical/financial-conways-law.html', destination: '/briefings', statusCode: 301 },
      { source: '/canonical/governance-of-subtraction.html', destination: '/briefings', statusCode: 301 },
      { source: '/canonical/kill-switch.html', destination: '/briefings', statusCode: 301 },

      {
        source: '/vault/curriculum/tracks/:trackId(\\d+)/:moduleId',
        destination: '/vault/curriculum/tracks',
        statusCode: 301,
      },
      {
        source: '/vault/curriculum/tracks/cloud-finops/14-:id',
        destination: '/vault/curriculum/tracks/cloud-finops/7-:id',
        statusCode: 301,
      },
      {
        source: '/index.html',
        destination: '/',
        statusCode: 301,
      },
      {
        source: '/advisory.html',
        destination: '/advisory',
        statusCode: 301,
      },
      {
        source: '/manifesto.html',
        destination: '/manifesto',
        statusCode: 301,
      },
      {
        source: '/system.html',
        destination: '/system',
        statusCode: 301,
      },
      {
        source: '/briefings.html',
        destination: '/briefings',
        statusCode: 301,
      },
      {
        source: '/the-operator.html',
        destination: '/about',
        statusCode: 301,
      },

      {
        source: '/q-pep-product-economics-protocol',
        destination: '/system',
        statusCode: 301,
      },
      {
        source: '/canonical/kill-switch.html',
        destination: '/briefings',
        statusCode: 301,
      },
      {
        source: '/canonical/capital-allocation-strategy.html',
        destination: '/briefings',
        statusCode: 301,
      },
      {
        source: '/studio.html',
        destination: '/services',
        statusCode: 301,
      },
      // Legacy 404s reported by GSC
      {
        source: '/10',
        destination: '/',
        statusCode: 301,
      },
      {
        source: '/canonical/:slug*',
        destination: '/briefings',
        statusCode: 301,
      },
      {
        source: '/methodology.html',
        destination: '/system',
        statusCode: 301,
      },
      {
        source: '/working-papers.html',
        destination: '/doctrine',
        statusCode: 301,
      },
      {
        source: '/briefs/:slug*',
        destination: '/briefings',
        statusCode: 301,
      },
      {
        source: '/robots/',
        destination: '/robots.txt',
        statusCode: 301,
      },
      // Git/GitHub redirects pointing to profile
      {
        source: '/git',
        destination: 'https://github.com/Richard-Ewing',
        statusCode: 301,
      },
      {
        source: '/github',
        destination: 'https://github.com/Richard-Ewing',
        statusCode: 301,
      },
      // ═══════════════════ PARTNERSHIP & BRAND ALIAS REDIRECTS ═══════════════════
      {
        source: '/partnerships/integrations',
        destination: '/partnerships/integration-docs',
        statusCode: 301,
      },
      {
        source: '/partnerships/supabase',
        destination: '/integrations/supabase',
        statusCode: 301,
      },
      {
        source: '/docs/integrations/supabase',
        destination: '/integrations/supabase',
        statusCode: 301,
      },
      {
        source: '/docs/integrations',
        destination: '/partnerships/integration-docs',
        statusCode: 301,
      },
      {
        source: '/integrations',
        destination: '/partnerships/integration-docs',
        statusCode: 301,
      },
      {
        source: '/media-kit',
        destination: '/brand',
        statusCode: 301,
      },
      {
        source: '/press',
        destination: '/brand',
        statusCode: 301,
      },
      // ═══════════════════ GSC 404 REMEDIATION ═══════════════════
      // Redirect all old numeric tracks and modules directly to the vault curriculum in a single hop
      {
        source: '/vault/curriculum/tracks/:category(\\d+)/:slug*',
        destination: '/vault/curriculum/tracks',
        statusCode: 301,
      },
      {
        source: '/curriculum/tracks/:category(\\d+)/:slug*',
        destination: '/vault/curriculum/tracks',
        statusCode: 301,
      },
      // Redirect only truly deprecated legacy tracks directly to /vault/curriculum/tracks to prevent redirect chains
      {
        source: '/vault/curriculum/tracks/:category(b2b-saas-economics|fintech-economics|logistics-ecommerce|healthtech-economics|traditional-pm|breaking-into-tech|junior-to-senior|erp-enterprise-integration|outsourcing-economics|corporate-it-cost-centers|mainframe-legacy-systems|career-mobility-technical-economics|classic-qa-quality|monolith-classic-database|executive-alignment-governance|fullstack-career|system-design|devops-economics|security-economics|data-economics|engineering-leadership|fractional-engineering|ai-agent-economics|synthetic-data|enterprise-architecture|agile-economics|guides|comparisons|engineering-culture|sovereign-ai|govtech-economics|model-routing)/:slug*',
        destination: '/vault/curriculum/tracks',
        statusCode: 301,
      },
      {
        source: '/curriculum/tracks/:category(b2b-saas-economics|fintech-economics|logistics-ecommerce|healthtech-economics|traditional-pm|breaking-into-tech|junior-to-senior|erp-enterprise-integration|outsourcing-economics|corporate-it-cost-centers|mainframe-legacy-systems|career-mobility-technical-economics|classic-qa-quality|monolith-classic-database|executive-alignment-governance|fullstack-career|system-design|devops-economics|security-economics|data-economics|engineering-leadership|fractional-engineering|ai-agent-economics|synthetic-data|enterprise-architecture|agile-economics|guides|comparisons|engineering-culture|sovereign-ai|govtech-economics|model-routing)/:slug*',
        destination: '/vault/curriculum/tracks',
        statusCode: 301,
      },
      // Guides fallback to prevent 404s on legacy guide pages
      {
        source: '/guides/:slug+',
        destination: '/vault/curriculum/tracks',
        statusCode: 301,
      },
      {
        source: '/guides',
        destination: '/vault/curriculum/tracks',
        statusCode: 301,
      },

      // ═══════════════════ LEGACY TRACKING PREFIX REDIRECTS ═══════════════════
      // Handles N-prefixed curriculum IDs reported in GSC "Crawled - currently not indexed"
      {
        source: '/curriculum/tracks/:category/N:id',
        destination: '/vault/curriculum/tracks/:category/:id',
        statusCode: 301,
      },
      {
        source: '/vault/curriculum/tracks/:category/N:id',
        destination: '/vault/curriculum/tracks/:category/:id',
        statusCode: 301,
      },
      // ═══════════════════ LMS MIGRATION ═══════════════════
      {
        source: '/curriculum/tracks/cloud-finops/14-:id',
        destination: '/vault/curriculum/tracks/cloud-finops/7-:id',
        statusCode: 301,
      },
      {
        source: '/curriculum/tracks/:path*',
        destination: '/vault/curriculum/tracks/:path*',
        statusCode: 301,
      },
      {
        source: '/vault/curriculum',
        destination: '/vault/curriculum/tracks',
        statusCode: 301,
      },
      // ═══════════════════ DEPRECATED TRACK REDIRECTS ═══════════════════
      // Deprecated Old Numbers & Slugs
      {
        source: '/curriculum/tracks/:trackId(\\d+)/:moduleId',
        destination: '/vault/curriculum/tracks',
        statusCode: 301,
      },
      // ═══════════════════ 2026 CURRICULUM RESTRUCTURING - KILLED TRACKS ═══════════════════
      // Handled via single-hop 301 edge redirect manifest (ADR-0022).
      // Pattern 3: /curriculum/digital-transformation/:slug -> /vault/curriculum/tracks
      {
        source: '/curriculum/digital-transformation/:slug*',
        destination: '/vault/curriculum/tracks',
        statusCode: 301,
      },
      // Pattern 6: /blog/:slug (REMOVED - Blog is active again)
      // Pattern 7: /tools/cloud-finops-calculator → /tools (deleted tool)
      {
        source: '/tools/cloud-finops-calculator',
        destination: '/tools',
        statusCode: 301,
      },
      // ═══════════════════ LEGACY TOOLS & DUPLICATE CATCH-ALL REDIRECTS ═══════════════════
      {
        source: '/tools/unit-economics',
        destination: '/tools/aueb',
        statusCode: 301,
      },
      {
        source: '/tools/CloudRepatriationCalculator',
        destination: '/tools/cloud-repatriation',
        statusCode: 301,
      },
      {
        source: '/tools/PromptInjectionSandbox',
        destination: '/tools/prompt-injection-sandbox',
        statusCode: 301,
      },
      {
        source: '/tools/RagChunkingVisualizer',
        destination: '/tools/rag-chunking-visualizer',
        statusCode: 301,
      },
      {
        source: '/product-debt-index',
        destination: '/tools/pdi',
        statusCode: 301,
      },
      {
        source: '/roai-framework',
        destination: '/articles/frameworks/return-on-ai-investment',
        statusCode: 301,
      },
      {
        source: '/technical-insolvency-date',
        destination: '/articles/frameworks/technical-insolvency-date',
        statusCode: 301,
      },
      {
        source: '/career-pathfinder',
        destination: '/tools/career-pathing',
        statusCode: 301,
      },
      {
        source: '/security-trust',
        destination: '/security',
        statusCode: 301,
      },
      {
        source: '/architectural-doctrine',
        destination: '/exogram/architecture',
        statusCode: 301,
      },
      {
        source: '/legal-hub',
        destination: '/legal',
        statusCode: 301,
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
        'openai-vs-tailwindcss',
        'dora-vs-space',
        'openai-vs-anthropic'
      ].flatMap(slug => [
        {
          source: `/compare/${slug}`,
          destination: '/compare',
          statusCode: 301 as const,
        },
        {
          source: `/comparisons/${slug}`,
          destination: '/compare',
          statusCode: 301 as const,
        },
      ]),
    ];
  },
};

export default nextConfig;
