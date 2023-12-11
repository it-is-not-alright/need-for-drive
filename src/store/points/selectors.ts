import { IPoint, RequestState, RootState } from '../types';

const pointsSelector = (state: RootState): RequestState<IPoint[]> =>
  state.points;

export default pointsSelector;
