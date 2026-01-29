import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Use local URL in dev, production URL in prod
const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://67time.app';

async function getShareData(shareId: string) {
  const response = await fetch(
    `${BASE_URL}/api/share/${shareId}`,
    { cache: 'no-store' }
  );
  
  if (!response.ok) {
    return null;
  }
  
  return response.json();
}

export async function generateMetadata({
  params,
}: {
  params: { shareId: string };
}): Promise<Metadata> {
  const data = await getShareData(params.shareId);

  if (!data) {
    return {
      title: '67Time - Challenge Not Found',
    };
  }

  const title = 'Beat me in 67Time';
  const description = `Start a focus session and compete with ${data.username} in 67Time`;
  const imageUrl = `${BASE_URL}/api/og/${params.shareId}`;
  const url = `${BASE_URL}/result/${params.shareId}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${data.username}'s 67Time result - ${data.formattedTime}`,
        },
      ],
      url,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    other: {
      'apple-itunes-app': `app-id=6746765317, app-argument=time67://result/${params.shareId}`,
    },
  };
}

export default async function ResultPage({
  params,
}: {
  params: { shareId: string };
}) {
  const data = await getShareData(params.shareId);

  if (!data) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8">
      <div className="max-w-2xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-bold">67Time</h1>
          <p className="text-2xl text-gray-400">Challenge Completed!</p>
        </div>

        {/* Result Card */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-12 shadow-2xl border border-gray-700">
          <div className="text-center space-y-6">
            <div className="text-sm text-gray-400 tracking-widest uppercase">
              Completed In
            </div>
            <div className="text-8xl font-bold text-yellow-500 font-mono">
              {data.formattedTime}
            </div>
            <div className="text-2xl text-gray-300">
              by <span className="text-white font-semibold">@{data.username}</span>
            </div>
            {data.isNewBest && (
              <div className="inline-flex items-center gap-2 bg-yellow-500/20 px-6 py-3 rounded-full">
                <span className="text-2xl">⚡</span>
                <span className="text-yellow-500 font-semibold tracking-wider">
                  NEW PERSONAL BEST
                </span>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-bold">Beat my score!</h2>
          <p className="text-xl text-gray-400">
            Start a focus session and compete in 67Time
          </p>

          {/* App Links */}
          <div className="space-y-4 pt-6">
            <a
              href={`time67://result/${params.shareId}`}
              className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 px-8 rounded-xl font-semibold text-lg transition shadow-lg hover:shadow-xl"
            >
              Open in 67Time App
            </a>

            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://apps.apple.com/app/id6746765317"
                className="block bg-black hover:bg-gray-900 text-white py-3 px-6 rounded-xl font-semibold transition"
              >
                <div className="text-xs text-gray-400">Download on the</div>
                <div>App Store</div>
              </a>

              {/* Disabled Google Play link as per previous file content or lack thereof, but doc has it. I'll include it but maybe comment out or leave it if user has android app. Doc says "Get it on Google Play". I will include it. */}
              <a
                href="https://play.google.com/store/apps/details?id=com.kevinngo03.time67"
                className="block bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-xl font-semibold transition"
              >
                <div className="text-xs text-green-200">Get it on</div>
                <div>Google Play</div>
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="text-center text-sm text-gray-500 pt-8">
          <p>Shared {new Date(data.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}
