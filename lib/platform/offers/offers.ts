/**
 * AI Economics Commercial Knowledge Platform - Centralized Dynamic Offer Configuration
 * Subsystem: /lib/platform/offers
 */

export interface CommercialOffer {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  description: string;
  price: number;
  currency: string;
  billingPeriod?: 'one_time' | 'monthly' | 'annual';
  stage: 'entry' | 'diagnostic' | 'strategic_audit' | 'capital_audit' | 'retainer';
  audience: string[];
  objective: string;
  prerequisites?: string;
  deliverables: string[];
  primaryCTA: {
    label: string;
    href?: string;
    productId?: string;
    action: 'checkout' | 'modal' | 'route' | 'email';
  };
  followUpOfferId?: string;
  highlighted?: boolean;
}

const baseOffers: Record<string, CommercialOffer> = {
  free_assessment: {
    id: 'free_assessment',
    name: 'Free AI & Product P&L Calculators',
    badge: '25 Free Interactive Tools',
    tagline: 'Instant Margin, Pricing & Product Debt Diagnostics',
    description: 'Run the live AI Unit Economics Benchmark (AUEB), Product Debt Index (PDI), and Revenue-Per-Engineer (APER) calculators. Get an instant score and boardroom PDF export with zero paywall.',
    price: 0,
    currency: 'USD',
    billingPeriod: 'one_time',
    stage: 'entry',
    audience: ['CPOs', 'VPs of Product', 'CTOs', 'CFOs', 'Directors of Product'],
    objective: 'Quantify AI margin leaks, pricing traps, and roadmap debt in 60 seconds.',
    deliverables: [
      'Live AI Unit Economics & Gross Margin Stress-Test',
      'Product Debt Index (PDI) & Zombie Feature Calculator',
      'Revenue-Per-Engineer (APER) Industry Benchmark',
      'Instant Board-Ready PDF Scorecard Export'
    ],
    primaryCTA: {
      label: 'Open Free Diagnostic Tools →',
      href: '/diagnose',
      action: 'route'
    },
    followUpOfferId: 'operating_kit'
  },
  operating_kit: {
    id: 'operating_kit',
    name: 'The Product & AI Economist Operating Kit',
    badge: 'Best Seller • Instant Download',
    tagline: '5 Working P&L Models, Pricing Calculators & Board Decks',
    description: 'Zero fluff. The exact spreadsheet formulas, AI feature pricing stress-testers, Zombie Feature kill-lists, and 12-slide CFO board deck templates I used to scale $0 to $25M ARR, drive 200% YoY growth, and cut $5M in product waste.',
    price: 29,
    currency: 'USD',
    billingPeriod: 'one_time',
    stage: 'entry',
    audience: ['VPs of Product', 'Directors of Product', 'Senior PMs', 'CTOs', 'Engineering Managers', 'Founders'],
    objective: 'Walk into your next CFO, CEO, or Board meeting with undeniable P&L math.',
    deliverables: [
      'AI Feature Pricing & Token Margin Stress-Tester (CSV/Excel + Interactive)',
      'The "Zombie Feature" Kill-List & Backlog ROI Scoring Matrix',
      '12-Slide CFO & Board Defense Deck Blueprint (Copy-Paste Templates)',
      'First-30-Days Product P&L Turnaround Runbook (Day-by-Day Checklist)',
      'The Product Economist Executive Interview & Comp Negotiation Guide'
    ],
    primaryCTA: {
      label: 'Get Instant Access ($29) →',
      href: '/toolkit',
      productId: 'premium_guide_29',
      action: 'route'
    },
    followUpOfferId: 'gut_check',
    highlighted: true
  },
  gut_check: {
    id: 'gut_check',
    name: 'AI Product P&L, Pricing & Roadmap Tear-Down',
    badge: '1-on-1 Working Session',
    tagline: 'Fix Your AI Pricing, Margin Leaks & Stagnant Roadmap Live',
    description: 'Bring your product pricing page, AI feature costs, and current roadmap. In a live 1-on-1 working session, we pinpoint why your AI features are compressing gross margins, which 30% of your backlog is dead weight, and how to restructure your tiers for immediate profitable growth.',
    price: 450,
    currency: 'USD',
    billingPeriod: 'one_time',
    stage: 'diagnostic',
    audience: ['Founders', 'CEOs', 'CPOs', 'VPs of Product', 'CTOs'],
    objective: 'Turn an unprofitable AI roadmap into a high-margin revenue engine.',
    deliverables: [
      'Live 1-on-1 Product P&L & Pricing Tear-Down with Richard Ewing',
      'Seat vs. Usage vs. Outcome AI Pricing Tier Restructure',
      'Immediate "Zombie Feature" Cut-List to Free Up Engineering Capacity',
      'Actionable 30-Day Margin & Velocity Recovery Blueprint'
    ],
    primaryCTA: {
      label: 'Book 1-on-1 Tear-Down ($450) →',
      productId: 'gut_check',
      action: 'checkout'
    },
    followUpOfferId: 'insolvency_diagnostic'
  },
  insolvency_diagnostic: {
    id: 'insolvency_diagnostic',
    name: 'Product P&L & Roadmap Turnaround Sprint',
    badge: 'Executive Turnaround',
    tagline: 'Full Backlog ROI Scoring, Pricing Redesign & Board Defense',
    description: 'For B2B SaaS leaders facing flat ARR, rising cloud/AI costs, or board pressure. I apply the exact turnaround playbook used to drive 200% YoY growth to $20M and cut $5M in waste: auditing feature-level ROI, redesigning AI monetization, and building your board defense package.',
    price: 2500,
    currency: 'USD',
    billingPeriod: 'one_time',
    stage: 'strategic_audit',
    audience: ['CEOs', 'CFOs', 'CPOs', 'VPs of Product', 'PE Operating Partners'],
    objective: 'Eliminate negative-margin roadmap work and align product shipping with EBITDA.',
    deliverables: [
      'Feature-by-Feature Backlog ROI & Maintenance Carry Audit',
      'Complete AI Packaging, Tiering & Gross Margin Model',
      '90-Day Product Turnaround & Capacity Reallocation Plan',
      'Executive Readout & Board-Ready P&L Presentation Deck'
    ],
    primaryCTA: {
      label: 'Book Turnaround Sprint ($2,500) →',
      productId: 'insolvency_diagnostic',
      action: 'checkout'
    },
    followUpOfferId: 'hallucination_tax_audit'
  },
  hallucination_tax_audit: {
    id: 'hallucination_tax_audit',
    name: '0-to-1 AI Product & Authority Engine Sprint',
    badge: 'Hands-On Architecture & Build',
    tagline: 'From Concept to Live Production AI System & Diagnostic Funnel',
    description: 'Most agencies charge $50K and take 6 months to build a slide deck. As the founder and architect of Exogram.ai (AWS Startups Showcase), CareerWin.ai, and RichardEwing.io, I partner with you to architect and ship a live 0-to-1 AI product, interactive diagnostic calculator funnel, or AEO/GEO authority engine.',
    price: 7500,
    currency: 'USD',
    billingPeriod: 'one_time',
    stage: 'capital_audit',
    audience: ['Founders', 'CEOs', 'VPs of Product', 'B2B Category Leaders'],
    objective: 'Ship a production-grade AI application or interactive buyer diagnostic engine in weeks.',
    deliverables: [
      'Full 0-to-1 Product Architecture, Unit Economics & Monetization Spec',
      'Interactive Diagnostic Tool or AI Workflow Prototype (Next.js / Edge / LLM)',
      'AEO / GEO / AI Search Citation Schema & Programmatic Authority Setup',
      'Direct Executive Hand-Off & Go-To-Market Launch Playbook'
    ],
    primaryCTA: {
      label: 'Inquire About 0-to-1 Build Sprint →',
      href: 'mailto:richardewing@exogram.ai?subject=Inquiry:%200-to-1%20AI%20Product%20Sprint',
      productId: 'full_audit',
      action: 'checkout'
    },
    followUpOfferId: 'advisory_retainer'
  },
  sponsored_research: {
    id: 'sponsored_research',
    name: 'Sponsored Benchmark Research & Executive Briefings',
    badge: 'B2B Media & Analyst Authority',
    tagline: 'Reach 11,141+ Tech Leaders, 1,400+ Subscribers & AI Search Engines',
    description: 'Enterprise buyers ignore generic vendor blog posts. Partner with a published CIO.com, Built In, Mind the Product, and HackerNoon author (174+ works, 778+ AI search citations) for independent economic teardowns, co-branded benchmark studies, executive briefings, and newsletter sponsorships.',
    price: 2500,
    currency: 'USD',
    billingPeriod: 'one_time',
    stage: 'strategic_audit',
    audience: ['AI Infrastructure Vendors', 'FinOps & DevTools CMOs', 'B2B SaaS Founders', 'VC Platform Teams'],
    objective: 'Earn high-trust executive authority, third-party economist validation, and LLM citation visibility.',
    deliverables: [
      'Independent Economic Teardown or Co-Branded Industry Benchmark Report',
      'Dedicated Distribution to 1,400+ Executive Subscribers & 11,141+ LinkedIn Followers',
      'AEO / GEO Structured Schema for Long-Term Perplexity & ChatGPT Citation',
      'Optional Executive Webinar, Keynote, or Customer Advisory Roundtable'
    ],
    primaryCTA: {
      label: 'Request Media & Research Kit →',
      href: 'mailto:richardewing@exogram.ai?subject=Sponsored%20Research%20%26%20Partnership%20Inquiry',
      action: 'email'
    }
  },
  tech_due_diligence: {
    id: 'tech_due_diligence',
    name: 'PE & M&A Product P&L Due Diligence',
    badge: 'PE & M&A Advisory',
    tagline: '2-Week Product, Pricing & Unit Economics Diligence',
    description: 'For Private Equity Operating Partners, Search Funds, and Acquirers: Before signing term sheets, evaluate the target company\'s true product P&L, AI gross margin sustainability, pricing power, and hidden maintenance liabilities.',
    price: 15000,
    currency: 'USD',
    billingPeriod: 'one_time',
    stage: 'capital_audit',
    audience: ['PE Operating Partners', 'M&A Deal Leads', 'Search Funds', 'Corporate Development'],
    objective: 'Validate post-acquisition pricing power, margin expansion levers, and 100-day product turnaround plan.',
    deliverables: [
      '2-Week Product P&L, Pricing & Backlog Economics Diligence',
      'AI Gross Margin & Vendor Lock-In Risk Assessment',
      'Post-Close 100-Day Value Creation & Cost Reduction Roadmap',
      'Investment Committee Written Deliverable & Live Partner Briefing'
    ],
    primaryCTA: {
      label: 'Inquire M&A Availability →',
      href: 'mailto:richardewing@exogram.ai?subject=Inquiry:%20PE%20Product%20Due%20Diligence',
      action: 'email'
    }
  },
  advisory_retainer: {
    id: 'advisory_retainer',
    name: 'Fractional CPO / AI Product Strategist Retainer',
    badge: 'Fractional Executive Leadership',
    tagline: 'Embedded Product P&L Ownership, AI Monetization & Board Strategy',
    description: 'Strictly capped at 4 active companies per quarter. I embed directly with your CEO, CFO, and CTO as a Fractional CPO or Principal AI Product Strategist - owning product P&L translation, AI pricing architecture, roadmap prioritization, and board reporting.',
    price: 10000,
    currency: 'USD',
    billingPeriod: 'monthly',
    stage: 'retainer',
    audience: ['CEOs', 'Founders', 'PE Portfolio Companies', 'Enterprise Product Orgs'],
    objective: 'Install proven $25M ARR product leadership without a 6-month executive search.',
    deliverables: [
      'Embedded Weekly Executive Product, Pricing & P&L Leadership',
      'Direct Roadmap Prioritization & Zombie Feature Elimination',
      'AI Monetization, Tier Packaging & Gross Margin Governance',
      'Monthly CFO & Board-Ready Product P&L Reporting'
    ],
    primaryCTA: {
      label: 'Book Free 15-Min Intro Call →',
      href: 'mailto:richardewing@exogram.ai?subject=Fractional%20CPO%20%2F%20Executive%20Advisory%20Intro',
      action: 'email'
    },
    highlighted: true
  }
};

export const COMMERCIAL_OFFERS: Record<string, CommercialOffer & { subtitle: string; features: string[] }> = Object.fromEntries(
  Object.entries({
    ...baseOffers,
    hallucination_audit: baseOffers.hallucination_tax_audit,
    rd_capital_audit: baseOffers.hallucination_tax_audit,
  }).map(([key, offer]) => [
    key,
    {
      ...offer,
      subtitle: offer.tagline,
      features: offer.deliverables,
    },
  ])
);

