"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto bg-card p-8 rounded-2xl shadow-xl border border-border">
          <h1 className="text-3xl font-bold text-foreground mb-8">Terms & Conditions</h1>
          <div className="space-y-6 text-gray-300">
            <p>Effective Date: {new Date().toLocaleDateString()}</p>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
              <p>
                By using the 67Time website or mobile app, you agree to these Terms. If you do not agree, do not use the service.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Description of Services</h2>
              <p>
                67Time is a habit-building platform offering a 67-day challenge, task tracking, progress visualization, leaderboards, and streak maintenance. Free and premium features may be available.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. User Conduct</h2>
              <p>
                You are responsible for any content you submit (e.g., task names, profile name). You agree not to submit illegal, infringing, or abusive content, and not to attempt to bypass security or rate limits.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. User Accounts</h2>
              <p>
                Some features may require an account. Keep credentials confidential and notify us of unauthorized use. We may suspend accounts that violate these terms.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Intellectual Property</h2>
              <p>
                67Time, its design, features, and branding are owned by 67Time and protected by law. You retain rights to content you submit and grant us a limited license to use it solely to operate the service.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Premium Features and Subscriptions</h2>
              <p>
                In-app purchases and subscriptions are processed by the Apple App Store. Subscriptions may auto-renew unless canceled in your store account settings according to store policies. Refunds are handled by the respective store.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Disclaimers</h2>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Service is provided “as is” without warranties.</li>
                <li>Habit tracking does not guarantee specific life outcomes.</li>
                <li>Service availability is not guaranteed to be uninterrupted or error-free.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, 67Time is not liable for indirect or consequential damages arising from your use of the service.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">9. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless 67Time from claims arising out of your violation of these Terms or misuse of the service.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">10. Privacy</h2>
              <p>
                Your use of 67Time is also governed by our Privacy Policy.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">11. Termination</h2>
              <p>
                We may suspend or terminate access for violations of these Terms. You can stop using the service at any time.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">12. Governing Law</h2>
              <p>
                These Terms are governed by the laws of Vietnam, with exclusive jurisdiction in its courts.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">13. Cancellation and Refunds</h2>
              <p>
                Manage subscriptions and request refunds through the Apple App Store. Deleting the app does not cancel a subscription.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">14. Changes to Terms</h2>
              <p>
                We may update these Terms to reflect service or legal changes. Continued use after updates signifies acceptance.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">15. Contact</h2>
              <p>
                Questions about these Terms: hello@98goats.com.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
