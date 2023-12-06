import { ICity, RequestState, RootState } from '../types';

const citiesSelector = (state: RootState): RequestState<ICity[]> =>
  state.cities;

export default citiesSelector;
