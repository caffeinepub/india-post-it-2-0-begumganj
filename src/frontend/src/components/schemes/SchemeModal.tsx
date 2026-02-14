import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { getScheme, type SchemeId } from '@/data/schemes';
import { SchemeTabs } from './SchemeTabs';
import { X } from 'lucide-react';

interface SchemeModalProps {
  schemeId: SchemeId | null;
  isOpen: boolean;
  onClose: () => void;
}

export function SchemeModal({ schemeId, isOpen, onClose }: SchemeModalProps) {
  if (!schemeId) return null;

  const scheme = getScheme(schemeId);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto frosted-glass border-2 border-metallic-gold/40 p-0 shadow-official">
        {/* Header with Close Button */}
        <DialogHeader className="sticky top-0 z-10 frosted-glass border-b border-metallic-gold/30 p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <DialogTitle className="heading-lg text-metallic-gold neon-glow-subtle mb-2">
                {scheme.label}
              </DialogTitle>
              <p className="body-sm text-official-secondary">{scheme.description}</p>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 p-2 rounded-full hover:bg-neon-red/20 transition-colors focus:outline-none focus:ring-2 focus:ring-metallic-gold"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-official-primary hover:text-neon-red transition-colors" />
            </button>
          </div>
        </DialogHeader>

        {/* Tabs Content */}
        <div className="p-6">
          <SchemeTabs scheme={scheme} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
