import { IEntity } from '../types';

interface IThumbnail {
  path: string;
}

interface ICar extends IEntity {
  name: string;
  priceMin: number;
  priceMax: number;
  thumbnail: IThumbnail;
}

export { IThumbnail };
export { ICar };
