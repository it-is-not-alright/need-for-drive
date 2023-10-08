import { RootState } from '../root';
import { ICity } from './types';

const citySelector = (state: RootState): ICity | null => state.city;

export default citySelector;
