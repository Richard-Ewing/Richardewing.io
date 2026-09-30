# Cloudflare Edge Hosting & Deployment Directives

## 1. Hosting Architecture
- **Platform**: Cloudflare Workers with Static Assets.
- **Framework Adapter**: `@opennextjs/cloudflare`.
- **Wrangler Config**: [`wrangler.jsonc`](file:///d:/Antigravity_RichardEwing.io/wrangler.jsonc).
- **Active Domains**:
  - `https://www.richardewing.io`
  - `https://richardewing.io`
- **Zone ID**: `26b036cd0321b744617c0cc041c0f225` (`richardewing.io`).
- **Account ID**: `5e9b0584ad0ce1d524a631f1bc650ba2` (`richardewing1@gmail.com`).

---

## 2. Invariant Rules
1. **Never Assume Vercel**: The site is NOT hosted on Vercel. Any command invoking `vercel` or `npx vercel` is strictly prohibited.
2. **Mandatory Live Deployment Tool**: Always deploy via Wrangler using `npx wrangler deploy` (or `npm run deploy:worker`).
3. **Turn-End Deployment Gate**:
   `node .agents/scripts/verify-qa.mjs` $\longrightarrow$ `npm run build` $\longrightarrow$ `npx wrangler deploy` $\longrightarrow$ `git add -A` $\longrightarrow$ `git commit -m "..."` $\longrightarrow$ `git push origin main` $\longrightarrow$ `git status` (clean).
