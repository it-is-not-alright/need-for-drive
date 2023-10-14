import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { cityUrl } from '../constants';
import getArray from '../getArray';
import { ICity, RequestState } from '../types';

const get = createAsyncThunk<ICity[], void, { rejectValue: string }>(
  'cities/get',
  async (_, thunkApi) => {
    try {
      const array: ICity[] = await getArray<ICity>(cityUrl);
      return array.map((city: ICity) => {
        return { ...city, label: city.name };
      });
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

const initialState: RequestState<ICity[]> = {
  data: [],
  status: null,
  errorMessage: null,
};

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(get.pending, (state) => {
      state.data = [];
      state.status = 'pending';
      state.errorMessage = null;
    });
    builder.addCase(get.fulfilled, (state, action: PayloadAction<ICity[]>) => {
      state.data = action.payload;
      state.status = 'pending';
      state.errorMessage = null;
    });
    builder.addCase(get.rejected, (state, action: PayloadAction<string>) => {
      state.data = [];
      state.status = 'rejected';
      state.errorMessage = action.payload;
    });
  },
});

export const citiesReducer = citiesSlice.reducer;
export const getCities = get;
