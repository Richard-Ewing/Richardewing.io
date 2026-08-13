# Closed-Loop 4-Pass QA Gate Directives

Every feature, bug fix, or content update must successfully pass all 4 verification tiers before completion:

## Pass 1: Technical & Component Contracts
* Zero TypeScript compiler errors or broken interfaces.
* Valid parameter passing across all invocation sites.

## Pass 2: Automated Script Verification
* Execute `node .agents/scripts/verify-qa.mjs`.
* Checks for:
  1. Forbidden em-dashes (U+2014) in copy.
  2. Unsourced statistics missing verified sources.
  3. Meta title length (<60 chars) and meta description active voice.
  4. Repository root cleanliness (no loose scratch files).

## Pass 3: Domain & REWS v1.0 Compliance
* Adherence to REWS copywriting rules (lived experience opener, intellectual humility, Euclidean progression, system critique).
* Strict absence of marketing/consulting jargon (`unlock`, `delve`, `seamless`, `robust`, `leverage`, `elevate`).

## Pass 4: Production Build & Dehydration Safety
* Run `npm run build`.
* Zero compilation warnings, zero SSR hydration mismatches, zero un-guarded `localStorage` accesses.
