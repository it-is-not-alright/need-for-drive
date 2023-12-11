import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiRequest } from '~/api/api';
import { apiErrorMessage } from '~/api/constants';
import { ApiUrl, GetResult } from '~/api/types';
import { capitalizeFirstChar } from '~/convert/string';

import { IOrder, OrderDetails } from '../types';

const get = createAsyncThunk<OrderDetails, number, { rejectValue: string }>(
  'order/get',
  async (id, thunkApi) => {
    try {
      const route = `${ApiUrl.Order}/${id}`;
      const { data } = await apiRequest.get<GetResult<IOrder>>(route);
      if (data === null) {
        return thunkApi.rejectWithValue('Заказ не найден');
      }
      const details: OrderDetails = {
        currentStage: 3,
        reachedStage: 3,
        city: data.cityId,
        point: data.pointId,
        category: null,
        car: data.carId,
        color: {
          id: 0,
          label: capitalizeFirstChar(data.color),
          name: '',
        },
        date: {
          from: parseInt(data.dateFrom, 10),
          to: parseInt(data.dateTo, 10),
        },
        rate: data.rateId,
        price: data.price,
        isFullTank: data.isFullTank,
        isNeedChildChair: data.isNeedChildChair,
        isRightWheel: data.isRightWheel,
      };
      return details;
    } catch (error) {
      return thunkApi.rejectWithValue(apiErrorMessage);
    }
  },
);

export const getOrder = get;
