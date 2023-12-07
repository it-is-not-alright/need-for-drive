import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { defaultCategory } from '../../constants';
import {
  DateRange,
  ICar,
  ICategory,
  ICity,
  IColor,
  IPoint,
  IRate,
  IService,
  OrderDetails,
} from '../../types';

const initialState: OrderDetails = {
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
  price: 0,
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
      ...state,
      reachedStage: 2,
      color: action.payload,
    }),
    setDate: (state, action: PayloadAction<DateRange | null>) => ({
      ...state,
      reachedStage: 2,
      date: action.payload,
    }),
    setRate: (state, action: PayloadAction<IRate>) => {
      state.reachedStage = 2;
      state.rate = action.payload;
      const days = state.date.days + (state.date.hours === 0 ? 0 : 1);
      const timePrice = Math.ceil(days / state.rate.days) * state.rate.price;
      let servicePrice = 0;
      state.services.forEach((service: IService) => {
        servicePrice += service.price;
      });
      state.price = state.car.priceMin + timePrice + servicePrice;
    },
    addService: (state, action: PayloadAction<IService>) => {
      state.reachedStage = 2;
      state.services.push(action.payload);
      state.price += action.payload.price;
    },
    removeService: (state, action: PayloadAction<IService>) => {
      state.reachedStage = 2;
      const services: IService[] = state.services.filter((service) => {
        return service.id !== action.payload.id;
      });
      state.services = services;
      state.price -= action.payload.price;
    },
  },
});

export const {
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
