---
name: execute_ai_advisor_consultation
priority: critical
repository_binding: RichardEwing.io
triggers:
  - ai_advisor_request
  - business_consultation_initiated
  - ai_integration_inquiry

required_goal_context:
  - /goal/mission.md

required_identity_context:
  - /system/identity.md

required_tools:
  - search_web
  - write_to_file
  - run_command

output_contract:
  type: json
  schema: ai_consultation_report_v1

mutation_scope:
  - /app/api/ai-advisor/
  - /components/AdvisorChat.tsx
  - /components/AdvisorRoadmap.tsx

escalation_policy:
  halt_on_conflict: true
---

# Procedure

0. **Proprietary Binding Check:** Explicitly verify that this execution is operating strictly within the `RichardEwing.io` ecosystem. If the context is generic or belongs to another domain, HALT execution immediately.

1. **Authentication & Authorization Verification:**
   - Verify the requesting user is authenticated via Clerk
   - Verify the user has `has_ai_advisor_access: true` OR `has_yearly_subscription: true` in their Clerk `publicMetadata`
   - If not authorized, redirect to the subscription paywall at `/ai-integration/advisor`

2. **Session Initialization:**
   - Generate a new UUID session ID for the consultation
   - Initialize a new `ai_advisor_sessions` record in Supabase with `status: 'in_progress'` and `current_phase: 1`
   - Set up the Gemini conversation context with Richard Ewing's AI Integration Advisor persona

3. **Execute 5-Phase Consultation Flow:**
   - **Phase 1 — Discovery:** Gather business name, industry, size, revenue range, years in business, primary challenges
   - **Phase 2 — Pain Points:** Identify 3-5 operational pain points with quantified impact (hours/week, cost/month)
   - **Phase 3 — Tech Stack:** Map current tools, existing AI usage, technical proficiency, data readiness
   - **Phase 4 — Goals & Budget:** Define AI objectives, success criteria (90-day / 6-month), budget range, timeline urgency
   - **Phase 5 — Roadmap Generation:** Synthesize all data into a structured AI integration roadmap

4. **Exogram Vault Integration:**
   - After each phase completion, store key business facts to Exogram Vault via `POST /v2/vault/store`
   - Before generating the roadmap, search Exogram Vault via `POST /v2/vault/search` for relevant industry benchmarks from past consultations
   - Evaluate proposed roadmap actions through Exogram's Judgment Engine via `POST /v2/actions/evaluate`

5. **Roadmap Generation:**
   - Use Gemini (gemini-2.0-flash) with a comprehensive system prompt to generate a structured JSON roadmap
   - Roadmap must include: executive summary, 4 phases (Quick Wins, Foundation, Growth, Optimization), specific tool recommendations with real URLs, ROI estimates, difficulty ratings, implementation timelines
   - Validate the JSON structure before persisting

6. **Persistence & Delivery:**
   - Save the completed roadmap to Supabase `ai_advisor_sessions` with `status: 'completed'`
   - Store the completed roadmap summary in Exogram Vault for cross-consultation benchmarking
   - Render the roadmap in the `AdvisorRoadmap` component with expandable phases, key metrics, and risk analysis
   - Enable PDF download via jsPDF with full roadmap details

7. **Validation Check:** Double and triple-check the entire operation for absolute accuracy, comprehensiveness, and completeness before marking the execution as resolved. Ensure no edge cases or unhandled states remain.
