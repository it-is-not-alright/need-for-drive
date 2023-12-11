import { RootState } from '../root';
import { OrderDetails } from '../types';

const orderDetailsSelector = (state: RootState): OrderDetails =>
  state.orderDetails;

export default orderDetailsSelector;
