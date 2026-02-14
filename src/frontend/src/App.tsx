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

function App() {
  const { selectedScheme, isOpen, openModal, closeModal } = useSchemeModal();

  return (
    <div className="dark">
      <DashboardLayout>
        {/* Cinematic Background Video */}
        <CinematicBackground />

        {/* Header */}
        <FrostedHeader />

        {/* Main Content */}
        <main className="flex-1">
          {/* Scheme Grid */}
          <SchemeGrid onSchemeClick={openModal} />

          {/* BPM Profile */}
          <BpmProfileCard />

          {/* Testimonials */}
          <TestimonialsMarquee />
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
          schemeId={selectedScheme}
          isOpen={isOpen}
          onClose={closeModal}
        />
      </DashboardLayout>
    </div>
  );
}

export default App;
