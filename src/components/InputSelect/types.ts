export type InputSelectItem<T> = {
  value: T;
  label: string;
};

export type InputSelectProps<T> = {
  maxLength: number;
  placeholder: string;
  items: InputSelectItem<T>[];
  selectedItem: InputSelectItem<T> | null;
  onSelect: (item: InputSelectItem<T> | null) => void;
};
