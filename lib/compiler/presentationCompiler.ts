import { CanonicalDecisionPackage } from '../kernel/decisionPackageSchema';

export type PresentationTier = 'CSuiteBrief' | 'BoardDeck' | 'DirectorDeepDive';

export interface PresentationSlide {
    slideIndex: number;
    title: string;
    bulletPoints: string[];
    visualType: 'MetricsGrid' | 'CausalChain' | 'TradeoffMatrix' | 'RoadmapTimeline';
}

export interface CompiledPresentation {
    presentationId: string;
    tier: PresentationTier;
    slideCount: number;
    slides: PresentationSlide[];
    exportRefUrl: string;
}

export class PresentationCompiler {
    static compilePresentation(pkg: CanonicalDecisionPackage, tier: PresentationTier): CompiledPresentation {
        let slideCount = 5;
        if (tier === 'BoardDeck') slideCount = 11;
        if (tier === 'DirectorDeepDive') slideCount = 17;

        const slides: PresentationSlide[] = [
            {
                slideIndex: 1,
                title: `${pkg.questionText} - Executive Summary`,
                bulletPoints: [pkg.summary, `Target Owner: ${pkg.executiveOwnerRole}`, `Confidence: ${pkg.overallConfidencePct}%`],
                visualType: 'MetricsGrid'
            },
            {
                slideIndex: 2,
                title: 'Operational Evidence & Root Cause Analysis',
                bulletPoints: pkg.rootCauseChain,
                visualType: 'CausalChain'
            },
            {
                slideIndex: 3,
                title: 'Strategic Scenario Tradeoffs & Risk Assessment',
                bulletPoints: pkg.tradeoffsAcknowledged,
                visualType: 'TradeoffMatrix'
            },
            {
                slideIndex: 4,
                title: 'Recommended Executive Action Plan',
                bulletPoints: pkg.recommendedActions,
                visualType: 'RoadmapTimeline'
            },
            {
                slideIndex: 5,
                title: '30-Day Outcome Verification Schedule',
                bulletPoints: [`Expected Financial Impact: $${pkg.expectedOutcomeUSD.toLocaleString()}/yr`, `Verification Cadence: ${pkg.verificationScheduleDays} Days`],
                visualType: 'MetricsGrid'
            }
        ];

        return {
            presentationId: `pres_${tier.toLowerCase()}_${Date.now()}`,
            tier,
            slideCount,
            slides,
            exportRefUrl: `https://richardewing.io/exports/slides_${tier.toLowerCase()}_${pkg.id}.pptx`
        };
    }
}
