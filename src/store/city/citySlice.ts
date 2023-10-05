import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = '';

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    set: (_state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const setCity = citySlice.actions.set;
export const cityReducer = citySlice.reducer;
