import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IId, RequestState } from '~/store/types';

import { postOrder } from './thunk';

const initialState: RequestState<IId | null> = {
  data: null,
  isLoading: false,
  errorMessage: null,
};

export const newOrderSlice = createSlice({
  name: 'newOrder',
  initialState,
  reducers: {
    resetNewOrder: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(postOrder.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      postOrder.fulfilled,
      (state, action: PayloadAction<IId>) => {
        state.data = action.payload;
        state.isLoading = false;
      },
    );
    builder.addCase(
      postOrder.rejected,
      (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      },
    );
  },
});

export const { resetNewOrder } = newOrderSlice.actions;
export const newOrderReducer = newOrderSlice.reducer;
