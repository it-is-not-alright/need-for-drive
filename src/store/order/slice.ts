import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { emptyOrderDetails } from '../constants';
import { OrderDetails, RequestState } from '../types';
import { getOrder } from './thunk';

const initialState: RequestState<OrderDetails> = {
  data: emptyOrderDetails,
  isLoading: true,
  errorMessage: null,
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrder.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getOrder.fulfilled,
      (state, action: PayloadAction<OrderDetails>) => {
        state.data = action.payload;
        state.isLoading = false;
      },
    );
    builder.addCase(
      getOrder.rejected,
      (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      },
    );
  },
});

export const orderReducer = orderSlice.reducer;
