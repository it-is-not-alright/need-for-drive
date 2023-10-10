import { RootState } from '../root';

const colorSelector = (state: RootState): string => state.color;

export default colorSelector;
