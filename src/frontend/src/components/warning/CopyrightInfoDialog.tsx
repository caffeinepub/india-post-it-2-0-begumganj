import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { AlertTriangle, X } from 'lucide-react';
import { useClickSound } from '@/hooks/useClickSound';

interface CopyrightInfoDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Copyright warning modal with blue text and animated red warning effects.
 * Displays the exact copyright warning message with pulsing red border and animated icon.
 */
export function CopyrightInfoDialog({ isOpen, onClose }: CopyrightInfoDialogProps) {
  const { playClose } = useClickSound();

  const handleClose = () => {
    playClose();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      if (!open) {
        playClose();
        onClose();
      }
    }}>
      <DialogContent 
        className="frosted-glass copyright-warning-border max-w-2xl"
        aria-describedby="copyright-warning-description"
      >
        <DialogHeader>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <AlertTriangle className="w-10 h-10 text-neon-red icon-live" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <DialogTitle className="heading-lg text-neon-red mb-4">
                Copyright Warning
              </DialogTitle>
            </div>
            <button
              onClick={handleClose}
              className="p-2 rounded-md bg-neon-red/15 hover:bg-neon-red/25 transition-colors focus:outline-none focus:ring-2 focus:ring-neon-red icon-live"
              aria-label="Close warning"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
        </DialogHeader>

        <div className="mt-4" id="copyright-warning-description">
          <p className="body-base copyright-blue-text leading-relaxed">
            https://www.google.com/Prabalpratapcom is protected by International Copyright Laws. Any unauthorized reproduction, distribution, or theft of text, design, or graphics will result in immediate Legal Action and a DMCA takedown notice without further warning. We track all IP addresses of unauthorized scrapers.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
