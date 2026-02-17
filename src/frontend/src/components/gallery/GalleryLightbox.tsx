import { X, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { useClickSound } from '@/hooks/useClickSound';
import type { GalleryImage } from './galleryImages';

interface GalleryLightboxProps {
  image: GalleryImage;
  currentIndex: number;
  totalImages: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function GalleryLightbox({
  image,
  currentIndex,
  totalImages,
  onClose,
  onNext,
  onPrev
}: GalleryLightboxProps) {
  const { playTap, playClose } = useClickSound();

  const handleDownload = () => {
    playTap();
    const link = document.createElement('a');
    link.href = image.src;
    link.download = image.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleClose = () => {
    playClose();
    onClose();
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    playTap();
    onNext();
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    playTap();
    onPrev();
  };

  const handleBackdropClick = () => {
    playClose();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-[oklch(0.05_0_0/0.95)] backdrop-blur-md flex items-center justify-center"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
    >
      {/* Close Button with continuous animation */}
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 p-3 rounded-lg gallery-close-button border-0 transition-all focus:outline-none focus:ring-2 focus:ring-[oklch(var(--neon-red))] focus:ring-offset-2 focus:ring-offset-background z-10"
        aria-label="Close preview"
      >
        <X className="w-6 h-6 text-white relative z-10 icon-live" />
      </button>

      {/* Download Button with Red/Blue and continuous animation */}
      <button
        onClick={handleDownload}
        className="absolute top-4 right-20 p-3 rounded-lg bg-[oklch(0.1_0_0/0.8)] backdrop-blur-sm border border-[oklch(var(--icon-accent-red)/0.3)] hover:bg-[oklch(0.15_0_0/0.9)] transition-colors focus:outline-none focus:ring-2 focus:ring-[oklch(var(--icon-accent-red))] z-10"
        aria-label={`Download ${image.filename}`}
      >
        <Download className="w-6 h-6 text-icon-accent-red icon-live" />
      </button>

      {/* Image Counter */}
      <div className="absolute top-4 left-4 px-4 py-2 rounded-lg bg-[oklch(0.1_0_0/0.8)] backdrop-blur-sm border border-[oklch(var(--icon-accent-red)/0.3)] z-10">
        <span className="body-sm pink-bolt-text">
          {currentIndex + 1} / {totalImages}
        </span>
      </div>

      {/* Previous Button with Red/Blue and continuous animation */}
      <button
        onClick={handlePrev}
        className="absolute left-4 p-3 rounded-lg bg-[oklch(0.1_0_0/0.8)] backdrop-blur-sm border border-[oklch(var(--icon-accent-red)/0.3)] hover:bg-[oklch(0.15_0_0/0.9)] transition-colors focus:outline-none focus:ring-2 focus:ring-[oklch(var(--icon-accent-red))] z-10"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 text-icon-accent-blue icon-live" />
      </button>

      {/* Next Button with Red/Blue and continuous animation */}
      <button
        onClick={handleNext}
        className="absolute right-4 p-3 rounded-lg bg-[oklch(0.1_0_0/0.8)] backdrop-blur-sm border border-[oklch(var(--icon-accent-red)/0.3)] hover:bg-[oklch(0.15_0_0/0.9)] transition-colors focus:outline-none focus:ring-2 focus:ring-[oklch(var(--icon-accent-red))] z-10"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 text-icon-accent-blue icon-live" />
      </button>

      {/* Image */}
      <div
        className="max-w-[90vw] max-h-[85vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
}
