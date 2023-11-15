type CalendarDay = {
  number: number;
  thisMonth: boolean;
};

type DateTime = {
  year: number;
  month: number;
  day: number | null;
  hours: number;
  minutes: number;
};

type DateTimePickerProps = {
  placeholder: string;
  value?: Date;
};

export { CalendarDay, DateTime, DateTimePickerProps };
