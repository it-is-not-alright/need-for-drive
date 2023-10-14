import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { pointUrl } from '../constants';
import getArray from '../getArray';
import { IPoint, RequestState } from '../types';

const get = createAsyncThunk<IPoint[], void, { rejectValue: string }>(
  'points/get',
  async (_, thunkApi) => {
    try {
      const array: IPoint[] = await getArray<IPoint>(pointUrl);
      return array.map((point: IPoint) => {
        return { ...point, label: `${point.name}, ${point.address}` };
      });
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

const initialState: RequestState<IPoint[]> = {
  data: [],
  status: null,
  errorMessage: null,
};

export const pointsSlice = createSlice({
  name: 'points',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(get.pending, (state) => {
      state.data = [];
      state.status = 'pending';
      state.errorMessage = null;
    });
    builder.addCase(get.fulfilled, (state, action: PayloadAction<IPoint[]>) => {
      state.data = action.payload;
      state.status = 'fulfilled';
      state.errorMessage = null;
    });
    builder.addCase(get.rejected, (state, action: PayloadAction<string>) => {
      state.data = [];
      state.status = 'rejected';
      state.errorMessage = action.payload;
    });
  },
});

export const pointsReducer = pointsSlice.reducer;
export const getPoints = get;
