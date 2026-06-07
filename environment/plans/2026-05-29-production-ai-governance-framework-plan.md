# Architectural Plan: 2026-05-29 Production AI Governance Framework Restructuring (v3)

## FAANG-Tier Pre-Execution Orchestration Taskforce Review

- **The Boss (Chief Executive Orchestrator):** Approved. Shifting the core focus from "Production AI Governance" as a title to the visceral executive problem ("Organizations are deploying AI faster than they can govern it") matches high-intent visitor needs.
- **Lead FAANG Product Manager:** Excellent. Elevating `Control Systems` as the logical convergence point rather than a flat pillar explains *why* the entire research program builds up to Exogram.
- **Principal FAANG System Architect:** Creating `/research` (without cluttering navigation) separates the "What" (Framework) from the "Why/Evidence" (Research Timeline).
- **Growth/SEO/LLM Strategist:** Moving framework IDs to a subtle, secondary visual position keeps the site looking academic rather than like enterprise documentation, preserving the thought leadership aesthetic.

---

## 1. Core Adjustments to the Restructuring Plan

### A. The Hero Landing Hierarchy (At `/framework`):
1. **Headline:** "Organizations are deploying AI faster than they can govern it."
2. **Subheadline:** "My research focuses on the economic, engineering, operational, and security systems required to keep AI sustainable after deployment."
3. **Pillar Anchor:** "The Production AI Governance Framework."

### B. Centripetal Framework Structure:
`Control Systems` is the final consolidation layer of the 5 operational domains.
```
         [ Economics ]
               │
  [ Product ] ─┼─ [ Engineering ]
               │
 [ Security ] ─┼─ [ Operations ]
               ▼
      [ Control Systems ]
          (Exogram)
```
The nested master diagram on `/framework` and the `<EcosystemMap />` component will represent `Control Systems` at the bottom or center, showing that all roads lead to enforcement.

### C. The Research Timeline & `/research` Route:
- Create `/research` page to show the chronological timeline of the research program:
  - **2024: AI Economics** (Forensic audits, cost analysis, margins)
  - **2025: Product Economics** (Product Debt Index, feature deprecation)
  - **2025: AI Governance** (Compliance, board reporting, metrics)
  - **2026: Agent Security** (Kill switches, vulnerability maps)
  - **2026: Control Systems** (Deterministic policy, sandboxing)
  - **2026+: Exogram** (Runtime physical enforcement)
- Place visual connection links mapping publications (CIO, Built In, Apress, Manning) onto this timeline.

### D. Subdued Framework IDs:
- Use IDs like `PAIG-ECON-001` or `PAIG-SEC-004` only in a small, low-contrast mono badge on the sub-framework detail pages.

---

## 2. Updated Component Specifications

1. **[NEW] [research/page.tsx](file:///d:/Antigravity_RichardEwing.io/app/research/page.tsx):**
   - Renders the chronological Research Timeline with links to CIO, Built In, books, and code repos.
2. **[NEW] [EcosystemMap.tsx](file:///d:/Antigravity_RichardEwing.io/app/components/EcosystemMap.tsx):**
   - Reusable visual flow diagram linking:
     `Research Program` -> `Frameworks` -> `Articles` -> `Diagnostics` -> `Curriculum` -> `GitHub` -> `Exogram`.
3. **[NEW] [framework-data.ts](file:///d:/Antigravity_RichardEwing.io/app/lib/framework-data.ts):**
   - Config file mapping IDs, Provenance, and the Exogram Implementation layer for the 6 domains.

---

## 3. Verification Plan
- Run `npm run build` locally to verify zero build errors, static route generation, and dynamic compiling.
