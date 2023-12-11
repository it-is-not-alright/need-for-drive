import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICar, RequestState } from '../types';
import { getCars } from './thunk';

const initialState: RequestState<ICar[]> = {
  data: [],
  isLoading: true,
  errorMessage: null,
};

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCars.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getCars.fulfilled,
      (state, action: PayloadAction<ICar[]>) => {
        state.data = action.payload;
        state.isLoading = false;
      },
    );
    builder.addCase(
      getCars.rejected,
      (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      },
    );
  },
});

export const carsReducer = carsSlice.reducer;
