import './style.scss';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CheckboxGroup from '~/components/CheckboxGroup/CheckboxGroup';
import DateTimePicker from '~/components/DateTimePicker/DateTimePicker';
import RadioGroup from '~/components/RadioGroup/RadioGroup';
import orderDetailsSelector from '~/store/orderDetails/selectors';
import {
  addService,
  removeService,
  setColor,
  setDate,
  setRate,
} from '~/store/orderDetails/slice';
import { filterRates } from '~/store/rates/selectors';
import { getRates } from '~/store/rates/thunk';
import { AppDispatch } from '~/store/root';
import { IColor, IRate, IService } from '~/store/types';

import { additionalServices } from './constants';

function AdditionallyStage() {
  const { car, color, date, rate, services } =
    useSelector(orderDetailsSelector);
  const { data: rates, errorMessage: error } = useSelector(filterRates);
  const [dateFrom, setDateFrom] = useState<Date | null>(
    date ? new Date(date.from) : null,
  );
  const [dateTo, setDateTo] = useState<Date | null>(
    date ? new Date(date.to) : null,
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getRates());
  }, []);

  const handleColorChange = (newColor: IColor) => {
    dispatch(setColor(newColor));
  };

  const handleRateChange = (newRate: IRate) => {
    dispatch(setRate(newRate));
  };

  useEffect(() => {
    if (error === null) {
      return;
    }
    const errorMessage: string = 'Ошибка сервера';
    throw new Error(errorMessage);
  }, [error]);

  function handleDateRangeChange(
    newDateFrom: Date | null,
    newDateTo: Date | null,
  ) {
    if (newDateFrom === null || newDateTo === null) {
      dispatch(setDate(null));
      return;
    }
    dispatch(
      setDate({
        from: newDateFrom.toISOString().slice(0, -8),
        to: newDateTo.toISOString().slice(0, -8),
      }),
    );
  }

  const handleDateFromChange = (newDateFrom: Date | null) => {
    const from: Date | null = newDateFrom > new Date() ? newDateFrom : null;
    const to: Date | null = from < dateTo ? dateTo : null;
    setDateFrom(from);
    setDateTo(to);
    handleDateRangeChange(from, to);
  };

  const handleDateToChange = (newDateTo: Date | null) => {
    const to: Date | null = newDateTo > new Date() ? newDateTo : null;
    const from: Date | null = to === null || dateFrom < to ? dateFrom : null;
    setDateFrom(from);
    setDateTo(to);
    handleDateRangeChange(from, to);
  };

  const handleServiceChecked = (service: IService, checked: boolean) => {
    if (checked) {
      dispatch(addService(service));
    } else {
      dispatch(removeService(service));
    }
  };

  return (
    <div id="additional-stage">
      <div className="input-group">
        <p className="input-group-header">Цвет</p>
        <RadioGroup
          name="color"
          items={car.colorEntities}
          onChange={handleColorChange}
          selectedItem={color}
        />
      </div>
      <div className="input-group">
        <p className="input-group-header">Дата аренды</p>
        <div className="input-group-grid">
          <p className="fw-300 ta-right">C</p>
          <DateTimePicker
            value={dateFrom}
            onChange={(newDate) => handleDateFromChange(newDate)}
            placeholder="Введите дату и время"
          />
          <input
            type="datetime-local"
            value={dateFrom?.toISOString().slice(0, -8) || ''}
            onChange={(event) =>
              handleDateFromChange(new Date(event.target.value))
            }
          />
          <p className="fw-300 ta-right">По</p>
          <DateTimePicker
            value={dateTo}
            onChange={(newDate) => handleDateToChange(newDate)}
            placeholder="Введите дату и время"
          />
          <input
            type="datetime-local"
            value={dateTo?.toISOString().slice(0, -8) || ''}
            onChange={(event) =>
              handleDateToChange(new Date(event.target.value))
            }
          />
        </div>
      </div>
      <div className="input-group">
        <p className="input-group-header">Тариф</p>
        {rates.length !== 0 ? (
          <RadioGroup
            name="rate"
            items={rates}
            onChange={handleRateChange}
            selectedItem={rate}
            isVertical
          />
        ) : (
          <p className="input-group-header">Укажите дату аренды</p>
        )}
      </div>
      <div className="input-group">
        <p className="input-group-header">Доп услуги</p>
        <CheckboxGroup
          items={additionalServices}
          selectedItems={services}
          onChange={handleServiceChecked}
        />
      </div>
    </div>
  );
}

export default AdditionallyStage;
