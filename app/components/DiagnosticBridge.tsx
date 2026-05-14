import Link from 'next/link';
import { ArrowRight, BookOpen, ShieldAlert } from 'lucide-react';

interface DiagnosticBridgeProps {
    diagnosticName: string;
    frameworkSlug: string;
    frameworkName: string;
    frameworkDescription: string;
    exogramRisk: string;
    exogramDescription: string;
}

export function DiagnosticBridge({
    diagnosticName,
    frameworkSlug,
    frameworkName,
    frameworkDescription,
    exogramRisk,
    exogramDescription
}: DiagnosticBridgeProps) {
    return (
        <div className="mt-16 mb-8 border-t border-zinc-400 pt-16" data-html2canvas-ignore>
            <div className="flex items-center gap-2 mb-8">
                <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                <h3 className="text-xl font-bold text-zinc-950 font-mono uppercase tracking-widest">
                    Operational Context & Enforcement
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Framework Bridge */}
                <div className="bg-zinc-50 border border-zinc-400 rounded-2xl p-6 relative overflow-hidden group hover:border-cyan-500/50 transition-colors shrink-0">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-cyan-500/10 transition-colors"></div>
                    <div className="flex items-start gap-4 relative z-10">
                        <div className="bg-cyan-500/10 p-3 rounded-xl border border-cyan-500/20 text-cyan-900 shrink-0">
                            <BookOpen className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="text-xs font-bold text-zinc-900 uppercase tracking-widest font-mono mb-1">
                                Why This Happens
                            </div>
                            <h4 className="text-lg font-bold text-zinc-950 mb-2 font-grotesk">
                                {frameworkName}
                            </h4>
                            <p className="text-sm font-semibold text-zinc-900 leading-relaxed mb-4">
                                {frameworkDescription}
                            </p>
                            <Link href={`/frameworks/${frameworkSlug}`} className="inline-flex items-center gap-2 text-cyan-900 font-extrabold text-sm uppercase tracking-widest hover:text-zinc-900 transition-colors">
                                Read The Framework <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Exogram Bridge */}
                <div className="bg-zinc-50 border border-zinc-400 rounded-2xl p-6 relative overflow-hidden group hover:border-purple-500/50 transition-colors shrink-0">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-purple-500/10 transition-colors"></div>
                    <div className="flex items-start gap-4 relative z-10">
                        <div className="bg-purple-500/10 p-3 rounded-xl border border-purple-500/20 text-purple-900 shrink-0">
                            <ShieldAlert className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="text-xs font-bold text-zinc-900 uppercase tracking-widest font-mono mb-1">
                                Runtime Enforcement
                            </div>
                            <h4 className="text-lg font-bold text-zinc-950 mb-2 font-grotesk">
                                Mitigate {exogramRisk}
                            </h4>
                            <p className="text-sm font-semibold text-zinc-900 leading-relaxed mb-4">
                                {exogramDescription}
                            </p>
                            <Link href="/exogram" className="inline-flex items-center gap-2 text-purple-900 font-extrabold text-sm uppercase tracking-widest hover:text-zinc-900 transition-colors">
                                Exogram Capability <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
