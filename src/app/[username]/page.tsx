import { createClient } from "@supabase/supabase-js";
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ClientSlugPage from "./client";
import { Profile } from "./types";

// Helper to build R2 image URL
const getImageUrlFromR2Key = (r2Key: string | null | undefined): string | null => {
  if (!r2Key) return null;
  return `https://pett-images-production.kevinngo03.workers.dev/image/${r2Key}`;
};

// Use local URL in dev, production URL in prod
const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://67time.app';

// Helper to fetch user data for the share/leaderboard page
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

// Helper to fetch profile data for the profile/invite page
async function getProfile(slug: string) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Missing Supabase environment variables");
    return null;
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const { data: profile } = await supabase
    .from("users")
    .select("id, username, name, avatar, avatar_r2_key, invite_code")
    .ilike("username", slug)
    .single();

  return profile as Profile | null;
}

export async function generateMetadata({
  params,
}: {
  params: { username: string };
}): Promise<Metadata> {
  // First try to fetch as a leaderboard/share user
  const shareData = await getUserData(params.username);

  if (shareData) {
    const title = `Beat ${shareData.username} in 67Time`;
    const description = `${shareData.username} completed 67 reps in ${shareData.formattedTime}. Can you beat this score?`;
    const imageUrl = `${BASE_URL}/api/og/${params.username}`;
    const url = `${BASE_URL}/${params.username}`;

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
            alt: `${shareData.username}'s 67Time best score - ${shareData.formattedTime}`,
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
        'apple-itunes-app': `app-id=${process.env.NEXT_PUBLIC_APP_STORE_ID}, app-argument=time67://${params.username}`,
      },
    };
  }

  // If not a share result, try as a profile/invite page
  const profile = await getProfile(params.username);
  
  if (profile) {
    const deepLinkUrl = `https://67time.app/${params.username}`;
    const avatarUrl =
      getImageUrlFromR2Key(profile.avatar_r2_key) ||
      profile.avatar ||
      "https://67time.app/og-invite.jpg";

    const titleText = `Add ${profile.name || profile.username} on 67Time.`;
    const descriptionText = "I want to see your photos on 67Time! Tap the link to accept.";

    return {
      title: titleText,
      openGraph: {
        title: titleText,
        description: descriptionText,
        images: [avatarUrl],
        url: deepLinkUrl,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        images: [avatarUrl],
      },
      other: {
          "apple-itunes-app": `app-id=6746765317, app-argument=${deepLinkUrl}`,
          "al:ios:url": deepLinkUrl,
          "al:ios:app_store_id": "6746765317",
          "al:ios:app_name": "67Time",
          "al:web:url": deepLinkUrl,
      }
    };
  }

  return {
    title: '67Time - User Not Found',
  };
}

export default async function UserPage({
  params,
}: {
  params: { username: string };
}) {
  // 1. Try to fetch as a Share/Leaderboard Result first
  const shareData = await getUserData(params.username);

  if (shareData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8">
        <div className="max-w-2xl w-full space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-6xl font-bold">67Time</h1>
            <p className="text-2xl text-gray-400">Challenge</p>
          </div>

          {/* Result Card */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-12 shadow-2xl border border-gray-700">
            <div className="text-center space-y-6">
              <div className="text-sm text-gray-400 tracking-widest uppercase">
                Best Time
              </div>
              <div className="text-8xl font-bold text-yellow-500 font-mono">
                {shareData.formattedTime}
              </div>
              <div className="text-2xl text-gray-300">
                by <span className="text-white font-semibold">@{shareData.username}</span>
              </div>
              <div className="text-lg text-gray-400">
                {shareData.completions} completions
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold">Beat {shareData.username}'s score!</h2>
            <p className="text-xl text-gray-400">
              Download 67Time and start your focus session
            </p>

            {/* App Links */}
            <div className="space-y-4 pt-6">
              <a
                href={`time67://${params.username}`}
                className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 px-8 rounded-xl font-semibold text-lg transition shadow-lg hover:shadow-xl"
              >
                Open in 67Time App
              </a>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href={`https://apps.apple.com/app/id${process.env.NEXT_PUBLIC_APP_STORE_ID}`}
                  className="block bg-black hover:bg-gray-900 text-white py-3 px-6 rounded-xl font-semibold transition"
                >
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div>App Store</div>
                </a>

                <a
                  href={`https://play.google.com/store/apps/details?id=${process.env.NEXT_PUBLIC_PLAY_STORE_ID}`}
                  className="block bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-xl font-semibold transition"
                >
                  <div className="text-xs text-green-200">Get it on</div>
                  <div>Google Play</div>
                </a>
              </div>
            </div>
          </div>

          {/* Last Updated */}
          <div className="text-center text-sm text-gray-500 pt-8">
            <p>Last updated {new Date(shareData.lastUpdated).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    );
  }

  // 2. If no share data, try to fetch as a Profile (Invite)
  const profile = await getProfile(params.username);

  if (profile) {
    const avatarUrl =
      getImageUrlFromR2Key(profile.avatar_r2_key) ||
      profile.avatar ||
      "https://67time.app/og-invite.jpg";

    return (
      <ClientSlugPage
        slug={params.username}
        profile={profile}
        avatarUrl={avatarUrl}
        inviteCode={profile.invite_code}
      />
    );
  }

  // 3. If neither, 404
  notFound();
}
