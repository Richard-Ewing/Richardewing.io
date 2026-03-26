import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'The Complete R&D Audit Checklist — 75 Questions Across 6 Domains | Richard Ewing',
    description: 'The complete R&D audit checklist used in $7,500 engagements. 75 questions across 6 domains with scoring rubrics, action items, and remediation frameworks. Free for CTOs and VPs of Engineering.',
    keywords: ['R&D audit checklist', 'engineering audit', 'technical due diligence checklist', 'CTO checklist', 'technology assessment', 'product economist'],
    alternates: { canonical: 'https://www.richardewing.io/checklist' },
    openGraph: {
        title: 'The Complete R&D Audit Checklist — 75 Questions',
        description: '6 domains, 75 questions, scoring rubrics, and remediation frameworks.',
        url: 'https://www.richardewing.io/checklist',
    },
};

const domains = [
    {
        title: 'Engineering Velocity & Delivery',
        icon: '⚡',
        color: 'cyan',
        description: 'How fast and reliably does your engineering organization deliver value?',
        questions: [
            { q: 'What percentage of engineering time is spent on maintenance vs. new features?', why: 'If maintenance exceeds 40%, you may be approaching Technical Insolvency.', action: 'Calculate Innovation Tax: maintenance hours ÷ total hours. Track monthly.', scoring: { red: '>60%', yellow: '40-60%', green: '<40%' } },
            { q: 'What are your DORA metrics (deploy frequency, lead time, failure rate, MTTR)?', why: 'DORA measures delivery speed. Pair with PDI to see if you\'re shipping fast toward insolvency.', action: 'Instrument CI/CD pipeline. Track all 4 metrics weekly.', scoring: { red: 'Monthly deploys, >1wk lead time', yellow: 'Weekly deploys, 1-7d lead time', green: 'Multiple/day, <1hr lead time' } },
            { q: 'What is your cycle time from commit to production?', why: 'Long cycle times compound delays and reduce feedback speed.', action: 'Measure commit-to-production time. Target: <1 hour for elite teams.', scoring: { red: '>1 week', yellow: '1-7 days', green: '<1 day' } },
            { q: 'How often do deployments cause incidents?', why: 'Change failure rate directly measures deployment quality.', action: 'Calculate: failed deployments ÷ total deployments.', scoring: { red: '>30%', yellow: '15-30%', green: '<15%' } },
            { q: 'What is your average sprint completion rate?', why: 'Consistently missing sprint commitments signals estimation or capacity problems.', action: 'Track: stories completed ÷ stories committed per sprint.', scoring: { red: '<60%', yellow: '60-80%', green: '>80%' } },
            { q: 'Do you have feature flags for safe rollouts?', why: 'Feature flags enable incremental releases, A/B testing, and instant rollback.', action: 'Implement feature flag system. Target: all new features behind flags.', scoring: { red: 'No flags', yellow: 'Some features', green: 'All features flagged' } },
            { q: 'What is your code review turnaround time?', why: 'Slow reviews create bottlenecks and context-switching costs.', action: 'Measure: time from PR open to first review. Target: <4 hours.', scoring: { red: '>24 hours', yellow: '4-24 hours', green: '<4 hours' } },
        ],
    },
    {
        title: 'Technical Debt & Architecture',
        icon: '🏗️',
        color: 'red',
        description: 'What is the health of your technology capital, and where is value being destroyed?',
        questions: [
            { q: 'Can you identify your 3 largest sources of technical debt and their financial impact?', why: 'Most organizations cannot quantify debt in dollars. Without financial language, leadership ignores it.', action: 'Run PDI assessment. Assign dollar values to top debt categories.', scoring: { red: 'Cannot identify', yellow: 'Identified but not quantified', green: 'Quantified in dollars' } },
            { q: 'What is your Technical Insolvency Date?', why: 'The exact quarter when maintenance costs consume 100% of engineering capacity.', action: 'Plot Innovation Tax trend. Extrapolate to 100%. That\'s your insolvency date.', scoring: { red: '<6 months away', yellow: '6-18 months', green: '>18 months or improving' } },
            { q: 'What percentage of your codebase has test coverage?', why: 'Low coverage = high change failure rate = slow delivery = more rework costs.', action: 'Measure line/branch coverage. Target: >70% for critical paths.', scoring: { red: '<30%', yellow: '30-70%', green: '>70%' } },
            { q: 'When was your last architecture review?', why: 'Architecture debt is the most expensive form of debt — it requires rewrites, not refactors.', action: 'Establish quarterly Architecture Review Board. Document all decisions.', scoring: { red: 'Never / >12 months', yellow: '6-12 months ago', green: 'Within last quarter' } },
            { q: 'How many services or modules have a single maintainer?', why: 'Single points of failure. If that person leaves, the knowledge leaves with them.', action: 'Audit: map each service to its maintainers. Cross-train where count = 1.', scoring: { red: '>30% of services', yellow: '10-30%', green: '<10%' } },
            { q: 'What is the age distribution of your critical dependencies?', why: 'Outdated dependencies = security vulnerabilities + compatibility issues + upgrade debt.', action: 'Audit dependency ages. Flag anything >2 major versions behind.', scoring: { red: '>50% outdated', yellow: '20-50% outdated', green: '<20% outdated' } },
            { q: 'Do you have automated security scanning in your CI/CD pipeline?', why: 'Manual security reviews don\'t scale. Automated SAST/DAST catches vulnerabilities before production.', action: 'Integrate SAST tool. Block merges with critical vulnerabilities.', scoring: { red: 'No scanning', yellow: 'Manual only', green: 'Automated in CI/CD' } },
        ],
    },
    {
        title: 'AI & Emerging Technology Economics',
        icon: '🤖',
        color: 'violet',
        description: 'Are your AI investments creating or destroying value?',
        questions: [
            { q: 'What is the fully-loaded cost per AI inference request?', why: 'AI features often have hidden variable costs that erode gross margins.', action: 'Instrument per-request cost tracking: compute + tokens + storage + overhead.', scoring: { red: 'Unknown', yellow: 'Estimated', green: 'Tracked per-request' } },
            { q: 'Do you use model routing (different models for different query types)?', why: 'Using frontier models for every query costs 10-50x more than necessary.', action: 'Classify queries by complexity. Route 70% to smaller, cheaper models.', scoring: { red: 'One model for all', yellow: '2-3 models', green: 'Smart routing with 3+ tiers' } },
            { q: 'What percentage of your AI features have positive unit economics?', why: '40-60% of AI features launch unprofitable. Growth accelerates losses.', action: 'Calculate per-feature P&L. Kill or optimize negative-margin features.', scoring: { red: 'Unknown / <30%', yellow: '30-60%', green: '>60% profitable' } },
            { q: 'How much of your production code was generated by AI, and what\'s its defect rate?', why: 'Vibe-coded applications accumulate hallucination debt — debt no one on the team fully understands.', action: 'Track AI-generated code percentage. Measure defect rate vs. human-written code.', scoring: { red: '>30% AI code, no quality tracking', yellow: 'AI code tracked', green: 'AI code tracked + quality monitored' } },
            { q: 'Do you have a model right-sizing strategy?', why: 'Using a Ferrari for the mailbox. Right-sizing cuts AI costs 60-80%.', action: 'Benchmark: test smaller models against quality thresholds. Document findings.', scoring: { red: 'No strategy', yellow: 'Some right-sizing', green: 'Systematic optimization' } },
            { q: 'What guardrails exist for AI output quality?', why: 'Without guardrails: hallucinations, bias, and harmful outputs reach users.', action: 'Implement output validation, safety filters, and quality monitoring.', scoring: { red: 'No guardrails', yellow: 'Basic filters', green: 'Comprehensive guardrail pipeline' } },
        ],
    },
    {
        title: 'Product & Revenue Alignment',
        icon: '💰',
        color: 'emerald',
        description: 'Is engineering investment aligned with revenue generation?',
        questions: [
            { q: 'What is your Revenue Per Engineer (RPE), and how does it trend?', why: 'Declining RPE signals engineering capital misallocation.', action: 'Calculate: ARR ÷ engineering headcount. Track quarterly. Use APER calculator.', scoring: { red: '<$200K or declining', yellow: '$200K-500K, flat', green: '>$500K and growing' } },
            { q: 'Can you identify which features generate revenue and which are zombie features?', why: 'Most organizations maintain features that destroy value. 30-50% of features have <5% usage.', action: 'Instrument feature usage. Identify features with <5% MAU. Run Kill Switch Protocol.', scoring: { red: 'No feature-level tracking', yellow: 'Some tracking', green: 'Full feature-level P&L' } },
            { q: 'Do your PMs own a P&L, or just a backlog?', why: 'PMs who don\'t understand their P&L make uninformed capital allocation decisions every sprint.', action: 'Create per-product P&L. Train PMs on unit economics.', scoring: { red: 'Backlog only', yellow: 'Some financial awareness', green: 'Full P&L ownership' } },
            { q: 'Can you calculate the gross margin of each product line?', why: 'AI features introduce variable COGS. Without margin visibility, you may be scaling losses.', action: 'Allocate engineering + infrastructure costs per product. Calculate margins.', scoring: { red: 'No margin tracking', yellow: 'Aggregate only', green: 'Per-product margins' } },
            { q: 'What would happen if you removed your 10 least-used features tomorrow?', why: 'The Kill Switch Protocol typically recovers 20-40% of engineering capacity from zombie features.', action: 'List 10 lowest-usage features. Calculate maintenance cost of each. Draft removal plan.', scoring: { red: 'Don\'t know usage', yellow: 'Know usage, afraid to cut', green: 'Regular feature pruning' } },
            { q: 'What is your time-to-revenue for new features?', why: 'Long time-to-revenue means engineering investment isn\'t generating returns fast enough.', action: 'Track: feature release date → first revenue attribution. Target: <30 days.', scoring: { red: '>90 days or unknown', yellow: '30-90 days', green: '<30 days' } },
        ],
    },
    {
        title: 'Organization & People',
        icon: '👥',
        color: 'amber',
        description: 'Is your team structured for sustainable, scalable delivery?',
        questions: [
            { q: 'What is your engineering attrition rate over the last 12 months?', why: 'Each departure costs $150K-250K (recruiting + onboarding + lost productivity).', action: 'Calculate: departures ÷ average headcount × 100.', scoring: { red: '>20%', yellow: '10-20%', green: '<10%' } },
            { q: 'What is the average tenure on your engineering team?', why: 'Low tenure means constant knowledge loss and ramp-up costs.', action: 'Track average tenure. Flag teams with <18 month average.', scoring: { red: '<12 months avg', yellow: '12-24 months', green: '>24 months' } },
            { q: 'Is your engineering org structured around products or projects?', why: 'Project-based teams ship and move on. Product teams own outcomes.', action: 'Evaluate: do teams own products end-to-end, or get assigned projects?', scoring: { red: 'Project-based', yellow: 'Mixed', green: 'Product-based, end-to-end ownership' } },
            { q: 'What is your span of control (direct reports per manager)?', why: 'Below 5: manager overhead too high. Above 8: insufficient coaching.', action: 'Audit: count direct reports per manager. Restructure outliers.', scoring: { red: '<4 or >10', yellow: '4-5 or 9-10', green: '6-8' } },
            { q: 'How many key-person dependencies exist?', why: 'If one person\'s departure would halt a project, that\'s a critical risk.', action: 'Map: for each critical system, who are the only people who understand it?', scoring: { red: '>5 single-points-of-failure', yellow: '2-5', green: '0-1' } },
            { q: 'Do you have a documented career ladder with clear levels?', why: 'Without clear progression, top engineers leave for companies that offer it.', action: 'Publish engineering career ladder. Review annually.', scoring: { red: 'No ladder', yellow: 'Informal', green: 'Published with clear criteria' } },
        ],
    },
    {
        title: 'Strategic & Financial',
        icon: '📊',
        color: 'purple',
        description: 'Is your R&D investment being valued, reported, and optimized at the board level?',
        questions: [
            { q: 'What percentage of your "R&D spend" is actually maintenance OpEx?', why: 'The Innovation Tax — many companies report 50% R&D investment when 80% is actually maintenance.', action: 'Audit: categorize every engineering hour as innovation vs. maintenance.', scoring: { red: '>70% maintenance', yellow: '40-70%', green: '<40% maintenance' } },
            { q: 'If a PE firm audited your engineering organization today, what would they find?', why: 'Technical Due Diligence reveals hidden liabilities. Better to find them yourself.', action: 'Conduct an internal pre-diligence audit using this checklist + PDI tool.', scoring: { red: 'Major undisclosed liabilities', yellow: 'Known but unquantified issues', green: 'Clean, documented assessment' } },
            { q: 'What is the accuracy-cost curve for your critical AI features?', why: 'Going from 80% to 95% accuracy often costs 10x more. The Cost of Predictivity must be modeled.', action: 'For each AI feature: plot accuracy vs. cost. Find the diminishing returns inflection point.', scoring: { red: 'Not modeled', yellow: 'Partially modeled', green: 'Fully modeled with trade-off analysis' } },
            { q: 'Can your engineering investment survive a 30% budget cut?', why: 'Knowing your critical path vs. nice-to-have helps make tough decisions before they\'re forced.', action: 'Create a tiered investment plan: must-have (70%), should-have (20%), nice-to-have (10%).', scoring: { red: 'No prioritization framework', yellow: 'Some prioritization', green: 'Tiered investment plan documented' } },
            { q: 'Do you report engineering health metrics to the board?', why: 'Boards that see engineering metrics make better investment decisions.', action: 'Create quarterly technology capital report: PDI, APER, DORA, Innovation Tax.', scoring: { red: 'No engineering metrics to board', yellow: 'Ad-hoc reporting', green: 'Quarterly technology capital report' } },
            { q: 'What is the total cost of ownership for your technology stack?', why: 'Most companies underestimate TCO by 40-60%. Hidden costs: maintenance, integration, training, migration.', action: 'Map TCO for each major platform: license + integration + maintenance + opportunity cost.', scoring: { red: 'Unknown', yellow: 'Partially calculated', green: 'Fully mapped and reviewed annually' } },
        ],
    },
];

const colorClasses: Record<string, { border: string; bg: string; text: string; icon: string }> = {
    cyan: { border: 'border-cyan-500/20', bg: 'bg-cyan-500/5', text: 'text-cyan-400', icon: 'bg-cyan-500/10' },
    red: { border: 'border-red-500/20', bg: 'bg-red-500/5', text: 'text-red-400', icon: 'bg-red-500/10' },
    violet: { border: 'border-violet-500/20', bg: 'bg-violet-500/5', text: 'text-violet-400', icon: 'bg-violet-500/10' },
    emerald: { border: 'border-emerald-500/20', bg: 'bg-emerald-500/5', text: 'text-emerald-400', icon: 'bg-emerald-500/10' },
    amber: { border: 'border-amber-500/20', bg: 'bg-amber-500/5', text: 'text-amber-400', icon: 'bg-amber-500/10' },
    purple: { border: 'border-violet-500/20', bg: 'bg-violet-500/5', text: 'text-violet-400', icon: 'bg-violet-500/10' },
};

export default function ChecklistPage() {
    const totalQuestions = domains.reduce((sum, d) => sum + d.questions.length, 0);

    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-5xl mx-auto">
                    {/* Success Message */}
                    <div className="mb-10 p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 text-center">
                        <div className="text-4xl mb-3">✓</div>
                        <h2 className="text-2xl font-bold text-emerald-400 mb-2">You&apos;re In — Full Checklist Below</h2>
                        <p className="text-zinc-400">You&apos;ve been added to The Product Economist briefing. Here&apos;s the complete diagnostic framework.</p>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-6">
                        The Complete R&amp;D Audit <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Checklist</span>
                    </h1>
                    <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
                        The {totalQuestions} questions used in every <span className="text-white font-bold">$7,500 diagnostic engagement</span>. 
                        Organized across {domains.length} domains with traffic-light scoring, remediation actions, and benchmark thresholds. 
                        This is the same framework used to audit engineering organizations at companies from Series A startups to Fortune 500 enterprises.
                    </p>

                    {/* Stats Bar */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
                        <div className="card p-4 text-center">
                            <div className="text-2xl font-grotesk font-bold text-white">{totalQuestions}</div>
                            <div className="text-xs text-zinc-500">Questions</div>
                        </div>
                        <div className="card p-4 text-center">
                            <div className="text-2xl font-grotesk font-bold text-white">{domains.length}</div>
                            <div className="text-xs text-zinc-500">Domains</div>
                        </div>
                        <div className="card p-4 text-center">
                            <div className="text-2xl font-grotesk font-bold text-white">{totalQuestions}</div>
                            <div className="text-xs text-zinc-500">Scoring Rubrics</div>
                        </div>
                        <div className="card p-4 text-center">
                            <div className="text-2xl font-grotesk font-bold text-white">{totalQuestions}</div>
                            <div className="text-xs text-zinc-500">Action Items</div>
                        </div>
                    </div>

                    {/* How to Use This Checklist */}
                    <div className="card p-8 mb-12 border-cyan-500/20">
                        <h2 className="text-xl font-grotesk font-bold text-white mb-4">📖 How to Use This Checklist</h2>
                        <div className="grid sm:grid-cols-3 gap-6">
                            <div>
                                <div className="text-sm font-bold text-cyan-400 mb-2">Step 1: Self-Assessment</div>
                                <p className="text-xs text-zinc-500">Score each question using the traffic-light rubric. Be honest — this is for your benefit, not anyone else&apos;s.</p>
                            </div>
                            <div>
                                <div className="text-sm font-bold text-amber-400 mb-2">Step 2: Prioritize</div>
                                <p className="text-xs text-zinc-500">Count your red scores. These are your highest-impact remediation opportunities. Start with the domain with the most red.</p>
                            </div>
                            <div>
                                <div className="text-sm font-bold text-emerald-400 mb-2">Step 3: Execute</div>
                                <p className="text-xs text-zinc-500">Use the action items for each question. Tackle 2-3 red items per quarter. Track progress with the free tools below.</p>
                            </div>
                        </div>
                    </div>

                    {/* Scoring Legend */}
                    <div className="flex items-center gap-6 mb-8 text-xs font-mono">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500" /> <span className="text-zinc-400">Critical Risk</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-amber-500" /> <span className="text-zinc-400">Improvement Needed</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-emerald-500" /> <span className="text-zinc-400">On Track</span>
                        </div>
                    </div>

                    {/* Domain Sections */}
                    <div className="space-y-16 mb-16">
                        {domains.map((domain, di) => {
                            const c = colorClasses[domain.color] || colorClasses.cyan;
                            return (
                                <section key={di}>
                                    <div className={`flex items-center gap-4 mb-2`}>
                                        <div className={`w-10 h-10 rounded-xl ${c.icon} border ${c.border} flex items-center justify-center text-xl`}>
                                            {domain.icon}
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-grotesk font-bold text-white">
                                                Domain {di + 1}: {domain.title}
                                            </h2>
                                            <p className="text-xs text-zinc-500">{domain.description}</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4 mt-6">
                                        {domain.questions.map((item, qi) => (
                                            <div key={qi} className={`rounded-xl border ${c.border} bg-white/[0.01] p-6 hover:bg-white/[0.02] transition-all`}>
                                                <div className="flex items-start gap-4">
                                                    <div className={`shrink-0 w-8 h-8 rounded-xl ${c.icon} border ${c.border} flex items-center justify-center font-mono ${c.text} font-bold text-xs`}>
                                                        {String(qi + 1).padStart(2, '0')}
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="text-white font-bold text-base mb-2">{item.q}</h3>
                                                        <p className="text-zinc-500 text-sm mb-3">
                                                            <span className="text-zinc-400 font-semibold">Why: </span>{item.why}
                                                        </p>
                                                        <div className="flex flex-col sm:flex-row gap-3">
                                                            <div className="flex-1 rounded-lg bg-emerald-500/5 border border-emerald-500/10 p-3">
                                                                <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest mb-1">🎯 Action</div>
                                                                <p className="text-xs text-zinc-400">{item.action}</p>
                                                            </div>
                                                            <div className="sm:w-48 rounded-lg bg-white/[0.02] border border-white/5 p-3">
                                                                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">Scoring</div>
                                                                <div className="space-y-1">
                                                                    <div className="flex items-center gap-2 text-xs">
                                                                        <div className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                                                                        <span className="text-zinc-500">{item.scoring.red}</span>
                                                                    </div>
                                                                    <div className="flex items-center gap-2 text-xs">
                                                                        <div className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                                                                        <span className="text-zinc-500">{item.scoring.yellow}</span>
                                                                    </div>
                                                                    <div className="flex items-center gap-2 text-xs">
                                                                        <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                                                                        <span className="text-zinc-500">{item.scoring.green}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Between-domain conversion CTAs */}
                                    {di === 1 && (
                                        <div className="mt-8 p-5 rounded-xl border border-amber-500/20 bg-amber-500/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                            <div>
                                                <div className="text-sm font-bold text-white mb-1">Scored red on 3+ questions so far?</div>
                                                <p className="text-xs text-zinc-400">A 30-minute Gut-Check call identifies whether you have a real problem — or just technical anxiety.</p>
                                            </div>
                                            <a href="/api/buy/gut_check" className="shrink-0 px-5 py-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest hover:bg-amber-500/20 transition-all">
                                                Gut-Check — $450 →
                                            </a>
                                        </div>
                                    )}
                                    {di === 3 && (
                                        <div className="mt-8 p-5 rounded-xl border border-red-500/20 bg-red-500/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                            <div>
                                                <div className="text-sm font-bold text-white mb-1">Multiple red scores across domains?</div>
                                                <p className="text-xs text-zinc-400">The Insolvency Diagnostic quantifies your exposure and delivers a written Risk Report with prioritized remediation.</p>
                                            </div>
                                            <a href="/api/buy/insolvency_diagnostic" className="shrink-0 px-5 py-2.5 rounded-lg bg-red-600 text-white text-xs font-bold uppercase tracking-widest hover:bg-red-500 transition-all">
                                                Full Diagnostic — $2,500 →
                                            </a>
                                        </div>
                                    )}
                                </section>
                            );
                        })}
                    </div>

                    {/* Tools CTA */}
                    <div className="card p-8 text-center mb-12 border-cyan-500/20">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">🛠️ Answer These Questions With Free Tools</h2>
                        <p className="text-zinc-400 mb-6">Don&apos;t guess — use our calculators to get accurate scores for the metrics above.</p>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                            <Link href="/tools/pdi" className="card p-4 hover:border-cyan-500/30 transition-all">
                                <div className="text-lg mb-1">📊</div>
                                <div className="text-sm font-bold text-white">PDI Calculator</div>
                                <div className="text-[10px] text-zinc-500">Technical Debt Score</div>
                            </Link>
                            <Link href="/tools/aper" className="card p-4 hover:border-cyan-500/30 transition-all">
                                <div className="text-lg mb-1">⚡</div>
                                <div className="text-sm font-bold text-white">APER Calculator</div>
                                <div className="text-[10px] text-zinc-500">Revenue Per Engineer</div>
                            </Link>
                            <Link href="/tools/aueb" className="card p-4 hover:border-cyan-500/30 transition-all">
                                <div className="text-lg mb-1">💰</div>
                                <div className="text-sm font-bold text-white">AUEB Calculator</div>
                                <div className="text-[10px] text-zinc-500">AI Unit Economics</div>
                            </Link>
                            <Link href="/tools/ev-se" className="card p-4 hover:border-cyan-500/30 transition-all">
                                <div className="text-lg mb-1">🧮</div>
                                <div className="text-sm font-bold text-white">EV-SE Calculator</div>
                                <div className="text-[10px] text-zinc-500">Engineering Valuation</div>
                            </Link>
                        </div>
                    </div>

                    {/* CTA: Advisory */}
                    <div className="text-center py-12 border-t border-white/10">
                        <h2 className="text-2xl font-bold text-white mb-4">Want These Questions Answered Professionally?</h2>
                        <p className="text-zinc-400 mb-8 max-w-lg mx-auto">Book a diagnostic engagement and get a written executive summary with quantified findings, benchmarks, and a prioritized remediation roadmap.</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="/api/buy/strategy_session" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-cyan-400 transition-colors">
                                Book Strategy Session →
                            </a>
                            <a href="/api/buy/full_audit" className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-xs rounded-xl hover:border-cyan-500 hover:text-cyan-400 transition-all">
                                Full R&amp;D Audit ($7,500) →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
