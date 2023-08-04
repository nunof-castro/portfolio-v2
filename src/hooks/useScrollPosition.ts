import { useEffect, useState } from 'react';

export default function useScrollPosition() {
  const [scrollPos, setScrollPos] = useState<number>(0);

  useEffect(() => {
    const updatePos = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener('scroll', updatePos);

    updatePos();
    return () => window.removeEventListener('scroll', updatePos);
  }, []);

  return scrollPos;
}
