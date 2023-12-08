import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiRequest } from '~/api/api';
import { ApiRoute, GetArrayResult } from '~/api/types';

import { ICar, IColor } from '../types';

const get = createAsyncThunk<ICar[], void, { rejectValue: string }>(
  'cars/get',
  async (_, thunkApi) => {
    try {
      const { data } = await apiRequest.get<GetArrayResult<ICar>>(ApiRoute.Car);
      return data.map((car: ICar) => {
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

export const getCars = get;
