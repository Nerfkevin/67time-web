import React from 'react';
import { PawPrint, Heart, History, Star } from 'lucide-react';
import Link from 'next/link';

const WhyPettSection = () => {
  return (
    <section id="mission" className="relative bg-gradient-to-br from-pink-100 via-pink-50 to-blue-100 overflow-hidden mt-[-60px] sm:mt-[-80px] pt-[120px] sm:pt-[136px] pb-[100px] sm:pb-[120px] md:pt-[160px] md:pb-[160px] z-0 w-full">
      {/* Enhanced floating decorative elements - mobile optimized */}
      <div className="absolute top-16 sm:top-20 left-1/4 text-pett-blue opacity-40 animate-float hidden sm:block" style={{ animationDelay: "1s" }}>
        <PawPrint size={24} className="md:w-8 md:h-8" />
      </div>
      <div className="absolute bottom-16 sm:bottom-20 right-1/4 text-pink-400 opacity-40 animate-float hidden sm:block" style={{ animationDelay: "2.5s" }}>
        <Heart size={24} className="md:w-8 md:h-8" />
      </div>
      <div className="absolute top-1/3 right-1/5 text-pink-300 opacity-30 animate-pulse hidden md:block" style={{ animationDelay: "3s" }}>
        <Star size={24} />
      </div>
      <div className="absolute bottom-1/4 left-1/3 text-blue-300 opacity-20 animate-bounce hidden md:block" style={{ animationDelay: "2s" }}>
        <PawPrint size={20} />
      </div>
      
      {/* Decorative circles - constrained */}
      <div className="absolute -top-10 sm:-top-20 -right-10 sm:-right-20 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-br from-pink-200 to-pink-100 rounded-full opacity-50 blur-xl"></div>
      <div className="absolute -bottom-16 sm:-bottom-32 -left-10 sm:-left-20 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-tr from-blue-200 to-blue-100 rounded-full opacity-40 blur-xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12">
          {/* Left side - Image */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <div className="relative rounded-2xl overflow-hidden shadow-xl transform hover:scale-102 transition-all duration-500 max-w-lg mx-auto md:mx-0">
              <img 
                src="/dog shelter.jpg" 
                alt="Dogs at animal shelter" 
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
          
          {/* Right side - Mission content */}
          <div className="w-full md:w-1/2 flex flex-col space-y-6 sm:space-y-7 items-center md:items-stretch">
            
            {/* Mission Title Block - Centered on mobile, right on desktop */}
            <div className="w-full flex justify-center md:justify-end px-2 sm:px-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold italic flex items-center gap-2 text-gray-800 text-center md:text-right">
                <PawPrint className="text-pink-500 hidden md:block flex-shrink-0 lg:w-9 lg:h-9" size={28} />
                <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent px-1">Our Mission</span>
                <PawPrint className="text-pink-500 hidden md:block flex-shrink-0 lg:w-9 lg:h-9" size={28} />
              </h2>
            </div>
            
            {/* Proceeds Block */}
            <div className="text-center md:text-right px-2 sm:px-0">
              <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-pink-500 tracking-tight">30% of all proceeds</p>
              <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-pink-500 tracking-tight">go directly to animal shelters.</p>
            </div>
            
            {/* Mission Statement Paragraph */}
            <p className="text-lg sm:text-xl leading-relaxed text-gray-700 text-center md:text-right px-2 sm:px-0">
              Our mission is to create a world where every pet's life is <span className="text-pink-600 font-semibold">celebrated</span>, <span className="text-blue-600 font-semibold">documented</span>, and <span className="text-purple-600 font-semibold">cherished</span>.
            </p>
            
            {/* Belief Paragraph */}
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 text-center md:text-right px-2 sm:px-0">
              We believe that the bond between humans and animals is one of life's greatest gifts. 
              By helping you document your pet's journey, we're preserving memories that will last a lifetime.
            </p>
            
            {/* Announcement Paragraph */}
            <p className="text-lg sm:text-xl text-pink-600 font-medium italic text-center md:text-right px-2 sm:px-0">
              Announcements will be made monthly on the donations.
            </p>
            
            {/* Button Container - Centered */}
            <div className="w-full flex justify-center pt-2 sm:pt-3">
              <Link href="/donation-history" className="flex items-center gap-2 bg-pink-100 px-6 sm:px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all text-pink-700 border border-pink-200 hover:bg-pink-200 font-bold text-sm sm:text-base">
                <History size={18} className="sm:w-5 sm:h-5" />
                <span>Donation History</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPettSection;
