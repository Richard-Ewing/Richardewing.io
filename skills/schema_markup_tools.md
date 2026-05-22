# Skill: Schema Markup for Diagnostic Tools

## When to Use
When adding structured data (JSON-LD) to diagnostic tools and interactive pages for rich snippet eligibility.

## Schema Types

### HowTo Schema (Diagnostic Tools)
For interactive tools like AUEB, PDI, APER, EV-SE:

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to [action] with [tool name]",
  "description": "Short description of what the tool does",
  "totalTime": "PT3M",  // ISO 8601 duration
  "tool": { "@type": "HowToTool", "name": "Tool Name" },
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Step name", "text": "Step description" }
  ]
}
```

### SoftwareApplication Schema (For tools with download/install)
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Tool Name",
  "applicationCategory": "BusinessApplication",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
}
```

### Article Schema (Blog Posts)
Already handled by generateMetadata in [slug]/page.tsx with openGraph type 'article'.

## Implementation Pattern
1. Define the schema object inside the page's default export function
2. Render as `<script type="application/ld+json">` before the tool component
3. Wrap both in a React Fragment `<> ... </>`

## Validation
- Test with Google Rich Results Test: https://search.google.com/test/rich-results
- Ensure totalTime matches actual tool completion time
- Steps should be user-facing actions, not technical steps

## Pages That Need Schema
- [x] /tools/aueb — HowTo
- [x] /tools/pdi — HowTo
- [ ] /tools/aper — HowTo
- [ ] /tools/ev-se — HowTo
- [ ] /tools/audit-interview — HowTo
- [ ] /diagnose — WebApplication
