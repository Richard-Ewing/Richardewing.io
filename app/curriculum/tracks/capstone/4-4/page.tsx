import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Module 4.4: Cloud FinOps & Infrastructure Economics | Curriculum | Richard Ewing',
    description: 'Master cloud FinOps: cost allocation, reserved capacity strategy, spot instance economics, multi-cloud strategy, and infrastructure budget optimization.',
    keywords: ['cloud FinOps', 'infrastructure economics', 'cloud cost optimization', 'reserved instances', 'cloud budget'],
    alternates: { canonical: 'https://www.richardewing.io/curriculum/tracks/capstone/4-4' },
};

const lessons = [
    { title: 'Lesson 1: Cloud Cost Anatomy', content: 'Cloud spending is the fastest-growing line item in most engineering budgets. Understanding the anatomy of cloud costs — compute, storage, network, and managed services — is the first step to optimization.', details: [
        { metric: 'Compute (40-60%)', description: 'EC2/GCE/Azure VMs, containers, Lambda functions. The largest cost component. Over-provisioning is rampant because engineers fear performance issues.', benchmark: 'Average utilization of cloud compute: 20-30%. Opportunity: right-size to 60-70% utilization.' },
        { metric: 'Storage (15-25%)', description: 'Block storage, object storage, database storage. Data grows but is rarely cleaned up. 30-50% of stored data hasnt been accessed in 12+ months.', benchmark: 'Lifecycle policies can reduce storage costs 40%+ by moving cold data to cheaper tiers.' },
        { metric: 'Network (10-20%)', description: 'Data transfer between regions, zones, and to the internet. Often the most surprising cost component because its hard to predict.', benchmark: 'Cross-region transfer: $0.01-0.02/GB. At scale: a chatty microservice architecture can generate thousands of dollars in network costs.' },
    ], exercise: 'Pull your last 3 months of cloud bills. Break down by: compute, storage, network, managed services. Which category has the highest waste?' },
    { title: 'Lesson 2: Reservation & Commitment Strategy', content: 'On-demand pricing is 3-4x more expensive than committed pricing. A proper reservation strategy is the easiest 30-60% cost reduction available.', details: [
        { metric: 'Reserved Instances (1yr/3yr)', description: '1-year commitment: 30-40% savings. 3-year commitment: 50-60% savings. Risk: if your needs change, you pay for unused capacity.', benchmark: 'Strategy: reserve your baseline (minimum consistent load), use on-demand for peaks.' },
        { metric: 'Savings Plans', description: 'AWS Savings Plans / GCP CUDs offer flexibility across instance types. Better for dynamic workloads than traditional RIs.', benchmark: 'Cover 60-70% of your baseline with Savings Plans. Leave 30-40% on-demand for flexibility.' },
        { metric: 'Spot/Preemptible Instances', description: '60-90% cheaper than on-demand. Can be terminated with 2 minutes notice. Perfect for batch jobs, CI/CD, and fault-tolerant workloads.', benchmark: 'CI/CD on spot: save 70-80% on build costs. Production databases: never use spot.' },
    ], exercise: 'Analyze your cloud usage: what percentage is consistent (reservable) vs. variable (on-demand)? Calculate savings from committing 60% of your baseline to 1-year reservations.' },
    { title: 'Lesson 3: FinOps Team & Culture', content: 'Cloud cost optimization is not a one-time project — its an ongoing practice. FinOps creates a culture where engineering teams are accountable for their cloud spend.', details: [
        { metric: 'Cost Allocation', description: 'Tag every resource with team, environment, and project. Allocate 100% of cloud costs to business units. Untagged resources go to a "shame" budget that forces cleanup.', benchmark: 'Target: 95%+ of cloud resources properly tagged within 6 months.' },
        { metric: 'Team Cloud Budgets', description: 'Give each team a cloud budget. They own it. Overspend: justify or optimize. Underspend: reallocate. This creates natural incentives for efficiency.', benchmark: 'Teams with budgets reduce waste 20-40% within the first quarter.' },
        { metric: 'Cost Anomaly Detection', description: 'Automated alerts when spending exceeds baseline by 20%+. Catches: forgotten resources, misconfigured auto-scaling, runaway batch jobs.', benchmark: 'Set up: daily cost reports + weekly trend analysis + monthly cost review meetings.' },
    ], exercise: 'Implement cost tagging for your top 5 most expensive cloud services. Set up a daily cost anomaly alert (>20% above 7-day average).' },
];

export default function Module44Page() {
    return (
        <main className="pt-20"><div className="page-container"><div className="max-w-4xl mx-auto">
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">Tracks</Link><span>/</span>
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">Capstone & Applied Practice</Link><span>/</span>
                <span className="text-amber-400 font-bold">Module 4.4</span>
            </div>
            <div className="mb-10">
                <div className="text-xs font-mono text-amber-500 uppercase tracking-widest mb-3">Track 4 — Capstone & Applied Practice</div>
                <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-4">Module 4.4: <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Cloud FinOps & Infrastructure Economics</span></h1>
                <p className="text-lg text-zinc-400 max-w-2xl">Cloud cost anatomy, reservation strategy, spot instance economics, FinOps culture, and team-level cloud budgets.</p>
                <div className="flex items-center gap-4 mt-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">3 Lessons</span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">~50 min</span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">Intermediate-Advanced</span>
                </div>
            </div>
            <div className="space-y-12">{lessons.map((lesson, i) => (<div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"><div className="p-8"><div className="flex items-center gap-3 mb-4"><div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-white/10 flex items-center justify-center"><span className="text-xs font-bold text-white">{i + 1}</span></div><h2 className="text-xl font-grotesk font-bold text-white">{lesson.title}</h2></div><p className="text-zinc-400 mb-6">{lesson.content}</p><div className="space-y-3 mb-6">{lesson.details.map((d, j) => (<div key={j} className="rounded-xl bg-black/20 border border-white/5 p-5"><div className="text-sm font-bold text-white mb-1">{d.metric}</div><p className="text-xs text-zinc-500 mb-2">{d.description}</p><div className="text-[10px] font-mono text-amber-500 uppercase tracking-widest">{d.benchmark}</div></div>))}</div><div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5"><div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">📝 Exercise</div><p className="text-sm text-zinc-300">{lesson.exercise}</p></div></div></div>))}</div>
            <div className="mt-12 flex items-center justify-between">
                <Link href="/curriculum/tracks/capstone/4-3" className="text-sm text-zinc-500 hover:text-white transition-colors">← Module 4.3</Link>
                <Link href="/curriculum/tracks/capstone/4-5" className="px-6 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-sm hover:opacity-90 transition-opacity">Next: Module 4.5 →</Link>
            </div>
        </div></div></main>
    );
}
