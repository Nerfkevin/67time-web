import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface CartoonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'blue' | 'pink';
  size?: 'default' | 'sm' | 'lg';
  withBubbles?: boolean;
}

const CartoonButton = React.forwardRef<HTMLButtonElement, CartoonButtonProps>(
  ({ children, className, variant = 'blue', size = 'default', withBubbles = false, ...props }, ref) => {
    const baseStyles = "relative font-semibold rounded-full transition-all transform hover:animate-jelly active:scale-95 active:translate-y-1 shadow-[inset_0_-4px_0_rgba(0,0,0,0.2)] hover:shadow-[inset_0_-6px_0_rgba(0,0,0,0.2)] overflow-hidden";
    
    const variantStyles = {
      blue: "bg-pett-blue hover:bg-blue-300 text-pett-text border-2 border-blue-400",
      pink: "bg-pett-pink hover:bg-pink-300 text-pett-text border-2 border-pink-400",
    };
    
    const sizeStyles = {
      sm: "px-4 py-2 text-sm",
      default: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    // State to track if component is mounted (client-side)
    const [isMounted, setIsMounted] = useState(false);
    
    useEffect(() => {
      setIsMounted(true);
    }, []);

    // Create random bubbles for animation
    const renderBubbles = () => {
      if (!withBubbles || !isMounted) return null;
      
      return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-full">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className={`absolute rounded-full bg-white/30 animate-bubble`}
              style={{
                width: `${Math.random() * 20 + 10}px`,
                height: `${Math.random() * 20 + 10}px`,
                left: `${Math.random() * 100}%`,
                bottom: '-100px', // Push bubbles way below the button
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            />
          ))}
        </div>
      );
    };
    
    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className,
          "group"
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center gap-2 animate-bounce-small">
          {children}
        </span>
        {renderBubbles()}
        <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity rounded-full">
          <span className="absolute -inset-[100%] animate-shimmer opacity-70 blur-md bg-gradient-to-r from-transparent via-white to-transparent bg-[length:200%_100%]"></span>
        </span>
        <span className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
      </button>
    );
  }
);

CartoonButton.displayName = 'CartoonButton';

export { CartoonButton };