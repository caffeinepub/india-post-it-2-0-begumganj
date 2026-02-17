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

  // Check if this is an RBP scheme (SB, RD, TD, SSA, MIS)
  const isRbpScheme = ['SB', 'RD', 'TD', 'SSA', 'MIS'].includes(scheme.id);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      if (!open) {
        playClose();
        onClose();
      }
    }}>
      <DialogContent 
        className="frosted-glass border-icon-accent-red/30 max-w-5xl max-h-[90vh] overflow-hidden p-0"
        aria-describedby="scheme-description"
      >
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-icon-accent-red/25">
          <div className="flex items-start gap-4">
            <img
              src={scheme.iconPath}
              alt={scheme.label}
              className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-lg icon-live"
            />
            <div className="flex-1">
              <DialogTitle className={`heading-lg mb-2 ${isRbpScheme ? 'rbp-scheme-title' : 'text-metallic-gold'}`}>
                {scheme.label}
              </DialogTitle>
              <p className="body-base details-text-red">{scheme.description}</p>
            </div>
            <button
              onClick={handleClose}
              className="p-2 rounded-md bg-neon-red/15 hover:bg-neon-red/25 transition-colors focus:outline-none focus:ring-2 focus:ring-icon-accent-red"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-official-primary icon-live" />
            </button>
          </div>
        </DialogHeader>

        <div className="px-6 py-6 overflow-y-auto max-h-[calc(90vh-140px)]" id="scheme-description">
          <SchemeTabs scheme={scheme} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
