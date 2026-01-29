"use client";

import React from 'react';
import { PawPrint, FileText } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const TermsPage = () => (
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
            <FileText className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-center">Terms and Conditions for 67Time</h1>
        <p className="mb-2 text-sm text-gray-500 text-center">Effective Date: January 29, 2026</p>
        <p className="mb-6 text-gray-600">Welcome to 67Time!<br />By using our website located at <a href="https://www.67time.app" className="text-blue-600 hover:text-blue-700 underline">https://www.67time.app</a> ("Website") and our mobile application ("App"), you agree to the following Terms of Service ("Terms"). Please read them carefully.</p>
        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2 text-gray-800">1. Acceptance of Terms</h2>
          <p className="text-gray-600">By accessing or using 67Time, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with any part of these terms, you must not use our services.</p>
        </section>
        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2 text-gray-800">2. Description of Services</h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Create a profile for your pet(s).</li>
            <li>Share photos, videos, and stories of your pets' daily lives.</li>
            <li>Follow other pets and interact with their owners.</li>
            <li>Discover content from a global community of pet lovers.</li>
            <li>Access free and premium features for an enhanced experience.</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2 text-gray-800">3. User Conduct and Content Rules</h2>
          <p className="text-gray-600">You are responsible for all content you post on 67Time. You agree not to:</p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Post content that is unlawful, harassing, abusive, hateful, or promotes discrimination.</li>
            <li>Post content that depicts or promotes animal cruelty or harm.</li>
            <li>Share content that infringes on others' privacy or intellectual property rights.</li>
            <li>Post content promoting illegal activities or that violates any applicable laws.</li>
            <li>Attempt to bypass our rate limits or security measures.</li>
            <li>Scrape data, reverse engineer, or interfere with the service in any way.</li>
          </ul>
          <p className="mt-2 text-gray-600">We reserve the right to remove any content that violates these guidelines and to suspend or terminate accounts for users who repeatedly violate our terms.</p>
        </section>
        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2 text-gray-800">4. User Accounts</h2>
          <p className="text-gray-600">To use most features of 67Time, you must create an account. You are responsible for:</p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Maintaining the confidentiality of your account credentials.</li>
            <li>All activities that occur under your account.</li>
            <li>Notifying us immediately of any unauthorized use of your account by contacting <a href="mailto:support@67time.app" className="text-blue-600 hover:text-blue-700 underline">support@67time.app</a>.</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2 text-gray-800">5. Intellectual Property</h2>
          <p className="text-gray-600">The 67Time app, its design, features, and branding are the property of 67Time and are protected by copyright, trademark, and other intellectual property laws.</p>
          <p className="text-gray-600">You retain ownership of the content (e.g., photos, videos, text) you submit to the App. However, by posting content, you grant 67Time a non-exclusive, worldwide, royalty-free license to display, reproduce, and distribute it solely for the purpose of operating and providing our services.</p>
        </section>
        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2 text-gray-800">6. Premium Features and Subscriptions</h2>
          <p className="text-gray-600">67Time offers in-app purchases and subscription services that provide access to additional features. All transactions are processed through the platform you downloaded the app from (e.g., Apple App Store or Google Play Store).</p>
          <p className="text-gray-600">Subscriptions automatically renew unless auto-renew is turned off at least 24 hours before the end of the current period. You can manage your subscriptions and turn off auto-renewal in your device's Account Settings after purchase. Any unused portion of a free trial period, if offered, will be forfeited when you purchase a subscription.</p>
        </section>
        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2 text-gray-800">7. Disclaimers</h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li><b>"As Is" Service:</b> The App is provided without warranties of any kind, express or implied.</li>
            <li><b>Not Professional Advice:</b> Content on 67Time is for informational and entertainment purposes only and is not a substitute for professional veterinary advice, diagnosis, or treatment. Always seek the advice of a qualified veterinarian with any questions you may have regarding a medical condition for your pet.</li>
            <li><b>User Content:</b> We are not responsible for the accuracy, legality, or appropriateness of user-submitted content.</li>
            <li><b>Service Availability:</b> We do not guarantee that the service will always be available, uninterrupted, or error-free.</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2 text-gray-800">8. Limitation of Liability</h2>
          <p className="text-gray-600">To the maximum extent permitted by law, 67Time, its officers, directors, and employees shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.</p>
        </section>
        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2 text-gray-800">9. Indemnification</h2>
          <p className="text-gray-600">You agree to indemnify and hold harmless 67Time, its officers, directors, and employees from any losses, expenses, damages, and costs, including reasonable attorneys' fees, resulting from any violation of these Terms or any activity related to your account.</p>
        </section>
        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2 text-gray-800">10. Privacy</h2>
          <p className="text-gray-600">Your use of 67Time is governed by our <a href="https://www.67time.app/privacy" className="text-blue-600 hover:text-blue-700 underline">Privacy Policy</a>. The Privacy Policy outlines how we collect and use your data, including profile information, photos, and usage data.</p>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default TermsPage;
