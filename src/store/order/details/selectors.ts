import { OrderDetails, RootState } from '../../types';

const orderDetailsSelector = (state: RootState): OrderDetails =>
  state.orderDetails;

export default orderDetailsSelector;
