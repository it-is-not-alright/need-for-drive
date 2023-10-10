import './style.scss';

import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MapImage from '~/assets/images/map/img-0.png';
import InputSelect from '~/components/InputSelect/InputSelect';
import { setCity } from '~/store/city/citySlice';
import citySelector from '~/store/city/selectors';
import { setColor } from '~/store/color/colorSlice';
import { setModel } from '~/store/model/modelSlice';
import { setPoint } from '~/store/point/pointSlice';
import pointSelector from '~/store/point/selectors';
import { RootState } from '~/store/root';

import { cities, points } from './constans';
import { LocationStageProps } from './types';

function LocationStage({ updateAvailableStageIndex }: LocationStageProps) {
  const mapState = (state: RootState) => ({
    city: citySelector(state),
    point: pointSelector(state),
  });
  const { city, point } = useSelector(mapState);
  const dispatch: Dispatch<AnyAction> = useDispatch();

  function clear(): void {
    dispatch(setModel(''));
    dispatch(setColor(''));
    updateAvailableStageIndex();
  }

  const cityOnChange = (newValue: string): void => {
    dispatch(setCity(newValue));
    clear();
  };

  const pointOnChange = (newValue: string): void => {
    dispatch(setPoint(newValue));
    clear();
  };

  return (
    <div id="location-stage">
      <div id="location-stage__input-container">
        <p className="dark-text fw-300 ta-right">Город</p>
        <InputSelect
          placeholder="Начните вводить город ..."
          value={city}
          onChange={cityOnChange}
          items={cities}
          id="city-input"
        />
        <p className="dark-text fw-300 ta-right">Пункт выдачи</p>
        <InputSelect
          placeholder="Начните вводить пункт ..."
          value={point}
          onChange={pointOnChange}
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
