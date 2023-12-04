import { RootState } from '../root';
import { IOrderDetails } from '../types';

const orderDetailsSelector = (state: RootState): IOrderDetails =>
  state.orderDetails;

export default orderDetailsSelector;
