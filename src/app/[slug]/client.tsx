"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Copy, PawPrint } from "lucide-react";
import { Profile } from "./types";

interface Props {
  slug: string;
  profile: Profile | null;
  avatarUrl: string;
  inviteCode: string | null;
}

export default function ClientSlugPage({ slug, profile, avatarUrl, inviteCode }: Props) {
  const deepLinkUrl = `https://67time.app/${slug}`;
  const [copied, setCopied] = useState(false);
  const [showMobilePopup, setShowMobilePopup] = useState(false);

  useEffect(() => {
    // Check if user is on mobile and potentially from TikTok
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      setShowMobilePopup(true);
      // Auto redirect to App Store after 3 seconds
      setTimeout(() => {
        // Update App ID when known
        window.location.href = 'https://apps.apple.com/app/id6746765317'; 
      }, 3000);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-blue-200 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 text-pink-400 opacity-60 animate-float">
        <PawPrint size={24} />
      </div>
      <div className="absolute bottom-20 right-10 text-blue-400 opacity-60 animate-float" style={{ animationDelay: "1.5s" }}>
        <PawPrint size={20} />
      </div>
      <div className="absolute top-1/2 left-1/4 text-pink-400 opacity-40 animate-float hidden sm:block" style={{ animationDelay: "3s" }}>
        <PawPrint size={20} />
      </div>
      
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-pink-200 to-pink-100 rounded-full opacity-50 blur-xl"></div>
      <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-gradient-to-tr from-blue-200 to-blue-100 rounded-full opacity-40 blur-xl"></div>
      
      {/* Mobile TikTok Popup */}
      {showMobilePopup && (
        <div className="fixed top-4 right-4 bg-white rounded-2xl p-6 max-w-xs w-80 shadow-2xl z-50 text-left text-sm leading-relaxed text-gray-700 md:hidden">
          <div className="absolute -top-2 right-3 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-white"></div>
          <p>
            On{' '}
            <span className="inline-block w-6 h-6 bg-cover bg-center bg-no-repeat rounded-full mx-1 align-middle" 
                  style={{ backgroundImage: "url('/tiktokicon.webp')", backgroundSize: '80%' }}></span>
            {' '}you need to tap on the{' '}
            <span className="inline-block w-6 h-6 bg-gray-600 rounded-full mx-1 align-middle relative">
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs font-bold">⋯</span>
            </span>
            {' '}and then tap on{' '}
            <span className="text-blue-500 font-bold">"Open in browser"</span>
            {' '}to download the app for free.
          </p>
          <button 
            onClick={() => setShowMobilePopup(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-lg font-bold"
          >
            ×
          </button>
        </div>
      )}
      
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-start text-center p-6 pt-10">
      <Image
        src="/watermarkBlackDrop.png"
        alt="67Time watermark"
        width={150}
        height={150}
        className="mb-2"
        priority
      />
      <div className="flex flex-col items-center space-y-6 max-w-xs">
          <Image
            src={avatarUrl}
            alt={profile?.name || profile?.username || "User avatar"}
            width={120}
            height={120}
            className="rounded-full object-cover"
          />
          <h1 className="text-xl font-semibold">
            Join {profile?.name || profile?.username} on 67Time.
          </h1>
          <p className="text-sm text-gray-600">
            You&apos;ll both receive <strong>300 FREE Points</strong> when you sign up.
          </p>
          {inviteCode && (
            <div className="flex items-center gap-2">
              <code className="bg-white px-4 py-2 rounded-md font-mono text-lg tracking-widest">
                {inviteCode}
              </code>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(inviteCode as string);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1500);
                }}
                aria-label="Copy invite code"
                className="p-1 text-gray-600 hover:text-black"
              >
                <Copy size={18} />
              </button>
            </div>
          )}
          {copied && <span className="text-xs text-green-600">Copied!</span>}
          <p className="text-xs text-gray-400">Copy this code and paste it in 67Time after download!</p>
          <a
            href="https://apps.apple.com/app/id6746765317"
            className="mt-4 inline-block bg-black text-white px-4 py-2 rounded-xl text-sm font-medium"
          >
            Download 67Time on the App Store
          </a>
      </div>
    </main>
    </div>
  );
}
