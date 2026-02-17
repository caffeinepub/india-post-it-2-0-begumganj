import { useEffect } from 'react';

/**
 * One-time audio unlock hook that registers global listeners for the first user gesture
 * to unlock audio playback on browsers with autoplay restrictions.
 * Runs only once per page load and removes listeners after first interaction.
 */
export function useAudioUnlock() {
  useEffect(() => {
    let unlocked = false;

    const unlock = () => {
      if (unlocked) return;
      unlocked = true;

      // Create a silent audio context to unlock audio playback
      try {
        const silentAudio = new Audio();
        silentAudio.volume = 0;
        silentAudio.src = 'data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAADhAC7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7//////////////////////////////////////////////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAAAAAAAAAAAA4T/////////////////////////////////////////////////';
        silentAudio.play().catch(() => {
          // Silently fail if still blocked
        });
      } catch {
        // Silently fail
      }

      // Remove all listeners after first unlock
      removeListeners();
    };

    const removeListeners = () => {
      document.removeEventListener('pointerdown', unlock);
      document.removeEventListener('click', unlock);
      document.removeEventListener('keydown', unlock);
      document.removeEventListener('touchstart', unlock);
    };

    // Register listeners for first user gesture
    document.addEventListener('pointerdown', unlock, { once: true, passive: true });
    document.addEventListener('click', unlock, { once: true, passive: true });
    document.addEventListener('keydown', unlock, { once: true, passive: true });
    document.addEventListener('touchstart', unlock, { once: true, passive: true });

    return () => {
      removeListeners();
    };
  }, []);
}
