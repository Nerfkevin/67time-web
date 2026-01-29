# 67Time Sharing Feature Setup Guide

Complete setup guide for implementing the sharing feature in 67Time, allowing users to share their results as images on social media platforms.

## Table of Contents
1. [Overview](#overview)
2. [Mobile App Setup](#mobile-app-setup)
3. [Website Setup](#website-setup)
4. [Facebook App Configuration](#facebook-app-configuration)
5. [Apple App Site Association](#apple-app-site-association)
6. [Testing](#testing)

---

## Overview

The sharing feature allows users to:
- Share their workout results as beautifully formatted images
- Post to Instagram Stories, Facebook Stories, SMS, and system share
- Generate shareable links with Open Graph tags that display result previews
- Deep link back to the app from shared links

**Implementation based on Pett's sharing system** with "Beat my score on 67Time" context.

---

## Mobile App Setup

### Dependencies Installed
```json
{
  "expo-sharing": "^latest",
  "expo-sms": "^latest",
  "react-native-view-shot": "^latest",
  "react-native-share": "^latest",
  "expo-image-manipulator": "^latest",
  "react-native-photo-manipulator": "^latest"
}
```

### Files Created
- `services/shareService.ts` - Platform-specific sharing logic
- `services/watermarkService.ts` - Image watermarking
- `components/ResultImageCapture.tsx` - Captures results as images
- `components/ShareModal.tsx` - Share UI modal

### Deep Linking Configuration

#### app.json
Already configured with:
- **iOS Associated Domains**: `67time.app`, `www.67time.app`
- **Android Intent Filters**: Auto-verify enabled for deep links
- **Custom URL Scheme**: `time67://`

#### _layout.tsx
Deep linking configuration added with URL event handlers.

---

## Website Setup

You need to set up a website at **67time.app** to handle shared links and Open Graph meta tags.

### Required Pages

#### 1. Result Landing Page
Create a dynamic route: `/result/[shareId]`

This page should:
- Display a preview of the shared result
- Show Open Graph meta tags for rich unfurling on social media
- Display a "Beat My Score" call-to-action
- Include Smart App Banner for iOS and Play Store badge for Android
- Deep link to app when clicked

**Example Next.js Implementation:**

```tsx
// pages/result/[shareId].tsx or app/result/[shareId]/page.tsx
import Head from 'next/head';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const shareId = params?.shareId as string;
  
  // Fetch result data from your backend/database
  // const resultData = await fetchResultData(shareId);
  
  return {
    props: {
      shareId,
      // resultData,
      username: 'user', // From your backend
      time: '1:23.456', // From your backend
      reps: 67,
    },
  };
};

export default function ResultShare({ shareId, username, time, reps }) {
  const title = `${username}'s 67Time Result - ${time}`;
  const description = `I completed ${reps} reps in ${time}! Can you beat my score?`;
  const imageUrl = `https://67time.app/api/og/${shareId}`; // Generate OG image
  const appUrl = `https://67time.app/result/${shareId}`;

  return (
    <>
      <Head>
        {/* Smart App Banner for iOS */}
        <meta 
          name="apple-itunes-app" 
          content={`app-id=YOUR_APP_STORE_ID, app-argument=time67://result/${shareId}`} 
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={appUrl} />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />

        {/* Android Play Store Link */}
        <link 
          rel="alternate" 
          href="https://play.google.com/store/apps/details?id=com.kevinngo03.time67" 
        />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">
          {username}'s 67Time Result
        </h1>
        
        <div className="bg-gray-100 rounded-lg p-8 mb-6">
          <p className="text-6xl font-bold mb-2">{time}</p>
          <p className="text-xl text-gray-600">{reps} reps completed</p>
        </div>

        <h2 className="text-2xl font-semibold mb-6">
          Beat my score on 67Time!
        </h2>

        <div className="space-y-4 w-full max-w-sm">
          <a 
            href={`time67://result/${shareId}`}
            className="block w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Open in 67Time App
          </a>
          
          <a 
            href="https://apps.apple.com/app/id-YOUR_APP_STORE_ID"
            className="block w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Download on the App Store
          </a>
          
          <a 
            href="https://play.google.com/store/apps/details?id=com.kevinngo03.time67"
            className="block w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Get it on Google Play
          </a>
        </div>

        <p className="mt-8 text-sm text-gray-500">
          67Time - The Ultimate Fitness Challenge
        </p>
      </main>
    </>
  );
}
```

#### 2. Open Graph Image Generator (Optional but Recommended)

Create an API route to generate dynamic OG images: `/api/og/[shareId]`

You can use libraries like:
- `@vercel/og` (for Vercel deployments)
- `node-canvas` (for custom servers)
- Pre-generated images stored in a CDN

**Example with @vercel/og:**

```tsx
// pages/api/og/[shareId].tsx
import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const shareId = searchParams.get('shareId');
  
  // Fetch result data
  // const data = await fetchResultData(shareId);
  const username = 'user'; // From backend
  const time = '1:23.456'; // From backend
  
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
          fontSize: 60,
          fontWeight: 'bold',
        }}
      >
        <div style={{ fontSize: 80, marginBottom: 40 }}>🏆</div>
        <div>67Time Challenge</div>
        <div style={{ fontSize: 120, margin: '40px 0' }}>{time}</div>
        <div style={{ fontSize: 40, opacity: 0.8 }}>by @{username}</div>
        <div style={{ fontSize: 40, marginTop: 60, opacity: 0.6 }}>
          Beat my score!
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
```

### Next.js Configuration

Add caching headers in `next.config.js`:

```js
module.exports = {
  async headers() {
    return [
      {
        source: '/result/:shareId',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=300, s-maxage=600',
          },
        ],
      },
    ];
  },
};
```

---

## Facebook App Configuration

To enable Facebook and Instagram Stories sharing, you need to set up a Facebook App.

### Step 1: Create Facebook App

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click **"My Apps"** → **"Create App"**
3. Select **"Consumer"** as the app type
4. Fill in:
   - **App Name**: 67Time
   - **App Contact Email**: your-email@example.com
5. Click **"Create App"**

### Step 2: Configure App Settings

1. In the left sidebar, go to **Settings** → **Basic**
2. Add **App Domains**: `67time.app`
3. Add **Privacy Policy URL**: `https://67time.app/privacy`
4. Add **Terms of Service URL**: `https://67time.app/terms`
5. Select **Category**: Health & Fitness

### Step 3: Add iOS Platform

1. Click **"Add Platform"** → Select **iOS**
2. Fill in:
   - **Bundle ID**: `com.kevinngo03.67time`
   - **App Store ID**: Your App Store ID (get this after app submission)
3. Click **"Save Changes"**

### Step 4: Add Android Platform

1. Click **"Add Platform"** → Select **Android**
2. Fill in:
   - **Google Play Package Name**: `com.kevinngo03.time67`
   - **Key Hashes**: Generate using command below
3. Click **"Save Changes"**

**Generate Android Key Hash:**

For development:
```bash
keytool -exportcert -alias androiddebugkey -keystore ~/.android/debug.keystore | openssl sha1 -binary | openssl base64
```

For production (use your release keystore):
```bash
keytool -exportcert -alias your-key-alias -keystore your-release-key.keystore | openssl sha1 -binary | openssl base64
```

### Step 5: Get App ID and Client Token

1. In **Settings** → **Basic**, note:
   - **App ID**: e.g., `1234567890123456`
   - **Client Token**: Click **"Show"** to reveal

### Step 6: Enable Instagram Platform (Optional)

1. In left sidebar, click **"Add Products"**
2. Find **"Instagram"** and click **"Set Up"**
3. Complete Instagram Basic Display setup if you want additional Instagram features

### Step 7: Make App Public (When Ready)

1. Toggle the app from **"Development"** to **"Live"** mode
2. You'll need to complete:
   - Privacy Policy
   - Data Deletion Instructions URL
   - App Review (if using advanced features)

### Notes:
- For basic sharing (Instagram/Facebook Stories), you don't need app review
- The app uses native sharing sheets, not Facebook SDK authentication
- Facebook App ID is mainly for app attribution and analytics

---

## Apple App Site Association

To enable Universal Links on iOS, you need to host an Apple App Site Association (AASA) file on your website.

### Step 1: Create AASA File

Create a file at: `https://67time.app/.well-known/apple-app-site-association`

**Content (no file extension):**

```json
{
  "applinks": {
    "apps": [],
    "details": [
      {
        "appID": "TEAM_ID.com.kevinngo03.67time",
        "paths": [
          "/result/*",
          "/challenge/*",
          "*"
        ]
      }
    ]
  },
  "webcredentials": {
    "apps": [
      "TEAM_ID.com.kevinngo03.67time"
    ]
  }
}
```

**Replace `TEAM_ID` with your Apple Developer Team ID:**
- Find it in [Apple Developer Account](https://developer.apple.com/account)
- Under **Membership** section

### Step 2: Host the File

Requirements:
- ✅ Must be served over **HTTPS**
- ✅ Must be at path: `/.well-known/apple-app-site-association`
- ✅ Must have **no file extension**
- ✅ Must return `Content-Type: application/json`
- ✅ Must be publicly accessible (not behind authentication)

**Vercel/Netlify Example:**

Place file in `public/.well-known/apple-app-site-association`

**Next.js Example (pages router):**

```js
// pages/.well-known/apple-app-site-association.ts
export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    applinks: {
      apps: [],
      details: [
        {
          appID: 'TEAM_ID.com.kevinngo03.67time',
          paths: ['/result/*', '/challenge/*', '*'],
        },
      ],
    },
    webcredentials: {
      apps: ['TEAM_ID.com.kevinngo03.67time'],
    },
  });
}
```

### Step 3: Verify AASA File

Test your AASA file:

1. **Apple's AASA Validator:**
   - Visit: https://search.developer.apple.com/appsearch-validation-tool/
   - Enter: `https://67time.app`
   - Check for errors

2. **Manual Test:**
   ```bash
   curl -I https://67time.app/.well-known/apple-app-site-association
   ```
   Should return:
   ```
   HTTP/2 200
   content-type: application/json
   ```

3. **Test on Device:**
   - Install app on iOS device
   - Open Safari, navigate to `https://67time.app/result/test`
   - Long press the link → Should show **"Open in 67Time"**

---

## Android App Links

For Android deep linking verification:

### Step 1: Create assetlinks.json

Create file at: `https://67time.app/.well-known/assetlinks.json`

```json
[
  {
    "relation": ["delegate_permission/common.handle_all_urls"],
    "target": {
      "namespace": "android_app",
      "package_name": "com.kevinngo03.time67",
      "sha256_cert_fingerprints": [
        "YOUR_SHA256_FINGERPRINT_HERE"
      ]
    }
  }
]
```

### Step 2: Get SHA256 Fingerprint

**For development (debug keystore):**
```bash
keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android
```

**For production (release keystore):**
```bash
keytool -list -v -keystore your-release-key.keystore -alias your-key-alias
```

Look for the **SHA256** value in the output.

### Step 3: Verify Android App Links

Test your configuration:

1. **Google's Statement List Generator:**
   - Visit: https://developers.google.com/digital-asset-links/tools/generator
   - Enter your package name and fingerprint
   - Verify against your hosted file

2. **adb Test:**
   ```bash
   adb shell am start -W -a android.intent.action.VIEW -d "https://67time.app/result/test" com.kevinngo03.time67
   ```

---

## Testing

### Test Sharing Flow

1. **Complete a challenge** in the app
2. On the **Results** screen, tap **"Share Result"**
3. Select a platform (Instagram, Facebook, SMS, or More)
4. Verify:
   - Image is captured correctly
   - Watermark is visible
   - Share dialog appears
   - Content is posted successfully

### Test Deep Links

#### iOS:
```bash
xcrun simctl openurl booted "time67://result/test123"
```

#### Android:
```bash
adb shell am start -W -a android.intent.action.VIEW -d "time67://result/test123" com.kevinngo03.time67
```

### Test Universal Links

1. **Create a test page** at `https://67time.app/result/test123`
2. **Send the link** via iMessage or Notes
3. **Tap the link**
4. **Verify**:
   - App opens (if installed)
   - OR website opens with "Open in App" button

### Test Open Graph

1. **Share the link** on Slack, Discord, Twitter, or Facebook
2. **Verify preview shows**:
   - Title: "Username's 67Time Result - Time"
   - Description: "I completed 67 reps in [time]! Can you beat my score?"
   - Image: Result preview

---

## Troubleshooting

### Sharing not working

1. **Check dependencies are installed:**
   ```bash
   npm list expo-sharing expo-sms react-native-view-shot
   ```

2. **Rebuild the app:**
   ```bash
   npx expo prebuild --clean
   npm run ios # or npm run android
   ```

3. **Check permissions in Info.plist (iOS):**
   - Photo library access

### Deep links not working

1. **Verify AASA file is accessible:**
   ```bash
   curl https://67time.app/.well-known/apple-app-site-association
   ```

2. **Check app.json configuration**
3. **Reinstall the app** (deep link associations cache)
4. **Test with developer mode:**
   - iOS Settings → Developer → Universal Links → Reset All

### Open Graph not showing

1. **Clear cache:**
   - Facebook Debugger: https://developers.facebook.com/tools/debug/
   - Twitter Card Validator: https://cards-dev.twitter.com/validator
   - LinkedIn Inspector: https://www.linkedin.com/post-inspector/

2. **Verify meta tags are in `<head>`**
3. **Check image is publicly accessible**
4. **Image requirements:**
   - Minimum 200x200px
   - Recommended 1200x630px
   - Maximum 8MB file size

---

## Next Steps

1. ✅ **Create 67Time website** at 67time.app
2. ✅ **Set up result landing pages** with Open Graph tags
3. ✅ **Create Facebook App** and configure platforms
4. ✅ **Host AASA and assetlinks.json files**
5. ✅ **Submit app to App Store and Play Store**
6. ✅ **Test sharing flow** end-to-end
7. ✅ **Monitor analytics** for shared links

---

## Additional Resources

- [Expo Linking Documentation](https://docs.expo.dev/guides/linking/)
- [Facebook Sharing Documentation](https://developers.facebook.com/docs/sharing/)
- [Apple Universal Links](https://developer.apple.com/ios/universal-links/)
- [Android App Links](https://developer.android.com/training/app-links)
- [Open Graph Protocol](https://ogp.me/)

---

## Support

For issues or questions:
- Check existing GitHub issues
- Create a new issue with detailed logs
- Include platform (iOS/Android), app version, and steps to reproduce
