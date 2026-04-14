import Link from 'next/link';
import CurriculumSalesPreview from './components/CurriculumSalesPreview';

export default function NotFound() {
    return (
        <main className="pt-24 pb-20 min-h-[80vh] flex items-center justify-center">
            <div className="page-container max-w-2xl mx-auto text-center">
                <div className="relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
                    <div className="relative">
                        <p className="text-8xl font-grotesk font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">404</p>
                        <h1 className="text-2xl font-grotesk font-bold text-white mb-4">Page Not Found</h1>
                        <p className="text-zinc-400 mb-8 max-w-md mx-auto">
                            The page you&apos;re looking for doesn&apos;t exist or has been moved. Here are some places to start:
                        </p>
                        <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto mb-8">
                            <Link href="/blog" className="p-4 rounded-xl bg-white/[0.03] border border-zinc-200 hover:border-cyan-500/30 transition-colors">
                                <p className="text-white font-semibold text-sm">Blog</p>
                                <p className="text-[11px] text-zinc-500">100+ articles</p>
                            </Link>
                            <Link href="/articles" className="p-4 rounded-xl bg-white/[0.03] border border-zinc-200 hover:border-cyan-500/30 transition-colors">
                                <p className="text-white font-semibold text-sm">Articles</p>
                                <p className="text-[11px] text-zinc-500">Published work</p>
                            </Link>
                            <Link href="/tools/pdi" className="p-4 rounded-xl bg-white/[0.03] border border-zinc-200 hover:border-cyan-500/30 transition-colors">
                                <p className="text-white font-semibold text-sm">Free Tools</p>
                                <p className="text-[11px] text-zinc-500">PDI, APER, AUEB</p>
                            </Link>
                            <Link href="/advisory" className="p-4 rounded-xl bg-white/[0.03] border border-zinc-200 hover:border-cyan-500/30 transition-colors">
                                <p className="text-white font-semibold text-sm">Advisory</p>
                                <p className="text-[11px] text-zinc-500">Book a session</p>
                            </Link>
                        </div>
                        <Link href="/" className="text-sm text-cyan-400 hover:underline">
                            ← Back to Home
                        </Link>
                    </div>
                </div>
            </div>

            {/* Injected Curriculum Sales Preview to harden 404s and reduce bounce rate */}
            <div className="max-w-7xl mx-auto px-6 mt-16 mb-24 opacity-80 hover:opacity-100 transition-opacity">
                 <div className="text-center mb-8">
                     <h3 className="text-xl font-bold text-white mb-2">Since you're here, look at what you're missing.</h3>
                     <p className="text-zinc-500 text-sm">Our enterprise tracks are hardened for scale. Navigate away, or explore the syllabus.</p>
                 </div>
                 <CurriculumSalesPreview />
            </div>
        </main>
    );
}
