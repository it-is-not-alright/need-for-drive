import { useSelector } from 'react-redux';

import { RootState } from '../store/root';

export default function useSelectedColor(): string {
  return useSelector((state: RootState) => state.selectedColor);
}
