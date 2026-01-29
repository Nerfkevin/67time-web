"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto bg-card p-8 rounded-2xl shadow-xl border border-border">
          <h1 className="text-3xl font-bold text-foreground mb-8">Privacy Policy for 67Time</h1>
          <div className="space-y-6 text-gray-300">
            <p>Effective Date: {new Date().toLocaleDateString()}</p>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
              <p>
                Thank you for using 67Time. This Privacy Policy explains what information we collect when you use our website and mobile application, how we use it, and the choices you have.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>
                  Account Information: name and email if you create an account or join a mailing list.
                </li>
                <li>
                  Habit Activity: tasks created, completed, streaks, and progress stats.
                </li>
                <li>
                  Device and Usage Data: IP address, device type, OS/app version, and event logs for security, rate limiting, and debugging.
                </li>
                <li>
                  Notifications and Permissions: your notification preferences.
                </li>
                <li>
                  Payment Data: if you purchase premium features via the App Store, payment is processed by Apple. We do not store card numbers.
                </li>
                <li>
                  Cookies and Similar Technologies: on the website we use cookies for preferences and analytics.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Data</h2>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Provide core habit-tracking features (daily tasks, progress visualization).</li>
                <li>Personalize content based on your activity and settings.</li>
                <li>Send optional notifications (e.g., reminders) if enabled.</li>
                <li>Prevent abuse and enforce rate limits.</li>
                <li>Improve the product through analytics and diagnostics.</li>
                <li>Respond to support requests and process account deletion.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Data Sharing</h2>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>
                  Service Providers: we use trusted providers for hosting, analytics, database, and email (e.g., Supabase, Resend). These providers process data on our behalf under contractual safeguards.
                </li>
                <li>No Selling: we do not sell personal data.</li>
                <li>
                  External Links: links to third-party sites (App Store, social media) are subject to their policies.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Data Security</h2>
              <p>
                We secure data in transit with HTTPS and use access controls to limit who can access personal information. No method of transmission or storage is completely secure.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Your Rights and Choices</h2>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Manage notifications in app settings.</li>
                <li>Access or correct your data by contacting support.</li>
                <li>
                  Request deletion of your account and associated personal data through the app or by contacting us. Aggregated, non-identifying statistics may be retained.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Data Retention</h2>
              <p>
                We retain data as long as necessary to provide the service. Older IP logs may be anonymized after periods of inactivity.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">8. Children’s Privacy</h2>
              <p>
                67Time is not intended for children under 13, and we do not knowingly collect personal data from children under 13.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">9. Updates to this Policy</h2>
              <p>
                We may update this Privacy Policy to reflect changes to our practices or for legal reasons. Material changes may be announced in-app or on the website.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">10. Contact</h2>
              <p>
                For privacy questions, contact support@67time.app.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
