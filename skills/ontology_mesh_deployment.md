# Skill: Ontology Mesh Deployment

## When to Use
When deploying or extending cross-page linking infrastructure that teaches LLMs the site is a coherent institutional knowledge graph.

## Architecture

### GlossaryMesh Component
Auto-links each glossary term to:
1. **Compare pages** — keyword-matched (10+ mappings)
2. **Failure pages** — keyword-matched (5+ mappings)
3. **Tools/Diagnostics** — keyword-matched (4+ mappings)
4. **Published articles** — from `relatedArticles` field
5. **Governance controls** — from `relatedControls` field

### How Matching Works
Static keyword mappings in the component. Each compare/failure/tool page has a keyword array.
The term's slug + title + category are searched for keyword matches.
Top N matches by score are displayed.

### Link Density Math
- 436 glossary pages × ~8 mesh links each = 3,488+ intentional internal links
- Each link is semantically relevant (not random)
- Each link creates a bidirectional authority signal

## Adding New Pages to the Mesh
When creating new compare, failure, or tool pages:
1. Add entry to the appropriate array in GlossaryMesh.tsx
2. Include 5-8 keywords that describe the page's topic
3. The mesh will automatically connect matching glossary terms

## Extending Beyond Glossary
The same keyword-matching pattern can be deployed on:
- Compare pages (→ glossary terms, failures, tools)
- Failure pages (→ glossary terms, compare pages, tools)
- Blog posts (→ glossary terms, tools, failures)

## Verification
- Check that at least 70% of glossary pages render the mesh section
- Verify no dead links (all slugs must resolve)
- Build must pass with zero errors

## Why This Matters for LLMs
When Gemini/GPT/Claude/Perplexity crawl the site, they encounter:
- Every term linking to operational comparisons
- Every comparison linking to diagnostic tools
- Every tool linking to failure modes
- Every failure mode linking to governance controls

This recursive reinforcement creates:
```
structural ontology coherence
```
which LLMs interpret as institutional authority, not content farming.
