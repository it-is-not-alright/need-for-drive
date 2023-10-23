import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiRequest } from '~/api/api';

import { categoryUrl, defaultCategory } from '../constants';
import { ICategory, RequestResult } from '../types';

const get = createAsyncThunk<ICategory[], void, { rejectValue: string }>(
  'categories/get',
  async (_, thunkApi) => {
    try {
      const { data } =
        await apiRequest.get<RequestResult<ICategory>>(categoryUrl);
      const categories = data.map((category: ICategory) => {
        return { ...category, label: category.name };
      });
      categories.unshift(defaultCategory);
      return categories;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const getCategories = get;
