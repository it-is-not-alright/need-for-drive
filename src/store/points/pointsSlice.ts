import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IPoint, RequestState } from '../types';
import { getPoints } from './thunk';

const initialState: RequestState<IPoint[]> = {
  data: [],
  isLoading: true,
  errorMessage: null,
};

export const pointsSlice = createSlice({
  name: 'points',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPoints.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getPoints.fulfilled,
      (state, action: PayloadAction<IPoint[]>) => {
        state.data = action.payload;
        state.isLoading = false;
      },
    );
    builder.addCase(
      getPoints.rejected,
      (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      },
    );
  },
});

export const pointsReducer = pointsSlice.reducer;
