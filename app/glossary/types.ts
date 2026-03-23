// Shared GlossaryTerm type used by all glossary files
export interface GlossaryTerm {
    slug: string;
    title: string;
    category: string;
    definition: string;
    whyItMatters: string;
    howToMeasure?: string;
    faqs: { question: string; answer: string }[];
    relatedTerms: string[];
    relatedTools?: { name: string; url: string }[];
    relatedArticles?: { title: string; url: string }[];
}
