import { Project, SyntaxKind } from 'ts-morph';

const project = new Project();
project.addSourceFilesAtPaths("lib/content/skills.ts");

const sourceFile = project.getSourceFileOrThrow("lib/content/skills.ts");

const urls: Record<string, string> = {
  "context-rot-prevention": "https://buy.stripe.com/cNieV6fDo1b401f6RW2B20J",
  "hallucination-debt-reduction": "https://buy.stripe.com/cNibIU9f04ng7tH9042B20K",
  "retry-inflation-control": "https://buy.stripe.com/7sY3co8aWbPI29nccg2B20L",
  "repository-drift-prevention": "https://buy.stripe.com/aFa4gs9f0g5YeW9eko2B20M",
  "context-window-compression": "https://buy.stripe.com/cNicMY9f0bPI6pDfos2B20N",
  "autonomous-execution-safety": "https://buy.stripe.com/14A8wIaj4g5Y7tH5NS2B20O",
  "tool-permission-governance": "https://buy.stripe.com/6oUeV6crcg5YaFTccg2B20P",
  "ai-cost-containment": "https://buy.stripe.com/7sYbIU0Iu9HAbJX1xC2B20Q",
  "deterministic-agentic-engineering": "https://buy.stripe.com/7sY9AMbn80705lz5NS2B20R",
  "agentic-change-management": "https://buy.stripe.com/00w28k1Myg5Y8xL1xC2B20S",
  "runtime-governance": "https://buy.stripe.com/6oUbIUbn84ng3dr3FK2B20T",
  "ai-engineering-economics": "https://buy.stripe.com/5kQ4gsfDo4ng5lz7W02B20U",
  "mcp-governance": "https://buy.stripe.com/3cIcMY1My8DwdS59042B20V",
  "verification-burden-collapse": "https://buy.stripe.com/bJeaEQ9f0dXQ9BPb8c2B20W",
  "orchestration-entropy": "https://buy.stripe.com/cNibIUbn8f1U15jgsw2B20X"
};

const skillsDecl = sourceFile.getVariableDeclarationOrThrow("SKILLS");
const initializer = skillsDecl.getInitializerIfKindOrThrow(SyntaxKind.ArrayLiteralExpression);

for (const element of initializer.getElements()) {
  if (element.isKind(SyntaxKind.ObjectLiteralExpression)) {
    const slugProp = element.getProperty("slug");
    if (slugProp && slugProp.isKind(SyntaxKind.PropertyAssignment)) {
      const slugVal = slugProp.getInitializerIfKind(SyntaxKind.StringLiteral)?.getLiteralValue();
      if (slugVal && urls[slugVal]) {
        const p = element.getProperty("checkoutUrl");
        if (p && p.isKind(SyntaxKind.PropertyAssignment)) {
          p.setInitializer(`"${urls[slugVal]}"`);
        } else {
          element.addPropertyAssignment({ name: "checkoutUrl", initializer: `"${urls[slugVal]}"` });
        }
      }
    }
  }
}

sourceFile.saveSync();
console.log("Successfully updated checkoutUrls in skills.ts");
