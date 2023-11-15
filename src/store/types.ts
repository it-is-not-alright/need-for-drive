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

interface IColor extends IEntity {
  name: string;
}

interface IModel extends IEntity {
  name: string;
  priceMin: number;
  priceMax: number;
  thumbnail: IThumbnail;
  categoryId: ICategory;
  colors: string[];
  colorEntities: IColor[];
}

type DateRange = {
  from: Date;
  to: Date;
};

type OrderDetails = {
  currentStage: number;
  reachedStage: number;
  city: ICity | null;
  point: IPoint | null;
  category: ICategory | null;
  car: IModel | null;
  color: IColor | null;
  dateRange: DateRange | null;
};

export {
  DateRange,
  ICategory,
  ICity,
  IColor,
  IEntity,
  IModel,
  IPoint,
  OrderDetails,
  RequestResult,
  RequestState,
};
