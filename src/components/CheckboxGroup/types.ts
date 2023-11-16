import { IEntity } from '~/store/types';

type CheckboxGroupProps = {
  items: IEntity[];
  selectedItems: IEntity[];
  onChange: (item: IEntity, checked: boolean) => void;
};

export { CheckboxGroupProps };
