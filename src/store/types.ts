import { DateRange } from '~/convert/types';

type RequestState<T> = {
  data: T;
  isLoading: boolean;
  errorMessage: string | null;
};

interface IId {
  id: number;
}

interface IEntity extends IId {
  label: string;
}

interface ICity extends IEntity {
  name: string;
}

interface IPoint extends IEntity {
  name: string;
  address: string;
  cityId: ICity;
}

interface IThumbnail {
  path: string;
}

interface ICategory extends IEntity {
  name: string;
}

interface IColor extends IEntity {
  name: string;
}

interface ICar extends IEntity {
  name: string;
  priceMin: number;
  priceMax: number;
  thumbnail: IThumbnail;
  categoryId: ICategory;
  colors: string[];
  colorObjects: IColor[];
  number: number;
  tank: number;
}

interface IRateType {
  id: number;
  name: string;
  unit: string;
}

interface IRate extends IEntity {
  rateTypeId: IRateType;
  price: number;
  days: number;
}

interface IService extends IEntity {
  price: number;
  name: string;
}

type OrderDetails = {
  currentStage: number;
  reachedStage: number;
  city: ICity | null;
  point: IPoint | null;
  category: ICategory | null;
  car: ICar | null;
  color: IColor | null;
  date: DateRange | null;
  rate: IRate | null;
  price: number;
  isFullTank: boolean;
  isNeedChildChair: boolean;
  isRightWheel: boolean;
};

interface IOrder {
  cityId: ICity;
  pointId: IPoint;
  carId: ICar;
  color: string;
  dateFrom: string;
  dateTo: string;
  rateId: IRate;
  price: number;
  isFullTank: boolean;
  isNeedChildChair: boolean;
  isRightWheel: boolean;
}

export {
  ICar,
  ICategory,
  ICity,
  IColor,
  IEntity,
  IId,
  IOrder,
  IPoint,
  IRate,
  IService,
  OrderDetails,
  RequestState,
};
