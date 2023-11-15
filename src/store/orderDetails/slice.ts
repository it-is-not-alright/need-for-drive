import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { defaultCategory } from '../constants';
import {
  DateRange,
  ICategory,
  ICity,
  IColor,
  IModel,
  IPoint,
  OrderDetails,
} from '../types';

const initialState: OrderDetails = {
  currentStage: 0,
  reachedStage: 0,
  city: null,
  point: null,
  category: defaultCategory,
  car: null,
  color: null,
  dateRange: null,
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
    setCity: (_state, action: PayloadAction<ICity | null>) => ({
      ...initialState,
      city: action.payload,
    }),
    setPoint: (state, action: PayloadAction<IPoint | null>) => ({
      ...initialState,
      city: state.city,
      point: action.payload,
    }),
    setCategory: (state, action: PayloadAction<ICategory>) => {
      state.category = action.payload;
    },
    setModel: (state, action: PayloadAction<IModel>) => ({
      ...initialState,
      currentStage: 1,
      reachedStage: 1,
      city: state.city,
      point: state.point,
      car: action.payload,
      color: action.payload.colorEntities[0] || null,
    }),
    setColor: (state, action: PayloadAction<IColor>) => ({
      ...initialState,
      currentStage: 2,
      reachedStage: 2,
      city: state.city,
      point: state.point,
      car: state.car,
      color: action.payload,
    }),
    setDateRange: (state, action: PayloadAction<DateRange>) => ({
      ...initialState,
      currentStage: 2,
      reachedStage: 2,
      city: state.city,
      point: state.point,
      car: state.car,
      color: state.color,
      dateRange: action.payload,
    }),
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
