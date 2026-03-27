import Link from 'next/link';
import GuidePayGate from '@/app/components/GuidePayGate';
import { auth } from '@clerk/nextjs/server';

export default async function HowToImplementDSPM() {
    const { userId, sessionClaims } = await auth();
    // @ts-ignore
    const hasAccess = !!userId && (sessionClaims?.metadata?.has_yearly_subscription === true || sessionClaims?.metadata?.has_premium_guide_access === true);

    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    {/* Hero */}
                    <div className="mb-12">
                        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-6">
                            <span>Guides</span><span>/</span><span>Technical How-To</span><span>/</span><span className="text-white">DSPM</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-6">
                            How to Implement <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-400">Data Security Posture Management</span>
                        </h1>
                        <p className="text-xl text-zinc-400 leading-relaxed font-mono">
                            Discovering shadow data, mapping toxicity, and locking down the attack surface before an LLM exposes it.
                        </p>
                    </div>

                    {/* Meta Stats */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
                        <div className="card p-4">
                            <div className="text-[10px] text-zinc-500 uppercase mb-1">Time to Implement</div>
                            <div className="text-sm font-bold text-white">4-8 Weeks</div>
                        </div>
                        <div className="card p-4">
                            <div className="text-[10px] text-zinc-500 uppercase mb-1">Primary Defense</div>
                            <div className="text-sm font-bold text-white">Data Exfiltration</div>
                        </div>
                        <div className="card p-4">
                            <div className="text-[10px] text-zinc-500 uppercase mb-1">Architecture</div>
                            <div className="text-sm font-bold text-white">Agentless / API native</div>
                        </div>
                        <div className="card p-4">
                            <div className="text-[10px] text-zinc-500 uppercase mb-1">Required Paradigm</div>
                            <div className="text-sm font-bold text-white">Zero Trust Architecture</div>
                        </div>
                    </div>

                    {/* Content */}
                    <GuidePayGate guideTitle="How to Implement Data Security Posture Management" productId="premium_guide_99" hasAccess={hasAccess}>
                    <div className="prose prose-invert prose-cyan max-w-none">
                        <div className="card p-8 mb-12 bg-red-500/5 border-red-500/20">
                            <h2 className="text-2xl font-grotesk font-bold text-white mb-4 mt-0">The Pre-Requisite to Safe AI</h2>
                            <p className="text-zinc-400">
                                You cannot deploy an enterprise LLM trained on internal multi-modal systems if you don't know where your data is. By 2026, <Link href="/glossary/dspm" className="text-cyan-400 hover:underline">Data Security Posture Management</Link> (DSPM) is the mandatory gateway before adopting Agentic AI workflows.
                            </p>
                        </div>

                        <h3>Step 1: Agentless Discovery</h3>
                        <p>
                            Traditional DLP (Data Loss Prevention) requires heavily invasive endpoint agents that developers despise. The 2026 paradigm utilizes cloud-native API-driven DSPM platforms that scan AWS/GCP data stores dynamically without touching the kernel. Your first task is comprehensive <Link href="/glossary/shadow-ai" className="text-cyan-400 hover:underline">Shadow Data Discovery</Link>. Locate every abandoned S3 bucket and orphaned RDS instance hiding PII.
                        </p>

                        <h3>Step 2: Toxicity Mapping</h3>
                        <p>
                            Not all data is equal. A DSPM architecture must map the "toxicity" of the data. Source code with hardcoded secrets, database dumps containing Social Security Numbers, or unencrypted healthcare records sitting in an open EC2 instance represent maximum toxicity. Data classification should be entirely automated via specialized classification ML models.
                        </p>
                        
                        <h3>Step 3: Continuous Remediation Workflows</h3>
                        <p>
                            Discovery is useless without <Link href="/glossary/automated-remediation" className="text-cyan-400 hover:underline">Automated Remediation</Link>. Wire the DSPM directly into Jira or ServiceNow. When a developer copies a PII database into a non-production environment without masking it, the system automatically detects the lineage breach, severs the IAM access, and pages the responsible engineer.
                        </p>

                        <div className="my-12 p-8 border border-white/10 bg-white/[0.02] rounded-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-[80px] group-hover:bg-red-500/20 transition-all" />
                            <h3 className="text-2xl font-grotesk font-bold text-white mb-2 relative z-10">Protect the Data Plane</h3>
                            <p className="text-zinc-400 mb-6 max-w-xl relative z-10">
                                Master DSPM, Zero Trust, and Cloud Security Economics to shield multi-modal infrastructure from existential exposure.
                            </p>
                            <Link href="/curriculum" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-red-500 text-black font-bold text-sm tracking-wide hover:bg-red-400 transition-colors relative z-10 shadow-[0_0_20px_rgba(239,68,68,0.3)]">
                                Enroll in Track 7: Security Economics →
                            </Link>
                        </div>
                    </div>
                    </GuidePayGate>
                </div>
            </div>
        </main>
    );
}
