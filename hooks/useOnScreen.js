import { useState, useEffect } from 'react';

export const useOnScreen = (ref, rootMargin = '0px') => {
    
    const [isIntersecting, setIntersecting] = useState(true);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            // Update our state when observer callback fires
            setIntersecting(entry.isIntersecting);
          },
          {
            rootMargin
          }
        );
        if (ref.current) {
          observer.observe(ref.current);
        }
        return () => {
          observer.unobserve(ref.current);
        };
    }, []); 

    return isIntersecting;
}