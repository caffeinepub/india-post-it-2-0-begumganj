import { useState } from 'react';
import { MapPin, Sparkles } from 'lucide-react';
import { It20Modal } from './It20Modal';
import { useClickSound } from '../../hooks/useClickSound';

/**
 * Frosted-glass header with refined official styling featuring the IT 2.0 button with continuous icon-live animation,
 * location icon with continuous animation, tap sound feedback, and improved text contrast with white/pink theme over cinematic background.
 * Displays "B.O - Mundla Chawal" and "S.O - Begumganj" as the subtitle.
 */
export function FrostedHeader() {
  const [isIt20ModalOpen, setIsIt20ModalOpen] = useState(false);
  const { playTap } = useClickSound();

  const handleIt20Click = () => {
    playTap();
    setIsIt20ModalOpen(true);
  };

  const handleIt20KeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleIt20Click();
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full">
        <div className="frosted-glass border-b border-metallic-gold/20">
          <div className="container mx-auto px-4 py-4 md:py-5">
            <div className="flex items-center justify-between gap-4">
              {/* Logo & Title */}
              <div className="flex items-center gap-3 md:gap-4">
                <img
                  src="/assets/generated/portal-emblem.dim_512x512.png"
                  alt="India Post Logo"
                  className="w-10 h-10 md:w-12 md:h-12 object-contain drop-shadow-lg"
                />
                <div className="flex flex-col">
                  <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-white leading-tight">
                    India Post Portal
                  </h1>
                  <p className="text-xs md:text-sm text-pink-400 font-medium">
                    B.O - Mundla Chawal | S.O - Begumganj
                  </p>
                </div>
              </div>

              {/* Right Section */}
              <div className="flex items-center gap-2 md:gap-3">
                {/* Location Pill with Red/Blue Icon and continuous animation */}
                <div className="hidden sm:flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-matte-black/40 border border-icon-accent-red/25">
                  <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-icon-accent-red icon-live" aria-hidden="true" />
                  <span className="text-xs md:text-sm font-medium text-white">
                    Madhya Pradesh
                  </span>
                </div>

                {/* IT 2.0 Button with continuous animation */}
                <button
                  onClick={handleIt20Click}
                  onKeyDown={handleIt20KeyDown}
                  className="official-dark-red-pill px-3 md:px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neon-red focus:ring-offset-2 focus:ring-offset-matte-black"
                  aria-label="Open IT 2.0 Information"
                >
                  <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-white icon-live" aria-hidden="true" />
                  <span className="text-xs md:text-sm font-semibold text-white">
                    IT 2.0
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* IT 2.0 Modal */}
      <It20Modal isOpen={isIt20ModalOpen} onClose={() => setIsIt20ModalOpen(false)} />
    </>
  );
}
