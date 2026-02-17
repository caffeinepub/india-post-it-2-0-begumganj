import { Images } from 'lucide-react';
import { useClickSound } from '@/hooks/useClickSound';

interface GalleryCardProps {
  onClick: () => void;
}

export function GalleryCard({ onClick }: GalleryCardProps) {
  const { playTap } = useClickSound();

  const handleActivation = () => {
    playTap();
    onClick();
  };

  return (
    <button
      onClick={handleActivation}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleActivation();
        }
      }}
      className="group relative frosted-glass-light rounded-lg p-6 border border-[oklch(var(--official-dark-red)/0.4)] hover:border-[oklch(var(--official-dark-red)/0.7)] transition-all duration-200 hover:shadow-official focus:outline-none focus:ring-2 focus:ring-[oklch(var(--official-dark-red))] focus:ring-offset-2 focus:ring-offset-matte-black gallery-card-glow"
      aria-label="Open Gallery"
    >
      {/* Icon Container */}
      <div className="relative mb-5 aspect-square w-full max-w-[160px] mx-auto">
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(var(--official-dark-red)/0.15)] to-neon-red/10 rounded-lg blur-md group-hover:blur-lg transition-all duration-200" />
        <div className="relative w-full h-full flex items-center justify-center">
          <Images className="w-24 h-24 text-[oklch(var(--official-dark-red))] drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-200" />
        </div>
      </div>

      {/* Label */}
      <h3 className="heading-md text-[oklch(var(--official-dark-red))] group-hover:text-neon-red transition-colors duration-200 mb-2">
        Gallery
      </h3>
      
      {/* Description */}
      <p className="body-sm text-official-secondary group-hover:text-official-primary transition-colors duration-200">
        View our collection of moments
      </p>

      {/* Hover Indicator */}
      <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div className="w-7 h-7 rounded-full bg-[oklch(var(--official-dark-red)/0.15)] flex items-center justify-center border border-[oklch(var(--official-dark-red)/0.3)]">
          <svg className="w-3.5 h-3.5 text-[oklch(var(--official-dark-red))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </button>
  );
}
