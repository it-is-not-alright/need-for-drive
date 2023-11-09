import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICity, RequestState } from '../types';
import { getCities } from './thunk';

const initialState: RequestState<ICity[]> = {
  data: [],
  isLoading: true,
  errorMessage: null,
};

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCities.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getCities.fulfilled,
      (state, action: PayloadAction<ICity[]>) => {
        state.data = action.payload;
        state.isLoading = false;
      },
    );
    builder.addCase(
      getCities.rejected,
      (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      },
    );
  },
});

export const citiesReducer = citiesSlice.reducer;
