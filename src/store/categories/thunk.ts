import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiRequest } from '~/api/api';
import { ApiRoute, GetArrayResult } from '~/api/types';

import { defaultCategory } from '../constants';
import { ICategory } from '../types';

const get = createAsyncThunk<ICategory[], void, { rejectValue: string }>(
  'categories/get',
  async (_, thunkApi) => {
    try {
      const { data } = await apiRequest.get<GetArrayResult<ICategory>>(
        ApiRoute.Category,
      );
      const result = data.map((category: ICategory) => {
        return { ...category, label: category.name };
      });
      return [defaultCategory, ...result];
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const getCategories = get;
