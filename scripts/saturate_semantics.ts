import { Project, SyntaxKind } from 'ts-morph';

const project = new Project();
project.addSourceFilesAtPaths("lib/content/skills.ts");

const sourceFile = project.getSourceFileOrThrow("lib/content/skills.ts");

const updates: Record<string, any> = {
  "context-rot-prevention": {
    searchKeywords: ["Claude Code context rot", "Claude loses context", "session degradation", "Claude context memory limits", "Claude long session failure", "context poisoning", "Claude recursive bugs"],
    faqs: [
      { question: "Why does Claude Code lose context after long sessions?", answer: "Unbounded context accumulation traps Claude in a recursive loop where previous mistakes pollute its future reasoning." },
      { question: "How do you stop context rot?", answer: "By deploying bounded cognition middleware and enforcing semantic reset checkpoints before context degradation triggers failure cascades." }
    ]
  },
  "runtime-governance": {
    searchKeywords: ["Windsurf runtime governance", "AI coding agent safety", "Windsurf execution containment", "preventing unsafe bash commands", "deterministic execution", "agentic runtime failure"],
    faqs: [
      { question: "Can I use prompt engineering to stop an AI agent?", answer: "No. Prompt engineering is probabilistic Governance Theater. Only deterministic runtime middleware can guarantee containment." },
      { question: "What breaks when you don't have runtime governance?", answer: "Agents will eventually exceed their operational boundaries, execute unsafe infrastructure commands, and rewrite protected directories." }
    ],
    ecosystemPainQuotes: ["Windsurf just deleted the config directory.", "The agent executed a script it shouldn't have.", "Prompt rules were completely ignored."]
  },
  "hallucination-debt-reduction": {
    searchKeywords: ["hallucination debt", "fake AI code", "verification overload", "Cline hallucination", "phantom dependencies", "AI coding fatigue"],
    faqs: [
      { question: "Why does Cline hallucinate dependencies?", answer: "Without admissibility pipelines, Cline probabilistically guesses module names instead of reading the deterministic package.json state." },
      { question: "How do we reduce verification burden?", answer: "By deploying confidence thresholds that block human review of unverified, high-variance agentic code." }
    ],
    ecosystemPainQuotes: ["Cline hallucinates modules that don't exist.", "I spend more time fixing the AI's mistakes than coding.", "The verification burden is crushing."]
  },
  "ai-engineering-economics": {
    searchKeywords: ["AI agent token burn", "Roo Code costs", "AI API spend inflation", "agentic execution cost", "inference budget overruns"],
    faqs: [
      { question: "Why are my API bills so high from AI coding agents?", answer: "Agents lack economic consciousness. Without margin validators, they will burn infinite tokens attempting to solve trivial syntax errors." },
      { question: "How do you contain Roo Code token costs?", answer: "By establishing hard session budgets and cost containment middleware that physically severs API access when breached." }
    ],
    ecosystemPainQuotes: ["Roo Code burned through $50 trying to center a div.", "Our API spend is completely out of control.", "The ROI on AI agents is negative due to token costs."]
  },
  "mcp-governance": {
    searchKeywords: ["MCP governance", "Claude Model Context Protocol safety", "MCP server limits", "Claude tool chain recursion", "MCP data exfiltration"],
    faqs: [
      { question: "Is it safe to give Claude global MCP access?", answer: "Absolutely not. Unconstrained MCP access allows an agent to read sensitive environment variables or arbitrarily execute queries outside its mandate." },
      { question: "How do you permission MCP tools?", answer: "Through context isolation and capability validators that limit tool access to the exact scope of the assigned task." }
    ]
  },
  "verification-burden-collapse": {
    searchKeywords: ["QA overload", "synthetic QA fatigue", "reviewing AI PRs", "agent PR fatigue", "AI code review bottleneck"],
    faqs: [
      { question: "Why are senior engineers overwhelmed by AI pull requests?", answer: "Because generated code velocity outpaces human review capacity, shifting the burden from writing code to debugging probabilistic AI output." },
      { question: "How do we stop verification collapse?", answer: "By installing verification-routing middleware that mathematically scores code and rejects low-confidence patches before humans see them." }
    ]
  },
  "orchestration-entropy": {
    searchKeywords: ["multi-agent chaos", "agents arguing with themselves", "recursive delegation", "agent infinite loops", "orchestrator lost state"],
    faqs: [
      { question: "Why do my AI agents get stuck arguing with each other?", answer: "Because probabilistic networks lack deterministic state. They enter infinite agreement loops or recursive delegation chains without a central orchestrator." },
      { question: "How do you enforce multi-agent orchestration?", answer: "With entropy thresholds and a deterministic governor that caps delegation depth and enforces execution checkpoints." }
    ]
  },
  "retry-inflation-control": {
    searchKeywords: ["Claude retry loop", "Claude keeps retrying broken logic", "token burn spiral", "retry hell", "recursive patch loops", "AI infinite retry"],
    faqs: [
      { question: "Why does Claude keep retrying the exact same broken fix?", answer: "Because the error state saturates the context window, causing the model to probabilistically generate the exact same hallucinated solution repeatedly." },
      { question: "How do you break a retry loop?", answer: "By deploying a retry budget circuit breaker that halts execution and wipes the semantic context before trying again." }
    ]
  },
  "repository-drift-prevention": {
    searchKeywords: ["Cursor repository drift", "Cursor rewriting unrelated files", "Cursor architectural drift", "Ghost dependencies", "Cursor codebase divergence"],
    faqs: [
      { question: "Why does Cursor rewrite files I didn't ask it to touch?", answer: "Cursor relies on probabilistic search and often suffers from 'over-editing' hallucination. It infers ghost dependencies and mutates unrelated architectural paths." },
      { question: "How can I lock Cursor to a specific boundary?", answer: "By enforcing deterministic alignment protocols and branch integrity policies that cryptographically reject unauthorized file mutations." }
    ]
  },
  "context-window-compression": {
    searchKeywords: ["long-session instability", "Claude context memory", "AI coding agent session length", "compressing Claude context", "checkpoint rotation middleware"],
    faqs: [
      { question: "How long can a Claude coding session last?", answer: "Without compression engines, session stability collapses after ~15 complex interactions due to accumulated context poisoning." },
      { question: "What is context window compression?", answer: "Dynamic middleware that rotates out stale interaction history and prioritizes current architectural state to maintain deterministic focus." }
    ]
  },
  "autonomous-execution-safety": {
    searchKeywords: ["rogue bash commands", "AI autonomous execution risk", "agentic infrastructure corruption", "preventing AI rm -rf", "Claude bash permissions"],
    faqs: [
      { question: "Can Claude Code accidentally delete my database?", answer: "Yes. If given unconstrained shell access, an AI agent can hallucinate catastrophic commands. System prompts cannot prevent this." },
      { question: "How do you secure autonomous execution?", answer: "With deterministic command whitelisting middleware and execution halt systems that mathematically block unapproved shell operations." }
    ]
  },
  "tool-permission-governance": {
    searchKeywords: ["agent capability escalation", "over-permissioned AI", "tool-chain contamination", "unrestricted MCP access", "data exfiltration risk AI"],
    faqs: [
      { question: "What is capability escalation?", answer: "When an agent leverages a benign tool (like file read) to gain access to unauthorized resources (like an .env file containing AWS keys)." },
      { question: "How do you lock down agent tools?", answer: "With scope engines that enforce strict permission boundaries mapped directly to the agent's deterministic task payload." }
    ]
  },
  "ai-cost-containment": {
    searchKeywords: ["hidden operational AI burn", "token inflation", "runaway API costs", "agent margin collapse", "OpenAI Codex cost controls"],
    faqs: [
      { question: "How do I predict the cost of an autonomous task?", answer: "You cannot predict probabilistic cost. You must enforce deterministic cost ceilings using financial circuit breakers." },
      { question: "What causes margin collapse in agentic workflows?", answer: "When the API inference token burn to generate a feature exceeds the human labor cost equivalent of writing it from scratch." }
    ]
  },
  "deterministic-agentic-engineering": {
    searchKeywords: ["Exogram Control Plane", "deterministic AI engineering", "probabilistic engineering failure", "runtime instability", "ungoverned orchestration"],
    faqs: [
      { question: "What is deterministic agentic engineering?", answer: "The architectural practice of surrounding probabilistic AI models with hardcoded, zero-variance governance middleware to guarantee runtime safety." },
      { question: "Why is prompt engineering dead?", answer: "Because relying on text instructions for enterprise infrastructure security is catastrophic. Only code can govern code." }
    ]
  },
  "agentic-change-management": {
    searchKeywords: ["cryptographic CAB approvals", "agentic pull request review", "AI change management", "human escalation paths", "production AI changes"],
    faqs: [
      { question: "Should agents be allowed to merge code directly to production?", answer: "Never. Without cryptographic Change Advisory Board (CAB) approvals, agentic mutations represent an unquantifiable enterprise liability." },
      { question: "How do you integrate agents into ITIL change management?", answer: "By enforcing human escalation paths and cryptographic state validation before any agentic output is considered admissible for deployment." }
    ]
  }
};

const skillsDecl = sourceFile.getVariableDeclarationOrThrow("SKILLS");
const initializer = skillsDecl.getInitializerIfKindOrThrow(SyntaxKind.ArrayLiteralExpression);

for (const element of initializer.getElements()) {
  if (element.isKind(SyntaxKind.ObjectLiteralExpression)) {
    const slugProp = element.getProperty("slug");
    if (slugProp && slugProp.isKind(SyntaxKind.PropertyAssignment)) {
      const slugVal = slugProp.getInitializerIfKind(SyntaxKind.StringLiteral)?.getLiteralValue();
      if (slugVal && updates[slugVal]) {
        const up = updates[slugVal];
        
        const updateArray = (propName: string, values: string[]) => {
          if (!values || values.length === 0) return;
          const p = element.getProperty(propName);
          const literal = `[\n${values.map(v => `      "${v.replace(/"/g, '\\"')}"`).join(",\n")}\n    ]`;
          if (p && p.isKind(SyntaxKind.PropertyAssignment)) {
            p.setInitializer(literal);
          } else {
            element.addPropertyAssignment({
              name: propName,
              initializer: literal
            });
          }
        };

        if (up.searchKeywords) updateArray("searchKeywords", up.searchKeywords);
        if (up.ecosystemPainQuotes) updateArray("ecosystemPainQuotes", up.ecosystemPainQuotes);
        
        if (up.faqs) {
          const p = element.getProperty("faqs");
          const literal = `[\n${up.faqs.map((faq: any) => `      { question: "${faq.question.replace(/"/g, '\\"')}", answer: "${faq.answer.replace(/"/g, '\\"')}" }`).join(",\n")}\n    ]`;
          if (p && p.isKind(SyntaxKind.PropertyAssignment)) {
            p.setInitializer(literal);
          } else {
            element.addPropertyAssignment({ name: "faqs", initializer: literal });
          }
        }
      }
    }
  }
}

sourceFile.saveSync();
console.log("Successfully updated Semantic Saturation fields in skills.ts");
