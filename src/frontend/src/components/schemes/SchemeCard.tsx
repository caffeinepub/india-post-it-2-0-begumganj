import type { SchemeData } from '@/data/schemes';

interface SchemeCardProps {
  scheme: SchemeData;
  onClick: () => void;
}

export function SchemeCard({ scheme, onClick }: SchemeCardProps) {
  return (
    <button
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      className="group relative frosted-glass-light rounded-xl p-6 border-2 border-metallic-gold/30 hover:border-metallic-gold/60 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-glow-gold float-animation focus:outline-none focus:ring-2 focus:ring-metallic-gold focus:ring-offset-2 focus:ring-offset-matte-black"
      aria-label={`Open ${scheme.label} details`}
    >
      {/* Icon Container with Refined Effect */}
      <div className="relative mb-6 aspect-square w-full max-w-[180px] mx-auto">
        <div className="absolute inset-0 bg-gradient-to-br from-metallic-gold/15 to-neon-red/15 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
        <img
          src={scheme.iconPath}
          alt={scheme.label}
          className="relative w-full h-full object-contain drop-shadow-2xl group-hover:drop-shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all duration-300"
        />
      </div>

      {/* Label */}
      <h3 className="heading-md text-metallic-gold group-hover:text-neon-red transition-colors duration-300 mb-3">
        {scheme.shortLabel}
      </h3>
      
      {/* Description */}
      <p className="body-sm text-official-secondary group-hover:text-official-primary transition-colors duration-300">
        {scheme.description}
      </p>

      {/* Hover Indicator */}
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-8 h-8 rounded-full bg-metallic-gold/20 flex items-center justify-center border border-metallic-gold/40">
          <svg className="w-4 h-4 text-metallic-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </button>
  );
}
