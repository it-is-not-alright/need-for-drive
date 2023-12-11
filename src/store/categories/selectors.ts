import { RootState } from '../root';
import { ICategory, RequestState } from '../types';

const categoriesSelector = (state: RootState): RequestState<ICategory[]> =>
  state.categories;

export default categoriesSelector;
