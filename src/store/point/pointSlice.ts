import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = '';

export const pointSlice = createSlice({
  name: 'point',
  initialState,
  reducers: {
    set: (_state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const setPoint = pointSlice.actions.set;
export const pointReducer = pointSlice.reducer;
