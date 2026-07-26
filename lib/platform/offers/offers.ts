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
    name: 'AI Economics Assessment & Benchmark',
    badge: 'Free Self-Service Tool',
    tagline: '15-Question AI Cost & Governance Score',
    description: 'Answer 15 quantitative questions about your AI infrastructure, cost visibility, and governance maturity. Get an instant score and downloadable benchmark report.',
    price: 0,
    currency: 'USD',
    billingPeriod: 'one_time',
    stage: 'entry',
    audience: ['CTOs', 'VPs of Engineering', 'CFOs', 'PE Operating Partners'],
    objective: 'Qualify AI cost visibility and governance maturity in 5 minutes.',
    deliverables: [
      '0-100 AI Economics Score',
      '5-Dimension Maturity Breakdown',
      'Estimated Dollar Margin Leakage',
      'Executive PDF Benchmark Report'
    ],
    primaryCTA: {
      label: 'Take Free Assessment →',
      href: '/assessment',
      action: 'route'
    },
    followUpOfferId: 'gut_check'
  },
  gut_check: {
    id: 'gut_check',
    name: 'Rapid Gut-Check Evaluation',
    badge: '30-Min Rapid Sync',
    tagline: 'Immediate Executive Cloud & Velocity Sanity Check',
    description: 'Not sure if your AI bills or engineering velocity are out of control? A rapid 30-minute diagnostic session to analyze AWS bills, API commitments, and unit economics.',
    price: 450,
    currency: 'USD',
    billingPeriod: 'one_time',
    stage: 'diagnostic',
    audience: ['Founders', 'CTOs', 'VPs of Engineering'],
    objective: 'Locate immediate architectural cost traps and verify building status.',
    deliverables: [
      '30-minute 1-on-1 executive sync',
      'Immediate cost leak identification',
      'Next-step remediation recommendations'
    ],
    primaryCTA: {
      label: 'Schedule Evaluation →',
      productId: 'gut_check',
      action: 'checkout'
    },
    followUpOfferId: 'insolvency_diagnostic'
  },
  insolvency_diagnostic: {
    id: 'insolvency_diagnostic',
    name: '60-Min Technical Insolvency Audit',
    badge: 'Tactical Session',
    tagline: 'Locate Capital Leaks & Formulate Immediate Reduction Plans',
    description: 'Deep-dive session for teams with high Product Debt Index (PDI) or spiraling API costs. We analyze architecture bottlenecks and map out a 30-day capital recovery roadmap.',
    price: 2500,
    currency: 'USD',
    billingPeriod: 'one_time',
    stage: 'strategic_audit',
    audience: ['CTOs', 'CFOs', 'VPs of Engineering'],
    objective: 'Calculate exact Technical Insolvency Date and stop active margin bleeding.',
    deliverables: [
      '60-minute intensive technical working session',
      'Product Debt Index (PDI) breakdown',
      '30-day action plan for cost cap enforcement'
    ],
    primaryCTA: {
      label: 'Book Insolvency Audit →',
      productId: 'insolvency_diagnostic',
      action: 'checkout'
    },
    followUpOfferId: 'rd_capital_audit'
  },
  hallucination_tax_audit: {
    id: 'hallucination_tax_audit',
    name: 'R&D Capital & Hallucination Audit',
    badge: 'Specialized Audit',
    tagline: 'Full 3-Week Forensic Codebase & Cost Audit',
    description: 'Engineers spend an average of 4.3 hrs/week manually validating non-deterministic model outputs. We measure total verification overhead and design runtime cost caps.',
    price: 7500,
    currency: 'USD',
    billingPeriod: 'one_time',
    stage: 'capital_audit',
    audience: ['VPs of Engineering', 'Chief Product Officers', 'CFOs'],
    objective: 'Eliminate wasted manual verification labor and enforce deterministic bounds.',
    deliverables: [
      'Full codebase & workflow verification analysis',
      '40-Page Written Executive Audit Package',
      'Board-Ready Remediation Plan'
    ],
    primaryCTA: {
      label: 'Book R&D Capital Audit →',
      productId: 'full_audit',
      action: 'checkout'
    },
    followUpOfferId: 'advisory_retainer'
  },
  tech_due_diligence: {
    id: 'tech_due_diligence',
    name: 'M&A Technical Due Diligence',
    badge: 'PE & M&A Focused',
    tagline: '2-Week Forensic Code Audit & Risk Assessment',
    description: 'For Private Equity & Search Funds: Before signing term sheets, evaluate target SaaS architecture, Product Debt Index (PDI), and hidden AI API liabilities.',
    price: 15000,
    currency: 'USD',
    billingPeriod: 'one_time',
    stage: 'capital_audit',
    audience: ['PE Operating Partners', 'M&A Deal Leads', 'Search Funds'],
    objective: 'Uncover architectural blindspots and quantify post-acquisition remediation cost.',
    deliverables: [
      '2-week intensive code & infrastructure audit',
      'Investment thesis risk matrix & PDI evaluation',
      'Board-ready deal report'
    ],
    primaryCTA: {
      label: 'Inquire M&A Availability →',
      href: 'mailto:richardewing@exogram.ai?subject=Inquiry: Tech Due Diligence',
      action: 'email'
    }
  },
  advisory_retainer: {
    id: 'advisory_retainer',
    name: 'Enterprise Advisory & Governance Integration',
    badge: 'Fractional CPO/CTO Retainer',
    tagline: 'Guarantee Strict Cost Caps & Audit-Ready Governance',
    description: 'Specialized engineering taskforce integration to install deterministic runtime governance, enforce hard API cost ceilings, and eliminate shadow AI liabilities.',
    price: 10000,
    currency: 'USD',
    billingPeriod: 'monthly',
    stage: 'retainer',
    audience: ['Scale-up Founders', 'CTOs', 'PE Portfolio Executives'],
    objective: 'Guarantee zero billing shock and install VPC-level AI governance.',
    deliverables: [
      'Dedicated fractional executive & engineering taskforce',
      'Deterministic runtime governance installation',
      'Monthly unit economics & board-ready reporting',
      'VPC model repatriation & data leak elimination'
    ],
    primaryCTA: {
      label: 'Enforce Cost Caps →',
      href: 'mailto:richardewing@exogram.ai?subject=Inquiry: Enterprise Retainer',
      action: 'email'
    },
    highlighted: true
  }
};

export const COMMERCIAL_OFFERS: Record<string, CommercialOffer> = {
  ...baseOffers,
  hallucination_audit: baseOffers.hallucination_tax_audit,
  rd_capital_audit: baseOffers.hallucination_tax_audit,
};
