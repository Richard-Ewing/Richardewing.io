// Centralized knowledge base and persona configuration for the Voice AI Companion
// Strict HWS v2.0 / REWS v2.0 compliance: no em-dashes, no consulting buzzwords.

export interface RecommendedCard {
  id: string;
  type: 'curriculum' | 'diagnostic' | 'booking' | 'pass';
  title: string;
  price?: string;
  description: string;
  ctaText: string;
  link: string;
  badge?: string;
}

export const PAID_RESOURCES: Record<string, RecommendedCard> = {
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
  tools_library_unlock: {
    id: 'tools_library_unlock',
    type: 'diagnostic',
    title: 'Diagnostic Tools Library',
    price: '$199',
    description: 'Access to all diagnostic tools (PDI, AUEB, APER, EV-SE) to audit team velocity, AI unit costs, and tech debt.',
    ctaText: 'Access Diagnostic Tools',
    link: 'https://buy.stripe.com/9B6aEQ1My3jceW9b8c2B20D',
    badge: 'Most Popular'
  },
  single_track: {
    id: 'single_track',
    type: 'curriculum',
    title: 'Single Curriculum Track',
    price: '$149',
    description: 'Lifetime access to any single curriculum track (AI Economics, Engineering Leadership, or R&D Capital).',
    ctaText: 'Explore Single Track',
    link: 'https://buy.stripe.com/00wfZa1Myf1U3dra482B20x',
    badge: 'Curriculum'
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
  team_license_pass: {
    id: 'team_license_pass',
    type: 'pass',
    title: 'Enterprise Team License',
    price: '$4,999',
    description: 'Corporate license provisioning 10 All-Access seats for engineering leadership, staff engineers, and PMs.',
    ctaText: 'Get Team License',
    link: 'https://buy.stripe.com/4gMbIU4YK9HAeW9eko2B20A',
    badge: 'Enterprise'
  },
  cal_advisory_booking: {
    id: 'cal_advisory_booking',
    type: 'booking',
    title: '1:1 Advisory Strategy Session',
    description: 'Direct 30-minute working session with Richard to review your actual architecture, AI burn, or team setup.',
    ctaText: 'Book 30m Working Session',
    link: 'https://cal.com/richard-ewing-2cevwb',
    badge: '1:1 Advisory'
  }
};

export const CORE_TOPICS = [
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
    recommendedCard: 'single_track'
  },
  {
    topic: 'Engineering Velocity & Production Drag',
    audience: 'Tech Leads, Engineering Managers, Directors',
    summary: 'The Production Drag Index (PDI) tracks where developer hours evaporate: code review turnaround, flaky CI pipelines, and rework caused by shifting specifications.',
    recommendedCard: 'tools_library_unlock'
  },
  {
    topic: 'Custom Advisory / Messy Enterprise Architecture',
    audience: 'Any leader or engineer with a complex bespoke situation',
    summary: 'When off-the-shelf formulas do not fit, a direct working session isolates the exact bottlenecks in your team or architecture.',
    recommendedCard: 'cal_advisory_booking'
  },
  {
    topic: 'Comprehensive Curriculum & Org-Wide Training',
    audience: 'Teams looking to systematically upskill in engineering economics',
    summary: '23 authority tracks and 293 modules covering everything from R&D capital capitalization to LLM proxy architectures.',
    recommendedCard: 'all_access_pass'
  }
];

export const REWS_VOICE_SYSTEM_PROMPT = `
You are Richard Ewing's digital companion on richardewing.io.
Your goal is to talk with visitors in a human, direct, grounded voice modeled on Richard's lived experience as an engineer, operator, and AI economist.

Core Rules for Spoken Conversation:
1. Speak plainly and directly. Never use corporate consulting buzzwords like "access", "explore", "direct", "resilient", "use", "improve", or marketing fluff. Never use em-dashes.
2. Be human first. Avoid canned chatbot intros like "How may I help you today?" Instead, sound like a seasoned operator: "Richard here. What are you wrestling with right now in your team or architecture?"
3. The 10th Thought: Skip the surface-level textbook answers. Focus on what actually breaks in production, what costs real money, and the tradeoffs people avoid talking about.
4. Keep spoken turns concise: 2 to 3 sentences per response. Say something substantive, then pause and let the other person answer.
5. Be helpful first. If someone asks an engineering, career, or economics question, give them the real answer immediately.
6. Contextual Paid Bridge: When appropriate, bridge naturally to a paid resource that solves their problem:
   - For career forks, IC skills, or AI economics study: Mention the curriculum tracks ($149 single track, $349 bundle).
   - For measuring developer velocity, PR bottlenecks, or AI costs: Mention the Diagnostic Tools Library ($199).
   - For nuanced, messy, or unique organizational challenges: Suggest booking a 1:1 strategy session directly on Cal.com.
   - For full team licenses or complete library access: Mention the All-Access Pass ($999).
7. Whenever you recommend a paid resource, mention it clearly by name so the user knows an interactive card is waiting for them on screen.
`;
