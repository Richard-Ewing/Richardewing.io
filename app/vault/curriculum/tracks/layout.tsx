import Link from 'next/link';
import { Sparkles, BookOpen, Award } from 'lucide-react';

export default function CurriculumTracksLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}

            {/* Sticky Engagement CTA — appears at bottom of every curriculum page */}
            <div className="fixed bottom-0 left-0 right-0 z-40 bg-zinc-950/95 backdrop-blur-xl border-t border-white/10 py-3 px-4">
                <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center">
                            <BookOpen className="w-4 h-4 text-violet-400" />
                        </div>
                        <div className="hidden sm:block">
                            <div className="text-xs font-bold text-white">Premium Curriculum</div>
                            <div className="text-[10px] text-zinc-500">14 tracks • 178 modules • Lifetime access</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Link href="/tools" className="hidden sm:inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-cyan-400 transition-colors px-3 py-1.5 rounded-lg border border-white/5 hover:border-cyan-500/20">
                            🛠️ Free Tools
                        </Link>
                        <Link href="/glossary" className="hidden sm:inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-cyan-400 transition-colors px-3 py-1.5 rounded-lg border border-white/5 hover:border-cyan-500/20">
                            📚 Glossary
                        </Link>
                        <a
                            href="/api/buy/full_curriculum"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-bold text-xs hover:opacity-90 transition-opacity"
                        >
                            <Sparkles className="w-3 h-3" />
                            Unlock All 14 Tracks — $799
                        </a>
                    </div>
                </div>
            </div>

            {/* Spacer for sticky bar */}
            <div className="h-16" />
        </>
    );
}
