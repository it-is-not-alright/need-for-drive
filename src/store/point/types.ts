import { ICity } from '../city/types';
import { IEntity } from '../types';

interface IPoint extends IEntity {
  name: string;
  address: string;
  cityId: ICity;
}

export { IPoint };
