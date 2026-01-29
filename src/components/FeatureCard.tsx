
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon: Icon, title, description, className }: FeatureCardProps) => {
  return (
    <div className={cn("feature-card flex flex-col items-center transition-all duration-300", className)}>
      <div className="bg-gradient-to-br from-pett-light-blue to-pett-pink/30 p-4 rounded-full mb-4 animate-pulse-scale">
        <Icon size={24} className="text-blue-500" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-center text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
