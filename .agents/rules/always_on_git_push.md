---
name: always_on_git_push
description: Mandates automatic git add, commit, and push origin main on every turn where code or content files are edited, with zero root clutter.
trigger: always_on
---

# Mandatory Automatic Production Push & Hygiene Rule

If any file in the workspace is created or modified during the current turn:

1. **Hygiene**: Ensure no loose `tmp_*.js` or test dump files exist in workspace root (route all scratch scripts to `.scratch/`).
2. **QA Script**: Run `node .agents/scripts/verify-qa.mjs` to verify zero em-dashes and root hygiene.
3. **Build Gate**: Run `npm run build` to verify production compilation.
4. **Git Auto-Deploy**: Run `git add -A` $\rightarrow$ `git commit -m "<type>(<scope>): <description>"` $\rightarrow$ `git push origin main`.
5. **Clean Status**: Verify `git status` returns clean.

DO NOT end the conversation turn without executing these steps whenever files are changed. The user should NEVER have to prompt or remind you to push code to production.

