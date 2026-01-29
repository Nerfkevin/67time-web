import React from 'react';
import { Dog, Cat, Heart, Star, Share2 } from 'lucide-react';

const HowItWorksSection = () => {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-white rounded-[40px] sm:rounded-[80px] shadow-2xl z-20 mx-2 sm:mx-4 md:mx-8 lg:mx-16 mt-[-60px] sm:mt-[-80px] mb-[-60px] sm:mb-[-80px] overflow-hidden w-auto">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-pett-pink/10 to-pett-blue/10 rounded-[40px] sm:rounded-[80px]"></div>
      
      {/* Decorative elements - mobile optimized */}
      <div className="absolute top-8 sm:top-10 left-4 sm:left-10 text-pink-400 opacity-50 animate-float hidden sm:block">
        <Star size={16} className="sm:w-5 sm:h-5" />
      </div>
      <div className="absolute bottom-16 sm:bottom-20 right-4 sm:right-10 text-blue-400 opacity-50 animate-float hidden sm:block" style={{ animationDelay: "1.5s" }}>
        <Heart size={14} className="sm:w-4 sm:h-4" />
      </div>
      
      {/* Decorative circles - constrained */}
      <div className="absolute -top-16 sm:-top-32 -right-10 sm:-right-20 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-br from-pink-200 to-pink-100 rounded-full opacity-40 blur-xl"></div>
      <div className="absolute top-20 sm:top-40 -left-10 sm:-left-20 w-28 h-28 sm:w-56 sm:h-56 bg-gradient-to-tr from-blue-200 to-blue-100 rounded-full opacity-30 blur-xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-7xl">
        <h2 className="section-title flex items-center justify-center gap-2 text-center mb-8 sm:mb-12 text-2xl sm:text-3xl md:text-4xl">
          <Heart className="text-pink-400 sm:w-5 sm:h-5" size={16} />
          How Pett. Works
          <Heart className="text-pink-400 sm:w-5 sm:h-5" size={16} />
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 justify-center w-full text-center">
          <div className="flex-1 bg-white rounded-2xl shadow-xl hover:shadow-2xl p-4 sm:p-6 transform transition-all duration-300 hover:scale-105">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-pett-blue to-blue-300 flex items-center justify-center text-xl sm:text-2xl font-bold mb-3 sm:mb-4 shadow-lg">1</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Snap a daily photo of your pet.</h3>
              <p className="text-center text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Just one quick photo each day is all it takes.</p>
              <Dog className="mt-2 sm:mt-4 text-blue-400 animate-bounce sm:w-6 sm:h-6" size={20} />
            </div>
          </div>
          
          <div className="flex-1 bg-white rounded-2xl shadow-xl hover:shadow-2xl p-4 sm:p-6 transform transition-all duration-300 hover:scale-105">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-pett-pink to-pink-300 flex items-center justify-center text-xl sm:text-2xl font-bold mb-3 sm:mb-4 shadow-lg">2</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Add a fun caption or sticker.</h3>
              <p className="text-center text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Make it personal with our creative tools.</p>
              <Heart className="mt-2 sm:mt-4 text-pink-400 animate-bounce sm:w-6 sm:h-6" size={20} />
            </div>
          </div>
          
          <div className="flex-1 bg-white rounded-2xl shadow-xl hover:shadow-2xl p-4 sm:p-6 transform transition-all duration-300 hover:scale-105">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-pett-blue to-blue-300 flex items-center justify-center text-xl sm:text-2xl font-bold mb-3 sm:mb-4 shadow-lg">3</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Build your pet's memory timeline!</h3>
              <p className="text-center text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Watch as their beautiful story unfolds day by day.</p>
              <Cat className="mt-2 sm:mt-4 text-blue-400 animate-bounce sm:w-6 sm:h-6" size={20} />
            </div>
          </div>
          
          <div className="flex-1 bg-white rounded-2xl shadow-xl hover:shadow-2xl p-4 sm:p-6 transform transition-all duration-300 hover:scale-105">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-pett-pink to-pink-300 flex items-center justify-center text-xl sm:text-2xl font-bold mb-3 sm:mb-4 shadow-lg">4</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Share and view other pets!</h3>
              <p className="text-center text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Connect with other pet lovers in the community.</p>
              <Share2 className="mt-2 sm:mt-4 text-pink-400 animate-bounce sm:w-6 sm:h-6" size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
