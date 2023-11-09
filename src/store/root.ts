import { configureStore } from '@reduxjs/toolkit';

import { categoriesReducer } from './categories/slice';
import { citiesReducer } from './cities/slice';
import { modelsReducer } from './models/slice';
import { orderDetailsReducer } from './orderDetails/slice';
import { pointsReducer } from './points/pointsSlice';

const store = configureStore({
  reducer: {
    orderDetails: orderDetailsReducer,
    cities: citiesReducer,
    points: pointsReducer,
    models: modelsReducer,
    categories: categoriesReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
