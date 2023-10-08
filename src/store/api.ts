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
    const cityClone: ICity = structuredClone(city);
    cityClone.label = city.name;
    return cityClone;
  });
}

async function getPoints(): Promise<IPoint[]> {
  const array: IPoint[] = await getArray<IPoint>(pointUrl);
  return array.map((point: IPoint) => {
    const pointClone: IPoint = structuredClone(point);
    pointClone.label = `${point.name}, ${point.address}`;
    return pointClone;
  });
}

export { getCities };
export { getPoints };
