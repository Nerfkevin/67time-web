import React from 'react';
import AppStoreButton from './AppStoreButton';

const Navigation = () => {
  return (
    <div className="fixed top-4 left-0 right-0 z-50 mt-2 sm:mt-4 px-2 sm:px-4 lg:px-8 w-full">
      <nav className="mx-auto max-w-5xl rounded-full bg-white/90 backdrop-blur-sm shadow-lg transition-all duration-300 py-2.5 w-full flex items-center justify-between px-2 sm:px-3 md:px-3">
        <a href="/" className="flex items-center space-x-2 sm:space-x-3 ml-4 hover:opacity-80 transition-opacity cursor-pointer">
          <img src="/logoRounded.png" alt="Pett Logo" className="h-8 w-8 sm:h-10 sm:w-10" />
          <span className="text-xl sm:text-2xl md:text-3xl font-bold">
            Pett.
          </span>
        </a>
        <AppStoreButton variant="secondary" size="sm" />
      </nav>
    </div>
  );
};

export default Navigation;
