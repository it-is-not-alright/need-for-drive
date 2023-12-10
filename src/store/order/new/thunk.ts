import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiRequest } from '~/api/api';
import { ApiRoute, PostResult } from '~/api/types';
import { IId, IOrder, RootState } from '~/store/types';

const post = createAsyncThunk<IId, void, { rejectValue: string }>(
  'order/post',
  async (_, thunkApi) => {
    const { orderDetails } = thunkApi.getState() as RootState;
    try {
      const order: IOrder = {
        color: orderDetails.color.name,
        dateFrom: orderDetails.date.from,
        dateTo: orderDetails.date.to,
        price: orderDetails.price,
        isFullTank: orderDetails.isFullTank,
        isNeedChildChair: orderDetails.isNeedChildChair,
        isRightWheel: orderDetails.isRightWheel,
        cityId: { id: orderDetails.city.id },
        pointId: { id: orderDetails.point.id },
        carId: { id: orderDetails.car.id },
        rateId: { id: orderDetails.rate.id },
      };
      const { data } = await apiRequest.post<IOrder, PostResult<IId>>(
        ApiRoute.Order,
        order,
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const postOrder = post;
