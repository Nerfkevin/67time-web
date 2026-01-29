import React from 'react';
import WaitlistForm from './WaitlistForm';
import { PawPrint, Heart, Star } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden mt-[-600px] sm:mt-[-950px] md:mt-[-200px] lg:mt-[-500px] pt-[650px] sm:pt-[1000px] md:pt-[450px] lg:pt-[550px] pb-12 sm:pb-16 md:pb-24 bg-gradient-to-br from-blue-100 via-blue-50 to-pink-100 w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 to-pink-200/20 z-0"></div>
      
      {/* Decorative elements - mobile optimized */}
      <div className="absolute top-[650px] sm:top-[800px] md:top-[350px] left-4 sm:left-10 text-pink-400 opacity-50 animate-float">
        <PawPrint size={20} className="sm:w-7 sm:h-7" />
      </div>
      <div className="absolute bottom-16 sm:bottom-20 right-4 sm:right-10 text-blue-400 opacity-50 animate-float" style={{ animationDelay: "1.5s" }}>
        <Heart size={18} className="sm:w-6 sm:h-6" />
      </div>
      <div className="absolute top-3/4 right-1/4 text-pink-400 opacity-30 animate-float hidden sm:block" style={{ animationDelay: "2.2s" }}>
        <Star size={16} />
      </div>
      
      {/* Decorative circles - constrained */}
      <div className="absolute top-[650px] sm:top-[800px] md:top-[350px] -right-10 sm:-right-20 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-br from-blue-200 to-blue-100 rounded-full opacity-50 blur-xl"></div>
      <div className="absolute -bottom-16 sm:-bottom-32 -left-10 sm:-left-20 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-tr from-pink-200 to-pink-100 rounded-full opacity-40 blur-xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4 pt-12 sm:pt-16 md:pt-12">
            <PawPrint className="text-pink-400 wiggle hidden sm:block sm:w-6 sm:h-6" size={20} />
            <h2 className="section-title mb-0 text-2xl sm:text-3xl md:text-4xl font-bold px-2 sm:px-0">
              Don't Let Memories Fade. <br className="hidden sm:block" />Be the First to Experience Pett
            </h2>
            <PawPrint className="text-pink-400 wiggle hidden sm:block sm:w-6 sm:h-6" size={20} />
          </div>
          
          <p className="text-base sm:text-lg mb-6 md:mb-8 text-gray-600 px-2 sm:px-0">
            Join thousands of pet lovers eagerly awaiting the release of Pett!
          </p>
          
          <div className="mb-6 md:mb-8 max-w-md mx-auto">
            <WaitlistForm />
          </div>
          
          <div className="bg-white p-4 md:p-5 rounded-2xl shadow-lg border border-pett-pink/30 transform transition-transform hover:scale-105 max-w-lg mx-auto">
            <div className="flex justify-center mb-2">
              <Star className="text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" />
              <Star className="text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" />
              <Star className="text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" />
              <Star className="text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" />
              <Star className="text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <p className="italic text-gray-600 text-sm md:text-base px-2 sm:px-0">
              "I'm so excited for this app! Can't wait to document my cat's daily antics and build a beautiful memory collection."
            </p>
            <div className="mt-2 md:mt-3">
              <p className="font-medium flex items-center justify-center gap-1 text-sm md:text-base">
                <Heart className="text-pink-400 w-3 h-3 sm:w-4 sm:h-4" />
                Sarah, Cat Mom
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
