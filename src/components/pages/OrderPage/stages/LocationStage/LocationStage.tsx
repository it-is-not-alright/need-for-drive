import './style.scss';

import { AnyAction } from '@reduxjs/toolkit';
import React, { Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MapImage from '~/assets/images/map/img-0.png';
import InputSelect from '~/components/InputSelect/InputSelect';
import { setCity } from '~/store/city/citySlice';
import citySelector from '~/store/city/selectors';
import { setPoint } from '~/store/point/pointSlice';
import pointSelector from '~/store/point/selectors';
import { RootState } from '~/store/root';

import { cities, points } from './constans';

function LocationStage() {
  const mapState = (state: RootState) => ({
    city: citySelector(state),
    point: pointSelector(state),
  });
  const { city, point } = useSelector(mapState);
  const dispatch: Dispatch<AnyAction> = useDispatch();

  const cityInputOnChange = (newValue: string): void => {
    dispatch(setCity(newValue));
  };

  const pointInputOnChange = (newValue: string): void => {
    dispatch(setPoint(newValue));
  };

  return (
    <div id="location-stage">
      <div id="location-stage__input-container">
        <p className="dark-text fw-300 ta-right">Город</p>
        <InputSelect
          placeholder="Начните вводить город ..."
          value={city}
          onChange={cityInputOnChange}
          items={cities}
          id="city-input"
        />
        <p className="dark-text fw-300 ta-right">Пункт выдачи</p>
        <InputSelect
          placeholder="Начните вводить пункт ..."
          value={point}
          onChange={pointInputOnChange}
          items={points}
          id="point-input"
        />
      </div>
      <p className="dark-text fw-300">Выбрать на карте:</p>
      <div id="location-stage__map">
        <img src={MapImage} alt="map" />
      </div>
    </div>
  );
}

export default LocationStage;
