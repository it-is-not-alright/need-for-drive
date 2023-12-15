import { configureStore } from '@reduxjs/toolkit';

import { carsReducer } from './cars/slice';
import { categoriesReducer } from './categories/slice';
import { citiesReducer } from './cities/slice';
import { newOrderReducer } from './new-order/slice';
import { orderReducer } from './order/slice';
import { orderDetailsReducer } from './ordering-details/slice';
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
    order: orderReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
