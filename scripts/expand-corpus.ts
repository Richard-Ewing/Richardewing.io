/**
 * Phase 1 + Phase 2: Add 56 missing publications & fix 11 unused concept pages
 * Generates RESEARCH_CORPUS entries from URL slugs with domain + concept mappings
 */
import fs from 'fs';

interface NewEntry {
  id: string;
  title: string;
  url: string;
  publisher: string;
  domain: string;
  type: 'Evergreen' | 'Executable' | 'Time-Sensitive';
  thesis: string;
  relatedConceptIds: string[];
}

// ============================================================================
// 46 MISSING BEEHIIV NEWSLETTERS
// ============================================================================
const MISSING_BEEHIIV: NewEntry[] = [
  {
    id: 'beehiiv-ebook-product-quarterback',
    title: 'Announcing My eBook: Product Quarterback',
    url: 'https://theaieconomist.beehiiv.com/p/announcing-my-ebook-product-quarterback',
    publisher: 'Beehiiv', domain: 'Product Leadership', type: 'Time-Sensitive',
    thesis: 'Introduces the Product Quarterback operating model for cross-functional product leaders managing P&L responsibility.',
    relatedConceptIds: ['product-economist', 'feature-bloat-calculus']
  },
  {
    id: 'beehiiv-product-managers-core-fundamentals',
    title: 'The Product Manager\'s Core Fundamentals',
    url: 'https://theaieconomist.beehiiv.com/p/the-product-managers-core-fundamentals',
    publisher: 'Beehiiv', domain: 'Product Leadership', type: 'Evergreen',
    thesis: 'Defines the foundational competencies required for product managers to operate as business owners rather than feature coordinators.',
    relatedConceptIds: ['product-economist', 'feature-bloat-calculus', 'coordination-tax']
  },
  {
    id: 'beehiiv-breaking-into-product-management',
    title: 'Breaking Into Product Management',
    url: 'https://theaieconomist.beehiiv.com/p/breaking-into-product-management',
    publisher: 'Beehiiv', domain: 'Career Economics', type: 'Evergreen',
    thesis: 'Structural guide for career-switchers entering product management with emphasis on financial literacy over certification.',
    relatedConceptIds: ['product-economist']
  },
  {
    id: 'beehiiv-stop-confusing-product-project',
    title: 'Stop Confusing Product and Project Management',
    url: 'https://theaieconomist.beehiiv.com/p/stop-confusing-product-project-and',
    publisher: 'Beehiiv', domain: 'Product Leadership', type: 'Evergreen',
    thesis: 'Distinguishes product ownership (outcome accountability) from project execution (timeline delivery) at the structural level.',
    relatedConceptIds: ['product-economist', 'coordination-tax']
  },
  {
    id: 'beehiiv-tactical-guide-product',
    title: 'Your Tactical Guide to the Product Ladder',
    url: 'https://theaieconomist.beehiiv.com/p/your-tactical-guide-to-the-product',
    publisher: 'Beehiiv', domain: 'Career Economics', type: 'Evergreen',
    thesis: 'Maps the career progression from associate PM to VP/CPO with specific skill thresholds at each transition.',
    relatedConceptIds: ['product-economist']
  },
  {
    id: 'beehiiv-6db-product-fundamentals',
    title: 'Product Fundamentals: The 6dB Framework',
    url: 'https://theaieconomist.beehiiv.com/p/6db',
    publisher: 'Beehiiv', domain: 'Product Leadership', type: 'Executable',
    thesis: 'Introduces a signal-to-noise measurement framework for evaluating product feature investments.',
    relatedConceptIds: ['product-economist', 'feature-bloat-calculus']
  },
  {
    id: 'beehiiv-5-frameworks-double-product',
    title: '5 Frameworks That Double Product Velocity',
    url: 'https://theaieconomist.beehiiv.com/p/5-frameworks-that-double-product',
    publisher: 'Beehiiv', domain: 'Product Leadership', type: 'Executable',
    thesis: 'Five operational frameworks for increasing product team throughput without adding headcount.',
    relatedConceptIds: ['product-economist', 'feature-bloat-calculus', 'coordination-tax']
  },
  {
    id: 'beehiiv-pm-job-interview-lie',
    title: 'The PM Job Interview Is a Lie',
    url: 'https://theaieconomist.beehiiv.com/p/the-pm-job-interview-is-a-lie-its',
    publisher: 'Beehiiv', domain: 'Career Economics', type: 'Evergreen',
    thesis: 'Exposes the structural mismatch between what PM interviews test and what PM roles actually require.',
    relatedConceptIds: ['product-economist']
  },
  {
    id: 'beehiiv-google-doesnt-care-process',
    title: 'Google Doesn\'t Care About Your Process',
    url: 'https://theaieconomist.beehiiv.com/p/google-doesnt-care-about-your-process',
    publisher: 'Beehiiv', domain: 'Product Leadership', type: 'Evergreen',
    thesis: 'Why process-obsessed organizations lose to outcome-obsessed ones at scale.',
    relatedConceptIds: ['coordination-tax', 'product-economist']
  },
  {
    id: 'beehiiv-stop-applying-cold',
    title: 'Stop Applying Cold: The Only Shortcut That Works',
    url: 'https://theaieconomist.beehiiv.com/p/stop-applying-cold-the-only-shortcut',
    publisher: 'Beehiiv', domain: 'Career Economics', type: 'Evergreen',
    thesis: 'Network-first job search strategy backed by structural hiring pipeline analysis.',
    relatedConceptIds: ['product-economist']
  },
  {
    id: 'beehiiv-ai-revolution-isnt-technical',
    title: 'The AI Revolution Isn\'t Technical - It\'s Financial',
    url: 'https://theaieconomist.beehiiv.com/p/the-ai-revolution-isnt-technical',
    publisher: 'Beehiiv', domain: 'AI Economics', type: 'Evergreen',
    thesis: 'Argues that AI adoption is constrained by unit economics and margin destruction, not model capability gaps.',
    relatedConceptIds: ['ai-economics', 'inference-economics', 'ai-volatility-tax']
  },
  {
    id: 'beehiiv-100-billion-insight',
    title: 'The $100 Billion Insight',
    url: 'https://theaieconomist.beehiiv.com/p/the-100-billion-insight',
    publisher: 'Beehiiv', domain: 'AI Economics', type: 'Evergreen',
    thesis: 'Analyzes the structural capital misallocation in enterprise AI where spending outpaces revenue contribution.',
    relatedConceptIds: ['ai-economics', 'inference-economics', 'ai-volatility-tax']
  },
  {
    id: 'beehiiv-jargon-costing-executive',
    title: 'Your Jargon Is Costing You the Executive Room',
    url: 'https://theaieconomist.beehiiv.com/p/your-jargon-is-costing-you-the-executive',
    publisher: 'Beehiiv', domain: 'Product Leadership', type: 'Evergreen',
    thesis: 'How technical vocabulary creates communication barriers that block product leaders from C-suite influence.',
    relatedConceptIds: ['coordination-tax', 'product-economist']
  },
  {
    id: 'beehiiv-soft-skills-not-soft',
    title: 'Your Soft Skills Are Not Soft',
    url: 'https://theaieconomist.beehiiv.com/p/your-soft-skills-are-not-soft',
    publisher: 'Beehiiv', domain: 'Career Economics', type: 'Evergreen',
    thesis: 'Reframes interpersonal competencies as structural negotiation and organizational influence mechanisms.',
    relatedConceptIds: ['product-economist', 'coordination-tax']
  },
  {
    id: 'beehiiv-want-a-promotion',
    title: 'Want a Promotion? Stop Waiting for Permission',
    url: 'https://theaieconomist.beehiiv.com/p/want-a-promotion',
    publisher: 'Beehiiv', domain: 'Career Economics', type: 'Evergreen',
    thesis: 'Career advancement treated as a capital allocation problem rather than a tenure reward.',
    relatedConceptIds: ['product-economist']
  },
  {
    id: 'beehiiv-googles-ironwood-chip',
    title: 'Google\'s Ironwood Chip Release vs. The Economics of Custom Silicon',
    url: 'https://theaieconomist.beehiiv.com/p/googles-ironwood-chip-release-vs',
    publisher: 'Beehiiv', domain: 'AI Economics', type: 'Time-Sensitive',
    thesis: 'Analyzes the cost-per-inference impact of custom AI accelerators on enterprise SaaS gross margins.',
    relatedConceptIds: ['inference-economics', 'ai-economics', 'ai-volatility-tax']
  },
  {
    id: 'beehiiv-cost-quiet-failure',
    title: 'The Cost of a Quiet Failure',
    url: 'https://theaieconomist.beehiiv.com/p/the-cost-of-a-quiet-failure',
    publisher: 'Beehiiv', domain: 'Product Leadership', type: 'Evergreen',
    thesis: 'Quantifies the hidden organizational costs when product failures go unreported and compound silently.',
    relatedConceptIds: ['product-economist', 'feature-bloat-calculus', 'coordination-tax']
  },
  {
    id: 'beehiiv-busy-trap',
    title: 'The Busy Trap: Why Activity Feels Like Progress',
    url: 'https://theaieconomist.beehiiv.com/p/the-busy-trap',
    publisher: 'Beehiiv', domain: 'Career Economics', type: 'Evergreen',
    thesis: 'Structural analysis of how motion-over-outcome cultures erode both career advancement and organizational output.',
    relatedConceptIds: ['coordination-tax', 'product-economist']
  },
  {
    id: 'beehiiv-stop-managing-activity',
    title: 'Stop Managing Activity - Start Creating Leverage',
    url: 'https://theaieconomist.beehiiv.com/p/stop-managing-activity-start-creating',
    publisher: 'Beehiiv', domain: 'Product Leadership', type: 'Evergreen',
    thesis: 'Shifts product team management from activity tracking to leverage creation and outcome ownership.',
    relatedConceptIds: ['product-economist', 'coordination-tax']
  },
  {
    id: 'beehiiv-one-decision-changes-everything',
    title: 'The One Decision That Changes Everything',
    url: 'https://theaieconomist.beehiiv.com/p/the-one-decision-that-changes-everything',
    publisher: 'Beehiiv', domain: 'Career Economics', type: 'Evergreen',
    thesis: 'The structural decision to shift from execution contributor to strategic operator.',
    relatedConceptIds: ['product-economist']
  },
  {
    id: 'beehiiv-97e-financial-leverage',
    title: 'The 97% Rule: Financial Leverage in Product Careers',
    url: 'https://theaieconomist.beehiiv.com/p/97e',
    publisher: 'Beehiiv', domain: 'Career Economics', type: 'Evergreen',
    thesis: 'Statistical analysis of how financial literacy separates the top 3% of product leaders from the rest.',
    relatedConceptIds: ['product-economist']
  },
  {
    id: 'beehiiv-become-millionaire',
    title: 'To Become a Millionaire, the Money Isn\'t the Point',
    url: 'https://theaieconomist.beehiiv.com/p/to-become-a-millionaire-the-money',
    publisher: 'Beehiiv', domain: 'Career Economics', type: 'Evergreen',
    thesis: 'Wealth creation as a structural consequence of compounding career capital, not compensation negotiation.',
    relatedConceptIds: ['product-economist']
  },
  {
    id: 'beehiiv-hate-this-post',
    title: 'You\'ll Only Hate This Post If You\'re Not Ready',
    url: 'https://theaieconomist.beehiiv.com/p/youll-only-hate-this-post-if-you',
    publisher: 'Beehiiv', domain: 'Career Economics', type: 'Evergreen',
    thesis: 'Confronts the discomfort of honest self-assessment in career trajectory analysis.',
    relatedConceptIds: ['product-economist']
  },
  {
    id: 'beehiiv-stop-working-hard',
    title: 'Stop Working Hard on Your Job - Start Working Smart on Your Career',
    url: 'https://theaieconomist.beehiiv.com/p/stop-working-hard-on-your-job',
    publisher: 'Beehiiv', domain: 'Career Economics', type: 'Evergreen',
    thesis: 'Distinguishes between effort allocation toward employer deliverables and strategic career capital building.',
    relatedConceptIds: ['product-economist']
  },
  {
    id: 'beehiiv-bigger-salary-stop-solving',
    title: 'Want a Bigger Salary? Stop Solving Problems',
    url: 'https://theaieconomist.beehiiv.com/p/want-a-bigger-salary-stop-solving',
    publisher: 'Beehiiv', domain: 'Career Economics', type: 'Evergreen',
    thesis: 'Why problem identification and framing creates more career leverage than problem execution.',
    relatedConceptIds: ['product-economist', 'coordination-tax']
  },
  {
    id: 'beehiiv-product-management-core',
    title: 'Product Management: The Operating System, Not the Job Title',
    url: 'https://theaieconomist.beehiiv.com/p/product-management',
    publisher: 'Beehiiv', domain: 'Product Leadership', type: 'Evergreen',
    thesis: 'Redefines product management as a cross-functional operating system rather than a siloed role.',
    relatedConceptIds: ['product-economist', 'coordination-tax']
  },
  {
    id: 'beehiiv-biggest-waste-business',
    title: 'The Biggest Waste in Business Is Meetings That Should Be Documents',
    url: 'https://theaieconomist.beehiiv.com/p/the-biggest-waste-in-business-is',
    publisher: 'Beehiiv', domain: 'Product Leadership', type: 'Evergreen',
    thesis: 'Quantifies coordination overhead from synchronous communication and prescribes asynchronous decision structures.',
    relatedConceptIds: ['coordination-tax', 'feature-bloat-calculus']
  },
  {
    id: 'beehiiv-stop-managing-time',
    title: 'Stop Managing Time and Start Controlling Priorities',
    url: 'https://theaieconomist.beehiiv.com/p/stop-managing-time-and-start-controlling',
    publisher: 'Beehiiv', domain: 'Career Economics', type: 'Evergreen',
    thesis: 'Priority management as a capital allocation discipline rather than a scheduling exercise.',
    relatedConceptIds: ['product-economist', 'coordination-tax']
  },
  {
    id: 'beehiiv-discipline-not-answer',
    title: 'I Used to Think Discipline Was the Answer',
    url: 'https://theaieconomist.beehiiv.com/p/i-used-to-think-discipline-was-the',
    publisher: 'Beehiiv', domain: 'Career Economics', type: 'Evergreen',
    thesis: 'System design outperforms willpower as a mechanism for sustained professional output.',
    relatedConceptIds: ['product-economist']
  },
  {
    id: 'beehiiv-certification-value',
    title: 'Does Your Certification Actually Mean Anything?',
    url: 'https://theaieconomist.beehiiv.com/p/does-your-certification-actually',
    publisher: 'Beehiiv', domain: 'Career Economics', type: 'Evergreen',
    thesis: 'ROI analysis of professional certifications versus demonstrated operational competence.',
    relatedConceptIds: ['product-economist']
  },
  {
    id: 'beehiiv-p-and-l-is-new-feature',
    title: 'P&L Is the New Feature: Why Product Managers Must Own the Numbers',
    url: 'https://theaieconomist.beehiiv.com/p/p-and-l-is-the-new-feature',
    publisher: 'Beehiiv', domain: 'Product Leadership', type: 'Executable',
    thesis: 'Shifts product management measurement from feature delivery to P&L contribution ownership.',
    relatedConceptIds: ['product-economist', 'feature-bloat-calculus', 'ai-economics']
  },
  {
    id: 'beehiiv-outcomes-over-solutions',
    title: 'Outcomes Over Solutions: The Shift Product Teams Must Make',
    url: 'https://theaieconomist.beehiiv.com/p/outcomes-over-solutions',
    publisher: 'Beehiiv', domain: 'Product Leadership', type: 'Evergreen',
    thesis: 'Structural realignment from solution shipping to outcome measurement in product organizations.',
    relatedConceptIds: ['product-economist', 'feature-bloat-calculus']
  },
  {
    id: 'beehiiv-jobs-to-be-done',
    title: 'Jobs to Be Done: The Framework That Actually Works',
    url: 'https://theaieconomist.beehiiv.com/p/jobs-to-be-done',
    publisher: 'Beehiiv', domain: 'Product Leadership', type: 'Executable',
    thesis: 'Operational application of JTBD theory for feature prioritization and roadmap construction.',
    relatedConceptIds: ['product-economist', 'feature-bloat-calculus']
  },
  {
    id: 'beehiiv-canonical-document',
    title: 'The Canonical Document: Write It Once, Align Forever',
    url: 'https://theaieconomist.beehiiv.com/p/the-canonical-document',
    publisher: 'Beehiiv', domain: 'Product Leadership', type: 'Executable',
    thesis: 'Single-source-of-truth documentation as a coordination cost elimination strategy.',
    relatedConceptIds: ['coordination-tax', 'product-economist']
  },
  {
    id: 'beehiiv-north-star-lie',
    title: 'The North Star Lie: Why Your Metric Is Misleading You',
    url: 'https://theaieconomist.beehiiv.com/p/the-north-star-lie',
    publisher: 'Beehiiv', domain: 'Product Leadership', type: 'Evergreen',
    thesis: 'How single North Star metrics create perverse incentives and obscure the real economic signals.',
    relatedConceptIds: ['product-economist', 'feature-bloat-calculus']
  },
  {
    id: 'beehiiv-mvp-vs-mlp',
    title: 'The MVP vs. MLP Mindset: Why Minimum Isn\'t Enough',
    url: 'https://theaieconomist.beehiiv.com/p/the-mvp-vs-mlp-mindset',
    publisher: 'Beehiiv', domain: 'Product Leadership', type: 'Evergreen',
    thesis: 'Why Minimum Lovable Product thinking produces better unit economics than Minimum Viable Product iteration.',
    relatedConceptIds: ['product-economist', 'feature-bloat-calculus']
  },
  {
    id: 'beehiiv-stop-showing-ceo-roadmap',
    title: 'Stop Showing Your CEO a Roadmap - Show Them a P&L',
    url: 'https://theaieconomist.beehiiv.com/p/stop-showing-your-ceo-a-roadmap',
    publisher: 'Beehiiv', domain: 'Product Leadership', type: 'Executable',
    thesis: 'Translates feature-centric roadmaps into financial contribution models for executive audiences.',
    relatedConceptIds: ['coordination-tax', 'product-economist', 'feature-bloat-calculus']
  },
  {
    id: 'beehiiv-reject-90-inbound',
    title: 'I Reject 90% of Inbound Requests - Here\'s My Decision Framework',
    url: 'https://theaieconomist.beehiiv.com/p/i-reject-90-of-inbound-requests',
    publisher: 'Beehiiv', domain: 'Product Leadership', type: 'Executable',
    thesis: 'Systematic prioritization framework for filtering feature requests against P&L impact thresholds.',
    relatedConceptIds: ['coordination-tax', 'product-economist', 'feature-bloat-calculus']
  },
  {
    id: 'beehiiv-ai-strategy-burning-cash',
    title: 'Your AI Strategy Is Burning Cash - Here\'s Why',
    url: 'https://theaieconomist.beehiiv.com/p/your-ai-strategy-is-burning-cash',
    publisher: 'Beehiiv', domain: 'AI Economics', type: 'Evergreen',
    thesis: 'Diagnoses the structural cost drivers behind enterprise AI implementations that consume capital without generating margin.',
    relatedConceptIds: ['ai-volatility-tax', 'inference-economics', 'ai-margin-squeeze']
  },
  {
    id: 'beehiiv-ai-revolution-financial-leadership',
    title: 'The AI Revolution Isn\'t Technical - It\'s a Financial Leadership Problem',
    url: 'https://theaieconomist.beehiiv.com/p/the-ai-revolution-isnt-technical-eda',
    publisher: 'Beehiiv', domain: 'AI Economics', type: 'Evergreen',
    thesis: 'Positions the AI transformation challenge as a CFO-level capital allocation problem rather than a CTO-level technology decision.',
    relatedConceptIds: ['ai-economics', 'inference-economics', 'ai-volatility-tax']
  },
  {
    id: 'beehiiv-real-world-mba',
    title: 'The Real-World MBA for Product Leaders',
    url: 'https://theaieconomist.beehiiv.com/p/the-real-world-mba-for-product-leaders',
    publisher: 'Beehiiv', domain: 'Career Economics', type: 'Evergreen',
    thesis: 'Operational business education curriculum for product leaders who lack formal financial training.',
    relatedConceptIds: ['product-economist']
  },
  {
    id: 'beehiiv-resume-is-dead',
    title: 'The Resume Is Dead - Long Live the Portfolio',
    url: 'https://theaieconomist.beehiiv.com/p/the-resume-is-dead-long-live-the',
    publisher: 'Beehiiv', domain: 'Career Economics', type: 'Evergreen',
    thesis: 'Why demonstrated operational evidence replaces credential signaling in AI-era hiring.',
    relatedConceptIds: ['product-economist']
  },
  {
    id: 'beehiiv-senior-pm-trap',
    title: 'The Senior PM Trap: You Are Stuck at the Wrong Altitude',
    url: 'https://theaieconomist.beehiiv.com/p/the-senior-pm-trap-you-are-stuck',
    publisher: 'Beehiiv', domain: 'Career Economics', type: 'Evergreen',
    thesis: 'Why senior PMs plateau when they operate at execution altitude instead of strategic altitude.',
    relatedConceptIds: ['product-economist', 'coordination-tax']
  },
  {
    id: 'beehiiv-career-leaking-42000',
    title: 'Your Career Is Leaking $42,000 a Year',
    url: 'https://theaieconomist.beehiiv.com/p/your-career-is-leaking-42000-a-year',
    publisher: 'Beehiiv', domain: 'Career Economics', type: 'Executable',
    thesis: 'Quantifies the annual compensation gap between product managers who own P&L metrics and those who track feature velocity.',
    relatedConceptIds: ['product-economist']
  },
  {
    id: 'beehiiv-what-product-economist-does',
    title: 'What a Product Economist Actually Does',
    url: 'https://theaieconomist.beehiiv.com/p/what-a-product-economist-actually-does',
    publisher: 'Beehiiv', domain: 'Product Leadership', type: 'Executable',
    thesis: 'Operational specification of the Product Economist role: responsibilities, metrics, and organizational positioning.',
    relatedConceptIds: ['product-economist', 'feature-bloat-calculus', 'ai-economics']
  },
  {
    id: 'beehiiv-innovation-tax-audit',
    title: 'The Innovation Tax Audit',
    url: 'https://theaieconomist.beehiiv.com/p/the-innovation-tax-audit',
    publisher: 'Beehiiv', domain: 'Software Economics', type: 'Executable',
    thesis: 'Step-by-step audit framework for distinguishing genuine R&D innovation from maintenance OpEx masquerading as strategic investment.',
    relatedConceptIds: ['innovation-tax', 'r-and-d-ponzi', 'technical-insolvency']
  },
];

// ============================================================================
// 10 MISSING LINKEDIN NEWSLETTERS
// ============================================================================
const MISSING_LINKEDIN: NewEntry[] = [
  {
    id: 'linkedin-tactical-guide-product-ladder',
    title: 'Your Tactical Guide to the Product Ladder',
    url: 'https://www.linkedin.com/pulse/your-tactical-guide-product-ladder-richard-ewing-qerrc/',
    publisher: 'LinkedIn', domain: 'Career Economics', type: 'Evergreen',
    thesis: 'Career progression framework mapping the competency thresholds from associate PM to VP of Product.',
    relatedConceptIds: ['product-economist']
  },
  {
    id: 'linkedin-5-frameworks-double-velocity',
    title: '5 Frameworks That Double Product Velocity and Scale Your Impact',
    url: 'https://www.linkedin.com/pulse/5-frameworks-double-product-velocity-scale-your-impact-richard-ewing-rt2vc/',
    publisher: 'LinkedIn', domain: 'Product Leadership', type: 'Executable',
    thesis: 'Operational frameworks for increasing team throughput through structural efficiency rather than headcount.',
    relatedConceptIds: ['product-economist', 'feature-bloat-calculus', 'coordination-tax']
  },
  {
    id: 'linkedin-100-billion-insight',
    title: 'The $100 Billion Insight',
    url: 'https://www.linkedin.com/pulse/100-billion-insight-richard-ewing-d3irc/',
    publisher: 'LinkedIn', domain: 'AI Economics', type: 'Evergreen',
    thesis: 'Analysis of the structural capital misallocation in enterprise AI investment exceeding revenue generation.',
    relatedConceptIds: ['ai-economics', 'inference-economics', 'ai-volatility-tax']
  },
  {
    id: 'linkedin-cost-quiet-failure',
    title: 'The Cost of a Quiet Failure',
    url: 'https://www.linkedin.com/pulse/cost-quiet-failure-richard-ewing-hwkhc/',
    publisher: 'LinkedIn', domain: 'Product Leadership', type: 'Evergreen',
    thesis: 'Hidden organizational costs when product failures go unreported and compound silently.',
    relatedConceptIds: ['product-economist', 'coordination-tax', 'feature-bloat-calculus']
  },
  {
    id: 'linkedin-one-decision-changes-everything',
    title: 'The One Decision That Changes Everything',
    url: 'https://www.linkedin.com/pulse/one-decision-changes-everything-richard-ewing-cuhyc/',
    publisher: 'LinkedIn', domain: 'Career Economics', type: 'Evergreen',
    thesis: 'The structural career decision to shift from execution contributor to strategic operator.',
    relatedConceptIds: ['product-economist']
  },
  {
    id: 'linkedin-ai-revolution-financial-leadership',
    title: 'The AI Revolution Isn\'t Technical - It\'s a Financial Leadership Problem',
    url: 'https://www.linkedin.com/pulse/ai-revolution-isnt-technical-its-financial-leadership-richard-ewing-2d92c/',
    publisher: 'LinkedIn', domain: 'AI Economics', type: 'Evergreen',
    thesis: 'Positions enterprise AI transformation as a CFO-level capital allocation problem rather than a technology decision.',
    relatedConceptIds: ['ai-economics', 'inference-economics', 'ai-volatility-tax']
  },
  {
    id: 'linkedin-building-last-career-tool',
    title: 'I Am Building the Last Career Tool You\'ll Ever Need',
    url: 'https://www.linkedin.com/pulse/i-am-building-last-career-tool-you-ever-need-richard-ewing-cnk0c/',
    publisher: 'LinkedIn', domain: 'Career Economics', type: 'Time-Sensitive',
    thesis: 'Product announcement and design rationale for a career capital assessment platform.',
    relatedConceptIds: ['product-economist']
  },
  {
    id: 'linkedin-stalled-senior-pm',
    title: 'Why You Stalled as a Senior PM and How to Break the Ceiling',
    url: 'https://www.linkedin.com/pulse/why-you-stalled-senior-pm-how-break-ceiling-richard-ewing-vqf0c/',
    publisher: 'LinkedIn', domain: 'Career Economics', type: 'Evergreen',
    thesis: 'Diagnoses the structural competency gaps that create career plateaus at the Senior PM level.',
    relatedConceptIds: ['product-economist']
  },
  {
    id: 'linkedin-ai-quietly-changing-economics',
    title: 'AI Is Quietly Changing the Economics of Software',
    url: 'https://www.linkedin.com/pulse/ai-quietly-changing-economics-software-richard-ewing-gw8hc/',
    publisher: 'LinkedIn', domain: 'AI Economics', type: 'Evergreen',
    thesis: 'Structural analysis of how AI inference shifts SaaS from zero-marginal-cost to variable-COGS economics.',
    relatedConceptIds: ['ai-economics', 'ai-volatility-tax', 'ai-margin-squeeze']
  },
  {
    id: 'linkedin-stop-negotiating-ai-infrastructure',
    title: 'Stop Negotiating Your AI Infrastructure - Start Auditing It',
    url: 'https://www.linkedin.com/pulse/stop-negotiating-your-ai-infrastructure-richard-ewing-4horc/',
    publisher: 'LinkedIn', domain: 'AI Economics', type: 'Executable',
    thesis: 'Vendor procurement for AI infrastructure treated as a cost audit problem rather than a negotiation exercise.',
    relatedConceptIds: ['inference-economics', 'ai-volatility-tax', 'ai-margin-squeeze']
  },
];

// ============================================================================
// PHASE 2: Fix 11 unused concept pages (add to existing entries)
// ============================================================================
const UNUSED_CONCEPT_FIXES: Record<string, string[]> = {
  // Add these concept slugs to existing entries that semantically match
  'ai-finops': ['cio-claude-api-bill', 'beehiiv-token-burn-analytics', 'beehiiv-why-scaling-breaks-bank'],
  'ai-unit-economics': ['beehiiv-ai-unit-economics-burn-rate', 'builtin-make-ai-profitable', 'beehiiv-product-p-and-l-test'],
  'ai-economist': ['beehiiv-clarity-to-compass', 'linkedin-product-economist-structural-shift', 'linkedin-evaluating-ai-product-managers'],
  'ai-tokenomics-cogs': ['beehiiv-token-burn-analytics', 'cio-claude-api-bill', 'beehiiv-generative-ai-margin-squeeze'],
  'induced-demand-software': ['cio-copilot-bottleneck', 'builtin-vibe-coding-era', 'beehiiv-negative-carry-code-crisis'],
  'agentic-engineering': ['linkedin-ai-taking-actions', 'builtin-agentic-ai-analysis', 'beehiiv-runtime-governance-architecture'],
  'prompt-injection': ['beehiiv-prompt-injection-control-plane', 'builtin-ai-security-breach', 'builtin-ai-security-gates'],
  'innovation-tax': ['cio-innovation-tax-audit', 'linkedin-innovation-tax-deleting-code', 'builtin-deleting-code'],
  'capitalization-matrix': ['beehiiv-rd-capitalization-as-cfo', 'cio-innovation-tax-audit', 'cio-cfo-agile'],
  'systems-governor': ['beehiiv-deterministic-control-plane', 'beehiiv-runtime-governance-architecture', 'linkedin-real-problem-ai-agents'],
  'zombie-code': ['beehiiv-zombie-code-remediation', 'builtin-deleting-code', 'linkedin-innovation-tax-deleting-code'],
};

async function execute() {
  const filePath = 'app/lib/research-corpus.ts';
  let content = fs.readFileSync(filePath, 'utf8');

  // ---- PHASE 1: Add 56 missing entries ----
  const allNew = [...MISSING_BEEHIIV, ...MISSING_LINKEDIN];
  
  // Find the closing bracket of the RESEARCH_CORPUS array
  const closingBracket = content.lastIndexOf('\n];');
  if (closingBracket === -1) {
    console.error('Could not find closing bracket of RESEARCH_CORPUS array');
    process.exit(1);
  }

  // Generate entry strings
  let newEntries = '\n\n  // =========================================================================\n';
  newEntries += '  // EXPANDED CATALOG: Career Economics, Product Fundamentals, AI Strategy\n';
  newEntries += '  // Added via automated catalog expansion - August 2026\n';
  newEntries += '  // =========================================================================\n';
  
  for (const entry of allNew) {
    const thesisSafe = entry.thesis.replace(/'/g, "\\'");
    const titleSafe = entry.title.replace(/'/g, "\\'");
    newEntries += `\n  {\n`;
    newEntries += `    id: '${entry.id}',\n`;
    newEntries += `    title: '${titleSafe}',\n`;
    newEntries += `    url: '${entry.url}',\n`;
    newEntries += `    publisher: '${entry.publisher}',\n`;
    newEntries += `    domain: '${entry.domain}',\n`;
    newEntries += `    type: '${entry.type}',\n`;
    newEntries += `    thesis: '${thesisSafe}',\n`;
    newEntries += `    relatedConceptIds: ${JSON.stringify(entry.relatedConceptIds)}\n`;
    newEntries += `  },\n`;
  }

  content = content.substring(0, closingBracket) + newEntries + content.substring(closingBracket);

  // ---- PHASE 2: Fix 11 unused concept pages ----
  for (const [conceptSlug, targetIds] of Object.entries(UNUSED_CONCEPT_FIXES)) {
    for (const targetId of targetIds) {
      const idPattern = `id: '${targetId}',`;
      const idIndex = content.indexOf(idPattern);
      if (idIndex === -1) {
        console.warn(`  WARNING: Entry '${targetId}' not found for concept '${conceptSlug}'`);
        continue;
      }
      
      // Find the relatedConceptIds array for this entry
      const blockEnd = content.indexOf('\n  },', idIndex);
      const blockContent = content.substring(idIndex, blockEnd);
      
      if (blockContent.includes('relatedConceptIds')) {
        // Add concept slug to existing array
        const relatedStart = content.indexOf('relatedConceptIds:', idIndex);
        const arrayEnd = content.indexOf(']', relatedStart);
        const beforeBracket = content.substring(0, arrayEnd);
        const afterBracket = content.substring(arrayEnd);
        
        // Check if already present
        if (!content.substring(relatedStart, arrayEnd).includes(`'${conceptSlug}'`) &&
            !content.substring(relatedStart, arrayEnd).includes(`"${conceptSlug}"`)) {
          content = beforeBracket + `, '${conceptSlug}'` + afterBracket;
        }
      }
    }
  }

  fs.writeFileSync(filePath, content);
  
  console.log('=== PHASE 1 + PHASE 2 COMPLETE ===');
  console.log(`New entries added: ${allNew.length}`);
  console.log(`Unused concepts fixed: ${Object.keys(UNUSED_CONCEPT_FIXES).length}`);
}

execute().catch(console.error);
