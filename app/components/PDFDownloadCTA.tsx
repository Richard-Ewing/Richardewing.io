'use client';

import { FileDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface PDFDownloadCTAProps {
    toolName: string;
    score?: number;
}

export default function PDFDownloadCTA({ toolName, score }: PDFDownloadCTAProps) {
    return (
        <div className="mt-8 p-6 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 border border-emerald-500/20 rounded-2xl">
            <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileDown className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-1">Get the Board-Ready PDF</h4>
                    <p className="text-zinc-400 text-sm mb-4">
                        Download your {toolName} results as a professionally formatted PDF.
                        {score !== undefined && ` Your score: ${score}.`} Perfect for sharing with leadership, investors, or your board.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                            href="/advisory"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black text-sm font-bold rounded-lg transition-all"
                        >
                            <FileDown className="w-4 h-4" />
                            Book Diagnostic for Full PDF
                        </Link>
                        <Link
                            href="/benchmark"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 text-white text-sm font-bold rounded-lg hover:bg-white/10 transition-all"
                        >
                            Free Industry Benchmark <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
