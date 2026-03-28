import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';
import { BookOpen, Lock, Unlock, ArrowRight, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Curriculum Vault | Richard Ewing',
    description: 'Secure access to your purchased Engineering Economics curriculum and frameworks.',
};

// Simplified central definition of the 10 core tracks
const vaultTracks = [
    { id: 'cto', title: 'CTO / Engineering Leader', desc: 'Master the economics of engineering organizations', slug: 'cto', count: 18 },
    { id: 'pm', title: 'Product Manager / CPO', desc: 'Think like a Product Economist, not a feature factory', slug: 'pm', count: 19 },
    { id: 'investor', title: 'PE / VC / Investor', desc: 'Technical due diligence for portfolio value creation', slug: 'investor', count: 20 },
    { id: 'ai_enterprise', title: 'AI & Enterprise Architect', desc: 'Master the economics of AI operations', slug: 'ai-enterprise', count: 22 },
    { id: 'devops_economics', title: 'DevOps & Platform Economics', desc: 'CI/CD ROI, Observability spend, and infrastructure accounting', slug: 'devops-economics', count: 15 },
    { id: 'product_mgmt', title: 'Product Management Economics', desc: 'Feature P&L, Prioritization economics, and unit economics', slug: 'product-economics', count: 15 },
    { id: 'security', title: 'Security & Compliance Economics', desc: 'Breach cost modeling, compliance ROI, and insurance', slug: 'security-economics', count: 14 },
    { id: 'data', title: 'Data & Analytics Economics', desc: 'Data warehouse ROI, pipeline spend, and analytics TCO', slug: 'data-economics', count: 15 },
    { id: 'leadership', title: 'Engineering Leadership', desc: 'Hiring capital, retention economics, and team scaling', slug: 'leadership-economics', count: 15 },
    { id: 'startup', title: 'Startup Economics', desc: 'Burn rate, runway extension, and early stage R&D allocation', slug: 'startup-economics', count: 15 },
];

export default async function VaultCurriculumPage() {
    const { userId, sessionClaims } = await auth();
    
    const metadataStr = (sessionClaims?.metadata as any) || {};
    const hasSubscription = metadataStr.has_yearly_subscription === true;
    const unlockedItems = (metadataStr.unlocked_items as string[]) || [];

    // Helper to check if a user owns a track
    const ownsTrack = (trackId: string) => {
        if (hasSubscription) return true;
        return unlockedItems.includes(`module_${trackId}`) || unlockedItems.includes(`module_track_${trackId}`);
    };

    const ownedCount = vaultTracks.filter(t => ownsTrack(t.id)).length;

    return (
        <main className="pt-24 pb-20 page-container min-h-screen">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
                    <div>
                        <div className="flex items-center gap-2 text-cyan-500 font-mono text-[10px] uppercase tracking-widest mb-4">
                            <ShieldCheck className="w-4 h-4" /> Secure Vault Connection
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-4">
                            My Curriculum <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Vault</span>.
                        </h1>
                        <p className="text-zinc-400 text-lg max-w-2xl">
                            Access your unlocked masterclasses, frameworks, and playbooks.
                        </p>
                    </div>

                    <div className="flex items-center gap-4 bg-black/50 border border-white/5 p-4 rounded-xl">
                        <div className="text-right">
                            <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1">Vault Status</div>
                            <div className="font-bold text-white">
                                {hasSubscription ? 'All Access Pass' : `${ownedCount} / ${vaultTracks.length} Tracks Unlocked`}
                            </div>
                        </div>
                        {!hasSubscription && (
                            <a
                                href="/api/buy/full_curriculum"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-bold text-xs uppercase tracking-widest transition-colors"
                            >
                                Upgrade All
                            </a>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {vaultTracks.map((track) => {
                        const isUnlocked = ownsTrack(track.id);
                        
                        return (
                            <div 
                                key={track.id}
                                className={`relative rounded-2xl overflow-hidden border p-6 flex flex-col transition-all group ${
                                    isUnlocked 
                                        ? 'border-cyan-500/30 bg-cyan-500/5 hover:border-cyan-400/50 hover:bg-cyan-500/10' 
                                        : 'border-zinc-800 bg-zinc-900/30 opacity-80'
                                }`}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`p-2 rounded-lg ${isUnlocked ? 'bg-cyan-500/20 text-cyan-400' : 'bg-zinc-800 text-zinc-500'}`}>
                                        <BookOpen className="w-5 h-5" />
                                    </div>
                                    <div className={`flex items-center gap-1.5 px-2 py-1 rounded text-[10px] uppercase font-bold tracking-widest ${isUnlocked ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-zinc-800 text-zinc-500 border border-zinc-700'}`}>
                                        {isUnlocked ? <><Unlock className="w-3 h-3" /> Unlocked</> : <><Lock className="w-3 h-3" /> Locked</>}
                                    </div>
                                </div>
                                
                                <h3 className="text-xl font-bold font-grotesk text-white mb-2">{track.title}</h3>
                                <p className="text-sm text-zinc-400 mb-6 flex-1">{track.desc}</p>
                                
                                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                                    <span className="text-xs text-zinc-500 font-mono">{track.count} Modules</span>
                                    
                                    {isUnlocked ? (
                                        <Link 
                                            href={`/vault/curriculum/tracks/${track.slug}/${
                                                track.slug === 'cto' ? '1-1' :
                                                track.slug === 'pm' ? '2-1' :
                                                track.slug === 'investor' ? '3-1' :
                                                track.slug === 'ai-enterprise' ? '4-1' :
                                                track.slug === 'devops-economics' ? '5-1' :
                                                track.slug === 'product-economics' ? '6-1' :
                                                track.slug === 'security-economics' ? '7-1' :
                                                track.slug === 'data-economics' ? '8-1' :
                                                track.slug === 'leadership-economics' ? '9-1' :
                                                '10-1'
                                            }`} 
                                            className="flex items-center text-sm font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors"
                                        >
                                            Enter Track <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    ) : (
                                        <a 
                                            href={`/api/buy/module_${track.id.replace('-', '_')}?moduleId=track_${track.id}`}
                                            className="flex items-center text-sm font-bold text-zinc-500 hover:text-white transition-colors"
                                        >
                                            Unlock for $29
                                        </a>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
