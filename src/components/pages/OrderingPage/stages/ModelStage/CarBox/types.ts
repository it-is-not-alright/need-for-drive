import { ICar } from '~/store/types';

type CarBoxProps = {
  car: ICar;
  isActive: boolean;
  onClick: () => void;
};

export { CarBoxProps };
