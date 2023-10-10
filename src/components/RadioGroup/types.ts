import { IEntity } from '~/store/types';

type RadioGroupProps = {
  items: IEntity[];
  selectedItem: IEntity;
  onChange: (item: IEntity) => void;
};

export { RadioGroupProps };
