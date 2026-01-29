"use client";

import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Hero Image - Will show first on mobile, but second on desktop */}
          <div className="relative h-[300px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl order-first md:order-last border border-border bg-card">
            <Image
              src="/screenshot.png"
              alt="67Time app showcase"
              fill
              className="object-contain p-4"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent pointer-events-none"></div>
          </div>

          {/* Content Section - Will show second on mobile, but first on desktop */}
          <div className="order-last md:order-first text-center md:text-left">
            <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-10 drop-shadow-sm">
              Master Your Time, <span className="text-primary">Master Your Life</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium mb-5 leading-relaxed">
              Introducing 67Time, the ultimate challenge to forge iron habits. Transform your daily routine into a path of discipline and excellence in just 67 days.
            </p>
            
            {/* App Store Button */}
            <div className="flex justify-center md:justify-start mt-10">
              <a 
                href="https://apps.apple.com/app/id6746765317"
                target="_blank" 
                rel="noopener noreferrer"
                className="relative w-[200px] h-[60px] block transition-transform hover:scale-105"
              >
                <Image 
                  src="/appstore.png" 
                  alt="Download on the App Store" 
                  fill
                  className="rounded-lg object-contain object-left"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Daily Discipline",
              description: "Track your critical tasks every day. Consistency is the key to transformation.",
            },
            {
              title: "Leaderboard",
              description: "Compete with others. Rise through the ranks from Novice to Legend as you maintain your streak.",
            },
            {
              title: "Visualize Progress",
              description: "See your journey unfold. Analyze your stats and witness your growth over the 67-day challenge.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-200 hover:-translate-y-1 border border-border group"
            >
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-xl">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
