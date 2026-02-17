import { useState } from 'react';
import { useClickSound } from '@/hooks/useClickSound';
import { IppbOverlayDialog } from './IppbOverlayDialog';

/**
 * IPPB grid card component displaying the 3D IPPB logo with continuous icon-live animation, opening its own overlay dialog when activated, supporting both mouse/touch and keyboard interactions with tap sound feedback.
 */
export function IppbGridCard() {
  const { playTap } = useClickSound();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    playTap();
    setIsOpen(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-matte-black/60 to-matte-black/40 backdrop-blur-md border border-icon-accent-red/30 hover:border-icon-accent-blue/50 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-icon-accent-red focus:ring-offset-2 focus:ring-offset-matte-black"
        aria-label="Open IPPB Services"
      >
        {/* Icon Backplate with Red/Blue Gradient */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-icon-accent-red/10 to-icon-accent-blue/10 rounded-bl-full opacity-50 group-hover:opacity-70 transition-opacity duration-300" />

        <div className="relative p-6 flex flex-col items-center justify-center h-full text-center">
          {/* IPPB Logo with continuous animation */}
          <div className="mb-4">
            <img
              src="/assets/generated/ippb-logo-3d.dim_512x512.png"
              alt="IPPB"
              className="w-20 h-20 object-contain drop-shadow-lg icon-live"
            />
          </div>

          {/* Label */}
          <h3 className="heading-sm mb-2 text-white group-hover:text-icon-accent-red transition-colors duration-200">
            IPPB Services
          </h3>

          {/* Description */}
          <p className="body-sm details-text-red">
            India Post Payment Bank - Digital banking solutions
          </p>
        </div>
      </div>

      {/* Overlay Dialog */}
      <IppbOverlayDialog isOpen={isOpen} onClose={handleClose} />
    </>
  );
}
