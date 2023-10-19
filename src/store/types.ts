export type RequestResult<T> = {
  count: number;
  data: T[];
};

export type RequestState<T> = {
  data: T;
  isLoading: boolean;
  errorMessage: string | null;
};

export interface IEntity {
  id: number;
  label: string;
}

export interface ICity extends IEntity {
  name: string;
}

export interface IPoint extends IEntity {
  name: string;
  address: string;
  cityId: ICity;
}

export type OrderDetails = {
  city: ICity | null;
  point: IPoint | null;
  color: string;
  model: string;
};
