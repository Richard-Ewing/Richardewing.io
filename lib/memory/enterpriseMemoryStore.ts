export interface MemoryEntry {
  id: string;
  timestamp: string;
  category: 'Meeting' | 'Policy' | 'Architecture' | 'Budget' | 'Project' | 'Incident' | 'Question' | 'Presentation' | 'Memo' | 'Roadmap' | 'Task' | 'Approval';
  title: string;
  summary: string;
  author: string;
  tags: string[];
  artifactRefId?: string;
}

export class EnterpriseMemoryStore {
  private static entries: MemoryEntry[] = [
    {
      id: 'mem_001',
      timestamp: '2026-08-04T15:00:00Z',
      category: 'Policy',
      title: 'Zero Code Egress Policy Enforced',
      summary: 'Configured local LLM proxy sidecar mandates zero outbound code transmission without telemetry hash validation.',
      author: 'VP Infrastructure',
      tags: ['Governance', 'Security', 'LLM Proxy'],
      artifactRefId: 'art_memo_002'
    },
    {
      id: 'mem_002',
      timestamp: '2026-08-02T11:30:00Z',
      category: 'Meeting',
      title: 'Q3 Board AI Capital Review',
      summary: 'Presented 14 verified intervention proofs showing $319,500 annual savings. Unanimous approval on FY27 AI Roadmap.',
      author: 'CTO',
      tags: ['Board', 'Capital OS', 'Strategy'],
      artifactRefId: 'art_board_001'
    },
    {
      id: 'mem_003',
      timestamp: '2026-07-29T09:00:00Z',
      category: 'Budget',
      title: 'FY26 AI Token Expenditure Cap Approved',
      summary: 'Approved $450,000 ceiling on multi-modal token consumption with automated telemetry alerts at 80% threshold.',
      author: 'CFO',
      tags: ['Finance', 'Budget', 'OpEx'],
    },
    {
      id: 'mem_004',
      timestamp: '2026-07-22T14:15:00Z',
      category: 'Architecture',
      title: 'Deterministic AI Governance Engine Migration',
      summary: 'Migrated mission logic to organization-centric event bus, establishing persistent enterprise state mutability.',
      author: 'Chief Architect',
      tags: ['Architecture', 'Runtime', 'Exogram'],
    }
  ];

  static getMemoryEntries(category?: string, tag?: string): MemoryEntry[] {
    return this.entries.filter(entry => {
      const matchCat = !category || category === 'All' || entry.category === category;
      const matchTag = !tag || entry.tags.includes(tag);
      return matchCat && matchTag;
    });
  }

  static addEntry(entry: Omit<MemoryEntry, 'id' | 'timestamp'>): MemoryEntry {
    const newEntry: MemoryEntry = {
      ...entry,
      id: `mem_${Date.now()}`,
      timestamp: new Date().toISOString()
    };
    this.entries.unshift(newEntry);
    return newEntry;
  }
}
