type RequestResult<T> = {
  count: number;
  data: T[];
};

type RequestState<T> = {
  data: T;
  isLoading: boolean;
  errorMessage: string | null;
};

interface IEntity {
  id: number;
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

interface ICar extends IEntity {
  name: string;
  priceMin: number;
  priceMax: number;
  thumbnail: IThumbnail;
}

interface ICategory extends IEntity {
  name: string;
}

type OrderDetails = {
  city: ICity | null;
  point: IPoint | null;
  color: string;
  model: string;
};

export {
  ICar,
  ICategory,
  ICity,
  IEntity,
  IPoint,
  OrderDetails,
  RequestResult,
  RequestState,
};
