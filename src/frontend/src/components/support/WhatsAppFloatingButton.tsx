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
        {/* Subtle Glow Effect */}
        <div className="absolute inset-0 bg-neon-red rounded-full blur-lg opacity-30 group-hover:opacity-50 pulse-glow" />
        
        {/* Button */}
        <div className="relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-neon-red to-neon-red/80 rounded-full flex items-center justify-center shadow-official transform transition-transform duration-200 group-hover:scale-105 group-focus:scale-105 focus:outline-none focus:ring-2 focus:ring-metallic-gold focus:ring-offset-2 focus:ring-offset-matte-black">
          <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" />
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div className="frosted-glass-light px-3 py-2 rounded-md border border-metallic-gold/30 whitespace-nowrap shadow-official-sm">
            <p className="body-sm font-semibold text-official-primary">Contact Us</p>
            <p className="body-sm text-official-secondary">{phoneNumber}</p>
          </div>
        </div>
      </div>
    </a>
  );
}
