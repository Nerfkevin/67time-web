# Static OG Image Setup - 67Time Logo Only

Simple setup for sharing links with a static 67Time logo image (not dynamic).

## Overview

**What users see when sharing:**
- Link preview shows: 67Time logo (static image)
- Title: "Beat me in 67Time"
- Description: "Start a focus session and compete with [username] in 67Time"

**When sharing to Stories (Instagram/Facebook):**
- App captures score card using react-native-view-shot ✅ (already working)
- Users can add the link as text/sticker

---

## Step 1: Create Static OG Image

### Option A: Design Your Own (Recommended)

Create a 1200x630 image with:
- 67Time logo/branding
- Tagline (optional): "The Ultimate Focus Challenge"
- Background color matching your brand
- Clean, simple design

**Requirements:**
- Dimensions: **Exactly 1200x630 pixels**
- Format: PNG or JPG
- File size: < 1MB (smaller is better)
- No text smaller than 18px (readability)

**Design Tools:**
- Figma (free)
- Canva (free templates for OG images)
- Photoshop
- Sketch

**Template proportions:**
```
┌─────────────────────────────────────┐
│                                     │ 
│          [67Time Logo]              │  1200px wide
│                                     │
│   The Ultimate Focus Challenge      │  630px tall
│                                     │
└─────────────────────────────────────┘
```

### Option B: Use Text-Based Image (Quick & Simple)

If you don't have a logo yet, create a simple text-based image:

**Using Figma:**
1. Create new frame: 1200x630
2. Background: Dark gradient (#1a1a1a to #2d2d2d)
3. Add text: "67Time" (large, bold, white)
4. Add subtext: "The Ultimate Focus Challenge" (smaller, gray)
5. Export as PNG

**Using Canva:**
1. Go to canva.com
2. Search "Open Graph Image"
3. Customize with 67Time branding
4. Download as PNG

### Option C: Simple Code-Generated Image

I can help you create a simple one using HTML/CSS if needed.

---

## Step 2: Add Image to Website

### File Structure

```
your-website/
├── public/
│   └── og-image.png          ← Your 1200x630 image here
├── app/
│   ├── [username]/
│   │   └── page.tsx
│   └── api/
│       └── user/
│           └── [username]/
│               └── route.ts
└── .env.local
```

### Instructions

1. **Save your image as `og-image.png`**
2. **Place it in the `public/` folder** of your Next.js project
3. **Verify it's accessible:**
   ```bash
   # After deploying
   https://67time.app/og-image.png
   # Should show your image
   ```

---

## Step 3: Update Landing Page Code

### File: `app/[username]/page.tsx`

**Replace the entire file with this:**

```typescript
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

async function getUserData(username: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/user/${username}`,
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
  params: { username: string };
}): Promise<Metadata> {
  const data = await getUserData(params.username);

  if (!data) {
    return {
      title: '67Time - User Not Found',
    };
  }

  const title = 'Beat me in 67Time';
  const description = `Start a focus session and compete with ${data.username} in 67Time`;
  // Static OG image - same for everyone
  const imageUrl = `${process.env.NEXT_PUBLIC_APP_URL}/og-image.png`;
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/${params.username}`;

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

export default async function UserPage({
  params,
}: {
  params: { username: string };
}) {
  const data = await getUserData(params.username);

  if (!data) {
    notFound();
  }

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
              {data.formattedTime}
            </div>
            <div className="text-2xl text-gray-300">
              by <span className="text-white font-semibold">@{data.username}</span>
            </div>
            <div className="text-lg text-gray-400">
              {data.completions} completions
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-bold">Beat {data.username}'s score!</h2>
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
          <p>Last updated {new Date(data.lastUpdated).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}
```

**Key Changes:**
- ✅ Uses static image: `/og-image.png`
- ✅ Same image for all users
- ✅ Simpler description
- ✅ No dynamic image generation needed

---

## Step 4: Remove Dynamic OG Image API (Optional)

Since you don't need it, you can **delete this folder:**
```
app/api/og/
```

This simplifies your website - less code to maintain!

---

## Simplified File Structure

Now your website only needs:

```
your-website/
├── public/
│   └── og-image.png                     ✅ Static logo image
├── app/
│   ├── [username]/
│   │   └── page.tsx                     ✅ Landing page
│   └── api/
│       └── user/
│           └── [username]/
│               └── route.ts             ✅ User data API
└── .env.local                          ✅ Environment variables
```

**Just 3 files + 1 image!**

---

## Testing

### 1. Test Image is Accessible

```bash
# After deploying
open https://67time.app/og-image.png

# Should show your 67Time logo image
```

### 2. Test Landing Page

```bash
# Open in browser
open https://67time.app/your_username

# View page source (right-click → View Page Source)
# Search for: og:image
# Should find: content="https://67time.app/og-image.png"
```

### 3. Test Facebook Preview

1. Go to: https://developers.facebook.com/tools/debug/
2. Enter: `https://67time.app/your_username`
3. Click "Debug"
4. Click "Scrape Again"

**You should see:**
- ✅ Title: "Beat me in 67Time"
- ✅ Description: "Start a focus session and compete with [username]..."
- ✅ Image: Your 67Time logo (1200x630)
- ✅ No errors

### 4. Test Real Share

Share the link on Facebook/Twitter/iMessage:
- ✅ Preview shows 67Time logo
- ✅ Title and description show
- ✅ Link is clickable

---

## Comparison: Link Sharing vs Stories Sharing

### When Sharing Link (Facebook/Twitter/iMessage):
```
┌─────────────────────────────┐
│  [67Time Logo]              │  ← Static image (og-image.png)
│                             │
│  Beat me in 67Time          │  ← Title
│  Start a focus session...   │  ← Description
│  67time.app/username        │  ← Link
└─────────────────────────────┘
```
**Same logo for everyone** ✅

### When Sharing to Stories (Instagram/Facebook):
```
┌─────────────────────────────┐
│  🏆                          │
│  YOUR BEST TIME             │  ← Captured with react-native-view-shot
│  1:23.456                   │  ← Shows YOUR specific time
│  @username                  │
│  67 completions             │
│                             │
│  + User pastes link text    │  ← Manual: "Check my score: 67time.app/username"
└─────────────────────────────┘
```
**Dynamic score card per user** ✅ (already working)

---

## Quick OG Image Template

If you need a quick image, here's HTML you can screenshot:

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      width: 1200px;
      height: 630px;
      margin: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }
    .logo {
      font-size: 120px;
      font-weight: 900;
      color: white;
      letter-spacing: -4px;
      margin-bottom: 30px;
    }
    .tagline {
      font-size: 32px;
      color: #888;
      font-weight: 500;
    }
  </style>
</head>
<body>
  <div class="logo">67Time</div>
  <div class="tagline">The Ultimate Focus Challenge</div>
</body>
</html>
```

**To create image:**
1. Save as `og-template.html`
2. Open in browser
3. Take screenshot (make sure it's 1200x630)
4. Or use https://www.screely.com/ to capture
5. Save as `og-image.png`

---

## Advantages of Static Image

✅ **Simple**
- One image file
- No API needed
- No edge runtime
- No dynamic generation

✅ **Fast**
- Image loads instantly
- No computation needed
- Better performance
- Lower costs

✅ **Reliable**
- Never fails to generate
- No timeout issues
- Works everywhere
- Easy to test

✅ **Consistent**
- Same branding everywhere
- Professional look
- Easy to update (just replace file)

---

## Updating the Image Later

To change your OG image:
1. Design new image (1200x630)
2. Replace `public/og-image.png`
3. Deploy
4. Clear Facebook cache:
   - Go to Facebook Debugger
   - Enter your URL
   - Click "Scrape Again"
5. Done! ✅

---

## Checklist

- [ ] Create 1200x630 image with 67Time logo
- [ ] Save as `og-image.png`
- [ ] Add to `public/` folder in Next.js project
- [ ] Update `app/[username]/page.tsx` with code above
- [ ] Deploy website
- [ ] Test: `https://67time.app/og-image.png` shows image
- [ ] Test Facebook Debugger
- [ ] Share link and verify preview shows

---

## Summary

**Mobile App:** ✅ Already done
- Shares link: `https://67time.app/username`
- For Stories: Captures score card image with react-native-view-shot

**Website:** 3 simple pieces
1. Static image: `public/og-image.png` (1200x630 with logo)
2. User API: `app/api/user/[username]/route.ts` (get user data)
3. Landing page: `app/[username]/page.tsx` (updated code above)

**Result:**
- Link previews show: 67Time logo + title + description
- Stories show: Dynamic score card (captured in app)
- Simple, fast, reliable ✅

Need help creating the OG image? Let me know! 🎨
