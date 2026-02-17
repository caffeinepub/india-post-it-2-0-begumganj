import { Phone } from 'lucide-react';

export function CallFloatingButton() {
  const phoneNumber = '7771991108';
  const telUrl = `tel:${phoneNumber}`;

  return (
    <a
      href={telUrl}
      className="fixed bottom-6 left-6 z-40 group"
      aria-label="Call us"
    >
      <div className="relative">
        {/* Subtle Glow Effect */}
        <div className="absolute inset-0 bg-neon-red rounded-full blur-lg opacity-30 group-hover:opacity-50 pulse-glow" />
        
        {/* Button Container */}
        <div className="relative flex items-center gap-2.5 bg-gradient-to-br from-neon-red to-neon-red/80 rounded-full pl-4 pr-5 py-2.5 shadow-official transform transition-transform duration-200 group-hover:scale-105 group-focus:scale-105 focus:outline-none focus:ring-2 focus:ring-metallic-gold focus:ring-offset-2 focus:ring-offset-matte-black">
          {/* Phone Icon */}
          <div className="relative">
            <div className="absolute inset-0 bg-white/25 rounded-full animate-ping" />
            <Phone className="w-5 h-5 text-white relative z-10" />
          </div>
          
          {/* Phone Number */}
          <span className="text-white font-semibold text-sm md:text-base whitespace-nowrap">
            {phoneNumber}
          </span>
        </div>
      </div>
    </a>
  );
}
