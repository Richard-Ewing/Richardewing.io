import { DIMENSIONS, QUESTIONS } from './questions';

export interface DimensionScore {
  key: string;
  name: string;
  rawPoints: number;
  maxPoints: number;
  score: number; // 0-100
}

export interface AssessmentResult {
  overallScore: number; // 0-100
  rating: string;
  ratingDescription: string;
  dimensions: DimensionScore[];
  leakageRange: { min: number; max: number }; // percentages
  topRisks: string[];
  recommendedNext: string;
}

export function calculateScore(answers: Record<number, number>): AssessmentResult {
  let totalPoints = 0;
  const dimensionPoints: Record<string, number> = {};

  DIMENSIONS.forEach(d => {
    dimensionPoints[d.key] = 0;
  });

  Object.entries(answers).forEach(([questionIdStr, points]) => {
    const qId = parseInt(questionIdStr, 10);
    const question = QUESTIONS.find(q => q.id === qId);
    if (question) {
      totalPoints += points;
      dimensionPoints[question.dimension] += points;
    }
  });

  const overallScore = Math.round((totalPoints / 60) * 100);

  let rating = '';
  let ratingDescription = '';
  let leakageRange = { min: 0, max: 0 };
  let recommendedNext = '';

  if (overallScore >= 80) {
    rating = 'Governed';
    ratingDescription = 'Your AI economics are measured and controlled';
    leakageRange = { min: 0, max: 3 };
    recommendedNext = 'Advisory engagement';
  } else if (overallScore >= 60) {
    rating = 'Maturing';
    ratingDescription = 'You have foundations but significant gaps remain';
    leakageRange = { min: 3, max: 8 };
    recommendedNext = '$2,500 Audit';
  } else if (overallScore >= 40) {
    rating = 'Reactive';
    ratingDescription = 'You are responding to problems rather than preventing them';
    leakageRange = { min: 8, max: 15 };
    recommendedNext = '$450 Diagnostic';
  } else if (overallScore >= 20) {
    rating = 'Exposed';
    ratingDescription = 'Material financial and governance risks exist';
    leakageRange = { min: 15, max: 25 };
    recommendedNext = 'Free Benchmark';
  } else {
    rating = 'Unmonitored';
    ratingDescription = 'Your AI spend is essentially ungoverned';
    leakageRange = { min: 25, max: 40 };
    recommendedNext = 'Free Benchmark';
  }

  const dimensions: DimensionScore[] = DIMENSIONS.map(d => {
    const rawPoints = dimensionPoints[d.key];
    return {
      key: d.key,
      name: d.name,
      rawPoints,
      maxPoints: d.maxPoints,
      score: Math.round((rawPoints / d.maxPoints) * 100)
    };
  });

  const sortedDimensions = [...dimensions].sort((a, b) => a.score - b.score);
  const topRiskDimensions = sortedDimensions.slice(0, 3);
  
  const riskStatements: Record<string, string> = {
    cost_visibility: 'Inadequate visibility into AI costs makes unit economics impossible to calculate reliably.',
    governance: 'Lack of systematic governance creates unmanaged liability and shadow AI usage.',
    engineering: 'Engineering effort is not demonstrably translating into business value.',
    risk: 'You are highly exposed to unexpected cost spikes and data security incidents.',
    alignment: 'Misalignment between technical and financial leadership jeopardizes strategic goals.'
  };

  const topRisks = topRiskDimensions.map(d => riskStatements[d.key]);

  return {
    overallScore,
    rating,
    ratingDescription,
    dimensions,
    leakageRange,
    topRisks,
    recommendedNext
  };
}
