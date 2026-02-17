import { useEffect, useRef } from 'react';
import { useClickSound } from './useClickSound';

/**
 * Hook that registers a global document-level tap/click sound for any interaction on the page.
 * Uses throttling to prevent duplicate sounds and plays once per user gesture.
 */
export function useGlobalTapSound() {
  const { playTap } = useClickSound();
  const lastPlayTimeRef = useRef<number>(0);
  const THROTTLE_MS = 150; // Prevent duplicate sounds within 150ms

  useEffect(() => {
    const handleGlobalTap = (e: PointerEvent) => {
      const now = Date.now();
      
      // Throttle: only play if enough time has passed since last play
      if (now - lastPlayTimeRef.current < THROTTLE_MS) {
        return;
      }

      // Skip if the target is an input/textarea to avoid interfering with typing
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) {
        return;
      }

      lastPlayTimeRef.current = now;
      playTap();
    };

    // Use pointerdown for better touch/click coverage
    document.addEventListener('pointerdown', handleGlobalTap, { passive: true });

    return () => {
      document.removeEventListener('pointerdown', handleGlobalTap);
    };
  }, [playTap]);
}
