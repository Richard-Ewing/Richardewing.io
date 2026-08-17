import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const zipPath = path.join(process.cwd(), 'public', 'brand', 'richard-ewing-brand-kit.zip');

    if (!fs.existsSync(zipPath)) {
      return NextResponse.json({ error: 'Brand kit asset archive not found' }, { status: 404 });
    }

    const fileBuffer = fs.readFileSync(zipPath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': 'attachment; filename="richard-ewing-brand-kit.zip"',
        'Cache-Control': 'public, max-age=86400, stale-while-revalidate=43200',
      },
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
