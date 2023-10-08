import { RootState } from '../root';
import { Point } from '../types';

const pointSelector = (state: RootState): Point | null => state.point;

export default pointSelector;
