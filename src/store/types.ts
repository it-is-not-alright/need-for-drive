export type RequestResult<T> = {
  count: number;
  data: T[];
};

export interface IEntity {
  id: number;
  label: string;
}
