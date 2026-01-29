"use client";

import React from 'react';
import { PawPrint, Shield } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const PrivacyPolicyPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-blue-200 relative overflow-hidden">
    <Navigation />
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
    
    <main className="relative z-10 max-w-2xl mx-auto px-4 py-12 pt-36">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-center">Privacy Policy for 67Time</h1>
        <p className="mb-2 text-sm text-gray-500 text-center">Effective Date: January 29, 2026</p>
        <p className="mb-6 text-gray-600 text-center">Thank you for using 67Time!</p>
        <p className="mb-6 text-gray-600">At 67Time, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect your information when you use our website located at <a href="https://www.67time.app" className="text-blue-600 hover:text-blue-700 underline">https://www.67time.app</a> ("Website") and our mobile application ("App"). Please read this policy carefully to understand how we handle your data.</p>
        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2 text-gray-800">1. Information We Collect</h2>
          <p className="mb-2 font-semibold text-gray-700">Account Information:</p>
          <ul className="list-disc pl-6 mb-2 text-gray-600">
            <li><b>Name:</b> We collect your name to personalize your experience and display on your profile</li>
            <li><b>Email:</b> Your email address is required for account creation, notifications, and account recovery</li>
            <li><b>Username:</b> A unique username for your profile and social interactions</li>
            <li><b>Pet Type:</b> Your preferred pet type (Dog, Cat, Rabbit, etc.) for content personalization</li>
          </ul>
      <p className="mb-2 font-semibold text-gray-700">Profile Content:</p>
      <ul className="list-disc pl-6 mb-2 text-gray-600">
        <li><b>Profile Photos:</b> Avatar images you upload for your profile</li>
        <li><b>Pet Photos:</b> Photos and videos you share of your pets through the app</li>
        <li><b>Captions and Comments:</b> Text content you add to your posts and comments</li>
        <li><b>Stickers and Edits:</b> Creative elements you add to your photos</li>
      </ul>
      <p className="mb-2 font-semibold text-gray-700">Device and Technical Information:</p>
      <ul className="list-disc pl-6 mb-2 text-gray-600">
        <li><b>Camera Access:</b> To take photos of your pets (with your permission)</li>
        <li><b>Photo Library Access:</b> To select existing photos from your device (with your permission)</li>
        <li><b>Push Notification Tokens:</b> To send you notifications about likes, comments, and follows</li>
        <li><b>Device Information:</b> Basic device info for app functionality and troubleshooting</li>
        <li><b>IP Address:</b> For security, rate limiting, and basic location identification at the country level</li>
      </ul>
      <p className="mb-2 font-semibold text-gray-700">Social Interactions:</p>
      <ul className="list-disc pl-6 mb-2 text-gray-600">
        <li><b>Follow Relationships:</b> Who you follow and who follows you</li>
        <li><b>Likes and Comments:</b> Your interactions with other users' content</li>
        <li><b>Favorites:</b> Photos you mark as favorites for your calendar view</li>
        <li><b>Invite Codes:</b> Referral codes for the invite system</li>
      </ul>
      <p className="mb-2 font-semibold text-gray-700">Payment Information:</p>
      <ul className="list-disc pl-6 text-gray-600">
        <li><b>Subscription Data:</b> Premium subscription status and payment information (processed securely through Apple App Store/Google Play Store)</li>
        <li><b>RevenueCat Data:</b> Subscription analytics and management data</li>
      </ul>
    </section>
    <section className="mb-6">
      <h2 className="font-semibold text-lg mb-2 text-gray-800">2. How We Use Your Data</h2>
      <p className="mb-2 font-semibold text-gray-700">Core App Functionality:</p>
      <ul className="list-disc pl-6 mb-2 text-gray-600">
        <li>Display your profile and posts to other users</li>
        <li>Enable social interactions (likes, comments, follows)</li>
        <li>Provide the photo sharing and editing features</li>
        <li>Manage your premium subscription and features</li>
      </ul>
      <p className="mb-2 font-semibold text-gray-700">Content Management:</p>
      <ul className="list-disc pl-6 mb-2 text-gray-600">
        <li>Store and display your pet photos and videos</li>
        <li>Process and apply stickers and edits to your photos</li>
        <li>Manage your favorites and calendar view</li>
      </ul>
      <p className="mb-2 font-semibold text-gray-700">Social Features:</p>
      <ul className="list-disc pl-6 mb-2 text-gray-600">
        <li>Show your posts to followers and in discovery feeds</li>
        <li>Enable following/unfollowing other users</li>
        <li>Display likes, comments, and interaction counts</li>
      </ul>
      <p className="mb-2 font-semibold text-gray-700">Notifications:</p>
      <ul className="list-disc pl-6 mb-2 text-gray-600">
        <li>Send push notifications about new likes, comments, and follows</li>
        <li>Provide daily reminders to share photos (if enabled)</li>
        <li>Alert you about premium features and updates</li>
      </ul>
      <p className="mb-2 font-semibold text-gray-700">Security and Abuse Prevention:</p>
      <ul className="list-disc pl-6 mb-2 text-gray-600">
        <li>Monitor for and remove inappropriate content</li>
        <li>Detect and prevent spam and automated abuse</li>
        <li>Protect your account from unauthorized access</li>
      </ul>
    </section>
    <section className="mb-6">
      <h2 className="font-semibold text-lg mb-2 text-gray-800">3. Data Sharing and Disclosure</h2>
      <p className="text-gray-600 mb-2">We do not sell your personal data. We may share your information in the following limited circumstances:</p>
      <ul className="list-disc pl-6 text-gray-600">
        <li><b>Service Providers:</b> We use trusted third-party services for hosting (Supabase), payments (Apple/Google, RevenueCat), and analytics. These providers have access to your data only to perform specific tasks on our behalf.</li>
        <li><b>Legal Requirements:</b> We may disclose your information if required by law or in response to valid requests by public authorities.</li>
        <li><b>Business Transfers:</b> If 67Time is involved in a merger, acquisition, or asset sale, your personal data may be transferred.</li>
      </ul>
    </section>
    <section className="mb-6">
      <h2 className="font-semibold text-lg mb-2 text-gray-800">4. Data Retention and Deletion</h2>
      <p className="text-gray-600 mb-2">We retain your data as long as your account is active. You can request account deletion at any time within the app settings. Upon deletion:</p>
      <ul className="list-disc pl-6 text-gray-600">
        <li>Your profile and personal information will be removed from our database.</li>
        <li>Your photos and posts will be deleted from our storage.</li>
        <li>Some anonymized analytics data may be retained for legitimate business purposes.</li>
      </ul>
    </section>
    <section className="mb-6">
      <h2 className="font-semibold text-lg mb-2 text-gray-800">5. Children's Privacy</h2>
      <p className="text-gray-600">67Time is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.</p>
    </section>
    <section className="mb-6">
      <h2 className="font-semibold text-lg mb-2 text-gray-800">6. Changes to This Policy</h2>
      <p className="text-gray-600">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top.</p>
    </section>
    <section className="mb-6">
      <h2 className="font-semibold text-lg mb-2 text-gray-800">7. Contact Us</h2>
      <p className="text-gray-600">If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@67time.app" className="text-blue-600 hover:text-blue-700 underline">support@67time.app</a>.</p>
    </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default PrivacyPolicyPage;
