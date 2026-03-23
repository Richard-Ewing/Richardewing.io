// Shared product catalog — single source of truth for all Stripe checkout flows
export interface Product {
    name: string;
    description: string;
    price: number; // in cents
    mode: 'payment' | 'subscription';
    interval?: 'month' | 'year';
}

export const PRODUCTS: Record<string, Product> = {
    // --- CURRICULUM ---
    single_module: {
        name: 'Single Curriculum Module',
        description: 'Access to one complete curriculum module with all lessons, exercises, and assessments.',
        price: 4900,
        mode: 'payment',
    },
    module_bundle_3: {
        name: '3-Module Curriculum Bundle',
        description: 'Access to any 3 curriculum modules. Choose your tracks after purchase.',
        price: 11900,
        mode: 'payment',
    },
    full_curriculum: {
        name: 'Full Curriculum Access — All 60 Modules',
        description: '60 modules, 150+ lessons, 5 tools, certificate of completion.',
        price: 19900,
        mode: 'subscription',
        interval: 'year',
    },

    // --- GUIDES ---
    premium_guide: {
        name: 'Premium Guide Access',
        description: 'Access to one premium guide: AI Economics, PE Due Diligence, SaaS Metrics, VC Assessment, or Cloud FinOps.',
        price: 2900,
        mode: 'payment',
    },
    premium_bundle: {
        name: 'All 5 Premium Guides Bundle',
        description: 'All 5 premium guides (AI Economics, PE Due Diligence, VC Assessment, SaaS Metrics, Cloud FinOps). Save 32% vs buying individually.',
        price: 9900,
        mode: 'payment',
    },
    premium_bundle_3: {
        name: '3-Guide Bundle — Pick Any 3',
        description: 'Choose any 3 premium guides. Save 21% vs buying individually.',
        price: 6900,
        mode: 'payment',
    },

    // --- ADVISORY (CORE TIERS) ---
    gut_check: {
        name: '30-Minute Gut-Check Call',
        description: 'Rapid-fire diagnostic: you describe the situation, I tell you if it\'s on fire. 30-minute call.',
        price: 45000,
        mode: 'payment',
    },
    insolvency_diagnostic: {
        name: 'Insolvency Diagnostic',
        description: '60-minute Capital Exposure Assessment + Written Risk Exposure Report + 15-minute follow-up call.',
        price: 250000,
        mode: 'payment',
    },
    ai_cost_governance: {
        name: 'AI Cost Governance',
        description: 'Dedicated AI economics analysis with unit economics model, collapse point calculation, and margin protection plan.',
        price: 500000,
        mode: 'payment',
    },
    strategy_session: {
        name: '1-on-1 Strategy Session',
        description: '60-minute live strategy session with Richard Ewing, Product Economist.',
        price: 50000,
        mode: 'payment',
    },
    full_audit: {
        name: 'Full R&D Capital Audit',
        description: 'Complete 3-week forensic review of R&D capital allocation and AI inference costs. Board-ready deliverable with remediation roadmap.',
        price: 750000,
        mode: 'payment',
    },
    retainer: {
        name: 'Independent Oversight — Monthly',
        description: 'Board-level economic sanity checks: 4 hours/month, quarterly board report, continuous PDI monitoring, async access.',
        price: 500000,
        mode: 'subscription',
        interval: 'month',
    },

    // --- BOARD & FRACTIONAL LEADERSHIP ---
    board_observer: {
        name: 'Board Observer — Monthly',
        description: 'Quarterly board meeting attendance, independent technical oversight, pre-meeting prep, written assessment, async advisory.',
        price: 250000,
        mode: 'subscription',
        interval: 'month',
    },
    due_diligence: {
        name: 'PE/VC Due Diligence Partner',
        description: 'Pre-acquisition technical assessment, hidden liability identification, engineering team evaluation, investment committee deliverable.',
        price: 1500000,
        mode: 'payment',
    },
    fractional_cpo: {
        name: 'Fractional CPO — Monthly',
        description: '2-3 days/week embedded: product strategy, roadmap ownership, engineering economics oversight, board reporting, hiring.',
        price: 1000000,
        mode: 'subscription',
        interval: 'month',
    },

    // --- CERTIFICATION & WORKSHOPS ---
    certification: {
        name: 'Product Economist Certification (CPE)',
        description: 'Professional certification in product economics methodology. Exam + curriculum access + digital certificate.',
        price: 150000,
        mode: 'payment',
    },
    workshop: {
        name: 'Workshop / Speaking Engagement',
        description: 'Half-day or full-day workshop on engineering economics, AI cost governance, or technical debt quantification.',
        price: 500000,
        mode: 'payment',
    },
    workshop_rd_masterclass: {
        name: 'R&D Capital Allocation Masterclass',
        description: '4-hour hands-on workshop (10-30 people). Teams learn to measure technical debt, calculate refactoring ROI, and build the business case.',
        price: 800000,
        mode: 'payment',
    },
    workshop_board_reporting: {
        name: 'Board-Ready Technical Reporting',
        description: '2-hour executive session (5-15 people). CTOs learn to present tech metrics in financial language; boards learn what to ask.',
        price: 500000,
        mode: 'payment',
    },
    workshop_ai_governance: {
        name: 'AI Cost Governance Workshop',
        description: '4-hour workshop (10-25 people). Map AI spend, identify collapse points, build cost governance frameworks.',
        price: 800000,
        mode: 'payment',
    },
    keynote_speaking: {
        name: 'Keynote Speaking Engagement',
        description: '45-60 minute keynote on technical debt, AI unit economics, or the subprime code crisis. Includes Q&A.',
        price: 500000,
        mode: 'payment',
    },
    white_label: {
        name: 'White-Label Tool Licensing — Monthly',
        description: 'License Richard Ewing diagnostic tools (PDI, AUEB, APER, EV-SE) for your organization under your own brand.',
        price: 150000,
        mode: 'subscription',
        interval: 'month',
    },

    // --- PARTNERSHIPS ---
    partner_licensed: {
        name: 'Licensed Partner — Monthly',
        description: 'White-label frameworks for your consulting practice. Includes training, co-branded case studies, and tools access.',
        price: 250000,
        mode: 'subscription',
        interval: 'month',
    },

    // --- INDIVIDUAL PREMIUM GUIDES ---
    guide_ai_economics: {
        name: 'The AI Economics Deep Dive',
        description: 'The most comprehensive AI economics guide: token economics, model routing, Cost of Predictivity, RAG optimization, hallucination cost quantification.',
        price: 2900,
        mode: 'payment',
    },
    guide_pe_due_diligence: {
        name: 'PE Technology Due Diligence Guide',
        description: 'Insider PE due diligence guide: 15 red flags, valuation impact, technical debt methodology, deal-killer case studies.',
        price: 2900,
        mode: 'payment',
    },
    guide_vc_assessment: {
        name: 'VC Technology Assessment Framework',
        description: 'Technology risk evaluation before investing: technical founder assessment, velocity indicators, 10-minute diligence checklist.',
        price: 2900,
        mode: 'payment',
    },
    guide_saas_metrics: {
        name: 'SaaS Metrics Masterclass',
        description: 'Bridge engineering metrics and SaaS financials: Rule of 40, NRR improvement, CAC payback, engineering ROI.',
        price: 2900,
        mode: 'payment',
    },
    guide_cloud_finops: {
        name: 'Cloud FinOps & Infrastructure Economics',
        description: 'Cloud cost optimization: right-sizing, reserved instances, spot architecture, FinOps team structure, 12-week savings program.',
        price: 2900,
        mode: 'payment',
    },
};

