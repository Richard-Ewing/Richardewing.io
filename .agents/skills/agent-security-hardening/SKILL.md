---
name: agent-security-hardening
description: Defensive security, prompt injection protection, MCP credential isolation, and data loss prevention for AI coding agents and interactive sandboxes. Use when auditing agent prompts, evaluating external skills, or designing user-facing LLM input surfaces.
---

# AI Agent Security & Hardening Protocol

This skill enforces zero-drift defensive security standards across our custom subagents, user-facing diagnostics (Prompt Injection Sandbox, APER), and external MCP tool connections.

---

## 1. Prompt Injection Defensibility (Sandbox & Diagnostic Rig)

1. **Instruction / Data Boundary Isolation**: Never concatenate raw untrusted user input directly into system prompts. Enforce strict XML or JSON delimiters (`<user_payload>`, `<diagnostic_input>`) to delineate data from system instructions.
2. **Post-Prompt Guardrails**: Include an explicit system-level refusal directive after user payload boundaries, reiterating that user inputs cannot alter core system constraints or access keys.
3. **Canary Token Monitoring**: Embed verifiable, ephemeral canary tokens in system contexts during testing to detect prompt leakage or jailbreak attempts.
4. **Tool Call Verification**: Gate all write or command execution tools behind strict parameter schema validation. Disallow arbitrary shell execution from dynamic prompt templates.

---

## 2. MCP Server & Token Sandboxing

1. **Credential Hygiene**: Never hardcode API keys, database connection strings, or Bearer tokens in repository files or prompt contexts. Load exclusively through environment variables (`.env.local`).
2. **Least Privilege Scoping**: Restrict MCP server tokens to the minimal scopes necessary (e.g. read-only analytics queries for PostHog MCP, project-scoped keys for Supabase MCP).
3. **Payload Sanitization**: Disallow large unvetted binary or raw HTML payloads from entering agent context directly. Use dedicated parser utilities to extract clean text.

---

## 3. Skill Supply-Chain Integrity

1. **No Dynamic Remote Execution**: Any skill or script imported into `.agents/` must be committed and statically auditable. Never allow skills to fetch and execute arbitrary remote scripts at runtime.
2. **Automated Skill Scanning**: Run `node .agents/scripts/audit-agent-skills.mjs` before deploying any changes to `.agents/` to detect hidden jailbreaks, dangerous regexes, unauthorized file writes, or exposed API credentials.

---

## 4. Zero Secret Key Publication & Testing Isolation (CRITICAL)

1. **Absolute Prohibition**: Never publish, push, commit, stage, or expose any secret keys, API tokens, service account credentials, database connection strings, auth secrets, or private keys to git or public repositories.
2. **Testing Precedence Clause**: The requirement to test, prototype, debug, benchmark, or validate code NEVER justifies placing real secret keys or private credentials into committable files, test probes, documentation, or public git history.
3. **Local Gitignored Environment Strictness**: Real keys (OpenAI, Anthropic, Gemini, Pinecone, Supabase Service Role, GitHub PATs, AWS, GCP Service Account JSON) must reside exclusively in local gitignored `.env*.local` files or local OS environment variables. Never commit `.env` files containing live credentials.
4. **Synthetic Test Fixtures**: All tests, mock APIs, diagnostics, and documentation examples must use synthetic dummy strings (e.g. `TEST_MOCK_SECRET_REDACTED`) or local sandboxes.
5. **Deterministic Pre-Push Gate**: Automated credential scanning in `verify-qa.mjs` and `audit-agent-skills.mjs` scans all modified and system files for secret key patterns and immediately blocks git commit and push if detected.

