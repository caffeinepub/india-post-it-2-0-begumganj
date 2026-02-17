import { useState } from 'react';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { CinematicBackground } from './components/background/CinematicBackground';
import { FrostedHeader } from './components/header/FrostedHeader';
import { SchemeGrid } from './components/schemes/SchemeGrid';
import { SchemeModal } from './components/schemes/SchemeModal';
import { useSchemeModal } from './components/schemes/useSchemeModal';
import { BpmProfileCard } from './components/profile/BpmProfileCard';
import { RightEdgeMotto } from './components/motto/RightEdgeMotto';
import { TestimonialsMarquee } from './components/testimonials/TestimonialsMarquee';
import { WhatsAppFloatingButton } from './components/support/WhatsAppFloatingButton';
import { CallFloatingButton } from './components/support/CallFloatingButton';
import { Footer } from './components/footer/Footer';
import { GalleryModal } from './components/gallery/GalleryModal';
import { useAudioUnlock } from './hooks/useAudioUnlock';
import { useGlobalTapSound } from './hooks/useGlobalTapSound';
import { PromptCopySection } from './components/prompt/PromptCopySection';
import { getScheme } from './data/schemes';

function App() {
  const { selectedScheme, isOpen, openModal, closeModal } = useSchemeModal();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // Unlock audio on first user interaction
  useAudioUnlock();
  
  // Global tap sound for any page interaction
  useGlobalTapSound();

  const openGallery = () => {
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  // Get the scheme data from the schemeId
  const schemeData = selectedScheme ? getScheme(selectedScheme) : null;

  return (
    <div className="dark">
      <DashboardLayout>
        {/* Cinematic Background Video */}
        <CinematicBackground />

        {/* Header */}
        <FrostedHeader />

        {/* Main Content */}
        <main className="flex-1 space-y-12 md:space-y-16">
          {/* Scheme Grid */}
          <SchemeGrid onSchemeClick={openModal} onGalleryClick={openGallery} />

          {/* BPM Profile */}
          <BpmProfileCard />

          {/* Testimonials */}
          <TestimonialsMarquee />

          {/* Prompt Copy Section */}
          <PromptCopySection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Right Edge Motto */}
        <RightEdgeMotto />

        {/* Call Floating Button (Left) */}
        <CallFloatingButton />

        {/* WhatsApp Floating Button (Right) */}
        <WhatsAppFloatingButton />

        {/* Scheme Modal */}
        <SchemeModal
          scheme={schemeData}
          isOpen={isOpen}
          onClose={closeModal}
        />

        {/* Gallery Modal */}
        <GalleryModal isOpen={isGalleryOpen} onClose={closeGallery} />
      </DashboardLayout>
    </div>
  );
}

export default App;
