import './style.scss';

import React from 'react';

import CheckboxGroup from '~/components/CheckboxGroup/CheckboxGroup';
import DateTimePicker from '~/components/DateTimePicker/DateTimePicker';
import RadioGroup from '~/components/RadioGroup/RadioGroup';

import { additionalServices, colors, rates } from './constants';

function AdditionallyStage() {
  return (
    <div id="additional-stage">
      <div className="input-group">
        <p className="input-group-header">Цвет</p>
        <RadioGroup
          name="color"
          items={colors}
          onChange={() => {}}
          selectedItem={colors[2]}
        />
      </div>
      <div className="input-group">
        <p className="input-group-header">Дата аренды</p>
        <div className="input-group-grid">
          <p className="fw-300 ta-right">C</p>
          <DateTimePicker placeholder="Введите дату и время" />
          <div className="custom-input-wrapper">
            <input type="datetime-local" />
          </div>
          <p className="fw-300 ta-right">По</p>
          <DateTimePicker placeholder="Введите дату и время" />
          <div className="custom-input-wrapper">
            <input type="datetime-local" />
          </div>
        </div>
      </div>
      <div className="input-group">
        <p className="input-group-header">Тариф</p>
        <RadioGroup
          name="rate"
          items={rates}
          onChange={() => {}}
          selectedItem={rates[1]}
          isVertical
        />
      </div>
      <div className="input-group">
        <p className="input-group-header">Доп услуги</p>
        <CheckboxGroup items={additionalServices} selectedItems={[]} />
      </div>
    </div>
  );
}

export default AdditionallyStage;
