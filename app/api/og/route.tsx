import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get('title') || 'Richard Ewing | AI Systems & Sovereign Governance';
    const category = searchParams.get('category') || 'Sovereign Architecture';
    const readingTime = searchParams.get('readingTime') || '6 min read';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: '#09090b',
            padding: '70px 80px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            position: 'relative',
          }}
        >
          {/* Subtle Ambient Background Gradients */}
          <div
            style={{
              position: 'absolute',
              top: '-100px',
              right: '-100px',
              width: '450px',
              height: '450px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, rgba(0,0,0,0) 70%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-100px',
              left: '-100px',
              width: '450px',
              height: '450px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, rgba(0,0,0,0) 70%)',
            }}
          />

          {/* Top Brand Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              zIndex: 10,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: '#10b981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#09090b',
                  fontWeight: 900,
                  fontSize: '20px',
                }}
              >
                R
              </div>
              <span
                style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  color: '#f4f4f5',
                  letterSpacing: '-0.5px',
                }}
              >
                richardewing.io
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                padding: '8px 18px',
                borderRadius: '9999px',
                color: '#34d399',
                fontSize: '16px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              {category}
            </div>
          </div>

          {/* Center Main Title */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              zIndex: 10,
              maxWidth: '1000px',
            }}
          >
            <h1
              style={{
                fontSize: title.length > 50 ? '48px' : '58px',
                fontWeight: 800,
                color: '#fafafa',
                lineHeight: 1.15,
                letterSpacing: '-1.5px',
                margin: 0,
              }}
            >
              {title}
            </h1>
          </div>

          {/* Bottom Footer Info */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderTop: '1px solid #27272a',
              paddingTop: '24px',
              zIndex: 10,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                color: '#a1a1aa',
                fontSize: '18px',
              }}
            >
              <span style={{ fontWeight: 600, color: '#e4e4e7' }}>Richard Ewing</span>
              <span>•</span>
              <span>Systems & AI Governance</span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                color: '#71717a',
                fontSize: '16px',
                fontFamily: 'monospace',
              }}
            >
              {readingTime}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
