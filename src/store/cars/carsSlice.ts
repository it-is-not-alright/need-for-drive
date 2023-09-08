import { createSlice } from '@reduxjs/toolkit';

const initialState = ['auto 1', 'auto 2', 'auto 3'];

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    add: (state, { payload: car }) => {
      state.push(car);
    },
  },
});

export const { add } = carsSlice.actions;

export default carsSlice.reducer;
