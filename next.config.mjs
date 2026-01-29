/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.supabase.co', 'images.pett.app', 'cdn.pett.app', 'pett-images-production.kevinngo03.workers.dev'],
  },
  async headers() {
    return [
      {
        // Cache profile pages on the edge for performance
        source: '/:username((?!api|invite|_next/static|_next/image|favicon.ico).*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=300, stale-while-revalidate=600' },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/profile/:slug*',
        destination: '/', // serve home to ensure 200 for Universal Links
      },
    ];
  },
};

export default nextConfig;
