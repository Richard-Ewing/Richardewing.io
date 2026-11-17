export type AdPillar = 'glossary' | 'blog' | 'concepts';

export interface DirectSponsorCampaign {
  id: string;
  sponsorName: string;
  badgeText: string;
  headline: string;
  body: string;
  ctaLabel: string;
  destinationUrl: string;
  pillars: AdPillar[];
  active: boolean;
}

export interface SponsorshipPackage {
  id: 'glossary-pillar' | 'editorial-concepts' | 'all-three-exclusive';
  name: string;
  priceDisplay: string;
  monthlyPriceUsd: number;
  trafficSummary: string;
  pageCoverage: string;
  idealFor: string;
  pillars: AdPillar[];
}

export const ACTIVE_DIRECT_SPONSORS: DirectSponsorCampaign[] = [];

export const SPONSORSHIP_PACKAGES: SponsorshipPackage[] = [
  {
    id: 'glossary-pillar',
    name: 'Glossary & Role Answers',
    priceDisplay: 'By Inquiry',
    monthlyPriceUsd: 0,
    trafficSummary: '228 published glossary definitions and executive role Q&A pages',
    pageCoverage: '/glossary (136 pages) and /answers (92 pages)',
    idealFor: 'FinOps platforms, Cloud Cost governance, and SaaS metrics software',
    pillars: ['glossary'],
  },
  {
    id: 'editorial-concepts',
    name: 'Architecture, Essays & Teardowns',
    priceDisplay: 'By Inquiry',
    monthlyPriceUsd: 0,
    trafficSummary: '396 published architecture specs, essays, comparisons, and post-mortems',
    pageCoverage: '/concepts, /blog, /articles, /compare, /framework, and /failures (396 pages)',
    idealFor: 'MCP auth, LLM observability, AI security guardrails, and developer infrastructure',
    pillars: ['blog', 'concepts'],
  },
  {
    id: 'all-three-exclusive',
    name: 'Category Exclusive (All 8 Sections)',
    priceDisplay: 'By Inquiry',
    monthlyPriceUsd: 0,
    trafficSummary: 'All 624 technical pages across 8 sections plus Monday briefing mention',
    pageCoverage: 'Full category exclusivity across /glossary, /concepts, /blog, /articles, /compare, /answers, /framework, and /failures',
    idealFor: 'Series A to Enterprise B2B vendors locking out category competitors site-wide',
    pillars: ['glossary', 'blog', 'concepts'],
  },
];

export const PILLAR_TELEMETRY: Record<
  AdPillar,
  {
    label: string;
    pageCount: number;
    houseHeadline: string;
    houseBody: string;
    audienceTitle: string;
  }
> = {
  glossary: {
    label: 'Glossary & Role Answers',
    pageCount: 228,
    houseHeadline:
      'Put your FinOps, Cloud Cost, or AI Governance platform in front of CFOs, CTOs, and VPs of Engineering.',
    houseBody:
      'Reserve a static HTML partner card across 228 glossary definitions and role Q&As (83.2% desktop search share, crawlable by ChatGPT and Perplexity). Zero tracking bloat.',
    audienceTitle: 'Finance & Platform Leadership',
  },
  blog: {
    label: 'Essays, Articles & Comparisons',
    pageCount: 228,
    houseHeadline:
      'Sponsor weekly SaaS margin and AI unit-economics teardowns read by engineering and finance leaders.',
    houseBody:
      'Place a static partner card across 228 P&L teardowns, field articles, and software comparisons with category exclusivity and zero programmatic clutter.',
    audienceTitle: 'Engineering & Product Executives',
  },
  concepts: {
    label: 'Concepts, Frameworks & Failures',
    pageCount: 168,
    houseHeadline:
      'Put your MCP auth, AI security, or developer platform alongside canonical engineering specs.',
    houseBody:
      'Place a static partner card across 168 canonical specs, security blueprints, and failure post-mortems indexed by search and AI citation engines.',
    audienceTitle: 'Principal Architects & Technical Founders',
  },
};

export const DEFAULT_ADSENSE_PUBLISHER_ID = 'ca-pub-9421469136745918';

export const DEFAULT_ADSENSE_SLOT_IDS: Record<AdPillar, string> = {
  glossary: '7790857425',
  blog: '1340340002',
  concepts: '1340340002',
};

const PUBLISHER_ID_REGEX = /^(?:ca-)?pub-(\d{10,20})$/;

const ALLOWED_EDITORIAL_PREFIXES = [
  '/glossary',
  '/blog',
  '/concepts',
  '/articles',
  '/compare',
  '/answers',
  '/framework',
  '/failures',
] as const;

export function isAdAllowedPathname(rawPathname: string | null | undefined): boolean {
  if (!rawPathname) return false;
  const pathOnly = rawPathname.split('?')[0].split('#')[0];
  const clean = pathOnly.length > 1 ? pathOnly.replace(/\/+$/, '') : pathOnly;
  if (clean.startsWith('/compare/advisory-vs-')) {
    return false;
  }
  return ALLOWED_EDITORIAL_PREFIXES.some(
    (prefix) => clean === prefix || clean.startsWith(`${prefix}/`)
  );
}

export function normalizePublisherId(raw?: string | null): string | null {
  if (!raw) return null;
  const trimmed = raw.trim();
  const match = trimmed.match(PUBLISHER_ID_REGEX);
  if (!match) return null;
  return `ca-pub-${match[1]}`;
}

export function toAdsTxtSellerId(raw?: string | null): string | null {
  if (!raw) return null;
  const trimmed = raw.trim();
  const match = trimmed.match(PUBLISHER_ID_REGEX);
  if (!match) return null;
  return `pub-${match[1]}`;
}

export function resolvePublisherId(raw?: string | null): string {
  return (
    normalizePublisherId(raw ?? process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID) ||
    DEFAULT_ADSENSE_PUBLISHER_ID
  );
}

export function resolveAdsTxtSellerId(raw?: string | null): string {
  return (
    toAdsTxtSellerId(raw ?? process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID) ||
    toAdsTxtSellerId(DEFAULT_ADSENSE_PUBLISHER_ID) ||
    'pub-9421469136745918'
  );
}

export function getAdSenseSlotId(pillar: AdPillar, overrideSlotId?: string): string | null {
  const candidate = overrideSlotId?.trim();
  if (candidate && /^\d{6,20}$/.test(candidate)) return candidate;

  const envMap: Record<AdPillar, string | undefined> = {
    glossary: process.env.NEXT_PUBLIC_ADSENSE_SLOT_GLOSSARY,
    blog: process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG,
    concepts: process.env.NEXT_PUBLIC_ADSENSE_SLOT_CONCEPTS,
  };
  const fromEnv = envMap[pillar]?.trim();
  if (fromEnv && /^\d{6,20}$/.test(fromEnv)) return fromEnv;
  return DEFAULT_ADSENSE_SLOT_IDS[pillar] ?? null;
}

export function getActiveDirectSponsor(pillar: AdPillar): DirectSponsorCampaign | null {
  return (
    ACTIVE_DIRECT_SPONSORS.find(
      (sponsor) => sponsor.active && sponsor.pillars.includes(pillar)
    ) || null
  );
}
