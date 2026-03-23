import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Case Studies | Richard Ewing — Product Economist Advisory Results',
    description: 'Real advisory results: how technology leaders used diagnostic tools and fractional CTO services to reduce tech debt, improve engineering ROI, and make AI features profitable.',
    keywords: ['advisory case studies', 'fractional CTO results', 'engineering ROI case study', 'tech debt reduction', 'AI unit economics', 'Richard Ewing advisory'],
    alternates: { canonical: 'https://www.richardewing.io/case-studies' },
    openGraph: { title: 'Case Studies | Richard Ewing', description: 'Real advisory results from technology leadership engagements.', url: 'https://www.richardewing.io/case-studies', type: 'website' },
};

const caseStudies = [
    {
        id: 'saas-tech-debt',
        title: 'SaaS Platform: 47% → 23% Maintenance Burden',
        industry: 'B2B SaaS',
        engagement: 'Diagnostic + Fractional CTO',
        challenge: 'Series B SaaS company with 40 engineers spending 47% of engineering time on maintenance. Feature velocity had declined 60% over 18 months. Board was questioning engineering leadership.',
        approach: 'Ran PDI audit to quantify maintenance burden in dollar terms. Identified $2.1M annual engineering spend on zero-value maintenance. Implemented Kill Switch Protocol to deprecate 12 zombie features. Restructured team topology.',
        results: ['Maintenance burden reduced from 47% to 23% in 6 months', 'Recovered $1.4M in engineering capacity', 'Deployment frequency improved from monthly to weekly', 'Feature velocity increased 2.8x'],
        tools: ['Product Debt Index (PDI)', 'Kill Switch Protocol'],
        color: 'cyan',
    },
    {
        id: 'pe-portfolio',
        title: 'PE Portfolio: $2M Waste Identified Across 4 Companies',
        industry: 'Private Equity',
        engagement: 'Board Advisor',
        challenge: 'Growth-equity PE firm with 4 portfolio companies ranging from $5M-$30M ARR. No visibility into engineering efficiency. Two portfolio companies showing declining DORA metrics.',
        approach: 'Conducted cross-portfolio PDI audits. Benchmarked each company against industry peers using APER diagnostic. Identified common patterns: over-investment in custom tooling, understaffed platform teams, and absence of technical debt measurement.',
        results: ['$2M in annual engineering waste identified', 'Standardized DORA metrics tracking across portfolio', 'One portfolio company avoided $800K custom build via vendor evaluation', 'Technical due diligence framework now used for all new acquisitions'],
        tools: ['PDI Audit', 'APER Diagnostic', 'DORA Metrics'],
        color: 'purple',
    },
    {
        id: 'ai-unit-economics',
        title: 'AI Product: Unit Economics Turned Positive',
        industry: 'AI/ML SaaS',
        engagement: 'Diagnostic + Advisory',
        challenge: 'Seed-stage AI startup burning $180K/month on inference costs. Each customer interaction cost $0.47 but was priced at $0.10. AI features were popular but economically unviable at scale.',
        approach: 'Used AUEB calculator to map Cost of Predictivity curve. Discovered that 80% accuracy (acceptable for use case) cost 90% less than 95% accuracy. Redesigned architecture: small model for simple queries, large model only for complex ones.',
        results: ['Cost per interaction reduced from $0.47 to $0.08', 'AI feature margin flipped from -370% to +20%', 'Runway extended by 14 months without additional fundraising', 'Achieved product-market fit with sustainable unit economics'],
        tools: ['AI Unit Economics Benchmark (AUEB)', 'Cost of Predictivity Framework'],
        color: 'emerald',
    },
    {
        id: 'due-diligence',
        title: 'M&A Due Diligence: Saved $4M on Acquisition',
        industry: 'Enterprise Software',
        engagement: 'Board Advisor',
        challenge: 'Strategic acquirer evaluating a $25M acquisition target. Initial technical due diligence by internal team found "no major issues." Board wanted independent verification before closing.',
        approach: 'Conducted comprehensive technical due diligence using PDI framework. Discovered: 68% maintenance burden (vs. 30% reported), 3 critical dependencies on unmaintained OSS libraries, and Technical Insolvency Date projected at 14 months.',
        results: ['Identified $4M in hidden technical debt not disclosed in initial DD', 'Negotiated $4M purchase price reduction based on findings', 'Post-acquisition remediation plan saved additional $1.2M', 'Acquirer now uses PDI framework for all technical due diligence'],
        tools: ['PDI Audit', 'Technical Insolvency Date Calculator'],
        color: 'amber',
    },
    {
        id: 'engineering-hiring',
        title: 'Engineering Hiring: 3x Quality Improvement',
        industry: 'Fintech',
        engagement: 'Fractional CTO',
        challenge: 'Fast-growing fintech with 60% first-year engineer attrition. Traditional coding interviews favored coding speed over engineering judgment. New hires couldn\'t review AI-generated code effectively.',
        approach: 'Replaced traditional coding interviews with Audit Interview protocol. Candidates evaluate AI-generated code with hidden flaws instead of writing code from scratch. Focused on verification skills, severity ranking, and ship/no-ship judgment.',
        results: ['First-year attrition dropped from 60% to 18%', 'Time-to-productivity for new hires improved by 40%', 'Critical bug detection rate improved 3x', '92% of engineering team rated new hires as "strong" or "exceptional"'],
        tools: ['Audit Interview Protocol'],
        color: 'rose',
    },
    {
        id: 'valuation-optimization',
        title: 'Series C: $12M Valuation Uplift from Metrics',
        industry: 'B2B SaaS',
        engagement: 'Advisory',
        challenge: 'Series B SaaS company preparing for Series C fundraise. NRR was 105% but board believed it should be higher. Engineering metrics weren\'t investor-ready. No clear story connecting engineering investment to business outcomes.',
        approach: 'Used EV-SE to model valuation scenarios. Identified that improving NRR from 105% to 115% would increase valuation multiple by 2x. Focused engineering resources on expansion features and customer success tooling.',
        results: ['NRR improved from 105% to 118% in 9 months', 'Series C closed at $12M higher valuation than initial board target', 'Investor deck included PDI and APER metrics — differentiated from every other pitch', 'Engineering story became the strongest section of the fundraise narrative'],
        tools: ['Enterprise Value Scenario Engine (EV-SE)', 'APER Diagnostic'],
        color: 'blue',
    },
    {
        id: 'ai-governance',
        title: 'Enterprise: AI Governance Framework Implementation',
        industry: 'Healthcare SaaS',
        engagement: 'Board Advisor',
        challenge: 'Healthcare SaaS company deploying AI features that process patient data. No AI governance framework. Board concerned about EU AI Act compliance and HIPAA implications of AI-generated recommendations.',
        approach: 'Implemented AI governance framework based on Exogram principles: AI liability gradient assessment, deterministic governance for high-risk decisions, provenance tracking for AI-generated recommendations, and PII air gap for patient data.',
        results: ['AI governance framework implemented in 12 weeks', 'Achieved EU AI Act compliance for high-risk AI features', 'Reduced AI-related incident rate by 85%', 'Board confidence in AI deployment increased from 2/10 to 8/10'],
        tools: ['AI Liability Gradient Framework', 'Exogram Governance Model'],
        color: 'teal',
    },
    {
        id: 'platform-migration',
        title: 'Monolith Migration: Avoided $3M Rewrite',
        industry: 'E-commerce SaaS',
        engagement: 'Fractional CTO',
        challenge: 'E-commerce platform with 8-year-old monolith. Engineering team proposed full rewrite to microservices ($3M, 18 months). Board was skeptical after hearing Joel Spolsky\'s warnings about rewrites.',
        approach: 'Conducted PDI audit. Found that only 30% of the monolith was causing 80% of maintenance burden. Recommended modular monolith approach with strangler fig pattern instead of full rewrite. Prioritized the 30% that mattered.',
        results: ['Avoided $3M rewrite — total cost was $400K over 9 months', 'Maintenance burden reduced from 55% to 28%', 'Deployment frequency improved from bi-weekly to daily', 'Team morale improved significantly (NPS +45 points)'],
        tools: ['PDI Audit', 'Feature Bloat Calculus', 'Strangler Fig Pattern'],
        color: 'indigo',
    },
];

export default function CaseStudiesPage() {
    return (
        <main className="pt-24 pb-20">
            <div className="page-container">
                <section className="text-center mb-16">
                    <p className="text-xs font-mono text-cyan-500 uppercase tracking-widest mb-4">Advisory Results</p>
                    <h1 className="text-4xl md:text-5xl font-grotesk font-bold text-white mb-6">
                        Real Results.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Quantified Impact.</span>
                    </h1>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Anonymized case studies from advisory engagements. Every result is measured, not estimated.
                    </p>
                </section>

                <div className="space-y-8 max-w-4xl mx-auto">
                    {caseStudies.map((cs) => (
                        <article key={cs.id} className="card p-8 hover:border-white/20 transition-all">
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <span className="text-xs font-mono text-cyan-500 uppercase tracking-wider">{cs.industry}</span>
                                <span className="text-gray-600">•</span>
                                <span className="text-xs text-gray-500">{cs.engagement}</span>
                            </div>

                            <h2 className="text-xl font-bold text-white mb-4">{cs.title}</h2>

                            <div className="space-y-4 mb-6">
                                <div>
                                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Challenge</h3>
                                    <p className="text-gray-300 text-sm">{cs.challenge}</p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Approach</h3>
                                    <p className="text-gray-300 text-sm">{cs.approach}</p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-2">Results</h3>
                                    <ul className="space-y-1">
                                        {cs.results.map((result, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                                <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                                                {result}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                                {cs.tools.map((tool) => (
                                    <span key={tool} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>

                {/* CTA */}
                <section className="text-center mt-16">
                    <div className="card p-10 border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-transparent max-w-2xl mx-auto">
                        <h2 className="text-2xl font-bold text-white mb-4">Your results could be next.</h2>
                        <p className="text-gray-400 mb-6">Start with a Diagnostic to quantify your engineering ROI — or book a call to discuss your situation.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/pricing" className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold rounded-lg hover:opacity-90 transition-opacity text-sm">
                                View Pricing →
                            </Link>
                            <Link href="/advisory" className="px-6 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-sm">
                                Book Free Call →
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
