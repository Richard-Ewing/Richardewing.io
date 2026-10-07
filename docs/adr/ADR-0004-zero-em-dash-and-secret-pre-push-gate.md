# ADR-0004: Zero Em-Dash & Secret Key Pre-Push Deterministic Gate

## Context
Generative AI models and human developers routinely introduce subtle defects:
1. Secret token leaks: API keys, access tokens, and private keys inadvertently committed to public git repositories, causing severe security compromises.
2. AI stylistic tells: Pervasive use of em-dashes and en-dashes, creating mechanical, robotic prose that fails the Human Writing Standard (HWS v2.0).
3. Workspace pollution: Temporary scripts and debug dumps cluttering the workspace root.
Manual code review is insufficient to catch 100% of these occurrences.

## Decision
We implement a mandatory, deterministic pre-push automated verification script (`.agents/scripts/verify-qa.mjs`) integrated into native Antigravity lifecycle hooks (`hooks.json` - `PostToolUse` and `Stop`). The gate scans all repository files and staged changes for:
- Forbidden em-dashes and en-dashes (`\u2014`, `\u2013`).
- Secret key and token regex patterns (OpenAI, Anthropic, Google API, GitHub PAT, AWS, Pinecone, Supabase, private keys, database URLs with passwords).
- Root workspace hygiene (no loose temporary or scratch files in root).
- Enterprise security headers in middleware.
- Research corpus and concept relationship schema invariants.
Any failure immediately halts deployment with a non-zero exit code (`exit 1`).

## Deciders
@richardewing, Dan Guido, Simon Willison, QA Auditor

## Status
Accepted

## Consequences
Positive:
- Total prevention of credential leakage to public repositories.
- Zero stylistic AI fingerprints (em-dashes) across all content and system files.
- Guaranteed root directory cleanliness.
- Automated enforcement via Antigravity hooks prevents human or agent forgetfulness.

Negative/Considerations:
- Can block urgent commits if false positives occur (mitigated by explicit test-mock prefixes and regex scoping).
- Adds execution time (~1 to 3 seconds) to file mutation operations and turn-end checks.
- Developers must use ASCII hyphens (`-`) or double hyphens (`--`) exclusively.
