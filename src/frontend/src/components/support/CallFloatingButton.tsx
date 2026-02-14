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
        {/* Pulsing Glow Effect */}
        <div className="absolute inset-0 bg-neon-red rounded-full blur-xl opacity-50 group-hover:opacity-80 pulse-glow" />
        
        {/* Button Container */}
        <div className="relative flex items-center gap-3 bg-gradient-to-br from-neon-red to-neon-red/80 rounded-full pl-5 pr-6 py-3 shadow-glow-red-strong transform transition-transform duration-300 group-hover:scale-105 group-focus:scale-105 focus:outline-none focus:ring-2 focus:ring-metallic-gold focus:ring-offset-2 focus:ring-offset-matte-black">
          {/* Phone Icon with Live Animation */}
          <div className="relative">
            <div className="absolute inset-0 bg-white/30 rounded-full animate-ping" />
            <Phone className="w-6 h-6 text-white relative z-10" />
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
