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

interface ICategory extends IEntity {
  name: string;
}

interface IModel extends IEntity {
  name: string;
  priceMin: number;
  priceMax: number;
  thumbnail: IThumbnail;
  categoryId: ICategory;
}

type OrderDetails = {
  city: ICity | null;
  point: IPoint | null;
  category: ICategory | null;
  car: IModel | null;
  color: string;
};

export {
  ICategory,
  ICity,
  IEntity,
  IModel,
  IPoint,
  OrderDetails,
  RequestResult,
  RequestState,
};
