import React from 'react';
import AppStoreButton from './AppStoreButton';
import { PawPrint, Heart, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-br from-pink-100 via-blue-100 to-pett-light-blue rounded-b-[40px] sm:rounded-b-[80px] shadow-xl z-20 w-full">
      {/* Enhanced floating decorative elements - constrained to viewport */}
      <div className="absolute top-8 sm:top-10 left-4 sm:left-10 text-pink-400 opacity-60 animate-float">
        <PawPrint size={24} className="sm:w-8 sm:h-8" />
      </div>
      <div className="absolute bottom-16 sm:bottom-20 right-4 sm:right-10 text-blue-400 opacity-60 animate-float" style={{ animationDelay: "1.5s" }}>
        <PawPrint size={20} className="sm:w-7 sm:h-7" />
      </div>
      <div className="absolute top-1/2 left-1/4 text-pink-400 opacity-40 animate-float hidden sm:block" style={{ animationDelay: "3s" }}>
        <PawPrint size={20} />
      </div>
      <div className="absolute top-1/3 right-1/4 text-blue-500 opacity-30 animate-bounce hidden sm:block" style={{ animationDelay: "2s" }}>
        <Heart size={18} />
      </div>
      <div className="absolute bottom-1/4 left-1/3 text-yellow-400 opacity-40 animate-pulse-scale hidden sm:block" style={{ animationDelay: "1.2s" }}>
        <Star size={22} />
      </div>
      
      {/* Decorative circles - constrained and responsive */}
      <div className="absolute -top-10 sm:-top-20 -right-10 sm:-right-20 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-br from-pink-200 to-pink-100 rounded-full opacity-50 blur-xl"></div>
      <div className="absolute -bottom-16 sm:-bottom-32 -left-10 sm:-left-20 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-tr from-blue-200 to-blue-100 rounded-full opacity-40 blur-xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-4 relative z-10 w-full max-w-7xl">
        {/* Mobile-only: Title above mockup */}
        <div className="block lg:hidden mb-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-blue-400 via-pink-400 to-blue-400 bg-clip-text text-transparent px-0 text-center">
            Just pets and friends you care about.
          </h1>
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-6 sm:gap-8 w-full">
          <div className="w-full lg:w-3/4 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Desktop: Title in original spot */}
            <div className="hidden lg:flex items-center justify-start space-x-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-blue-400 via-pink-400 to-blue-400 bg-clip-text text-transparent px-0">
                Just pets and friends you care about.
              </h1>
            </div>
            <div className="flex flex-col space-y-1 font-semibold text-lg sm:text-4xl text-gray-700 text-center lg:text-left mt-2 mb-2 px-0">
              <span>📸 Every moment captured</span>
              <span>📔 Forever memories</span>
              <span>🥹 Authentic connections daily</span>
            </div>
            
            <p className="text-lg sm:text-2xl text-gray-700 max-w-2xl mx-auto lg:mx-0 px-0">
              Pett. helps you capture and remember every precious day with your pets and share the moments with those you care about.
            </p>
            
            <div id="download" className="pt-2 sm:pt-4 w-full max-w-md mx-auto lg:mx-0">
              <AppStoreButton variant="primary" size="lg" />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative max-w-xs sm:max-w-sm md:max-w-md">
              {/* Enhanced decorative elements - mobile optimized */}
              <div className="absolute -top-4 sm:-top-8 -right-4 sm:-right-8 w-20 h-20 sm:w-40 sm:h-40 bg-gradient-to-br from-pink-300 to-pink-200 rounded-full opacity-70 animate-float blur-sm"></div>
              <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-tr from-blue-300 to-blue-200 rounded-full opacity-60 animate-float blur-sm" style={{ animationDelay: "2.5s" }}></div>
              <img 
                src="/screenshot.png"
                alt="Pet app mockup" 
                className="rounded-xl sm:rounded-2xl w-full h-auto"
              />
              <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-300 to-blue-200 rounded-full opacity-70 animate-float blur-sm" style={{ animationDelay: "2s" }}></div>
              <div className="absolute -bottom-1 sm:-bottom-2 right-4 sm:right-10 text-blue-500 animate-bounce">
                <PawPrint size={16} className="sm:w-6 sm:h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;