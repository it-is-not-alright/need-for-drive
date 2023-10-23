import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IModel, RequestState } from '../types';
import { getModels } from './thunk';

const initialState: RequestState<IModel[]> = {
  data: [],
  isLoading: true,
  errorMessage: null,
};

export const modelsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getModels.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getModels.fulfilled,
      (state, action: PayloadAction<IModel[]>) => {
        state.data = action.payload;
        state.isLoading = false;
      },
    );
    builder.addCase(
      getModels.rejected,
      (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      },
    );
  },
});

export const modelsReducer = modelsSlice.reducer;
