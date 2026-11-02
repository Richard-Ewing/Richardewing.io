/**
 * Zero-Dependency ECMA-376 OpenXML (.xlsx) Compiler (ADR-0021)
 *
 * Generates native multi-tab Excel workbooks inside Cloudflare Workers V8 isolates
 * with zero npm bloat. Implements IEEE 802.3 CRC-32, Stored-ZIP (`PK\x03\x04`)
 * archive packaging, executive styling, column widths, and live `<f>` Excel formulas.
 */

export type XlsxCellStyle =
  | 'default'
  | 'header'
  | 'subheader'
  | 'currency'
  | 'currency_bold'
  | 'percent'
  | 'integer'
  | 'alert';

export interface XlsxCellInput {
  value?: string | number | null;
  /** Excel formula WITHOUT leading '=' (if leading '=' is passed, compiler strips it cleanly) */
  formula?: string;
  style?: XlsxCellStyle;
}

export type XlsxCell = string | number | null | XlsxCellInput;

export interface XlsxWorksheetSpec {
  name: string;
  columnWidths?: number[];
  rows: XlsxCell[][];
}

const STYLE_INDEX_MAP: Record<XlsxCellStyle, number> = {
  default: 0,
  header: 1,
  subheader: 2,
  currency: 3,
  currency_bold: 4,
  percent: 5,
  integer: 6,
  alert: 7,
};

const utf8Encoder = new TextEncoder();

const CRC32_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) !== 0 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[n] = c >>> 0;
  }
  return table;
})();

function crc32(bytes: Uint8Array): number {
  let c = 0xffffffff;
  for (let i = 0; i < bytes.length; i++) {
    c = CRC32_TABLE[(c ^ bytes[i]) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

function escapeXml(raw: string): string {
  return raw
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function sanitizeSheetName(name: string, index: number): string {
  const cleaned = name.replace(/[\\/?*[\]:]/g, ' ').trim().slice(0, 31);
  return cleaned || `Sheet${index + 1}`;
}

export function columnIndexToLetter(colIdxZeroBased: number): string {
  let n = colIdxZeroBased + 1;
  let letters = '';
  while (n > 0) {
    const rem = (n - 1) % 26;
    letters = String.fromCharCode(65 + rem) + letters;
    n = Math.floor((n - 1) / 26);
  }
  return letters;
}

function normalizeCell(cell: XlsxCell): XlsxCellInput {
  if (cell === null || cell === undefined) {
    return { value: '' };
  }
  if (typeof cell === 'string' || typeof cell === 'number') {
    return { value: cell };
  }
  return cell;
}

function buildWorksheetXml(sheet: XlsxWorksheetSpec): string {
  const colsXml =
    sheet.columnWidths && sheet.columnWidths.length > 0
      ? `<cols>${sheet.columnWidths
          .map(
            (w, idx) =>
              `<col min="${idx + 1}" max="${idx + 1}" width="${Math.max(8, Math.min(80, w))}" customWidth="1"/>`
          )
          .join('')}</cols>`
      : '';

  const rowsXml = sheet.rows
    .map((row, rIdx) => {
      const rowNum = rIdx + 1;
      const cellsXml = row
        .map((rawCell, cIdx) => {
          const cell = normalizeCell(rawCell);
          const ref = `${columnIndexToLetter(cIdx)}${rowNum}`;
          const styleIdx = STYLE_INDEX_MAP[cell.style || 'default'] ?? 0;
          const styleAttr = styleIdx > 0 ? ` s="${styleIdx}"` : '';

          if (cell.formula) {
            const cleanFormula = cell.formula.replace(/^=/, '').trim();
            const cachedNumeric =
              typeof cell.value === 'number' && Number.isFinite(cell.value)
                ? `<v>${cell.value}</v>`
                : '';
            return `<c r="${ref}"${styleAttr}><f>${escapeXml(cleanFormula)}</f>${cachedNumeric}</c>`;
          }

          if (typeof cell.value === 'number' && Number.isFinite(cell.value)) {
            return `<c r="${ref}"${styleAttr}><v>${cell.value}</v></c>`;
          }

          const strVal = cell.value === null || cell.value === undefined ? '' : String(cell.value);
          if (strVal === '' && styleIdx === 0) {
            return '';
          }
          const preserveSpace = /^\s|\s$|\n/.test(strVal) ? ' xml:space="preserve"' : '';
          return `<c r="${ref}"${styleAttr} t="inlineStr"><is><t${preserveSpace}>${escapeXml(strVal)}</t></is></c>`;
        })
        .filter(Boolean)
        .join('');

      const rowHeight = rIdx === 0 ? ' ht="24" customHeight="1"' : '';
      return `<row r="${rowNum}"${rowHeight}>${cellsXml}</row>`;
    })
    .join('');

  return (
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>` +
    `<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">` +
    `<sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>` +
    `<sheetFormatPr defaultRowHeight="18"/>` +
    colsXml +
    `<sheetData>${rowsXml}</sheetData>` +
    `</worksheet>`
  );
}

function buildStylesXml(): string {
  return (
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>` +
    `<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">` +
    `<numFmts count="3">` +
    `<numFmt numFmtId="164" formatCode="$#,##0"/>` +
    `<numFmt numFmtId="165" formatCode="0.0%"/>` +
    `<numFmt numFmtId="166" formatCode="#,##0"/>` +
    `</numFmts>` +
    `<fonts count="4">` +
    `<font><sz val="10"/><color rgb="FF1E2924"/><name val="Calibri"/></font>` +
    `<font><b/><sz val="10"/><color rgb="FFF4F1E9"/><name val="Calibri"/></font>` +
    `<font><b/><sz val="10"/><color rgb="FF1F3B2C"/><name val="Calibri"/></font>` +
    `<font><b/><sz val="10"/><color rgb="FF9E3F29"/><name val="Calibri"/></font>` +
    `</fonts>` +
    `<fills count="5">` +
    `<fill><patternFill patternType="none"/></fill>` +
    `<fill><patternFill patternType="gray125"/></fill>` +
    `<fill><patternFill patternType="solid"><fgColor rgb="FF1F3B2C"/></patternFill></fill>` +
    `<fill><patternFill patternType="solid"><fgColor rgb="FFEBE7DC"/></patternFill></fill>` +
    `<fill><patternFill patternType="solid"><fgColor rgb="FFFCECE8"/></patternFill></fill>` +
    `</fills>` +
    `<borders count="2">` +
    `<border><left/><right/><top/><bottom/><diagonal/></border>` +
    `<border>` +
    `<left style="thin"><color rgb="FFD8D2C5"/></left>` +
    `<right style="thin"><color rgb="FFD8D2C5"/></right>` +
    `<top style="thin"><color rgb="FFD8D2C5"/></top>` +
    `<bottom style="thin"><color rgb="FFD8D2C5"/></bottom>` +
    `<diagonal/>` +
    `</border>` +
    `</borders>` +
    `<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>` +
    `<cellXfs count="8">` +
    // 0: default
    `<xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyBorder="1"><alignment vertical="center" wrapText="1"/></xf>` +
    // 1: header (Forest Green #1F3B2C + Warm Cream bold text)
    `<xf numFmtId="0" fontId="1" fillId="2" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"><alignment vertical="center" wrapText="1"/></xf>` +
    // 2: subheader (Warm Paper2 #EBE7DC + Forest bold text)
    `<xf numFmtId="0" fontId="2" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"><alignment vertical="center" wrapText="1"/></xf>` +
    // 3: currency ($#,##0)
    `<xf numFmtId="164" fontId="0" fillId="0" borderId="1" xfId="0" applyNumberFormat="1" applyBorder="1"><alignment horizontal="right" vertical="center"/></xf>` +
    // 4: currency_bold ($#,##0 bold)
    `<xf numFmtId="164" fontId="2" fillId="3" borderId="1" xfId="0" applyNumberFormat="1" applyFont="1" applyFill="1" applyBorder="1"><alignment horizontal="right" vertical="center"/></xf>` +
    // 5: percent (0.0%)
    `<xf numFmtId="165" fontId="0" fillId="0" borderId="1" xfId="0" applyNumberFormat="1" applyBorder="1"><alignment horizontal="right" vertical="center"/></xf>` +
    // 6: integer (#,##0)
    `<xf numFmtId="166" fontId="0" fillId="0" borderId="1" xfId="0" applyNumberFormat="1" applyBorder="1"><alignment horizontal="right" vertical="center"/></xf>` +
    // 7: alert (Rose tint + bold alert text)
    `<xf numFmtId="0" fontId="3" fillId="4" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"><alignment vertical="center" wrapText="1"/></xf>` +
    `</cellXfs>` +
    `</styleSheet>`
  );
}

interface ZipEntry {
  path: string;
  data: Uint8Array;
}

function packStoredZip(entries: ZipEntry[]): Uint8Array {
  const localChunks: Uint8Array[] = [];
  const centralChunks: Uint8Array[] = [];
  let offset = 0;

  // Fixed valid DOS timestamp (2026-11-02 12:00:00)
  const dosTime = (12 << 11) | (0 << 5) | 0;
  const dosDate = ((2026 - 1980) << 9) | (11 << 5) | 2;

  for (const entry of entries) {
    const nameBytes = utf8Encoder.encode(entry.path);
    const data = entry.data;
    const checksum = crc32(data);

    const localHeader = new Uint8Array(30 + nameBytes.length);
    const lv = new DataView(localHeader.buffer);
    lv.setUint32(0, 0x04034b50, true); // Local file header signature
    lv.setUint16(4, 20, true); // Version needed (2.0)
    lv.setUint16(6, 0x0800, true); // UTF-8 filename flag
    lv.setUint16(8, 0, true); // Compression method: 0 (Stored)
    lv.setUint16(10, dosTime, true);
    lv.setUint16(12, dosDate, true);
    lv.setUint32(14, checksum, true);
    lv.setUint32(18, data.length, true);
    lv.setUint32(22, data.length, true);
    lv.setUint16(26, nameBytes.length, true);
    lv.setUint16(28, 0, true);
    localHeader.set(nameBytes, 30);

    localChunks.push(localHeader, data);

    const centralHeader = new Uint8Array(46 + nameBytes.length);
    const cv = new DataView(centralHeader.buffer);
    cv.setUint32(0, 0x02014b50, true); // Central directory file header signature
    cv.setUint16(4, 20, true); // Version made by
    cv.setUint16(6, 20, true); // Version needed
    cv.setUint16(8, 0x0800, true); // UTF-8 flag
    cv.setUint16(10, 0, true); // Stored
    cv.setUint16(12, dosTime, true);
    cv.setUint16(14, dosDate, true);
    cv.setUint32(16, checksum, true);
    cv.setUint32(20, data.length, true);
    cv.setUint32(24, data.length, true);
    cv.setUint16(28, nameBytes.length, true);
    cv.setUint16(30, 0, true);
    cv.setUint16(32, 0, true);
    cv.setUint16(34, 0, true);
    cv.setUint16(36, 0, true);
    cv.setUint32(38, 0, true);
    cv.setUint32(42, offset, true);
    centralHeader.set(nameBytes, 46);

    centralChunks.push(centralHeader);
    offset += localHeader.length + data.length;
  }

  const centralSize = centralChunks.reduce((acc, c) => acc + c.length, 0);
  const eocd = new Uint8Array(22);
  const ev = new DataView(eocd.buffer);
  ev.setUint32(0, 0x06054b50, true);
  ev.setUint16(4, 0, true);
  ev.setUint16(6, 0, true);
  ev.setUint16(8, entries.length, true);
  ev.setUint16(10, entries.length, true);
  ev.setUint32(12, centralSize, true);
  ev.setUint32(16, offset, true);
  ev.setUint16(20, 0, true);

  const totalLen = offset + centralSize + eocd.length;
  const archive = new Uint8Array(totalLen);
  let cursor = 0;
  for (const chunk of localChunks) {
    archive.set(chunk, cursor);
    cursor += chunk.length;
  }
  for (const chunk of centralChunks) {
    archive.set(chunk, cursor);
    cursor += chunk.length;
  }
  archive.set(eocd, cursor);
  return archive;
}

export function compileXlsxWorkbook(sheets: XlsxWorksheetSpec[]): Uint8Array {
  if (!sheets || sheets.length === 0) {
    throw new Error('compileXlsxWorkbook requires at least one worksheet.');
  }

  const sanitizedSheets = sheets.map((s, idx) => ({
    ...s,
    safeName: sanitizeSheetName(s.name, idx),
  }));

  const contentTypesXml =
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>` +
    `<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">` +
    `<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>` +
    `<Default Extension="xml" ContentType="application/xml"/>` +
    `<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>` +
    `<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>` +
    sanitizedSheets
      .map(
        (_, idx) =>
          `<Override PartName="/xl/worksheets/sheet${idx + 1}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>`
      )
      .join('') +
    `</Types>`;

  const rootRelsXml =
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>` +
    `<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">` +
    `<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>` +
    `</Relationships>`;

  const workbookXml =
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>` +
    `<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">` +
    `<workbookPr/>` +
    `<sheets>` +
    sanitizedSheets
      .map(
        (s, idx) =>
          `<sheet name="${escapeXml(s.safeName)}" sheetId="${idx + 1}" r:id="rId${idx + 1}"/>`
      )
      .join('') +
    `</sheets>` +
    `<calcPr calcId="191029" fullCalcOnLoad="1"/>` +
    `</workbook>`;

  const stylesRelId = sanitizedSheets.length + 1;
  const workbookRelsXml =
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>` +
    `<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">` +
    sanitizedSheets
      .map(
        (_, idx) =>
          `<Relationship Id="rId${idx + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet${idx + 1}.xml"/>`
      )
      .join('') +
    `<Relationship Id="rId${stylesRelId}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>` +
    `</Relationships>`;

  const entries: ZipEntry[] = [
    { path: '[Content_Types].xml', data: utf8Encoder.encode(contentTypesXml) },
    { path: '_rels/.rels', data: utf8Encoder.encode(rootRelsXml) },
    { path: 'xl/workbook.xml', data: utf8Encoder.encode(workbookXml) },
    { path: 'xl/_rels/workbook.xml.rels', data: utf8Encoder.encode(workbookRelsXml) },
    { path: 'xl/styles.xml', data: utf8Encoder.encode(buildStylesXml()) },
  ];

  sanitizedSheets.forEach((s, idx) => {
    entries.push({
      path: `xl/worksheets/sheet${idx + 1}.xml`,
      data: utf8Encoder.encode(buildWorksheetXml(s)),
    });
  });

  return packStoredZip(entries);
}

export function uint8ArrayToBase64(bytes: Uint8Array): string {
  let binary = '';
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    const slice = bytes.subarray(i, i + chunkSize);
    binary += String.fromCharCode(...slice);
  }
  return btoa(binary);
}
