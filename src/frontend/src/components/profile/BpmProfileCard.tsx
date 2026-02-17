import { useState } from 'react';
import { TypewriterNeon } from './TypewriterNeon';
import { X } from 'lucide-react';
import { useClickSound } from '@/hooks/useClickSound';

export function BpmProfileCard() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { playTap, playClose } = useClickSound();

  const bioData = [
    'Name: Prabal Pratap',
    'Designation: Branch Post Master (BPM)',
    'Branch Office: Mundla Chawal',
    'Sub Office: Begumganj',
    'Experience: 15+ years in postal services',
    'Specialization: Financial services & customer relations'
  ];

  const handleOpen = () => {
    playTap();
    setIsExpanded(true);
  };

  const handleClose = () => {
    playClose();
    setIsExpanded(false);
  };

  const handleBackdropClick = () => {
    playClose();
    setIsExpanded(false);
  };

  return (
    <>
      {/* Compact Card */}
      {!isExpanded && (
        <div className="relative z-20 my-12 md:my-16">
          <div className="container mx-auto px-4">
            <button
              onClick={handleOpen}
              className="mx-auto block frosted-glass-light rounded-lg p-6 md:p-8 border border-metallic-gold/30 hover:border-metallic-gold/50 transition-all duration-200 hover:shadow-official focus:outline-none focus:ring-2 focus:ring-metallic-gold focus:ring-offset-2 focus:ring-offset-matte-black"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Profile Photo */}
                <div className="relative">
                  <div className="absolute inset-0 bg-metallic-gold/20 rounded-full blur-lg" />
                  <img
                    src="/assets/generated/profile-prabal-pratap.dim_1024x1024.png"
                    alt="Prabal Pratap - Branch Post Master"
                    className="relative w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-2 border-metallic-gold/50"
                  />
                </div>

                {/* Basic Info */}
                <div className="text-center md:text-left">
                  <h3 className="heading-md text-metallic-gold mb-1">Prabal Pratap</h3>
                  <p className="body-base text-neon-red font-semibold mb-1.5">Branch Post Master</p>
                  <p className="body-sm text-official-secondary">Click to view full profile</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Expanded Overlay */}
      {isExpanded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          {/* Background Dim */}
          <div 
            className="absolute inset-0 bg-matte-black/85 backdrop-blur-sm"
            onClick={handleBackdropClick}
          />

          {/* Content */}
          <div className="relative frosted-glass rounded-xl border border-metallic-gold/40 max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300 shadow-official">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-md bg-neon-red/15 hover:bg-neon-red/25 transition-colors focus:outline-none focus:ring-2 focus:ring-metallic-gold"
              aria-label="Close profile"
            >
              <X className="w-5 h-5 text-official-primary" />
            </button>

            <div className="p-6 md:p-10">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Photo */}
                <div className="relative animate-in slide-in-from-bottom-4 duration-500">
                  <div className="absolute inset-0 bg-metallic-gold/25 rounded-lg blur-xl" />
                  <img
                    src="/assets/generated/profile-prabal-pratap.dim_1024x1024.png"
                    alt="Prabal Pratap - Branch Post Master"
                    className="relative w-44 h-44 md:w-56 md:h-56 rounded-lg object-cover border-2 border-metallic-gold/50 shadow-official-sm"
                  />
                </div>

                {/* Bio with typewriter effect */}
                <div className="flex-1 space-y-4">
                  <TypewriterNeon
                    lines={bioData}
                    typingSpeed={30}
                    lineDelay={200}
                  />
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-6 border-t official-divider">
                <p className="body-base text-official-primary leading-relaxed">
                  With over 15 years of dedicated service to India Post, Prabal Pratap has been instrumental 
                  in modernizing postal services in the Begumganj region. His commitment to customer satisfaction 
                  and financial inclusion has helped thousands of families secure their future through various 
                  postal schemes and services.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
