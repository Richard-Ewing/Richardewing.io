/**
 * Comprehensive RESEARCH_CORPUS Enrichment Script
 * Populates relatedConceptIds on all 59 entries missing them.
 * Maps every publication to its canonical concept slugs.
 */
import fs from 'fs';
import path from 'path';

const ENRICHMENT_MAP: Record<string, { relatedConceptIds: string[], relatedGlossarySlugs?: string[], relatedToolIds?: string[] }> = {
    // === CIO.com (7) ===
    'cio-shipping-faster': {
        relatedConceptIds: ['product-economist', 'feature-bloat-calculus', 'coordination-tax'],
        relatedGlossarySlugs: ['product-debt-index', 'feature-bloat'],
        relatedToolIds: ['pdi']
    },
    'cio-cfo-agile': {
        relatedConceptIds: ['r-and-d-ponzi', 'coordination-tax', 'technical-insolvency'],
        relatedGlossarySlugs: ['technical-debt', 'technical-insolvency-date'],
        relatedToolIds: ['pdi', 'ev-se']
    },
    'cio-model-collapse': {
        relatedConceptIds: ['model-collapse', 'inference-economics', 'ai-volatility-tax'],
        relatedGlossarySlugs: ['model-collapse', 'synthetic-cogs'],
        relatedToolIds: ['aueb']
    },
    'cio-innovation-tax-audit': {
        relatedConceptIds: ['r-and-d-ponzi', 'technical-insolvency', 'coordination-tax'],
        relatedGlossarySlugs: ['innovation-tax', 'technical-debt'],
        relatedToolIds: ['innovation-tax-calculator', 'pdi']
    },
    'cio-claude-api-bill': {
        relatedConceptIds: ['inference-economics', 'ai-volatility-tax', 'ai-margin-squeeze', 'cost-of-predictivity'],
        relatedGlossarySlugs: ['synthetic-cogs', 'ai-volatility-tax'],
        relatedToolIds: ['aueb', 'slm-vs-api']
    },
    'cio-copilot-bottleneck': {
        relatedConceptIds: ['vibe-coding', 'subprime-code-crisis', 'ten-man-parity'],
        relatedGlossarySlugs: ['vibe-coding-debt', 'subprime-code-crisis'],
        relatedToolIds: ['copilot-roi', 'audit-interview']
    },
    'cio-redundant-requests': {
        relatedConceptIds: ['semantic-caching', 'inference-economics', 'ai-volatility-tax'],
        relatedGlossarySlugs: ['semantic-caching', 'synthetic-cogs'],
        relatedToolIds: ['aueb']
    },

    // === Built In (11) ===
    'builtin-fable-vs-gpt5': {
        relatedConceptIds: ['model-collapse', 'cost-of-predictivity', 'inference-economics'],
        relatedGlossarySlugs: ['model-collapse', 'frontier-model'],
    },
    'builtin-ai-security-gates': {
        relatedConceptIds: ['deterministic-governance', 'agent-kill-switch', 'runtime-vs-alignment', 'ai-governance'],
        relatedGlossarySlugs: ['deterministic-governance', 'agent-kill-switch'],
        relatedToolIds: ['prompt-injection-sandbox', 'agentic-drift-matrix']
    },
    'builtin-ai-security-breach': {
        relatedConceptIds: ['agent-kill-switch', 'shadow-ai', 'ai-governance', 'deterministic-governance'],
        relatedGlossarySlugs: ['agent-kill-switch', 'shadow-ai'],
        relatedToolIds: ['shadow-ai', 'agentic-drift-matrix']
    },
    'builtin-kill-switch': {
        relatedConceptIds: ['agent-kill-switch', 'deterministic-governance', 'runtime-vs-alignment', 'ai-governance'],
        relatedGlossarySlugs: ['agent-kill-switch', 'deterministic-governance'],
        relatedToolIds: ['agentic-drift-matrix']
    },
    'builtin-make-ai-profitable': {
        relatedConceptIds: ['ai-volatility-tax', 'inference-economics', 'ai-margin-squeeze', 'cost-of-predictivity'],
        relatedGlossarySlugs: ['ai-volatility-tax', 'synthetic-cogs'],
        relatedToolIds: ['aueb', 'slm-vs-api']
    },
    'builtin-vibe-coding-era': {
        relatedConceptIds: ['vibe-coding', 'subprime-code-crisis', 'ten-man-parity'],
        relatedGlossarySlugs: ['vibe-coding-debt'],
        relatedToolIds: ['audit-interview', 'copilot-roi']
    },
    'builtin-agentic-ai-analysis': {
        relatedConceptIds: ['ai-governance', 'deterministic-governance', 'agent-kill-switch', 'ai-agents'],
        relatedGlossarySlugs: ['deterministic-governance', 'ai-agent-sprawl'],
    },
    'builtin-deleting-code': {
        relatedConceptIds: ['r-and-d-ponzi', 'feature-bloat-calculus', 'technical-insolvency'],
        relatedGlossarySlugs: ['zombie-code', 'product-debt-index'],
        relatedToolIds: ['pdi']
    },
    'builtin-audit-interview': {
        relatedConceptIds: ['vibe-coding', 'ten-man-parity', 'subprime-code-crisis'],
        relatedGlossarySlugs: ['vibe-coding-debt', 'audit-interview'],
        relatedToolIds: ['audit-interview']
    },
    'builtin-reimagining-interview': {
        relatedConceptIds: ['vibe-coding', 'ten-man-parity'],
        relatedGlossarySlugs: ['audit-interview', 'vibe-coding-debt'],
        relatedToolIds: ['audit-interview']
    },
    'builtin-business-test': {
        relatedConceptIds: ['cost-of-predictivity', 'product-economist', 'ai-margin-squeeze'],
        relatedGlossarySlugs: ['product-debt-index', 'ai-volatility-tax'],
        relatedToolIds: ['pdi', 'aueb']
    },

    // === Mind the Product & HackerNoon (2) ===
    'mtp-3-financial-metrics': {
        relatedConceptIds: ['product-economist', 'feature-bloat-calculus', 'coordination-tax'],
        relatedGlossarySlugs: ['product-debt-index'],
        relatedToolIds: ['pdi']
    },
    'hackernoon-zero-customers': {
        relatedConceptIds: ['product-economist', 'cost-of-predictivity', 'feature-bloat-calculus'],
        relatedGlossarySlugs: ['product-debt-index'],
    },

    // === Beehiiv (23) ===
    'beehiiv-clarity-to-compass': {
        relatedConceptIds: ['product-economist', 'ai-economics'],
    },
    'beehiiv-10-brutal-lessons': {
        relatedConceptIds: ['product-economist', 'feature-bloat-calculus', 'coordination-tax'],
    },
    'beehiiv-roadmap-killing-team': {
        relatedConceptIds: ['coordination-tax', 'product-economist', 'feature-bloat-calculus'],
        relatedToolIds: ['pdi']
    },
    'beehiiv-permission-slips': {
        relatedConceptIds: ['coordination-tax', 'product-economist'],
    },
    'beehiiv-product-vision-wallpaper': {
        relatedConceptIds: ['product-economist', 'feature-bloat-calculus'],
    },
    'beehiiv-subprime-code-crisis': {
        relatedConceptIds: ['subprime-code-crisis', 'vibe-coding', 'technical-insolvency'],
        relatedGlossarySlugs: ['subprime-code-crisis', 'vibe-coding-debt'],
        relatedToolIds: ['pdi', 'copilot-roi']
    },
    'beehiiv-ai-unit-economics-burn-rate': {
        relatedConceptIds: ['inference-economics', 'ai-volatility-tax', 'ai-margin-squeeze', 'cost-of-predictivity'],
        relatedGlossarySlugs: ['synthetic-cogs', 'ai-volatility-tax'],
        relatedToolIds: ['aueb']
    },
    'beehiiv-why-built-exogram': {
        relatedConceptIds: ['deterministic-governance', 'agent-kill-switch', 'ai-governance', 'runtime-vs-alignment'],
        relatedGlossarySlugs: ['deterministic-governance', 'agent-kill-switch'],
    },
    'beehiiv-runtime-governance-architecture': {
        relatedConceptIds: ['deterministic-governance', 'runtime-vs-alignment', 'agent-kill-switch', 'ai-governance'],
        relatedGlossarySlugs: ['deterministic-governance'],
        relatedToolIds: ['agentic-drift-matrix']
    },
    'beehiiv-product-p-and-l-test': {
        relatedConceptIds: ['cost-of-predictivity', 'product-economist', 'ai-margin-squeeze', 'inference-economics'],
        relatedGlossarySlugs: ['product-debt-index', 'ai-volatility-tax'],
        relatedToolIds: ['pdi', 'aueb']
    },
    'beehiiv-coordination-tax': {
        relatedConceptIds: ['coordination-tax', 'r-and-d-ponzi', 'ten-man-parity'],
        relatedGlossarySlugs: ['coordination-tax'],
    },
    'beehiiv-generative-ai-margin-squeeze': {
        relatedConceptIds: ['ai-margin-squeeze', 'inference-economics', 'ai-volatility-tax', 'cost-of-predictivity'],
        relatedGlossarySlugs: ['synthetic-cogs', 'ai-volatility-tax'],
        relatedToolIds: ['aueb', 'slm-vs-api']
    },
    'beehiiv-deterministic-control-plane': {
        relatedConceptIds: ['deterministic-governance', 'agent-kill-switch', 'runtime-vs-alignment', 'ai-governance'],
        relatedGlossarySlugs: ['deterministic-governance'],
        relatedToolIds: ['agentic-drift-matrix']
    },
    'beehiiv-operational-debt-crisis': {
        relatedConceptIds: ['technical-insolvency', 'r-and-d-ponzi', 'ai-volatility-tax', 'subprime-code-crisis'],
        relatedGlossarySlugs: ['technical-debt', 'technical-insolvency-date'],
        relatedToolIds: ['pdi', 'ev-se']
    },
    'beehiiv-why-scaling-breaks-bank': {
        relatedConceptIds: ['ai-margin-squeeze', 'inference-economics', 'ai-volatility-tax'],
        relatedGlossarySlugs: ['synthetic-cogs'],
        relatedToolIds: ['aueb']
    },
    'beehiiv-token-burn-analytics': {
        relatedConceptIds: ['inference-economics', 'ai-volatility-tax', 'semantic-caching'],
        relatedGlossarySlugs: ['synthetic-cogs', 'ai-tokenomics-cogs'],
        relatedToolIds: ['aueb']
    },
    'beehiiv-semantic-caching-playbook': {
        relatedConceptIds: ['semantic-caching', 'inference-economics', 'ai-volatility-tax'],
        relatedGlossarySlugs: ['semantic-caching'],
        relatedToolIds: ['aueb']
    },
    'beehiiv-slm-repatriation-guide': {
        relatedConceptIds: ['inference-economics', 'ai-margin-squeeze', 'cost-of-predictivity'],
        relatedGlossarySlugs: ['small-language-model'],
        relatedToolIds: ['slm-vs-api', 'cloud-repatriation']
    },
    'beehiiv-prompt-injection-control-plane': {
        relatedConceptIds: ['deterministic-governance', 'agent-kill-switch', 'ai-governance'],
        relatedGlossarySlugs: ['prompt-injection'],
        relatedToolIds: ['prompt-injection-sandbox']
    },
    'beehiiv-state-hashing-spec': {
        relatedConceptIds: ['deterministic-governance', 'runtime-vs-alignment', 'agent-kill-switch'],
        relatedGlossarySlugs: ['state-integrity-hashing'],
        relatedToolIds: ['agentic-drift-matrix']
    },
    'beehiiv-shadow-ai-agent-discovery': {
        relatedConceptIds: ['shadow-ai', 'ai-agent-sprawl', 'agent-kill-switch', 'ai-governance'],
        relatedGlossarySlugs: ['shadow-ai', 'ai-agent-sprawl'],
        relatedToolIds: ['shadow-ai']
    },
    'beehiiv-rd-capitalization-as-cfo': {
        relatedConceptIds: ['r-and-d-ponzi', 'technical-insolvency', 'coordination-tax'],
        relatedGlossarySlugs: ['innovation-tax', 'technical-debt'],
        relatedToolIds: ['innovation-tax-calculator']
    },
    'beehiiv-zombie-code-remediation': {
        relatedConceptIds: ['subprime-code-crisis', 'technical-insolvency', 'r-and-d-ponzi'],
        relatedGlossarySlugs: ['zombie-code', 'technical-debt'],
        relatedToolIds: ['pdi']
    },

    // === LinkedIn (16) ===
    'linkedin-game-product-leadership': {
        relatedConceptIds: ['product-economist', 'feature-bloat-calculus'],
    },
    'linkedin-genesis-starting-unfiltered': {
        relatedConceptIds: ['product-economist', 'ai-economics'],
    },
    'linkedin-hardest-truth-clarity': {
        relatedConceptIds: ['product-economist', 'coordination-tax'],
    },
    'linkedin-real-ai-opportunity': {
        relatedConceptIds: ['ai-economics', 'inference-economics', 'cost-of-predictivity'],
        relatedToolIds: ['aueb']
    },
    'linkedin-product-leaders-secret': {
        relatedConceptIds: ['product-economist', 'feature-bloat-calculus'],
    },
    'linkedin-innovation-tax-deleting-code': {
        relatedConceptIds: ['r-and-d-ponzi', 'technical-insolvency', 'subprime-code-crisis'],
        relatedGlossarySlugs: ['innovation-tax', 'zombie-code'],
        relatedToolIds: ['innovation-tax-calculator', 'pdi']
    },
    'linkedin-rd-ponzi-scheme': {
        relatedConceptIds: ['r-and-d-ponzi', 'technical-insolvency', 'coordination-tax'],
        relatedGlossarySlugs: ['r-and-d-ponzi', 'technical-debt'],
        relatedToolIds: ['pdi', 'ev-se']
    },
    'linkedin-ai-variable-cost': {
        relatedConceptIds: ['inference-economics', 'ai-volatility-tax', 'ai-margin-squeeze'],
        relatedGlossarySlugs: ['synthetic-cogs', 'ai-volatility-tax'],
        relatedToolIds: ['aueb']
    },
    'linkedin-claude-search-zero-adoption': {
        relatedConceptIds: ['deterministic-governance', 'ai-governance', 'cost-of-predictivity'],
        relatedGlossarySlugs: ['deterministic-governance'],
    },
    'linkedin-real-problem-ai-agents': {
        relatedConceptIds: ['ai-governance', 'deterministic-governance', 'agent-kill-switch', 'ai-agents'],
        relatedGlossarySlugs: ['deterministic-governance', 'agent-kill-switch'],
        relatedToolIds: ['agentic-drift-matrix']
    },
    'linkedin-growth-paradox': {
        relatedConceptIds: ['ai-margin-squeeze', 'inference-economics', 'ai-volatility-tax'],
        relatedGlossarySlugs: ['synthetic-cogs', 'ai-volatility-tax'],
        relatedToolIds: ['aueb']
    },
    'linkedin-product-economist-structural-shift': {
        relatedConceptIds: ['product-economist', 'feature-bloat-calculus', 'coordination-tax'],
    },
    'linkedin-boardroom-guide-technical-debt': {
        relatedConceptIds: ['technical-insolvency', 'r-and-d-ponzi', 'subprime-code-crisis'],
        relatedGlossarySlugs: ['technical-debt', 'technical-insolvency-date'],
        relatedToolIds: ['ev-se', 'pdi']
    },
    'linkedin-why-vibe-coding-breaks-enterprise': {
        relatedConceptIds: ['vibe-coding', 'subprime-code-crisis', 'ten-man-parity'],
        relatedGlossarySlugs: ['vibe-coding-debt', 'subprime-code-crisis'],
        relatedToolIds: ['copilot-roi', 'audit-interview']
    },
    'linkedin-cost-of-hallucinations-in-production': {
        relatedConceptIds: ['ai-volatility-tax', 'context-rot', 'inference-economics'],
        relatedGlossarySlugs: ['ai-hallucination', 'context-rot'],
        relatedToolIds: ['hallucination-tax']
    },
    'linkedin-evaluating-ai-product-managers': {
        relatedConceptIds: ['product-economist', 'ai-economics', 'feature-bloat-calculus'],
    },
};

async function enrich() {
    const filePath = path.join(process.cwd(), 'app/lib/research-corpus.ts');
    let content = fs.readFileSync(filePath, 'utf8');
    let enrichedCount = 0;
    let alreadyHadCount = 0;

    for (const [id, enrichment] of Object.entries(ENRICHMENT_MAP)) {
        // Find the entry block for this id
        const idPattern = `id: '${id}',`;
        const idIndex = content.indexOf(idPattern);
        
        if (idIndex === -1) {
            console.warn(`WARNING: Entry '${id}' not found in RESEARCH_CORPUS`);
            continue;
        }

        // Check if relatedConceptIds already exists for this entry
        // Find the next closing brace } after this id
        const blockEnd = content.indexOf('\n  },', idIndex);
        const blockContent = content.substring(idIndex, blockEnd);
        
        if (blockContent.includes('relatedConceptIds')) {
            alreadyHadCount++;
            
            // Still add glossary/tool links if missing
            if (enrichment.relatedGlossarySlugs && !blockContent.includes('relatedGlossarySlugs')) {
                const insertPoint = content.indexOf('\n  },', idIndex);
                const glossaryLine = `,\n    relatedGlossarySlugs: ${JSON.stringify(enrichment.relatedGlossarySlugs)}`;
                const toolLine = enrichment.relatedToolIds ? `,\n    relatedToolIds: ${JSON.stringify(enrichment.relatedToolIds)}` : '';
                content = content.substring(0, insertPoint) + glossaryLine + toolLine + content.substring(insertPoint);
            }
            continue;
        }

        // Insert relatedConceptIds (and optionally glossary/tool links) before the closing }
        const insertPoint = content.indexOf('\n  },', idIndex);
        let insertStr = `,\n    relatedConceptIds: ${JSON.stringify(enrichment.relatedConceptIds)}`;
        if (enrichment.relatedGlossarySlugs) {
            insertStr += `,\n    relatedGlossarySlugs: ${JSON.stringify(enrichment.relatedGlossarySlugs)}`;
        }
        if (enrichment.relatedToolIds) {
            insertStr += `,\n    relatedToolIds: ${JSON.stringify(enrichment.relatedToolIds)}`;
        }
        content = content.substring(0, insertPoint) + insertStr + content.substring(insertPoint);
        enrichedCount++;
    }

    fs.writeFileSync(filePath, content);
    console.log(`\n=== ENRICHMENT COMPLETE ===`);
    console.log(`Entries enriched with relatedConceptIds: ${enrichedCount}`);
    console.log(`Entries already had relatedConceptIds: ${alreadyHadCount}`);
    console.log(`Total processed: ${enrichedCount + alreadyHadCount}`);
}

enrich().catch(console.error);
