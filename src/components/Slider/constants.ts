import image0 from '../../assets/images/slider/img-0.png';
import image1 from '../../assets/images/slider/img-1.png';
import image2 from '../../assets/images/slider/img-2.png';
import image3 from '../../assets/images/slider/img-3.png';
import { ISlide } from './types';

export const defaultDelay: number = 3000;
export const longDelay: number = 10000;

export const slides: ISlide[] = [
  {
    id: 0,
    title: 'Бесплатная парковка',
    description:
      'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
    colorTheme: 'green',
  },
  {
    id: 1,
    title: 'Страховка',
    description: 'Полная страховка автомобиля.',
    colorTheme: 'blue',
  },
  {
    id: 2,
    title: 'Бензин',
    description: 'Полный бак на любой заправке города за наш счёт.',
    colorTheme: 'orange',
  },
  {
    id: 3,
    title: 'Обслуживание',
    description: 'Автомобиль проходит еженедельное ТО.',
    colorTheme: 'purple',
  },
];

export const images: string[] = [image0, image1, image2, image3];
