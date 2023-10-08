import { RootState } from '../root';

const modelSelector = (state: RootState): string => state.model;

export default modelSelector;
