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
    // Rich content fields
    checklist?: string[];
    howToApply?: string;
    keyMetrics?: { label: string; value: string; description: string }[];
    comparisons?: { vs: string; advantage: string; disadvantage: string }[];
    maturityLevels?: { level: string; description: string }[];
    resources?: { title: string; url: string; type: string }[];
    quiz?: { question: string; options: string[]; answer: number; explanation: string }[];
    diagram?: string; // Textual diagram description for visual section
}
