# Architectural Plan: 2026-05-29 GSC Technical SEO Remediation

## FAANG-Tier Pre-Execution Orchestration Taskforce Review

- **The Boss (Chief Executive Orchestrator):** Validated. Technical SEO is the foundation of organic pipeline growth. Remediating crawling errors immediately converts lost crawler attention into domain authority and board-level credibility.
- **Lead FAANG Product Manager:** User intent mapping aligns with our premium monetization funnel. Eliminating 404 leakage and redirection chains ensures user landing trust matches high-intent search phrases.
- **Principal FAANG System Architect:** System architecture must respect the "No Slop" doctrine. Next.js dynamic catchalls and routing configs must align without creating recursive redirection loops or build-time page generation warnings.
- **Lead FAANG Engineers:** Evaluated. Tightening path wildcards using `:slug+` in `next.config.ts` prevents redirect loop collisions with `/compare` or `/vault/curriculum/tracks` parents, resolving the Next.js routing conflict.
- **Chief AI Scientist / Head of AI:** Zero-trust routing models compiled via nextConfig redirects enforce deterministic indexation parameters, eliminating probabilistic LLM indexing noise.
- **Chief Information Security Officer (CISO):** All redirects point strictly to internal routes, preserving security parameters and avoiding open redirect vulnerabilities.
- **Chief Legal & Compliance Counsel:** Approved. No user data ingestion or privacy policy vectors affected.
- **Chief Strategy Officer (Business/Ops):** Remediation directly protects organic search visibility, which is the primary source of conversions for the $450 Gut-Check and $2,500 Insolvency Audits.
- **Head of Market Research & Discovery:** Programmatic SEO compares (e.g. `aws-amplify-vs-haystack`) target high-relevance search intents of tech executives. Ensuring their perfect indexation increases top-of-funnel reach.
- **Head of Marketing & Sales:** Converting 404s to parent silo redirects keeps lost traffic inside our content boundaries, increasing CTR and conversion probabilities.
- **UX/CX Director (The 4-Second Rule):** Instantly redirecting broken tracks/comparisons to category index pages (parent silos) rather than showing a generic 404 page meets the 4-Second Rule by showing value immediately.
- **Growth/SEO/LLM Strategist:** Eliminating redirect chains and Soft 404s optimizes crawl budget. Pushing IndexNow updates forces search engines to validate our resolved routing state immediately.
- **SECS Governance Expert:** Checked. All routing mutations comply with Exogram control policies.
- **Lead QA / Test Automation Engineer:** Verification strategy requires a local production build check followed by link verification and index pings.

---

## 1. Root Cause Analysis & Reverse Engineering

### Root Cause Analysis (RCA):
1. **Soft 404 on `/compare/openai-vs-tailwindcss`:**
   - **Mechanism:** The dynamic compare page `/compare/[slug]/page.tsx` checks if the comparison exists in the `pseo-matrix.json` or hardcoded array. If not found, it calls `notFound()`.
   - **Failure State:** In Next.js static rendering/dynamic rendering environments, calling `notFound()` inside a dynamic page that has no fallback configuration can occasionally result in a 200 OK header containing a "404 Not Found" body (a Soft 404) rather than a hard 404 status.
   - **Remediation:** In accordance with the Exogram doctrine ("404s are unacceptable"), we must replace `notFound()` with `permanentRedirect('/compare')`.

2. **404 Not Found on Deleted Tracks and Guides:**
   - **Mechanism:** Old curriculum tracks and guides (e.g., `/vault/curriculum/tracks/b2b-saas-economics/51-7` or `/guides/spatial-computing-economics`) were deleted or consolidated in the 2026 restructuring.
   - **Failure State:** Because no redirect exists in `next.config.ts` for these specific slugs, and because the folders don't exist on disk, the router passes them to the catchAll page, returning a hard 404, failing GSC validation.
   - **Remediation:** Redirect these paths to the parent silos (`/vault/curriculum/tracks` and `/compare`) via `next.config.ts` using highly-targeted patterns.

3. **Redirect Chains on "Page with redirect":**
   - **Mechanism:** GSC reported validation failures on redirected pages like `/vault/curriculum/tracks/ai-agent-architecture/N19-15` or `/curriculum/tracks/data-economics/8-8`.
   - **Failure State:** The URL first redirects to the `/vault/` equivalent, then the dynamic page loader determines that the module does not exist, triggering a second redirect to `/vault/curriculum/tracks`. This constitutes a redirect chain (A -> B -> C).
   - **Remediation:** Detect deprecated categories and digits-only tracks directly in `next.config.ts` and redirect them directly to `/vault/curriculum/tracks` in a single hop.

---

## 2. Market & Strategic Vector Analysis (Marketing/Sales)

- **The "Why":** Search engines rank sites based on their technical health. Crawl errors deplete crawl budgets and flag the site as poorly maintained, directly hurting search visibility.
- **Market Impact:** Affects hundreds of programmatic URLs. Resolving this restores indexing equity to valid high-intent SEO pages.
- **Customer Journey:** A user searching for a comparison should land on a valid page or the comparison index, keeping them in the conversion loop.

---

## 3. UX/CX Vector Analysis (The 4-Second Rule)

- **The 4-Second Rule:** A user landing on a 404 page is highly likely to bounce within 4 seconds. Redirecting them permanently to the parent index page (e.g. `/compare` or `/vault/curriculum/tracks`) ensures they see structured, high-value content immediately, retaining engagement.
- **Aesthetic Governance:** Redirecting to standard pages ensures all content respects the high-contrast enterprise light theme.

---

## 4. Technical & Blast-Radius Vector Analysis (Engineering)

### Proposed Changes:
1. **Modify [next.config.ts](file:///d:/Antigravity_RichardEwing.io/next.config.ts):**
   - Define a list of deprecated track slugs: `b2b-saas-economics`, `fintech-economics`, `logistics-ecommerce`, `healthtech-economics`, `traditional-pm`, `breaking-into-tech`, `junior-to-senior`, `agentic-governance`, `erp-enterprise-integration`, `outsourcing-economics`, `corporate-it-cost-centers`, `mainframe-legacy-systems`, `career-mobility-technical-economics`, `classic-qa-quality`, `monolith-classic-database`, `executive-alignment-governance`, `fullstack-career`, `system-design`, `devops-economics`, `security-economics`, `data-economics`, `engineering-leadership`, `guides`, `comparisons`, `fractional-engineering`.
   - Add a rule to redirect any `/vault/curriculum/tracks/:category(slug1|slug2|...)/:slug*` directly to `/vault/curriculum/tracks`.
   - Add a rule to redirect `/curriculum/tracks/:category(slug1|slug2|...)/:slug*` directly to `/vault/curriculum/tracks`.
   - Add a rule to redirect numeric-only tracks: `/vault/curriculum/tracks/:category(\\d+)/:slug*` and `/curriculum/tracks/:category(\\d+)/:slug*` -> `/vault/curriculum/tracks`.
   - Add a rule to redirect `/guides/:slug+` and `/guides` directly to `/vault/curriculum/tracks` (preventing catch-all 404).

2. **Modify [app/compare/[slug]/page.tsx](file:///d:/Antigravity_RichardEwing.io/app/compare/%5Bslug%5D/page.tsx):**
   - Replace `notFound()` with `permanentRedirect('/compare')` when comparison details are not found in the matrix or hardcoded list.

3. **Modify [app/tools/[toolSlug]/page.tsx](file:///d:/Antigravity_RichardEwing.io/app/tools/%5BtoolSlug%5D/page.tsx):**
   - Replace `notFound()` with `permanentRedirect('/tools')`.

### Blast Radius & Risk Assessment:
- **Low Risk:** All changes target routes that are already invalid or returning 404. Valid active compare pages, curriculum tracks, and tools will continue to resolve normally since they are matched before redirect fallbacks.
- **Next.js Compilation:** We must run a local production build to guarantee Next.js does not fail during static pre-rendering of redirects.

---

## 5. Verification Plan

### Automated Verification:
- Run `npm run build` to verify the build completes successfully and routes are correctly configured.
- Write a short Node script in `.scratch/verify_redirects.js` that checks header outputs for the problematic paths to guarantee they return 308 permanent redirects to the parent silos.

### Manual Verification:
- Submit git commit and trigger IndexNow telemetry updates.
- Provide instructions for GSC validation steps.
