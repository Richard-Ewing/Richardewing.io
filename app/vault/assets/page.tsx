import { redirect } from 'next/navigation';
import { currentUser } from '@clerk/nextjs/server';
import Link from 'next/link';
import { Download, ShieldCheck, Database, ChevronRight, Lock } from 'lucide-react';

import { SKILLS } from '@/lib/content/skills';

export const metadata = {
    title: 'Governance Assets & Strategy Diagnostics | Richard Ewing',
    description: 'Governance Assets provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
};

export default async function AssetsPage() {
    const user = await currentUser();

    if (!user) {
        redirect('/sign-in?redirect_url=/vault/assets');
    }

    const hasAllAccess = user.publicMetadata?.has_yearly_subscription === true || user.publicMetadata?.is_team_admin === true;
    const unlockedAssets = (user.publicMetadata?.unlocked_assets as string[]) || [];

    // Filter available assets based on unlocks (or all if they have the subscription pass)
    const availableAssets = hasAllAccess 
        ? SKILLS 
        : SKILLS.filter(skill => unlockedAssets.includes(skill.slug));

    return (
        <main className="min-h-screen pt-32 pb-24 px-6 bg-[#F5F0EB]">
            <div className="max-w-5xl mx-auto">
                {/* HEADER */}
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                        <ShieldCheck className="w-4 h-4 text-cyan-900 font-extrabold font-semibold" />
                        <span className="text-xs font-bold font-medium font-mono text-cyan-900 font-extrabold font-semibold uppercase tracking-widest">Asset Provisioning Layer</span>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl font-grotesk font-bold text-[#1A1A1A] mb-4">
                        Governance Infrastructure
                    </h1>
                    <p className="text-[#4A4A4A] max-w-2xl text-lg leading-relaxed">
                        Securely download your licensed operational middleware, YAML policies, and governance orchestration playbooks. Assets are dynamically generated from the `main` branch to ensure you always receive the latest deterministic architecture.
                    </p>
                </div>

                {/* ASSET GRID */}
                <div className="space-y-6">
                    {availableAssets.length > 0 ? (
                        availableAssets.map((assetInfo) => {
                            if (!assetInfo) return null;
                            const slug = assetInfo.slug;
                            
                            return (
                                <div key={slug} className="p-8 rounded-2xl border border-[rgba(0,0,0,0.08)] bg-white hover:border-cyan-500/30 transition-all group flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="px-2 py-1 rounded text-[10px] font-bold font-mono uppercase tracking-widest bg-zinc-100 text-[#4A4A4A] border border-[rgba(0,0,0,0.05)]">
                                                {assetInfo.category}
                                            </span>
                                            <span className="px-2 py-1 rounded text-[10px] font-bold font-mono uppercase tracking-widest bg-cyan-50 text-cyan-900 font-extrabold font-semibold border border-cyan-100">
                                                {assetInfo.version}
                                            </span>
                                        </div>
                                        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">{assetInfo.title}</h2>
                                        <p className="text-[#4A4A4A] text-sm leading-relaxed max-w-2xl">
                                            {assetInfo.description}
                                        </p>
                                    </div>
                                    
                                    <div className="flex-shrink-0">
                                        <a 
                                            href={`/api/assets/download?slug=${slug}`}
                                            className="inline-flex items-center justify-center px-6 py-3 bg-[#1A1A1A] text-white font-bold text-sm rounded shadow-sm hover:bg-zinc-800 transition-colors"
                                            download
                                        >
                                            <Download className="w-4 h-4 mr-2" />
                                            Download Package
                                        </a>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="p-12 rounded-2xl border border-[rgba(0,0,0,0.08)] bg-white text-center flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-zinc-100 flex items-center justify-center mb-6">
                                <Lock className="w-6 h-6 text-zinc-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-3">No Infrastructure Licensed</h2>
                            <p className="text-[#4A4A4A] max-w-md mx-auto mb-8">
                                You do not currently hold an active license for any deterministic governance assets. Browse the marketplace to deploy operational infrastructure.
                            </p>
                            <Link href="/skills" className="inline-flex items-center justify-center px-8 py-3 bg-[#1A1A1A] text-white font-bold rounded hover:bg-zinc-800 transition-colors shadow-sm">
                                View Marketplace
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
