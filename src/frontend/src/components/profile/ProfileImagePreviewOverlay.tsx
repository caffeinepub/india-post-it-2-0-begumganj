import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface ProfileImagePreviewOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

/**
 * Full-screen animated image-preview overlay component for profile images with smooth zoom-in/out animation.
 * Features gentle ease-in-out scale + fade entrance/exit, backdrop click-to-close, Escape-to-close, and delayed unmount for exit animation.
 * Production-hardened with proper event handling to prevent double-close issues.
 */
export function ProfileImagePreviewOverlay({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
}: ProfileImagePreviewOverlayProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Mount and trigger enter animation
      setShouldRender(true);
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    } else {
      // Trigger exit animation
      setIsVisible(false);
      // Delay unmount to allow exit animation to complete
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 400); // Match animation duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isVisible) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isVisible, onClose]);

  if (!shouldRender) return null;

  const handleCloseClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-[60] flex items-center justify-center p-4 bg-matte-black/95 backdrop-blur-lg transition-opacity duration-400 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Profile image preview"
    >
      {/* Close Button */}
      <button
        onClick={handleCloseClick}
        className="absolute top-4 right-4 p-3 rounded-full bg-neon-red/20 hover:bg-neon-red/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neon-red icon-live z-10"
        aria-label="Close image preview"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Image Container with Smooth Zoom Animation */}
      <div
        className={`relative max-w-4xl max-h-[90vh] transition-all duration-400 ease-in-out ${
          isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-contain rounded-lg shadow-2xl border-2 border-metallic-gold/30"
        />
      </div>
    </div>
  );
}
