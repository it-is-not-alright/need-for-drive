import { RootState } from '../root';
import { IPoint } from './types';

const pointSelector = (state: RootState): IPoint | null => state.point;

export default pointSelector;
