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
2. **Automated Skill Scanning**: Run `node .agents/scripts/audit-agent-skills.mjs` before deploying any changes to `.agents/` to detect hidden jailbreaks, dangerous regexes, or unauthorized file writes.
