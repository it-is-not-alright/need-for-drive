import { configureStore } from '@reduxjs/toolkit';

import { carReducer } from './car/carSlice';
import { cityReducer } from './city/citySlice';
import { colorReducer } from './color/colorSlice';
import { pointReducer } from './point/pointSlice';

const store = configureStore({
  reducer: {
    city: cityReducer,
    color: colorReducer,
    car: carReducer,
    point: pointReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
