# Git Hygiene & Production Deployment Directives

## 1. Zero Root Directory Clutter
* The repository root must remain pristine.
* NEVER create temporary `.js`, `.txt`, `.json`, or `.sh` files in the workspace root.
* All intermediate scripts, test dumps, and temporary logs MUST be written to `.scratch/` or `<appDataDir>\brain\<conversation-id>/scratch/`.

## 2. Mandatory Automatic Deployment
* For EVERY task that modifies code or content:
  1. Verify the production build passes clean (`npm run build`).
  2. AUTOMATICALLY run `git add -A`.
  3. AUTOMATICALLY run `git commit -m "<type>(<scope>): <descriptive message>"`.
  4. AUTOMATICALLY run `git push origin main`.
* The user should NEVER have to remind or prompt the agent to deploy code or push to git.
* Always verify `git status` returns clean before ending the turn.
