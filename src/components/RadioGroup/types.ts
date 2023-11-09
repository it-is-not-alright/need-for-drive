import { IEntity } from '~/store/types';

type RadioGroupProps = {
  name: string;
  items: IEntity[];
  selectedItem: IEntity | null;
  onChange: (item: IEntity) => void;
};

export { RadioGroupProps };
