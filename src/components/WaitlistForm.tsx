import React from 'react';
import { CartoonButton } from '@/components/ui/cartoon-button';

interface WaitlistFormProps {
  className?: string;
}

const WaitlistForm = ({ className }: WaitlistFormProps) => {
  return (
    <div className={`bg-white/80 backdrop-blur-sm p-4 rounded-3xl shadow-md ${className}`}>
      <a
        href="https://forms.gle/bKBM2P1v63UT27wF7"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <CartoonButton
          type="button"
          variant="blue"
          size="default"
          withBubbles={true}
          className="w-full whitespace-nowrap font-bold py-4 text-lg"
        >
          Join Waitlist
        </CartoonButton>
      </a>
    </div>
  );
};

export default WaitlistForm;
