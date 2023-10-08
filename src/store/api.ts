import { ICity } from './city/types';
import { cityUrl, pointUrl } from './constants';
import { IPoint } from './point/types';
import { RequestResult } from './types';

async function get<T>(url: string): Promise<T> {
  const init: RequestInit = {
    method: 'GET',
  };
  const response = await fetch(url, init);
  const result = await response.json();
  return result as Promise<T>;
}

async function getArray<T>(url: string): Promise<T[]> {
  return (await get<RequestResult<T>>(url)).data;
}

async function getCities(): Promise<ICity[]> {
  const array: ICity[] = await getArray<ICity>(cityUrl);
  return array.map((city: ICity) => {
    return { ...city, label: city.name };
  });
}

async function getPoints(): Promise<IPoint[]> {
  const array: IPoint[] = await getArray<IPoint>(pointUrl);
  return array.map((point: IPoint) => {
    return { ...point, label: `${point.name}, ${point.address}` };
  });
}

export { getCities };
export { getPoints };
