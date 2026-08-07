export interface SearchResultItem {
  id: string;
  title: string;
  category: 'Contract' | 'License' | 'Repository' | 'Usage' | 'Meeting' | 'Decision' | 'Policy' | 'Roadmap' | 'Project' | 'Cost' | 'Approval' | 'Question';
  summary: string;
  url: string;
  metadata: Record<string, unknown>;
  updatedAt: string;
}

export class EnterpriseSearchEngine {
  private static index: SearchResultItem[] = [
    {
      id: 'sr_01',
      title: 'Cursor Enterprise Renewal Contract',
      category: 'Contract',
      summary: '450 annual seats at $185,000/yr. Renewal lock set for Q4 2026.',
      url: '/workspace/vendors',
      metadata: { vendor: 'Cursor Enterprise', annualSpendUSD: 185000 },
      updatedAt: '2026-08-01'
    },
    {
      id: 'sr_02',
      title: 'Token Saver Proxy Architecture Policy',
      category: 'Policy',
      summary: 'Mandatory edge caching policy for LLM inference requests across core microservices.',
      url: '/workspace/governance',
      metadata: { targetSavingsUSD: 319500 },
      updatedAt: '2026-07-28'
    },
    {
      id: 'sr_03',
      title: 'richardewing-io-core Repository Health',
      category: 'Repository',
      summary: 'Next.js App Router codebase. Cycle time down 22% with AI token optimization.',
      url: '/workspace/engineering',
      metadata: { framework: 'Next.js', coveragePct: 94 },
      updatedAt: '2026-08-04'
    },
    {
      id: 'sr_04',
      title: 'Q3 Board Deck - Executive AI Economics Briefing',
      category: 'Meeting',
      summary: '11 slides covering $319,500 token savings, vendor audits, and technical debt PDI index.',
      url: '/workspace/board',
      metadata: { slides: 11, status: 'Approved' },
      updatedAt: '2026-08-02'
    },
    {
      id: 'sr_05',
      title: 'R&D Department Budget Forecast FY26',
      category: 'Cost',
      summary: 'Current spending: $1.2M. Variance vs budget: -$142,000 (Favorable).',
      url: '/workspace/finance',
      metadata: { totalBudgetUSD: 1342000 },
      updatedAt: '2026-08-03'
    },
    {
      id: 'sr_06',
      title: 'Shadow AI Egress Protocol Violations Audit',
      category: 'Approval',
      summary: 'Zero high-severity violations detected following sidecar deployment.',
      url: '/workspace/governance',
      metadata: { severity: 'Low' },
      updatedAt: '2026-08-04'
    }
  ];

  static query(searchTerm: string, categoryFilter?: string): SearchResultItem[] {
    const term = searchTerm.toLowerCase().trim();
    return this.index.filter(item => {
      const matchesCategory = !categoryFilter || categoryFilter === 'All' || item.category === categoryFilter;
      const matchesText = !term ||
        item.title.toLowerCase().includes(term) ||
        item.summary.toLowerCase().includes(term) ||
        item.category.toLowerCase().includes(term);
      return matchesCategory && matchesText;
    });
  }
}
