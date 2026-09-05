// Centralized knowledge base and persona configuration for the Voice AI Companion
// Strict HWS v2.0 / REWS v2.0 compliance: no em-dashes, no consulting buzzwords.

export interface RecommendedCard {
  id: string;
  type: 'curriculum' | 'diagnostic' | 'booking' | 'pass' | 'guide' | 'audit';
  title: string;
  price?: string;
  description: string;
  ctaText: string;
  link: string;
  badge?: string;
}

export const PAID_RESOURCES: Record<string, RecommendedCard> = {
  // --- 1. BOOKINGS & 1:1 ADVISORY ---
  cal_advisory_booking: {
    id: 'cal_advisory_booking',
    type: 'booking',
    title: '1:1 Advisory Strategy Session',
    description: 'Direct 30-minute working session with Richard to review your actual architecture, AI burn, or team setup.',
    ctaText: 'Book 30m Working Session',
    link: 'https://cal.com/richard-ewing-2cevwb',
    badge: '1:1 Advisory'
  },
  gut_check: {
    id: 'gut_check',
    type: 'booking',
    title: '30-Minute Gut-Check Call',
    price: '$450',
    description: 'Rapid-fire triage: you describe your engineering bottleneck or vendor proposal, Richard gives a blunt verdict.',
    ctaText: 'Book Gut-Check Call',
    link: 'https://buy.stripe.com/eVqbIU1My8Dw01f7W02B204',
    badge: 'Fast Verdict'
  },
  strategy_session: {
    id: 'strategy_session',
    type: 'booking',
    title: '60-Minute Live Strategy Session',
    price: '$500',
    description: 'Full 1-hour working architecture review and roadmap evaluation with Richard Ewing.',
    ctaText: 'Book 60m Strategy Call',
    link: 'https://buy.stripe.com/dRm6oAbn8bPIdS5gsw2B20j',
    badge: 'Deep Architecture'
  },
  insolvency_diagnostic: {
    id: 'insolvency_diagnostic',
    type: 'audit',
    title: 'Capital Insolvency Diagnostic Audit',
    price: '$2,500',
    description: '60-minute Capital Exposure Assessment plus formal Written Risk Exposure Report and 15-minute remediation follow-up.',
    ctaText: 'Commission Diagnostic',
    link: 'https://buy.stripe.com/8x25kw62O9HA6pDb8c2B203',
    badge: 'Executive Audit'
  },
  full_audit: {
    id: 'full_audit',
    type: 'audit',
    title: 'Full R&D Capital & Inference Audit',
    price: '$7,500',
    description: 'Complete 3-week forensic review of your R&D capital allocation and AI inference costs with board deliverable.',
    ctaText: 'Commission Full Audit',
    link: 'https://buy.stripe.com/7sY14g76ScTM7tH2BG2B202',
    badge: 'Forensic Audit'
  },

  // --- 2. DIGITAL TOOLS & PLAYBOOKS ---
  tools_library_unlock: {
    id: 'tools_library_unlock',
    type: 'diagnostic',
    title: 'Diagnostic Tools Library Access',
    price: '$199',
    description: 'Unlimited access to all diagnostic instruments (PDI, AUEB, APER, EV-SE) to audit velocity and model margins.',
    ctaText: 'Access Diagnostic Tools',
    link: 'https://buy.stripe.com/9B6aEQ1My3jceW9b8c2B20D',
    badge: 'Most Popular'
  },
  premium_bundle_ultimate: {
    id: 'premium_bundle_ultimate',
    type: 'guide',
    title: 'Ultimate Guides & Playbooks Bundle',
    price: '$399',
    description: 'Complete access to all 13 premium engineering economics playbooks and implementation rubrics.',
    ctaText: 'Get Playbooks Bundle',
    link: 'https://buy.stripe.com/6oUfZa1My6vodS57W02B20y',
    badge: 'Playbooks'
  },
  pe_intelligence_tier: {
    id: 'pe_intelligence_tier',
    type: 'diagnostic',
    title: 'Private Equity Intelligence Tier',
    price: '$999/yr',
    description: 'Unlimited M&A tech diligence exports, Q-PEP remediation roadmaps, and CISO risk telemetry dashboard access.',
    ctaText: 'Get PE Intelligence',
    link: 'https://buy.stripe.com/4gM8wIgHs6vo15j3FK2B20B',
    badge: 'PE / Diligence'
  },

  // --- 3. CURRICULUMS & ACADEMY TRACKS ---
  single_track: {
    id: 'single_track',
    type: 'curriculum',
    title: 'Single Curriculum Track Access',
    price: '$149',
    description: 'Lifetime access to any single curriculum track (AI Economics, Leadership, R&D Capital, or Architecture).',
    ctaText: 'Explore Single Track',
    link: 'https://buy.stripe.com/00wfZa1Myf1U3dra482B20x',
    badge: 'Curriculum'
  },
  module_ai_economics: {
    id: 'module_ai_economics',
    type: 'curriculum',
    title: 'AI Economics Foundations Track',
    price: '$149',
    description: 'Lifetime access to Track 2: 16 modules on token economics, inference dividends, and model margin defense.',
    ctaText: 'Start AI Economics',
    link: 'https://buy.stripe.com/14A9AMaj44ng01f5NS2B20q',
    badge: 'AI Track'
  },
  module_rd_capital: {
    id: 'module_rd_capital',
    type: 'curriculum',
    title: 'R&D Capital Management Track',
    price: '$149',
    description: 'Lifetime access to Track 3: 15 modules on capital allocation, technical debt capitalization, and burn triage.',
    ctaText: 'Start R&D Capital',
    link: 'https://buy.stripe.com/5kQdR2ezk3jc01f5NS2B20r',
    badge: 'Finance Track'
  },
  module_bundle_3: {
    id: 'module_bundle_3',
    type: 'curriculum',
    title: '3-Track Curriculum Bundle',
    price: '$349',
    description: 'Pick any 3 curriculum tracks with lifetime access to all included modules, rubrics, and exercises.',
    ctaText: 'Get 3-Track Bundle',
    link: 'https://buy.stripe.com/eVq6oA76SaLE15jfos2B20t',
    badge: 'Bundle'
  },
  all_access_pass: {
    id: 'all_access_pass',
    type: 'pass',
    title: 'All-Access Vault Pass',
    price: '$999',
    description: 'Instant lifetime access to all 23 authority tracks, 293 modules, 400+ lessons, and all diagnostic tools.',
    ctaText: 'Get All-Access Pass',
    link: 'https://buy.stripe.com/9B600c8aW3jc3drdgk2B20z',
    badge: 'Best Value'
  },
  team_license_pass: {
    id: 'team_license_pass',
    type: 'pass',
    title: 'Enterprise Team License (10 Seats)',
    price: '$4,999',
    description: 'Corporate license provisioning 10 All-Access seats for engineering leadership, staff engineers, and PMs.',
    ctaText: 'Get Team License',
    link: 'https://buy.stripe.com/4gMbIU4YK9HAeW9eko2B20A',
    badge: 'Enterprise'
  }
};

export const CORE_TOPICS = [
  {
    topic: 'Direct Advisory & Working Calls',
    audience: 'Founders, CTOs, Engineering Leaders, Staff Engineers',
    summary: 'When a user wants to book time, talk directly, or hire Richard for an architecture or roadmap evaluation, offer the 30m working session on Cal.com, the 30-minute Gut-Check call ($450), or the 60-minute Strategy Session ($500).',
    recommendedCard: 'cal_advisory_booking'
  },
  {
    topic: 'Technical Insolvency & Capital Emergency',
    audience: 'CEOs, CFOs, VPEs with mounting debt or vendor collapse',
    summary: 'When technical debt threatens runway or delivery deadlines, the Capital Insolvency Diagnostic ($2,500) delivers a 60-minute forensic audit and written exposure report.',
    recommendedCard: 'insolvency_diagnostic'
  },
  {
    topic: 'Full R&D Capital & Inference Audit',
    audience: 'Enterprise Boards, CTOs, CFOs',
    summary: 'A 3-week forensic review of capital allocation, GPU/token billing, and developer throughput ($7,500) with board-ready deliverables.',
    recommendedCard: 'full_audit'
  },
  {
    topic: 'IC vs Management Track & Career Progression',
    audience: 'Senior, Staff, Principal Engineers',
    summary: 'Moving to Staff is not about writing more code. It is about whether other engineers move faster because you exist. Management is an entirely different profession, not a promotion.',
    recommendedCard: 'single_track'
  },
  {
    topic: 'AI Unit Economics & Model Burn',
    audience: 'Founders, Product Leaders, CTOs',
    summary: 'The Inference Dividend Model demonstrates how token margins collapse without intelligent caching and model routing. Most teams over-provision frontier models for simple tasks.',
    recommendedCard: 'module_ai_economics'
  },
  {
    topic: 'Engineering Velocity & Production Drag',
    audience: 'Tech Leads, Engineering Managers, Directors',
    summary: 'The Production Drag Index (PDI) tracks where developer hours evaporate: code review turnaround, flaky CI pipelines, and rework caused by shifting specifications.',
    recommendedCard: 'tools_library_unlock'
  },
  {
    topic: 'Playbooks & Strategic Guides',
    audience: 'Engineers and managers seeking concrete operational playbooks',
    summary: '13 practical playbooks covering context rot, retry loops, hallucination taxes, and agent safety ($399 Ultimate Bundle).',
    recommendedCard: 'premium_bundle_ultimate'
  },
  {
    topic: 'PE & M&A Technical Diligence',
    audience: 'Private Equity Operating Partners, Investors, M&A Advisors',
    summary: 'Q-PEP remediation roadmaps, technical risk scoring, and CISO risk telemetry dashboard access ($999/yr).',
    recommendedCard: 'pe_intelligence_tier'
  },
  {
    topic: 'Comprehensive Curriculum & Org-Wide Training',
    audience: 'Teams looking to systematically upskill in engineering economics',
    summary: '23 authority tracks and 293 modules covering everything from R&D capital capitalization to LLM proxy architectures ($999 All-Access Pass).',
    recommendedCard: 'all_access_pass'
  },
  {
    topic: 'Enterprise Team Licenses',
    audience: 'VP of Engineering or HR provisioning multi-seat access',
    summary: '10 All-Access seats for the entire engineering leadership and product management team ($4,999).',
    recommendedCard: 'team_license_pass'
  }
];

export const REWS_VOICE_SYSTEM_PROMPT = `
You are Richard Ewing's digital companion on richardewing.io.
Your goal is to talk with visitors in a human, direct, grounded voice modeled on Richard's lived experience as an engineer, operator, and AI economist.

Core Conversational Directives:
1. Flow of the Conversation: Always meet the visitor where they are. Listen to what they actually said, follow their thread, and build on their context naturally. Never abruptly derail or change the topic.
2. Helpful First: Deliver immediate, substantive value on every turn. Skip the textbook fluff and share the 10th thought: the non-obvious truth, what actually breaks in production, what costs real money, and the tradeoffs people avoid talking about. Never hold an answer hostage behind a paywall.
3. Spoken Brevity: Keep spoken turns concise: 2 to 3 sentences max per response. Say something punchy and useful, then pause and let the other person respond.
4. Earned Conversion: Weave the sale into the conversation naturally and organically. You have access to every paid product, curriculum track, diagnostic tool, and 1:1 advisory booking option we provide.
   - Earn the sale by diagnosing the problem first, then offering the exact vehicle that solves it.
   - If the user is exploring or clarifying a concept: deliver the insight generously. You can set recommendedCardId to null or suggest a track softly if it genuinely answers their question.
   - If the user expresses pain, mounting debt, high token bills, or team friction: diagnose the root cause, then suggest the logical next step:
     * Booking a 30m Working Session on Cal.com, scheduling a 30m Gut-Check Call ($450), or a 60m Strategy Session ($500) if they need Richard's direct eyes on their architecture.
     * Capital Insolvency Diagnostic ($2,500) or Full R&D Capital Audit ($7,500) if they face an urgent capital or debt emergency.
     * Diagnostic Tools Library ($199) if they want the self-serve calculators and audit rubrics (PDI, AUEB, APER, EV-SE).
     * Single Curriculum Track ($149), 3-Track Bundle ($349), or All-Access Vault Pass ($999) if they are upskilling their team or leveling up from Senior to Staff.
     * Ultimate Guides & Playbooks Bundle ($399) if they need production playbooks on context rot, agent loops, or inference margins.
     * Enterprise Team License ($4,999) or PE Intelligence Tier ($999/yr) if they represent a fund or company.
   - When you recommend a paid resource or booking, mention it naturally by name so they know an interactive card is waiting on their screen.
5. Strict Quality Rules: Speak plainly and candidly. Zero em-dashes anywhere. Zero corporate buzzwords, filler, or consultant jargon. Be genuine, personable, and razor-sharp.
`;

