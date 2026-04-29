import { ImageResponse } from 'next/og'

export const alt =
  'COR Pathways: COR certification, H&S program management, and contractor compliance for Canadian construction'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #0D1F3C 0%, #163258 100%)',
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
            color: '#34D399',
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: 'uppercase',
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              background: '#34D399',
              color: '#0D1F3C',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 22,
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
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 1000,
            }}
          >
            Your path to COR certification starts here.
          </div>
          <div
            style={{
              fontSize: 30,
              color: '#cbd5e1',
              lineHeight: 1.3,
              maxWidth: 920,
            }}
          >
            COR consulting in Ontario. H&S program management across Alberta, BC, Saskatchewan. Built by an NCSO.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 28,
            color: '#94a3b8',
            fontSize: 22,
            fontWeight: 600,
          }}
        >
          <span>IHSA-aligned</span>
          <span style={{ color: '#475569' }}>·</span>
          <span>COR 2020 standard</span>
          <span style={{ color: '#475569' }}>·</span>
          <span>Ottawa deadline: Jan 1, 2027</span>
        </div>
      </div>
    ),
    { ...size },
  )
}
