import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICity } from './types';

const initialState: ICity | null = null;

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    set: (_state, action: PayloadAction<ICity | null>) => {
      return action.payload;
    },
  },
});

export const setCity = citySlice.actions.set;
export const cityReducer = citySlice.reducer;
