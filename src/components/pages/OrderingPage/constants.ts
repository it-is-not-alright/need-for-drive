import { Stage } from './types';

const stages: Stage[] = [
  {
    name: 'Местоположение',
    buttonLabel: 'Выбрать модель',
  },
  {
    name: 'Модель',
    buttonLabel: 'Дополнительно',
  },
  {
    name: 'Дополнительно',
    buttonLabel: 'Итого',
  },
  {
    name: 'Итого',
    buttonLabel: 'Заказать',
  },
];

const breadcrumbsItems: string[] = stages.map((stage: Stage) => stage.name);

export { breadcrumbsItems, stages };
