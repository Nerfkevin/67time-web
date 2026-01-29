"use client";

import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import WhyPettSection from '@/components/WhyPettSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main>
        <HeroSection />
        <WhyPettSection />
        <HowItWorksSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
