import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
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
      // ═══════════════════ LMS MIGRATION ═══════════════════
      {
        source: '/curriculum/tracks/:path*',
        destination: '/vault/curriculum/tracks/:path*',
        permanent: true,
      },
      // ═══════════════════ DEPRECATED TRACK REDIRECTS ═══════════════════
      // NOTE: Tracks 23-27 were previously redirected to named slugs (agentic-automation, sovereign-ai, etc.)
      // but those slugs were also killed. They now fall through to the generic numeric ID redirects below.
      // Deprecated Old Numbers & Slugs
      {
        source: '/vault/curriculum/tracks/33/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/41/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/55/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/career-mobility-technical-economics/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/logistics-ecommerce/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      // ═══════════════════ 2026 CURRICULUM RESTRUCTURING — KILLED TRACKS ═══════════════════
      // Classic disciplines killed
      {
        source: '/vault/curriculum/tracks/devops-economics/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/security-economics/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/data-economics/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/engineering-leadership/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/startup-economics/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/enterprise-architecture/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/ai-agent-economics/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      // Classic disciplines tracks 18-22
      {
        source: '/vault/curriculum/tracks/fullstack-career/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/agile-economics/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/system-design/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/traditional-pm/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/engineering-culture/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      // Mega-trends tracks 23-30
      {
        source: '/vault/curriculum/tracks/23/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/24/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/25/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/26/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/27/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/28/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/29/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/30/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      // Old-school slugged tracks (31-57)
      {
        source: '/vault/curriculum/tracks/31/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/32/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/34/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/35/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/36/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/37/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/38/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/39/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/40/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/42/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/43/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/44/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/45/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/46/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/47/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/48/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/49/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/50/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/51/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/52/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/53/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/54/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/56/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/57/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/58/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      // Named slug redirects for killed tracks
      {
        source: '/vault/curriculum/tracks/mainframe-legacy-systems/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/corporate-it-cost-centers/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/outsourcing-economics/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/monolith-classic-database/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/engineering-velocity-agile/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/executive-alignment-governance/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/erp-enterprise-integration/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/classic-qa-quality/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/fractional-engineering/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/b2b-saas-economics/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/fintech-economics/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/healthtech-economics/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/govtech-economics/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/breaking-into-tech/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/junior-to-senior/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/agentic-governance/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/agentic-automation/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/sovereign-ai/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/model-routing/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/idps/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/synthetic-data/:path*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
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
      // Wildcard Fallbacks
      {
        source: '/guides/:slug*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/guides',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/comparisons/:slug*',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      {
        source: '/comparisons',
        destination: '/vault/curriculum/tracks',
        permanent: true,
      },
      // ═══════════════════ REMOVED GLOSSARY TERMS ═══════════════════
      // Redirect deleted glossary slugs to the glossary index
      ...[
        'ai-dspm',
        'ai-response-drift',
        'ai-volatility-tax',
        'evergreen-ratio',
        'execution-layer',
        'fractional-cto',
        'kano-model',
        'monolith-to-microservices',
        'north-star-metric',
        'rice-framework',
        'sovereign-ai-substrate',
        'system-2-reasoning-tokens',
        'thermodynamic-compute-cost',
      ].map(slug => ({
        source: `/glossary/${slug}`,
        destination: '/glossary',
        permanent: true as const,
      })),
    ];
  },
};

export default nextConfig;
