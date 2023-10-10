import { ICar } from '~/store/car/types';

type CarBoxProps = {
  car: ICar;
  isActive: boolean;
  onClick: () => void;
};

export { CarBoxProps };
