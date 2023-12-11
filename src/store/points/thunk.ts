import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiRequest } from '~/api/api';
import { apiErrorMessage } from '~/api/constants';
import { ApiUrl, GetArrayResult } from '~/api/types';

import { IPoint } from '../types';

const get = createAsyncThunk<IPoint[], void, { rejectValue: string }>(
  'points/get',
  async (_, thunkApi) => {
    try {
      const { data } = await apiRequest.get<GetArrayResult<IPoint>>(
        ApiUrl.Point,
      );
      return data.map((point: IPoint) => {
        return { ...point, label: `${point.name}, ${point.address}` };
      });
    } catch (error) {
      return thunkApi.rejectWithValue(apiErrorMessage);
    }
  },
);

export const getPoints = get;
