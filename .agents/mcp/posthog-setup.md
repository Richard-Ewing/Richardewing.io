# PostHog MCP Server Configuration Guide

This guide documents how to connect the official PostHog Model Context Protocol (MCP) server to Google Antigravity.

---

## 1. Overview

`richardewing.io` collects anonymous telemetry and diagnostic progression events using `posthog-js`.
Connecting the PostHog MCP server allows War Room agents to inspect live funnel drop-offs, diagnostic tool engagement, and user paths directly from the CLI.

---

## 2. Server Registration in Antigravity

Add the following configuration to your Antigravity MCP settings (`mcp_config.json` or through the Antigravity Settings UI):

```json
{
  "mcpServers": {
    "posthog": {
      "command": "npx",
      "args": [
        "-y",
        "@posthog/mcp-server"
      ],
      "env": {
        "POSTHOG_API_KEY": "YOUR_PERSONAL_POSTHOG_API_KEY",
        "POSTHOG_HOST": "https://us.i.posthog.com"
      }
    }
  }
}
```

---

## 3. Available Tools via PostHog MCP

Once active, the following tools become accessible to War Room agents:
- `posthog_get_insights`: Fetch saved charts, trends, and diagnostic conversion funnels.
- `posthog_query_events`: Query recent user interaction events (e.g. `pdi_completed`, `assessment_started`).
- `posthog_list_dashboards`: Inspect boardroom executive dashboards.
- `posthog_get_feature_flags`: Verify active A/B tests or progressive rollouts.

---

## 4. Security & Scoping Invariant

- Use a dedicated read-only personal API key scoped only to the `richardewing.io` project.
- Never grant billing or project deletion permissions to the MCP service token.
