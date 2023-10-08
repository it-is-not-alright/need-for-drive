import { ICity } from '../city/types';
import { IEntity } from '../types';

export interface IPoint extends IEntity {
  name: string;
  address: string;
  cityId: ICity;
}
