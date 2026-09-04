import { Metadata } from 'next';
import SLMTool from './content';

export const metadata: Metadata = {
    title: 'SLM vs API Tradeoff Calculator',
    description: 'Calculate the hardware break-even point for self-hosting Small Language Models vs proprietary cloud APIs.',
    keywords: [
        'SLM vs LLM',
        'OpenAI API cost calculator',
        'Local AI inference cost',
        'H100 ROI calculator',
        'Llama 3 hosting cost',
        'Build vs Buy AI',
        'AI Unit Economics'
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/tools/slm-vs-api',
    },
    openGraph: {
        title: 'SLM vs API | Build vs Buy AI Economics',
        description: 'Stop paying the OpenAI API tax. Calculate the hardware breakeven point for bringing your AI in-house.',
        url: 'https://www.richardewing.io/tools/slm-vs-api',
        type: 'website',
    },
};

import Link from 'next/link';

export default function Page() {
    return (
        <>
            <SLMTool />
            <div className="page-container max-w-4xl mx-auto px-6 mb-16 space-y-12">
                <div className="mt-12 bg-white border border-zinc-300 rounded-3xl p-8 text-center space-y-4 shadow-sm">
                    <h3 className="text-xl font-bold font-grotesk text-zinc-950">
                        Related Infrastructure &amp; Cloud Economics Research
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4 pt-2">
                        <a 
                            href="https://theaieconomist.beehiiv.com/p/the-bootstrapper-s-cloud-credit-playbook"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-cyan-900 text-white font-mono text-xs font-bold rounded-xl hover:bg-cyan-800 transition"
                        >
                            Read &quot;The Bootstrapper&apos;s Cloud Credit Playbook&quot; on Beehiiv ↗
                        </a>
                        <Link 
                            href="/concepts/non-dilutive-infrastructure-capital"
                            className="px-4 py-2 bg-emerald-900 text-white font-mono text-xs font-bold rounded-xl hover:bg-emerald-800 transition"
                        >
                            Non-Dilutive Capital Concept →
                        </Link>
                        <a 
                            href="https://www.cio.com/article/4215347/bedrock-vertex-or-build-it-yourself-the-ai-infrastructure-decision-most-cios-get-backwards.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-zinc-900 text-white font-mono text-xs font-bold rounded-xl hover:bg-zinc-800 transition"
                        >
                            Read &quot;Bedrock, Vertex or Build It Yourself&quot; on CIO.com ↗
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
