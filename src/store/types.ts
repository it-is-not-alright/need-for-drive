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
  colorEntities: IColor[];
  number: number;
  tank: number;
}

type DateRange = {
  from: number;
  to: number;
  days: number;
  hours: number;
};

interface IRateTypeId {
  id: number;
  name: string;
  unit: string;
}

interface IRate extends IEntity {
  rateTypeId: IRateTypeId;
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
  services: IService[];
  price: number;
};

interface IOrder {
  cityId: IId;
  pointId: IId;
  carId: IId;
  color: string;
  dateFrom: number;
  dateTo: number;
  rateId: IId;
  price: number;
  isFullTank: boolean;
  isNeedChildChair: boolean;
  isRightWheel: boolean;
}

type RootState = {
  orderDetails: OrderDetails;
  cities: RequestState<ICity[]>;
  points: RequestState<IPoint[]>;
  cars: RequestState<ICar[]>;
  categories: RequestState<ICategory[]>;
  rates: RequestState<IRate[]>;
  newOrder: RequestState<IId>;
};

export {
  DateRange,
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
  RootState,
};
