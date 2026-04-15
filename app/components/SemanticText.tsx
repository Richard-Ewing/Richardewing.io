import React from 'react';
import Link from 'next/link';
import { allGlossaryTerms } from '@/app/glossary/terms/index';

// Sort by term length descending, so we match longer multi-word phrases first ("Agentic Process Automation" before "Agentic")
const sortedTerms = [...allGlossaryTerms].sort((a, b) => b.title.length - a.title.length);

export default function SemanticText({ text }: { text: string }) {
    if (!text) return null;

    // Use a very basic parser to find the first matched term, split the string, and recursively parse.
    // To prevent "Wikipedia effect" where every word is a link, we only want to link a specific term ONCE per text block.
    
    // Create a regex map for speed
    const termRegexes = sortedTerms.map(t => ({
        id: t.slug,
        // Match term case insensitively, ensuring word boundaries
        regex: new RegExp(`\\b(${t.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})\\b`, 'i')
    }));

    const parseText = (tText: string, usedIds: Set<string>): React.ReactNode[] => {
        for (const meta of termRegexes) {
            if (usedIds.has(meta.id)) continue;
            
            const match = tText.match(meta.regex);
            if (match && match.index !== undefined) {
                const before = tText.substring(0, match.index);
                const matchedText = match[0];
                const after = tText.substring(match.index + matchedText.length);
                
                // Add this id to used to prevent multiple links of the same term in a small block
                const newUsed = new Set(usedIds);
                newUsed.add(meta.id);
                
                return [
                    ...parseText(before, newUsed),
                    <Link key={`${meta.id}-${match.index}`} href={`/glossary/terms/${meta.id}`} className="text-cyan-400/90 font-medium hover:text-cyan-900 font-extrabold font-semibold border-b border-cyan-500/30 hover:border-cyan-400 transition-colors">
                        {matchedText}
                    </Link>,
                    ...parseText(after, newUsed)
                ];
            }
        }
        
        return [tText];
    };

    return <>{parseText(text, new Set())}</>;
}
