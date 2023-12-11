import { configureStore } from '@reduxjs/toolkit';

import { carsReducer } from './cars/slice';
import { categoriesReducer } from './categories/slice';
import { citiesReducer } from './cities/slice';
import { orderDetailsReducer } from './order/details/slice';
import { newOrderReducer } from './order/new/slice';
import { pointsReducer } from './points/slice';
import { ratesReducer } from './rates/slice';

const store = configureStore({
  reducer: {
    orderDetails: orderDetailsReducer,
    cities: citiesReducer,
    points: pointsReducer,
    cars: carsReducer,
    categories: categoriesReducer,
    rates: ratesReducer,
    newOrder: newOrderReducer,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
