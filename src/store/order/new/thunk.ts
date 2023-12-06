import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiRequest } from '~/api/api';
import { orderUrl } from '~/api/constants';
import { PostResult } from '~/api/types';
import {
  childChairService,
  fullTankService,
  rightWheelService,
} from '~/store/services/constants';
import { IId, IOrder, RootState } from '~/store/types';

const post = createAsyncThunk<IId, void, { rejectValue: string }>(
  'order/post',
  async (_, thunkApi) => {
    const { orderDetails } = thunkApi.getState() as RootState;
    function checked(serviceId: number) {
      return orderDetails.services.some((service) => {
        return service.id === serviceId;
      });
    }
    try {
      const order: IOrder = {
        color: orderDetails.color.name,
        dateFrom: orderDetails.date.from,
        dateTo: orderDetails.date.to,
        price: 0,
        isFullTank: checked(fullTankService.id),
        isNeedChildChair: checked(childChairService.id),
        isRightWheel: checked(rightWheelService.id),
        cityId: { id: orderDetails.city.id },
        pointId: { id: orderDetails.point.id },
        carId: { id: orderDetails.car.id },
        rateId: { id: orderDetails.rate.id },
      };
      const { data } = await apiRequest.post<IOrder, PostResult<IId>>(
        orderUrl,
        order,
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const postOrder = post;
