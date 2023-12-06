import { IOrder, IService } from '../types';
import {
  childChairService,
  fullTankService,
  rightWheelService,
} from './constants';

function getOrderServices(order: IOrder): IService[] {
  const services: IService[] = [];
  if (order.isFullTank) {
    services.push(fullTankService);
  }
  if (order.isNeedChildChair) {
    services.push(childChairService);
  }
  if (order.isRightWheel) {
    services.push(rightWheelService);
  }
  return [];
}

export { getOrderServices };
