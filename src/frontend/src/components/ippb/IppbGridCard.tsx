import { useClickSound } from '@/hooks/useClickSound';
import { useState } from 'react';
import { IppbOverlayDialog } from './IppbOverlayDialog';

/**
 * IPPB grid card component that displays the 3D IPPB logo and opens the overlay dialog when activated.
 * Supports both mouse/touch and keyboard (Enter/Space) interactions with tap sound feedback.
 */
export function IppbGridCard() {
  const { playTap } = useClickSound();
  const [isOpen, setIsOpen] = useState(false);

  const handleActivation = () => {
    playTap();
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={handleActivation}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleActivation();
          }
        }}
        className="group relative frosted-glass-light rounded-lg p-6 border border-metallic-gold/25 hover:border-metallic-gold/50 transition-all duration-200 hover:shadow-official focus:outline-none focus:ring-2 focus:ring-metallic-gold focus:ring-offset-2 focus:ring-offset-matte-black"
        aria-label="Open IPPB Services"
      >
        {/* Icon Container */}
        <div className="relative mb-5 aspect-square w-full max-w-[160px] mx-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-metallic-gold/10 to-neon-red/10 rounded-lg blur-md group-hover:blur-lg transition-all duration-200" />
          <img
            src="/assets/generated/ippb-logo-3d.dim_512x512.png"
            alt="IPPB Logo"
            className="relative w-full h-full object-contain drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-200"
          />
        </div>

        {/* Label */}
        <h3 className="heading-md text-metallic-gold group-hover:text-neon-red transition-colors duration-200 mb-2">
          IPPB
        </h3>
        
        {/* Description */}
        <p className="body-sm text-official-secondary group-hover:text-official-primary transition-colors duration-200">
          India Post Payments Bank Services
        </p>

        {/* Hover Indicator */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="w-7 h-7 rounded-full bg-metallic-gold/15 flex items-center justify-center border border-metallic-gold/30">
            <svg className="w-3.5 h-3.5 text-metallic-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </button>

      {/* Overlay Dialog */}
      <IppbOverlayDialog isOpen={isOpen} onClose={handleClose} />
    </>
  );
}
