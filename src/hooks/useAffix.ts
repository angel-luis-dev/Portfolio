import { useState, useEffect, useCallback } from 'react';

const useAffix = (threshold = 64) => {
  const [isAffixed, setIsAffixed] = useState(false);

  const handleScroll = useCallback(() => {
    // Evita setState si el valor no cambia
    setIsAffixed(window.scrollY > threshold);
  }, [threshold]);

  useEffect(() => {
    // Usa passive: true para mejor rendimiento en scroll
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return isAffixed;
};

export default useAffix;