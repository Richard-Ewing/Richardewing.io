# Getting Started — How to Install & Use Your Governance Skill

> **You just purchased a governance skill. This guide walks you through everything — from unzipping to full deployment — step by step.**
> 
> **No prior experience required.** If you can open a terminal, you can deploy this.

---

## What You Just Downloaded

When you unzip your purchase, you'll see a folder with these files:

```
your-skill-name/
├── CLAUDE.md              ← The skill manifest (tells the AI what to do)
├── README.md              ← Full operational manual
├── policy.yaml            ← Governance rules and thresholds
├── middleware.ts           ← TypeScript runtime interception code
├── architecture.mmd       ← Visual architecture diagram (Mermaid)
├── financial-model.csv    ← Cost/impact data for ROI justification
└── tools/                 ← Reusable automation scripts
    ├── tool-1.sh
    ├── tool-2.sh
    ├── tool-3.sh
    └── tool-4.sh
```

**Each file has a specific purpose.** You don't need to understand all of them immediately. This guide tells you exactly what to do with each one.

---

## Step 1: Unzip the Download

### On Mac/Linux
```bash
unzip your-skill-name.zip
```

### On Windows
Right-click the `.zip` file → **Extract All** → Choose a location → **Extract**

You should now see a folder with all the files listed above.

---

## Step 2: Choose Your AI Coding Agent

These skills work with **any** of the following agents. Find yours below:

| Agent | Where Rules Go | Manifest File |
|---|---|---|
| **Claude Code** | Project root or `.claude/` | `CLAUDE.md` |
| **Cursor** | Project root | `.cursorrules` |
| **Windsurf** | Project root | `.windsurfrules` |
| **Cline** | VS Code settings | `.clinerules` |
| **Roo Code** | VS Code settings | `.roorules` |
| **Codex** | Project root | `AGENTS.md` |
| **Copilot** | `.github/` | `copilot-instructions.md` |
| **Any Other Agent** | System prompt or project config | Paste contents of `CLAUDE.md` |

---

## Step 3: Install the Skill Into Your Project

### Option A: Claude Code (Recommended)

This is the simplest path. Claude Code natively reads `CLAUDE.md` files.

**3A.1 — Create the skills directory:**
```bash
mkdir -p .claude/skills/
```

**3A.2 — Copy the entire skill folder into your project:**
```bash
cp -r /path/to/your-skill-name/ .claude/skills/your-skill-name/
```

**3A.3 — Tell Claude Code to load it.**

Open (or create) a file called `CLAUDE.md` in your project root. Add this line:

```markdown
## Governance Skills

Load and follow the governance rules in:
- .claude/skills/your-skill-name/CLAUDE.md
- .claude/skills/your-skill-name/policy.yaml

When any trigger condition in the skill is met, execute the corresponding tool script.
```

**3A.4 — Verify it works.**

Start a new Claude Code session and ask:

```
What governance skills are loaded? List the trigger conditions.
```

Claude should respond with the skill name and its activation triggers from the `CLAUDE.md` manifest.

**Done.** Claude Code will now follow the governance rules automatically.

---

### Option B: Cursor

**3B.1 — Copy the skill folder into your project:**
```bash
cp -r /path/to/your-skill-name/ .cursor/skills/your-skill-name/
```

**3B.2 — Open (or create) `.cursorrules` in your project root.**

Add these lines:

```markdown
## Governance Rules

You MUST follow the governance policies defined in:
- .cursor/skills/your-skill-name/CLAUDE.md
- .cursor/skills/your-skill-name/policy.yaml

CRITICAL RULES:
- Before modifying any file, check if the action violates any policy threshold
- If you detect a retry loop (same error 3+ times), STOP and report to the user
- If you are about to modify more than 5 files, STOP and ask for confirmation
- Run the tool scripts in .cursor/skills/your-skill-name/tools/ when trigger conditions are met
```

**3B.3 — Restart Cursor** to load the new rules.

---

### Option C: Windsurf

**3C.1 — Copy the skill folder:**
```bash
cp -r /path/to/your-skill-name/ .windsurf/skills/your-skill-name/
```

**3C.2 — Add to `.windsurfrules`:**

```markdown
## Governance Rules

Follow all governance policies in .windsurf/skills/your-skill-name/CLAUDE.md
Follow all thresholds in .windsurf/skills/your-skill-name/policy.yaml
Execute tool scripts when trigger conditions are met.
```

---

### Option D: Any Other Agent

If your agent doesn't have a native rules file, you can paste the contents of `CLAUDE.md` directly into your **system prompt** or **custom instructions**.

**3D.1 — Open `CLAUDE.md` from your skill folder.**

**3D.2 — Copy the entire contents.**

**3D.3 — Paste it into your agent's system prompt or custom instructions area.**

**3D.4 — Also paste the contents of `policy.yaml`** so the agent knows the specific thresholds.

---

## Step 4: Understand the Policy File

Open `policy.yaml` in any text editor. Here's what you'll see (example from Context Rot Prevention):

```yaml
apiVersion: governance/v1
kind: RuntimePolicy
metadata:
  name: context-rot-prevention
  version: "1.2.0"
spec:
  triggers:
    - session_duration_minutes: 60
    - context_utilization_percent: 65
    - consecutive_patches_same_file: 3
    - instruction_recall_below: 80
  actions:
    - level: warning
      when: context_utilization > 50%
      do: log_warning
    - level: automated_reset
      when: context_utilization > 65%
      do: execute_checkpoint_rotation
    - level: human_review
      when: patch_chain > 5
      do: pause_and_notify
    - level: emergency_halt
      when: token_burn_rate > $15/hr
      do: kill_process_and_rollback
```

**What this means in plain English:**

| If This Happens... | The Agent Should... |
|---|---|
| Context window is 50% full | Log a warning |
| Context window is 65% full | Automatically save state and reset |
| Same file patched 5+ times | Stop and ask you for help |
| Spending more than $15/hr on tokens | Kill the process immediately |

**You can edit these thresholds.** If you want the agent to reset earlier (e.g., at 50% instead of 65%), just change the number in the YAML file.

---

## Step 5: Use the Tool Scripts

Each skill includes 4 reusable bash scripts in the `tools/` folder. These are commands the AI agent can run instead of writing new code every time.

### How to Run Them Manually

Open your terminal and navigate to the skill folder:

```bash
cd .claude/skills/your-skill-name/
```

Then run any tool:

```bash
bash tools/check-context-health.sh
```

### How the Agent Uses Them

When you've installed the skill correctly (Step 3), the agent reads the `CLAUDE.md` manifest and knows which tools are available. When a trigger condition is met, the agent runs the appropriate tool script automatically.

**Example:** If the agent detects it's been patching the same file repeatedly, it will run:

```bash
bash tools/patch-chain-detector.sh
```

This script checks git history for recursive patch patterns and reports back.

### Making the Tools Executable (Mac/Linux)

If you get a "permission denied" error, make the scripts executable:

```bash
chmod +x tools/*.sh
```

### Windows Users

On Windows, you'll need Git Bash, WSL, or a similar bash-compatible terminal. The scripts use standard bash commands (`git`, `grep`, `awk`, etc.).

**Quick install options:**
- **Git Bash**: Comes with [Git for Windows](https://git-scm.com/download/win)
- **WSL**: Run `wsl --install` in PowerShell (admin)

---

## Step 6: Understanding the Middleware (Optional — For Developers)

The `middleware.ts` file contains TypeScript code that can be integrated into your application's build pipeline or CI/CD system.

**You do NOT need to use this file** to get value from the skill. The `CLAUDE.md` + `policy.yaml` + `tools/` combination is sufficient for most users.

**If you ARE a developer** and want deeper integration:

1. Install dependencies:
```bash
npm install js-yaml
```

2. Import the middleware into your project:
```typescript
import { ExecutionGate } from './.claude/skills/your-skill-name/middleware';
```

3. Use it to validate agent actions programmatically before they execute.

---

## Step 7: Reading the Architecture Diagram

The `architecture.mmd` file is a [Mermaid](https://mermaid.js.org/) diagram showing the containment flow for the governance system.

**To view it:**

1. Go to [mermaid.live](https://mermaid.live)
2. Paste the contents of `architecture.mmd`
3. The diagram renders automatically

**Or** if you use VS Code, install the "Mermaid Preview" extension and open the file directly.

---

## Step 8: Verify Everything Works

### Quick Test Checklist

- [ ] Skill folder is copied into your project
- [ ] `CLAUDE.md` (or `.cursorrules`) references the skill
- [ ] Start a new agent session
- [ ] Ask: "What governance skills are loaded?"
- [ ] Agent should list the skill name and triggers
- [ ] Intentionally trigger a rule (e.g., patch the same file 3 times)
- [ ] Agent should respond according to the policy

### Troubleshooting

| Problem | Solution |
|---|---|
| Agent doesn't mention the skill | Make sure your root `CLAUDE.md` or rules file references the skill path |
| Agent ignores the policy | Restart the session — rules are loaded at session start |
| Tools won't run | Run `chmod +x tools/*.sh` (Mac/Linux) or use Git Bash (Windows) |
| Agent runs tools but they error | Make sure you're in the project root, not the skill folder |
| YAML syntax error | Check for tabs vs spaces — YAML requires spaces only |

---

## Step 9: Customize for Your Project

### Adjust Thresholds

Edit `policy.yaml` to match your team's risk tolerance:

- **More conservative**: Lower the thresholds (e.g., context_utilization from 65% to 50%)
- **More permissive**: Raise them (e.g., allow 5 retries instead of 3)

### Add Project-Specific Rules

Add lines to the `CLAUDE.md` manifest:

```markdown
## Project-Specific Rules

- Never modify files in the `/infrastructure/` directory
- Always run tests after modifying any file in `/src/api/`
- Maximum diff size per commit: 100 lines
```

### Combine Multiple Skills

You can install multiple governance skills simultaneously:

```bash
.claude/skills/
├── context-rot-prevention/
├── retry-inflation-control/
├── repository-drift-prevention/
└── mcp-governance/
```

Reference all of them in your root `CLAUDE.md`:

```markdown
## Governance Skills

Load and follow the governance rules in:
- .claude/skills/context-rot-prevention/CLAUDE.md
- .claude/skills/retry-inflation-control/CLAUDE.md
- .claude/skills/repository-drift-prevention/CLAUDE.md
- .claude/skills/mcp-governance/CLAUDE.md
```

---

## Step 10: Understanding the 4-Layer Runtime Architecture

Each skill operates at one of four governance layers:

```
┌─────────────────────────────────────┐
│  LAYER 1: IDENTITY GOVERNANCE       │  ← Governs cognition
│  Mission, principles, boundaries    │
├─────────────────────────────────────┤
│  LAYER 2: SKILL GOVERNANCE          │  ← Governs procedures
│  Context rot, retry, verification   │
├─────────────────────────────────────┤
│  LAYER 3: TOOL GOVERNANCE           │  ← Governs actuation
│  Commands, MCP, file access         │
├─────────────────────────────────────┤
│  LAYER 4: ENVIRONMENT GOVERNANCE    │  ← Governs terrain
│  Repository, costs, dependencies    │
└─────────────────────────────────────┘
```

**For maximum protection**, deploy at least one skill from each layer. The recommended starter pack:

| Layer | Recommended Skill |
|---|---|
| Identity | Deterministic Agentic Engineering |
| Skill | Context Rot Prevention |
| Tool | Runtime Governance |
| Environment | Repository Drift Prevention |

---

## Quick Reference Card

```
INSTALL:    cp -r skill-name/ .claude/skills/skill-name/
REFERENCE:  Add to CLAUDE.md → "Load .claude/skills/skill-name/CLAUDE.md"
VERIFY:     Ask agent: "What governance skills are loaded?"
TOOLS:      bash .claude/skills/skill-name/tools/tool-name.sh
CUSTOMIZE:  Edit policy.yaml thresholds
DIAGRAM:    Paste architecture.mmd into mermaid.live
RESET:      Start new session to reload rules
```

---

## Need Help?

- **Runtime Architecture Guide**: https://richardewing.io/runtime-architecture
- **All 15 Governance Systems**: https://richardewing.io/skills
- **Real Incident Reports**: https://richardewing.io/case-studies/runtime-incidents
- **Contact**: richardewing@exogram.ai

---

*This guide is included in every governance skill purchase. Last updated: May 2026.*
