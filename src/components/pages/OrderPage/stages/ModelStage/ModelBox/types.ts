import { IModel } from '~/store/types';

type ModelBoxProps = {
  model: IModel;
  isActive: boolean;
  onClick: () => void;
};

export { ModelBoxProps };
