import { RootState } from '../root';

const citySelector = (state: RootState): string => state.city;

export default citySelector;
