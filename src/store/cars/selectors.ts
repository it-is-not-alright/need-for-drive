import { createSelector } from '@reduxjs/toolkit';

import { ICar, RequestState, RootState } from '../types';

const carsSelector = (state: RootState): RequestState<ICar[]> => state.cars;

const filterCars = createSelector(
  [
    (state: RootState) => state.cars,
    (state: RootState) => state.orderDetails.category,
  ],
  (carsState, category): RequestState<ICar[]> => {
    if (category.id < 0) {
      return carsState;
    }
    const overlap = carsState.data.filter((item) => {
      return item.categoryId.id === category.id;
    });
    return { ...carsState, data: overlap };
  },
);

export { carsSelector, filterCars };
