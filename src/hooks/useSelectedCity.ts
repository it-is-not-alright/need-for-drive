import { useSelector } from 'react-redux';

import { RootState } from '../store/root';

export default function useSelectedCity(): string {
  return useSelector((state: RootState) => state.selectedCity);
}
