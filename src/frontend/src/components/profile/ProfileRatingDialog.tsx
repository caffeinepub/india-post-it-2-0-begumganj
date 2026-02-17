import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Star, X } from 'lucide-react';
import { useProfileRating } from '@/hooks/useProfileRating';
import { useClickSound } from '@/hooks/useClickSound';

interface ProfileRatingDialogProps {
  isOpen: boolean;
  onClose: () => void;
  username: string;
}

/**
 * Rating prompt dialog that appears after closing the profile overlay.
 * Allows users to submit a 1-5 star rating and displays the last submitted rating.
 */
export function ProfileRatingDialog({ isOpen, onClose, username }: ProfileRatingDialogProps) {
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [hoveredRating, setHoveredRating] = useState<number>(0);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { rating, submitRating, isSubmitting } = useProfileRating(username);
  const { playTap, playClose } = useClickSound();

  // Reset state when dialog opens
  useEffect(() => {
    if (isOpen) {
      setSelectedRating(0);
      setHasSubmitted(false);
    }
  }, [isOpen]);

  const handleStarClick = (star: number) => {
    playTap();
    setSelectedRating(star);
  };

  const handleSubmit = () => {
    if (selectedRating > 0) {
      playTap();
      submitRating(selectedRating);
      setHasSubmitted(true);
    }
  };

  const handleClose = () => {
    playClose();
    onClose();
  };

  const displayRating = hoveredRating || selectedRating;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md frosted-glass-light border-metallic-gold/30 shadow-official">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-md bg-neon-red/20 hover:bg-neon-red/30 transition-colors focus:outline-none focus:ring-2 focus:ring-neon-red icon-live"
          aria-label="Close rating dialog"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <DialogHeader>
          <DialogTitle className="heading-lg text-metallic-gold">
            Rate This Profile
          </DialogTitle>
          <DialogDescription className="body-base details-text-red">
            {hasSubmitted
              ? 'Thank you for your feedback!'
              : 'How would you rate your experience?'}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {!hasSubmitted ? (
            <>
              {/* Star Rating Input */}
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => handleStarClick(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    className="transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-metallic-gold rounded"
                    aria-label={`Rate ${star} stars`}
                  >
                    <Star
                      className={`w-10 h-10 transition-colors ${
                        star <= displayRating
                          ? 'fill-metallic-gold text-metallic-gold'
                          : 'text-metallic-gold/30'
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* Submit Button */}
              <Button
                onClick={handleSubmit}
                disabled={selectedRating === 0 || isSubmitting}
                className="w-full bg-gradient-to-r from-icon-accent-red to-icon-accent-blue hover:opacity-90 text-white font-semibold"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Rating'}
              </Button>
            </>
          ) : (
            <>
              {/* Success Message */}
              <div className="text-center space-y-4">
                <div className="flex justify-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-8 h-8 ${
                        star <= selectedRating
                          ? 'fill-metallic-gold text-metallic-gold'
                          : 'text-metallic-gold/30'
                      }`}
                    />
                  ))}
                </div>
                <p className="body-lg animated-blue-yellow-black-text">
                  You rated {selectedRating}/5
                </p>
              </div>

              <Button
                onClick={handleClose}
                className="w-full bg-metallic-gold hover:bg-metallic-gold/90 text-matte-black font-semibold"
              >
                Close
              </Button>
            </>
          )}

          {/* Display Last Rating */}
          {rating && !hasSubmitted && (
            <div className="border-t border-metallic-gold/20 pt-4">
              <p className="body-sm details-text-red text-center">
                Last rating: {Number(rating.rating)}/5
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
