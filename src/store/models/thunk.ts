import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiRequest } from '~/api/api';

import { modelUrl } from '../constants';
import { IModel, RequestResult } from '../types';

const get = createAsyncThunk<IModel[], void, { rejectValue: string }>(
  'models/get',
  async (_, thunkApi) => {
    try {
      const { data } = await apiRequest.get<RequestResult<IModel>>(modelUrl);
      return data.map((car: IModel) => {
        return { ...car, label: car.name };
      });
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const getModels = get;
