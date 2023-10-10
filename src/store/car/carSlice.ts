import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: string = '';

export const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    set: (_state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const setCar = carSlice.actions.set;
export const carReducer = carSlice.reducer;
