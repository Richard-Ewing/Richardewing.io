import { redirect } from 'next/navigation';
import { currentUser } from '@clerk/nextjs/server';
import Link from 'next/link';
import { BookOpen, ShieldCheck, ChevronRight, Lock, Download, Zap, Database, TrendingUp, Presentation, Clock, Activity } from 'lucide-react';
import { supabaseAdmin } from '@/lib/supabase';

export const metadata = {
    title: 'Client Vault',
    description: 'Secure access to your premium advisory assets and tools.',
};

export default async function VaultPage() {
    const user = await currentUser();

    if (!user) {
        redirect('/sign-in?redirect_url=/vault');
    }

    const hasPremium = user.publicMetadata?.has_premium_guide_access === true || user.publicMetadata?.has_yearly_subscription === true;
    const hasSubscription = user.publicMetadata?.has_yearly_subscription === true;

    // Fetch historical diagnostic runs for this user
    const { data: rawToolRuns, error } = await supabaseAdmin
        .from('tool_runs')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

    // Safely parse
    const toolRuns = rawToolRuns || [];

    const formatMoney = (num: number) => {
        if (!num) return '$0';
        if (num >= 1000000) return '$' + (num / 1000000).toFixed(1) + 'M';
        if (num >= 1000) return '$' + (num / 1000).toFixed(0) + 'K';
        return '$' + num.toFixed(0);
    };

    return (
        <main className="min-h-screen pt-32 pb-24 px-6">
            <div className="max-w-5xl mx-auto">
                {/* INTELLIGENCE BRIEFING / CONTEXT ENGINE */}
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                        <ShieldCheck className="w-4 h-4 text-cyan-400" />
                        <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">Secure Client Portal</span>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-grotesk font-bold text-white mb-2">
                                Welcome back, <span className="text-cyan-400">{user.firstName || 'Strategist'}</span>
                            </h1>
                            <p className="text-zinc-400 max-w-2xl text-lg">
                                Access your unlocked advisory assets and board-ready PDF diagnostic reports.
                            </p>
                        </div>
                    </div>

                    {/* DYNAMIC RESUME STATE */}
                    <div className="p-6 md:p-8 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-transparent flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden group">
                        {/* Background flare */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none transition-opacity group-hover:opacity-100 opacity-50"></div>
                        
                        <div className="relative z-10">
                            <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                                Active Context
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-2">
                                {toolRuns.length > 0 
                                    ? `Last Action: ${toolRuns[0].tool_id === 'pdi' ? 'Product Debt Index' : 'Diagnostic Audit'}` 
                                    : 'Vault Initialized: Awaiting First Assessment'}
                            </h2>
                            <p className="text-sm text-zinc-300 max-w-xl">
                                {toolRuns.length > 0 
                                    ? `You identified ${formatMoney(toolRuns[0].financial_waste)} in hidden capital waste on ${new Date(toolRuns[0].created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}. Continue iterating on your technical debt models.`
                                    : 'Run your first boardroom-ready diagnostic to baseline your engineering metrics and identify hidden capital waste.'}
                            </p>
                        </div>
                        
                        <div className="relative z-10 shrink-0">
                            <Link 
                                href={toolRuns.length > 0 ? `/tools/${toolRuns[0].tool_id}` : '/tools/pdi'} 
                                className="inline-flex items-center justify-center px-8 py-4 bg-cyan-500 text-black text-sm font-bold shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] uppercase tracking-widest rounded-xl hover:bg-cyan-400 transition-all hover:scale-105"
                            >
                                {toolRuns.length > 0 ? 'Resume Analysis' : 'Start Audit'} <ChevronRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    
                    {/* LEFT COLUMN: Assets & Tools */}
                    <div className="flex-1 space-y-8">
                        
                        {/* UNLOCKED ASSETS */}
                        <section>
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                                Active Assets
                            </h2>
                            
                            {hasPremium || hasSubscription ? (
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="card p-6 border-cyan-500/20 bg-cyan-500/[0.02] hover:bg-cyan-500/[0.05] transition-colors group">
                                        <div className="text-2xl mb-3">📘</div>
                                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">Premium Curriculum</h3>
                                        <p className="text-sm text-zinc-400 mb-4">Full access to engineering economics playbooks and teardowns.</p>
                                        <Link href="/curriculum" className="inline-flex items-center text-xs font-bold text-cyan-400 uppercase tracking-widest">
                                            Access Curriculum <ChevronRight className="w-3 h-3 ml-1" />
                                        </Link>
                                    </div>
                                    <div className="card p-6 border-violet-500/20 bg-violet-500/[0.02] hover:bg-violet-500/[0.05] transition-colors group">
                                        <div className="text-2xl mb-3">🛠️</div>
                                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">Diagnostic Tools</h3>
                                        <p className="text-sm text-zinc-400 mb-4">Run the Product Debt Index and AI Unit Economics calculators.</p>
                                        <Link href="/tools" className="inline-flex items-center text-xs font-bold text-violet-400 uppercase tracking-widest">
                                            Open Tools <ChevronRight className="w-3 h-3 ml-1" />
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                <div className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/50 text-center">
                                    <BookOpen className="w-8 h-8 text-zinc-600 mx-auto mb-3" />
                                    <h3 className="text-lg font-bold text-white mb-2">No Premium Assets Yet</h3>
                                    <p className="text-sm text-zinc-400 mb-6 max-w-md mx-auto">
                                        Unlock the curriculum, premium guides, or advisory resources to see them beautifully organized here.
                                    </p>
                                    <Link href="/guides" className="inline-flex items-center justify-center px-6 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-cyan-400 transition-colors">
                                        Browse Library
                                    </Link>
                                </div>
                            )}
                        </section>

                        {/* DIAGNOSTIC HISTORY (Phase 3) */}
                        <section>
                            <h2 className="text-xl font-bold text-white mb-4 mt-12 flex items-center gap-2">
                                <Database className="w-5 h-5 text-cyan-500" />
                                Diagnostic Artifacts & History
                            </h2>
                            
                            {toolRuns.length > 0 ? (
                                <div className="space-y-4">
                                    {toolRuns.map((run) => (
                                        <div key={run.id} className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900/80 transition-colors">
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                                <div>
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                                                            {run.tool_id === 'pdi' ? 'PDI Audit' : run.tool_id}
                                                        </span>
                                                        <span className="text-xs text-zinc-500 flex items-center gap-1">
                                                            <Clock className="w-3 h-3" />
                                                            {new Date(run.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-lg font-bold text-white">
                                                        {run.tool_id === 'pdi' ? 'Product Debt Index Assessment' : 'Diagnostic Run'}
                                                    </h3>
                                                </div>
                                                
                                                <div className="flex items-center gap-6">
                                                    <div className="text-right">
                                                        <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">Score</div>
                                                        <div className={`text-xl font-bold ${run.score < 50 ? 'text-red-400' : 'text-cyan-400'}`}>
                                                            {run.score}/100
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">Waste Identified</div>
                                                        <div className="text-xl font-bold text-white font-mono">
                                                            {formatMoney(run.financial_waste)}
                                                        </div>
                                                    </div>
                                                    <Link href={`/tools/${run.tool_id}`} className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors group">
                                                        <Activity className="w-5 h-5 text-zinc-400 group-hover:text-cyan-400" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/50 flex flex-col items-center text-center">
                                    <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-4">
                                        <TrendingUp className="w-5 h-5 text-zinc-500" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">Longitudinal Tracking Pending</h3>
                                    <p className="text-sm text-zinc-400 max-w-md mx-auto mb-6">
                                        When you run Enterprise tools like the PDI or AUEB, your quarter-over-quarter snapshots and board-ready PDF reports will be securely saved here.
                                    </p>
                                    <Link href="/tools/pdi" className="inline-flex items-center justify-center px-6 py-2 border border-cyan-500/50 text-cyan-400 text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-cyan-500/10 transition-colors">
                                        Run First Audit
                                    </Link>
                                </div>
                            )}
                        </section>

                    </div>


                    {/* RIGHT COLUMN: Upgrades & Advisory */}
                    <div className="w-full md:w-80 space-y-6">
                        <div className="sticky top-24">
                            
                            {/* FREE TIER USAGE TRACKING */}
                            {!hasSubscription && (
                                <div className="mb-8">
                                    <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 flex items-center justify-between">
                                        Diagnostic Usage
                                        <span className="text-[10px] bg-zinc-900 px-2 py-0.5 rounded text-zinc-400 border border-zinc-800">FREE TIER</span>
                                    </h2>
                                    <div className="card p-5 border-zinc-800 bg-black">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="font-bold text-white">Audits Allocated</h3>
                                            <span className="text-xs font-mono text-zinc-500">{toolRuns.length}/3 Used</span>
                                        </div>
                                        
                                        {/* Progress Bar */}
                                        <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden mb-4">
                                            <div 
                                                className={`h-full transition-all ${
                                                    toolRuns.length >= 3 ? 'bg-red-500 w-full' : 
                                                    toolRuns.length === 2 ? 'bg-cyan-500 w-2/3' : 
                                                    toolRuns.length === 1 ? 'bg-cyan-500 w-1/3' : 
                                                    'bg-cyan-500 w-0'
                                                }`} 
                                            ></div>
                                        </div>
                                        
                                        {toolRuns.length >= 3 ? (
                                            <p className="text-xs text-red-400 font-bold mb-4">Limit reached. Unlock the library to generate unlimited diagnostic reports.</p>
                                        ) : (
                                            <p className="text-xs text-zinc-400 mb-4">{3 - toolRuns.length} board-ready reports remaining this month.</p>
                                        )}
                                        
                                        <Link href="/api/buy/full_curriculum" className={`block text-center w-full py-2 text-[10px] font-bold uppercase tracking-widest rounded transition-all ${toolRuns.length >= 3 ? 'bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:bg-cyan-400' : 'bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 text-white'}`}>
                                            Unlock Unlimited
                                        </Link>
                                    </div>
                                </div>
                            )}

                            <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Available Upgrades</h2>

                            {!hasSubscription && (
                                <div className="card p-5 border-zinc-800 bg-black mb-4 group hover:border-violet-500/30 transition-colors">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-white group-hover:text-violet-400 transition-colors">Full Library Access</h3>
                                        <Lock className="w-3 h-3 text-zinc-600 group-hover:text-violet-400" />
                                    </div>
                                    <p className="text-xs text-zinc-400 mb-4">Unlock all 150 curriculum modules and all premium guides.</p>
                                    <Link href="/api/buy/full_curriculum" className="block text-center w-full py-2 bg-zinc-900 hover:bg-violet-600 text-white text-[10px] font-bold uppercase tracking-widest rounded transition-colors">
                                        Unlock for $199/yr
                                    </Link>
                                </div>
                            )}

                            <div className="card p-5 border-zinc-800 bg-black group hover:border-amber-500/30 transition-colors">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-bold text-white group-hover:text-amber-400 transition-colors">Audit Engagement</h3>
                                    <Lock className="w-3 h-3 text-zinc-600 group-hover:text-amber-400" />
                                </div>
                                <p className="text-xs text-zinc-400 mb-4">Book a fractional CTO engagement or deep-dive R&D capital audit.</p>
                                <Link href="/advisory" className="block text-center w-full py-2 border border-zinc-800 hover:border-amber-500 text-zinc-400 hover:text-amber-400 text-[10px] font-bold uppercase tracking-widest rounded transition-colors">
                                    View Engagements
                                </Link>
                            </div>

                            <div className="mt-8 p-5 rounded-xl bg-gradient-to-br from-zinc-900 to-black border border-zinc-800">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-full overflow-hidden border border-zinc-700">
                                        <img src="/assets/headshot.jpg" alt="Support" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-white">Direct Support</div>
                                        <div className="text-[10px] text-zinc-500">Principal Access</div>
                                    </div>
                                </div>
                                <p className="text-xs text-zinc-400 mb-3">Need help with an asset or looking for custom advisory?</p>
                                <a href="mailto:richard@richardewing.io" className="text-cyan-400 hover:text-cyan-300 text-xs font-semibold">
                                    Contact Richard →
                                </a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
