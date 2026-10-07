# ADR-0007: Google Antigravity v2.21.0 Upgrade, Planning Mode, and Hybrid Architecture

## Context
Google Antigravity has released Antigravity 2.0 (v2.21.0) along with updated component releases:
- Antigravity IDE Standalone: v2.5.5
- Antigravity CLI (`agy`): v1.1.25
- Antigravity Python SDK (`google-antigravity`): v0.1.16

Key platform capabilities introduced in this release cycle include:
1. **/plan Mode**: AI agents can thoroughly research codebases, draft structured implementation plans, and pause for explicit user review and approval before mutating workspace files.
2. **Integrated Sidebar Git VCS Controls**: Direct version control panels built alongside the terminal tab, enabling in-app branch management, visual staging, commit authoring, and push synchronization.
3. **Hybrid Cloud and Local Architecture**: Seamless co-existence and dynamic switching between frontier cloud models (Gemini 3.8 Flash High Reasoning, Gemini 3 Pro, Vertex AI Standard ADC and Express API Key modes) and on-device local runtimes (LiteRT / LightRT executing Gemma 4 26B).

The `richardewing.io` engineering harness needs to formally standardize on these component versions and operational capabilities.

## Decision
We formally adopt Google Antigravity 2.0 (v2.21.0), IDE Standalone v2.5.5, CLI v1.1.25, and SDK v0.1.16 across all agent definitions, skills, rules, and master operating directives:
1. **Enforce `/plan Mode` Discipline**: For structural refactors and multi-file features, agents must construct an implementation plan artifact, detail constraints, and align before applying code mutations.
2. **Standardize on Sidebar Git VCS Workflows**: Utilize native sidebar Git VCS controls alongside terminal operations for clean git tracking and verification gates.
3. **Operationalize Hybrid Model Dispatch**: Route complex architectural reasoning, REWS copywriting, and 4-pass verification to frontier Gemini models, while supporting local on-device LiteRT/Gemma execution for offline tasks and high-frequency local checks.

## Deciders
@richardewing, Jensen Huang (Sovereign Compute Lead), Mark Zuckerberg (Open Leverage Lead), Code Architect, QA Auditor

## Status
Accepted

## Consequences
Positive:
- `/plan Mode` dramatically curtails hallucination debt and accidental breaking changes by enforcing a formal planning step before code mutations.
- Integrated sidebar Git VCS controls streamline developer and agent inspection of staged files and commit diffs.
- Hybrid architecture allows cost-effective local execution via LiteRT and Gemma 4 26B without compromising access to frontier Gemini 3.8 Flash High reasoning budgets.
- System directives and subagents are aligned with the exact production release versions of Antigravity.

Negative/Considerations:
- Requiring formal `/plan Mode` plans on complex tasks adds an upfront alignment phase before code editing begins.
- Local LiteRT and Gemma execution requires compatible local hardware (sufficient RAM and GPU/NPU acceleration) when offloading from cloud APIs.
- Maintaining dual model configs (hosted `LocalAgentConfig` vs on-device `LiteRTAgentConfig`) requires clear criteria for when local execution is preferred.
