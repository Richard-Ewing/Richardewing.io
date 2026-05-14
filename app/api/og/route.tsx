import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);

        const title = searchParams.get('title') || 'Enterprise Governance Intelligence';
        const type = searchParams.get('type') || 'Benchmark Report';
        const score = searchParams.get('score');
        const metric = searchParams.get('metric');

        return new ImageResponse(
            (
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        backgroundColor: '#09090b', // zinc-950
                        padding: '80px',
                        fontFamily: 'sans-serif',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '40px',
                        }}
                    >
                        <div
                            style={{
                                color: '#10b981', // emerald-500
                                fontSize: 32,
                                fontWeight: 800,
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                marginRight: '20px',
                            }}
                        >
                            RichardEwing.io
                        </div>
                        <div
                            style={{
                                height: '32px',
                                width: '2px',
                                backgroundColor: '#27272a', // zinc-800
                                marginRight: '20px',
                            }}
                        />
                        <div
                            style={{
                                color: '#a1a1aa', // zinc-400
                                fontSize: 32,
                                letterSpacing: '0.05em',
                                textTransform: 'uppercase',
                            }}
                        >
                            {type}
                        </div>
                    </div>

                    <div
                        style={{
                            fontSize: 72,
                            fontWeight: 900,
                            color: '#ffffff',
                            lineHeight: 1.1,
                            letterSpacing: '-0.02em',
                            marginBottom: '40px',
                            maxWidth: '900px',
                        }}
                    >
                        {title}
                    </div>

                    {score && metric && (
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'baseline',
                                marginTop: 'auto',
                                borderTop: '2px solid #27272a',
                                paddingTop: '40px',
                                width: '100%',
                            }}
                        >
                            <div style={{ fontSize: 100, fontWeight: 900, color: '#f43f5e', marginRight: '20px' }}>
                                {score}
                            </div>
                            <div style={{ fontSize: 40, fontWeight: 700, color: '#a1a1aa' }}>
                                {metric}
                            </div>
                        </div>
                    )}
                </div>
            ),
            {
                width: 1200,
                height: 630,
            }
        );
    } catch (e: any) {
        console.error(`${e.message}`);
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}
