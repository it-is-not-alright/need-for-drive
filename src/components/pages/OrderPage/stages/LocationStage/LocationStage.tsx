import './style.scss';

import React from 'react';

import MapImage from '../../../../../assets/images/map/img-0.png';
import InputSelect from '../../../../InputSelect/InputSelect';
import { cities, points } from './constans';
import { LocationStageProps } from './types';

function LocationStage({ city, setCity, point, setPoint }: LocationStageProps) {
  return (
    <div id="location-stage">
      <div id="location-stage__input-container">
        <p className="dark-text fw-300 ta-right">Город</p>
        <InputSelect
          placeholder="Начните вводить город ..."
          value={city}
          setValue={setCity}
          items={cities}
          id="city-input"
        />
        <p className="dark-text fw-300 ta-right">Пункт выдачи</p>
        <InputSelect
          placeholder="Начните вводить пункт ..."
          value={point}
          setValue={setPoint}
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
