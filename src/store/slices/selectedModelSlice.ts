import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: string = '';

const selectedModelSlice = createSlice({
  name: 'selectedModel',
  initialState,
  reducers: {
    set: (_state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { set } = selectedModelSlice.actions;

export default selectedModelSlice.reducer;
