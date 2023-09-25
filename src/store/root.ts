import { configureStore } from '@reduxjs/toolkit';

import selectedCityReducer from './slices/selectedCitySlice';
import selectedColorReducer from './slices/selectedColorSlice';
import selectedModelReducer from './slices/selectedModelSlice';
import selectedPointReducer from './slices/selectedPointSlice';

const store = configureStore({
  reducer: {
    selectedCity: selectedCityReducer,
    selectedColor: selectedColorReducer,
    selectedModel: selectedModelReducer,
    selectedPoint: selectedPointReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
