/**
 * Phase 4 Part 2: Wire new concept slugs to RESEARCH_CORPUS entries
 * Maps the 17 new concepts (from concept-corpus-tier4.ts + canon additions)
 * to appropriate existing publications
 */
import fs from 'fs';

const NEW_CONCEPT_WIRING: Record<string, string[]> = {
  // New concept slug → list of corpus entry IDs that should reference it
  'ai-agents': ['linkedin-ai-taking-actions', 'builtin-agentic-ai-analysis', 'linkedin-real-problem-ai-agents', 'beehiiv-shadow-ai-agent-discovery'],
  'ai-roi': ['builtin-make-ai-profitable', 'linkedin-real-ai-opportunity', 'builtin-business-test', 'beehiiv-ai-unit-economics-burn-rate'],
  'ai-technical-debt': ['linkedin-boardroom-guide-technical-debt', 'beehiiv-operational-debt-crisis', 'beehiiv-subprime-code-crisis', 'beehiiv-zombie-code-remediation'],
  'ai-cost-optimization': ['cio-claude-api-bill', 'cio-redundant-requests', 'beehiiv-ai-strategy-burning-cash', 'beehiiv-why-scaling-breaks-bank'],
  'llm-cost-management': ['beehiiv-token-burn-analytics', 'beehiiv-semantic-caching-playbook', 'beehiiv-slm-repatriation-guide', 'beehiiv-generative-ai-margin-squeeze'],
  'responsible-ai': ['builtin-agentic-ai-analysis', 'beehiiv-runtime-governance-architecture', 'beehiiv-why-built-exogram'],
  'ai-compliance': ['builtin-ai-security-gates', 'builtin-kill-switch', 'beehiiv-deterministic-control-plane', 'beehiiv-state-hashing-spec'],
  'ai-observability': ['beehiiv-token-burn-analytics', 'beehiiv-shadow-ai-agent-discovery', 'beehiiv-state-hashing-spec'],
  'retrieval-augmented-generation': ['beehiiv-prevent-context-loss', 'linkedin-bigger-memory-window-confused-worker-inbox', 'beehiiv-semantic-caching-playbook'],
  'ai-product-management': ['linkedin-evaluating-ai-product-managers', 'builtin-business-test', 'mtp-financial-metrics-pm', 'beehiiv-what-product-economist-does'],
  'ai-security': ['builtin-ai-security-breach', 'builtin-ai-security-gates', 'builtin-kill-switch', 'beehiiv-prompt-injection-control-plane'],
  'cloud-repatriation': ['beehiiv-slm-repatriation-guide', 'linkedin-stop-negotiating-ai-infrastructure', 'beehiiv-why-scaling-breaks-bank'],
  'ai-vendor-lock-in': ['beehiiv-slm-repatriation-guide', 'linkedin-stop-negotiating-ai-infrastructure', 'beehiiv-ai-strategy-burning-cash'],
  'platform-engineering': ['cio-copilot-bottleneck', 'builtin-vibe-coding-era', 'beehiiv-subprime-code-crisis'],
  'mlops': ['beehiiv-runtime-governance-architecture', 'beehiiv-deterministic-control-plane', 'linkedin-ai-taking-actions'],
  'hallucination-tax': ['linkedin-cost-of-hallucinations-in-production', 'beehiiv-ai-unit-economics-burn-rate', 'builtin-make-ai-profitable'],
  'audit-interview': ['builtin-audit-interview', 'builtin-reimagining-interview', 'builtin-vibe-coding-era'],
};

async function wire() {
  const filePath = 'app/lib/research-corpus.ts';
  let content = fs.readFileSync(filePath, 'utf8');
  let totalWired = 0;

  for (const [conceptSlug, targetIds] of Object.entries(NEW_CONCEPT_WIRING)) {
    for (const targetId of targetIds) {
      const idPattern = `id: '${targetId}',`;
      const idIndex = content.indexOf(idPattern);
      if (idIndex === -1) {
        console.warn(`  WARNING: Entry '${targetId}' not found for concept '${conceptSlug}'`);
        continue;
      }

      const blockEnd = content.indexOf('\n  },', idIndex);
      const blockContent = content.substring(idIndex, blockEnd);

      if (blockContent.includes('relatedConceptIds')) {
        const relatedStart = content.indexOf('relatedConceptIds:', idIndex);
        const arrayEnd = content.indexOf(']', relatedStart);
        const arrayContent = content.substring(relatedStart, arrayEnd);

        if (!arrayContent.includes(`'${conceptSlug}'`) && !arrayContent.includes(`"${conceptSlug}"`)) {
          content = content.substring(0, arrayEnd) + `, '${conceptSlug}'` + content.substring(arrayEnd);
          totalWired++;
        }
      }
    }
  }

  fs.writeFileSync(filePath, content);
  console.log(`=== WIRING COMPLETE ===`);
  console.log(`Total concept-publication links added: ${totalWired}`);
}

wire().catch(console.error);
