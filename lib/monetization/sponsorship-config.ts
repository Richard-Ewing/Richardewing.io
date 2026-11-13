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
    name: 'Glossary Pillar Exclusive',
    priceDisplay: '$1,500/mo',
    monthlyPriceUsd: 1500,
    trafficSummary: '6,480 monthly human reads across 122 glossary and pillar pages',
    pageCoverage: '/glossary, /glossary/pillars/*, and /glossary/[slug]',
    idealFor: 'FinOps platforms, Cloud Cost governance, and SaaS metrics software',
    pillars: ['glossary'],
  },
  {
    id: 'editorial-concepts',
    name: 'Essays & Canonical Concepts',
    priceDisplay: '$1,500/mo',
    monthlyPriceUsd: 1500,
    trafficSummary: '7,210 monthly human reads across 253 blog essays and canonical concept specs',
    pageCoverage: '/blog/* (3,620 reads) and /concepts/* (3,590 reads)',
    idealFor: 'LLM observability, AI guardrails, and engineering intelligence tools',
    pillars: ['blog', 'concepts'],
  },
  {
    id: 'all-three-exclusive',
    name: 'Category Exclusive Bundle (All 3 Sections)',
    priceDisplay: '$2,500/mo',
    monthlyPriceUsd: 2500,
    trafficSummary: '13,690 monthly human reads across all 375 technical pages plus Monday briefing mention',
    pageCoverage: 'Full share-of-voice across /glossary/*, /blog/*, and /concepts/*',
    idealFor: 'Series A to Enterprise B2B vendors replacing low-intent banner buys',
    pillars: ['glossary', 'blog', 'concepts'],
  },
];

export const PILLAR_TELEMETRY: Record<
  AdPillar,
  {
    label: string;
    monthlyReads: number;
    pageCount: number;
    houseHeadline: string;
    houseBody: string;
    audienceTitle: string;
  }
> = {
  glossary: {
    label: 'Glossary & Pillars',
    monthlyReads: 6480,
    pageCount: 122,
    houseHeadline:
      'Put your FinOps, Cloud Cost, or AI Governance platform in front of CFOs, CTOs, and VPs of Engineering.',
    houseBody:
      'Reserve a native editorial card across 122 glossary definitions and pillar guides reading 6,480 verified human sessions every 30 days. Zero tracking bloat.',
    audienceTitle: 'Finance & Platform Leadership',
  },
  blog: {
    label: 'Research Blog & Teardowns',
    monthlyReads: 3620,
    pageCount: 131,
    houseHeadline:
      'Sponsor weekly SaaS margin and AI unit-economics teardowns read by engineering and finance leaders.',
    houseBody:
      'Reach 3,620 monthly human readers across 131 long-form P&L teardowns and architectural audits with flat-rate category exclusivity.',
    audienceTitle: 'Engineering & Product Executives',
  },
  concepts: {
    label: 'Canonical Research Specs',
    monthlyReads: 3590,
    pageCount: 122,
    houseHeadline:
      'Place your developer or AI infrastructure tool alongside canonical software economics specifications.',
    houseBody:
      'Connect with 3,590 monthly technical buyers evaluating runtime governance, cost attribution, and software capital controls across 122 concept pages.',
    audienceTitle: 'Principal Architects & Technical Founders',
  },
};

export const DEFAULT_ADSENSE_PUBLISHER_ID = 'ca-pub-9421469136745918';

const PUBLISHER_ID_REGEX = /^(?:ca-)?pub-(\d{10,20})$/;

export function isAdAllowedPathname(rawPathname: string | null | undefined): boolean {
  if (!rawPathname) return false;
  const pathOnly = rawPathname.split('?')[0].split('#')[0];
  const clean = pathOnly.length > 1 ? pathOnly.replace(/\/+$/, '') : pathOnly;
  return (
    clean === '/glossary' ||
    clean.startsWith('/glossary/') ||
    clean === '/blog' ||
    clean.startsWith('/blog/') ||
    clean === '/concepts' ||
    clean.startsWith('/concepts/')
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
  return null;
}

export function getActiveDirectSponsor(pillar: AdPillar): DirectSponsorCampaign | null {
  return (
    ACTIVE_DIRECT_SPONSORS.find(
      (sponsor) => sponsor.active && sponsor.pillars.includes(pillar)
    ) || null
  );
}
