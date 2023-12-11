import { RootState } from '../root';
import { OrderDetails, RequestState } from '../types';

const orderSelector = (state: RootState): RequestState<OrderDetails> =>
  state.order;

export default orderSelector;
