import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICity, IPoint, OrderDetails } from '../types';

const initialState: OrderDetails = {
  city: null,
  point: null,
  color: '',
  model: '',
};

export const orderDetailsSlice = createSlice({
  name: 'orderDetails',
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<ICity | null>) => {
      state.city = action.payload;
    },
    setPoint: (state, action: PayloadAction<IPoint | null>) => {
      state.point = action.payload;
    },
    setColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
    setModel: (state, action: PayloadAction<string>) => {
      state.model = action.payload;
    },
  },
});

export const { setCity, setPoint, setColor, setModel } =
  orderDetailsSlice.actions;
export const orderDetailsReducer = orderDetailsSlice.reducer;
