import { useEffect, useRef } from 'react';

function useInterval(callback: () => void, delay: number | null) {
  const intervalRef = useRef<number>(0);
  const callbackRef = useRef<() => void>(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay) {
      intervalRef.current = window.setInterval(() => {
        callbackRef.current();
      }, delay);
    }
    return () => window.clearInterval(intervalRef.current);
  }, [delay]);

  return intervalRef;
}

export default useInterval;
