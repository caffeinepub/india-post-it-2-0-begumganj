import { useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '../../components/ui/dialog';
import { useClickSound } from '../../hooks/useClickSound';
import { Award, Fingerprint, Wallet, X } from 'lucide-react';

interface IppbOverlayDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Glass-morphic overlay modal with premium animations containing three distinct sections/cards with continuous icon animations.
 * Uses shadcn-ui Dialog for ESC/backdrop dismissal and accessibility. All pink text replaced with blue/yellow/black animated treatment.
 */
export function IppbOverlayDialog({ isOpen, onClose }: IppbOverlayDialogProps) {
  const { playClose } = useClickSound();

  // Play close sound when dialog closes
  useEffect(() => {
    if (!isOpen) {
      playClose();
    }
  }, [isOpen, playClose]);

  const handleClose = () => {
    playClose();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto ippb-glass-overlay border-icon-accent-red/30 ippb-overlay-enter">
        {/* Custom Red Close Button with continuous animation */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-md bg-neon-red/20 hover:bg-neon-red/30 transition-colors focus:outline-none focus:ring-2 focus:ring-neon-red focus:ring-offset-2 focus:ring-offset-matte-black ippb-close-button"
          aria-label="Close IPPB Services"
        >
          <X className="w-5 h-5 text-neon-red icon-live" />
        </button>

        <DialogHeader className="ippb-header-reveal">
          <DialogTitle className="heading-lg flex items-center gap-3">
            <img
              src="/assets/generated/ippb-logo-3d.dim_512x512.png"
              alt="IPPB"
              className="w-10 h-10 object-contain icon-live"
            />
            India Post Payment Service
          </DialogTitle>
          <DialogDescription className="text-on-dark-secondary body-base animated-blue-yellow-black-text">
            Explore our comprehensive banking solutions designed for your financial needs
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 md:grid-cols-3 mt-6">
          {/* Premium Account */}
          <div className="ippb-category-card ippb-card-stagger-1 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-icon-accent-red/10 flex items-center justify-center group-hover:bg-icon-accent-red/20 transition-all duration-300 group-hover:scale-110">
                <Award className="w-6 h-6 text-icon-accent-red icon-live" />
              </div>
              <h3 className="heading-md text-icon-accent-red">Premium A/c</h3>
            </div>
            <div className="space-y-3 text-on-dark-secondary body-sm animated-blue-yellow-black-text">
              <p>
                <strong className="ippb-label-blue-yellow-black">Exclusive Benefits:</strong> Enjoy higher transaction limits, priority customer support, and premium banking features.
              </p>
              <p>
                <strong className="ippb-label-blue-yellow-black">Digital Rewards:</strong> Earn cashback on transactions, special discounts on partner services, and loyalty points redeemable across India Post network.
              </p>
              <p>
                <strong className="ippb-label-blue-yellow-black">Enhanced Services:</strong> Access to investment products, insurance schemes, and personalized financial advisory.
              </p>
            </div>
          </div>

          {/* AePS */}
          <div className="ippb-category-card ippb-card-stagger-2 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-icon-accent-blue/10 flex items-center justify-center group-hover:bg-icon-accent-blue/20 transition-all duration-300 group-hover:scale-110">
                <Fingerprint className="w-6 h-6 text-icon-accent-blue icon-live" />
              </div>
              <h3 className="heading-md text-icon-accent-blue">AePS</h3>
            </div>
            <div className="space-y-3 text-on-dark-secondary body-sm animated-blue-yellow-black-text">
              <p>
                <strong className="ippb-label-blue-yellow-black">Aadhaar-Based Banking:</strong> Secure and convenient banking using your Aadhaar biometric authentication for cash withdrawal, balance inquiry, and fund transfers.
              </p>
              <p>
                <strong className="ippb-label-blue-yellow-black">Transaction History:</strong> Complete digital records of all AePS transactions with instant SMS and email notifications for transparency.
              </p>
              <p>
                <strong className="ippb-label-blue-yellow-black">Nationwide Access:</strong> Use AePS services at any India Post branch or authorized banking point across the country.
              </p>
            </div>
          </div>

          {/* Regular Account */}
          <div className="ippb-category-card ippb-card-stagger-3 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-icon-accent-red/10 to-icon-accent-blue/10 flex items-center justify-center group-hover:from-icon-accent-red/20 group-hover:to-icon-accent-blue/20 transition-all duration-300 group-hover:scale-110">
                <Wallet className="w-6 h-6 text-icon-accent-red icon-live" />
              </div>
              <h3 className="heading-md text-icon-accent-red">Regular A/c</h3>
            </div>
            <div className="space-y-3 text-on-dark-secondary body-sm animated-blue-yellow-black-text">
              <p>
                <strong className="ippb-label-blue-yellow-black">Daily Banking:</strong> Manage your everyday transactions with ease - deposits, withdrawals, bill payments, and money transfers at your fingertips.
              </p>
              <p>
                <strong className="ippb-label-blue-yellow-black">Account History:</strong> Access detailed statements, track spending patterns, and download transaction reports anytime through our digital platform.
              </p>
              <p>
                <strong className="ippb-label-blue-yellow-black">Zero Balance:</strong> No minimum balance requirement, making banking accessible to everyone with doorstep banking services available.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
