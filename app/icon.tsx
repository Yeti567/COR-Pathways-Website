import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#1e3a5f',
          color: '#f97316',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: -1,
          fontFamily: 'sans-serif',
        }}
      >
        CP
      </div>
    ),
    { ...size },
  );
}
