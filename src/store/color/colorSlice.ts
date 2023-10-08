import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: string = '';

export const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    set: (_state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const setColor = colorSlice.actions.set;
export const colorReducer = colorSlice.reducer;
