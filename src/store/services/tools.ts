import { IService } from '../types';
import {
  childChairService,
  fullTankService,
  rightWheelService,
} from './constants';
import { ServiceSet } from './types';

function getOrderServices(serviceSet: ServiceSet): IService[] {
  const services: IService[] = [];
  if (serviceSet.isFullTank) {
    services.push(fullTankService);
  }
  if (serviceSet.isNeedChildChair) {
    services.push(childChairService);
  }
  if (serviceSet.isRightWheel) {
    services.push(rightWheelService);
  }
  return services;
}

export { getOrderServices };
