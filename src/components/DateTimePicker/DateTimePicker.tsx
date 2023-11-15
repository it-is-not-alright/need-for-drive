import './style.scss';

import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';

import { dateToString, numTo2CharString } from '~/format/datetime';

import Icon from '../Icon/Icon';
import { months, spinnerHours, spinnerMinutes, weekdays } from './constants';
import { CalendarDay, DateTime, DateTimePickerProps } from './types';

function getDefaultDateTime(): DateTime {
  const date = new Date();
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: null,
    hours: 0,
    minutes: 0,
  };
}

function dateToDateTime(date: Date): DateTime {
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
  };
}

function DateTimePicker({ placeholder, value = null }: DateTimePickerProps) {
  const wrapper = useRef<HTMLDivElement>();
  const [focused, setFocused] = useState<boolean>(false);
  const [dateTime, setDateTime] = useState<DateTime>(
    value ? dateToDateTime(value) : getDefaultDateTime(),
  );
  const [calendarDays, setCalendarDays] = useState<CalendarDay[]>([]);

  function getCalendarDays(): CalendarDay[] {
    const days: CalendarDay[] = [];
    const bufferDate = new Date(dateTime.year, dateTime.month, 1);
    const last: number = (bufferDate.getDay() || 7) - 1;
    bufferDate.setMonth(bufferDate.getMonth() + 1);
    bufferDate.setDate(0);
    const current: number = bufferDate.getDate();
    const next: number = 7 - ((last + current) % 7 || 7);
    bufferDate.setDate(0);
    for (let i = 1; i <= last + current + next; i += 1) {
      let number: number;
      let thisMonth: boolean = false;
      if (i <= last) {
        number = bufferDate.getDate() - last + i;
      } else if (i <= last + current) {
        number = i - last;
        thisMonth = true;
      } else {
        number = i - (last + current);
      }
      days.push({ number, thisMonth });
    }
    return days;
  }

  useEffect(() => {
    setCalendarDays(getCalendarDays());
  }, [dateTime.year, dateTime.month]);

  function handleMonthChange(isIncrease: boolean) {
    let { year, month } = dateTime;
    if (isIncrease) {
      if (dateTime.month === 11) {
        year += 1;
        month = 0;
      } else {
        month += 1;
      }
    } else if (!isIncrease) {
      if (dateTime.month === 0) {
        year -= 1;
        month = 11;
      } else {
        month -= 1;
      }
    }
    setDateTime({ ...dateTime, year, month, day: 1 });
  }

  function handleDayChange(day: number) {
    setDateTime({ ...dateTime, day });
  }

  function handleHoursChange(hours: number) {
    setDateTime({ ...dateTime, hours });
  }

  function handleMinutesChange(minutes: number) {
    setDateTime({ ...dateTime, minutes });
  }

  function handleAnyClick(event: MouseEvent) {
    const { target } = event;
    if (
      wrapper.current === null ||
      !(target instanceof Element || target instanceof SVGElement) ||
      !wrapper.current.contains(target)
    ) {
      setFocused(false);
      window.removeEventListener('click', handleAnyClick);
    }
  }

  function handleFocus() {
    setFocused(true);
    document.addEventListener('click', handleAnyClick);
  }

  function handleClearBtnClick(): void {
    setDateTime(getDefaultDateTime());
  }

  function dateTimeToString(date: DateTime): string {
    return dateToString(
      new Date(date.year, date.month, date.day, date.hours, date.minutes),
    );
  }

  return (
    <div className={classNames('date-time-picker', { focused })} ref={wrapper}>
      <div className="custom-input-wrapper">
        <input
          placeholder={placeholder}
          onFocus={handleFocus}
          value={dateTime.day ? dateTimeToString(dateTime) : ''}
          readOnly
        />
        {dateTime.day && (
          <button type="button" onClick={handleClearBtnClick}>
            <Icon name="input-cross" width={8} height={8} />
          </button>
        )}
      </div>
      <div className="date-time-picker__dialog">
        <div className="date-time-picker__dialog__calendar">
          <div className="date-time-picker__dialog__calendar-header">
            <p>{`${months[dateTime.month]} ${dateTime.year}`}</p>
            <div>
              <button type="button" onClick={() => handleMonthChange(false)}>
                <Icon name="calendar-arrow-left" width={12} height={12} />
              </button>
              <button type="button" onClick={() => handleMonthChange(true)}>
                <Icon name="calendar-arrow-right" width={12} height={12} />
              </button>
            </div>
          </div>
          <div className="date-time-picker__dialog__calendar-grid">
            {weekdays.map((it) => (
              <div key={it}>
                <p>{it}</p>
              </div>
            ))}
            {calendarDays.map((it) => (
              <button
                type="button"
                key={it.thisMonth ? it.number : it.number + 31}
                disabled={!it.thisMonth}
                className={classNames({
                  selected: it.thisMonth && dateTime.day === it.number,
                })}
                onClick={() => handleDayChange(it.number)}
              >
                {it.number}
              </button>
            ))}
          </div>
        </div>
        <div className="date-time-picker__dialog__time-spinner">
          <div>
            {spinnerHours.map((it) => (
              <button
                key={it}
                type="button"
                onClick={() => handleHoursChange(it)}
                className={classNames({
                  selected: dateTime.hours === it,
                })}
              >
                {numTo2CharString(it)}
              </button>
            ))}
          </div>
          <div>
            {spinnerMinutes.map((it) => (
              <button
                key={it}
                type="button"
                onClick={() => handleMinutesChange(it)}
                className={classNames({
                  selected: dateTime.minutes === it,
                })}
              >
                {numTo2CharString(it)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DateTimePicker;
