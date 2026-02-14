import { X } from 'lucide-react';
import { useEffect } from 'react';

interface It20ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function It20Modal({ isOpen, onClose }: It20ModalProps) {
  // Handle ESC key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="it20-modal-title"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-matte-black/80 backdrop-blur-sm" />

      {/* Modal Content */}
      <div
        className="relative frosted-glass-light rounded-2xl border-2 border-metallic-gold/40 shadow-official max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-matte-black/40 hover:bg-matte-black/60 border border-metallic-gold/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-metallic-gold"
          aria-label="Close IT 2.0 information"
        >
          <X className="w-5 h-5 text-metallic-gold" />
        </button>

        {/* Content */}
        <div className="p-8 md:p-10">
          <div className="flex items-center gap-4 mb-6">
            <img
              src="/assets/generated/icon-it2.dim_512x512.png"
              alt="IT 2.0 Badge"
              className="w-16 h-16 md:w-20 md:h-20"
            />
            <h2
              id="it20-modal-title"
              className="heading-lg text-metallic-gold neon-glow-subtle"
            >
              India Post IT 2.0
            </h2>
          </div>

          <div className="space-y-4 text-official-primary">
            <p className="body-lg leading-relaxed">
              India Post IT 2.0 represents the digital transformation initiative of the Department of Posts, Government of India. This modernization program aims to enhance postal services through cutting-edge technology and digital infrastructure.
            </p>

            <div className="space-y-3 mt-6">
              <h3 className="heading-md text-neon-red">Key Features</h3>
              <ul className="space-y-2 body-base text-official-secondary list-disc list-inside">
                <li>Digital payment integration for all postal services</li>
                <li>Real-time tracking and monitoring systems</li>
                <li>Enhanced customer service through mobile and web platforms</li>
                <li>Automated post office operations</li>
                <li>Secure online account management</li>
                <li>Seamless integration with government digital initiatives</li>
              </ul>
            </div>

            <div className="mt-6 p-4 bg-metallic-gold/10 rounded-lg border border-metallic-gold/30">
              <p className="body-sm text-official-tertiary italic">
                The IT 2.0 initiative ensures that India Post remains at the forefront of digital innovation while maintaining the trust and reliability that has defined our services for over 150 years.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
