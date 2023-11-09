import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../root';
import { IModel, RequestState } from '../types';

const modelsSelector = (state: RootState): RequestState<IModel[]> =>
  state.models;

const filterModel = createSelector(
  [
    (state: RootState) => state.models,
    (state: RootState) => state.orderDetails.category,
  ],
  (modelsState, category): RequestState<IModel[]> => {
    if (category.id < 0) {
      return modelsState;
    }
    const overlap = modelsState.data.filter((item) => {
      return item.categoryId.id === category.id;
    });
    return { ...modelsState, data: overlap };
  },
);

export { filterModel, modelsSelector };
