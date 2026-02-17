import { useState } from 'react';
import { It20Modal } from './It20Modal';
import { useClickSound } from '@/hooks/useClickSound';

export function FrostedHeader() {
  const [isIt20ModalOpen, setIsIt20ModalOpen] = useState(false);
  const { playTap } = useClickSound();

  const handleIt20Click = () => {
    playTap();
    setIsIt20ModalOpen(true);
  };

  return (
    <>
      <header className="relative z-30 w-full">
        <div className="frosted-glass border-b border-metallic-gold/25">
          <div className="container mx-auto px-4 py-4 md:py-5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Title */}
              <h1 className="heading-xl text-metallic-gold tracking-tight">
                India Post IT 2.0
              </h1>
              
              {/* Right Section: IT 2.0 Icon + Location Pill */}
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                {/* IT 2.0 Icon Button */}
                <button
                  onClick={handleIt20Click}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleIt20Click();
                    }
                  }}
                  className="group flex items-center gap-2 px-4 py-2 official-dark-red-pill rounded-full border border-red-900/50 hover:border-red-800/70 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 focus:ring-offset-matte-black"
                  aria-label="Learn more about IT 2.0"
                >
                  <img
                    src="/assets/generated/icon-it2.dim_512x512.png"
                    alt="IT 2.0"
                    className="w-6 h-6 md:w-7 md:h-7"
                  />
                  <span className="body-sm text-white font-semibold">
                    IT 2.0
                  </span>
                </button>

                {/* Location Pill */}
                <div className="flex items-center gap-2 px-4 py-2 bg-metallic-gold/10 rounded-full border border-metallic-gold/30">
                  <svg className="w-4 h-4 text-metallic-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="body-sm text-official-primary font-medium">
                    Mundla Chawal, Begumganj
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <It20Modal isOpen={isIt20ModalOpen} onClose={() => setIsIt20ModalOpen(false)} />
    </>
  );
}
