import { useEffect } from 'react';

export const useKeyboardNavigation = (isActive, callbacks) => {
  useEffect(() => {
    if (!isActive) return;

    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowLeft':
          callbacks.onPrevious?.();
          break;
        case 'ArrowRight':
          callbacks.onNext?.();
          break;
        case 'Escape':
          callbacks.onClose?.();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isActive, callbacks]);
};