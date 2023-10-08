import { useEffect, useState } from 'react';

import useThrowError from '~/hooks/useThrowError';

import { cityUrl, pointUrl } from './constants';
import { City, Point, RequestResult } from './types';

async function get<T>(url: string): Promise<T> {
  const init: RequestInit = {
    method: 'GET',
  };
  const response = await fetch(url, init);
  const result = await response.json();
  return result as Promise<T>;
}

function getArray<T>(url: string): T[] {
  const [array, setArray] = useState<T[]>([]);
  const throwError = useThrowError();

  useEffect(() => {
    get<RequestResult<T>>(url)
      .then((requestResult) => setArray(requestResult.data))
      .catch((error) => throwError(error));
  }, []);

  return array;
}

function getCities(): City[] {
  return getArray<City>(cityUrl);
}

function getPoints(): Point[] {
  return getArray<Point>(pointUrl);
}

export { getCities };
export { getPoints };
