import { numTo2CharString } from './string';
import { DateRange, TimeInterval } from './types';

function dateToString(date: Date | null): string {
  if (date === null) {
    return '';
  }
  const day = numTo2CharString(date.getDate());
  const month = numTo2CharString(date.getMonth() + 1);
  const year = date.getFullYear();
  const hours = numTo2CharString(date.getHours());
  const minutes = numTo2CharString(date.getMinutes());
  return `${day}.${month}.${year} ${hours}:${minutes}`;
}

function dateToInputValue(date: Date | null) {
  if (date === null) {
    return '';
  }
  const bufferDate = new Date(date);
  bufferDate.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  return bufferDate.toISOString().slice(0, -8);
}

function toTimeInterval(range: DateRange): TimeInterval {
  if (range === null) {
    return { days: 0, hours: 0 };
  }
  let delta = Math.abs(range.to - range.from) / 1000;
  const days = Math.floor(delta / 86400);
  delta -= days * 86400;
  const hours = Math.ceil(delta / 3600) % 24;
  return { days, hours };
}

export { dateToInputValue, dateToString, toTimeInterval };
