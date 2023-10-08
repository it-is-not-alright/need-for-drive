import { useCallback, useState } from 'react';

function useThrowError() {
  const [, setError] = useState();
  return useCallback(
    (error: Error) => {
      setError(() => {
        throw error;
      });
    },
    [setError],
  );
}

export default useThrowError;
