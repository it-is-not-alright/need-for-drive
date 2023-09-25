import './style.scss';

import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import React from 'react';
import { useDispatch } from 'react-redux';

import MapImage from '../../../../../assets/images/map/img-0.png';
import useSelectedCity from '../../../../../hooks/useSelectedCity';
import useSelectedPoint from '../../../../../hooks/useSelectedPoint';
import {
  setSelectedCity,
  setSelectedColor,
  setSelectedModel,
  setSelectedPoint,
} from '../../../../../store/actions';
import InputSelect from '../../../../InputSelect/InputSelect';
import { cities, points } from './constans';
import { LocationStageProps } from './types';

function LocationStage({ updateAvailableStageIndex }: LocationStageProps) {
  const dispatch: Dispatch<AnyAction> = useDispatch();

  function clear(): void {
    dispatch(setSelectedModel(''));
    dispatch(setSelectedColor(''));
    updateAvailableStageIndex();
  }

  const cityOnChange = (newValue: string): void => {
    dispatch(setSelectedCity(newValue));
    clear();
  };

  const pointOnChange = (newValue: string): void => {
    dispatch(setSelectedPoint(newValue));
    clear();
  };

  return (
    <div id="location-stage">
      <div id="location-stage__input-container">
        <p className="dark-text fw-300 ta-right">Город</p>
        <InputSelect
          placeholder="Начните вводить город ..."
          value={useSelectedCity()}
          onChange={cityOnChange}
          items={cities}
          id="city-input"
        />
        <p className="dark-text fw-300 ta-right">Пункт выдачи</p>
        <InputSelect
          placeholder="Начните вводить пункт ..."
          value={useSelectedPoint()}
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
