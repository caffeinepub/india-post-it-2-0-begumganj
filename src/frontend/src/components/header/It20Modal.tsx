import { X } from 'lucide-react';
import { useEffect } from 'react';
import { useClickSound } from '@/hooks/useClickSound';

interface It20ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function It20Modal({ isOpen, onClose }: It20ModalProps) {
  const { playClose } = useClickSound();

  const handleClose = () => {
    playClose();
    onClose();
  };

  const handleBackdropClick = () => {
    playClose();
    onClose();
  };

  // Handle ESC key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        playClose();
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
  }, [isOpen, onClose, playClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="it20-modal-title"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-matte-black/80 backdrop-blur-sm" />

      {/* Modal Content */}
      <div
        className="relative frosted-glass-light rounded-lg border border-metallic-gold/30 shadow-official max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-md bg-matte-black/30 hover:bg-matte-black/50 transition-colors focus:outline-none focus:ring-2 focus:ring-metallic-gold"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-official-primary" />
        </button>

        {/* Content */}
        <div className="p-6 md:p-8">
          <h2 id="it20-modal-title" className="heading-md text-metallic-gold mb-4">
            India Post IT 2.0
          </h2>
          
          <div className="space-y-4 body-base text-official-primary">
            <p>
              India Post IT 2.0 represents a transformative digital initiative aimed at modernizing postal services across the nation. This comprehensive program integrates cutting-edge technology to enhance customer experience and operational efficiency.
            </p>
            
            <p>
              Through IT 2.0, we're bringing advanced digital solutions to every corner of India, ensuring that postal services remain accessible, reliable, and future-ready. Our commitment is to serve every citizen with excellence and innovation.
            </p>

            <div className="mt-6 pt-4 border-t official-divider">
              <h3 className="heading-sm text-neon-red mb-3">Key Features:</h3>
              <ul className="space-y-2 body-sm text-official-secondary list-disc list-inside">
                <li>Real-time tracking and monitoring</li>
                <li>Digital payment integration</li>
                <li>Enhanced security protocols</li>
                <li>Streamlined customer service</li>
                <li>Mobile-first approach</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
