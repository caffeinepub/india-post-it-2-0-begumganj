import { useState } from 'react';
import { It20Modal } from './It20Modal';

export function FrostedHeader() {
  const [isIt20ModalOpen, setIsIt20ModalOpen] = useState(false);

  return (
    <>
      <header className="relative z-30 w-full">
        <div className="frosted-glass border-b border-metallic-gold/30">
          <div className="container mx-auto px-4 py-5 md:py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Title */}
              <h1 className="heading-xl text-metallic-gold neon-glow-subtle tracking-official">
                India Post IT 2.0
              </h1>
              
              {/* Right Section: IT 2.0 Icon + Location Pill */}
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                {/* IT 2.0 Icon Button */}
                <button
                  onClick={() => setIsIt20ModalOpen(true)}
                  className="group flex items-center gap-2 px-4 py-2 official-dark-red-pill rounded-full border border-red-900/60 hover:border-red-800/80 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-700"
                  aria-label="Learn more about IT 2.0"
                >
                  <img
                    src="/assets/generated/icon-it2.dim_512x512.png"
                    alt="IT 2.0"
                    className="w-6 h-6 md:w-7 md:h-7"
                  />
                  <span className="body-sm text-white font-semibold group-hover:brightness-110 transition-all">
                    IT 2.0
                  </span>
                </button>

                {/* Location Pill */}
                <div className="frosted-glass-light px-6 py-2.5 rounded-full border border-metallic-gold/40">
                  <p className="body-sm text-official-primary font-medium whitespace-nowrap">
                    <span className="text-neon-red font-semibold">B.O:</span> Mundla Chawal{' '}
                    <span className="text-metallic-gold mx-2">|</span>{' '}
                    <span className="text-neon-red font-semibold">S.O:</span> Begumganj
                  </p>
                </div>
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
