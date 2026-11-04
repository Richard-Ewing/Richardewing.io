import { Metadata } from 'next';
import DiagnosticCTA from '@/app/components/DiagnosticCTA';
import ToolServerHeader from '@/app/components/calculators/ToolServerHeader';
import ChainedDiagnosticNextStep from '@/app/components/calculators/ChainedDiagnosticNextStep';
import RagChunkingContent from './content';

export const metadata: Metadata = {
    title: 'LLM Content Chunking & RAG Visualizer',
    description:
        'Test essential features of LLM content chunking tools: token size, overlap windows, boundary shearing, and retrieval cost before deploying RAG.',
    keywords: [
        'essential features content chunking tools LLMs',
        'LLM content chunking tools',
        'RAG chunking strategy',
        'semantic search visualizer',
        'vector embedding optimization',
        'Pinecone chunk size',
        'LLM text splitting',
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/tools/rag-chunking-visualizer',
    },
    openGraph: {
        title: 'LLM Content Chunking & RAG Visualizer | Richard Ewing',
        description:
            'Test essential features of LLM content chunking tools: token size, overlap windows, boundary shearing, and retrieval cost before deploying RAG.',
        url: 'https://www.richardewing.io/tools/rag-chunking-visualizer',
        type: 'website',
        images: [
            {
                url: 'https://www.richardewing.io/api/og?title=LLM+Content+Chunking+%26+RAG+Visualizer&category=Retrieval+Economics',
                width: 1200,
                height: 630,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'LLM Content Chunking & RAG Visualizer | Richard Ewing',
        description:
            'Test essential features of LLM content chunking tools: token size, overlap windows, boundary shearing, and retrieval cost before deploying RAG.',
        images: [
            'https://www.richardewing.io/api/og?title=LLM+Content+Chunking+%26+RAG+Visualizer&category=Retrieval+Economics',
        ],
    },
};

export default function Page() {
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'What are the essential features of content chunking tools for LLMs?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The five essential features of LLM content chunking tools are semantic boundary awareness (preventing mid-word and mid-clause cuts), configurable sliding overlap windows, markdown header and HTML table preservation, metadata provenance tagging per chunk, and live token-cost estimation before vector indexing.',
                },
            },
            {
                '@type': 'Question',
                name: 'Why do bad RAG chunking boundaries inflate cloud bills and support tickets?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'When fixed character splitters slice contracts, pricing tables, or runbooks mid-sentence, vector retrieval misses the relevant clause or forces engineers to double top-k chunk retrieval, multiplying input token costs while increasing inaccurate customer answers.',
                },
            },
        ],
    };

    return (
        <div className="min-h-screen bg-[#FAF9F6] space-y-8">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <ToolServerHeader
                slug="rag-chunking-visualizer"
                eyebrow="Retrieval Economics · Vector Split Audit"
                h1="LLM Content Chunking Tools & RAG Boundary Visualizer"
                executiveAnswer="The essential features of content chunking tools for LLMs are semantic boundary awareness, sliding overlap windows, table and section-header preservation, metadata provenance tags, and retrieval token-cost caps. CTOs, Engineering Managers, and AI Platform Leads use this visualizer to spot mid-sentence boundary shearing before indexing documents."
                appName="LLM Content Chunking & RAG Boundary Visualizer"
                appDescription="Interactive RAG chunking simulator evaluating LLM content chunking parameters, overlap windows, broken boundary penalties, and retrieval token waste."
                howToName="How to Audit LLM Content Chunking Boundaries Before Vector Indexing"
                howToDescription="Paste enterprise contracts, policies, or technical docs to test chunk size, overlap ratios, and boundary shearing cost."
                steps={[
                    { name: 'Paste representative source text', text: 'Load customer contracts, support articles, or financial tables into the local browser simulator.' },
                    { name: 'Tune chunk size and sliding overlap', text: 'Adjust character window limits and overlap buffers to see duplicated tokens vs sheared words.' },
                    { name: 'Inspect broken semantic boundaries', text: 'Review highlighted overlap zones and mid-word cuts that cause retrieval misses in production.' },
                    { name: 'Right-size retrieval unit economics', text: 'Feed your per-query chunk count into the AI Unit Economics Benchmark (AUEB) to verify gross margins.' },
                ]}
            />

            <RagChunkingContent />

            <section className="max-w-5xl mx-auto px-6">
                <div className="bg-white border border-[#24332b]/15 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
                    <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#b77a35]">
                        Buyer &amp; Architect Evaluation Matrix
                    </p>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#162e26]">
                        Essential Features of Content Chunking Tools for LLMs
                    </h2>
                    <p className="font-sans text-sm sm:text-base text-[#4a5850] leading-relaxed">
                        Before a CTO, Engineering Manager, or Customer Support Lead wires company knowledge bases into a retrieval pipeline, verify that your text splitter enforces these five operational controls rather than slicing characters blindly:
                    </p>
                    <div className="overflow-x-auto pt-2">
                        <table className="w-full text-left border-collapse text-sm font-sans">
                            <thead>
                                <tr className="border-b border-[#24332b]/20 text-xs font-mono uppercase tracking-wider text-[#162e26]">
                                    <th className="py-3 pr-4">Chunking Capability</th>
                                    <th className="py-3 pr-4">What Breaks Without It</th>
                                    <th className="py-3">Financial &amp; Operational Impact</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#24332b]/10 text-[#1e2924]">
                                <tr>
                                    <td className="py-3 pr-4 font-semibold">Semantic &amp; Sentence Boundary Guards</td>
                                    <td className="py-3 pr-4 text-[#4a5850]">Splits legal clauses, negations (&quot;not covered&quot;), and numbers in half.</td>
                                    <td className="py-3 text-[#4a5850]">Support bots quote inverted policy rules to customers.</td>
                                </tr>
                                <tr>
                                    <td className="py-3 pr-4 font-semibold">Tunable Sliding Overlap Window (10% to 20%)</td>
                                    <td className="py-3 pr-4 text-[#4a5850]">Zero overlap drops cross-paragraph context; 50% overlap doubles storage.</td>
                                    <td className="py-3 text-[#4a5850]">Balances vector index bill against multi-sentence recall.</td>
                                </tr>
                                <tr>
                                    <td className="py-3 pr-4 font-semibold">Table &amp; Markdown Header Pinning</td>
                                    <td className="py-3 pr-4 text-[#4a5850]">Orphans pricing rows from column headers across separate chunks.</td>
                                    <td className="py-3 text-[#4a5850]">Eliminates wrong-tier pricing quotes in sales and finance tools.</td>
                                </tr>
                                <tr>
                                    <td className="py-3 pr-4 font-semibold">Document Version &amp; ACL Metadata</td>
                                    <td className="py-3 pr-4 text-[#4a5850]">Stale 2024 chunks outrank updated 2026 policy docs or leak across roles.</td>
                                    <td className="py-3 text-[#4a5850]">Prevents ghost-chunk answers and unauthorized data exposure.</td>
                                </tr>
                                <tr>
                                    <td className="py-3 pr-4 font-semibold">Token Budget &amp; Top-K Cost Preview</td>
                                    <td className="py-3 pr-4 text-[#4a5850]">Teams compensate for sloppy chunks by stuffing 20 chunks per prompt.</td>
                                    <td className="py-3 text-[#4a5850]">Protects SaaS gross margin floors tracked by the CFO.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-6 pb-20 space-y-10">
                <ChainedDiagnosticNextStep
                    chainName="Retrieval Margin & Hallucination Control Chain"
                    stepLabel="Step 1 of 3 · Connected Diagnostic Chain"
                    currentToolSlug="rag-chunking-visualizer"
                    currentToolName="LLM Content Chunking & RAG Visualizer"
                    defaultScorecardMetricLabel="Retrieval Boundary Risk"
                    defaultScorecardMetricValue="Context Shearing & Token Bloat"
                    defaultScorecardStatus="AUDIT CHUNK OVERLAP"
                    nextDiagnostic={{
                        slug: 'aueb',
                        title: 'AI Unit Economics Benchmark (AUEB)',
                        reason: 'Once your chunk size and overlap window are set, model how retrieved context tokens impact per-user gross margin at scale.',
                    }}
                    secondaryDiagnostic={{
                        slug: 'hallucination-tax',
                        title: 'AI Hallucination Tax Calculator',
                    }}
                    commercialStep={{
                        href: '/exogram',
                        label: 'Explore Exogram Context & Provenance Engine',
                        priceTag: 'Governed Context',
                        description: 'Replace brittle static chunk dumps with version-verified, permission-scoped context retrieval.',
                    }}
                />

                <DiagnosticCTA
                    variant="primary"
                    title="Are bad retrieval chunks inflating your context bill and causing wrong answers?"
                    subtitle="Audit your embedding overlap, retrieval top-k token waste, and QA verification overhead in a focused architecture teardown."
                    metrics={['Chunk Overlap', 'Retrieval Precision', 'Token Savings']}
                />
            </div>
        </div>
    );
}
