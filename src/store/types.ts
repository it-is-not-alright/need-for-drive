type RequestResult<T> = {
  count: number;
  data: T[];
};

interface IEntity {
  id: number;
  label: string;
}

export { RequestResult };
export { IEntity };
