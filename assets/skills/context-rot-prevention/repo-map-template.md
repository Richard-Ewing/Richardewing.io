# DETERMINISTIC REPOSITORY MAP

> **GOVERNANCE DIRECTIVE**: Agents MUST read this file prior to execution. This file represents the absolute, deterministic truth of the repository architecture. Agents are forbidden from relying on probabilistic memory of the codebase.

## 1. CORE ARCHITECTURE BOUNDARIES

- **Frontend**: Next.js App Router (`/app`)
- **Backend/API**: Next.js API Routes (`/app/api`)
- **Database**: Supabase PostgreSQL
- **Styling**: Tailwind CSS (Strictly Light Mode, Cream/Slate palette)

## 2. GOVERNANCE MIDDLEWARE LOCATIONS

All execution gating and admissibility pipelines are located in:
`/src/governance/`

Do NOT bypass these pipelines. Do NOT patch these pipelines without human executive approval.

## 3. PROHIBITED ACTIONS (DO NOT ATTEMPT)

1. Do NOT attempt to rewrite the ESLint configuration (`eslint.config.mjs`).
2. Do NOT attempt to "fix" or downgrade Next.js versions to resolve hydration errors.
3. Do NOT add dark mode classes (`dark:bg-*`). The application is strictly light-theme.

## 4. COMPONENT REGISTRY

| Component Type | Location | Admissibility Rules |
|----------------|----------|---------------------|
| Governance UI | `/components/skills/` | Must use `<GovernanceDiagram />` for visual flows. |
| Global Layout | `/app/layout.tsx` | Do not modify the `<head>` metadata injection. |
| Middleware | `/src/governance/` | Modifications require `override: true` flag. |

*Last Updated: {{TIMESTAMP}}*
