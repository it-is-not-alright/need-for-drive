import { IEntity } from '~/store/types';

export const colors: IEntity[] = [
  {
    id: 1,
    label: 'Любой',
  },
  {
    id: 2,
    label: 'Красный',
  },
  {
    id: 3,
    label: 'Голубой',
  },
];

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

export const additionalServices: IEntity[] = [
  {
    id: 1,
    label: 'Полный бак, 500р',
  },
  {
    id: 2,
    label: 'Детское кресло, 200р',
  },
  {
    id: 3,
    label: 'Правый руль, 1600р',
  },
];
