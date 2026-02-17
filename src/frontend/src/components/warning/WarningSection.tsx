import { Info } from 'lucide-react';
import { useState } from 'react';
import { CopyrightInfoDialog } from './CopyrightInfoDialog';
import { useClickSound } from '@/hooks/useClickSound';

/**
 * Warning section with accessible "I" info button that opens the copyright warning modal.
 * Replaces the previous Important Notice text display.
 */
export function WarningSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { playTap } = useClickSound();

  const handleOpenDialog = () => {
    playTap();
    setIsDialogOpen(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleOpenDialog();
    }
  };

  return (
    <>
      <section 
        className="w-full max-w-5xl mx-auto px-4 py-6 flex justify-center"
        role="region"
        aria-label="Copyright information"
      >
        <button
          onClick={handleOpenDialog}
          onKeyDown={handleKeyDown}
          className="w-12 h-12 rounded-full bg-gradient-to-br from-icon-accent-red/20 to-icon-accent-blue/20 border-2 border-icon-accent-red hover:border-icon-accent-blue flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-icon-accent-red focus:ring-offset-2 focus:ring-offset-matte-black icon-live"
          aria-label="Open copyright warning"
        >
          <Info className="w-6 h-6 text-icon-accent-red" aria-hidden="true" />
        </button>
      </section>

      <CopyrightInfoDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </>
  );
}
