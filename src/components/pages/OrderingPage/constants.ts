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
];

const breadcrumbsItems: string[] = stages.map((stage: Stage) => stage.name);

export { breadcrumbsItems, stages };
