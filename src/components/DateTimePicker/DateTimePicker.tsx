import './style.scss';

import React from 'react';

import { weekdays } from './constants';

function DateTimePicker() {
  function getPreviousMonthDays(): number[] {
    const date = new Date();
    date.setDate(1);
    const delta: number = (date.getDay() || 7) - 1;
    const days: number[] = [];
    date.setDate(0);
    const day: number = date.getDate() - delta + 1;
    for (let i = 0; i < delta; i += 1) {
      days.push(day + i);
    }
    return days;
  }

  return (
    <div className="date-time-picker">
      <div className="date-time-picker__input-wrapper">
        <input />
      </div>
      <div className="date-time-picker__dialog">
        {weekdays.map((weekday) => (
          <p key={weekday}>{weekday}</p>
        ))}
        {getPreviousMonthDays().map((day) => (
          <p key={day}>{day}</p>
        ))}
      </div>
    </div>
  );
}

export default DateTimePicker;
