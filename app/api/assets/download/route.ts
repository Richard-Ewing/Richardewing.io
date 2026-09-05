import { NextRequest, NextResponse } from 'next/server';
import { auth, clerkClient } from '@clerk/nextjs/server';
import path from 'path';
import fs from 'fs';

export const dynamic = 'force-dynamic';
const archiver = require('archiver');

export async function GET(req: NextRequest) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const slug = searchParams.get('slug');

    if (!slug) {
      return new NextResponse('Missing asset slug', { status: 400 });
    }

    // Security: prevent directory traversal
    if (slug.includes('..') || slug.includes('/') || slug.includes('\\')) {
      return new NextResponse('Invalid asset slug', { status: 400 });
    }

    // Verify user authorization for this asset
    const client = await clerkClient();
    const user = await client.users.getUser(userId);
    const metadata = user.publicMetadata as any;

    const hasAllAccess = metadata?.has_yearly_subscription === true || metadata?.is_team_admin === true;
    const unlockedAssets = metadata?.unlocked_assets || [];
    
    if (!hasAllAccess && !unlockedAssets.includes(slug)) {
      console.warn(`[SECURITY] User ${userId} attempted to download unowned asset: ${slug}`);
      return new NextResponse('Forbidden: You do not have access to this asset.', { status: 403 });
    }

    // Path to the requested asset directory
    const assetDir = path.join(process.cwd(), 'assets', 'skills', slug);

    if (!fs.existsSync(assetDir) || !fs.statSync(assetDir).isDirectory()) {
      return new NextResponse('Asset not found', { status: 404 });
    }

    // Create a web stream we can return in the response
    const stream = new ReadableStream({
      start(controller) {
        const archive = archiver('zip', {
          zlib: { level: 9 } // Sets the compression level.
        });

        archive.on('data', (chunk: Buffer) => {
          controller.enqueue(chunk);
        });

        archive.on('end', () => {
          controller.close();
        });

        archive.on('error', (err: Error) => {
          console.error('[ZIP GENERATION ERROR]', err);
          controller.error(err);
        });

        // Add the entire directory to the zip archive
        archive.directory(assetDir, slug);

        // Finalize the archive (this triggers the streaming)
        archive.finalize();
      }
    });

    const headers = new Headers();
    headers.set('Content-Type', 'application/zip');
    headers.set('Content-Disposition', `attachment; filename="${slug}-governance-asset.zip"`);

    return new NextResponse(stream, {
      status: 200,
      headers
    });

  } catch (error) {
    console.error('[ASSET DOWNLOAD ERROR]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
