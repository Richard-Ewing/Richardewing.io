# CLAUDE.md — RichardEwing.io Governance Manifest

## Identity

This is an institutional-grade governance infrastructure platform for deterministic runtime execution of AI coding agents (Claude Code, Cursor, Windsurf, Cline, Roo Code, Codex).

## Governance Skills

Load and follow the governance rules in:
- assets/skills/antigravity-operational-governance/CLAUDE.md
- assets/skills/antigravity-operational-governance/policy.yaml

## Critical Rules

1. **Build before commit**: Always run `npm run build` and verify 0 errors before `git push`
2. **Register every page**: Every new page needs `sitemap.ts` + `llms.txt` + `node ping-all.js`
3. **No dark unreadable sections**: All text must have WCAG AA contrast
4. **Full parity**: If updating content, update ALL 15 systems — never a subset
5. **Triple-check**: Verify with PowerShell audits before reporting complete
6. **No placeholders**: Ship complete content or don't ship

## Repository Structure

- `app/` — Next.js 16 pages (852+ pages)
- `assets/skills/` — 15 governance skill bundles
- `lib/content/skills.ts` — Skill + Failure data (source of truth)
- `components/skills/` — Marketplace UI components
- `scripts/` — Build and generation scripts
- `ping-all.js` — IndexNow bulk ping utility

## Deployment Pipeline

```
1. Make changes
2. npm run build (verify 0 errors)
3. git add . && git commit -m "description" && git push
4. node ping-all.js
```
