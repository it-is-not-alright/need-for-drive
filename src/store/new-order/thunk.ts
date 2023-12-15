import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiRequest } from '~/api/api';
import { apiErrorMessage } from '~/api/constants';
import { ApiUrl, PostResult } from '~/api/types';
import { IId, IOrder, OrderDetails } from '~/store/types';

const post = createAsyncThunk<
  IId,
  void,
  { rejectValue: string; state: { orderDetails: OrderDetails } }
>('order/post', async (_, thunkApi) => {
  const { orderDetails } = thunkApi.getState();
  try {
    const order: IOrder = {
      color: orderDetails.color.name,
      dateFrom: orderDetails.date.from.toString(),
      dateTo: orderDetails.date.to.toString(),
      price: orderDetails.price,
      isFullTank: orderDetails.isFullTank,
      isNeedChildChair: orderDetails.isNeedChildChair,
      isRightWheel: orderDetails.isRightWheel,
      cityId: orderDetails.city,
      pointId: orderDetails.point,
      carId: orderDetails.car,
      rateId: orderDetails.rate,
    };
    const { data } = await apiRequest.post<IOrder, PostResult<IId>>(
      ApiUrl.Order,
      order,
    );
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(apiErrorMessage);
  }
});

export const postOrder = post;
