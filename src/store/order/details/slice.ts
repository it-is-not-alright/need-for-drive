import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  childChairService,
  fullTankService,
  rightWheelService,
} from '~/store/services/constants';

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
  price: 0,
  isFullTank: false,
  isNeedChildChair: false,
  isRightWheel: false,
};

function calculatePrice(details: OrderDetails): number {
  let price: number = details.car.priceMin;
  const days = details.date.days + (details.date.hours === 0 ? 0 : 1);
  price += Math.ceil(days / details.rate.days) * details.rate.price;
  price += details.isFullTank ? fullTankService.price : 0;
  price += details.isNeedChildChair ? childChairService.price : 0;
  price += details.isRightWheel ? rightWheelService.price : 0;
  return price;
}

export const orderDetailsSlice = createSlice({
  name: 'orderDetails',
  initialState,
  reducers: {
    setCurrentStage: (state, action: PayloadAction<number>) => {
      state.currentStage = action.payload;
    },
    setReachedStage: (state, action: PayloadAction<number>) => {
      state.currentStage = action.payload;
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
      color: action.payload.colorObjects[0] || null,
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
      rate: null,
    }),
    setRate: (state, action: PayloadAction<IRate>) => {
      state.reachedStage = 2;
      state.rate = action.payload;
      state.price = calculatePrice(state);
    },
    toggleService: (state, action: PayloadAction<IService>) => {
      state.reachedStage = 2;
      const service: IService = action.payload;
      switch (service.id) {
        case fullTankService.id:
          state.isFullTank = !state.isFullTank;
          break;
        case childChairService.id:
          state.isNeedChildChair = !state.isNeedChildChair;
          break;
        case rightWheelService.id:
          state.isRightWheel = !state.isRightWheel;
          break;
        default:
      }
      state.price = calculatePrice(state);
    },
    resetOrderDetails: () => initialState,
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
  toggleService,
  resetOrderDetails,
} = orderDetailsSlice.actions;
export const orderDetailsReducer = orderDetailsSlice.reducer;
