import { RootState } from '../root';
import { City } from '../types';

const citySelector = (state: RootState): City | null => state.city;

export default citySelector;
