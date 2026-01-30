import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

// Use local URL in dev, production URL in prod
const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://67time.app';

async function getUserData(username: string) {
  const response = await fetch(
    `${BASE_URL}/api/user/${username}`,
    { cache: 'no-store' }
  );
  
  if (!response.ok) {
    return null;
  }
  
  return response.json();
}

export async function GET(
  request: NextRequest,
  { params }: { params: { username: string } }
) {
  try {
    const data = await getUserData(params.username);
    
    if (!data) {
      // Return default image if user not found
      return new ImageResponse(
        (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
              backgroundColor: '#1a1a1a',
              color: 'white',
            }}
          >
            <div style={{ fontSize: 80, marginBottom: 40 }}>⏱️</div>
            <div style={{ fontSize: 60, fontWeight: 'bold' }}>67Time</div>
          </div>
        ),
        {
          width: 1200,
          height: 630,
        }
      );
    }

    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#1a1a1a',
            backgroundImage: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
            padding: '60px',
          }}
        >
          {/* Logo Section */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 60,
            }}
          >
            <div
              style={{
                fontSize: 120,
                fontWeight: 'bold',
                color: 'white',
                letterSpacing: '-4px',
              }}
            >
              67Time
            </div>
          </div>

          {/* Time Display */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: 30,
              padding: '40px 80px',
              marginBottom: 40,
            }}
          >
            <div
              style={{
                fontSize: 24,
                color: '#999',
                letterSpacing: '4px',
                marginBottom: 20,
                fontWeight: 600,
              }}
            >
              BEST TIME
            </div>
            <div
              style={{
                fontSize: 140,
                fontWeight: 'bold',
                color: '#FFD700',
                fontFamily: 'monospace',
              }}
            >
              {data.formattedTime}
            </div>
          </div>

          {/* Username */}
          <div
            style={{
              fontSize: 36,
              color: '#ccc',
              marginBottom: 20,
            }}
          >
            by @{data.username}
          </div>

          {/* Completions */}
          <div
            style={{
              fontSize: 24,
              color: '#888',
              marginBottom: 40,
            }}
          >
            {data.completions} completions
          </div>

          {/* CTA */}
          <div
            style={{
              fontSize: 32,
              color: '#888',
              marginTop: 60,
            }}
          >
            Can you beat this score?
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    console.error('Error generating OG image:', error);
    
    // Return fallback image
    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#1a1a1a',
            color: 'white',
            fontSize: 60,
          }}
        >
          67Time - The Ultimate Challenge
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  }
}
