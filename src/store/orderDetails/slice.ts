import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { defaultCategory } from '../constants';
import {
  DateRange,
  ICar,
  ICategory,
  ICity,
  IColor,
  IOrderDetails,
  IPoint,
  IRate,
  IService,
} from '../types';

const initialState: IOrderDetails = {
  id: 0,
  currentStage: 0,
  reachedStage: 0,
  city: null,
  point: null,
  category: defaultCategory,
  car: null,
  color: null,
  date: null,
  rate: null,
  services: [],
};

export const orderDetailsSlice = createSlice({
  name: 'orderDetails',
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
      state.currentStage = 4;
      state.reachedStage = 4;
    },
    setCurrentStage: (state, action: PayloadAction<number>) => {
      state.currentStage = action.payload;
    },
    setReachedStage: (state, action: PayloadAction<number>) => {
      if (action.payload !== 0) {
        return {
          ...state,
          currentStage: action.payload,
          reachedStage: action.payload,
        };
      }
      return initialState;
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
    setCar: (state, action: PayloadAction<ICar>) => ({
      ...initialState,
      currentStage: 1,
      reachedStage: 1,
      city: state.city,
      point: state.point,
      category: defaultCategory,
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
      rate: state.rate,
      date: state.date,
      services: state.services,
    }),
    setDate: (state, action: PayloadAction<DateRange | null>) => ({
      ...initialState,
      currentStage: 2,
      reachedStage: 2,
      city: state.city,
      point: state.point,
      car: state.car,
      color: state.color,
      date: action.payload,
      services: state.services,
    }),
    setRate: (state, action: PayloadAction<IRate>) => ({
      ...initialState,
      currentStage: 2,
      reachedStage: 2,
      city: state.city,
      point: state.point,
      car: state.car,
      color: state.color,
      date: state.date,
      rate: action.payload,
      services: state.services,
    }),
    addService: (state, action: PayloadAction<IService>) => {
      state.services.push(action.payload);
    },
    removeService: (state, action: PayloadAction<IService>) => {
      const services: IService[] = state.services.filter((service) => {
        return service.id !== action.payload.id;
      });
      state.services = services;
    },
  },
});

export const {
  setId,
  setCurrentStage,
  setReachedStage,
  setCity,
  setPoint,
  setCategory,
  setCar,
  setColor,
  setDate,
  setRate,
  addService,
  removeService,
} = orderDetailsSlice.actions;
export const orderDetailsReducer = orderDetailsSlice.reducer;
