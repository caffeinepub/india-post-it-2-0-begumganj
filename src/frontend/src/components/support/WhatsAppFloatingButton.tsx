import { MessageCircle } from 'lucide-react';

export function WhatsAppFloatingButton() {
  const phoneNumber = '7771991108';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Contact us on WhatsApp"
    >
      <div className="relative">
        {/* Pulsing Glow Effect */}
        <div className="absolute inset-0 bg-neon-red rounded-full blur-xl opacity-50 group-hover:opacity-80 pulse-glow" />
        
        {/* Button */}
        <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-neon-red to-neon-red/80 rounded-full flex items-center justify-center shadow-glow-red-strong transform transition-transform duration-300 group-hover:scale-110 group-focus:scale-110 focus:outline-none focus:ring-2 focus:ring-metallic-gold focus:ring-offset-2 focus:ring-offset-matte-black">
          <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-white" />
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="frosted-glass-light px-4 py-2 rounded-lg border-2 border-metallic-gold/40 whitespace-nowrap shadow-official">
            <p className="body-sm font-semibold text-official-primary">Contact Us</p>
            <p className="body-sm text-official-secondary">{phoneNumber}</p>
          </div>
        </div>
      </div>
    </a>
  );
}
