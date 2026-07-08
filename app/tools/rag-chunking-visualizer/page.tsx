import { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import RagChunkingContent from './content';

export const metadata: Metadata = {
    title: 'Why Is Your RAG Returning Wron & Strategy Diagnostics | Richard Ewing',
    description: 'Why Is Your RAG Returning Wron provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
    keywords: [
        'RAG chunking strategy',
        'Semantic search visualizer',
        'Vector embedding optimization',
        'Pinecone chunk size',
        'LLM text splitting'
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/tools/rag-chunking-visualizer',
    },
    openGraph: {
        title: 'RAG Chunking Strategy Visualizer',
        description: 'Map textual data against Vector Database limitations. Visually identify exactly where context overflow destroys semantic meaning.',
        url: 'https://www.richardewing.io/tools/rag-chunking-visualizer',
        type: 'website',
    },
};

export default function Page() {
    return <RagChunkingContent />;
}
