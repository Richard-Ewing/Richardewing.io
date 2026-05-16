import { Project, SyntaxKind } from 'ts-morph';

const project = new Project();
project.addSourceFilesAtPaths("lib/content/skills.ts");
const sourceFile = project.getSourceFileOrThrow("lib/content/skills.ts");

const layers: Record<string, string> = {
  "deterministic-agentic-engineering": "Identity Governance",
  "autonomous-execution-safety": "Identity Governance",
  "agentic-change-management": "Identity Governance",
  "context-rot-prevention": "Skill Governance",
  "verification-burden-collapse": "Skill Governance",
  "retry-inflation-control": "Skill Governance",
  "orchestration-entropy": "Skill Governance",
  "hallucination-debt-reduction": "Skill Governance",
  "runtime-governance": "Tool Governance",
  "mcp-governance": "Tool Governance",
  "tool-permission-governance": "Tool Governance",
  "repository-drift-prevention": "Environment Governance",
  "context-window-compression": "Environment Governance",
  "ai-cost-containment": "Environment Governance",
  "ai-engineering-economics": "Environment Governance"
};

const skillsDecl = sourceFile.getVariableDeclarationOrThrow("SKILLS");
const initializer = skillsDecl.getInitializerIfKindOrThrow(SyntaxKind.ArrayLiteralExpression);

for (const element of initializer.getElements()) {
  if (element.isKind(SyntaxKind.ObjectLiteralExpression)) {
    const slugProp = element.getProperty("slug");
    if (slugProp && slugProp.isKind(SyntaxKind.PropertyAssignment)) {
      const slugVal = slugProp.getInitializerIfKind(SyntaxKind.StringLiteral)?.getLiteralValue();
      if (slugVal && layers[slugVal]) {
        const p = element.getProperty("runtimeLayer");
        if (p && p.isKind(SyntaxKind.PropertyAssignment)) {
          p.setInitializer(`"${layers[slugVal]}"`);
        } else {
          element.addPropertyAssignment({ name: "runtimeLayer", initializer: `"${layers[slugVal]}"` });
        }
      }
    }
  }
}

sourceFile.saveSync();
console.log("Injected runtimeLayer into all 15 skills.");
