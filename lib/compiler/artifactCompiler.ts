import { CanonicalDecisionPackage } from '../kernel/decisionPackageSchema';
import { NarrativeEngine } from '../narrative/narrativeEngine';

export type DeliverableType = 
    | 'BoardDeck' 
    | 'ExecutiveMemo' 
    | 'ArchitectureReview' 
    | 'ImplementationRoadmap' 
    | 'RiskRegister' 
    | 'BudgetProposal';

export interface ExecutiveArtifact {
    artifactId: string;
    deliverableType: DeliverableType;
    title: string;
    executiveSummary: string;
    contentMarkdown: string;
    downloadRef: string;
    generatedAt: string;
}

export class ArtifactCompiler {
    static compileArtifact(pkg: CanonicalDecisionPackage, type: DeliverableType): ExecutiveArtifact {
        const narrative = NarrativeEngine.generateExecutiveNarrative(pkg);
        const talkingPoints = NarrativeEngine.generateBoardTalkingPoints(pkg);

        let content = `# ${pkg.questionText}\n\n## Executive Summary\n${narrative}\n\n## Key Talking Points\n`;
        talkingPoints.forEach((tp, idx) => {
            content += `${idx + 1}. ${tp}\n`;
        });

        return {
            artifactId: `art_${type.toLowerCase()}_${Date.now()}`,
            deliverableType: type,
            title: `Executive Deliverable: ${type} - ${pkg.executiveOwnerRole}`,
            executiveSummary: pkg.summary,
            contentMarkdown: content,
            downloadRef: `https://richardewing.io/exports/${type.toLowerCase()}_${pkg.id}.pdf`,
            generatedAt: new Date().toISOString()
        };
    }

    static compileFullPackageDeliverables(pkg: CanonicalDecisionPackage): ExecutiveArtifact[] {
        const types: DeliverableType[] = [
            'BoardDeck', 
            'ExecutiveMemo', 
            'ArchitectureReview', 
            'ImplementationRoadmap', 
            'RiskRegister', 
            'BudgetProposal'
        ];
        return types.map(t => this.compileArtifact(pkg, t));
    }
}
