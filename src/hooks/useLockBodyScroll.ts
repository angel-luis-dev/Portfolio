import { useLayoutEffect } from 'react';

export function useLockBodyScroll(locked: boolean = true) {
  useLayoutEffect(() => {
    if (!locked) return;

    // Guardar scroll original
    const originalStyle = window.getComputedStyle(document.body).overflow;
    const originalScrollY = window.scrollY;

    // Bloquear scroll
    document.body.style.overflow = 'hidden';

    // Prevenir salto al aplicar fixed
    document.body.style.position = 'fixed';
    document.body.style.top = `-${originalScrollY}px`;
    document.body.style.width = '100%';

    // Restaurar al desmontar o cuando locked cambie
    return () => {
      document.body.style.overflow = originalStyle;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, originalScrollY);
    };
  }, [locked]);
}
