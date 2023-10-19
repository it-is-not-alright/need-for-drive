import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiRequest } from '~/api/api';

import { cityUrl } from '../constants';
import { ICity, RequestResult } from '../types';

const get = createAsyncThunk<ICity[], void, { rejectValue: string }>(
  'cities/get',
  async (_, thunkApi) => {
    try {
      const { data } = await apiRequest.get<RequestResult<ICity>>(cityUrl);
      return data.map((city: ICity) => {
        return { ...city, label: city.name };
      });
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const getCities = get;
