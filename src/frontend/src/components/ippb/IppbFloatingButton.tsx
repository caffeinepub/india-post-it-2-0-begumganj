import { useState } from 'react';
import { useClickSound } from '../../hooks/useClickSound';
import { IppbOverlayDialog } from './IppbOverlayDialog';

/**
 * Fixed-position, center-bottom floating action button rendering the 3D IPPB logo with a soft glowing pulse ring animation that blinks every 1 second, triggering the overlay dialog on click with tap sound feedback.
 */
export function IppbFloatingButton() {
  const { playTap } = useClickSound();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    playTap();
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 group focus:outline-none focus:ring-2 focus:ring-icon-accent-red focus:ring-offset-2 focus:ring-offset-matte-black rounded-full"
        aria-label="Open IPPB Services"
      >
        {/* Pulsing Ring Animation with Red/Blue */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-icon-accent-red/30 to-icon-accent-blue/30 animate-ippb-pulse-ring" />
        
        {/* Button Container */}
        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-icon-accent-red/20 to-icon-accent-blue/20 backdrop-blur-md border border-icon-accent-red/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-lg group-hover:shadow-xl">
          <img
            src="/assets/generated/ippb-logo-3d.dim_512x512.png"
            alt="IPPB"
            className="w-10 h-10 object-contain drop-shadow-lg icon-live"
          />
        </div>
      </button>

      {/* Overlay Dialog */}
      <IppbOverlayDialog isOpen={isOpen} onClose={handleClose} />
    </>
  );
}
