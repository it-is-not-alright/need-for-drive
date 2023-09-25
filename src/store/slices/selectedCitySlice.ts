import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: string = '';

const selectedCitySlice = createSlice({
  name: 'selectedCity',
  initialState,
  reducers: {
    set: (_state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { set } = selectedCitySlice.actions;

export default selectedCitySlice.reducer;
