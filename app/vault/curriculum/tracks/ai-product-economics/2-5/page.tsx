import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Module 2.5: AI Governance & Safety Costs | Curriculum | Richard Ewing',
    description: 'Master AI governance economics: guardrail infrastructure, content filtering costs, bias testing, red teaming budgets, and regulatory compliance.',
    keywords: ['AI governance', 'AI safety costs', 'guardrails', 'AI red teaming', 'AI compliance', 'responsible AI'],
    alternates: { canonical: 'https://www.richardewing.io/curriculum/tracks/ai-product-economics/2-5' },
};

const lessons = [
    { title: 'Lesson 1: The Guardrail Tax', content: 'AI guardrails (content filters, safety checks, output validation) add latency and cost to every request. Understanding this "guardrail tax" is essential for accurate AI economics.', details: [
        { metric: 'Input Guardrails', description: 'Checking user inputs for prompt injection, harmful content, or policy violations before sending to the LLM. Adds 50-200ms latency and $0.001-0.005 per request.', benchmark: 'Cost: 5-15% added to base inference cost' },
        { metric: 'Output Guardrails', description: 'Validating LLM outputs against safety policies, factual accuracy checks, PII detection, and format validation. Can double the processing time per request.', benchmark: 'Cost: 10-30% added to base inference cost' },
        { metric: 'Guardrail Infrastructure', description: 'NeMo Guardrails, Guardrails AI, or custom solutions require dedicated infrastructure: hosting, monitoring, and maintenance of the guardrail system itself.', benchmark: 'Infrastructure cost: $500-5,000/month depending on scale' },
    ], exercise: 'Audit your current AI guardrails. Calculate: (guardrail processing time × cost) as a percentage of total request cost. Is your guardrail tax sustainable?' },
    { title: 'Lesson 2: Testing & Red Teaming Budgets', content: 'Responsible AI requires ongoing testing: red teaming, bias audits, adversarial testing, and compliance checks. These are recurring costs, not one-time expenses.', details: [
        { metric: 'Red Team Operations', description: 'Hiring or contracting red teamers to find AI vulnerabilities: prompt injection, jailbreaks, data extraction, bias exploitation. Essential before and after every major model change.', benchmark: 'Budget: $5K-$20K per red team engagement. Frequency: quarterly or per major release.' },
        { metric: 'Bias & Fairness Testing', description: 'Regular testing across demographic groups, languages, and edge cases. Automated bias testing tools + manual review of edge cases.', benchmark: 'Budget: $2K-$10K per audit cycle. Required for regulated industries.' },
        { metric: 'Eval Suites & Benchmarking', description: 'Building and maintaining evaluation suites to track model quality over time. Model performance degrades (model drift) — you need automated checks to catch it.', benchmark: 'Engineering time: 1-2 engineers × 20% time = ongoing eval infrastructure investment' },
    ], exercise: 'Create a 12-month AI safety budget: quarterly red teaming + monthly automated testing + annual bias audit. What percentage of your AI budget goes to safety?' },
    { title: 'Lesson 3: Regulatory Compliance Costs', content: 'The EU AI Act, CCPA, GDPR, and industry-specific regulations create compliance obligations for AI features. Non-compliance penalties dwarf the cost of compliance.', details: [
        { metric: 'EU AI Act Compliance', description: 'High-risk AI systems require conformity assessments, technical documentation, transparency obligations, and human oversight mechanisms. Timeline: August 2026 for most provisions.', benchmark: 'Compliance cost: $50K-$500K per high-risk AI system. Penalty: up to 7% of global revenue.' },
        { metric: 'Data Privacy (GDPR/CCPA)', description: 'AI training on personal data requires consent, data processing agreements, right-to-deletion mechanisms, and data processing impact assessments (DPIAs).', benchmark: 'GDPR fine risk: up to 4% of annual global turnover' },
        { metric: 'SOC 2 + AI Controls', description: 'SOC 2 Type II with AI-specific controls: model access controls, inference logging, output monitoring, data handling procedures.', benchmark: 'SOC 2 audit with AI controls: $30K-$80K annually' },
    ], exercise: 'Identify which AI regulations apply to your product. For each: estimate compliance cost, deadline, and non-compliance penalty. Calculate the ROI of compliance.' },
];

export default function Module25Page() {
    return (
        <main className="pt-20"><div className="page-container"><div className="max-w-4xl mx-auto">
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">Tracks</Link><span>/</span>
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">AI Product Economics</Link><span>/</span>
                <span className="text-violet-400 font-bold">Module 2.5</span>
            </div>
            <div className="mb-10">
                <div className="text-xs font-mono text-violet-500 uppercase tracking-widest mb-3">Track 2 — AI Product Economics</div>
                <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-4">Module 2.5: <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">AI Governance & Safety Costs</span></h1>
                <p className="text-lg text-zinc-400 max-w-2xl">The guardrail tax, red teaming budgets, bias testing, and regulatory compliance. The hidden costs of responsible AI — and why they&#39;re worth every dollar.</p>
                <div className="flex items-center gap-4 mt-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-violet-500/10 text-violet-400 border border-violet-500/20">3 Lessons</span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">~50 min</span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-red-500/10 text-red-400 border border-red-500/20">Advanced</span>
                </div>
            </div>
            <div className="space-y-12">{lessons.map((lesson, i) => (<div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"><div className="p-8"><div className="flex items-center gap-3 mb-4"><div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center"><span className="text-xs font-bold text-white">{i + 1}</span></div><h2 className="text-xl font-grotesk font-bold text-white">{lesson.title}</h2></div><p className="text-zinc-400 mb-6">{lesson.content}</p><div className="space-y-3 mb-6">{lesson.details.map((d, j) => (<div key={j} className="rounded-xl bg-black/20 border border-white/5 p-5"><div className="text-sm font-bold text-white mb-1">{d.metric}</div><p className="text-xs text-zinc-500 mb-2">{d.description}</p><div className="text-[10px] font-mono text-violet-500 uppercase tracking-widest">{d.benchmark}</div></div>))}</div><div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5"><div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">📝 Exercise</div><p className="text-sm text-zinc-300">{lesson.exercise}</p></div></div></div>))}</div>
            <div className="mt-12 flex items-center justify-between">
                <Link href="/curriculum/tracks/ai-product-economics/2-4" className="text-sm text-zinc-500 hover:text-white transition-colors">← Module 2.4</Link>
                <Link href="/curriculum/tracks/ai-product-economics/2-6" className="px-6 py-3 rounded-lg bg-gradient-to-r from-violet-500 to-purple-500 text-white font-bold text-sm hover:opacity-90 transition-opacity">Next: Module 2.6 →</Link>
            </div>
        </div></div></main>
    );
}
