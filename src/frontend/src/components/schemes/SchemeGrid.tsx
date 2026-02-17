import { getAllSchemes } from '../../data/schemes';
import { SchemeCard } from './SchemeCard';
import { GalleryCard } from '../gallery/GalleryCard';
import { IppbGridCard } from '../ippb/IppbGridCard';
import type { SchemeId } from '../../data/schemes';

interface SchemeGridProps {
  onSchemeClick: (schemeId: SchemeId) => void;
  onGalleryClick: () => void;
}

export function SchemeGrid({ onSchemeClick, onGalleryClick }: SchemeGridProps) {
  const schemes = getAllSchemes();

  return (
    <section className="relative z-10 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="heading-lg text-center heading-primary-live mb-10 md:mb-12 tracking-tight">
          Postal Savings Schemes
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {schemes.map((scheme) => (
            <SchemeCard
              key={scheme.id}
              scheme={scheme}
              onClick={() => onSchemeClick(scheme.id)}
            />
          ))}
          
          {/* Gallery Card */}
          <GalleryCard onClick={onGalleryClick} />
          
          {/* IPPB Card - 8th card in grid, manages its own modal state */}
          <IppbGridCard />
        </div>
      </div>
    </section>
  );
}
