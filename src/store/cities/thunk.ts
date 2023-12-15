import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiRequest } from '~/api/api';
import { apiErrorMessage } from '~/api/constants';
import { ApiUrl, GetArrayResult } from '~/api/types';

import { ICity } from '../types';

const get = createAsyncThunk<ICity[], void, { rejectValue: string }>(
  'cities/get',
  async (_, thunkApi) => {
    try {
      const { data } = await apiRequest.get<GetArrayResult<ICity>>(ApiUrl.City);
      return data.map((city: ICity) => {
        return { ...city, label: city.name };
      });
    } catch (error) {
      return thunkApi.rejectWithValue(apiErrorMessage);
    }
  },
);

export const getCities = get;
