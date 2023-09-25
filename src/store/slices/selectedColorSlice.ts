import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: string = '';

const selectedColorSlice = createSlice({
  name: 'selectedColor',
  initialState,
  reducers: {
    set: (_state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { set } = selectedColorSlice.actions;

export default selectedColorSlice.reducer;
