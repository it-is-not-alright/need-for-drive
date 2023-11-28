import { IEntity, IService } from '~/store/types';

export const rates: IEntity[] = [
  {
    id: 1,
    label: 'Поминутно, 7₽/мин',
  },
  {
    id: 2,
    label: 'На сутки, 1999 ₽/сутки',
  },
];

export const additionalServices: IService[] = [
  {
    id: 1,
    label: 'Полный бак, 500 ₽',
    price: 500,
    name: 'Полный бак',
  },
  {
    id: 2,
    label: 'Детское кресло, 200 ₽',
    price: 200,
    name: 'Детское кресло',
  },
  {
    id: 3,
    label: 'Правый руль, 1600 ₽',
    price: 1600,
    name: 'Правый руль',
  },
];
