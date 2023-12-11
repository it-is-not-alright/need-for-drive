import { RootState } from '../root';
import { IId, RequestState } from '../types';

const newOrderSelector = (state: RootState): RequestState<IId> =>
  state.newOrder;

export default newOrderSelector;
