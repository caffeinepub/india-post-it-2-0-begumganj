import { getAllSchemes } from '@/data/schemes';
import { SchemeCard } from './SchemeCard';
import type { SchemeId } from '@/data/schemes';

interface SchemeGridProps {
  onSchemeClick: (schemeId: SchemeId) => void;
}

export function SchemeGrid({ onSchemeClick }: SchemeGridProps) {
  const schemes = getAllSchemes();

  return (
    <section className="relative z-10 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="heading-lg text-center mb-16 text-metallic-gold neon-glow-subtle">
          Our Schemes & Services
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {schemes.map((scheme) => (
            <SchemeCard
              key={scheme.id}
              scheme={scheme}
              onClick={() => onSchemeClick(scheme.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
