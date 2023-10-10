import { configureStore } from '@reduxjs/toolkit';

import { cityReducer } from './city/citySlice';
import { colorReducer } from './color/colorSlice';
import { modelReducer } from './model/modelSlice';
import { pointReducer } from './point/pointSlice';

const store = configureStore({
  reducer: {
    city: cityReducer,
    color: colorReducer,
    model: modelReducer,
    point: pointReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
