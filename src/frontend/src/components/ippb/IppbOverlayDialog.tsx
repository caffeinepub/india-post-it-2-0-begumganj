import { useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { useClickSound } from '@/hooks/useClickSound';
import { Award, Fingerprint, Wallet } from 'lucide-react';

interface IppbOverlayDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Glass-morphic overlay modal with premium animations containing three distinct sections/cards:
 * Premium A/c, AePS, Regular A/c, each with headings and descriptive content.
 * Uses shadcn-ui Dialog for ESC/backdrop dismissal and accessibility.
 */
export function IppbOverlayDialog({ isOpen, onClose }: IppbOverlayDialogProps) {
  const { playClose } = useClickSound();

  // Play close sound when dialog closes
  useEffect(() => {
    if (!isOpen) {
      playClose();
    }
  }, [isOpen, playClose]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto ippb-glass-overlay border-metallic-gold/30 ippb-overlay-enter">
        <DialogHeader className="ippb-header-reveal">
          <DialogTitle className="heading-lg flex items-center gap-3">
            <img
              src="/assets/generated/ippb-logo-3d.dim_512x512.png"
              alt="IPPB"
              className="w-10 h-10 object-contain"
            />
            India Post Payments Bank Services
          </DialogTitle>
          <DialogDescription className="text-on-dark-secondary body-base">
            Explore our comprehensive banking solutions designed for your financial needs
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 md:grid-cols-3 mt-6">
          {/* Premium Account */}
          <div className="ippb-category-card ippb-card-stagger-1 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-metallic-gold/10 flex items-center justify-center group-hover:bg-metallic-gold/20 transition-all duration-300 group-hover:scale-110">
                <Award className="w-6 h-6 text-metallic-gold" />
              </div>
              <h3 className="heading-md text-metallic-gold">Premium A/c</h3>
            </div>
            <div className="space-y-3 text-on-dark-secondary body-sm">
              <p>
                <strong className="text-metallic-gold">Exclusive Benefits:</strong> Enjoy higher transaction limits, priority customer support, and premium banking features.
              </p>
              <p>
                <strong className="text-metallic-gold">Digital Rewards:</strong> Earn cashback on transactions, special discounts on partner services, and loyalty points redeemable across India Post network.
              </p>
              <p>
                <strong className="text-metallic-gold">Enhanced Services:</strong> Access to investment products, insurance schemes, and personalized financial advisory.
              </p>
            </div>
          </div>

          {/* AePS */}
          <div className="ippb-category-card ippb-card-stagger-2 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-neon-red/10 flex items-center justify-center group-hover:bg-neon-red/20 transition-all duration-300 group-hover:scale-110">
                <Fingerprint className="w-6 h-6 text-neon-red" />
              </div>
              <h3 className="heading-md text-neon-red">AePS</h3>
            </div>
            <div className="space-y-3 text-on-dark-secondary body-sm">
              <p>
                <strong className="text-neon-red">Aadhaar-Based Banking:</strong> Secure and convenient banking using your Aadhaar biometric authentication for cash withdrawal, balance inquiry, and fund transfers.
              </p>
              <p>
                <strong className="text-neon-red">Transaction History:</strong> Complete digital records of all AePS transactions with instant SMS and email notifications for transparency.
              </p>
              <p>
                <strong className="text-neon-red">Nationwide Access:</strong> Use AePS services at any India Post branch or authorized banking point across the country.
              </p>
            </div>
          </div>

          {/* Regular Account */}
          <div className="ippb-category-card ippb-card-stagger-3 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                <Wallet className="w-6 h-6 text-primary" />
              </div>
              <h3 className="heading-md text-primary">Regular A/c</h3>
            </div>
            <div className="space-y-3 text-on-dark-secondary body-sm">
              <p>
                <strong className="text-primary">Daily Banking:</strong> Manage your everyday transactions with ease - deposits, withdrawals, bill payments, and money transfers at your fingertips.
              </p>
              <p>
                <strong className="text-primary">Account History:</strong> Access detailed statements, track spending patterns, and download transaction reports anytime through our digital platform.
              </p>
              <p>
                <strong className="text-primary">Zero Balance:</strong> No minimum balance requirement, making banking accessible to everyone with doorstep banking services available.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
