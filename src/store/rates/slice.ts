import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IRate, RequestState } from '../types';
import { getRates } from './thunk';

const initialState: RequestState<IRate[]> = {
  data: [],
  isLoading: true,
  errorMessage: null,
};

export const ratesSlice = createSlice({
  name: 'rates',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRates.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getRates.fulfilled,
      (state, action: PayloadAction<IRate[]>) => {
        state.data = action.payload;
        state.isLoading = false;
      },
    );
    builder.addCase(
      getRates.rejected,
      (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      },
    );
  },
});

export const ratesReducer = ratesSlice.reducer;
