type PostResult<T> = {
  data: T;
};

type GetResult<T> = {
  data: T;
};

type GetArrayResult<T> = {
  count: number;
  data: T[];
};

enum ApiUrl {
  Base = 'https://frontend-study.simbirsoft.dev/api/',
  City = 'db/city',
  Point = 'db/point',
  Category = 'db/category',
  Car = 'db/car',
  Rate = 'db/rate',
  Order = 'db/order',
}

export { ApiUrl, GetArrayResult, GetResult, PostResult };
