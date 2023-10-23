import { RootState } from '../root';
import { IModel, RequestState } from '../types';

const modelsSelector = (state: RootState): RequestState<IModel[]> =>
  state.models;

export default modelsSelector;
