export default function RagChunkingLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'SoftwareApplication',
                        name: 'RAG Text Chunking Visualizer',
                        applicationCategory: 'DeveloperApplication',
                        operatingSystem: 'Web',
                        url: 'https://www.richardewing.io/tools/rag-chunking-visualizer',
                        description: 'A visual diagnostic utility for optimizing text splitting logic before embedding into Vector Databases (Pinecone, ChromaDB). Calculates total token loss, overlapping spans, and semantic destruction vectors.',
                        featureList: [
                            'Recursive Character Text Splitting Simulator',
                            'Visual Chunk Boundary Mapping',
                            'Data Destruction Heuristic Calculator',
                            'Chunking Strategy PDF Export'
                        ],
                        offers: {
                            '@type': 'Offer',
                            price: '0',
                            priceCurrency: 'USD',
                        },
                        creator: {
                            '@type': 'Person',
                            '@id': 'https://www.richardewing.io/#person',
                            name: 'Richard Ewing',
                            jobTitle: 'Founding Engineer & AI Architect',
                            url: 'https://www.richardewing.io',
                        },
                    }),
                }}
            />
            {children}
        </>
    );
}
