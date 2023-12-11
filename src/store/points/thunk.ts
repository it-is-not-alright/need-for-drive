import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiRequest } from '~/api/api';
import { pointUrl } from '~/api/constants';
import { GetArrayResult } from '~/api/types';

import { IPoint } from '../types';

const get = createAsyncThunk<IPoint[], void, { rejectValue: string }>(
  'points/get',
  async (_, thunkApi) => {
    try {
      const { data } = await apiRequest.get<GetArrayResult<IPoint>>(pointUrl);
      return data.map((point: IPoint) => {
        return { ...point, label: `${point.name}, ${point.address}` };
      });
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const getPoints = get;
