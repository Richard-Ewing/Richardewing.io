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
      // Legacy Track ID -> Slug Migrations
      {
        source: '/vault/curriculum/tracks/23/:path*',
        destination: '/vault/curriculum/tracks/agentic-automation/:path*',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/24/:path*',
        destination: '/vault/curriculum/tracks/sovereign-ai/:path*',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/25/:path*',
        destination: '/vault/curriculum/tracks/model-routing/:path*',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/26/:path*',
        destination: '/vault/curriculum/tracks/idps/:path*',
        permanent: true,
      },
      {
        source: '/vault/curriculum/tracks/27/:path*',
        destination: '/vault/curriculum/tracks/synthetic-data/:path*',
        permanent: true,
      },
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
    ];
  },
};

export default nextConfig;
