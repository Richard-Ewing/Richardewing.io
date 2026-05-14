export interface DiagnosticResult {
  diagnosticId: string;
  score: number;
  band: string;
  industry?: string;
  companySize?: string;
  timestamp: string;
}

export interface BenchmarkDistribution {
  industryAverage: number;
  topQuartile: number;
  bottomQuartile: number;
  unit: 'score' | 'currency' | 'percentage';
  description: string;
}

export interface PercentileBand {
  percentile: number;
  band: 'Top Quartile' | 'Above Average' | 'Below Average' | 'Bottom Quartile';
  interpretation: string;
}
