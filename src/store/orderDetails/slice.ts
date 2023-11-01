import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { defaultCategory } from '../constants';
import { ICategory, ICity, IModel, IPoint, OrderDetails } from '../types';

const initialState: OrderDetails = {
  currentStage: 0,
  reachedStage: 0,
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
    setCurrentStage: (state, action: PayloadAction<number>) => {
      state.currentStage = action.payload;
    },
    setReachedStage: (state, action: PayloadAction<number>) => {
      state.reachedStage = action.payload;
    },
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

export const {
  setCurrentStage,
  setReachedStage,
  setCity,
  setPoint,
  setCategory,
  setModel,
  setColor,
} = orderDetailsSlice.actions;
export const orderDetailsReducer = orderDetailsSlice.reducer;
