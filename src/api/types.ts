type PostResult<T> = {
  data: T;
};

type GetArrayResult<T> = {
  count: number;
  data: T[];
};

export { GetArrayResult, PostResult };
