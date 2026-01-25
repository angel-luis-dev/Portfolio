import { useState, useEffect, RefObject } from 'react';

const useElementOnScreen = (
  targetRef: RefObject<HTMLElement>,
  options?: IntersectionObserverInit
) => {
  const [isIntersecting, setIsIntersecting] = useState(true); // true por defecto si quieres que el header esté "no affix" al inicio

  useEffect(() => {
    const element = targetRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      // Cuando el elemento ya NO está visible (scroll pasó su límite superior),
      // entonces activamos el affix.
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetRef, JSON.stringify(options)]);

  return isIntersecting;
};

export default useElementOnScreen;