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
    // --- UNIFIED ENTERPRISE PASS ---
    all_access_pass: {
        name: 'All-Access Vault Pass',
        description: 'Instant, lifetime access to all 13 authority tracks, 160+ framework modules, strategic enterprise tools, and continuously updating intelligence.',
        price: 99900, // $999.00
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/9B600c8aW3jc3drdgk2B20z', // Dynamically Generated Live Link
    },
    team_license_pass: {
        name: 'Enterprise Team License (10 Seats)',
        description: 'B2B Corporate access. Instantly provision up to 10 seats of the All-Access Vault Pass for your engineering leadership and PM layer.',
        price: 499900, // $4,999.00
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/4gMbIU4YK9HAeW9eko2B20A', // Dynamically Generated Live Link
    },
    // --- DIAGNOSTIC TOOLS ---
    tools_library_unlock: {
        name: 'Diagnostic Tools Library Unlock',
        description: 'Unlimited access to all diagnostic tools (PDI, AUEB, APER, EV-SE). Generate unlimited board-ready reports.',
        price: 19900, // $199.00
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/9B6aEQ1My3jceW9b8c2B20D',
    },
    // --- CURRICULUM ---
    single_track: {
        name: 'Single Curriculum Track',
        description: 'Lifetime access to one complete curriculum track with all modules, lessons, exercises, and assessments.',
        price: 14900, // $149.00
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/00wfZa1Myf1U3dra482B20x',
    },
    module_engineering: {
        name: 'Engineering Economics — Track Access',
        description: 'Lifetime access to the Engineering Economics Foundations track (Track 1). All 16 modules, lessons, and assessments.',
        price: 14900, // $149.00
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/00wfZa1Myf1U3dra482B20x',
    },
    module_ai_economics: {
        name: 'AI AI Economics — Track Access',
        description: 'Lifetime access to the AI AI Economics track (Track 2). All 16 modules, lessons, and assessments.',
        price: 14900, // $149.00
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/14A9AMaj44ng01f5NS2B20q',
    },
    module_rd_capital: {
        name: 'R&D Capital Management — Track Access',
        description: 'Lifetime access to the R&D Capital Management track (Track 3). All 15 modules, lessons, and assessments.',
        price: 14900, // $149.00
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/5kQdR2ezk3jc01f5NS2B20r',
    },
    module_capstone: {
        name: 'Capstone Applied Practice — Track Access',
        description: 'Lifetime access to the Capstone & Applied Practice track (Track 4). All 15 modules, lessons, and assessments.',
        price: 14900, // $149.00
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/eVq3cofDobPIcO1fos2B20s',
    },
    module_bundle_3: {
        name: '3-Track Curriculum Bundle',
        description: 'Choose any 3 curriculum tracks. Lifetime access to all included modules.',
        price: 34900, // $349.00 (save $98)
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/eVq6oA76SaLE15jfos2B20t',
    },
    full_curriculum: {
        name: 'Full Curriculum Bundle — All 23 Tracks',
        description: 'All 23 authority tracks, 293 modules, 400+ lessons, all diagnostic tools, lifetime access.',
        price: 99900, // $999.00
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/9B600c8aW3jc3drdgk2B20z',
    },
    module_cto: {
        name: 'Engineering Leader / CTO — Track Access',
        description: 'Lifetime access to the Engineeering Leader / CTO track.',
        price: 14900, mode: 'payment',
        paymentLink: 'https://buy.stripe.com/00wfZa1Myf1U3dra482B20x',
    },
    module_pm: {
        name: 'Product Manager / CPO — Track Access',
        description: 'Lifetime access to the Product Manager / CPO track.',
        price: 14900, mode: 'payment',
        paymentLink: 'https://buy.stripe.com/00wfZa1Myf1U3dra482B20x',
    },
    module_investor: {
        name: 'PE / VC / Investor — Track Access',
        description: 'Lifetime access to the PE / VC / Investor track.',
        price: 14900, mode: 'payment',
        paymentLink: 'https://buy.stripe.com/00wfZa1Myf1U3dra482B20x',
    },
    module_ai_enterprise: {
        name: 'AI & Enterprise Architect — Track Access',
        description: 'Lifetime access to the AI & Enterprise Architect track.',
        price: 14900, mode: 'payment',
        paymentLink: 'https://buy.stripe.com/00wfZa1Myf1U3dra482B20x',
    },
    module_devops: {
        name: 'DevOps & Platform Economics — Single Module',
        description: 'Lifetime access to one DevOps & Platform Economics module (Track 5).',
        price: 14900, mode: 'payment',
        paymentLink: 'https://buy.stripe.com/00wfZa1Myf1U3dra482B20x',
    },
    module_product_mgmt: {
        name: 'Product Management Economics — Single Module',
        description: 'Lifetime access to one Product Management Economics module (Track 6).',
        price: 14900, mode: 'payment',
        paymentLink: 'https://buy.stripe.com/00wfZa1Myf1U3dra482B20x',
    },
    module_security: {
        name: 'Security & Compliance Economics — Single Module',
        description: 'Lifetime access to one Security & Compliance Economics module (Track 7).',
        price: 14900, mode: 'payment',
        paymentLink: 'https://buy.stripe.com/00wfZa1Myf1U3dra482B20x',
    },
    module_financials: {
        name: 'C-Suite Financials & M&A Diligence — Track Access',
        description: 'Lifetime access to the C-Suite Financials & M&A Diligence track.',
        price: 14900, mode: 'payment',
        paymentLink: 'https://buy.stripe.com/00wfZa1Myf1U3dra482B20x',
    },
    module_data: {
        name: 'Data & Analytics Economics — Single Module',
        description: 'Lifetime access to one Data & Analytics Economics module (Track 8).',
        price: 14900, mode: 'payment',
        paymentLink: 'https://buy.stripe.com/00wfZa1Myf1U3dra482B20x',
    },
    module_leadership: {
        name: 'Engineering Leadership — Single Module',
        description: 'Lifetime access to one Engineering Leadership module (Track 9).',
        price: 14900, mode: 'payment',
        paymentLink: 'https://buy.stripe.com/00wfZa1Myf1U3dra482B20x',
    },
    module_startup: {
        name: 'Startup Economics — Single Module',
        description: 'Lifetime access to one Startup Economics module (Track 10).',
        price: 14900, mode: 'payment',
        paymentLink: 'https://buy.stripe.com/00wfZa1Myf1U3dra482B20x',
    },

    // --- GUIDES (DYNAMIC TIERS) ---
    premium_guide_29: {
        name: 'Premium Guide Access ($29 Tier)',
        description: 'Access to one premium guide.',
        price: 2900,
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/5kQ3cogHs3jc5lz3FK2B20p', // Original Link
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
        description: '60-minute live strategy session with Richard Ewing, AI Economist.',
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
        paymentLink: 'https://buy.stripe.com/4gM8wIgHs6vo15j3FK2B20B',
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
    practitioner_certification: {
        name: 'AI Practitioner Certification Pass',
        description: 'Complete practitioner access to all AI economics, systems mapping, and model arbitrage curriculum modules.',
        price: 24900,
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/00wfZa1Myf1U3dra482B20x', 
    },
    certification: {
        name: 'AI Economist Certification (CPE)',
        description: 'Professional certification in AI economics methodology. 12 modules, 48 hours, exam + curriculum access + digital certificate.',
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
        paymentLink: 'https://buy.stripe.com/5kQ3cogHs3jc5lz3FK2B20p',
    },
    guide_pe_due_diligence: {
        name: 'PE Technology Due Diligence Guide',
        description: 'Insider PE due diligence guide: 15 red flags, valuation impact, technical debt methodology, deal-killer case studies.',
        price: 2900,
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/5kQ3cogHs3jc5lz3FK2B20p',
    },
    guide_vc_assessment: {
        name: 'VC Technology Assessment Framework',
        description: 'Technology risk evaluation before investing: technical founder assessment, velocity indicators, 10-minute diligence checklist.',
        price: 2900,
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/5kQ3cogHs3jc5lz3FK2B20p',
    },
    guide_saas_metrics: {
        name: 'SaaS Metrics Masterclass',
        description: 'Bridge engineering metrics and SaaS financials: Rule of 40, NRR improvement, CAC payback, engineering ROI.',
        price: 2900,
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/5kQ3cogHs3jc5lz3FK2B20p',
    },
    guide_cloud_finops: {
        name: 'Cloud FinOps & Infrastructure Economics',
        description: 'Cloud cost optimization: right-sizing, reserved instances, spot architecture, FinOps team structure, 12-week savings program.',
        price: 2900,
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/5kQ3cogHs3jc5lz3FK2B20p',
    },
    guide_ai_governance: {
        name: 'AI Governance & Audit Framework',
        description: 'Comprehensive compliance preparation for the EU AI Act and SOC 2 AI controls.',
        price: 2900, mode: 'payment',
        paymentLink: 'https://buy.stripe.com/5kQ3cogHs3jc5lz3FK2B20p',
    },
    guide_eng_due_diligence_2026: {
        name: 'Engineering Due Diligence for M&A 2026',
        description: 'Complete PE/VC checklist for assessing modern AI-enabled engineering organizations.',
        price: 2900, mode: 'payment',
        paymentLink: 'https://buy.stripe.com/5kQ3cogHs3jc5lz3FK2B20p',
    },
    guide_cybersecurity_economics: {
        name: 'Cybersecurity Economics Playbook',
        description: 'Translating cyber risk, zero trust architectures, and breach prevention into CFO-ready financial modeling.',
        price: 2900, mode: 'payment',
        paymentLink: 'https://buy.stripe.com/5kQ3cogHs3jc5lz3FK2B20p',
    },
    guide_ai_talent_strategy: {
        name: 'AI Talent Strategy & Compensation Guide',
        description: 'Hiring, retaining, and evaluating ML engineers in a hyper-competitive market context.',
        price: 2900, mode: 'payment',
        paymentLink: 'https://buy.stripe.com/5kQ3cogHs3jc5lz3FK2B20p',
    },
    guide_consumption_pricing: {
        name: 'Consumption-Based Pricing Playbook',
        description: 'How to transition SaaS models to usage-based billing without destroying customer retention.',
        price: 2900, mode: 'payment',
        paymentLink: 'https://buy.stripe.com/5kQ3cogHs3jc5lz3FK2B20p',
    },
    guide_agentic_ai_cost: {
        name: 'Agentic AI Cost Guide',
        description: 'Determine the exact unit economics and API inference burndown rates of autonomous LLM agents.',
        price: 2900, mode: 'payment',
        paymentLink: 'https://buy.stripe.com/5kQ3cogHs3jc5lz3FK2B20p',
    },
    guide_cloud_finops_playbook: {
        name: 'Cloud FinOps Playbook',
        description: 'Strategic right-sizing frameworks and financial alignment for multi-cloud enterprise deployments.',
        price: 2900, mode: 'payment',
        paymentLink: 'https://buy.stripe.com/5kQ3cogHs3jc5lz3FK2B20p',
    },
    guide_eng_productivity_metrics: {
        name: 'Engineering Productivity Metrics 2026',
        description: 'DORA and SPACE are a start, but incomplete. See how high-performing teams measure true leverage.',
        price: 2900, mode: 'payment',
        paymentLink: 'https://buy.stripe.com/5kQ3cogHs3jc5lz3FK2B20p',
    },
    guide_ai_coding_roi: {
        name: 'AI Coding Tools ROI Calculator',
        description: 'Precisely quantify the economic return on GitHub Copilot, Cursor, and AI-enabled IDP investments.',
        price: 2900, mode: 'payment',
        paymentLink: 'https://buy.stripe.com/5kQ3cogHs3jc5lz3FK2B20p',
    },
    guide_green_software: {
        name: 'Green Software Engineering Economics',
        description: 'Balancing ESG commitments with infrastructure cost realities in high-compute AI environments.',
        price: 2900, mode: 'payment',
        paymentLink: 'https://buy.stripe.com/5kQ3cogHs3jc5lz3FK2B20p',
    },

    // --- B2B ENTERPRISE ---
    enterprise_curriculum_license: {
        name: 'Enterprise Curriculum License (10 Seats)',
        description: 'B2B 10-seat license to the full Vault LMS curriculum. Includes team progress reporting and 1 kickoff advisory session.',
        price: 150000,
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/5kQ5kw62O9HAeW90ty2B20C',
    },

    // --- AI INTEGRATION SYSTEM ---
    ai_integration_starter: {
        name: 'AI Integration System — Starter',
        description: 'Core AI Integration System: AI Readiness Audit Template, 30+ prompts for Claude & ChatGPT, Business Process Scoring Matrix, Strategic Roadmap Generator, 30-Day Kickstart Plan, ROI Calculator. Modules 1-6.',
        price: 99700, // $997.00
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/eVq7sEbn8aLE9BPb8c2B20Y',
    },
    ai_integration_complete: {
        name: 'AI Integration System — Complete',
        description: 'Full AI Integration System: All 10 modules, 50+ prompts, AI Tool Selection Guide, Quarterly Review Framework, 100-point Implementation Checklist, priority email support. Lifetime access.',
        price: 199700, // $1,997.00
        mode: 'payment',
        paymentLink: 'https://buy.stripe.com/5kQfZabn87zs5lz0ty2B20Z',
    },
};
