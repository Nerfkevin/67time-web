import React from 'react';
import { Download } from 'lucide-react';

interface AppStoreButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

const AppStoreButton: React.FC<AppStoreButtonProps> = ({ 
  variant = 'primary', 
  size = 'md' 
}) => {
  const APP_STORE_URL = 'https://apps.apple.com/app/id6746765317';
  
  const sizeClasses = {
    sm: 'h-20',
    md: 'h-24', 
    lg: 'h-40'
  };
  
  // Header variant - styled like the original waitlist button
  if (variant === 'secondary') {
    return (
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="p-1 rounded-full bg-gradient-to-r from-blue-300 via-pink-300 to-blue-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      >
        <span className="block rounded-full bg-[#fcfbf7] px-3 py-1 text-sm sm:text-base font-extrabold flex items-center space-x-2">
          <Download size={16} className="text-blue-500" />
          <span className="bg-gradient-to-r from-blue-370 via-pink-40 to-blue-370 bg-clip-text text-transparent font-extrabold drop-shadow-md">
            Download App
          </span>
        </span>
      </a>
    );
  }
  
  // Hero section variant - larger App Store image
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
    >
      <img 
        src="/appstore.png" 
        alt="Download on the App Store" 
        className={`${sizeClasses[size]} w-auto object-contain max-w-none`}
      />
    </a>
  );
};

export default AppStoreButton;