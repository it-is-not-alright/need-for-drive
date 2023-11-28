import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiRequest } from '~/api/api';
import { formatPrice } from '~/format/price';

import { rateUrl } from '../constants';
import { IRate, RequestResult } from '../types';
import { associations } from './constants';

const get = createAsyncThunk<IRate[], void, { rejectValue: string }>(
  'rates/get',
  async (_, thunkApi) => {
    try {
      const { data } = await apiRequest.get<RequestResult<IRate>>(rateUrl);
      return data.map((rate: IRate) => {
        return {
          ...rate,
          label: `${rate.rateTypeId.name}, ${formatPrice(rate.price, true)}`,
          days: associations[rate.rateTypeId.id],
        };
      });
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const getRates = get;
