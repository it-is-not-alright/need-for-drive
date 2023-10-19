import slideImage0 from '~/assets/images/slider/img-0.png';
import slideImage1 from '~/assets/images/slider/img-1.png';
import slideImage2 from '~/assets/images/slider/img-2.png';
import slideImage3 from '~/assets/images/slider/img-3.png';

import { Slide } from './types';

const defaultDelay: number = 3000;
const longDelay: number = 10000;

const slides: Slide[] = [
  {
    id: 0,
    title: 'Бесплатная парковка',
    description:
      'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
    colorTheme: 'green',
    imageSource: slideImage0,
  },
  {
    id: 1,
    title: 'Страховка',
    description: 'Полная страховка автомобиля.',
    colorTheme: 'blue',
    imageSource: slideImage1,
  },
  {
    id: 2,
    title: 'Бензин',
    description: 'Полный бак на любой заправке города за наш счёт.',
    colorTheme: 'orange',
    imageSource: slideImage2,
  },
  {
    id: 3,
    title: 'Обслуживание',
    description: 'Автомобиль проходит еженедельное ТО.',
    colorTheme: 'purple',
    imageSource: slideImage3,
  },
];

export { defaultDelay, longDelay, slides };
