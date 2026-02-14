import { useState } from 'react';
import { TypewriterNeon } from './TypewriterNeon';
import { X } from 'lucide-react';

export function BpmProfileCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  const bioData = [
    'Name: Prabal Pratap',
    'Designation: Branch Post Master (BPM)',
    'Branch Office: Mundla Chawal',
    'Sub Office: Begumganj',
    'Experience: 15+ years in postal services',
    'Specialization: Financial services & customer relations'
  ];

  return (
    <>
      {/* Compact Card */}
      {!isExpanded && (
        <div className="relative z-20 my-16">
          <div className="container mx-auto px-4">
            <button
              onClick={() => setIsExpanded(true)}
              className="mx-auto block frosted-glass-light rounded-2xl p-8 border-2 border-metallic-gold/40 hover:border-metallic-gold/70 transition-all duration-300 hover:shadow-glow-gold focus:outline-none focus:ring-2 focus:ring-metallic-gold focus:ring-offset-2 focus:ring-offset-matte-black"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Profile Photo */}
                <div className="relative">
                  <div className="absolute inset-0 bg-metallic-gold/30 rounded-full blur-xl" />
                  <img
                    src="/assets/generated/profile-prabal-pratap.dim_1024x1024.png"
                    alt="Prabal Pratap - Branch Post Master"
                    className="relative w-32 h-32 rounded-full object-cover border-4 border-metallic-gold/60"
                  />
                </div>

                {/* Basic Info */}
                <div className="text-center md:text-left">
                  <h3 className="heading-md text-metallic-gold mb-1">Prabal Pratap</h3>
                  <p className="body-base text-neon-red font-semibold mb-2">Branch Post Master</p>
                  <p className="body-sm text-official-secondary">Click to view full profile</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Expanded Overlay */}
      {isExpanded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-500">
          {/* Background Dim */}
          <div 
            className="absolute inset-0 bg-matte-black/85 backdrop-blur-sm"
            onClick={() => setIsExpanded(false)}
          />

          {/* Content */}
          <div className="relative frosted-glass rounded-3xl border-2 border-metallic-gold/50 max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-500 shadow-official">
            {/* Close Button */}
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neon-red/20 hover:bg-neon-red/40 transition-colors focus:outline-none focus:ring-2 focus:ring-metallic-gold"
              aria-label="Close profile"
            >
              <X className="w-6 h-6 text-official-primary hover:text-neon-red transition-colors" />
            </button>

            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Photo slides up from bottom-left */}
                <div className="relative animate-in slide-in-from-bottom-8 duration-700">
                  <div className="absolute inset-0 bg-metallic-gold/40 rounded-2xl blur-2xl" />
                  <img
                    src="/assets/generated/profile-prabal-pratap.dim_1024x1024.png"
                    alt="Prabal Pratap - Branch Post Master"
                    className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover border-4 border-metallic-gold/70 shadow-glow-gold"
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
              <div className="mt-8 pt-8 border-t border-metallic-gold/30">
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
