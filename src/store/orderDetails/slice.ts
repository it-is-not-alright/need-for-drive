import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { defaultCategory } from '../constants';
import { ICategory, ICity, IModel, IPoint, OrderDetails } from '../types';

const initialState: OrderDetails = {
  city: null,
  point: null,
  category: defaultCategory,
  car: null,
  color: '',
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
    setCategory: (state, action: PayloadAction<ICategory>) => {
      state.category = action.payload;
    },
    setModel: (state, action: PayloadAction<IModel | null>) => {
      state.car = action.payload;
    },
    setColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
  },
});

export const { setCity, setPoint, setCategory, setModel, setColor } =
  orderDetailsSlice.actions;
export const orderDetailsReducer = orderDetailsSlice.reducer;
