import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: string = '';

export const modelSlice = createSlice({
  name: 'model',
  initialState,
  reducers: {
    set: (_state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const setModel = modelSlice.actions.set;
export const modelReducer = modelSlice.reducer;
