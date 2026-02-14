import { useState } from 'react';
import type { SchemeId } from '@/data/schemes';

export function useSchemeModal() {
  const [selectedScheme, setSelectedScheme] = useState<SchemeId | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (schemeId: SchemeId) => {
    setSelectedScheme(schemeId);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    // Delay clearing the selected scheme to allow exit animation
    setTimeout(() => setSelectedScheme(null), 300);
  };

  return {
    selectedScheme,
    isOpen,
    openModal,
    closeModal
  };
}
