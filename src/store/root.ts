import { configureStore } from '@reduxjs/toolkit';

import { cityReducer } from './city/citySlice';
import { pointReducer } from './point/pointSlice';

const store = configureStore({
  reducer: {
    city: cityReducer,
    point: pointReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
