import { useState } from 'react';

import useEventListener from 'hooks/useEventListener';

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window?.innerWidth,
    height: window?.innerHeight
  });

  useEventListener({
    eventType: 'resize',
    callback: () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
  });

  return windowSize;
}
