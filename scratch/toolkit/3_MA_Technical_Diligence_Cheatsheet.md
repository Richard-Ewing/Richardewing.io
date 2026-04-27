# Executive Diagnostic Toolkit
## Module 3: M&A Technical Diligence Cheatsheet

Confidential framework used by Private Equity and CFOs to quantify Technical Debt and Integration Risk during M&A.

### 1. The Reality of M&A Synergy
Financial models routinely project operational "synergies" from combining two software product suites. However, if the acquired company utilizes a fundamentally different technology stack, achieving that synergy requires a massive, unbudgeted data migration and architectural rewrite. This is known as **Integration Risk**.

### 2. The Big Three Deal Breakers
Before signing a Term Sheet, mandate diligence on these three areas:

#### A. Identity & Auth Silos
If the acquired software uses a custom-built authentication system while the acquiring company uses an enterprise SSO pipeline (e.g., Okta/Auth0), merging user identities will stall product delivery for 6+ months.
**Audit Question:** *Do both platforms support standard SAML/OIDC federated identity?*

#### B. Data Model Gravity
A modern microservice application attempting to absorb a 15-year-old monolithic relational database will trigger massive data-loss risks and zero-downtime migration headaches.
**Audit Question:** *What is the schema parity between the two core databases, and what is the estimated cost to normalize them?*

#### C. Compliance & Data Residency (CapEx Shock)
Acquiring a European company means inheriting GDPR data residency requirements. If your cloud architecture is US-centralized, you cannot legally migrate their data without spinning up localized European infrastructure.
**Audit Question:** *Does the acquired platform require immediate localized CapEx to remain compliant under our corporate umbrella?*

### 3. Valuing Technical Debt in the Purchase Price
Technical debt is a financial liability. Treat it like unrecorded debt on the balance sheet.
1. **Identify the Innovation Tax:** What percentage of engineering hours are spent fixing bugs instead of building features?
2. **Calculate the Burden:** (Total Engineering Payroll * Innovation Tax %).
3. **Adjust the Valuation:** Deduct the annualized burden from the Enterprise Value or use it as leverage to lower the purchase multiple.

---
*For a deeper dive into Capitalizing Software R&D and GAAP compliance, refer to the CFO / Investor modules at richardewing.io/answers.*
