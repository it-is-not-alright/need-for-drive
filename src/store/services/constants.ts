import { IService } from '../types';

const fullTankService: IService = {
  id: 1,
  label: 'Полный бак, 500 ₽',
  price: 500,
  name: 'Полный бак',
};

const childChairService: IService = {
  id: 2,
  label: 'Детское кресло, 200 ₽',
  price: 200,
  name: 'Детское кресло',
};

const rightWheelService: IService = {
  id: 3,
  label: 'Правый руль, 1600 ₽',
  price: 1600,
  name: 'Правый руль',
};

const additionalServices: IService[] = [
  fullTankService,
  childChairService,
  rightWheelService,
];

export {
  additionalServices,
  childChairService,
  fullTankService,
  rightWheelService,
};
