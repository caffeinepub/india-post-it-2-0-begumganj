/**
 * Full-screen background video component with enhanced overlays for improved text contrast.
 * Features autoplay, muted, loop, poster fallback, and strengthened dark gradient overlays
 * to ensure white/pink text remains readable across all viewport sizes.
 */
export function CinematicBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/generated/bg-poster.dim_3840x2160.png"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/prabalpratapimageIMG_20260212_140728.png" type="video/mp4" />
      </video>

      {/* Enhanced Dark Gradient Overlays for Better Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-matte-black/80 via-matte-black/60 to-matte-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-matte-black/50 via-transparent to-matte-black/50" />
      
      {/* Additional Vignette Effect for Edge Contrast */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,oklch(0.05_0_0/0.6)_100%)]" />
    </div>
  );
}
