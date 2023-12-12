import { IEntity } from '~/store/types';

type InputSelectProps = {
  maxLength: number;
  placeholder: string;
  items: IEntity[];
  selectedItem: IEntity | null;
  onSelect: (item: IEntity | null) => void;
};

export { InputSelectProps };
