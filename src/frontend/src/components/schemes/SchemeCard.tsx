import { ArrowRight } from 'lucide-react';
import type { SchemeData } from '@/data/schemes';
import { useClickSound } from '@/hooks/useClickSound';

interface SchemeCardProps {
  scheme: SchemeData;
  onClick: () => void;
}

export function SchemeCard({ scheme, onClick }: SchemeCardProps) {
  const { playTap } = useClickSound();

  const handleClick = () => {
    playTap();
    onClick();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-matte-black/60 to-matte-black/40 backdrop-blur-md border border-icon-accent-red/30 hover:border-icon-accent-blue/50 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-icon-accent-red focus:ring-offset-2 focus:ring-offset-matte-black"
      aria-label={`View details for ${scheme.label}`}
    >
      {/* Icon Backplate with Red/Blue Gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-icon-accent-red/10 to-icon-accent-blue/10 rounded-bl-full opacity-50 group-hover:opacity-70 transition-opacity duration-300" />

      <div className="relative p-6 flex flex-col h-full">
        {/* Icon with continuous animation */}
        <div className="mb-4">
          <img
            src={scheme.iconPath}
            alt={scheme.label}
            className="w-16 h-16 object-contain drop-shadow-lg icon-live"
          />
        </div>

        {/* Label */}
        <h3 className="heading-sm mb-2 text-white group-hover:text-icon-accent-red transition-colors duration-200">
          {scheme.shortLabel}
        </h3>

        {/* Description */}
        <p className="body-sm details-text-red flex-1 mb-4">
          {scheme.description}
        </p>

        {/* Hover Indicator */}
        <div className="flex items-center gap-2 text-icon-accent-blue group-hover:text-icon-accent-red transition-colors duration-200">
          <span className="body-sm font-semibold">Learn More</span>
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-icon-accent-red/20 to-icon-accent-blue/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
            <ArrowRight className="w-4 h-4 icon-live" />
          </div>
        </div>
      </div>
    </div>
  );
}
