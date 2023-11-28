import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiRequest } from '~/api/api';

import { modelUrl } from '../constants';
import { IColor, IModel, RequestResult } from '../types';

const get = createAsyncThunk<IModel[], void, { rejectValue: string }>(
  'models/get',
  async (_, thunkApi) => {
    try {
      const { data } = await apiRequest.get<RequestResult<IModel>>(modelUrl);
      return data.map((car: IModel) => {
        const colorEntities: IColor[] = car.colors.map((color, id) => {
          const label = color.charAt(0).toUpperCase() + color.slice(1);
          return { id, label, name: color };
        });
        return { ...car, label: car.name, colorEntities };
      });
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const getModels = get;
