import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiRequest } from '~/api/api';
import { cityUrl } from '~/api/constants';
import { GetArrayResult } from '~/api/types';

import { ICity } from '../types';

const get = createAsyncThunk<ICity[], void, { rejectValue: string }>(
  'cities/get',
  async (_, thunkApi) => {
    try {
      const { data } = await apiRequest.get<GetArrayResult<ICity>>(cityUrl);
      return data.map((city: ICity) => {
        return { ...city, label: city.name };
      });
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const getCities = get;
