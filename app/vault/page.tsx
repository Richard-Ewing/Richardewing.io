import { redirect } from 'next/navigation';
import { currentUser } from '@clerk/nextjs/server';
import Link from 'next/link';
import { BookOpen, ShieldCheck, ChevronRight, Lock, Download, Zap, Database, TrendingUp, Presentation, Clock, Activity } from 'lucide-react';
import { supabaseAdmin } from '@/lib/supabase';
import progressStyles from '../styles/progress.module.css';

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

    // Parallel fetch required data
    const [
        { data: rawToolRuns, error: runsError },
        { data: contentProgressRaw, error: progressError },
        { data: globalToolRuns }
    ] = await Promise.all([
        supabaseAdmin
            .from('user_tool_runs')
            .select('*')
            .eq('user_id', user.id)
            .order('created_at', { ascending: false }),
        supabaseAdmin
            .from('user_content_progress')
            .select('*')
            .eq('user_id', user.id),
        supabaseAdmin
            .from('user_tool_runs')
            .select('output_metrics, tool_id')
            .limit(1000)
    ]);

    // Safely parse
    const toolRuns = rawToolRuns || [];
    const contentProgress = contentProgressRaw?.filter(p => p.content_type === 'curriculum') || [];
    
    // Global Data Moat Aggregation
    let totalAuebMargin = 0; let auebCount = 0;
    let totalPdiWaste = 0; let pdiCount = 0;
    if (globalToolRuns) {
        globalToolRuns.forEach(run => {
            const lowerToolId = run.tool_id?.toLowerCase();
            if (lowerToolId === 'aueb' && run.output_metrics?.grossMargin) {
                totalAuebMargin += Number(run.output_metrics.grossMargin); 
                auebCount++;
            }
            if (lowerToolId === 'pdi' && (run.output_metrics?.financial_waste || (run as any).financial_waste)) {
                totalPdiWaste += Number(run.output_metrics?.financial_waste ?? (run as any).financial_waste); 
                pdiCount++;
            }
        });
    }
    const globalAuebMargin = auebCount > 0 ? (totalAuebMargin / auebCount).toFixed(1) : '68.5';
    const globalPdiWaste = pdiCount > 0 ? (totalPdiWaste / pdiCount) : 1250000;
    
    // Progress Flywheel Calculation
    const completedCount = contentProgress.filter(p => p.is_completed).length;
    // Dynamically retrieve total modules count to stay updated as tracks expand
    const curriculumData = await import('@/lib/curriculum-data');
    const totalModulesCount = curriculumData.getAllModuleSlugs().length;
    const completionPercentage = typeof Math !== 'undefined' ? Math.min(100, Math.round((completedCount / totalModulesCount) * 100)) : 0;
    const circumference = 2 * Math.PI * 45; // r=45
    const strokeDashoffset = circumference - (completionPercentage / 100) * circumference;

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
                    
                    {/* LEFT COLUMN: Main Dash */}
                    <div className="flex-1 space-y-8">

                        {/* PROGRESS FLYWHEEL SECTION */}
                        <section className="card p-6 border-violet-500/20 bg-violet-500/[0.02] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
                            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-8">
                                <div className="relative w-32 h-32 flex-shrink-0">
                                    <svg className="w-full h-full transform -rotate-90">
                                        <circle cx="64" cy="64" r="45" fill="none" stroke="currentColor" strokeWidth="8" className="text-white/5" />
                                        <circle 
                                            cx="64" cy="64" r="45" fill="none" stroke="currentColor" strokeWidth="8" 
                                            className="text-violet-500 transition-all duration-1000 ease-out"
                                            strokeDasharray={circumference}
                                            strokeDashoffset={strokeDashoffset}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="text-2xl font-grotesk font-bold text-white">{completionPercentage}%</span>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-2">Architectural Mastery</h2>
                                    <p className="text-sm text-zinc-400 mb-4">
                                        You have mastered <strong className="text-violet-400">{completedCount}</strong> out of <strong className="text-white">{totalModulesCount}</strong> core modules across {Math.ceil(totalModulesCount / 15)} disciplines. The curriculum continually adapts to macroeconomic trends.
                                    </p>
                                    <Link href="/vault/curriculum/tracks" className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-white transition-all">
                                        Explore All {Math.ceil(totalModulesCount / 15)} Tracks <ChevronRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </section>
                        
                        {/* CONTINUE LEARNING */}
                        {contentProgress.length > 0 && (
                            <section>
                                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <BookOpen className="w-5 h-5 text-emerald-500" />
                                    Continue Learning
                                </h2>
                                <div className="space-y-3">
                                    {/* Await the import outside the map callback */}
                                    {await (async () => {
                                        const { tracks } = await import('@/app/lib/curriculum-tracks-ui');
                                        return contentProgress.map(progress => {
                                            // Resolve exact href via registry
                                            let resolvedHref = `/vault/curriculum/tracks/${progress.content_id.toLowerCase().replace(/\s+/g, '-')}`;
                                            for(const t of tracks) {
                                                const mod = t.modules.find(m => m.id === progress.content_id);
                                                if (mod && mod.href) resolvedHref = mod.href;
                                            }

                                            return (
                                                <Link key={progress.id} href={resolvedHref} className="block card p-4 border-emerald-500/20 bg-emerald-500/[0.02] hover:bg-emerald-500/[0.05] hover:border-emerald-500/40 transition-all group">
                                                    <div className="flex items-center justify-between mb-3">
                                                        <h3 className="text-white font-bold group-hover:text-emerald-400 transition-colors uppercase font-grotesk tracking-widest">{progress.content_id}</h3>
                                                        {progress.is_completed ? (
                                                            <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest border border-emerald-500/30 px-2 py-0.5 rounded-full bg-emerald-500/10">Completed</span>
                                                        ) : (
                                                            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">{progress.progress_percentage}% Complete</span>
                                                        )}
                                                    </div>
                                                    <div className="w-full h-1.5 bg-black rounded-full overflow-hidden border border-white/5">
                                                        <div 
                                                            className={`h-full transition-all duration-1000 ${progressStyles[`w_${Math.max(Math.round(progress.progress_percentage), 5)}`]} ${progress.is_completed ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'bg-gradient-to-r from-emerald-600 to-cyan-500 object-cover'}`}
                                                        />
                                                    </div>
                                                </Link>
                                            );
                                        });
                                    })()}
                                </div>
                            </section>
                        )}


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
                                    
                                    {/* ENTERPRISE B2B ADMIN PANEL */}
                                    {user.publicMetadata?.is_team_admin === true && (
                                        <div className="card p-6 border-amber-500/30 bg-amber-500/[0.02] hover:bg-amber-500/[0.05] transition-colors group sm:col-span-2">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center gap-3">
                                                    <div className="text-2xl">🏢</div>
                                                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">Enterprise Team Management</h3>
                                                </div>
                                                <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[10px] uppercase font-bold tracking-widest rounded-full">Admin</span>
                                            </div>
                                            <p className="text-sm text-zinc-400 mb-4">Manage your B2B enterprise license, view your team member seating ledger, and copy your invite URL.</p>
                                            <Link href="/vault/team" className="inline-flex items-center text-xs font-bold text-amber-400 uppercase tracking-widest hover:text-amber-300">
                                                Open Admin Dashboard <ChevronRight className="w-3 h-3 ml-1" />
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <div className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/50 text-center">
                                        <BookOpen className="w-8 h-8 text-zinc-600 mx-auto mb-3" />
                                        <h3 className="text-lg font-bold text-white mb-2">No Premium Assets Yet</h3>
                                        <p className="text-sm text-zinc-400 mb-6 max-w-md mx-auto">
                                            Unlock the curriculum, premium playbooks, or advisory resources to see them beautifully organized here.
                                        </p>
                                        <Link href="/curriculum/tracks" className="inline-flex items-center justify-center px-6 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-cyan-400 transition-colors">
                                            Browse Library
                                        </Link>
                                    </div>
                                    
                                    {/* JOIN A TEAM / CORPORATE SEAT */}
                                    <div className="p-6 rounded-2xl border border-dashed border-zinc-700 bg-black text-center group hover:border-cyan-500/30 transition-colors">
                                        <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-widest">Enterprise Invite?</h3>
                                        <p className="text-xs text-zinc-500 mb-4 max-w-sm mx-auto">
                                            If your CTO or company purchased an enterprise team license, click below to claim your corporate seat.
                                        </p>
                                        <Link href="/vault/join" className="inline-flex items-center text-[10px] font-bold text-cyan-500 uppercase tracking-widest group-hover:text-cyan-400">
                                            Enter Invite Code <ChevronRight className="w-3 h-3 ml-1" />
                                        </Link>
                                    </div>
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
                                                        <div className={`text-xl font-bold ${(run.output_metrics?.score ?? run.score) < 50 ? 'text-red-400' : 'text-cyan-400'}`}>
                                                            {run.output_metrics?.score ?? run.score ?? 0}/100
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">Waste Identified</div>
                                                        <div className="text-xl font-bold text-white font-mono">
                                                            {formatMoney(run.output_metrics?.financial_waste ?? run.financial_waste ?? 0)}
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
                        <div className="sticky top-24 space-y-8">

                            {/* STATE OF INDUSTRY ECONOMICS - GLOBAL DATA MOAT */}
                            <div>
                                <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 flex items-center justify-between">
                                    Industry Benchmarks
                                    <span className="text-[10px] bg-blue-500/10 px-2 py-0.5 rounded text-blue-400 border border-blue-500/20">Moat</span>
                                </h2>
                                <div className="card border-blue-500/20 bg-blue-500/[0.02]">
                                    <div className="p-5 border-b border-white/5">
                                        <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">Global AI Unit Economics avg.</div>
                                        <div className="flex items-end gap-2 text-white">
                                            <span className="text-3xl font-grotesk font-bold">{globalAuebMargin}%</span>
                                            <span className="text-xs text-blue-400 mb-1">Gross Margin</span>
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">Global Product Debt average</div>
                                        <div className="flex items-end gap-2 text-white">
                                            <span className="text-3xl font-grotesk font-bold">{formatMoney(globalPdiWaste)}</span>
                                            <span className="text-xs text-red-400 mb-1">Waste Identified</span>
                                        </div>
                                    </div>
                                    <div className="px-5 pb-5 text-[10px] text-zinc-500 text-center leading-tight">
                                        Derived from <strong className="text-zinc-400">{auebCount + pdiCount}</strong> anonymized enterprise snapshots run through the Vault.
                                    </div>
                                </div>
                            </div>
                            
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
