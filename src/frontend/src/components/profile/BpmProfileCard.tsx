import { useState } from 'react';
import { X } from 'lucide-react';
import { TypewriterNeon } from './TypewriterNeon';
import { ProfileRatingDialog } from './ProfileRatingDialog';
import { ProfileImagePreviewOverlay } from './ProfileImagePreviewOverlay';
import { useClickSound } from '@/hooks/useClickSound';
import { useProfileRating } from '@/hooks/useProfileRating';

/**
 * BPM profile card with premium open/close animations, enhanced overlay transitions, rating prompt on close, and click-to-enlarge profile image with live animation.
 * Displays IPPB expertise, insurance explanation skills, and friendly personality with updated contact number.
 */
export function BpmProfileCard() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showRatingDialog, setShowRatingDialog] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [showImagePreview, setShowImagePreview] = useState(false);
  const { playTap, playClose } = useClickSound();
  const username = 'prabal-pratap';
  const { rating } = useProfileRating(username);

  const profileImageSrc = '/assets/generated/profile-prabal-pratap.dim_1024x1024.png';
  const profileImageAlt = 'Prabal Pratap - Branch Postmaster';

  const handleCardClick = () => {
    playTap();
    setIsExpanded(true);
    setIsExiting(false);
  };

  const handleClose = () => {
    playClose();
    setIsExiting(true);
    // Wait for exit animation before closing
    setTimeout(() => {
      setIsExpanded(false);
      setIsExiting(false);
      // Show rating dialog after overlay closes
      setShowRatingDialog(true);
    }, 300);
  };

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    playTap();
    setShowImagePreview(true);
  };

  const handleImagePreviewClose = () => {
    playClose();
    setShowImagePreview(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick();
    } else if (e.key === 'Escape' && isExpanded) {
      e.preventDefault();
      handleClose();
    }
  };

  const bioLines = [
    '👤 Name: 𝐏𝐫𝐚𝐛𝐚𝐥 𝐏𝐫𝐚𝐭𝐚𝐩',
    '📧 Email: prabalpratap@indiapost.gov.in',
    '📱 Contact: 7771991108',
    '🏢 Position: Branch Postmaster & IPPB Expert',
    '📍 Location: Mundla Chawal, Begumganj, MP'
  ];

  return (
    <>
      {/* Profile Card */}
      <section className="w-full max-w-5xl mx-auto px-4 py-8">
        <div
          onClick={handleCardClick}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
          className="official-panel p-6 md:p-8 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-official focus:outline-none focus:ring-2 focus:ring-metallic-gold"
          aria-label="View Branch Postmaster profile details"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Profile Image - Clickable for Preview */}
            <div className="flex-shrink-0">
              <img
                src={profileImageSrc}
                alt={profileImageAlt}
                onClick={handleImageClick}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-metallic-gold/30 shadow-official cursor-pointer hover:scale-105 transition-transform duration-200"
              />
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="bpm-profile-name text-2xl md:text-3xl mb-2">
                𝐏𝐫𝐚𝐛𝐚𝐥 𝐏𝐫𝐚𝐭𝐚𝐩
              </h2>
              <p className="body-base text-metallic-gold mb-3">
                Branch Postmaster & IPPB Expert
              </p>
              <p className="body-sm animated-blue-yellow-black-text">
                Specializing in IPPB services and insurance solutions with a friendly, helpful approach
              </p>
              {rating && (
                <p className="body-sm text-metallic-gold mt-2">
                  ⭐ Last rating: {Number(rating.rating)}/5
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Overlay with Premium Animations */}
      {isExpanded && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-matte-black/90 backdrop-blur-md transition-opacity duration-300 ${
            isExiting ? 'opacity-0' : 'opacity-100'
          }`}
          onClick={handleClose}
        >
          <div
            className={`relative frosted-glass-light rounded-lg border border-metallic-gold/30 shadow-official max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 profile-overlay-glow transition-all duration-300 ${
              isExiting ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
            }`}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                e.preventDefault();
                handleClose();
              }
            }}
            tabIndex={-1}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-md bg-neon-red/20 hover:bg-neon-red/30 transition-colors focus:outline-none focus:ring-2 focus:ring-neon-red icon-live"
              aria-label="Close profile"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Profile Header */}
            <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
              <img
                src={profileImageSrc}
                alt={profileImageAlt}
                onClick={handleImageClick}
                className="w-32 h-32 rounded-full object-cover border-4 border-metallic-gold/30 shadow-official cursor-pointer hover:scale-105 transition-transform duration-200"
              />
              <div className="text-center md:text-left">
                <h2 className="bpm-profile-name text-3xl mb-2">
                  𝐏𝐫𝐚𝐛𝐚𝐥 𝐏𝐫𝐚𝐭𝐚𝐩
                </h2>
                <p className="body-base text-metallic-gold">
                  Branch Postmaster & IPPB Expert
                </p>
              </div>
            </div>

            {/* Biodata with Typewriter Effect */}
            <div className="mb-6">
              <h3 className="heading-md text-metallic-gold mb-4">Profile Details</h3>
              <TypewriterNeon lines={bioLines} speed={30} />
            </div>

            {/* Additional Info */}
            <div className="border-t official-divider pt-6">
              <p className="body-base animated-blue-yellow-black-text leading-relaxed mb-4">
                As an IPPB (India Post Payments Bank) expert with years of dedicated service, I specialize in making complex insurance products simple and accessible for everyone. My approach is friendly and patient—I take the time to explain every detail so you can make informed financial decisions with confidence.
              </p>
              <p className="body-base animated-blue-yellow-black-text leading-relaxed">
                Whether you need help with IPPB accounts, insurance policies, postal savings schemes, or any financial service, I'm here to guide you every step of the way. Our branch at Mundla Chawal serves as your trusted partner for all postal and banking needs, combining traditional values with modern digital solutions.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Profile Image Preview Overlay */}
      <ProfileImagePreviewOverlay
        isOpen={showImagePreview}
        onClose={handleImagePreviewClose}
        imageSrc={profileImageSrc}
        imageAlt={profileImageAlt}
      />

      {/* Rating Dialog */}
      <ProfileRatingDialog
        isOpen={showRatingDialog}
        onClose={() => setShowRatingDialog(false)}
        username={username}
      />
    </>
  );
}
