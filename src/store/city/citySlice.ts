import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { City } from '../types';

const initialState: City | null = null;

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    set: (_state, action: PayloadAction<City | null>) => {
      return action.payload;
    },
  },
});

export const setCity = citySlice.actions.set;
export const cityReducer = citySlice.reducer;
