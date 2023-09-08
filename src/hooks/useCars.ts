import { useSelector } from 'react-redux';
import { RootState } from '../store/root';

export default function useCars() {
  const cars = useSelector((state: RootState) => state.cars);
  return cars;
}
