type CalendarDay = {
  key: number;
  number: number;
  enabled: boolean;
};

type DateTimePickerProps = {
  value: Date | null;
  onChange: (newValue: Date | null) => void;
  placeholder: string;
  minValue?: Date | null;
};

export { CalendarDay, DateTimePickerProps };
