import { IEntity } from '~/store/types';

export type InputSelectProps = {
  maxLength: number;
  placeholder: string;
  items: IEntity[];
  selectedItem: IEntity | null;
  onSelect: (item: IEntity | null) => void;
};
