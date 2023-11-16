import './style.scss';

import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';

import { dateToString, numTo2CharString } from '~/format/datetime';

import Icon from '../Icon/Icon';
import { months, spinnerHours, spinnerMinutes, weekdays } from './constants';
import { CalendarDay, DateTimePickerProps } from './types';

function DateTimePicker({ value, onChange, placeholder }: DateTimePickerProps) {
  const wrapper = useRef<HTMLDivElement>();
  const [focused, setFocused] = useState<boolean>(false);
  const [calendarDays, setCalendarDays] = useState<CalendarDay[]>([]);
  const date: Date = value ? new Date(value) : new Date();
  const [month, setMonth] = useState<number>(date.getMonth());
  const [year, setYear] = useState<number>(date.getFullYear());
  const day: number | null = value?.getDate() || null;

  function getCalendarDays(): CalendarDay[] {
    const days: CalendarDay[] = [];
    const bufferDate = new Date(year, month, 1);
    const last: number = (bufferDate.getDay() || 7) - 1;
    bufferDate.setMonth(bufferDate.getMonth() + 1);
    bufferDate.setDate(0);
    const current: number = bufferDate.getDate();
    const next: number = 7 - ((last + current) % 7 || 7);
    bufferDate.setDate(0);
    for (let i = 1; i <= last + current + next; i += 1) {
      let number: number;
      let enabled: boolean = false;
      if (i <= last) {
        number = bufferDate.getDate() - last + i;
      } else if (i <= last + current) {
        number = i - last;
        enabled = true;
      } else {
        number = i - (last + current);
      }
      days.push({ key: i, number, enabled });
    }
    return days;
  }

  useEffect(() => {
    setCalendarDays(getCalendarDays());
  }, [month, year]);

  function handleMonthChange(isIncrease: boolean) {
    const newDate = new Date(year, month);
    newDate.setDate(1);
    if (isIncrease) {
      newDate.setMonth(newDate.getMonth() + 1);
    } else {
      newDate.setMonth(newDate.getMonth() - 1);
    }
    setMonth(newDate.getMonth());
    setYear(newDate.getFullYear());
    onChange(null);
  }

  function handleDayChange(newDay: number) {
    const newDate = new Date(
      year,
      month,
      newDay,
      date.getHours(),
      date.getMinutes(),
    );
    onChange(newDate);
  }

  function handleHoursChange(newHours: number) {
    const newDate = new Date(date);
    newDate.setHours(newHours);
    onChange(newDate);
  }

  function handleMinutesChange(newMinutes: number) {
    const newDate = new Date(date);
    newDate.setMinutes(newMinutes);
    onChange(newDate);
  }

  function handleAnyClick(event: MouseEvent) {
    const { target } = event;
    if (
      wrapper.current === null ||
      !(target instanceof Element || target instanceof SVGElement) ||
      !wrapper.current.contains(target)
    ) {
      setFocused(false);
      document.removeEventListener('click', handleAnyClick);
    }
  }

  function handleFocus() {
    setFocused(true);
    document.addEventListener('click', handleAnyClick);
  }

  function handleClearBtnClick(): void {
    onChange(null);
  }

  return (
    <div className={classNames('date-time-picker', { focused })} ref={wrapper}>
      <div className="custom-input-wrapper">
        <input
          placeholder={placeholder}
          onFocus={handleFocus}
          value={dateToString(value)}
          readOnly
        />
        {value && (
          <button type="button" onClick={handleClearBtnClick}>
            <Icon name="input-cross" width={8} height={8} />
          </button>
        )}
      </div>
      <div className="date-time-picker__dialog">
        <div className="date-time-picker__dialog__calendar">
          <div className="date-time-picker__dialog__calendar-header">
            <p>{`${months[month]} ${year}`}</p>
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
                key={it.key}
                disabled={!it.enabled}
                className={classNames({
                  selected: it.enabled && day === it.number,
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
                  selected: value?.getHours() === it,
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
                  selected: value?.getMinutes() === it,
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
