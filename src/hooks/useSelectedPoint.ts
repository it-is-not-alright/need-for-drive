import { useSelector } from 'react-redux';

import { RootState } from '../store/root';

export default function useSelectedPoint(): string {
  return useSelector((state: RootState) => state.selectedPoint);
}
