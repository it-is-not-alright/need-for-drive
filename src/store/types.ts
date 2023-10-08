export type RequestResult<T> = {
  count: number;
  data: T[];
};

export type ApiEntity = {
  id: number;
  name: string;
};

export type City = ApiEntity;

export type Point = ApiEntity & {
  cityId: City;
};
