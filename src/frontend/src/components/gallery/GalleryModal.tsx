import { useState, useEffect, useCallback } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { X, Download } from 'lucide-react';
import { galleryImages } from './galleryImages';
import { GalleryLightbox } from './GalleryLightbox';
import { useClickSound } from '@/hooks/useClickSound';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GalleryModal({ isOpen, onClose }: GalleryModalProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
  const { playTap, playClose } = useClickSound();

  const handleImageError = (index: number) => {
    setImageErrors(prev => new Set(prev).add(index));
  };

  const handleImageLoad = (index: number) => {
    // Clear error state if image loads successfully
    setImageErrors(prev => {
      const newSet = new Set(prev);
      newSet.delete(index);
      return newSet;
    });
  };

  const handleDownload = (src: string, filename: string, e: React.MouseEvent) => {
    e.stopPropagation();
    playTap();
    const link = document.createElement('a');
    link.href = src;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openLightbox = (index: number) => {
    playTap();
    setSelectedImageIndex(index);
  };

  const closeLightbox = useCallback(() => {
    playClose();
    setSelectedImageIndex(null);
  }, [playClose]);

  const nextImage = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % galleryImages.length);
    }
  }, [selectedImageIndex]);

  const prevImage = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  }, [selectedImageIndex]);

  const handleClose = () => {
    playClose();
    onClose();
  };

  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, nextImage, prevImage, closeLightbox]);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setSelectedImageIndex(null);
      setImageErrors(new Set());
    }
  }, [isOpen]);

  return (
    <>
      <Dialog open={isOpen && selectedImageIndex === null} onOpenChange={(open) => {
        if (!open) {
          playClose();
          onClose();
        }
      }}>
        <DialogContent 
          className="frosted-glass border-[oklch(var(--metallic-gold)/0.3)] max-w-6xl max-h-[90vh] overflow-hidden p-0 gallery-modal-enter"
          aria-describedby="gallery-description"
        >
          <DialogHeader className="px-6 pt-6 pb-4 border-b border-[oklch(var(--metallic-gold)/0.25)]">
            <DialogTitle className="heading-md">Gallery</DialogTitle>
            <p id="gallery-description" className="body-sm text-official-secondary mt-2">
              Browse our collection of moments from India Post IT 2.0
            </p>
          </DialogHeader>

          <div className="overflow-y-auto px-6 py-6" style={{ maxHeight: 'calc(90vh - 120px)' }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-video bg-[oklch(0.12_0_0)] rounded-lg overflow-hidden border border-[oklch(var(--metallic-gold)/0.2)] hover:border-[oklch(var(--metallic-gold)/0.5)] transition-all duration-300"
                >
                  {imageErrors.has(index) ? (
                    <div className="absolute inset-0 flex items-center justify-center text-official-secondary body-sm p-4 text-center">
                      Image unavailable
                    </div>
                  ) : (
                    <>
                      <button
                        onClick={() => openLightbox(index)}
                        className="w-full h-full focus:outline-none focus:ring-2 focus:ring-[oklch(var(--neon-red))] focus:ring-offset-2 focus:ring-offset-background"
                        aria-label={`Open ${image.alt}`}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                          onError={() => handleImageError(index)}
                          onLoad={() => handleImageLoad(index)}
                        />
                      </button>

                      {/* Download Button Overlay */}
                      <button
                        onClick={(e) => handleDownload(image.src, image.filename, e)}
                        className="absolute top-2 right-2 p-2 bg-[oklch(0.05_0_0/0.8)] backdrop-blur-sm rounded-lg border border-[oklch(var(--metallic-gold)/0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[oklch(0.1_0_0/0.9)] focus:outline-none focus:ring-2 focus:ring-[oklch(var(--neon-red))] focus:opacity-100"
                        aria-label={`Download ${image.filename}`}
                      >
                        <Download className="w-4 h-4 text-metallic-gold" />
                      </button>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-lg bg-[oklch(0.1_0_0/0.8)] backdrop-blur-sm border border-[oklch(var(--metallic-gold)/0.3)] hover:bg-[oklch(0.15_0_0/0.9)] transition-colors focus:outline-none focus:ring-2 focus:ring-[oklch(var(--neon-red))]"
            aria-label="Close gallery"
          >
            <X className="w-5 h-5 text-official-primary" />
          </button>
        </DialogContent>
      </Dialog>

      {/* Lightbox */}
      {selectedImageIndex !== null && (
        <GalleryLightbox
          image={galleryImages[selectedImageIndex]}
          currentIndex={selectedImageIndex}
          totalImages={galleryImages.length}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </>
  );
}
