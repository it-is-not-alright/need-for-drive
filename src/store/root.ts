import { configureStore } from '@reduxjs/toolkit';

import { citiesReducer } from './cities/citiesSlice';
import { orderDetailsReducer } from './orderDetails/orderDetailsSlice';
import { pointsReducer } from './points/pointsSlice';

const store = configureStore({
  reducer: {
    orderDetails: orderDetailsReducer,
    cities: citiesReducer,
    points: pointsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
