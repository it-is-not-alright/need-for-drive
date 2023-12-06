import { IId, RequestState, RootState } from '../../types';

const newOrderSelector = (state: RootState): RequestState<IId> =>
  state.newOrder;

export default newOrderSelector;
