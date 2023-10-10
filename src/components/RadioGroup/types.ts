import { IEntity } from '~/store/types';

export type RadioGroupProps = {
  items: IEntity[];
  selectedItem: IEntity;
  onChange: (item: IEntity) => void;
};
