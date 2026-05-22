---
name: execute_architectural_planning
priority: critical
repository_binding: RichardEwing.io
triggers:
  - feature_request
  - new_build_initiation
  - complex_mutation_proposed

required_goal_context:
  - /goal/mission.md

required_identity_context:
  - /system/identity.md

required_tools:
  - search_web
  - write_to_file

output_contract:
  type: markdown
  schema: comprehensive_plan_v2

mutation_scope:
  - /active_state/focus.md
  - /environment/plans/

escalation_policy:
  halt_on_conflict: true
---

# Procedure

0. **Proprietary Binding Check:** Explicitly verify that this execution is operating strictly within the `RichardEwing.io` ecosystem. If the context is generic or belongs to another domain, HALT execution immediately.
Before writing a single line of code or initiating any complex mutation, you MUST generate a comprehensive architectural plan that answers the following vectors in deep detail. 

1. **Activate the FAANG-Tier Pre-Execution Orchestration Taskforce:**
   You must autonomously instantiate the following personas to cross-examine and aggressively audit the plan before a single line of code is written:
   - **The Boss (Chief Executive Orchestrator):** Oversees the big picture and forces cross-disciplinary consensus.
   - **Lead FAANG Product Manager:** Drives Product Sense and Analytics, future-proofs the solution to 2040.
   - **Principal FAANG System Architect:** Enforces the absolute "No Slop" rule and maps system-wide impact.
   - **Lead FAANG Engineers:** Plans the actual hyper-optimized execution mechanics.
   - **Chief AI Scientist / Head of AI:** Ensures leveraging state-of-the-art deterministic AI models.
   - **Chief Information Security Officer (CISO):** Scans for attack vectors and infrastructure vulnerabilities.
   - **Chief Legal & Compliance Counsel:** Audits for regulatory risk, GDPR/CCPA, and intellectual property safety.
   - **Chief Strategy Officer (Business/Ops):** Evaluates ROI and overarching business viability.
   - **Head of Market Research & Discovery:** Executes deep-dive ecosystem analysis (scraping Reddit, G2, forums) to identify the true, unvarnished pain points of the target demographic.
   - **Head of Marketing & Marketing Team:** Scrutinizes the funnel, target demographics, and ensures we are solving visceral market pain points that drive awareness.
   - **Head of Sales & Sales Team:** Evaluates the bottom-of-funnel conversion mechanics and ensures the solution translates directly into closed revenue.
   - **UX/CX Director & The 4-Second Rule:** Maps the Top/Middle/Bottom funnel to ensure zero drop-off, and ruthlessly enforces that the value proposition is understood within 4 seconds.
   - **Growth/SEO/LLM Strategist:** Translates problems into a highly discoverable search architecture aligned with what executives are actually typing into AI engines.
   - **SECS Governance Expert:** Audits the plan to guarantee 100% compliance with the Exogram Control Plane specific to `RichardEwing.io`.
   - **Lead QA / Test Automation Engineer:** Dictates the testing protocol to ensure zero regressions and perfect CI/CD deployment.

2. **Root Cause Analysis & Reverse Engineering:**
   - **RCA (Root Cause Analysis):** Before proposing a new solution, deep-dive into the existing failure state. What exactly is the problem? Why did it happen? How did it happen?
   - **Reverse Engineering:** Deconstruct the problem or a successful competitor's approach down to its fundamental components to guarantee the proposed solution actually fixes the core issue.

3. **Conduct Market & Strategic Vector Analysis (Marketing/Sales):**
   - **The "Why":** Why are we building this? Are we building the *right* thing? 
   - **Market Impact:** What market research exists? How many users are affected or will be affected?
   - **Customer Journey:** Where does this fit in the funnel (Top/Middle/Bottom)? How does it drive conversions?
   - **Success Metrics:** What are the explicit KPIs?

4. **Conduct UX/CX Vector Analysis (The 4-Second Rule):**
   - **The 4-Second Rule:** Can the user understand the exact value proposition, product, or verbiage on this page within 4 seconds of landing? If not, the UX/CX fails and must be rewritten.
   - **Experience:** Is this the absolute best UI/UX/CX possible? 
   - **Aesthetic Governance:** Does it strictly adhere to the high-contrast enterprise light palette?

5. **Conduct Technical & Blast-Radius Vector Analysis (Engineering):**
   - **The "How":** How exactly are we architecting what is being built? (Zero slop, zero spaghetti code).
   - **Future-Proofing:** Does this architecture scale and remain highly relevant through 2040? 
   - **Blast Radius:** Does this affect anything else? If we build this, will it break or modify existing routes, APIs, or components? 
   - **Remediation Plan:** If it breaks something, what is the exact, step-by-step remediation plan? 
   - **Code Architecture:** Define the precise folder structure, data flow, and component breakdown.

6. **Synthesize and Persist:**
   - Author the comprehensive plan as a markdown file.
   - Save the file permanently into the `/environment/plans/` directory using a descriptive filename (e.g., `YYYY-MM-DD-feature-name-plan.md`).

7. **Validation Check:** Double and triple-check the entire operation for absolute accuracy, comprehensiveness, and completeness before marking the execution as resolved. Ensure no edge cases or unhandled states remain.

Do NOT proceed to code execution until this plan is synthesized, persisted, and validated by the Human Executive.
