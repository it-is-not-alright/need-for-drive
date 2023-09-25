import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: string = '';

const selectedPointSlice = createSlice({
  name: 'selectedPoint',
  initialState,
  reducers: {
    set: (_state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { set } = selectedPointSlice.actions;

export default selectedPointSlice.reducer;
