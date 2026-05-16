// Shared GlossaryTerm type used by all glossary files
export interface GlossaryTerm {
    slug: string;
    title: string;
    category: string;
    
    // Core 'Rank #1' Semantic Schema (What/Why/How/Where/Who)
    definition: string;                // What is it?
    whyItMatters: string;              // Why does it matter?
    howToApply?: string;               // How to implement / What to do?
    whereIsItUsed?: string;            // Where is it used?
    whoUsesIt?: string;                // Who builds / uses it?

    howToMeasure?: string;
    faqs: { question: string; answer: string }[];
    relatedTerms: string[];
    relatedSkills?: string[];
    relatedFailures?: string[];
    relatedDiagnostics?: string[];
    relatedControls?: string[];
    relatedTools?: { name: string; url: string }[];
    relatedArticles?: { title: string; url: string }[];
    tier?: 'pillar' | 'standard' | 'basic';
    
    // Rich content fields
    checklist?: string[];
    keyMetrics?: { label: string; value: string; description: string }[];
    comparisons?: { vs: string; advantage: string; disadvantage: string }[];
    maturityLevels?: { level: string; description: string }[];
    resources?: { title: string; url: string; type: string }[];
    quiz?: { question: string; options: string[]; answer: number; explanation: string }[];
    diagram?: string; // Textual diagram description for visual section
}

