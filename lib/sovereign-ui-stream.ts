/**
 * Sovereign Streaming Generative UI Runtime (`lib/sovereign-ui-stream.ts`)
 * =========================================================================
 * Clean-room zero-dependency TypeScript + Zod v4 (`^4.3.5`) positional UI
 * expression compiler, incremental chunk parser, XSS URI guard, and legacy
 * `RoadmapData` hydrator (ADR-0020).
 *
 * Pure V8 isolate functions: zero `@openuidev/*` dependencies, zero network
 * calls, zero DOM side effects.
 */

import { z } from 'zod';

// ---------------------------------------------------------------------------
// Core Catalog & AST Types
// ---------------------------------------------------------------------------

export interface WidgetSpec<TProps = Record<string, unknown>> {
  name: string;
  aliases?: readonly string[];
  argNames: readonly string[];
  signature: string;
  schema: z.ZodType<TProps>;
  isHelper?: boolean;
}

export type WidgetCatalog<Entries extends Record<string, WidgetSpec<any>> = Record<string, WidgetSpec<any>>> = {
  entries: Entries;
  byName: Map<string, WidgetSpec<any>>;
};

export interface ParsedWidgetNode<TName extends string = string, TProps = Record<string, unknown>> {
  id: string;
  type: TName;
  props: TProps;
}

export interface IncrementalParseSnapshot {
  widgets: ParsedWidgetNode[];
  proseText: string;
  pendingRefs: string[];
  errors: string[];
  phaseComplete: boolean;
  roadmapComplete: boolean;
}

// ---------------------------------------------------------------------------
// Security Sanitization: Strict URI & Script Protocol Blocker
// ---------------------------------------------------------------------------

const DANGEROUS_SCHEME_RE = /^(?:javascript|data|vbscript|file|blob)\s*:/i;
const INLINE_DANGEROUS_URI_RE = /(?:javascript|vbscript)\s*:|data\s*:\s*text\/html/i;

function decodeNumericHtmlEntities(input: string): string {
  return input
    .replace(/&#x([0-9a-f]+);?/gi, (_, hex) => {
      const cp = parseInt(hex, 16);
      return Number.isFinite(cp) && cp > 0 && cp <= 0x10ffff ? String.fromCodePoint(cp) : '';
    })
    .replace(/&#(\d+);?/g, (_, dec) => {
      const cp = parseInt(dec, 10);
      return Number.isFinite(cp) && cp > 0 && cp <= 0x10ffff ? String.fromCodePoint(cp) : '';
    });
}

export function sanitizeSafeUrl(raw: string): string | null {
  const trimmed = String(raw || '').trim();
  if (!trimmed) return '';
  const normalized = decodeNumericHtmlEntities(trimmed).replace(/[\u0000-\u0020\u007f]+/g, '');
  if (DANGEROUS_SCHEME_RE.test(normalized)) {
    return null;
  }
  if (
    trimmed.startsWith('/') ||
    trimmed.startsWith('https://') ||
    trimmed.startsWith('http://') ||
    trimmed.startsWith('mailto:')
  ) {
    if (trimmed.startsWith('//')) return null;
    return trimmed;
  }
  return null;
}

const URL_PROP_KEY_RE =
  /^(?:url|href|uri|src|link)$|(?:Url|Href|Uri|Src|Link|_url|_href|_uri|_src|_link)$/;

function containsDangerousUrlProp(val: unknown, keyHint = ''): boolean {
  if (typeof val === 'string') {
    if (URL_PROP_KEY_RE.test(keyHint)) {
      const trimmed = val.trim();
      if (trimmed.length > 0 && sanitizeSafeUrl(trimmed) === null) {
        return true;
      }
    }
    return false;
  }
  if (Array.isArray(val)) {
    return val.some((item) => containsDangerousUrlProp(item, keyHint));
  }
  if (val && typeof val === 'object') {
    return Object.entries(val as Record<string, unknown>).some(([k, v]) =>
      containsDangerousUrlProp(v, k)
    );
  }
  return false;
}

const SafeOptionalUrlSchema = z
  .string()
  .default('')
  .refine((val) => val === '' || sanitizeSafeUrl(val) !== null, {
    message: 'Blocked unsafe script/data URI or disallowed URL protocol',
  });

const SafeRequiredHrefSchema = z
  .string()
  .min(1)
  .refine((val) => sanitizeSafeUrl(val) !== null, {
    message: 'Blocked unsafe script/data URI or disallowed CTA href protocol',
  });

// ---------------------------------------------------------------------------
// Catalog Builder & Prompt Compiler
// ---------------------------------------------------------------------------

export function defineWidgetCatalog<Entries extends Record<string, WidgetSpec<any>>>(
  entries: Entries
): WidgetCatalog<Entries> {
  const byName = new Map<string, WidgetSpec<any>>();
  for (const spec of Object.values(entries)) {
    byName.set(spec.name, spec);
    if (spec.aliases) {
      for (const alias of spec.aliases) {
        byName.set(alias, spec);
      }
    }
  }
  return { entries, byName };
}

export function compileCatalogPrompt(catalog: WidgetCatalog<Record<string, WidgetSpec<any>>>): string {
  const widgetLines: string[] = [];
  const helperLines: string[] = [];

  for (const spec of Object.values(catalog.entries) as WidgetSpec<any>[]) {
    if (spec.isHelper) {
      helperLines.push(`- ${spec.signature}`);
    } else {
      widgetLines.push(`- ${spec.signature}`);
    }
  }

  return [
    'Sovereign UI Stream Grammar (Positional Expressions inside ```ui ... ```):',
    'Emit one assignment or widget expression per line using positional arguments (omit JSON keys):',
    ...widgetLines,
    ...(helperLines.length > 0 ? ['Helper value constructors:', ...helperLines] : []),
    'Forward variable references are supported (e.g. `root = AdvisoryBoard([kpi, p1], "Summary...", "$240/mo", ["Risk 1"], ["Step 1"], 18, 7200)`).',
    'Only https:// or relative /... URLs are permitted.',
  ].join('\n');
}

// ---------------------------------------------------------------------------
// Positional Expression Lexer & Recursive-Descent Parser
// ---------------------------------------------------------------------------

type RawNode =
  | { kind: 'literal'; value: string | number | boolean | null }
  | { kind: 'array'; items: RawNode[] }
  | { kind: 'object'; entries: Array<{ key: string; value: RawNode }> }
  | { kind: 'ref'; name: string }
  | {
      kind: 'call';
      callee: string;
      args: RawNode[];
      namedArgs: Array<{ key: string; value: RawNode }>;
    };

class ExprCursor {
  private pos = 0;
  private readonly src: string;
  constructor(src: string) {
    this.src = src;
  }

  skipWs(): void {
    while (this.pos < this.src.length && /\s/.test(this.src[this.pos])) {
      this.pos++;
    }
  }

  eof(): boolean {
    this.skipWs();
    return this.pos >= this.src.length;
  }

  peek(): string {
    this.skipWs();
    return this.src[this.pos] || '';
  }

  consume(expected?: string): string {
    this.skipWs();
    const ch = this.src[this.pos] || '';
    if (expected && ch !== expected) {
      throw new Error(`Expected '${expected}' at offset ${this.pos}, found '${ch || 'EOF'}'`);
    }
    this.pos++;
    return ch;
  }

  private tryConsumeKeywordArgPrefix(): string | null {
    this.skipWs();
    const match = this.src
      .slice(this.pos)
      .match(/^([A-Za-z_$][A-Za-z0-9_$-]*)\s*(?:=(?!=)|:)\s*/);
    if (!match) return null;
    this.pos += match[0].length;
    return match[1];
  }

  parseValue(): RawNode {
    const ch = this.peek();
    if (!ch) throw new Error('Unexpected end of UI expression');
    if (ch === '"' || ch === "'") return { kind: 'literal', value: this.parseString() };
    if (ch === '[') return this.parseArray();
    if (ch === '{') return this.parseObject();
    if (ch === '-' || (ch >= '0' && ch <= '9')) return { kind: 'literal', value: this.parseNumber() };

    const ident = this.parseIdentifier();
    if (ident === 'true') return { kind: 'literal', value: true };
    if (ident === 'false') return { kind: 'literal', value: false };
    if (ident === 'null') return { kind: 'literal', value: null };

    if (this.peek() === '(') {
      this.consume('(');
      const args: RawNode[] = [];
      const namedArgs: Array<{ key: string; value: RawNode }> = [];
      if (this.peek() !== ')') {
        while (true) {
          const kwKey = this.tryConsumeKeywordArgPrefix();
          if (kwKey) {
            namedArgs.push({ key: kwKey, value: this.parseValue() });
          } else {
            args.push(this.parseValue());
          }
          if (this.peek() === ',') {
            this.consume(',');
            if (this.peek() === ')') break;
          } else {
            break;
          }
        }
      }
      this.consume(')');
      return { kind: 'call', callee: ident, args, namedArgs };
    }

    return { kind: 'ref', name: ident };
  }

  private parseString(): string {
    const quote = this.consume();
    let out = '';
    while (this.pos < this.src.length) {
      const ch = this.src[this.pos++];
      if (ch === quote) return out;
      if (ch === '\\') {
        const esc = this.src[this.pos++] || '';
        if (esc === 'n') out += '\n';
        else if (esc === 'r') out += '\r';
        else if (esc === 't') out += '\t';
        else if (esc === '"' || esc === "'" || esc === '\\' || esc === '/') out += esc;
        else if (esc === 'u') {
          const hex = this.src.slice(this.pos, this.pos + 4);
          if (/^[0-9a-fA-F]{4}$/.test(hex)) {
            out += String.fromCharCode(parseInt(hex, 16));
            this.pos += 4;
          } else {
            out += 'u';
          }
        } else {
          out += esc;
        }
      } else {
        out += ch;
      }
    }
    throw new Error('Unterminated string literal');
  }

  private parseNumber(): number {
    this.skipWs();
    const match = this.src.slice(this.pos).match(/^-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/);
    if (!match) throw new Error(`Invalid numeric literal at offset ${this.pos}`);
    this.pos += match[0].length;
    const num = Number(match[0]);
    if (!Number.isFinite(num)) throw new Error('Non-finite numeric literal');
    return num;
  }

  private parseIdentifier(): string {
    this.skipWs();
    const match = this.src.slice(this.pos).match(/^[A-Za-z_$][A-Za-z0-9_$-]*/);
    if (!match) throw new Error(`Unexpected token '${this.src[this.pos] || 'EOF'}' at offset ${this.pos}`);
    this.pos += match[0].length;
    return match[0];
  }

  private parseArray(): RawNode {
    this.consume('[');
    const items: RawNode[] = [];
    if (this.peek() !== ']') {
      while (true) {
        items.push(this.parseValue());
        if (this.peek() === ',') {
          this.consume(',');
          if (this.peek() === ']') break;
        } else {
          break;
        }
      }
    }
    this.consume(']');
    return { kind: 'array', items };
  }

  private parseObject(): RawNode {
    this.consume('{');
    const entries: Array<{ key: string; value: RawNode }> = [];
    if (this.peek() !== '}') {
      while (true) {
        const nextCh = this.peek();
        const key = nextCh === '"' || nextCh === "'" ? this.parseString() : this.parseIdentifier();
        this.consume(':');
        const value = this.parseValue();
        entries.push({ key, value });
        if (this.peek() === ',') {
          this.consume(',');
          if (this.peek() === '}') break;
        } else {
          break;
        }
      }
    }
    this.consume('}');
    return { kind: 'object', entries };
  }
}

function parseStatementLine(rawStatement: string): { id: string | null; expr: RawNode } | null {
  const trimmed = rawStatement.trim().replace(/;$/, '').trim();
  if (!trimmed || trimmed.startsWith('//') || trimmed.startsWith('#')) return null;

  const assignMatch = trimmed.match(/^([A-Za-z_$][A-Za-z0-9_$-]*)\s*=\s*([\s\S]+)$/);
  const id = assignMatch ? assignMatch[1] : null;
  const rhs = assignMatch ? assignMatch[2].trim() : trimmed;

  const cursor = new ExprCursor(rhs);
  const expr = cursor.parseValue();
  if (!cursor.eof()) {
    throw new Error(`Trailing tokens in UI expression: '${rhs.slice(0, 80)}'`);
  }
  if (expr.kind !== 'call') {
    throw new Error('Top-level UI statement must invoke a registered catalog constructor');
  }
  return { id, expr };
}

// ---------------------------------------------------------------------------
// Incremental Streaming State Machine
// ---------------------------------------------------------------------------

const MAX_STATEMENT_BUFFER_CHARS = 16384;

function inspectExpressionBalance(buffer: string): {
  unclosedQuote: boolean;
  balanced: boolean;
  parens: number;
  brackets: number;
  braces: number;
} {
  let quote: string | null = null;
  let escaped = false;
  let parens = 0;
  let brackets = 0;
  let braces = 0;

  for (let i = 0; i < buffer.length; i++) {
    const ch = buffer[i];
    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (ch === '\\') {
        escaped = true;
      } else if (ch === quote) {
        quote = null;
      }
      continue;
    }
    if (ch === '"' || ch === "'") quote = ch;
    else if (ch === '(') parens++;
    else if (ch === ')') parens--;
    else if (ch === '[') brackets++;
    else if (ch === ']') brackets--;
    else if (ch === '{') braces++;
    else if (ch === '}') braces--;
  }

  return {
    unclosedQuote: quote !== null,
    balanced: quote === null && parens <= 0 && brackets <= 0 && braces <= 0,
    parens,
    brackets,
    braces,
  };
}

export function createIncrementalUiParser<Entries extends Record<string, WidgetSpec<any>>>(
  catalog: WidgetCatalog<Entries>
) {
  const utf8Decoder = new TextDecoder('utf-8');
  const symbols = new Map<string, RawNode>();
  const statements: Array<{ id: string; expr: RawNode; anonymous: boolean }> = [];
  const errors: string[] = [];

  let rawFullText = '';
  let lineRemainder = '';
  let pendingStatement = '';
  let inUiFence = false;
  let inOtherFence = false;
  let autoSeq = 0;

  function looksLikeBareUiLine(trimmed: string): boolean {
    const assignMatch = trimmed.match(/^([A-Za-z_$][A-Za-z0-9_$-]*)\s*=\s*([A-Za-z_$][A-Za-z0-9_$-]*)\s*\(/);
    if (assignMatch && catalog.byName.has(assignMatch[2])) return true;
    const directMatch = trimmed.match(/^([A-Za-z_$][A-Za-z0-9_$-]*)\s*\(/);
    if (directMatch && catalog.byName.has(directMatch[1])) return true;
    return false;
  }

  function looksLikeTopLevelStatementRestart(rawLine: string, prevBuffer: string): boolean {
    const trimmed = rawLine.trim();
    if (/^[A-Za-z_$][A-Za-z0-9_$-]*\s*=\s*[A-Za-z_$][A-Za-z0-9_$-]*\s*\(/.test(trimmed)) {
      return true;
    }
    if (/^\s/.test(rawLine)) return false;
    const prevState = inspectExpressionBalance(prevBuffer);
    if (prevState.brackets > 0 || prevState.braces > 0) return false;
    const directMatch = trimmed.match(/^([A-Za-z_$][A-Za-z0-9_$-]*)\s*\(/);
    if (!directMatch) return false;
    const spec = catalog.byName.get(directMatch[1]);
    return Boolean(spec && !spec.isHelper);
  }

  function ingestCompleteStatement(stmtText: string): void {
    try {
      const parsed = parseStatementLine(stmtText);
      if (!parsed) return;
      const assignedId = parsed.id || `anon_${++autoSeq}`;
      symbols.set(assignedId, parsed.expr);
      const existingIdx = statements.findIndex((s) => s.id === assignedId);
      const entry = { id: assignedId, expr: parsed.expr, anonymous: !parsed.id };
      if (existingIdx !== -1) {
        statements[existingIdx] = entry;
      } else {
        statements.push(entry);
      }
    } catch (err) {
      errors.push(err instanceof Error ? err.message : String(err));
    }
  }

  function processLine(rawLine: string): void {
    const line = rawLine.replace(/\r$/, '');
    const trimmed = line.trim();

    if (/^```\s*ui\b/i.test(trimmed) && !inOtherFence && !inUiFence) {
      inUiFence = true;
      return;
    }
    if (/^```\s*[a-zA-Z0-9_-]+/.test(trimmed) && !inUiFence && !inOtherFence) {
      inOtherFence = true;
      return;
    }
    if (/^```\s*$/.test(trimmed)) {
      if (inUiFence && pendingStatement.trim()) {
        ingestCompleteStatement(pendingStatement);
        pendingStatement = '';
      }
      inUiFence = false;
      inOtherFence = false;
      return;
    }

    if (inOtherFence) return;

    if (inUiFence || pendingStatement.length > 0 || looksLikeBareUiLine(trimmed)) {
      if (!trimmed && !pendingStatement) return;
      if (pendingStatement.trim() && looksLikeTopLevelStatementRestart(line, pendingStatement)) {
        ingestCompleteStatement(pendingStatement);
        pendingStatement = '';
      }
      pendingStatement = pendingStatement ? `${pendingStatement}\n${line}` : line;
      if (pendingStatement.length > MAX_STATEMENT_BUFFER_CHARS) {
        errors.push('UI statement exceeded 16KB safety buffer; statement dropped.');
        pendingStatement = '';
        return;
      }
      const state = inspectExpressionBalance(pendingStatement);
      if (state.unclosedQuote) {
        errors.push('Unterminated string literal at end of UI statement line');
        pendingStatement = '';
        return;
      }
      if (state.balanced) {
        ingestCompleteStatement(pendingStatement);
        pendingStatement = '';
      }
    }
  }

  function evaluateNode(
    node: RawNode,
    visiting: Set<string>,
    pendingRefs: Set<string>,
    evalErrors: Set<string>,
    nodeIdHint: string
  ): unknown {
    if (node.kind === 'literal') return node.value;
    if (node.kind === 'array') {
      const resolvedItems: unknown[] = [];
      node.items.forEach((item, idx) => {
        const val = evaluateNode(item, visiting, pendingRefs, evalErrors, `${nodeIdHint}_${idx}`);
        if (val !== undefined) resolvedItems.push(val);
      });
      return resolvedItems;
    }
    if (node.kind === 'object') {
      const obj: Record<string, unknown> = {};
      for (const entry of node.entries) {
        const val = evaluateNode(entry.value, visiting, pendingRefs, evalErrors, `${nodeIdHint}_${entry.key}`);
        if (val !== undefined) obj[entry.key] = val;
      }
      return obj;
    }
    if (node.kind === 'ref') {
      if (visiting.has(node.name)) {
        evalErrors.add(`Cyclic UI reference blocked: '${node.name}'`);
        return undefined;
      }
      const target = symbols.get(node.name);
      if (!target) {
        pendingRefs.add(node.name);
        return undefined;
      }
      const nextVisiting = new Set(visiting);
      nextVisiting.add(node.name);
      return evaluateNode(target, nextVisiting, pendingRefs, evalErrors, node.name);
    }

    // node.kind === 'call'
    const spec = catalog.byName.get(node.callee);
    if (!spec) {
      evalErrors.add(`Unregistered UI constructor rejected: '${node.callee}'`);
      return undefined;
    }

    const evaluatedArgs = node.args.map((arg, idx) =>
      evaluateNode(arg, visiting, pendingRefs, evalErrors, `${nodeIdHint}_arg${idx}`)
    );

    let candidateProps: Record<string, unknown> = {};
    if (
      evaluatedArgs.length === 1 &&
      (!node.namedArgs || node.namedArgs.length === 0) &&
      evaluatedArgs[0] !== null &&
      typeof evaluatedArgs[0] === 'object' &&
      !Array.isArray(evaluatedArgs[0]) &&
      !('__sovereignWidget' in (evaluatedArgs[0] as Record<string, unknown>)) &&
      spec.argNames.length > 1
    ) {
      candidateProps = evaluatedArgs[0] as Record<string, unknown>;
    } else {
      spec.argNames.forEach((argName, idx) => {
        if (idx < evaluatedArgs.length && evaluatedArgs[idx] !== undefined) {
          candidateProps[argName] = evaluatedArgs[idx];
        }
      });
      if (node.namedArgs && node.namedArgs.length > 0) {
        for (const na of node.namedArgs) {
          const val = evaluateNode(
            na.value,
            visiting,
            pendingRefs,
            evalErrors,
            `${nodeIdHint}_kw_${na.key}`
          );
          if (val !== undefined) {
            candidateProps[na.key] = val;
          }
        }
      }
    }

    if (containsDangerousUrlProp(candidateProps)) {
      evalErrors.add(`Blocked unsafe script/data URI in '${spec.name}'`);
      return undefined;
    }

    const validation = spec.schema.safeParse(candidateProps);
    if (!validation.success) {
      const issueMsg = validation.error.issues.map((i) => `${i.path.join('.')}: ${i.message}`).join('; ');
      if (issueMsg.includes('Blocked unsafe script/data URI')) {
        evalErrors.add(`Blocked unsafe script/data URI in '${spec.name}' (${issueMsg})`);
      } else {
        evalErrors.add(`Schema validation failed on '${spec.name}' (${issueMsg})`);
      }
      return undefined;
    }

    if (spec.isHelper) {
      return validation.data;
    }

    return {
      __sovereignWidget: true,
      id: nodeIdHint,
      type: spec.name,
      props: validation.data as Record<string, unknown>,
    };
  }

  function extractCleanProse(text: string): string {
    const outLines: string[] = [];
    let inStrippedFence = false;
    let inPassthroughFence = false;
    let bareStmtBuffer = '';

    for (const rawLn of text.split(/\r?\n/)) {
      const trimmed = rawLn.trim();

      if (!inStrippedFence && !inPassthroughFence) {
        if (/^```\s*(?:ui|json)\b/i.test(trimmed)) {
          inStrippedFence = true;
          continue;
        }
        if (/^```\s*[a-zA-Z0-9_-]+/.test(trimmed)) {
          inPassthroughFence = true;
          outLines.push(rawLn);
          continue;
        }
      } else if (/^```\s*$/.test(trimmed)) {
        if (inStrippedFence) {
          inStrippedFence = false;
          bareStmtBuffer = '';
          continue;
        }
        if (inPassthroughFence) {
          inPassthroughFence = false;
          outLines.push(rawLn);
          continue;
        }
      }

      if (inStrippedFence) continue;
      if (inPassthroughFence) {
        outLines.push(rawLn);
        continue;
      }

      if (bareStmtBuffer) {
        bareStmtBuffer = `${bareStmtBuffer}\n${rawLn}`;
        const st = inspectExpressionBalance(bareStmtBuffer);
        if (st.balanced || st.unclosedQuote) {
          bareStmtBuffer = '';
        }
        continue;
      }

      if (looksLikeBareUiLine(trimmed)) {
        const st = inspectExpressionBalance(rawLn);
        if (!st.balanced && !st.unclosedQuote) {
          bareStmtBuffer = rawLn;
        }
        continue;
      }

      outLines.push(
        rawLn
          .replace(/\[PHASE_COMPLETE\]/g, '')
          .replace(/\[ROADMAP_COMPLETE\]/g, '')
      );
    }

    return outLines
      .join('\n')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
  }

  function collectTransitiveRefs(node: RawNode, out: Set<string>, seenSyms: Set<string>): void {
    if (node.kind === 'ref') {
      out.add(node.name);
      if (!seenSyms.has(node.name)) {
        seenSyms.add(node.name);
        const target = symbols.get(node.name);
        if (target) collectTransitiveRefs(target, out, seenSyms);
      }
    } else if (node.kind === 'array') {
      node.items.forEach((item) => collectTransitiveRefs(item, out, seenSyms));
    } else if (node.kind === 'object') {
      node.entries.forEach((e) => collectTransitiveRefs(e.value, out, seenSyms));
    } else if (node.kind === 'call') {
      node.args.forEach((a) => collectTransitiveRefs(a, out, seenSyms));
      if (node.namedArgs) {
        node.namedArgs.forEach((na) => collectTransitiveRefs(na.value, out, seenSyms));
      }
    }
  }

  function snapshot(): IncrementalParseSnapshot {
    const pendingRefs = new Set<string>();
    const evalErrors = new Set<string>(errors);
    const widgets: ParsedWidgetNode[] = [];

    if (symbols.has('root')) {
      const rootNode = symbols.get('root')!;
      const referencedFromRoot = new Set<string>(['root']);
      collectTransitiveRefs(rootNode, referencedFromRoot, new Set(['root']));

      const evaluated = evaluateNode(rootNode, new Set(['root']), pendingRefs, evalErrors, 'root') as
        | { __sovereignWidget?: boolean; id: string; type: string; props: Record<string, unknown> }
        | undefined;

      if (evaluated && evaluated.__sovereignWidget) {
        if (evaluated.type === 'AdvisoryBoard' && Array.isArray(evaluated.props.children)) {
          widgets.push({
            id: evaluated.id,
            type: evaluated.type,
            props: evaluated.props,
          });
          for (const child of evaluated.props.children) {
            if (child && typeof child === 'object' && (child as any).__sovereignWidget) {
              widgets.push({
                id: (child as any).id,
                type: (child as any).type,
                props: (child as any).props,
              });
            }
          }
        } else {
          widgets.push({ id: evaluated.id, type: evaluated.type, props: evaluated.props });
        }
      }

      // Preserve any top-level non-helper widgets emitted outside AdvisoryBoard's child array
      for (const stmt of statements) {
        if (referencedFromRoot.has(stmt.id)) continue;
        const spec = stmt.expr.kind === 'call' ? catalog.byName.get(stmt.expr.callee) : undefined;
        if (!spec || spec.isHelper) continue;
        const extraEval = evaluateNode(
          stmt.expr,
          new Set([stmt.id]),
          pendingRefs,
          evalErrors,
          stmt.id
        ) as
          | { __sovereignWidget?: boolean; id: string; type: string; props: Record<string, unknown> }
          | undefined;
        if (extraEval && extraEval.__sovereignWidget) {
          widgets.push({ id: extraEval.id, type: extraEval.type, props: extraEval.props });
        }
      }
    } else {
      // Resolve top-level widget statements not referenced inside another statement
      const referencedIds = new Set<string>();
      function collectRefs(n: RawNode): void {
        if (n.kind === 'ref') referencedIds.add(n.name);
        else if (n.kind === 'array') n.items.forEach(collectRefs);
        else if (n.kind === 'object') n.entries.forEach((e) => collectRefs(e.value));
        else if (n.kind === 'call') {
          n.args.forEach(collectRefs);
          if (n.namedArgs) n.namedArgs.forEach((na) => collectRefs(na.value));
        }
      }
      statements.forEach((s) => collectRefs(s.expr));

      for (const stmt of statements) {
        if (!stmt.anonymous && referencedIds.has(stmt.id)) continue;
        const spec = stmt.expr.kind === 'call' ? catalog.byName.get(stmt.expr.callee) : undefined;
        if (!spec) {
          if (stmt.expr.kind === 'call') {
            evalErrors.add(`Unregistered UI constructor rejected: '${stmt.expr.callee}'`);
          }
          continue;
        }
        if (spec.isHelper) continue;

        const evaluated = evaluateNode(stmt.expr, new Set([stmt.id]), pendingRefs, evalErrors, stmt.id) as
          | { __sovereignWidget?: boolean; id: string; type: string; props: Record<string, unknown> }
          | undefined;
        if (evaluated && evaluated.__sovereignWidget) {
          widgets.push({ id: evaluated.id, type: evaluated.type, props: evaluated.props });
        }
      }
    }

    return {
      widgets,
      proseText: extractCleanProse(rawFullText),
      pendingRefs: [...pendingRefs],
      errors: [...evalErrors],
      phaseComplete: rawFullText.includes('[PHASE_COMPLETE]'),
      roadmapComplete: rawFullText.includes('[ROADMAP_COMPLETE]'),
    };
  }

  function feed(chunk: string | Uint8Array): IncrementalParseSnapshot {
    const decoded =
      typeof chunk === 'string' ? chunk : utf8Decoder.decode(chunk, { stream: true });
    if (!decoded) return snapshot();

    rawFullText += decoded;
    lineRemainder += decoded;

    let newlineIdx = lineRemainder.indexOf('\n');
    while (newlineIdx !== -1) {
      const completeLine = lineRemainder.slice(0, newlineIdx);
      lineRemainder = lineRemainder.slice(newlineIdx + 1);
      processLine(completeLine);
      newlineIdx = lineRemainder.indexOf('\n');
    }

    return snapshot();
  }

  function finalize(): IncrementalParseSnapshot {
    const flushed = utf8Decoder.decode();
    if (flushed) {
      rawFullText += flushed;
      lineRemainder += flushed;
    }
    if (lineRemainder.trim()) {
      processLine(lineRemainder);
      lineRemainder = '';
    }
    if (pendingStatement.trim()) {
      ingestCompleteStatement(pendingStatement);
      pendingStatement = '';
    }
    return snapshot();
  }

  function getRawText(): string {
    return rawFullText;
  }

  return {
    feed,
    pushText: feed,
    finalize,
    snapshot,
    getRawText,
  };
}

// ---------------------------------------------------------------------------
// Sovereign AI Integration Advisor Catalog & Legacy Roadmap Hydrator
// ---------------------------------------------------------------------------

export const MetricItemSchema = z.object({
  label: z.string().min(1),
  value: z.string().min(1),
  delta: z.string().optional().default(''),
});

export const RoadmapActionItemSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  tool: z.string().min(1),
  toolUrl: SafeOptionalUrlSchema,
  estimatedRoi: z.string().min(1),
  difficulty: z.enum(['Easy', 'Medium', 'Hard']).catch('Medium'),
  monthlyCost: z.string().min(1),
  timeToImplement: z.string().min(1),
  hoursSavedWeekly: z.coerce.number().min(0).default(0),
});

export const MetricStripPropsSchema = z.object({
  items: z.array(MetricItemSchema).min(1),
});

export const PainCostCardPropsSchema = z.object({
  role: z.string().min(1),
  weeklyHours: z.coerce.number().min(0),
  monthlyBurnUsd: z.coerce.number().min(0),
  fixSummary: z.string().min(1),
});

export const StackReadinessCardPropsSchema = z.object({
  category: z.string().min(1),
  currentTools: z.string().min(1),
  readinessScore: z.coerce.number().min(1).max(10),
  integrationNote: z.string().min(1),
});

export const RoadmapPhaseCardPropsSchema = z.object({
  name: z.string().min(1),
  timeline: z.string().min(1),
  actions: z.array(RoadmapActionItemSchema).min(1),
});

export const ExecutiveActionGatePropsSchema = z.object({
  headline: z.string().min(1),
  ctaHref: SafeRequiredHrefSchema,
  projectedImpact: z.string().optional().default(''),
  ctaLabel: z.string().optional().default('Book Executive Architecture Review'),
});

export const AdvisoryBoardPropsSchema = z.object({
  children: z.array(z.any()).default([]),
  executiveSummary: z.string().optional().default(''),
  totalMonthlyToolCost: z.string().optional().default('$0/mo'),
  keyRisks: z.array(z.string()).optional().default([]),
  nextSteps: z.array(z.string()).optional().default([]),
  estimatedWeeklyHoursSaved: z.coerce.number().min(0).optional(),
  estimatedMonthlyRoi: z.coerce.number().min(0).optional(),
});

export type MetricStripProps = z.infer<typeof MetricStripPropsSchema>;
export type PainCostCardProps = z.infer<typeof PainCostCardPropsSchema>;
export type StackReadinessCardProps = z.infer<typeof StackReadinessCardPropsSchema>;
export type RoadmapPhaseCardProps = z.infer<typeof RoadmapPhaseCardPropsSchema>;
export type ExecutiveActionGateProps = z.infer<typeof ExecutiveActionGatePropsSchema>;

export const ADVISOR_WIDGET_CATALOG = defineWidgetCatalog({
  Metric: {
    name: 'Metric',
    aliases: ['KPI'],
    argNames: ['label', 'value', 'delta'],
    signature: 'Metric(label: string, value: string, delta?: string)',
    schema: MetricItemSchema,
    isHelper: true,
  },
  ActionRow: {
    name: 'ActionRow',
    aliases: ['Act'],
    argNames: [
      'title',
      'description',
      'tool',
      'toolUrl',
      'estimatedRoi',
      'difficulty',
      'monthlyCost',
      'timeToImplement',
      'hoursSavedWeekly',
    ],
    signature:
      'ActionRow(title: string, description: string, tool: string, toolUrl: string, estimatedRoi: string, difficulty: "Easy"|"Medium"|"Hard", monthlyCost: string, timeToImplement: string, hoursSavedWeekly: number)',
    schema: RoadmapActionItemSchema,
    isHelper: true,
  },
  MetricStrip: {
    name: 'MetricStrip',
    argNames: ['items'],
    signature: 'MetricStrip(items: Metric[])',
    schema: MetricStripPropsSchema,
  },
  PainCostCard: {
    name: 'PainCostCard',
    argNames: ['role', 'weeklyHours', 'monthlyBurnUsd', 'fixSummary'],
    signature:
      'PainCostCard(role: string, weeklyHours: number, monthlyBurnUsd: number, fixSummary: string)',
    schema: PainCostCardPropsSchema,
  },
  StackReadinessCard: {
    name: 'StackReadinessCard',
    argNames: ['category', 'currentTools', 'readinessScore', 'integrationNote'],
    signature:
      'StackReadinessCard(category: string, currentTools: string, readinessScore: number, integrationNote: string)',
    schema: StackReadinessCardPropsSchema,
  },
  RoadmapPhaseCard: {
    name: 'RoadmapPhaseCard',
    aliases: ['Phase'],
    argNames: ['name', 'timeline', 'actions'],
    signature: 'RoadmapPhaseCard(name: string, timeline: string, actions: ActionRow[])',
    schema: RoadmapPhaseCardPropsSchema,
  },
  ExecutiveActionGate: {
    name: 'ExecutiveActionGate',
    argNames: ['headline', 'ctaHref', 'projectedImpact', 'ctaLabel'],
    signature:
      'ExecutiveActionGate(headline: string, ctaHref: string, projectedImpact?: string, ctaLabel?: string)',
    schema: ExecutiveActionGatePropsSchema,
  },
  AdvisoryBoard: {
    name: 'AdvisoryBoard',
    argNames: [
      'children',
      'executiveSummary',
      'totalMonthlyToolCost',
      'keyRisks',
      'nextSteps',
      'estimatedWeeklyHoursSaved',
      'estimatedMonthlyRoi',
    ],
    signature:
      'AdvisoryBoard(children: Widget[], executiveSummary?: string, totalMonthlyToolCost?: string, keyRisks?: string[], nextSteps?: string[], estimatedWeeklyHoursSaved?: number, estimatedMonthlyRoi?: number)',
    schema: AdvisoryBoardPropsSchema,
  },
});

export interface LegacyRoadmapData {
  executive_summary: string;
  estimated_weekly_hours_saved: number;
  estimated_monthly_roi: number;
  phases: Array<{
    name: string;
    timeline: string;
    actions: Array<{
      title: string;
      description: string;
      tool: string;
      tool_url: string;
      estimated_roi: string;
      difficulty: 'Easy' | 'Medium' | 'Hard';
      monthly_cost: string;
      time_to_implement: string;
      hours_saved_weekly: number;
    }>;
  }>;
  total_monthly_tool_cost: string;
  key_risks: string[];
  next_steps: string[];
}

function parseSingleMagnitudeToken(numPart: string, suffix?: string): number {
  const base = Number(numPart.replace(/,/g, ''));
  if (!Number.isFinite(base)) return 0;
  const mult =
    suffix && suffix.toLowerCase() === 'k'
      ? 1_000
      : suffix && suffix.toLowerCase() === 'm'
        ? 1_000_000
        : suffix && suffix.toLowerCase() === 'b'
          ? 1_000_000_000
          : 1;
  return base * mult;
}

export function parseCurrencyNumber(raw: string): number {
  const text = String(raw || '').trim();
  if (!text) return 0;

  // Handle explicit numeric ranges like "$99-$149/mo" or "$1,000 to $2,000" by averaging endpoints
  const rangeMatch = text.match(
    /(\d[\d,]*(?:\.\d+)?)([kKmMbB])?(?![a-zA-Z])\s*(?:-|to)\s*[$€£]?\s*(\d[\d,]*(?:\.\d+)?)([kKmMbB])?(?![a-zA-Z])/i
  );
  if (rangeMatch) {
    const low = parseSingleMagnitudeToken(rangeMatch[1], rangeMatch[2]);
    const high = parseSingleMagnitudeToken(rangeMatch[3], rangeMatch[4]);
    return (low + high) / 2;
  }

  // Extract first numeric token with optional commas, decimal, and standalone k/m/b suffix
  const singleMatch = text.match(/(-?\d[\d,]*(?:\.\d+)?)([kKmMbB])?(?![a-zA-Z])/);
  if (!singleMatch) return 0;
  return parseSingleMagnitudeToken(singleMatch[1], singleMatch[2]);
}

export function sanitizeLegacyRoadmapData(raw: unknown): LegacyRoadmapData | null {
  if (!raw || typeof raw !== 'object') return null;
  const obj = raw as Record<string, unknown>;
  if (!Array.isArray(obj.phases) || obj.phases.length === 0) return null;

  const phases: LegacyRoadmapData['phases'] = obj.phases
    .filter((ph): ph is Record<string, unknown> => Boolean(ph && typeof ph === 'object'))
    .map((ph) => {
      const rawActions = Array.isArray(ph.actions) ? ph.actions : [];
      const actions = rawActions
        .filter((a): a is Record<string, unknown> => Boolean(a && typeof a === 'object'))
        .map((a) => {
          const rawDiff = String(a.difficulty || 'Medium');
          const difficulty: 'Easy' | 'Medium' | 'Hard' =
            rawDiff === 'Easy' || rawDiff === 'Medium' || rawDiff === 'Hard' ? rawDiff : 'Medium';
          const safeUrl = sanitizeSafeUrl(String(a.tool_url || a.toolUrl || ''));
          return {
            title: String(a.title || 'Action Item'),
            description: String(a.description || ''),
            tool: String(a.tool || 'Internal Workflow'),
            tool_url: safeUrl || '',
            estimated_roi: String(a.estimated_roi || a.estimatedRoi || '$0/mo'),
            difficulty,
            monthly_cost: String(a.monthly_cost || a.monthlyCost || '$0/mo'),
            time_to_implement: String(a.time_to_implement || a.timeToImplement || '1 week'),
            hours_saved_weekly: Math.max(0, Number(a.hours_saved_weekly ?? a.hoursSavedWeekly ?? 0) || 0),
          };
        });
      return {
        name: String(ph.name || 'Phase'),
        timeline: String(ph.timeline || 'Month 1'),
        actions,
      };
    })
    .filter((ph) => ph.actions.length > 0);

  if (phases.length === 0) return null;

  return {
    executive_summary: String(obj.executive_summary || ''),
    estimated_weekly_hours_saved: Math.max(0, Number(obj.estimated_weekly_hours_saved) || 0),
    estimated_monthly_roi: Math.max(0, Number(obj.estimated_monthly_roi) || 0),
    phases,
    total_monthly_tool_cost: String(obj.total_monthly_tool_cost || '$0/mo'),
    key_risks: Array.isArray(obj.key_risks) ? obj.key_risks.map((r) => String(r)) : [],
    next_steps: Array.isArray(obj.next_steps) ? obj.next_steps.map((s) => String(s)) : [],
  };
}

export function hydrateLegacyRoadmapJson(
  parsedAst: Pick<IncrementalParseSnapshot, 'widgets' | 'proseText'>
): LegacyRoadmapData | null {
  const phaseNodes = parsedAst.widgets.filter((w) => w.type === 'RoadmapPhaseCard');
  if (phaseNodes.length === 0) return null;

  const boardNode = parsedAst.widgets.find((w) => w.type === 'AdvisoryBoard');
  const metricStrips = parsedAst.widgets.filter((w) => w.type === 'MetricStrip');

  const phases: LegacyRoadmapData['phases'] = phaseNodes.map((node) => {
    const p = node.props as RoadmapPhaseCardProps;
    return {
      name: p.name,
      timeline: p.timeline,
      actions: p.actions.map((a) => ({
        title: a.title,
        description: a.description,
        tool: a.tool,
        tool_url: a.toolUrl || '',
        estimated_roi: a.estimatedRoi,
        difficulty: a.difficulty,
        monthly_cost: a.monthlyCost,
        time_to_implement: a.timeToImplement,
        hours_saved_weekly: a.hoursSavedWeekly,
      })),
    };
  });

  const summedWeeklyHours = phases.reduce(
    (sum, ph) => sum + ph.actions.reduce((s, a) => s + (a.hours_saved_weekly || 0), 0),
    0
  );

  const summedMonthlyToolUsd = phases.reduce(
    (sum, ph) => sum + ph.actions.reduce((s, a) => s + parseCurrencyNumber(a.monthly_cost), 0),
    0
  );

  let stripHours: number | undefined;
  let stripMonthlyRoi: number | undefined;
  let stripToolCost: string | undefined;

  for (const ms of metricStrips) {
    const items = (ms.props as MetricStripProps).items || [];
    for (const item of items) {
      const lbl = item.label.toLowerCase();
      if (lbl.includes('hour')) {
        const parsed = parseCurrencyNumber(item.value);
        if (parsed > 0) stripHours = parsed;
      } else if (lbl.includes('roi') || lbl.includes('impact') || lbl.includes('saving')) {
        const parsed = parseCurrencyNumber(item.value);
        if (parsed > 0) stripMonthlyRoi = parsed;
      } else if (lbl.includes('tool cost') || lbl.includes('spend')) {
        stripToolCost = item.value;
      }
    }
  }

  const boardProps = (boardNode?.props || {}) as z.infer<typeof AdvisoryBoardPropsSchema>;
  const weeklyHours =
    boardProps.estimatedWeeklyHoursSaved ?? stripHours ?? summedWeeklyHours;
  const monthlyRoi =
    boardProps.estimatedMonthlyRoi ?? stripMonthlyRoi ?? Math.round(weeklyHours * 125 * 4);
  const totalToolCost =
    boardProps.totalMonthlyToolCost && boardProps.totalMonthlyToolCost !== '$0/mo'
      ? boardProps.totalMonthlyToolCost
      : stripToolCost || `$${Math.round(summedMonthlyToolUsd).toLocaleString()}/mo`;

  const executiveSummary =
    (boardProps.executiveSummary && boardProps.executiveSummary.trim()) ||
    parsedAst.proseText.split('\n\n')[0]?.trim() ||
    'Phased AI integration plan calibrated to your team capacity, current software stack, and monthly ROI targets.';

  return {
    executive_summary: executiveSummary,
    estimated_weekly_hours_saved: weeklyHours,
    estimated_monthly_roi: monthlyRoi,
    phases,
    total_monthly_tool_cost: totalToolCost,
    key_risks:
      boardProps.keyRisks && boardProps.keyRisks.length > 0
        ? boardProps.keyRisks
        : ['Verify vendor data-retention settings before connecting live customer records.'],
    next_steps:
      boardProps.nextSteps && boardProps.nextSteps.length > 0
        ? boardProps.nextSteps
        : phases[0]?.actions.map((a) => `Deploy ${a.tool}: ${a.title}`) || [],
  };
}
