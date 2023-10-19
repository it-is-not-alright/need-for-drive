import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiRequest } from '~/api/api';

import { pointUrl } from '../constants';
import { IPoint, RequestResult } from '../types';

const get = createAsyncThunk<IPoint[], void, { rejectValue: string }>(
  'points/get',
  async (_, thunkApi) => {
    try {
      const { data } = await apiRequest.get<RequestResult<IPoint>>(pointUrl);
      return data.map((point: IPoint) => {
        return { ...point, label: `${point.name}, ${point.address}` };
      });
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const getPoints = get;
