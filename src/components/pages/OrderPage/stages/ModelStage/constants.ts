import image0 from '~/assets/images/cars/img-0.png';
import image1 from '~/assets/images/cars/img-1.png';
import image2 from '~/assets/images/cars/img-2.png';
import image3 from '~/assets/images/cars/img-3.png';
import { ICar } from '~/store/car/types';
import { ICategory } from '~/store/category/types';

const categories: ICategory[] = [
  {
    id: 1,
    label: 'Все модели',
    name: '',
  },
  {
    id: 2,
    label: 'Эконом',
    name: '',
  },
  {
    id: 3,
    label: 'Премиум',
    name: '',
  },
];

const cars: ICar[] = [
  {
    id: 1,
    label: '',
    name: 'ELANTRA',
    priceMin: 12000,
    priceMax: 25000,
    thumbnail: {
      path: image0,
    },
  },
  {
    id: 2,
    label: '',
    name: 'i30 N',
    priceMin: 10000,
    priceMax: 32000,
    thumbnail: {
      path: image1,
    },
  },
  {
    id: 3,
    label: '',
    name: 'CRETA',
    priceMin: 12000,
    priceMax: 25000,
    thumbnail: {
      path: image2,
    },
  },
  {
    id: 4,
    label: '',
    name: 'SONATA',
    priceMin: 10000,
    priceMax: 32000,
    thumbnail: {
      path: image3,
    },
  },
];

export { categories };
export { cars };
