export interface BoardQuestionSimulation {
    questionId: string;
    boardMemberPersona: 'Audit Chair' | 'Lead Director' | 'Investor Member';
    questionText: string;
    recommendedAnswer: string;
    confidenceScorePct: number;
}

export class BoardRehearsalSimulator {
    static simulateBoardQuestions(topic: string): BoardQuestionSimulation[] {
        return [
            {
                questionId: 'q_01',
                boardMemberPersona: 'Audit Chair',
                questionText: `Why did developer LLM inference costs grow by 18% during Q2?`,
                recommendedAnswer: `Growth was driven by 3 core repositories uploading un-cached PDF specifications. Deploying Token Saver sidecars recovers $319,500 annually with zero code egress.`,
                confidenceScorePct: 96
            },
            {
                questionId: 'q_02',
                boardMemberPersona: 'Lead Director',
                questionText: `What is the payback window on the $40,000 edge node hardware investment?`,
                recommendedAnswer: `Payback is completed in 4.5 months, producing a permanent +0.42% expansion to corporate EBITDA.`,
                confidenceScorePct: 94
            }
        ];
    }
}
