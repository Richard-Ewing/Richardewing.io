---
description: Mandatory SEO protocol after creating or modifying any high-value content (Blogs, Curriculum Tracks, Tools, Advisory Pages).
---

# SEO Indexing Automation Protocol

Whenever I (Antigravity) successfully create, publish, or heavily modify a high-value content asset on this repository, I must autonomously push the new URL to the Google Indexing API before concluding my task.

### Trigger Condition
- A new `.mdx` or `.ts` blog article is committed to the `app/lib` or `app/blog` routing structure.
- A new interactive advisory tool is pushed to the `app/tools` directory.
- A new premium curriculum track is structured in `app/vault`.

### Execution Steps
1. Identify the exact live production URL for the newly created resource (e.g., `https://www.richardewing.io/blog/new-article`).
2. Open the terminal and execute the Google Ping script targeting that exact URL:
// turbo
```bash
node ping-google.js [EXACT_URL]
```
3. Report the `✅ SUCCESS (Status 200)` output to the user indicating the asset has been forced into Google's Priority Crawl queue.
4. Do NOT ask the user to run this command. I execute it autonomously on my end.
