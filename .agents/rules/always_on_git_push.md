---
name: always_on_git_push
description: Mandates automatic git add, commit, and push origin main on every turn where code or content files are edited.
trigger: always_on
---

# Mandatory Automatic Production Push Rule

If any file in the workspace is created or modified during the current turn:

1. You MUST run `node .agents/scripts/verify-qa.mjs` to verify zero em-dashes and root hygiene.
2. You MUST run `npm run build` to verify production compilation.
3. You MUST AUTOMATICALLY run `git add -A`.
4. You MUST AUTOMATICALLY run `git commit -m "<type>(<scope>): <description>"`.
5. You MUST AUTOMATICALLY run `git push origin main`.
6. You MUST verify `git status` returns clean.

DO NOT end the conversation turn without executing these steps whenever files are changed. The user should NEVER have to prompt or remind you to push code to production.
