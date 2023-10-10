import { RootState } from '../root';

const carSelector = (state: RootState): string => state.car;

export default carSelector;
