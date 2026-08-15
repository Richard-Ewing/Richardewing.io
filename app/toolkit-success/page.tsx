import Link from 'next/link';
import { Download, CheckCircle2, ChevronRight, FileText } from 'lucide-react';
import Navigation from '../components/Navigation';
import { Footer } from '../components/footer';

export const metadata = {
    title: 'Diagnostic Toolkit Downloaded',
    description: 'Access instructions and documentation for your downloaded AI Economics diagnostic spreadsheets and templates.',
    robots: 'noindex, nofollow' // Keep this hidden from Google so only subscribers get it
};

export default function ToolkitSuccessPage() {
    return (
        <main className="min-h-screen bg-zinc-50 font-sans selection:bg-violet-200">
            <Navigation />
            
            <div className="pt-32 pb-24 page-container max-w-3xl">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-6">
                        <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-950 font-grotesk tracking-tight mb-4">
                        You're in.
                    </h1>
                    <p className="text-xl text-zinc-600 font-medium max-w-xl mx-auto">
                        Your email is confirmed. You will now receive our monthly executive briefings. Below is your secure link to the toolkit.
                    </p>
                </div>

                {/* Download Card */}
                <div className="bg-white rounded-2xl border border-zinc-200 shadow-xl overflow-hidden mb-12">
                    <div className="p-8 md:p-10">
                        <div className="flex items-center gap-3 mb-6">
                            <FileText className="w-6 h-6 text-violet-600" />
                            <h2 className="text-2xl font-bold text-zinc-950 font-grotesk">Executive Diagnostic Toolkit</h2>
                        </div>
                        
                        <p className="text-zinc-600 mb-8 font-medium leading-relaxed">
                            This ZIP file contains five executive resources in high-resolution PDF format: the AI Margin Engineering Audit, the Deterministic Control Architecture matrix, the Private Equity AI Diligence cheatsheet, The Margin Collapse Postmortem, and the guide to Building an Internal AI Economics Practice.
                        </p>

                        {/* Replace with actual zip file or PDF path when ready */}
                        <a 
                            href="/Executive_Diagnostic_Toolkit_v2.zip" 
                            download="Executive_Diagnostic_Toolkit_v2.zip"
                            className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-violet-600 text-white font-bold text-lg hover:bg-violet-700 transition-all font-grotesk"
                        >
                            <Download className="w-6 h-6" /> Download Toolkit (.zip)
                        </a>
                        <p className="text-center text-sm text-zinc-900 font-medium mt-4 font-mono uppercase tracking-widest font-bold">
                            File Size: 4.2 MB
                        </p>
                    </div>
                    <div className="bg-zinc-50 p-6 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <span className="text-sm font-semibold text-zinc-600">Want to dive deeper into the frameworks?</span>
                        <Link href="/vault/curriculum/tracks" className="text-sm font-bold text-violet-600 hover:text-violet-700 flex items-center gap-1 transition-colors">
                            Explore Curriculum Tracks <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
            
            <Footer />
        </main>
    );
}
