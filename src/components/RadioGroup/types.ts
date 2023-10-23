import { IEntity } from '~/store/types';

type RadioGroupProps = {
  items: IEntity[];
  selectedItem: IEntity | null;
  onChange: (item: IEntity) => void;
};

export { RadioGroupProps };
