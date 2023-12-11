import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiRequest } from '~/api/api';
import { apiErrorMessage } from '~/api/constants';
import { ApiRoute, GetArrayResult } from '~/api/types';
import { toCurrencyString } from '~/convert/price';

import { IRate } from '../types';
import { associations } from './constants';

const get = createAsyncThunk<IRate[], void, { rejectValue: string }>(
  'rates/get',
  async (_, thunkApi) => {
    try {
      const { data } = await apiRequest.get<GetArrayResult<IRate>>(
        ApiRoute.Rate,
      );
      return data.map((rate: IRate) => {
        return {
          ...rate,
          label: `${rate.rateTypeId.name}, ${toCurrencyString(
            rate.price,
            true,
          )}`,
          days: associations[rate.rateTypeId.id],
        };
      });
    } catch (error) {
      return thunkApi.rejectWithValue(apiErrorMessage);
    }
  },
);

export const getRates = get;
