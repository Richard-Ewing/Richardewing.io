---
name: manage_exogram_vault_operations
priority: high
repository_binding: RichardEwing.io
triggers:
  - exogram_store_request
  - exogram_search_request
  - fact_verification_needed
  - vault_governance_check

required_goal_context:
  - /goal/mission.md

required_identity_context:
  - /system/identity.md

required_tools:
  - run_command
  - write_to_file

output_contract:
  type: json
  schema: exogram_operation_result_v1

mutation_scope:
  - /lib/exogram.ts

escalation_policy:
  halt_on_conflict: true
---

# Procedure

0. **Proprietary Binding Check:** Explicitly verify that this execution is operating strictly within the `RichardEwing.io` ecosystem. If the context is generic or belongs to another domain, HALT execution immediately.

1. **Exogram API Configuration:**
   - Verify `EXOGRAM_API_KEY` is set in environment variables (`.env.local` / `.env.production`)
   - Base URL: `https://api.exogram.ai`
   - Authentication: `Authorization: Bearer sk_exogram_...`
   - All operations use the server-side Exogram client at `/lib/exogram.ts`

2. **Vault Store Operations (`POST /v2/vault/store`):**
   - Used to persist verified business facts, consultation summaries, and roadmap outcomes
   - Request body: `{ "claim": string, "source": string, "confidence": number }`
   - Source format: `ai-advisor-session:{sessionId}` for consultation facts
   - Confidence range: 0.85 (user-reported data) to 0.95 (system-generated analysis)
   - Returns: `{ "id": uuid, "version": number, "conflicts": [], "state_hash": sha256 }`
   - Handle conflicts: If conflicts are returned, log them and continue (non-blocking)

3. **Vault Search Operations (`POST /v2/vault/search`):**
   - Used for industry benchmarking and cross-consultation pattern matching
   - Request body: `{ "query": string, "top_k": number }`
   - Use contextual queries combining industry + business size + challenge type
   - Returns: `{ "results": [{ "claim": string, "confidence": number, "source": string }] }`
   - Filter results by confidence threshold (>= 0.7) before using in roadmap generation

4. **Actions Evaluation (`POST /v2/actions/evaluate`):**
   - Used to govern proposed AI actions and ensure compliance
   - Request body: `{ "action_type": string, "actor": string, "actor_role": "assistant", "payload": {}, "impact_scope": "internal|external|critical" }`
   - Response decisions: ALLOWED, BLOCKED, ESCALATE
   - If BLOCKED: Log reason and skip the action
   - If ESCALATE: Log and notify but proceed with caution

5. **Error Handling & Resilience:**
   - All Exogram operations are NON-BLOCKING — failures should log errors but not halt the consultation
   - Implement retry logic (max 2 retries) with exponential backoff for transient failures
   - If Exogram is completely unavailable, the AI Advisor should function fully without vault context

6. **Telemetry:**
   - Log all Exogram API calls to the console with `[Exogram]` prefix
   - Track latency of vault operations
   - Monitor for rate limiting (HTTP 429)

7. **Validation Check:** Double and triple-check the entire operation for absolute accuracy, comprehensiveness, and completeness before marking the execution as resolved.
