import { useEffect, useRef, useState } from 'react';

export function CinematicBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.warn('Video autoplay failed:', error);
        setVideoError(true);
      }
    };

    playVideo();
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/generated/bg-poster.dim_3840x2160.png"
        onError={() => setVideoError(true)}
      >
        <source src="/assets/video/india-post-it2-bg-loop.mp4" type="video/mp4" />
      </video>

      {/* Dark Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-matte-black/90 via-matte-black/80 to-matte-black/95" />
      
      {/* Additional Vignette Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-matte-black/60" />
    </div>
  );
}
