import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const revalidate = 86400;

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get('title') || 'Richard Ewing | AI Systems & Sovereign Governance';
    const category = searchParams.get('category') || 'Sovereign Architecture';
    const readingTime = searchParams.get('readingTime') || 'Interactive Audit';
    const metricLabel = searchParams.get('metricLabel') || searchParams.get('ml') || '';
    const metricValue = searchParams.get('metricValue') || searchParams.get('mv') || '';
    const status = searchParams.get('status') || searchParams.get('s') || '';

    const isCritical = /critical|collapse|insolven|high|danger|negative/i.test(status);
    const statusColor = isCritical ? '#f87171' : '#34d399';
    const statusBorder = isCritical ? 'rgba(248, 113, 113, 0.35)' : 'rgba(52, 211, 153, 0.35)';
    const statusBg = isCritical ? 'rgba(248, 113, 113, 0.12)' : 'rgba(16, 185, 129, 0.12)';

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
            padding: '64px 76px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '-100px',
              right: '-100px',
              width: '450px',
              height: '450px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(16,185,129,0.16) 0%, rgba(0,0,0,0) 70%)',
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
              background: 'radial-gradient(circle, rgba(183,122,53,0.16) 0%, rgba(0,0,0,0) 70%)',
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
                  width: '38px',
                  height: '38px',
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
                backgroundColor: status ? statusBg : 'rgba(16, 185, 129, 0.1)',
                border: `1px solid ${status ? statusBorder : 'rgba(16, 185, 129, 0.3)'}`,
                padding: '8px 18px',
                borderRadius: '9999px',
                color: status ? statusColor : '#34d399',
                fontSize: '15px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              {status || category}
            </div>
          </div>

          {/* Center Main Title + Optional Live Scorecard Readout */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              zIndex: 10,
              maxWidth: '1040px',
            }}
          >
            <h1
              style={{
                fontSize: metricValue ? '44px' : title.length > 50 ? '48px' : '58px',
                fontWeight: 800,
                color: '#fafafa',
                lineHeight: 1.15,
                letterSpacing: '-1.5px',
                margin: 0,
              }}
            >
              {title}
            </h1>

            {metricValue ? (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: '#18181b',
                  border: '1px solid #27272a',
                  borderRadius: '20px',
                  padding: '22px 30px',
                  width: '100%',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '14px',
                      fontWeight: 700,
                      color: '#a1a1aa',
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                    }}
                  >
                    {metricLabel || 'Primary Audit Readout'}
                  </span>
                  <span
                    style={{
                      fontSize: '42px',
                      fontWeight: 900,
                      color: statusColor,
                      letterSpacing: '-1px',
                    }}
                  >
                    {metricValue}
                  </span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#10b981',
                    color: '#09090b',
                    padding: '12px 22px',
                    borderRadius: '12px',
                    fontSize: '16px',
                    fontWeight: 800,
                  }}
                >
                  Run Scenario on richardewing.io →
                </div>
              </div>
            ) : null}
          </div>

          {/* Bottom Footer Info */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderTop: '1px solid #27272a',
              paddingTop: '22px',
              zIndex: 10,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                color: '#a1a1aa',
                fontSize: '18px',
              }}
            >
              <span style={{ fontWeight: 700, color: '#e4e4e7' }}>Richard Ewing</span>
              <span>•</span>
              <span>Product &amp; AI Economist</span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                color: '#a1a1aa',
                fontSize: '15px',
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
        headers: {
          'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
        },
      }
    );
  } catch {
    return new Response('Failed to generate the image', {
      status: 500,
    });
  }
}
