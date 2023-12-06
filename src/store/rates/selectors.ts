import { createSelector } from '@reduxjs/toolkit';

import { IRate, RequestState, RootState } from '../types';

const ratesSelector = (state: RootState): RequestState<IRate[]> => state.rates;

const filterRates = createSelector(
  [
    (state: RootState) => state.rates,
    (state: RootState) => state.orderDetails.date,
  ],
  (ratesState, date): RequestState<IRate[]> => {
    if (date === null) {
      return { ...ratesState, data: [] };
    }
    const days = date.days + (date.hours === 0 ? 0 : 1);
    const overlap = ratesState.data.filter((rate) => {
      return rate.days <= days;
    });
    return { ...ratesState, data: overlap };
  },
);

export { filterRates, ratesSelector };
