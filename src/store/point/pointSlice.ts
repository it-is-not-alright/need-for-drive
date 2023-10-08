import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Point } from '../types';

const initialState: Point | null = null;

export const pointSlice = createSlice({
  name: 'point',
  initialState,
  reducers: {
    set: (_state, action: PayloadAction<Point | null>) => {
      return action.payload;
    },
  },
});

export const setPoint = pointSlice.actions.set;
export const pointReducer = pointSlice.reducer;
