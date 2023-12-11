import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiRequest } from '~/api/api';
import { apiErrorMessage } from '~/api/constants';
import { ApiRoute, GetArrayResult } from '~/api/types';
import { capitalizeFirstChar } from '~/convert/string';

import { ICar, IColor } from '../types';

const get = createAsyncThunk<ICar[], void, { rejectValue: string }>(
  'cars/get',
  async (_, thunkApi) => {
    try {
      const { data } = await apiRequest.get<GetArrayResult<ICar>>(ApiRoute.Car);
      return data.map((car: ICar) => {
        const colorObjects: IColor[] = car.colors.map((color, id) => {
          const label = capitalizeFirstChar(color);
          return { id, label, name: color };
        });
        return { ...car, label: car.name, colorObjects };
      });
    } catch (error) {
      return thunkApi.rejectWithValue(apiErrorMessage);
    }
  },
);

export const getCars = get;
