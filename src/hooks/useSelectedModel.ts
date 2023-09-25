import { useSelector } from 'react-redux';

import { RootState } from '../store/root';

export default function useSelectedModel(): string {
  return useSelector((state: RootState) => state.selectedModel);
}
