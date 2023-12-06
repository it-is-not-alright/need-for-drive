import { ICategory, RequestState, RootState } from '../types';

const categoriesSelector = (state: RootState): RequestState<ICategory[]> =>
  state.categories;

export default categoriesSelector;
