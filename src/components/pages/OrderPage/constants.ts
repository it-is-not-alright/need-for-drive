import { Stage } from './types';

const stages: Stage[] = [
  {
    name: 'Местоположение',
    btnLabel: 'Выбрать модель',
  },
  {
    name: 'Модель',
    btnLabel: 'Дополнительно',
  },
  {
    name: 'Дополнительно',
    btnLabel: 'Итого',
  },
  {
    name: 'Итого',
    btnLabel: 'Заказать',
  },
  {
    name: '',
    btnLabel: 'Отменить',
  },
];

const breadcrumbsItems = stages
  .map((stage: Stage) => stage.name)
  .filter((name: string) => name !== '');

export { breadcrumbsItems, stages };
