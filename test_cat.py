import re

txt = open('d:/Antigravity_RichardEwing.io/app/glossary/terms.ts', encoding='utf-8').read()
terms = ['innovation-tax', 'product-debt-index', 'synthetic-cogs', 'technical-insolvency-date']

for t in terms:
    m = re.search(r"slug:\s*'" + t + r"',[\s\S]*?category:\s*'([^']+)'", txt)
    print(t, m.group(1) if m else 'not found')
