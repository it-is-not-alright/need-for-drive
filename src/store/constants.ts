import { ICategory, OrderDetails } from './types';

const defaultCategory: ICategory = {
  id: -1,
  label: 'Все модели',
  name: '',
};

const emptyOrderDetails: OrderDetails = {
  currentStage: 0,
  reachedStage: 0,
  city: null,
  point: null,
  category: defaultCategory,
  car: null,
  color: null,
  date: null,
  rate: null,
  price: 0,
  isFullTank: false,
  isNeedChildChair: false,
  isRightWheel: false,
};

export { defaultCategory, emptyOrderDetails };
