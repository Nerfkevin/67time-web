import { createClient } from "@supabase/supabase-js";
import { Metadata } from "next";
import ClientSlugPage from "./client";
import { Profile } from "./types";
import { notFound } from "next/navigation";

// Helper to build R2 image URL
const getImageUrlFromR2Key = (r2Key: string | null | undefined): string | null => {
  if (!r2Key) return null;
  return `https://pett-images-production.kevinngo03.workers.dev/image/${r2Key}`;
};

export const revalidate = 300; // ISR 5 minutes

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

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const profile = await getProfile(params.slug);
  const deepLinkUrl = `https://67time.app/${params.slug}`;
  
  if (!profile) {
    return {
      title: "67Time",
      description: "Social photo app",
    };
  }

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

export default async function Page({ params }: { params: { slug: string } }) {
  const profile = await getProfile(params.slug);

  if (!profile) {
    notFound();
  }

  const avatarUrl =
    getImageUrlFromR2Key(profile.avatar_r2_key) ||
    profile.avatar ||
    "https://67time.app/og-invite.jpg";

  return (
    <ClientSlugPage
      slug={params.slug}
      profile={profile}
      avatarUrl={avatarUrl}
      inviteCode={profile.invite_code}
    />
  );
}
