import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiRequest } from '~/api/api';
import { rateUrl } from '~/api/constants';
import { GetArrayResult } from '~/api/types';
import { formatPrice } from '~/format/price';

import { IRate } from '../types';
import { associations } from './constants';

const get = createAsyncThunk<IRate[], void, { rejectValue: string }>(
  'rates/get',
  async (_, thunkApi) => {
    try {
      const { data } = await apiRequest.get<GetArrayResult<IRate>>(rateUrl);
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
