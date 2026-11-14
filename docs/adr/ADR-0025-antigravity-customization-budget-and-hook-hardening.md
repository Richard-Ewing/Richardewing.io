# ADR-0025: Antigravity 2.0 Rule Budget Consolidation & Hook CWD Hardening

## Context
Google Antigravity 2.0 imposes a strict 24,000-byte per-file truncation limit across `AGENTS.md` and `.agents/rules/*.md`, plus a 20,000-token aggregate `defaultRulesBudget`. In `richardewing.io`, `.agents/AGENTS.md` (37,868 bytes) and `.agents/rules/always_on_mod_execution.md` (36,672 bytes) were near-identical duplicates totaling over 74 KB. Both files silently truncated at 24 KB on every turn, hiding Sections 12 through 21 (Cal.com `/schedule` parameter bridges, `CLOUDFLARE_API_TOKEN` auth, Edge CDN cache shield rules, Option C funnels, ADR-0018/ADR-0020 contracts, and the Canonical 10-Pillar Cloudflare Report) and pushing `page_addition_invariants.md` over the aggregate rules budget.

In addition, `.agents/hooks.json` specified `"node .agents/scripts/verify-qa.mjs"` and `"node .agents/scripts/stop-hook.mjs"` even though Antigravity executes hooks with `cwd` equal to `.agents/`. That mismatch forced "the accidental nested scripts directory" workaround, caused the `PostToolUse` matcher (`replace_file_content|write_to_file`) to miss modern `edit_file` and `write_file` tool steps, and omitted `{}` JSON stdout compliance for `PostToolUse`. Legacy ".agent" and ".gemini" directories also remained from pre-2.0 agent setups.

## Decision
1. Consolidate `.agents/AGENTS.md` into a complete, non-truncated baseline under 18,000 bytes covering all 21 sections inline, and preserve the unabridged governance and ADR reference inside `.agents/skills/master-directive/references/platform-invariants-adr0018-0024.md` (linked from `.agents/skills/master-directive/SKILL.md`).
2. Delete `.agents/rules/always_on_mod_execution.md` and record its path remap in `.agents/scripts/check-adr-drift.mjs` (`HISTORICAL_PATH_REMAPS`) so historical ADRs (ADR-0015 and ADR-0023) audit cleanly without drift.
3. Add `.agents/scripts/post-edit-qa-hook.mjs` as a sub-50ms `PostToolUse` guard that scans edited files for illegal en/em-dashes (`U+2013`/`U+2014`) and secret keys while strictly emitting `{}` to stdout, leaving full build/HTML/ledger verification in `node .agents/scripts/verify-qa.mjs`.
4. Update `.agents/hooks.json` so all hook commands resolve relative to `.agents/` (`"node scripts/post-edit-qa-hook.mjs"` and `"node scripts/stop-hook.mjs"` invoking `.agents/scripts/post-edit-qa-hook.mjs` and `.agents/scripts/stop-hook.mjs`) and match `edit_file|write_file|replace_file_content|write_to_file`.
5. Delete obsolete ".agent", ".gemini", and ".agents/.agents" directories while preserving `.cursorrules`, `.windsurfrules`, and `.antigravityrules` (referenced by comparison pages and root hygiene scripts).

## Deciders
@richardewing, Code Architect, QA Auditor, Dan Guido

## Status
Accepted

## Consequences
Positive:
- 100% of Sections 1 through 21 of `.agents/AGENTS.md` plus `cloudflare_hosting.md`, `page_addition_invariants.md`, and `vertical_communication.md` load in full on every turn with zero silent truncation.
- `PostToolUse` hooks fire accurately on `edit_file` and `write_file` without running slow full-repo HTML/ledger audits on every single file edit.
- Elimination of legacy nested ".agents/.agents", ".agent", and ".gemini" directories removes duplicate legacy instructions from developer tooling.

Negative/Considerations:
- Future edits to `.agents/AGENTS.md` must stay under 18,000 bytes (hard ceiling 24,000 bytes); long reference manuals belong under `.agents/skills/*/references/`.
- Removing `.agents/rules/always_on_mod_execution.md` required an explicit entry in `HISTORICAL_PATH_REMAPS` inside `.agents/scripts/check-adr-drift.mjs`.
