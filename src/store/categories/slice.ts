import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICategory, RequestState } from '../types';
import { getCategories } from './thunk';

const initialState: RequestState<ICategory[]> = {
  data: [],
  isLoading: true,
  errorMessage: null,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getCategories.fulfilled,
      (state, action: PayloadAction<ICategory[]>) => {
        state.data = action.payload;
        state.isLoading = false;
      },
    );
    builder.addCase(
      getCategories.rejected,
      (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      },
    );
  },
});

export const categoriesReducer = categoriesSlice.reducer;
