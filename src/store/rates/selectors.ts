import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../root';
import { IRate, RequestState } from '../types';

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
    const dateFrom = new Date(date.from).getTime();
    const dateTo = new Date(date.to).getTime();
    const delta =
      Math.round(Math.abs((dateFrom - dateTo) / (24 * 60 * 60 * 1000))) || 1;
    const overlap = ratesState.data.filter((rate) => {
      return rate.days <= delta;
    });
    return { ...ratesState, data: overlap };
  },
);

export { filterRates, ratesSelector };
