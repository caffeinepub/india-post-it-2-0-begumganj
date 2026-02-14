import { testimonials } from '@/data/testimonials';

export function TestimonialsMarquee() {
  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="relative z-10 py-16 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="heading-lg text-center text-metallic-gold neon-glow-subtle">
          What Our Customers Say
        </h2>
      </div>

      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-matte-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-matte-black to-transparent z-10" />

        {/* Marquee Container */}
        <div className="flex gap-6 marquee">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="flex-shrink-0 w-80 frosted-glass-light rounded-xl p-6 border-2 border-metallic-gold/30"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-metallic-gold/30 to-neon-red/30 flex items-center justify-center flex-shrink-0 border border-metallic-gold/40">
                  <span className="text-xl font-bold text-metallic-gold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="body-base font-bold text-official-primary">{testimonial.name}</h4>
                  <p className="body-sm text-official-secondary">{testimonial.location}</p>
                </div>
              </div>
              <p className="body-sm text-official-primary leading-relaxed">
                "{testimonial.message}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
