import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import { SchemeTabs } from './SchemeTabs';
import type { SchemeData } from '@/data/schemes';
import { useClickSound } from '@/hooks/useClickSound';

interface SchemeModalProps {
  scheme: SchemeData | null;
  isOpen: boolean;
  onClose: () => void;
}

export function SchemeModal({ scheme, isOpen, onClose }: SchemeModalProps) {
  const { playClose } = useClickSound();

  const handleClose = () => {
    playClose();
    onClose();
  };

  if (!scheme) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      if (!open) {
        playClose();
        onClose();
      }
    }}>
      <DialogContent 
        className="frosted-glass border-metallic-gold/30 max-w-5xl max-h-[90vh] overflow-hidden p-0"
        aria-describedby="scheme-description"
      >
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-metallic-gold/25">
          <div className="flex items-start gap-4">
            <img
              src={scheme.iconPath}
              alt={scheme.label}
              className="w-16 h-16 md:w-20 md:h-20 object-contain flex-shrink-0"
            />
            <div className="flex-1">
              <DialogTitle className="heading-md mb-2">{scheme.label}</DialogTitle>
              <p id="scheme-description" className="body-sm text-official-secondary">
                {scheme.description}
              </p>
            </div>
          </div>
        </DialogHeader>

        <div className="overflow-y-auto px-6 py-6" style={{ maxHeight: 'calc(90vh - 180px)' }}>
          <SchemeTabs scheme={scheme} />
        </div>

        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-matte-black/30 hover:bg-matte-black/50 transition-colors focus:outline-none focus:ring-2 focus:ring-metallic-gold"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-official-primary" />
        </button>
      </DialogContent>
    </Dialog>
  );
}
