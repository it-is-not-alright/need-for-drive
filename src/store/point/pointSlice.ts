import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IPoint } from './types';

const initialState: IPoint | null = null;

export const pointSlice = createSlice({
  name: 'point',
  initialState,
  reducers: {
    set: (_state, action: PayloadAction<IPoint | null>) => {
      return action.payload;
    },
  },
});

export const setPoint = pointSlice.actions.set;
export const pointReducer = pointSlice.reducer;
