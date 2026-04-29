import { ImageResponse } from 'next/og';

export const alt =
  'COR Pathways: COR 2020 certification software for Ontario and Alberta construction companies';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #1e3a5f 0%, #0c4a6e 100%)',
          color: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            color: '#f97316',
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: 'uppercase',
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              background: '#f97316',
              color: '#1e3a5f',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 24,
              fontWeight: 800,
              borderRadius: 8,
            }}
          >
            CP
          </div>
          <span>COR Pathways</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 1000,
            }}
          >
            COR 2020 certification, in 3 to 9 months.
          </div>
          <div
            style={{
              fontSize: 32,
              color: '#cbd5e1',
              lineHeight: 1.3,
              maxWidth: 900,
            }}
          >
            The digital safety management platform for construction companies in Ontario and Alberta.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 32,
            color: '#94a3b8',
            fontSize: 22,
            fontWeight: 600,
          }}
        >
          <span>3 months in Alberta</span>
          <span style={{ color: '#475569' }}>·</span>
          <span>9 months in Ontario</span>
          <span style={{ color: '#475569' }}>·</span>
          <span>14-day free trial</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
