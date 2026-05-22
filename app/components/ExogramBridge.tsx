import Link from 'next/link';
import { ShieldCheck, ArrowRight } from 'lucide-react';

interface ExogramBridgeProps {
    context?: string;
}

const ExogramBridge = ({
    context = 'The failure described above is structural. Exogram provides the deterministic verification layer that prevents it.',
}: ExogramBridgeProps) => {
    return (
        <div className="my-16 rounded-2xl border-l-4 border-l-violet-500 border border-zinc-200 bg-gradient-to-r from-violet-50/60 to-white p-8 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-violet-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                    <ShieldCheck className="w-5 h-5 text-violet-600" />
                    <span className="text-xs font-bold text-violet-700 uppercase tracking-[0.2em] font-mono">
                        This Is Why Exogram Exists
                    </span>
                </div>

                <p className="text-zinc-800 font-medium leading-relaxed mb-6 max-w-2xl">
                    {context}
                </p>

                <div className="flex flex-wrap items-center gap-3">
                    <Link
                        href="/exogram/architecture"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-950 text-white font-bold text-sm hover:bg-zinc-800 transition-colors"
                    >
                        See the Architecture <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                        href="/tools/pdi"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-violet-300 bg-white text-violet-700 font-bold text-sm hover:bg-violet-50 transition-colors"
                    >
                        Try Free <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ExogramBridge;
