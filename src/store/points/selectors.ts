import { RootState } from '../root';
import { IPoint, RequestState } from '../types';

const pointsSelector = (state: RootState): RequestState<IPoint[]> =>
  state.points;

export default pointsSelector;
