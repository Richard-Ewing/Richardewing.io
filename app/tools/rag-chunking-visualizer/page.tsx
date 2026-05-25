import { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import RagChunkingContent from './content';

export const metadata: Metadata = {
    title: 'Why Is Your RAG Returning Wrong Answers? | Chunking Visualizer',
    description: 'Bad chunking is the #1 reason RAG pipelines hallucinate. Visualize how your text splits into vector embeddings and optimize chunk boundaries before they poison your retrieval.',
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
