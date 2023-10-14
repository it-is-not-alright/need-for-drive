import { RootState } from '../root';
import { ICity, RequestState } from '../types';

const citiesSelector = (state: RootState): RequestState<ICity[]> =>
  state.cities;

export default citiesSelector;
