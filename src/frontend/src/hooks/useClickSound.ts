import { useRef, useCallback, useEffect } from 'react';

/**
 * Hook that provides distinct sound effects for user interactions with de-duplication logic.
 * - playTap: For opening/activating actions (click.mp3)
 * - playClose: For closing/dismissing actions (close.mp3)
 * Both fail silently if audio playback is blocked by the browser.
 * Audio files are preloaded and use base-URL-safe paths.
 */
export function useClickSound() {
  const tapAudioRef = useRef<HTMLAudioElement | null>(null);
  const closeAudioRef = useRef<HTMLAudioElement | null>(null);
  const lastTapTimeRef = useRef<number>(0);
  const lastCloseTimeRef = useRef<number>(0);
  const DEBOUNCE_MS = 100; // Prevent duplicate sounds within 100ms

  // Get base URL for assets (handles sub-path deployments)
  const getAssetUrl = useCallback((path: string) => {
    const base = document.querySelector('base')?.href || window.location.origin + '/';
    return new URL(path, base).href;
  }, []);

  // Initialize and preload audio elements
  useEffect(() => {
    // Initialize tap audio
    if (!tapAudioRef.current) {
      const tapAudio = new Audio();
      tapAudio.preload = 'auto';
      tapAudio.volume = 0.5;
      tapAudio.src = getAssetUrl('assets/sounds/click.mp3');
      tapAudio.load();
      tapAudioRef.current = tapAudio;
    }

    // Initialize close audio
    if (!closeAudioRef.current) {
      const closeAudio = new Audio();
      closeAudio.preload = 'auto';
      closeAudio.volume = 0.5;
      closeAudio.src = getAssetUrl('assets/sounds/close.mp3');
      closeAudio.load();
      closeAudioRef.current = closeAudio;
    }

    // Cleanup on unmount
    return () => {
      if (tapAudioRef.current) {
        tapAudioRef.current.pause();
        tapAudioRef.current.src = '';
      }
      if (closeAudioRef.current) {
        closeAudioRef.current.pause();
        closeAudioRef.current.src = '';
      }
    };
  }, [getAssetUrl]);

  const playTap = useCallback(() => {
    try {
      const now = Date.now();
      
      // De-duplicate: skip if played very recently
      if (now - lastTapTimeRef.current < DEBOUNCE_MS) {
        return;
      }
      
      const audio = tapAudioRef.current;
      if (!audio) return;
      
      lastTapTimeRef.current = now;
      
      // Reset to start if already playing
      audio.currentTime = 0;
      // Play and catch any errors (e.g., autoplay policy blocks)
      audio.play().catch(() => {
        // Silently fail - user interaction will still work
      });
    } catch {
      // Silently fail - user interaction will still work
    }
  }, []);

  const playClose = useCallback(() => {
    try {
      const now = Date.now();
      
      // De-duplicate: skip if played very recently
      if (now - lastCloseTimeRef.current < DEBOUNCE_MS) {
        return;
      }
      
      const audio = closeAudioRef.current;
      if (!audio) return;
      
      lastCloseTimeRef.current = now;
      
      // Reset to start if already playing
      audio.currentTime = 0;
      // Play and catch any errors (e.g., autoplay policy blocks)
      audio.play().catch(() => {
        // Silently fail - user interaction will still work
      });
    } catch {
      // Silently fail - user interaction will still work
    }
  }, []);

  // Keep playClick for backward compatibility (alias to playTap)
  const playClick = playTap;

  return { playTap, playClose, playClick };
}
