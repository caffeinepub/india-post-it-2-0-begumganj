import { testimonials } from '@/data/testimonials';
import { Star } from 'lucide-react';

/**
 * Infinite scrolling marquee of customer testimonials with continuous horizontal animation.
 * Displays testimonials in a seamless loop with official styling and red text.
 */
export function TestimonialsMarquee() {
  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="w-full py-12 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="heading-lg text-center text-metallic-gold">
          Customer Testimonials
        </h2>
        <p className="body-base text-center details-text-red mt-2">
          Hear from our satisfied customers
        </p>
      </div>

      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-matte-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-matte-black to-transparent z-10" />

        {/* Marquee Container */}
        <div className="flex testimonials-marquee" style={{ width: 'max-content' }}>
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="flex-shrink-0 w-80 mx-4"
            >
              <div className="official-panel p-6 h-full">
                {/* Stars - Fixed 5 stars for all testimonials */}
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-metallic-gold text-metallic-gold"
                    />
                  ))}
                </div>

                {/* Message */}
                <p className="body-sm details-text-red mb-4 leading-relaxed">
                  "{testimonial.message}"
                </p>

                {/* Author */}
                <div className="border-t official-divider pt-3">
                  <p className="body-sm font-semibold details-text-red">
                    {testimonial.name}
                  </p>
                  <p className="body-sm details-text-red opacity-80">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
