import { ICategory } from './types';

export const cityUrl: string = 'db/city';
export const pointUrl: string = 'db/point';
export const categoryUrl: string = 'db/category';
export const modelUrl: string = 'db/car';

export const defaultCategory: ICategory = {
  id: -1,
  label: 'Все модели',
  name: '',
};
