import { createClient } from "@supabase/supabase-js";
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ClientSlugPage from "./client";
import { Profile } from "./types";
import Image from 'next/image';

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
    const title = `Beat me in 67Time`;
    const description = `${shareData.username} completed 67 in ${shareData.formattedTime}. Can you beat this time?`;
    // Use static OG image
    const imageUrl = `${BASE_URL}/og-image.png`;
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
            alt: '67Time - The Ultimate Focus Challenge',
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
      "https://67time.app/og-invite.png";

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
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-4 sm:p-8">
        <div className="max-w-md w-full space-y-6">
          {/* Header */}
          <div className="text-center flex flex-col items-center">
            {/* Logo Image */}
            <div className="relative w-24 h-24 mb-4">
              <Image 
                src="/logo.png" 
                alt="67Time Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
            <h1 className="text-5xl font-bold">67Time</h1>
          </div>

          {/* Result Card */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-gray-700">
            <div className="text-center space-y-4">
              <div className="text-xs text-gray-400 tracking-widest uppercase">
                Best Time
              </div>
              <div className="text-6xl sm:text-7xl font-bold text-yellow-500 font-mono tracking-tighter break-all">
                {shareData.formattedTime}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Beat {shareData.username}'s score!</h2>
            <p className="text-lg text-gray-400">
              Download 67Time and start your focus session
            </p>

            {/* App Links */}
            <div className="space-y-4 pt-4 flex flex-col items-center">
              <div className="grid grid-cols-1 gap-4 w-full">
                <a
                  href={`https://apps.apple.com/app/id${process.env.NEXT_PUBLIC_APP_STORE_ID}`}
                  className="block bg-black hover:bg-gray-900 text-white py-3.5 px-6 rounded-xl font-semibold transition flex items-center justify-center gap-3 w-full"
                >
                  <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.96 1.07-3.11-1.05.05-2.31.74-3.03 1.58-.67.77-1.24 2.02-1.09 3.12 1.15.09 2.33-.76 3.05-1.59" />
                  </svg>
                  <span className="text-lg">Download on the App Store</span>
                </a>
              </div>

              <a
                href={`time67://${params.username}`}
                className="block w-full bg-[#FF3B30] hover:bg-[#D73329] text-white py-3.5 px-6 rounded-xl font-semibold text-lg transition shadow-lg hover:shadow-xl"
              >
                Open in 67Time App
              </a>
            </div>
          </div>

          {/* Last Updated */}
          <div className="text-center text-xs text-gray-500 pt-4 pb-8">
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
