// Shared product catalog — single source of truth for all Stripe checkout flows
// Each product has a paymentLink that points directly to a buy.stripe.com URL
export interface Product {
    name: string;
    description: string;
    price: number; // in cents
    mode: 'payment' | 'subscription';
    interval?: 'month' | 'year';
    paymentLink: string; // Direct Stripe Payment Link URL
}

export const PRODUCTS: Record<string, Product> = {
    // --- CURRICULUM ---
    single_module: {
        name: 'Single Curriculum Module',
        description: 'Lifetime access to one complete curriculum module with all lessons, exercises, and assessments.',
        price: 2900,
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/dRm8wIcrcaLE4hv4JO2B207',
    },
    module_engineering: {
        name: 'Engineering Economics — Single Module',
        description: 'Lifetime access to one Engineering Economics curriculum module (Track 1). All lessons, exercises, and assessments.',
        price: 2900,
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/5kQ3cogHs3jc5lz3FK2B20p',
    },
    module_ai_economics: {
        name: 'AI Product Economics — Single Module',
        description: 'Lifetime access to one AI Product Economics curriculum module (Track 2). All lessons, exercises, and assessments.',
        price: 2900,
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/14A9AMaj44ng01f5NS2B20q',
    },
    module_rd_capital: {
        name: 'R&D Capital Management — Single Module',
        description: 'Lifetime access to one R&D Capital Management curriculum module (Track 3). All lessons, exercises, and assessments.',
        price: 2900,
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/5kQdR2ezk3jc01f5NS2B20r',
    },
    module_capstone: {
        name: 'Capstone Applied Practice — Single Module',
        description: 'Lifetime access to one Capstone Applied Practice curriculum module (Track 4). All lessons, exercises, and assessments.',
        price: 2900,
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/eVq3cofDobPIcO1fos2B20s',
    },
    module_bundle_3: {
        name: '3-Module Curriculum Bundle',
        description: 'Choose any 3 curriculum modules from any track. Lifetime access.',
        price: 6900,
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/eVq6oA76SaLE15jfos2B20t',
    },
    full_curriculum: {
        name: 'Full Curriculum Access — All 150 Modules',
        description: '150 modules across 10 tracks, 400+ lessons, 5 tools, certificate of completion.',
        price: 19900,
        mode: 'subscription',
        interval: 'year',
        paymentLink: 'https://buy.stripe.com/eVq00cdvgcTMeW91xC2B209',
    },
    module_devops: {
        name: 'DevOps & Platform Economics — Single Module',
        description: 'Lifetime access to one DevOps & Platform Economics module (Track 5).',
        price: 2900, mode: 'payment',
        paymentLink: 'https://buy.stripe.com/dRm8wIcrcaLE4hv4JO2B207',
    },
    module_product_mgmt: {
        name: 'Product Management Economics — Single Module',
        description: 'Lifetime access to one Product Management Economics module (Track 6).',
        price: 2900, mode: 'payment',
        paymentLink: 'https://buy.stripe.com/dRm8wIcrcaLE4hv4JO2B207',
    },
    module_security: {
        name: 'Security & Compliance Economics — Single Module',
        description: 'Lifetime access to one Security & Compliance Economics module (Track 7).',
        price: 2900, mode: 'payment',
        paymentLink: 'https://buy.stripe.com/dRm8wIcrcaLE4hv4JO2B207',
    },
    module_data: {
        name: 'Data & Analytics Economics — Single Module',
        description: 'Lifetime access to one Data & Analytics Economics module (Track 8).',
        price: 2900, mode: 'payment',
        paymentLink: 'https://buy.stripe.com/dRm8wIcrcaLE4hv4JO2B207',
    },
    module_leadership: {
        name: 'Engineering Leadership — Single Module',
        description: 'Lifetime access to one Engineering Leadership module (Track 9).',
        price: 2900, mode: 'payment',
        paymentLink: 'https://buy.stripe.com/dRm8wIcrcaLE4hv4JO2B207',
    },
    module_startup: {
        name: 'Startup Economics — Single Module',
        description: 'Lifetime access to one Startup Economics module (Track 10).',
        price: 2900, mode: 'payment',
        paymentLink: 'https://buy.stripe.com/dRm8wIcrcaLE4hv4JO2B207',
    },

    // --- GUIDES (DYNAMIC TIERS) ---
    premium_guide_29: {
        name: 'Premium Guide Access ($29 Tier)',
        description: 'Access to one premium guide.',
        price: 2900,
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/3cI7sE1My1b44hvccg2B20a', // Original Link
    },
    premium_guide_79: {
        name: 'Premium Guide Access ($79 Tier)',
        description: 'Access to one premium guide.',
        price: 7900,
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/28EbIUgHs5rkcO16RW2B20u', // Real Link
    },
    premium_guide_99: {
        name: 'Premium Guide Access ($99 Tier)',
        description: 'Access to one premium guide.',
        price: 9900,
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/28E8wI1My8DwcO19042B20v', // Real Link
    },
    premium_guide_129: {
        name: 'Premium Guide Access ($129 Tier)',
        description: 'Access to one premium guide.',
        price: 12900,
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/00w9AMaj46vobJXgsw2B20w', // Real Link
    },
    premium_guide_149: {
        name: 'Premium Flagship Guide ($149 Tier)',
        description: 'Access to one premium flagship playbook.',
        price: 14900,
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/00wfZa1Myf1U3dra482B20x', // Real Link
    },
    premium_bundle_ultimate: {
        name: 'Ultimate Guides Bundle',
        description: 'Complete access to all 13 premium guides/playbooks across all pricing tiers. Save over $500.',
        price: 39900,
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/6oUfZa1My6vodS57W02B20y', // Real Link
    },

    // --- ADVISORY (CORE TIERS) ---
    gut_check: {
        name: '30-Minute Gut-Check Call',
        description: 'Rapid-fire diagnostic: you describe the situation, I tell you if it\'s on fire. 30-minute call.',
        price: 45000,
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/eVqbIU1My8Dw01f7W02B204',
    },
    insolvency_diagnostic: {
        name: 'Insolvency Diagnostic',
        description: '60-minute Capital Exposure Assessment + Written Risk Exposure Report + 15-minute follow-up call.',
        price: 250000,
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/8x25kw62O9HA6pDb8c2B203',
    },
    ai_cost_governance: {
        name: 'AI Cost Governance',
        description: 'Dedicated AI economics analysis with unit economics model, collapse point calculation, and margin protection plan.',
        price: 500000,
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/9B64gs4YK070dS57W02B201',
    },
    strategy_session: {
        name: '1-on-1 Strategy Session',
        description: '60-minute live strategy session with Richard Ewing, Product Economist.',
        price: 50000,
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/dRm6oAbn8bPIdS5gsw2B20j',
    },
    full_audit: {
        name: 'Full R&D Capital Audit',
        description: 'Complete 3-week forensic review of R&D capital allocation and AI inference costs. Board-ready deliverable with remediation roadmap.',
        price: 750000,
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/7sY14g76ScTM7tH2BG2B202',
    },
    retainer: {
        name: 'Independent Oversight — Monthly',
        description: 'Board-level economic sanity checks: 4 hours/month, quarterly board report, continuous PDI monitoring, async access.',
        price: 500000,
        mode: 'subscription',
        interval: 'month',
        paymentLink: 'https://buy.stripe.com/14AdR24YK3jc15j4JO2B200',
    },

    // --- BOARD & FRACTIONAL LEADERSHIP ---
    board_observer: {
        name: 'Board Observer — Monthly',
        description: 'Quarterly board meeting attendance, independent technical oversight, pre-meeting prep, written assessment, async advisory.',
        price: 250000,
        mode: 'subscription',
        interval: 'month',
        paymentLink: 'https://buy.stripe.com/cNibIUbn80709BP9042B20k',
    },
    due_diligence: {
        name: 'PE/VC Due Diligence Partner',
        description: 'Pre-acquisition technical assessment, hidden liability identification, engineering team evaluation, investment committee deliverable.',
        price: 1500000,
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/00w5kwfDoaLEbJXb8c2B20l',
    },
    pe_intelligence_tier: {
        name: 'Private Equity Intelligence Tier',
        description: 'Unlimited M&A PDF Exports, Q-PEP Remediation Roadmaps, and CISO Dashboard Access.',
        price: 99900,
        mode: 'subscription',
        interval: 'year',
        paymentLink: 'https://buy.stripe.com/placeholder_pe_tier',
    },
    fractional_cpo: {
        name: 'Fractional CPO — Monthly',
        description: '2-3 days/week embedded: product strategy, roadmap ownership, engineering economics oversight, board reporting, hiring.',
        price: 1000000,
        mode: 'subscription',
        interval: 'month',
        paymentLink: 'https://buy.stripe.com/4gMcMY9f0070eW95NS2B20m',
    },

    // --- CERTIFICATION & WORKSHOPS ---
    certification: {
        name: 'Product Economist Certification (CPE)',
        description: 'Professional certification in product economics methodology. 12 modules, 48 hours, exam + curriculum access + digital certificate.',
        price: 150000,
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/aFa28k1My2f8g0ddgk2B20d',
    },
    workshop: {
        name: 'Workshop / Speaking Engagement',
        description: 'Half-day or full-day workshop on engineering economics, AI cost governance, or technical debt quantification.',
        price: 500000,
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/6oUbIUbn88DweW9gsw2B20i',
    },
    workshop_rd_masterclass: {
        name: 'R&D Capital Allocation Masterclass',
        description: '4-hour hands-on workshop (10-30 people). Teams learn to measure technical debt, calculate refactoring ROI, and build the business case.',
        price: 800000,
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/eVqdR2ezk0709BP5NS2B20e',
    },
    workshop_board_reporting: {
        name: 'Board-Ready Technical Reporting',
        description: '2-hour executive session (5-15 people). CTOs learn to present tech metrics in financial language; boards learn what to ask.',
        price: 500000,
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/8x24gs2QCdXQ29n6RW2B20f',
    },
    workshop_ai_governance: {
        name: 'AI Cost Governance Workshop',
        description: '4-hour workshop (10-25 people). Map AI spend, identify collapse points, build cost governance frameworks.',
        price: 800000,
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/aFadR2dvgf1UaFT6RW2B20g',
    },
    keynote_speaking: {
        name: 'Keynote Speaking Engagement',
        description: '45-60 minute keynote on technical debt, AI unit economics, or the subprime code crisis. Includes Q&A.',
        price: 500000,
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/bJe8wIdvgf1UcO15NS2B20h',
    },
    white_label: {
        name: 'White-Label Tool Licensing — Monthly',
        description: 'License Richard Ewing diagnostic tools (PDI, AUEB, APER, EV-SE) for your organization under your own brand.',
        price: 150000,
        mode: 'subscription',
        interval: 'month',
        paymentLink: 'https://buy.stripe.com/cNiaEQfDodXQ15j7W02B20n',
    },

    // --- PARTNERSHIPS ---
    partner_licensed: {
        name: 'Licensed Partner — Monthly',
        description: 'White-label frameworks for your consulting practice. Includes training, co-branded case studies, and tools access.',
        price: 250000,
        mode: 'subscription',
        interval: 'month',
        paymentLink: 'https://buy.stripe.com/8x26oA62O6vo4hvgsw2B20o',
    },

    // --- INDIVIDUAL PREMIUM GUIDES (all use generic premium_guide link) ---
    guide_ai_economics: {
        name: 'The AI Economics Deep Dive',
        description: 'The most comprehensive AI economics guide: token economics, model routing, Cost of Predictivity, RAG optimization, hallucination cost quantification.',
        price: 2900,
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/3cI7sE1My1b44hvccg2B20a',
    },
    guide_pe_due_diligence: {
        name: 'PE Technology Due Diligence Guide',
        description: 'Insider PE due diligence guide: 15 red flags, valuation impact, technical debt methodology, deal-killer case studies.',
        price: 2900,
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/3cI7sE1My1b44hvccg2B20a',
    },
    guide_vc_assessment: {
        name: 'VC Technology Assessment Framework',
        description: 'Technology risk evaluation before investing: technical founder assessment, velocity indicators, 10-minute diligence checklist.',
        price: 2900,
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/3cI7sE1My1b44hvccg2B20a',
    },
    guide_saas_metrics: {
        name: 'SaaS Metrics Masterclass',
        description: 'Bridge engineering metrics and SaaS financials: Rule of 40, NRR improvement, CAC payback, engineering ROI.',
        price: 2900,
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/3cI7sE1My1b44hvccg2B20a',
    },
    guide_cloud_finops: {
        name: 'Cloud FinOps & Infrastructure Economics',
        description: 'Cloud cost optimization: right-sizing, reserved instances, spot architecture, FinOps team structure, 12-week savings program.',
        price: 2900,
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/3cI7sE1My1b44hvccg2B20a',
    },
    guide_ai_governance: {
        name: 'AI Governance & Audit Framework',
        description: 'Comprehensive compliance preparation for the EU AI Act and SOC 2 AI controls.',
        price: 2900, mode: 'payment',
        paymentLink: 'https://buy.stripe.com/3cI7sE1My1b44hvccg2B20a',
    },
    guide_eng_due_diligence_2026: {
        name: 'Engineering Due Diligence for M&A 2026',
        description: 'Complete PE/VC checklist for assessing modern AI-enabled engineering organizations.',
        price: 2900, mode: 'payment',
        paymentLink: 'https://buy.stripe.com/3cI7sE1My1b44hvccg2B20a',
    },
    guide_cybersecurity_economics: {
        name: 'Cybersecurity Economics Playbook',
        description: 'Translating cyber risk, zero trust architectures, and breach prevention into CFO-ready financial modeling.',
        price: 2900, mode: 'payment',
        paymentLink: 'https://buy.stripe.com/3cI7sE1My1b44hvccg2B20a',
    },
    guide_ai_talent_strategy: {
        name: 'AI Talent Strategy & Compensation Guide',
        description: 'Hiring, retaining, and evaluating ML engineers in a hyper-competitive market context.',
        price: 2900, mode: 'payment',
        paymentLink: 'https://buy.stripe.com/3cI7sE1My1b44hvccg2B20a',
    },
    guide_consumption_pricing: {
        name: 'Consumption-Based Pricing Playbook',
        description: 'How to transition SaaS models to usage-based billing without destroying customer retention.',
        price: 2900, mode: 'payment',
        paymentLink: 'https://buy.stripe.com/3cI7sE1My1b44hvccg2B20a',
    },
    guide_agentic_ai_cost: {
        name: 'Agentic AI Cost Guide',
        description: 'Determine the exact unit economics and API inference burndown rates of autonomous LLM agents.',
        price: 2900, mode: 'payment',
        paymentLink: 'https://buy.stripe.com/3cI7sE1My1b44hvccg2B20a',
    },
    guide_cloud_finops_playbook: {
        name: 'Cloud FinOps Playbook',
        description: 'Strategic right-sizing frameworks and financial alignment for multi-cloud enterprise deployments.',
        price: 2900, mode: 'payment',
        paymentLink: 'https://buy.stripe.com/3cI7sE1My1b44hvccg2B20a',
    },
    guide_eng_productivity_metrics: {
        name: 'Engineering Productivity Metrics 2026',
        description: 'DORA and SPACE are a start, but incomplete. See how high-performing teams measure true leverage.',
        price: 2900, mode: 'payment',
        paymentLink: 'https://buy.stripe.com/3cI7sE1My1b44hvccg2B20a',
    },
    guide_ai_coding_roi: {
        name: 'AI Coding Tools ROI Calculator',
        description: 'Precisely quantify the economic return on GitHub Copilot, Cursor, and AI-enabled IDP investments.',
        price: 2900, mode: 'payment',
        paymentLink: 'https://buy.stripe.com/3cI7sE1My1b44hvccg2B20a',
    },
    guide_green_software: {
        name: 'Green Software Engineering Economics',
        description: 'Balancing ESG commitments with infrastructure cost realities in high-compute AI environments.',
        price: 2900, mode: 'payment',
        paymentLink: 'https://buy.stripe.com/3cI7sE1My1b44hvccg2B20a',
    },
};
