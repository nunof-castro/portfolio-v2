import { useEffect, useRef } from 'react';

type EventType = keyof WindowEventMap;

interface UseEventListenerParameters {
  eventType: EventType;
  callback: (event: Event) => void;
  element?: EventTarget | null;
}

export default function useEventListener({
  eventType,
  callback,
  element = window
}: UseEventListenerParameters) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (element == null) return;
    const handler = (e: Event) => callbackRef.current(e);
    element.addEventListener(eventType, handler);

    return () => element.removeEventListener(eventType, handler);
  }, [eventType, element]);
}
